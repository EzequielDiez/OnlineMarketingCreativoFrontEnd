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
        <div className="min-h-screen bg-[#F0E6DC] pt-56">
            <div className="max-w-[1130px] mx-auto">
                <img 
                    src={contactoImage} 
                    alt="Contacto" 
                    className="w-full h-[629px] object-cover"
                />
            </div>
            
            <form onSubmit={handleSubmit} className="py-20 px-8 text-3xl md:text-4xl lg:text-7xl font-light space-y-6 w-full max-w-7xl mx-auto">
                <p>Hola!</p>
                <p className="flex items-center">
                    Me llamo 
                    <input 
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-16 bg-transparent focus:outline-none w-[50%] text-4xl"
                        required
                    />
                </p>
                <p className="flex items-center">
                    mi mail es 
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-16 bg-transparent focus:outline-none w-[50%] text-4xl"
                        required
                    />
                </p>
                <p className="flex items-center">
                    mi número es 
                    <input 
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-16 bg-transparent focus:outline-none w-[50%] text-4xl"
                        required
                    />
                </p>
                <p className="flex items-center">
                    vivo en 
                    <input 
                        type="text"
                        name="ubicacion"
                        value={formData.ubicacion}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-16 bg-transparent focus:outline-none w-[50%] text-4xl"
                        required
                    />
                </p>
                <p className="font-bold">y me gustaría llevar mi</p>
                <p className="font-bold">marca a otro nivel :)</p>
                
                <div className="flex justify-center">
                    <button 
                        type="submit"
                        className="mt-10 px-16 py-4 text-2xl bg-transparent border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 font-light tracking-wider"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contacto; 