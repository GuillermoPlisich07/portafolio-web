
import { RiBriefcaseLine } from 'react-icons/ri';

interface ExperienceProps {
    darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {

    const workExperience = [
        {
            title: 'Software Developer',
            company: 'ITC S.A.',
            duration: '2025 Junio - Actualmente...',
            description: 'Que realice'
        },
        {
            title: 'Full Stack Developer',
            company: 'Universidad ORT Uruguay',
            duration: '2024 Agosto - 2025 Junio',
            description: 'Que realice'
        },
        {
            title: 'Analista de TI',
            company: 'SOMIL S.A.',
            duration: '2023 Octubre - 2024 Agosto',
            description: 'Que realice'
        },
        {
            title: 'Analista de Sistema',
            company: 'Multiline Contact Center',
            duration: '2022 Junio - 2023 Octubre',
            description: 'Que realice'
        }
    ];

    return (
        <section id='experiencia' 
            style={{color: darkMode ? '#111827' : '#f9fafb'}}
            className="relative py-24">
            <div className="container max-w-4xl mx-auto px-4 mb-10 sm:px-8 lg:px-14">
                <div className="text-start"  data-aos="fade-up" data-aos-delay="250"> 
                    <h2
                    className="text-start text-3xl font-bold mv-3 inline-flex items-center gap-2"
                    style={{color: darkMode ? 'white' : '#1f2937'}}>
                        <RiBriefcaseLine className="h-[1em] w-[1em]" />
                        Experiencia <span style={{
                            background: 'linear-gradient(to right, #fcdb23, #e7b100, #fbdb24)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}>
                            Laboral
                        </span>
                    </h2>
                    <ol className="relative mt-16"> 
                        {workExperience.map((item, index) => (
                            <li key={index} className=""> 
                                <div className={`relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-with/20 white:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4] ${darkMode ? 'before:border-white/15' : 'before:border-gray-900/20'}`}>
                                    <div className="relative pb-12 md:col-span-2"> 
                                        <div className="sticky top-0"> 
                                            <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">•</span> 
                                            <h3 className="text-xl font-bold text-yellow-400">{item.title}</h3>
                                            <h4 className="font-semibold text-xl " style={{color: darkMode ? 'white' : '#1f2937'}}>{item.company}</h4>
                                            <time className="p-0 m-0 text-sm " style={{color: darkMode ? 'white' : '#1f2937'}}>{item.duration}</time>
                                        </div>
                                    </div> 
                                    <div className="relative flex flex-col gap-2 pb-4  md:col-span-3" style={{color: darkMode ? 'white' : '#1f2937'}}> 
                                        {item.description}
                                    </div> 
                                </div> 
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Experience