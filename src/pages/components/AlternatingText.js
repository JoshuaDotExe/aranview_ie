import React from 'react';

const AlternatingText = ({ content }) => {

  var moreButton = (text, link, download) => {
    return <div className='px-3 pt-2'>
      <a href={link} target="_blank" rel="noopener noreferrer" download={download ? "" : undefined}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-sm md:text-base">
          {text}
        </button>
      </a>
    </div>
  }

  var titleAndPara = (item) => {
    var buttons = []
    item.buttons.forEach((bttn) => (
      buttons.push(moreButton(bttn.text, bttn.link, bttn.download))
    ))
    return <div className='flex flex-col w-full md:w-1/2'>
      <b className='text-lg md:text-xl'>{item.title}</b>
      <p className='self-center pt-3 md:pt-5 text-sm md:text-base'>{item.text}</p>
      <div className='flex flex-row flex-wrap justify-center mt-2'>
        {buttons}
      </div>
    </div>
  }

  const mobileBlock = (item) => (
    <div className='flex flex-col items-center text-center gap-3'>
      <img className='max-w-[170px] md:max-w-[200px]' src={item.image} alt={item.title} />
      <b className='text-lg'>{item.title}</b>
      <p className='text-sm md:text-base'>{item.text}</p>
      <div className='flex flex-row flex-wrap justify-center'>
        {item.buttons.map((bttn, idx) => (
          <div key={`${item.title}-${idx}`}>
            {moreButton(bttn.text, bttn.link, bttn.download)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className='flex flex-col md:hidden gap-8 px-4 py-6'>
        {content.map((item, i) => (
          <div key={`mobile-${i}`} className='w-full'>
            {mobileBlock(item)}
          </div>
        ))}
      </div>

      <div className='hidden md:flex md:flex-col'>
        {content.map((item, i) => (
          <div key={`desktop-${i}`} className='w-full flex flex-row items-center justify-center py-6 md:py-8 gap-6 px-4 md:px-8 max-w-5xl mx-auto'>
            {i % 2 === 0 && titleAndPara(item)}
            <img
              className='self-center max-w-[160px] md:max-w-[220px] md:mx-6'
              src={item.image}
              alt={item.title}
            />
            {i % 2 !== 0 && titleAndPara(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlternatingText;
