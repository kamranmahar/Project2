import React from 'react';

function Techlist({firstName,techName}) {
    return ( 
    <div>
        <h2>{firstName}</h2>
    <h3>{techName} </h3>
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ol>
        <h3>Compaines </h3>
        <ul>
            <li>Facebook</li>
            <li>Microsoft</li>
            <li>google</li>
        </ul>
    </div>);
}

export default Techlist;