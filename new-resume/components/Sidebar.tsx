import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from "next/image";

const Sidebar = () => {
    
    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark": "light")
    }
    
    return (
        <div>
            <Image
                src='/images/ash.jpg'
                alt="img"
                className="mx-auto border rounded-full"
                height="128px"
                width="128px"
                layout="responsive"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Ashur </span>Kanwal
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
                Fullstack Web Developer
            </p>
            <a 
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
                href='/assets/Ashur-kanwal-CV.pdf'
                download='Ashur-kanwal-CV'
            >
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            {/** Social Icons */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
                <a className="w-8 h-8 cursor-pointer" href=""><AiFillFacebook className="w-8 h-8" /></a>
                <a className="w-8 h-8 cursor-pointer" href=""><AiFillGithub className="w-8 h-8" /></a>
                <a className="w-8 h-8 cursor-pointer" href=""><AiFillLinkedin className="w-8 h-8" /></a>
            </div>
            {/** Address */}
            <div 
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                style={{ marginLeft: '-1rem', marginRight: '-1rem'}}
            >
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Grangemouth, Scotland</span>
                </div>
                <p className="my-2">ashurkanwal@yahoo.com</p>
                <p className="my-2">0739732523</p>
             {/** Button */}
             <button 
             className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
             onClick={() => window.open("mailto:ashurkanwal@yahoo.com")}
             >
                 Email Me
            </button>
             <button 
                className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
                onClick={changeTheme}
             >
                 Toggle Theme
            </button>
            </div>
        </div>
    )
}

export default Sidebar
