import React from 'react'
import AlternatingText from './components/AlternatingText'

const Geopark = () => {

    const content = [
        {
          title: "Burren Ecotourism Network",
          text: "We are proud members of the Burren Ecotourism Network, committed to the promotion of responsible tourism that conserves the environment and improves the well-being of local people. Formally established in 2011, the Burren Ecotourism Network (the B.E.N.) is a local membership organisation embedded in a sustainable tourism ethos.",
          image: process.env.PUBLIC_URL + "/BEN_Logo.jpg",
          buttons: [
            {
              text: "About BEN",
              link: process.env.PUBLIC_URL + "/B_E_N__Information_for_Web.pdf",
              download: true
            }
          ]
        },
        {
          title: "Ecotourism & our UNESCO Geopark",
          text: "We work together with BEN and our local community to to promote ‘The Burren & Cliffs of Moher UNESCO Global Geopark’ as a leading sustainable visitor destination, celebrated for high standards in visitor experience, conservation & learning.",
          image: process.env.PUBLIC_URL + "/Geopark_Logo.jpg",
          buttons: [
            {
              text: "Burren Geopark",
              link: "https://www.burrengeopark.ie/"
            },
            {
              text: "Cliffs of Moher",
              link: "https://www.cliffsofmoher.ie/"
            }
          ]
        },
      ];

  return (
    <div className='grid h-full p-4 text-center content-center'>
      <AlternatingText content={content}></AlternatingText>
    </div>
  )
}

export default Geopark