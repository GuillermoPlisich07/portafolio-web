
interface ContactProps {
    darkMode: boolean;
}

const Contact = ({ darkMode} : ContactProps) => {
  return (
    <section id="contacto"
        style={{
            background: darkMode ? '#111827' : '#f9fafb'
        }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}>
                    Contactame <span style={{
                        background: 'linear-gradient(to right, #fcdb23, #e7b100, #fbdb24)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        }}> 
                            YA!
                        </span>
                </h2>
                <p
                className="text-base sm:text-lg md:text-xl"
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    Pongo algo
                </p>
            </div>


            
            <div className="gap-6 sm:gap-8 md:gap-10 items-center">
                <form 
                    style={{
                        background: darkMode
                        ? 'linear-gradient(to right, #1f2937, #111827)'
                        : 'linear-gradient(to right, #ffffff, #f9fafb)',
                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
                    data-aos="fade-left">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Nombre"
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3
                                rounded-lg text-sm sm:text-base
                                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                                required
                            ></input>
                            {/* Last Name */}
                            <input
                                type="text"
                                placeholder="Apellido"
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3
                                rounded-lg text-sm sm:text-base
                                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                                required
                            ></input>
                        </div>
                        
                        {/* Email */}
                        <div className=" mb-3 sm:mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3
                                rounded-lg text-sm sm:text-base
                                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                                required
                            ></input>
                        </div>
                        {/* Phone */}
                        <div className=" mb-3 sm:mb-4">
                            <input
                                type="tel"
                                placeholder="Teléfono"
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3
                                rounded-lg text-sm sm:text-base
                                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                                required
                            ></input>
                        </div>
                        {/* Message */}
                        <div className="mb-3 sm:mb-4">
                            <textarea
                                rows={4}
                                placeholder="Mensaje"
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#faede3',
                                    borderColor: darkMode ? '#4b5563' : '#d1d5db',
                                    color: darkMode ? 'white' : '#1f2937'
                                }}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3
                                rounded-lg text-sm sm:text-base
                                focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none"
                                required
                            ></textarea>
                            
                        </div>
                        {/* button */}
                        <button
                            type="submit"
                            style={{
                                background: 'linear-gradient(to right, #fcdb23, #e7b100)',
                            }}
                            className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm
                                sm:text-base hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-[1.02] transition-all"
                            >
                            Enviar
                        </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact