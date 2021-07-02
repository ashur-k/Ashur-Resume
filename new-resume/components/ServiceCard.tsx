import React from 'react'
import { FunctionComponent } from 'react'
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
                <h4 className='font-bold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default ServiceCard
