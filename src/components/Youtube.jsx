import React from 'react';

const Youtube = () => {
  return (

    <div className='object-center'>
        <iframe className='w-full aspect-video' 
        // src="https://www.youtube.com/embed/RDL3KqHSjwE" 
        src="https://www.youtube.com/embed/Qfrb2Hek7G8"
        title='Youtube video' allowFullScreen>


        </iframe>

    </div>
  );
};

export default Youtube;


// <iframe width="560" height="315" 
// src="https://www.youtube.com/embed/RDL3KqHSjwE"
//  title="YouTube video player" frameborder="0" 
//  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen></iframe>