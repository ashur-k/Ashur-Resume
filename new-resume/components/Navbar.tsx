import { FunctionComponent, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { NavItem } from './NavItem'


const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()


    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/projects') setActiveItem('Projects')
        if (pathname === '/resume') setActiveItem('Resume')
    }, [pathname])

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="font-bold text-green text-xl border-b-4 border-green md:text-2xl">
                {activeItem}
            </span>
            <div className="flex space-x-5 text-lg">
                   <NavItem 
                        activeItem={activeItem} 
                        setActiveItem={setActiveItem} 
                        name='About' 
                        route='/' 
                    />
                    
                   <NavItem 
                        activeItem={activeItem} 
                        setActiveItem={setActiveItem} 
                        name='Projects' 
                        route='/projects' 
                    />

                   <NavItem 
                        activeItem={activeItem} 
                        setActiveItem={setActiveItem} 
                        name='Resume' 
                        route='/resume' 
                    />           
                
            </div>
        </div>
    )
}

export default Navbar
