import React, { useEffect, useState } from 'react';
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

if (props.isOpen === true) {
  return (
<div>
<div style={{float: "left"}}>
     Create an account:
     <form name="myForm" method="post">
Name: <input type="text" name="fname"></input>
Email: <input type="text" name="fname"></input>
Password: <input type="text" name="fname"></input>
<input type="submit" value="Create"></input>
</form>
  </div>
  <div style={{float: "right"}}>
     Login:
     <form name="myForm2" method="get">
Email: <input type="text" name="fname"></input>
Password: <input type="text" name="fname"></input>
<input type="submit" value="Login"></input>
</form>
  </div>
</div>
  )
} else {
  return (
    <div></div>
  )
}
}