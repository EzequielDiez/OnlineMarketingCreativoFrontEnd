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
      className="min-h-screen w-full bg-[#DBD0C6] px-4 md:px-8 pt-[5vh] md:pt-0 
        flex items-center"
    >
      <div className={`max-w-7xl mx-auto w-full
        flex flex-col md:flex-row 
        ${align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} 
        items-center gap-8 py-8 md:py-0`}
      >
        {/* Imagen */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] md:aspect-auto w-full h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover md:object-contain rounded-2xl 
                shadow-[0_20px_50px_rgba(0,0,0,0.2)] 
                transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-6 text-center md:text-left">
          <h2 className="font-perfect text-4xl md:text-5xl lg:text-6xl">{title}</h2>
          <p className="font-acumin text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StorySection; 