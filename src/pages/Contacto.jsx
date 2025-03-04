import React, { useState } from 'react';
import contactoImage from '../assets/images/contacto.png';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        ubicacion: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Número fijo de WhatsApp (5491124822378)
        const phoneNumber = '5491124822378';
        
        // Crear el mensaje con los datos del formulario
        const message = `Nuevo mensaje de contacto:\n\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nUbicación: ${formData.ubicacion}`;
        
        // Codificar el mensaje para la URL
        const encodedMessage = encodeURIComponent(message);
        
        // Crear la URL de WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
        
        // Intentar abrir WhatsApp
        window.location.href = whatsappUrl;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-[#F0E6DC] pt-16 xs:pt-20 sm:pt-28 md:pt-32 lg:pt-44 xl:pt-56 2xl:pt-64">
            <div className="max-w-[1130px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                <div className="relative w-full aspect-[16/9] xs:aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] lg:aspect-[16/9] xl:aspect-[16/8] 2xl:aspect-[16/7]">
                    <img 
                        src={contactoImage} 
                        alt="Contacto" 
                        className="absolute inset-0 w-full h-full object-contain xs:object-cover"
                    />
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-18 xl:py-20 2xl:py-24 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 2xl:space-y-9 w-full max-w-7xl mx-auto">
                <p>Hola!</p>
                <p className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-0">
                    <span>Me llamo</span>
                    <input 
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                        required
                    />
                </p>
                <p className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-0">
                    <span>mi mail es</span>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                        required
                    />
                </p>
                <p className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-0">
                    <span>mi número es</span>
                    <input 
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                        required
                    />
                </p>
                <p className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-0">
                    <span>vivo en</span>
                    <input 
                        type="text"
                        name="ubicacion"
                        value={formData.ubicacion}
                        onChange={handleChange}
                        className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                        required
                    />
                </p>
                <p className="font-bold">y me gustaría llevar mi</p>
                <p className="font-bold">marca a otro nivel :)</p>
                
                <div className="flex justify-center">
                    <button 
                        type="submit"
                        className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12 
                        px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 
                        py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-4.5 2xl:py-5 
                        text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                        bg-transparent border border-black text-black rounded-full 
                        hover:bg-black hover:text-white transition-all duration-300 
                        font-light tracking-wider"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contacto; 