import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //

    const [characters, setCharacters] = useState([])
    const [currentCharacterName, setCurrentCharacterName] = useState(null)
  
    const openDetails = name => {
      setCurrentCharacterName(name)
    }
  
    const closeDetails = () => {
      setCurrentCharacterName(null)
    }
  
    useEffect(() => {
      axios('https://swapi.dev/api/people')
        .then(res => {
          console.log("res.data:", res.data)
          // console.log("response: ", res)
        })
        // .then(data => {
        //   console.log("data: ", data)
        // })
        .catch(err => {
          console.log(err)
        })
    }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
