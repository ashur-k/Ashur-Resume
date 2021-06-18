import { FunctionComponent } from 'react'
import Link from 'next/link'

export const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
    }> = ({activeItem, name, route, setActiveItem }) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
            <a>
                <span 
                    onClick={() => setActiveItem(name)}
                    className='hover:text-green'
                >
                    {name}
                </span>
            </a>
        </Link>
        ):null
    )
}