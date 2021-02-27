import React, { useState, useEffect } from "react";
import ImgContainer from './ImgContainer';

import Comments from './Comments'

const ImgInfoWindow = ({ imgId, apiUrl, deactivateImg }) => {

    const [data, setData] = useState('');

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');


    useEffect(() => {
        fetch(`${apiUrl}/${imgId}`)
            .then(resp => resp.json())
            .then(resp => setData(resp))
    }, []);

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'form-comment':
                setComment(e.target.value);
                break;
            case 'form-name':
                setName(e.target.value);
                break;
            default:
                console.log('smth go wrong!');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {
            name,
            comment
        }
        console.log('wysłane');
        console.log(`${apiUrl}/${imgId}/comments`)
        fetch(`${apiUrl}/${imgId}/comments`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(setName(''))
            .then(setComment(''))
            .catch(error => console.error(error));
    }

    return (
        <div className='img-modal-window'>

            <div className="row">
                <div className="col-md-7">
                    <ImgContainer url={data.url} />
                    <div className="post-comment">
                        <form className="text-center" onSubmit={(e) => handleSubmit(e)}>
                            <input
                                value={name}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                id="form-name"
                                className="form-control my-3"
                                placeholder="Twoje imię"
                            />
                            <input
                                value={comment}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                id="form-comment"
                                className="form-control my-3"
                                placeholder="Twój kommentarz" />
                            <input type="submit" className="btn btn-primary w-100 mx-0" value="Wyślij"></input>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                    <h3 className="comments-title my-3">Komentarze:</h3>
                    <Comments comments={data.comments} />
                </div>
            </div>

            <button className="btn btn-outline-primary closing_btn" onClick={deactivateImg}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );
}

export default ImgInfoWindow;