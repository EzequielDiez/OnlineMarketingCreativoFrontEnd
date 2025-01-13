import { useEffect, useRef } from 'react';
import coffeeCup from '../assets/images/coffee-cup.png';

function StorySection({
  image,
  align = 'right',
  sectionId,
  title = 'Título de la Historia',
  description = 'Aquí puedes colocar el texto que describe esta parte de tu historia.'
}) {
  return (
    <div
      id={sectionId}
      className="h-screen w-full bg-[#F0E6DC]"
    >
      <div className={`max-w-7xl mx-auto px-4 w-full h-full flex 
                ${align === 'right' ? 'flex-row' : 'flex-row-reverse'} 
                items-center gap-8`}
      >
        <div className="w-1/2 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>

        <div className="w-1/2 text-gray-800">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default StorySection; 