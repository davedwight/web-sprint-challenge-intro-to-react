// Write your Character component here
import React from 'react';
// import styled from 'styled-components';

export default function Character(props) {
    
    const { info, open } = props;

    return (
        <>    
            <h3>{info.name}</h3>
            <button onClick={() => open(info)}>Dummy button</button>
        </>
    )
  }