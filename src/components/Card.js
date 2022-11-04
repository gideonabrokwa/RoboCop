import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <dir className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?10*10`} />
            <dir>
                <h1>{name}</h1>
                <p>{email}</p>
            </dir>
        </dir>

    );
}
export default Card;