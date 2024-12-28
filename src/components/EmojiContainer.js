import React from 'react';
import SingleEmoji from './SingleEmoji';

function EmojiContainer({list}) {
  return (
    <div className='bg-primary text-white text-center fs-3 mb-4   '>
      
      {list.map((singleEmoji, idx) => (
        <div key={idx} >

          <p className='shadow p-2 me-2 mb-3 border-bottom'>{singleEmoji.description} {singleEmoji.emoji}</p>
          {/* <span >{singleEmoji.emoji}</span> */}
        </div>
      ))}
    </div>
    
  )
}

export default EmojiContainer;