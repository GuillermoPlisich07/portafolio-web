import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sun, X } from "lucide-react";
import { Moon } from "lucide-react";

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar = ({darkMode, toggleDarkMode}: NavbarProps) => {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {name: "Experiencia", link: "#experiencia"},
        {name: "Proyectos", link: "#proyectos"},
        {name: "Sobre mi", link: "#sobremi"},

    ];

    const lightColors = {
        navBg: 'bg-linear-to-br from-yellow-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-yellow-500',
        textActive: 'text-yellow-600',
        indicator: 'from-yellow-500 to-amber-500',
        button: 'from-yellow-500 to-amber-500'
    }

    const darkColors = {
        navBg: 'bg-linear-to-b from-yellow-700/50 to-gray-900',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-yellow-400',
        textActive: 'text-yellow-400',
        indicator: 'from-yellow-500 to-amber-500',
        button: 'from-yellow-500 to-amber-500'
    }

    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemsName: string) => {
        setActiveSection(itemsName.toLowerCase());
        setIsMenuOpen(false);
    };


  return (
    <div className={`w-full fixed top-0 left-0 z-50 border-t ${darkMode ? 'border-yellow-500' : 'border-gray-300'}`}>
        <motion.nav 
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 0.5}}
        className={`flex items-center justify-between ${colors.navBg} backdrop-blur-lg px-6 lg:px-12 py-3 shadow-lg`}>  
            <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8"> 
                {/* Logo or Brand Name */}
                <motion.a 
                    href="/" 
                    whileHover={{scale: 1.05}}
                    className="flex items-center space-x-2 transform-gpu">
                        <span className={`font-bold text-xl ${colors.textPrimary}`}>
                            Guillermo Plisich
                            <span className="text-yellow-500">.</span>
                        </span>
                        
                </motion.a>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a 
                        key={item.name}
                        href={item.link}
                        onClick={() => handleNavClick(item.name)}
                        className="relative"
                        >
                            <motion.span className={`font-medium transition-colors duration-300 transform-gpu
                             ${activeSection === item.name.toLowerCase() ? colors.textActive : `${colors.textSecondary}`}`}
                             whileHover={{scale: 1.05}}
                             whileTap={{scale: 1.05}}>
                                {item.name}
                            </motion.span>
                            {activeSection === item.name.toLowerCase() && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full
                                    ${colors.indicator}`}>

                                </motion.div>
                            )}
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode 
                        ? "bg-gray-700"
                        : "bg-yellow-200"
                        } transition-colors`}
                        aria-label={darkMode 
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                        }>
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-300"/>
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700"/>
                            )}

                    </motion.button>
                    {/* Button  Contact */}
                    <motion.a
                        href="#contacto"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className={`
                            hidden md:block px-6 py-2 font-semibold
                            rounded-full bg-linear-to-r ${colors.button}
                            text-white shadow-md hover:shadow-lg transition-shadow`}
                        >
                        Contacto
                    </motion.a>
                    {/* Mobile Button */}
                    <div className="flex md:hidden items-center space-x-2 px-2">
                        <motion.button
                            whileTap={{scale: 0.9}}
                            onClick={()=> setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md ${darkMode 
                                    ? "bg-gray-700"
                                    : "bg-gray-200"   
                            }`}>
                                {isMenuOpen ? (
                                    <X className={`w-5 h-5 ${
                                        darkMode 
                                        ? "text-white"
                                        : "text-gray-700"
                                    }`}/>
                                    ) : (
                                    <Menu className={`w-5 h-5 ${
                                        darkMode 
                                        ? "text-white"
                                        : "text-gray-700"
                                    }`}/> 

                                )}

                        </motion.button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.3}}
                    className={`absolute top-full left-00 right-0  mt-2 md:hidden
                    ${darkMode
                        ? "bg-gray-900/95"
                        : "bg-white/95"
                    } backdrop-blur-lg rounded-xl shadow-lg border
                    ${ darkMode
                        ? "bg-gray-700"
                        : "bg-gray-200"
                    }`}>
                        <div className="px-4 py-3 space-y-2">
                            {navItems.map((item) => (
                                <a 
                                key={item.name}
                                href={item.link}
                                onClick={() => handleNavClick(item.name)}
                                className="block">
                                    <motion.div 
                                    whileHover={{x:5}}
                                    className={`py-3 px-4 rounded-lg text-center
                                    ${
                                        activeSection === item.name.toLowerCase()
                                        ? darkMode ? 'bg-gray-800' : 'bg-yellow-50'
                                        : ''
                                    }`}>

                                        <span
                                        className={`font-medium 
                                            ${activeSection === item.name.toLowerCase()
                                                ? colors.textActive
                                                : colors.textSecondary
                                            }`
                                        }>
                                            {item.name}
                                        </span>

                                    </motion.div>
                                </a>
                            ))}
                            <motion.a
                            href="#contacto"
                            onClick={()=>setIsMenuOpen(false)}
                            whileTap={{scale: 0.95}}
                            className={`block py-3 px-4 text=center font-semibold rounded-lg 
                                bg-linear-to-r ${colors.button} text-white shadow-md `}>
                                Contacto
                            </motion.a>
                        </div>
                </motion.div>
            )}
        </motion.nav>
    </div>
  )
}

export default Navbar