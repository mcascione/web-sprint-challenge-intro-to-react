import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from "./components/Character";
import "./App.css";

const App = () => {
  const[data, setData] = useState();

  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/")
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err));

  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data && <Character data={data}/>}
    </div>
  );
}

export default App;
