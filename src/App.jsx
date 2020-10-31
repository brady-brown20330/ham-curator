import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Key from '../server/actualAPIKey.js';

const App = () => {
  const [count, setCount] = useState(0);
  const [randomPicture, setRandomPicture] = useState([])

  let randomInt = Math.floor(Math.random() * 5)
  console.log(randomInt)
useEffect(() => {
    Axios.get(`https://api.harvardartmuseums.org/object?apikey=${Key}`)
  .then(data => setRandomPicture(data.data.records[randomInt].images[0].baseimageurl))
});


    return(

      <div className="App">
        <h1> Hello, World! </h1>
        <p>
          {`You clicked ${count} times.`}
        </p>
        <button className="ri-button" onClick={() => setCount(count + 1)} type="submit">Dangerous Button</button>
    <div>Random Pic:
      <img src={randomPicture}></img>
    </div>
      </div>
    );





}

export default App;