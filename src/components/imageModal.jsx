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

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 if (typeof(props.people) === 'object' && props.people[0]) {
  return (
    <div>
      <button className={classes.modalButton} type="button" onClick={handleOpen} style={{ fontSize: 24 }}>
        {`${props.row.title}`}
      </button>
      <Modal
        className={classes.modalStyle1}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img src={props.row.images[0].baseimageurl}></img>
            <h2 id="transition-modal-title">{props.row.title}</h2>
            <p id="transition-modal-description">${props.row.culture} {`${props.row.classification} ${props.row.people[0].role} ${props.row.people[0].displayname}, dated ${props.row.dated}.`}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
 } else {
  return (
    <div>
      <button className={classes.modalButton} type="button" onClick={handleOpen} style={{ fontSize: 24 }}>
        {`${props.row.title}`}
      </button>
      <Modal
        className={classes.modalStyle1}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img src={props.row.images[0].baseimageurl}></img>
            <h2 id="transition-modal-title">{props.row.title}</h2>
            <p id="transition-modal-description">{`${props.row.culture} ${props.row.classification}. dated ${props.row.dated}.`}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
 }
}
