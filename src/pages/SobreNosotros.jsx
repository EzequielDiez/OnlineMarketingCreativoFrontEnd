import React from "react";
import feliImage from "../assets/images/felicitas.png";
import nanoImage from "../assets/images/ezequiel.png";
import nachoImage from "../assets/images/ignacio.png";
import gastiImage from "../assets/images/gaston.png";
import luluImage from "../assets/images/lourdes.png";
import agusImage from "../assets/images/agustin.png";
import ayluImage from "../assets/images/aylen.png";


function SobreNosotros() {
    return (
        <>
            <div className="bg-[#F0E6DC] min-h-screen flex items-center justify-center px-4 py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-acumin mb-8 md:mb-20">
                        ¿QUIÉNES SOMOS?
                    </h1>
                    <div className="max-w-7xl mx-auto px-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-acumin mb-6 md:mb-12">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social media management, hasta análisis digital, fotografía y videografía. Cada miembro de nuestro equipo aporta su conocimiento y habilidades únicas para ofrecer resultados excepcionales.
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-acumin">
                            Con creatividad, experiencia y dedicación, nos especializamos en brindar soluciones integrales para destacar tu marca en un mundo cada vez más digital.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#F0E6DC]">
                <div className="relative">
                    <div className="absolute top-[50%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-acumin">FELICITAS</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-sweetie">(FELI, FE, FELA)</p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-acumin mt-2 sm:mt-3 md:mt-4">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.
                        </p>
                    </div>
                    <img src={feliImage} alt="Feli Imagen" className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]" />
                </div>

                <div className="relative -mt-32 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32">
                    <div className="absolute top-[50%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-acumin">EZEQUIEL</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-sweetie">(NANO, EZE, NONONANO)</p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-acumin mt-2 sm:mt-3 md:mt-4">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.
                        </p>
                    </div>
                    <img src={nanoImage} alt="Nano Imagen" className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]" />
                </div>

                <div className="relative -mt-32 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32">
                    <div className="absolute top-[50%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-acumin">IGNACIO</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-sweetie">(NACHO, NACHI, CHONA)</p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-acumin mt-2 sm:mt-3 md:mt-4">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.
                        </p>
                    </div>
                    <img src={nachoImage} alt="Nacho Imagen" className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]" />
                </div>

                <div className="relative -mt-32 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32">
                    <div className="absolute top-[50%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-acumin">GASTÓN</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-sweetie">(GASI, GASTY, TIGAS, GASTIN, GAS, TONGA...)</p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-acumin mt-2 sm:mt-3 md:mt-4">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.
                        </p>
                    </div>
                    <img src={gastiImage} alt="Gasti Imagen" className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]" />
                </div>

                <div className="relative -mt-32 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32">
                    <div className="absolute top-[50%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-acumin">LOURDES</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-sweetie">(LOLO, LULU, LULO, LU, NENITA)</p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-acumin mt-2 sm:mt-3 md:mt-4">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.
                        </p>
                    </div>
                    <img src={luluImage} alt="Lulu Imagen" className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]" />
                </div>

                <div className="relative -mt-32 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32">
                    <div className="absolute top-[50%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-acumin">AGUSTÍN</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-sweetie">(AGUS, AUSTIN, MARTITEGUI)</p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-acumin mt-2 sm:mt-3 md:mt-4">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.
                        </p>
                    </div>
                    <img src={agusImage} alt="Agus Imagen" className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]" />
                </div>

                <div className="relative -mt-32 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32">
                    <div className="absolute top-[50%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-acumin">AYLEN</p>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl font-sweetie">(AYLU, AY, LU, POLVITOS)</p>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-xl font-acumin mt-2 sm:mt-3 md:mt-4">
                            Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.
                        </p>
                    </div>
                    <img src={ayluImage} alt="Aylu Imagen" className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[60%]" />
                </div>
            </div>
        </>
    )
}

export default SobreNosotros;