import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Key from '../server/actualAPIKey.js';
import PhotoList from './components/photoList.jsx';
import PersistentDrawerLeft from './components/drawer.jsx';
import LoginModal from './components/loginModal.jsx'

//material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  appBar: {
    backgroundColor: "black",
  },
  classyButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
     }
  },
}));

const App = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [randomPicture, setRandomPicture] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

useEffect(() => {
    Axios.get(`https://api.harvardartmuseums.org/object?apikey=${Key}`)
  .then(data => setRandomPicture(data.data))
}, []);

const nextPage = () => {
 if (randomPicture.info.next) {
  Axios.get(randomPicture.info.next)
  .then(res => setRandomPicture(res.data))
  .then(console.log('should be page 2: ', randomPicture))
 } else {
   alert('thats all folks!')
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

 const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }

 const loginButton = () => {
   if (modalIsOpen === false) {
     setModalIsOpen(true)
   } else {
     setModalIsOpen(false)

   }
 }

    return(
      <div>
        <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <PersistentDrawerLeft />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Page through our collection:
          </Typography>
          <Button color="inherit" onClick={loginButton}>Login</Button>
        </Toolbar>
        <LoginModal isOpen={modalIsOpen}/>

      </AppBar>
    </div>
    <div>
    </div>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className={classes.classyButton}>
          <Button onClick={prevPage} color="black">Previous</Button>
          <Button onClick={nextPage} color="black">Next</Button>
        </ButtonGroup>

        <PhotoList list={randomPicture} />

        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className={classes.classyButton}>
          <Button onClick={topFunction} color="black">Back to Top</Button>
        </ButtonGroup>
      </div>
    );





}

export default App;