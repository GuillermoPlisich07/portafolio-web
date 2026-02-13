

import { RiUserLine } from 'react-icons/ri';
import yo from '../assets/yo.jpeg';

interface AboutMeProps {
    darkMode: boolean;
}
const AboutMe = ({ darkMode }: AboutMeProps) => {
  return (
    <section id='sobremi' 
                style={{color: darkMode ? '#111827' : '#f9fafb'}}
                className="relative py-24">
                <div className="container max-w-4xl mx-auto px-4 mb-10 sm:px-8 lg:px-14">
                    <div className="text-start"  data-aos="fade-up" data-aos-delay="250"> 
                        <h2
                        className="text-start text-3xl font-bold mv-3 inline-flex items-center gap-2"
                        style={{color: darkMode ? 'white' : '#1f2937'}}>
                            <RiUserLine className="h-[1em] w-[1em]" />
                            Sobre <span style={{
                                background: 'linear-gradient(to right, #fcdb23, #e7b100, #fbdb24)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}>
                                Mi
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
                        <div className="order-1 object-cover w-64 h-full md:order-2 lg:p-2 lg:w-64  
                                        rounded-2xl ">
                            <img src={yo} alt="Yo"  
                                data-aos="fade-up"
                                data-aos-delay="250" 
                                className="h-auto rounded-lg shadow-md object-cover object-top w-full  sm:h-full " />
                        </div>
                        <div className="w-full md:w-1/2"> 
                            <p  className={`[&>p]:mb-4 [&>p>strong]:font-mono text-pretty order-2 md:order-1 
                            ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}

                                data-aos="fade-up"
                                data-aos-delay="250"
                                >
                                Analista en Tecnologías de la Información y estudiante de Ingeniería en Sistemas, con más de 3 años de experiencia en desarrollo de software empresarial. Me especializo en el diseño y construcción de servicios backend robustos, enfocados en escalabilidad, mantenibilidad y buenas prácticas. Trabajo en la mejora continua del código y en la evolución de arquitecturas orientadas a servicios.
                            </p>
                        </div>
                        
                    </div>
                    
                    
                </div>
    </section>
  )
}

export default AboutMe