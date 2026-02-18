import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

interface FooterProp {
   darkMode : boolean;
}

const Footer = ({ darkMode }: FooterProp) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
        ? 'linear-gradient(rgb(254,154,0,0.3), rgb(15,10,30))'
        : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? 'rgb(254,154,0,1)' : '#d1d5db'
      }}
      className="border-t"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-center md:text-right">
              <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
                @{currentYear} Guillermo P.
              </p>
            </div>

            <div className="flex gap-4">
              <a 
              href="https://github.com/GuillermoPlisich07"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all
              hover:bg-linear-to-r hover:from-yellow-500 hover:to-ambar-500 hover:text-white bg-[#374151] 
              dark:bg-[#f3f4f6] text-white dark:text-[#374151] ">
                <SiGithub className="h-5 w-5" />

              </a>
              <a 
              href="https://www.linkedin.com/in/guillermo-antonio-p-a23aa512a/"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all
              hover:bg-linear-to-r hover:from-yellow-500 hover:to-ambar-500 hover:text-white bg-[#374151] 
              dark:bg-[#f3f4f6] text-white dark:text-[#374151] ">
                <SiLinkedin className="h-6 w-6" color="#0A66C2" />

              </a>
              <a 
              href='mailto:nmguille@outlook.es'
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all
              hover:bg-linear-to-r hover:from-yellow-500 hover:to-ambar-500 hover:text-white bg-[#374151] 
              dark:bg-[#f3f4f6] text-white dark:text-[#374151] ">
                <SiGmail className="h-6 w-6" color="#D44638"/>

              </a>
            </div>
          </div>
        </div>

    </footer>
  )
}

export default Footer