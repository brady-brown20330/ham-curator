import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Key from '../server/actualAPIKey.js';
import PhotoList from './components/photoList.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [randomPicture, setRandomPicture] = useState([])

  let randomInt = Math.floor(Math.random() * 5)
  console.log(randomInt)
useEffect(() => {
    Axios.get(`https://api.harvardartmuseums.org/object?apikey=${Key}`)
  .then(data => setRandomPicture(data.data))
}, []);


    return(

      <div className="App">
        <h1> Hello, World! </h1>
        <p>
          {`You clicked ${count} times.`}
        </p>
        <button className="ri-button" onClick={() => setCount(count + 1)} type="submit">Dangerous Button</button>

        <PhotoList list={randomPicture}/>
      </div>
    );





}

export default App;