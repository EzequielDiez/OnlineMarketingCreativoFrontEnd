import React from "react";
import onlineIdImage from "../assets/images/online-id.png";
import feliImage from "../assets/images/feli.png"
import nanoImage from "../assets/images/nano.png";

function SobreNosotros() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center bg-[#F0E6DC] pt-56">
                <h1 className="text-9xl font-acumin text-center relative">
                    QUIENES SOMOS
                    <img src={onlineIdImage} alt="Online ID" className="absolute max-w-[294px] h-auto top-16 -right-5" />
                </h1>
                <div className="max-w-3xl ml-[-280px] pt-20">
                    <p className="mt-4 text-acumin text-2xl">
                        Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social media management, hasta análisis digital, fotografía y videografía. Cada miembro de nuestro equipo aporta su conocimiento y habilidades únicas para ofrecer resultados excepcionales.
                    </p>
                    <br />
                    <p className="mt-4 text-acumin text-2xl">
                        Con creatividad, experiencia y dedicación, nos especializamos en brindar soluciones integrales para destacar tu marca en un mundo cada vez más digital.
                    </p>
                </div>
            </div>
            <div className="w-full bg-[#F0E6DC]">
                <div className="relative">
                    <img src={feliImage} alt="Feli Imagen" className="w-[1185px]" />
                    <p className="absolute bottom-64 left-1/3 text-5xl font-acumin">FELICITAS</p>
                </div>
                <div className="relative">
                    <img src={nanoImage} alt="Nano Imagen" className="w-[1185px]" />
                    <p className="absolute bottom-8 left-8 text-2xl font-bold">NANO</p>
                </div>
            </div>
        </>
    )
}

export default SobreNosotros;