import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10%;
    background-color: rgba(74, 74, 66, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(74, 74, 66, 0.3);
    border: 5px solid gold;
`;

const App = () => {

    const [characters, setCharacters] = useState([])
  
    useEffect(() => {
      axios('https://swapi.dev/api/people')
        .then(res => {
          setCharacters(res.data)
          console.log("res.data:", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      <Container>
        {
          characters.map(char => {
            return <Character info={char} key={char.name} />
          })
        }
      </Container>
    </div>
  );
}

export default App;
