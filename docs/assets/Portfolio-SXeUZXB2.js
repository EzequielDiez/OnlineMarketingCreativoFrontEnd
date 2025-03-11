import{r as c,j as e}from"./main-BWJHms62.js";const d="/OnlineMarketingCreativoFrontEnd/assets/button-contactanos-D0XJzXKY.png";function x(){const[o,a]=c.useState(null),l=[{id:"Diseño",color:"bg-white"},{id:"Web",color:"bg-[#B8D8E8]"},{id:"RRSS",color:"bg-[#E8C4A9]"},{id:"Photo",color:"bg-gray-200"}],r={Photo:[{embedUrl:"https://www.behance.net/embed/project/110094931",title:"Proyecto Fotografía 1"}],RRSS:[{embedUrl:"https://www.behance.net/embed/project/OTRO-ID",title:"Proyecto RRSS 1"}],Web:[{embedUrl:"https://www.behance.net/embed/project/OTRO-ID",title:"Proyecto Web 1"}],Diseño:[{embedUrl:"https://www.behance.net/embed/project/OTRO-ID",title:"Proyecto Diseño 1"}]};return e.jsxs("div",{className:"bg-[#DBD0C6] min-h-screen pt-28 pb-20",children:[e.jsxs("div",{className:"container mx-auto px-4 mb-24",children:[e.jsx("h1",{className:"text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-acumin text-center mb-8",children:"PORTFOLIO"}),e.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-center font-acumin max-w-4xl mx-auto mb-6",children:"Cada marca tiene una historia que contar, y nosotros nos encargamos de darle vida."}),e.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-center font-acumin max-w-4xl mx-auto",children:"Explorá algunos de nuestros proyectos y descubrí cómo transformamos ideas en estrategias, creatividad en impacto y contenido en resultados."})]}),e.jsx("div",{className:"container mx-auto px-4 relative",children:e.jsxs("div",{className:"relative pt-12 min-h-[500px]",children:[e.jsx("div",{className:`
                            absolute left-0 w-full h-[calc(100%-48px)]
                            bg-black rounded-lg 
                            transition-all duration-300
                            z-20
                            ${o?"top-12 translate-y-[23rem]":"top-0"}
                        `}),l.map((t,i)=>e.jsxs("div",{children:[e.jsx("button",{onClick:()=>a(t.id===o?null:t.id),className:`
                                    absolute px-12 py-3
                                    ${t.color}
                                    rounded-t-lg
                                    hover:opacity-100
                                    transition-all duration-300
                                    top-0 z-30
                                    ${o===t.id?"font-bold translate-y-[-100%]":o?"opacity-90 translate-y-[23rem]":"opacity-90 translate-y-[-100%]"}
                                `,style:{left:`${i*25}%`,width:"25%"},children:t.id}),e.jsx("div",{className:`
                                ${t.color}
                                absolute top-0 left-0 w-full
                                min-h-[500px] rounded-lg
                                transition-all duration-300
                                z-10
                                opacity-0 pointer-events-none
                                ${o===t.id?"opacity-100 pointer-events-auto":""}
                            `,children:e.jsx("div",{className:"p-8",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r[t.id].map((s,n)=>e.jsx("div",{className:"w-full",children:e.jsx("iframe",{src:`${s.embedUrl}?ilo0=1`,height:"316",width:"100%",allowFullScreen:!0,loading:"lazy",frameBorder:"0",allow:"clipboard-write",referrerPolicy:"strict-origin-when-cross-origin",title:s.title})},n))})})})]},t.id))]})}),e.jsxs("div",{className:"container mx-auto px-4 py-16 text-center",children:[e.jsx("p",{className:"text-xl sm:text-2xl md:text-3xl font-acumin mb-8",children:"¿Listo para crear algo increíble juntos?"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:d,alt:"Contáctanos",className:"w-[250px] sm:w-[300px] md:w-[350px] cursor-pointer hover:scale-105 transition-transform duration-300"})})]})]})}export{x as default};
