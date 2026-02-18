import { SiAngular, SiGmail, SiKubernetes, SiLinkedin, SiMongodb, SiPostgresql, SiSpringboot, SiTypescript } from 'react-icons/si';
import { motion } from "framer-motion";
import yo from '../assets/yo.jpeg';
import { FaGitAlt } from 'react-icons/fa6';
import { FaDocker, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';

interface HeroProps {
    darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {

    const foto = [
        {imagen: yo, alt:"Foto de Guillermo"}
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-yellow-500 hover:bg-yellow-600',
        decorativeCircle: 'bg-yellow-500 opacity-10'
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: 'text-gray-800 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white',
        decorativeCircle: 'bg-yellow-400 opacity-10'
    };

    const theme = darkMode ? darkTheme : lightTheme;

  return (
     <div className="relative overflow-hidden flex flex-col ">
        <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10">
            <div className="container max-w-5xl mx-auto flex px-4 sm:px-8 lg:px-14
            py-12 lg:py-32 flex-col lg:flex-row mb-10 items-start justify-between
            lg:mt-0 mt-14">
                <div className="w-full flex flex-col items-start
                lg:items-start text-start lg:text-left lg:mb-0">
                    <div className="flex justify-start lg:justify-start
                    gap-4 sm:gap-6 mb-6 sm:mb-7 w-full items-center">
                        <div className="relative w-20 h-20 flex-shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden   shadow-sm">
                            <img 
                                src={foto[0].imagen} 
                                alt={foto[0].alt} 
                                className="w-full h-full object-cover" 
                            />
                            </div>
                        </div>
                        <motion.a
                            href="https://www.linkedin.com/in/guillermo-antonio-p-a23aa512a/"
                            target='_blank'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative 
                            hidden md:flex items-center gap-2 
                            px-5 py-2.5 font-semibold text-sm
                            ${darkMode ? 'text-white border-green-500' : 'text-gray-900 border-green-600'} 
                            border-2 rounded-full shadow-md
                            transition-all duration-300 h-fit`}
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                Disponible para trabajar
                        </motion.a>
                    </div>
                    <h1 className={`title-font text-3xl sm:text-4xl 
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                        data-aos="fade-up"
                        data-aos-delay="500"
                        >
                        Hey, soy Guillermo
                    </h1>
                    <p  className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg
                            ${theme.textSecondary}`}

                        data-aos="fade-up"
                        data-aos-delay="600"
                        >
                        Analista en Tecnologías de la Información y estudiante de Ingeniería en Sistemas, con más de 3 años de experiencia en desarrollo de software empresarial. Me especializo en el diseño y construcción de servicios backend robustos, enfocados en escalabilidad, mantenibilidad y buenas prácticas. Trabajo en la mejora continua del código y en la evolución de arquitecturas orientadas a servicios.
                    </p>
                    <div className="flex justify-start lg:justify-start
                    gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
                        <a href='https://www.linkedin.com/in/guillermo-antonio-p-a23aa512a/' target="_blank" rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="600">
                            {/* <SiLinkedin className="h-6 w-6" color={darkMode ? "white" : "#0A66C2"} /> */}
                            <SiLinkedin className="h-6 w-6" color="#0A66C2" />
                        </a>
                        <a href='mailto:nmguille@outlook.es' target="_blank" rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="600">
                            {/* <SiGmail className="h-6 w-6" color={darkMode ? "white" : "#D44638"} /> */}
                            <SiGmail className="h-6 w-6" color="#D44638"/>
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex lg:w-1/3 items-center justify-center">
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { Icon: FaJava, color: '#f89820', delay: 0 },
                            { Icon: SiSpringboot, color: '#6db33f', delay: 0.1 },
                            { Icon: SiKubernetes, color: '#326ce5', delay: 0.2 },
                            { Icon: SiPostgresql, color: '#336791', delay: 0.3 },
                            { Icon: FaDocker, color: '#2496ed', delay: 0.4 },
                            { Icon: SiMongodb, color: '#47a248', delay: 0.5 },
                            { Icon: FaReact, color: '#61dafb', delay: 0.6 },
                            { Icon: SiTypescript, color: '#3178c6', delay: 0.7 },
                            { Icon: SiAngular, color: '#dd0031', delay: 0.8 },
                            { Icon: FaNodeJs, color: '#339933', delay: 0.9 },
                            { Icon: FaPython, color: '#3776ab', delay: 1.0 },
                            { Icon: FaGitAlt, color: '#f05032', delay: 1.1 }
                        ].map(({ Icon, color, delay }, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: delay,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, -10, 10, -10, 0],
                                    transition: { duration: 0.3 }
                                }}
                                className={`p-4 rounded-xl ${darkMode
                                        ? 'bg-gray-800/50 hover:bg-gray-700/70'
                                        : 'bg-white/50 hover:bg-white/80'
                                    } backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'
                                    } shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                            >
                                <Icon className="w-8 h-8" style={{ color }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
     </div>
  )
}

export default Hero