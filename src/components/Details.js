import React, { useState } from 'react';

export default function Details(props) {

    const { info, close } = props;
    // const [details, setDetails] = useState(null);

    return (
        <>
            <h2>Character Details:</h2>
            {
                info &&
                <>
                    <p>Name: {info.name}</p>
                    <p>Birth Year: {info.birth_year}</p>
                    <p>Gender: {info.gender}</p>
                    <p>Hair Color: {info.hair_color}</p>
                    <p>Skin Color: {info.skin_color}</p>
                    <p>Height: {info.height}</p>
                    <p>Mass: {info.mass}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </>
    )
}