import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image/Image';

const Images = () => {
    const objects = useSelector(state => state.objects)
    return(
        <div className='container'>
        {objects.map(item => <Image key={item.objectid} {...item} />)}
        </div>
    )
}

export default Images;