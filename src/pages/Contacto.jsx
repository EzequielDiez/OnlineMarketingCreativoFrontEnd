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
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Datos del formulario:', formData);
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
            
            <form onSubmit={handleSubmit} className="py-20 px-8 text-3xl md:text-4xl lg:text-5xl font-light space-y-6 w-full">
                <p>Hola!</p>
                <p>
                    Me llamo 
                    <input 
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-4 bg-transparent focus:outline-none w-[60%]"
                        required
                    />
                </p>
                <p>
                    mi mail es 
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-4 bg-transparent focus:outline-none w-[60%]"
                        required
                    />
                </p>
                <p>
                    mi número es 
                    <input 
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-4 bg-transparent focus:outline-none w-[60%]"
                        required
                    />
                </p>
                <p>
                    vivo en 
                    <input 
                        type="text"
                        name="ubicacion"
                        value={formData.ubicacion}
                        onChange={handleChange}
                        className="border-b-2 border-black ml-4 bg-transparent focus:outline-none w-[60%]"
                        required
                    />
                </p>
                <p>y me gustaría llevar mi</p>
                <p>marca a otro nivel :)</p>
                
                <button 
                    type="submit"
                    className="mt-10 px-8 py-4 text-xl bg-black text-white rounded-full hover:bg-opacity-90 transition-all"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contacto; 