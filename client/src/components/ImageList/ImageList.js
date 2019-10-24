import React from 'react'
import Image from '../Image/Image'

const ImageList = (props) => {
    return(
        <>
        {props.objects.map((item,index) => <Image key={item.index} {...item} />)}
        </>
    )
}

export default ImageList