import React from 'react'
import AlternatingText from './components/AlternatingText'

const About = () => {

  const content = [
    {
      title: "Refill.ie Initiative",
      text: "Refill Ireland is an environmental project to make Irish towns and cities tap water refill friendly for everyone while on the go.",
      image: "https://via.placeholder.com/150",
      buttons: []
    },
    {
      title: "Refill.ie Initiative",
      text: "Refill Ireland is an environmental project to make Irish towns and cities tap water refill friendly for everyone while on the go.",
      image: "https://via.placeholder.com/150",
      buttons: []
    },
  ];

  return (
    <div className='grid p-4 text-center h-full content-center'>
      <AlternatingText content={content}></AlternatingText>
    </div>
  )
}

export default About
