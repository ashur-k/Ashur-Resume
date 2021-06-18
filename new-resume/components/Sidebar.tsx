import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div>
            <img 
                src='https://media-exp1.licdn.com/dms/image/C4E35AQGRJrDMRnTFqg/profile-framedphoto-shrink_200_200/0/1612390417326?e=1624129200&v=beta&t=ajBAWBlbfszr8yY_McmnECV3jijwEvP8hGea0-GML18' 
                alt="img"
                className="w-32 h-32 mx-auto border rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span>Ashur </span>Kanwal
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Fullstack Web Developer</p>
            <a 
                className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
                href=''
                download='name'
            >
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            {/** Social Icons */}
            <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
                <a className="w-8 h-8 cursor-pointer" href=""><AiFillFacebook className="w-8 h-8" /></a>
                <a className="w-8 h-8 cursor-pointer" href=""><AiFillGithub className="w-8 h-8" /></a>
                <a className="w-8 h-8 cursor-pointer" href=""><AiFillLinkedin className="w-8 h-8" /></a>
            </div>
            {/** Address */}
            <div className="py-4 my-5 bg-gray-200" style={{ marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Grangemouth, Scotland</span>
                </div>
                <p className="my-2">ashurkanwal@yahoo.com</p>
                <p className="my-2">0739732523</p>
             {/** Button */}
             <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
                 Email Me
                </button>
             <button className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2" text-white my-2>
                 Toggle Theme
            </button>
            </div>
        </div>
    )
}

export default Sidebar
