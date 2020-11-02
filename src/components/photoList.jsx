import React, { useEffect, useState } from 'react';
import PhotoListItem from './photoListItem.jsx';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      display: 'flex',
      maxHeight: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '100%',
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));

const PhotoList = (props) => {

  const classes = useStyles();
  // console.log('heres the list: ', props)
  if (!props.list.records) {
    return (
      <h2>Loading Cool Art</h2>
    )
  } else {
    return (
      <div className={classes.root}>
      <GridList cols={1} cellHeight={200} spacing={1} className={classes.gridList}>
        {props.list.records.map((row, key) => (
          <PhotoListItem row={row} />
        ))}
      </GridList>
    </div>
      );
  }
}

export default PhotoList;