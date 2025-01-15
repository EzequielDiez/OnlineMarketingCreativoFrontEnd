import React from "react";
import onlineIdImage from "../assets/images/online-id.png";
import feliImage from "../assets/images/feli2.png";
import nanoImage from "../assets/images/nano2.png";
import nachoImage from "../assets/images/nacho2.png";
import gastiImage from "../assets/images/gasti2.png";
import luluImage from "../assets/images/lulu2.png";
import agusImage from "../assets/images/agustin2.png";
import ayluImage from "../assets/images/aylu2.png";


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
                    <p className="absolute bottom-64 left-1/2 text-5xl font-sweetie">(FELI, FE, FELA)</p>
                    <br />
                    <p className="absolute bottom-44 left-1/3 text-xl font-acumin max-w-2xl">Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.</p>
                </div>
                <div className="relative -mt-36">
                    <img src={nanoImage} alt="Nano Imagen" className="w-[1246px] -ml-[100px]" />
                    <p className="absolute bottom-52 left-1/3 text-5xl font-acumin">EZEQUIEL</p>
                    <p className="absolute bottom-52 left-1/2 text-5xl font-sweetie">(NANO, EZE, NONONANO)</p>
                    <br />
                    <p className="absolute bottom-32 left-1/3 text-xl font-acumin max-w-2xl">Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.</p>
                </div>
                <div className="relative -mt-28">
                    <img src={nachoImage} alt="Nacho Imagen" className="w-[1116px]" />
                    <p className="absolute bottom-56 left-1/3 text-5xl font-acumin">IGNACIO</p>
                    <p className="absolute bottom-56 left-1/2 text-5xl font-sweetie">(NACHO, NACHI, CHONA)</p>
                    <br />
                    <p className="absolute bottom-36 left-1/3 text-xl font-acumin max-w-2xl">Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.</p>
                </div>
                <div className="relative -mt-36">
                    <img src={gastiImage} alt="Gasti Imagen" className="w-[1142px] -ml-[58px]" />
                    <p className="absolute bottom-48 left-1/3 text-5xl font-acumin">GASTÓN</p>
                    <p className="absolute bottom-48 left-1/2 text-4xl font-sweetie">(GASI, GASTY, TIGAS, GASTIN, GAS, TONGA...)</p>
                    <br />
                    <p className="absolute bottom-28 left-1/3 text-xl font-acumin max-w-2xl">Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.</p>
                </div>
                <div className="relative -mt-24">
                    <img src={luluImage} alt="Lulu Imagen" className="w-[1185px] -ml-[52px]" />
                    <p className="absolute bottom-64 left-1/3 text-5xl font-acumin">LOURDES</p>
                    <p className="absolute bottom-64 left-1/2 text-5gixl font-sweetie">(LOLO, LULU, LULO, LU, NENITA)</p>
                    <br />
                    <p className="absolute bottom-44 left-1/3 text-xl font-acumin max-w-2xl">Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.</p>
                </div>
                <div className="relative -mt-36">
                    <img src={agusImage} alt="Agus Imagen" className="w-[1116px]" />
                    <p className="absolute bottom-56 left-1/3 text-5xl font-acumin">AGUSTÍN</p>
                    <p className="absolute bottom-56 left-1/2 text-5xl font-sweetie">(AGUS, AUSTIN, MARTITEGUI)</p>
                    <br />
                    <p className="absolute bottom-36 left-1/3 text-xl font-acumin max-w-2xl">Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.</p>
                </div>
                <div className="relative -mt-32">
                    <img src={ayluImage} alt="Aylu Imagen" className="w-[1142px] -ml-[58px]" />
                    <p className="absolute bottom-48 left-1/3 text-5xl font-acumin">AYLEN</p>
                    <p className="absolute bottom-48 left-1/2 text-5xl font-sweetie">(AYLU, AY, LU, POLVITOS)</p>
                    <br />
                    <p className="absolute bottom-28 left-1/3 text-xl font-acumin max-w-2xl">Somos un conjunto de profesionales en diversas áreas, desde diseño gráfico, programación, community management, y social.</p>
                </div>
            </div>
        </>
    )
}

export default SobreNosotros;