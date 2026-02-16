import React from 'react'

const Contact = () => {
  return (
    <div className='p-4 text-center w-full'>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-700">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-xl">Thank you for visiting! We hope that you have found what you needed on our website. If not, please feel free to contact us using any of the methods below!</p>
            <div className="space-y-8">
              <div className='flex flex-row justify-center'>
                <div className="block mb-2 text-m font-medium text-gray-700"><b>Our Email : </b></div>
                <div className="block pl-5 mb-2 text-m font-medium text-gray-700">aranviewweb@gmail.com</div>
              </div>
              <div className='flex flex-row justify-center'>
                <div className="block mb-2 text-m font-medium text-gray-700"><b>Phone number : </b></div>
                <div className="block pl-5 mb-2 text-m font-medium text-gray-700">(065) 707 4850</div>
              </div>
            </div>

            {/* Google Maps Location */}
            <div className="mt-12">
              <h3 className="mb-4 text-2xl font-bold text-center text-gray-700">Our Location</h3>
              <div className="w-4/5 mx-auto h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13193.386275215127!2d-9.357283995073443!3d53.00913721425223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b076946f53ea5%3A0xa838c017dc11d167!2sGarrihy&#39;s%20Aran%20View%20Filling%20Station!5e0!3m2!1sen!2sie!4v1770055988742!5m2!1sen!2sie" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Garrihy's Aran View Filling Station Location"
                ></iframe>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
