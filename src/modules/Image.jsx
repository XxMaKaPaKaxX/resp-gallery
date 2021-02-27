import React from 'react';

const Image = ({ id, url, apiUrl, activateImg }) => {


    return (
        <div size='12' md='6' lg='4' className='mb-3 col-12 col-md-6 col-lg-4'>
            <img className="img-fluid" onClick={(e) => activateImg(e)} src={url} alt={`image_${id}`} data-id={id} />
        </div>
    );
}

export default Image;
