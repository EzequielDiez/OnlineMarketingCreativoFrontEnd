import React, { useState } from 'react';
import buttonContactanos from '../assets/images/button-contactanos.png';

function Portfolio() {
    const [activeTab, setActiveTab] = useState(null);

    const tabs = [
        { id: 'Diseño', color: 'bg-white' },
        { id: 'Web', color: 'bg-[#B8D8E8]' },
        { id: 'RRSS', color: 'bg-[#E8C4A9]' },
        { id: 'Photo', color: 'bg-gray-200' }
    ];

    const projects = {
        Photo: [
            {
                embedUrl: "https://www.behance.net/embed/project/110094931",
                title: "Proyecto Fotografía 1"
            },
            // ... más proyectos de fotografía
        ],
        RRSS: [
            {
                embedUrl: "https://www.behance.net/embed/project/OTRO-ID",
                title: "Proyecto RRSS 1"
            },
            // ... más proyectos de RRSS
        ],
        Web: [
            {
                embedUrl: "https://www.behance.net/embed/project/OTRO-ID",
                title: "Proyecto Web 1"
            },
            // ... más proyectos web
        ],
        Diseño: [
            {
                embedUrl: "https://www.behance.net/embed/project/OTRO-ID",
                title: "Proyecto Diseño 1"
            },
            // ... más proyectos de diseño
        ],
    };

    return (
        <div className="bg-[#DBD0C6] min-h-screen pt-28 pb-20">
            {/* Encabezado */}
            <div className="container mx-auto px-4 mb-24">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-acumin text-center mb-8">
                    PORTFOLIO
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-center font-acumin max-w-4xl mx-auto mb-6">
                    Cada marca tiene una historia que contar, y nosotros nos encargamos de darle vida.
                </p>

                <p className="text-lg sm:text-xl md:text-2xl text-center font-acumin max-w-4xl mx-auto">
                    Explorá algunos de nuestros proyectos y descubrí cómo transformamos ideas en estrategias, creatividad en impacto y contenido en resultados.
                </p>
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Contenedor base con las pestañas y contenido */}
                <div className="relative pt-12 min-h-[500px]">
                    {/* Capa negra que se muestra cuando no hay pestaña activa */}
                    <div
                        className={`
                            absolute left-0 w-full h-[calc(100%-48px)]
                            bg-black rounded-lg 
                            transition-all duration-300
                            z-20
                            ${activeTab ? 'top-12 translate-y-[23rem]' : 'top-0'}
                        `}
                    />

                    {/* Pestañas */}
                    {tabs.map((tab, index) => (
                        <div key={tab.id}>
                            <button
                                onClick={() => setActiveTab(tab.id === activeTab ? null : tab.id)}
                                className={`
                                    absolute px-12 py-3
                                    ${tab.color}
                                    rounded-t-lg
                                    hover:opacity-100
                                    transition-all duration-300
                                    top-0 z-30
                                    ${activeTab === tab.id
                                        ? 'font-bold translate-y-[-100%]'
                                        : activeTab
                                            ? 'opacity-90 translate-y-[23rem]'
                                            : 'opacity-90 translate-y-[-100%]'}
                                `}
                                style={{
                                    left: `${index * 25}%`,
                                    width: '25%'
                                }}
                            >
                                {tab.id}
                            </button>
                            {/* Contenido de la carpeta */}
                            <div className={`
                                ${tab.color}
                                absolute top-0 left-0 w-full
                                min-h-[500px] rounded-lg
                                transition-all duration-300
                                z-10
                                opacity-0 pointer-events-none
                                ${activeTab === tab.id ? 'opacity-100 pointer-events-auto' : ''}
                            `}>
                                <div className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {projects[tab.id].map((project, idx) => (
                                            <div key={idx} className="w-full">
                                                <iframe
                                                    src={`${project.embedUrl}?ilo0=1`}
                                                    height="316"
                                                    width="100%"
                                                    allowFullScreen
                                                    loading="lazy"
                                                    frameBorder="0"
                                                    allow="clipboard-write"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    title={project.title}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sección de contacto */}
            <div className="container mx-auto px-4 py-16 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-acumin mb-8">
                    ¿Listo para crear algo increíble juntos?
                </p>
                <div className="flex justify-center">
                    <img
                        src={buttonContactanos}
                        alt="Contáctanos"
                        className="w-[250px] sm:w-[300px] md:w-[350px] cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio; 