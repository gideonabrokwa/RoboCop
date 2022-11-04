import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        <dir className='bg-light-green dib br3 pa3 ma2 grow'>
        <React.StrictMode>
            {
                robots.map((user, i) => {
                    return (
                        <Card key={i} 
                        id={robots[i].id} 
                        name={robots[i].name}
                         email={robots[i].email}
                         />
                    );
                })
            }
     </React.StrictMode>
     </dir>
    )
}

export default CardList;