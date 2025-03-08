import { useEffect, useRef } from 'react';
import coffeeCup from '../assets/images/coffee-cup.png';
import { motion } from 'framer-motion';

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
      className="min-h-screen w-full bg-[#fff] px-4 md:px-8 pt-[5vh] md:pt-0 
        flex items-center relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-custom-beige to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-custom-beige to-transparent rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`max-w-7xl mx-auto w-full
          flex flex-col md:flex-row 
          ${align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} 
          items-center gap-8 py-8 md:py-0`}
      >
        {/* Imagen */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="aspect-[4/3] md:aspect-auto w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-custom-beige to-transparent rounded-2xl transform -rotate-2 scale-[1.02]" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover md:object-contain rounded-2xl 
                shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]
                relative z-10"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Contenido de texto */}
        <motion.div 
          className="w-full md:w-1/2 text-gray-800 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: align === 'right' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Advercase'] font-bold text-4xl md:text-5xl lg:text-6xl relative inline-block group">
            {title}
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-custom-beige to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </h2>
          <p className="font-['Archivo'] font-medium text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
            {description}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-custom-beige to-transparent rounded-full mx-auto md:mx-0 transform origin-left scale-x-0 animate-scaleIn" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default StorySection; 