import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Key from '../server/actualAPIKey.js';
import PhotoList from './components/photoList.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [randomPicture, setRandomPicture] = useState([])

useEffect(() => {
    Axios.get(`https://api.harvardartmuseums.org/object?apikey=${Key}&page=1`)
  .then(data => setRandomPicture(data.data))
}, []);

const nextPage = () => {
 if (randomPicture.info.next) {
  Axios.get(randomPicture.info.next)
  .then(res => setRandomPicture(res.data))
  .then(console.log('should be page 2: ', randomPicture))
 } else {
   console.log('thats all folks!')
 }
}

const prevPage = () => {
  console.log('should be a url: ', randomPicture.info.prev)
  if (randomPicture.info.prev) {
   Axios.get(randomPicture.info.prev)
   .then(res => setRandomPicture(res.data))
   .then(console.log(`should be page ${randomPicture.info.page}: `, randomPicture))
  } else {
    console.log('thats all folks!')
  }
 }

    return(

      <div className="App">
        <h1> Hello, World! </h1>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
        <PhotoList list={randomPicture}/>
      </div>
    );





}

export default App;