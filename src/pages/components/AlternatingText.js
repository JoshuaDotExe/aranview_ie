import React from 'react';



const AlternatingText = ({ content }) => {
  
  var moreButton = (text, link) => {
    console.log(text)
    console.log(link)
    return <div className='px-5 pt-2'>
      <a href={link}>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          {text}
        </button>
      </a>
    </div>
    
    
  }

  var titleAndPara = (item) => {
    var buttons = []
    item.buttons.forEach((bttn) => (
      buttons.push(moreButton(bttn.text, bttn.link)) 
    ))
    return <div className='flex flex-col w-1/3'>
      <b>{item.title}</b>
      <p className='self-center pt-5'>{item.text}</p>
      <div className='flex flex-row justify-center'>
        {buttons}
      </div>
    </div>
  }
  
  return (
    <div className="flex flex-col">
      {content.map((item, i) => (
        <div className='flex justify-center flex-row py-5'>
          {i % 2 === 0 && titleAndPara(item)}
          <img className='self-center px-5' src={item.image} alt="default pic" />
          {i % 2 !== 0 && titleAndPara(item)}
        </div>
      ))}
    </div>
  );
};

export default AlternatingText;