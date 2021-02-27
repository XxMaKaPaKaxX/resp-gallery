import React from 'react';
const Comments = ({ comments }) => {

    console.log((comments === undefined) || ([...comments].length === 0))
    if (comments === undefined || ([...comments].length === 0)) {
        return (
            <div>
                brak kommentarzy
            </div>
        )
    } else {
        const displayedComments = [...comments].map(comment => (
            <div key={comment.id}>
                <p>
                    {(new Date(comment.date)).toLocaleString()}
                </p>
                <p>
                    {comment.text}
                </p>
            </div>
        ))
        return (
            <div>
                {displayedComments}
            </div>
        );
    }
}

export default Comments;