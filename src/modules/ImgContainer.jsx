import React from 'react';
const ImgContainer = ({ url }) => {
    return (
        <div className="img-container w-100 d-flex align-items-center justify-content-center">
            {url
                ? <img src={url} className="img-fluid" alt="" />
                : <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>}
        </div>
    );
}

export default ImgContainer;