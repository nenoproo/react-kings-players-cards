import React, { useState, useEffect, useRef } from 'react';
import Card from './components/Card';
import logo from './assets/images/sacramento-kings-2.svg';

function App() {

  const [allPlayers, setAllPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error ('HTTP error! status: ${response.status}');
        }
        return response.json(); // Correctly parse JSON
      })
      .then((data) => {
        setAllPlayers(data); // Set the fetched data to allPlayers
        setPlayers(data); // Initially display all players
      })
      .catch((error) => {
        console.error('Error fetching JSON', error); // Handle fetch errors
      });
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setPlayers(allPlayers); // Reset to all players when search is cleared
    }
    else {
      setPlayers(
        allPlayers.filter((player) => 
          player.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
      );
    }
  }, [searchTerm, allPlayers]); // Re-run when searchTerm of all Players changes (кога кликам backspace да ги дадава)

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <div className="title">
        <img src={logo} className="logo" alt="logo" />
      <h1>Sacramento Kings 2024/2025 Roster</h1>
      </div>
      
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        placeholder="Search player..."
        ref={inputRef}
      />

      <div className="cards-container">
        {players.map((player) => {
          return (
            <Card
              key={player.id}
              name={player.name}
              jerseyNumber={player.jerseyNumber}
              position={player.position}
              age={player.age}
              country={player.country}
              image={player.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App