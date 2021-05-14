import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
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
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //

    const [characters, setCharacters] = useState([])
    const [currentCharacter, setCurrentCharacter] = useState(null)
  
    const openDetails = infoObj => {
      setCurrentCharacter(infoObj)
    }
  
    const closeDetails = () => {
      setCurrentCharacter(null)
    }
  
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
      <h1 className="Header">Characters</h1>
      <Container>
        {
          characters.map(char => {
            return <Character info={char} key={char.name} /> // with more time I would create unique IDs for all characters
          })
        }
      </Container>
    </div>
  );
}

export default App;
