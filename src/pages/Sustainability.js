import React from 'react'
import AlternatingText from './components/AlternatingText'

const Sustainability = () => {

    const content = [
        {
          title: "Leave No Trace",
          text: "We are committed to following the Leave No Trace principles to minimize our environmental impact and promote sustainable practices. Our efforts to reduce our environmental impact are outlined in our environmental policy. The staff and management of the Doolin Pantry are committed to our Environmental Policy and Plan.  This plan aims to reduce our carbon footprint by reducing our water and energy consumption and reducing our waste production and increase our level of recycling further, without impacting on the enjoyment of our customers.",
          image: process.env.PUBLIC_URL + "LNT_Logo.png",
          buttons: [
            {
              text: "Our Certification",
              link: "https://drive.google.com/file/d/1K3-4Enm5hpBqm26yfDxzBA5r25uE0oe0/view?usp=sharing"
            },
            {
              text: "Our Eco Policy",
              link: "https://drive.google.com/file/d/15EjObicEbNQgbsN7Cz3djPGARuCipzKG/view?usp=sharing"
            },
            {
              text: "Leave No Trace Ireland",
              link: "https://www.leavenotraceireland.org/education/education-introduction/"
            }
          ]
        },
        {
          title: "Our Local Area and Transport",
          text: "There are a number of public transport options available to navigate the area. Bus Eireann's 350 route passes through a number of towns along the Co. Clare coastline going from Ennis to Galway, including our hometown Doolin! Doolin is situated on the Wild Atlantic Way, boasting some of the most breathtaking scenery in Ireland and with a colourful and welcoming village ready to host you during your stay.",
          image: process.env.PUBLIC_URL + "/Doolin_Logo.jpg",
          buttons: [
            {
                text: "Transport Options",
                link: "https://www.burrengeopark.ie/discover-explore/transport-options/"
            },
            {
              text: "Doolin",
              link: "https://doolin.ie/"
            },
          ]
        },
      ];

  return (
    <div className='grid p-4 text-center h-full content-center'>
      <AlternatingText content={content}></AlternatingText>
    </div>
  )
}

export default Sustainability