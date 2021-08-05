import React from 'react'
import { FunctionComponent } from 'react'
import getIcon from '../helperFunctions/getIcon'
import { Service} from '../types'

const ServiceCard:FunctionComponent<{service:Service}> = ({
    service:{Icon, about, title},
}) => {
    const createMarkup = () => { 
        return{
            __html:about,
        }               
    }

    return (
        <div className='flex items-center p-2 space-x-4 '>
            <div>
                <a className="w-8 h-8 cursor-pointer" href="'">
                    {getIcon(Icon)}
                </a>
                <h4 className='font-bold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default ServiceCard
