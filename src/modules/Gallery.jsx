import React from 'react';
import Image from './Image';

const Gallery = ({ data, apiUrl, activateImg }) => {

    const images = data.map(img => (
        <Image
            key={img.id}
            id={img.id}
            url={img.url}
            apiUrl={apiUrl}
            activateImg={activateImg}
        />
    ))

    return (
        <div className='container'>
            <div className="row text-center">
                {images}
            </div>
        </div>
    );
}

export default Gallery;