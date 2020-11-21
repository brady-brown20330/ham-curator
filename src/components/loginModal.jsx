import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalButton: {
    background: 'none !important',
    border: 'none',
    padding: '0!important',
    color: 'white',
  },
  modalStyle1:{
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    top:'10%',
    left:'10%',
    overflow:'scroll',
    height:'100%',
    maxWidth: '100%',
  },
}));

export default function LoginModal(props) {
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  const addUser = (event) => {
    Axios.post('/users', {
      name: event.name.value,
      email: event.email.value,
      password: event.password.value
    })
    .then(data => alert('heres what we got back: ', data))
  }

  const checkUser = (event) => {
    let username = event.username
    let password = event.password

    Axios.get('/users')
    .then(data => console.log('heres what we got back: ', data))
  }

if (props.isOpen === true) {
  return (
<div>
<div style={{float: "left"}}>
     Create an account:
     <form name="createForm">
        Name: <input type="text" name="name"></input>
        Email: <input type="text" name="email"></input>
        Password: <input type="text" name="password"></input>
        <button type="submit" onClick={function() { addUser(createForm) }}>Create</button>
      </form>
  </div>


  <div style={{float: "right"}}>
     Login:
     <form name="loginForm">
      Email: <input type="text" name="email"></input>
      Password: <input type="text" name="password"></input>
      <button type="submit" onClick={function() { checkUser(loginForm) }}>Login</button>
    </form>
  </div>
</div>
  );
} else {
  return (
    <div></div>
  )
}
}