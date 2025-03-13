import React, { useState } from 'react';
import contactoImage from '../assets/images/imagen-contacto.webp';

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
        <div className="opacity-0 animate-fadeIn">
            <div className="min-h-screen bg-[#fff]">
                <div className="h-[40vh] xs:h-[45vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] xl:h-screen flex items-center justify-center">
                    <div className="w-full mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-20">
                        <img
                            src={contactoImage}
                            alt="Contacto"
                            className="w-auto h-auto max-w-[90vw] max-h-[100vh] xs:max-w-[90vw] xs:max-h-[90vh] sm:max-w-[90vw] sm:max-h-[90vh] md:max-w-[90vw] md:max-h-[90vh] lg:max-w-[80vw] lg:max-h-[80vh] xl:max-w-[85vw] xl:max-h-[85vh] 2xl:max-w-[80vw] 2xl:max-h-[70vh] object-contain mx-auto mt-10 xs:mt-28 sm:mt-24 md:mt-28 lg:mt-30 xl:mt-6 2xl:mt-6"
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <form onSubmit={handleSubmit} className="py-8 xs:py-16 sm:py-16 md:py-28 lg:py-20 xl:py-12 2xl:py-24 px-4 xs:pl-16 sm:pl-24 md:pl-20 lg:pl-40 xl:pl-40 2xl:pl-40 text-base xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-6 w-full xs:w-[90%] sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%]">
                        <p>Hola!</p>
                        <p className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-0">
                            <span>Me llamo</span>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
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
                                className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
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
                                className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
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
                                className="border-b-2 border-black xs:ml-3 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 2xl:ml-16 bg-transparent focus:outline-none w-full xs:w-[60%] sm:w-[55%] md:w-[50%] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
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
                                text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 
                                bg-transparent border border-black text-black rounded-full 
                                hover:bg-black hover:text-white transition-all duration-300 
                                font-light tracking-wider"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto; 