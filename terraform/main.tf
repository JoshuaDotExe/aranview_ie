provider "aws" {
  region = "eu-west-1"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

resource "aws_acm_certificate" "site" {
  provider                  = aws.us_east_1
  domain_name               = "aranview.ie"
  subject_alternative_names = ["www.aranview.ie"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

output "acm_validation_records" {
  value       = aws_acm_certificate.site.domain_validation_options
  description = "Add these CNAME records to your DNS provider to validate the ACM certificate"
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "aranview-ie-website-2026"
}

resource "aws_s3_object" "website_files" {
  for_each = fileset("${path.module}/../build", "**/*")
  
  bucket       = aws_s3_bucket.website_bucket.id
  key          = each.value
  source       = "${path.module}/../build/${each.value}"
  etag         = filemd5("${path.module}/../build/${each.value}")
  content_type = lookup({
    "html" = "text/html"
    "css"  = "text/css"
    "js"   = "application/javascript"
    "json" = "application/json"
    "png"  = "image/png"
    "jpg"  = "image/jpeg"
    "jpeg" = "image/jpeg"
    "gif"  = "image/gif"
    "svg"  = "image/svg+xml"
    "ico"  = "image/x-icon"
    "woff" = "font/woff"
    "woff2" = "font/woff2"
    "ttf"  = "font/ttf"
    "eot"  = "application/vnd.ms-fontobject"
    "pdf"  = "application/pdf"
    "docx" = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  }, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")
}

resource "aws_s3_account_public_access_block" "website_bucket" {
  block_public_acls   = true
  block_public_policy = true
}

resource "aws_s3_bucket_public_access_block" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "aranview-s3-oac"
  description                       = "OAC for Aran View S3 bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_s3_bucket_policy" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id

  depends_on = [
    aws_s3_account_public_access_block.website_bucket,
    aws_s3_bucket_public_access_block.website_bucket
  ]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontOAC"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.website_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.site.arn
          }
        }
      }
    ]
  })
}

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Aran View website"
  default_root_object = "index.html"
  # aliases             = ["aranview.ie", "www.aranview.ie"]  # re-enable once CNAME conflict is resolved

  origin {
    domain_name              = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id                = "aranview-s3-website"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "aranview-s3-website"

    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn      = aws_acm_certificate.site.arn  # re-enable with aliases
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

output "cloudfront_domain" {
  value       = aws_cloudfront_distribution.site.domain_name
  description = "CloudFront distribution domain — create a CNAME record pointing your domain to this value"
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.site.id
  description = "CloudFront distribution ID (useful for cache invalidation)"
}