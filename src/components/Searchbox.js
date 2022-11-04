import React from 'react';

const Searchbox = ({Searchbox, SearchChange}) => {
    return (
        <dir className='pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={SearchChange}/>
       
        </dir>
    );
}

export default Searchbox;