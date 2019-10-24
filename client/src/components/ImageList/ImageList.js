import React from 'react'
import Image from '../Image/Image'

const ImageList = (props) => {
    return(
        <div className='container'>
        {props.objects.map(item => <Image key={item.objectid} {...item} />)}
        </div>
    )
}

export default ImageList