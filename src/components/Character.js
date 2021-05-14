import React from 'react';
import Details from './Details'
import styled from 'styled-components';

const CharacterContainer = styled.div`
    width: 80%;
    padding: 2%;
    margin: 2%;
    background-color: rgba(255, 255, 255, 0.73);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-radius: 10px;
`;

export default function Character(props) {
    
    const { info } = props;

    return (
        <CharacterContainer>    
            <h3>{info.name}</h3>
            <Details info={info} />
        </CharacterContainer>    
    )
  }