import React from 'react';
import Image from '../Image/image'

const ImageList = (props) => {
    return ( 
        <>
        {props.objects.map(item => <Image key={item.id} {...item} />)}
        </>
     );
}
 
export default ImageList;