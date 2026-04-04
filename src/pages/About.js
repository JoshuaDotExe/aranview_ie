import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const bgRef = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (bgRef.current) observer.observe(bgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='w-full min-h-full relative'>

      {/* Blurred background image — lazily loaded via IntersectionObserver */}
      <div
        ref={bgRef}
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: bgLoaded ? `url(${process.env.PUBLIC_URL}/GarrihysEdited-09.jpg)` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Solid white text column */}
      <div className='relative z-10 max-w-3xl mx-auto bg-white px-10 py-12 space-y-6 text-gray-700 text-lg leading-relaxed min-h-full'>

        <h1 className='text-4xl font-bold text-gray-800 mb-4'>A bit about us!</h1>

        <p>
          Garrihy&apos;s Aran View Service Station is a longstanding family-run business in Doolin since the
          1960&apos;s. With a team led by Donie and Breeda, their children Macdara, Eoghan, Ronan, Rian and
          Siofra Garrihy, they take pride in making every customer feel welcome.
        </p>

        <p>
          Cathy, Amy, Anne, and Niamh form a dedicated team committed to providing exceptional service.
        </p>

        <p>
          Donie and Breeda, after over 20 years in the fish business and 20 years in the ferry business, are back
          at the helm of Aran View Service Station. While being busy in the local football &amp; soccer teams
          meeting the local community, being back in the shop adds to its integral role in the community. Donie
          embodies a &ldquo;Glass is always half full&rdquo; attitude and, along with the team at Aran View
          Service Station, goes above and beyond in providing exceptional customer service to both the local
          community and visitors to Doolin.
        </p>

        <p>
          Aran View Service Station offers a delightful selection of home-baked goods sourced from Val&apos;s
          Bakery in the Burren, complemented by a range of hot and cold deli items. You will be spoiled for
          choice with Val&apos;s scones, wheaten and soda bread, to name a few of the home-baked goods.
        </p>

        <p>
          Aran View Service Station is the best stop in Doolin for fuel, with views unmatched while you refuel.
        </p>

        <p>
          Be sure to drop in to Aran View Service Station, where friendly service and quality products await you
          on your Doolin adventure.
        </p>



      </div>
    </div>
  )
}

export default About
