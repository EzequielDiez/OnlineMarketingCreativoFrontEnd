import React from "react";
import { motion } from "framer-motion";
import feliImage from "../assets/images/felicitas.webp";
import nanoImage from "../assets/images/ezequiel.webp";
import nachoImage from "../assets/images/ignacio.webp";
import gastiImage from "../assets/images/gaston.webp";
import luluImage from "../assets/images/lourdes.webp";
import agusImage from "../assets/images/agustin.webp";
import ayluImage from "../assets/images/aylen.webp";


function SobreNosotros() {
    return (
        <div className="opacity-0 animate-fadeIn">
            <div className="bg-[#fff] min-h-screen flex items-center justify-center px-4 py-8 pt-20 xs:pt-20 sm:pt-16 md:pt-20 lg:pt-32">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-advercase mb-8 md:mb-10 lg:mb-20">
                        ¿QUIÉNES SOMOS?
                    </h1>
                    <div className="max-w-7xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:pt-6">
                        <p className="text-base sm:text-xl md:text-2xl lg:text-2xl font-archivo font-thin mb-6 md:mb-12">
                            Somos una agencia creativa que nació con la pasión de transformar marcas y hacerlas crecer en el mundo digital. Lo que comenzó como un proyecto personal se convirtió en un equipo de profesionales comprometidos con la innovación, la estrategia y el impacto.
                        </p>
                        <p className="text-base sm:text-xl md:text-2xl lg:text-2xl font-archivo font-thin mb-6 md:mb-12">
                            Creemos en el poder de las ideas bien ejecutadas, en la importancia de conectar con las audiencias correctas y en el valor de cada marca que confía en nosotros. Nuestro equipo está formado por especialistas en diversas áreas.
                        </p>
                        <p className="text-base sm:text-xl md:text-2xl lg:text-2xl font-archivo font-thin">
                            Nos destacamos por nuestra creatividad, nuestra cercanía con cada cliente y nuestro enfoque estratégico. No solo brindamos servicios, sino que nos involucramos en cada proyecto como si fuera propio, trabajando con pasión, compromiso y una visión clara hacia el crecimiento.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#fff] pb-20 sm:pb-32">
                <motion.div
                    className="relative"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-[50%] ml-[30%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-advercase">FELICITAS</p>
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-sweetie">(FELI, FE, FELA)</p>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl 2xl:text-2xl font-archivo font-medium mt-2 sm:mt-3 md:mt-4 text-[#6B6B6B]">
                            CEO | Fotógrafa | Social Media Strategist
                        </p>
                        <p className="text-sm md:text-lg lg:text-xl 2xl:text-xl font-archivo font-thin mt-2 sm:mt-3 md:mt-4 max-w-[400px] lg:max-w-[1000px]">
                            Creativa, estratégica y apasionada por su trabajo. En sus tiempos libres, le encanta prender la tele y encontrarse con la saga de Harry Potter. Workaholic en rehabilitación.
                        </p>
                    </div>
                    <img src={feliImage} alt="Feli Imagen" className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[60%]" />
                </motion.div>

                <motion.div
                    className="relative mt-20 xs:mt-4 sm:-mt-4 md:mt-8 lg:mt-2 xl:-mt-10 2xl:-mt-16"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-[55%] ml-[30%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-advercase">EZEQUIEL</p>
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-sweetie">(NANO, EZE, NONONANO)</p>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl 2xl:text-2xl font-archivo font-medium mt-2 sm:mt-3 md:mt-4 text-[#6B6B6B]">
                            CEO | Programador
                        </p>
                        <p className="text-sm md:text-lg lg:text-xl 2xl:text-xl font-archivo font-thin mt-2 sm:mt-3 md:mt-4 max-w-[400px] lg:max-w-[1000px]">
                            El cerebro detrás del desarrollo y la tecnología en nuestra agencia. No le gusta aparecer en cámara, pero si entrás a nuestro TikTok, es nuestro actor principal.                        </p>
                    </div>
                    <img src={nanoImage} alt="Nano Imagen" className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[60%]" />
                </motion.div>

                <motion.div
                    className="relative mt-28 xs:mt-10 sm:mt-4 md:mt-20 lg:mt-10 xl:mt-2 2xl:-mt-2"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-[50%] ml-[30%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-advercase">IGNACIO</p>
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-sweetie">(NACHO, NACHI, CHONA)</p>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl 2xl:text-2xl font-archivo font-medium mt-2 sm:mt-3 md:mt-4 text-[#6B6B6B]">
                            Gerente | Administrativo | Social Media Analyst
                        </p>
                        <p className="text-sm md:text-lg lg:text-xl 2xl:text-xl font-archivo font-thin mt-2 sm:mt-3 md:mt-4 max-w-[400px] lg:max-w-[1000px]">
                            El organizador del equipo y el estratega detrás de los números. Su humor depende de River Plate, pero si hay un perrito cerca, no te preocupes… está todo bien.
                        </p>
                    </div>
                    <img src={nachoImage} alt="Nacho Imagen" className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[60%]" />
                </motion.div>

                <motion.div
                    className="relative mt-20 xs:mt-2 sm:-mt-4 md:mt-6 lg:mt-2 xl:-mt-10 2xl:-mt-16"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-[55%] ml-[30%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-advercase">GASTÓN</p>
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-sweetie">(GASI, GASTY, TIGAS, GASTIN, GAS, TONGA...)</p>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl 2xl:text-2xl font-archivo font-medium mt-2 sm:mt-3 md:mt-4 text-[#6B6B6B]">
                            Diseñador Gráfico | Brand Manager | Publicista
                        </p>
                        <p className="text-sm md:text-lg lg:text-xl 2xl:text-xl font-archivo font-thin mt-2 sm:mt-3 md:mt-4 max-w-[400px] lg:max-w-[1000px]">
                            La creatividad hecha imagen. Si pasás tiempo con él, tené en cuenta que te vas a ir con dolor abdominal de tantas risas. Actor en la sombra, listo para brillar.                        </p>
                    </div>
                    <img src={gastiImage} alt="Gasti Imagen" className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[60%]" />
                </motion.div>

                <motion.div
                    className="relative mt-32 xs:mt-16 sm:mt-12 md:mt-20 lg:mt-10 xl:mt-2 2xl:-mt-2"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-[50%] ml-[30%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-advercase">LOURDES</p>
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-sweetie">(LOLO, LULU, LULO, LU, NENITA)</p>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl 2xl:text-2xl font-archivo font-medium mt-2 sm:mt-3 md:mt-4 text-[#6B6B6B]">
                            Productora Audiovisual | Social Media Manager
                        </p>
                        <p className="text-sm md:text-lg lg:text-xl 2xl:text-xl font-archivo font-thin mt-2 sm:mt-3 md:mt-4 max-w-[400px] lg:max-w-[1000px]">
                            Apasionada por contar historias a través de imágenes. Tengas un buen día, un mal día o un día… ella lo va a hacer mejor. Sus gatos son su pasión, and her English is excellent. #CharosLover                        </p>
                    </div>
                    <img src={luluImage} alt="Lulu Imagen" className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[60%]" />
                </motion.div>

                <motion.div
                    className="relative mt-32 xs:mt-16 sm:mt-2 md:mt-24 lg:mt-6 xl:-mt-2 2xl:-mt-6 mb-8 sm:mb-0"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-[50%] ml-[30%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-advercase">AGUSTÍN</p>
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-sweetie">(AGUS, AUSTIN, MARTITEGUI)</p>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl 2xl:text-2xl font-archivo font-medium mt-2 sm:mt-3 md:mt-4 text-[#6B6B6B]">
                            Productor Audiovisual | Fotógrafo | Social Media Manager
                        </p>
                        <p className="text-sm md:text-lg lg:text-xl 2xl:text-xl font-archivo font-thin mt-2 sm:mt-3 md:mt-4 max-w-[400px] lg:max-w-[1000px]">
                            La mente creativa de la agencia, siempre en busca de nuevos proyectos. Al que madruga, Dios lo ayuda… pero Agus ya había terminado su lista de pendientes antes de que Dios abriera los ojos.                            </p>
                    </div>
                    <img src={agusImage} alt="Agus Imagen" className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[60%]" />
                </motion.div>

                <motion.div
                    className="relative mt-32 xs:mt-12 sm:-mt-4 md:mt-10 lg:mt-4 xl:-mt-8 2xl:-mt-16 mb-12 sm:mb-0"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute top-[55%] ml-[30%] lg:ml-[20%] z-10">
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-advercase">AYLEN</p>
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-sweetie">(AYLU, AY, LU, POLVITOS)</p>
                        </div>
                        <p className="text-base md:text-xl lg:text-2xl 2xl:text-2xl font-archivo font-medium mt-2 sm:mt-3 md:mt-4 text-[#6B6B6B]">
                            Productora Audiovisual | Fotógrafa | Social Media Manager
                        </p>
                        <p className="text-sm md:text-lg lg:text-xl 2xl:text-xl font-archivo font-thin mt-2 sm:mt-3 md:mt-4 max-w-[400px] lg:max-w-[1000px]">
                            Detallista, creativa y con una mirada única para la producción de contenido. Ama viajar; su felicidad es proporcional a los kilómetros de distancia de Capital Federal.                        </p>
                    </div>
                    <img src={ayluImage} alt="Aylu Imagen" className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[60%]" />
                </motion.div>
            </div>
        </div>
    )
}

export default SobreNosotros;