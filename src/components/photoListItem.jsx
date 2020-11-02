import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import TransitionsModal from './imageModal.jsx';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridListTile: {
      display: 'flex',
      width: '800px',
      height: '400px',
      maxHeight: '100%',
      maxWidth: '100%',
      margin: '10px',
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

const PhotoListItem = (props) => {
  const classes = useStyles();
  const [modalIsOpen, setModal] = useState(false);


  if (props.row.images && typeof props.row.images[0] === 'object') {

      return (
        <div>
        <GridListTile className={classes.gridListTile}>

        <img src={props.row.images[0].baseimageurl} alt="fetching"/>
        <GridListTileBar
          title={(
            <TransitionsModal row={props.row} />
          )}
          titlePosition="top"
          actionIcon={
            <IconButton className={classes.icon}>
              <StarBorderIcon />
            </IconButton>
          }
          actionPosition="left"
          className={classes.titleBar}
        />
      </GridListTile>
      </div>
  )
  } else {
    return (
      <div></div>
    //   <div>
    //   <a href={props.row.url}>Error fetching image, Try this link:</a>
    //   <div>
    //     {props.row.title}
    //   </div>
    //   <div>
    //     {props.row.culture}
    //   </div>
    //   <div>
    //     {`Dated: ${props.row.dated}}`}
    //   </div>
    //   <div>
    // {'Artist' ? props.row.people[0].displayname : 'Unknown'}
    //   </div>
    //   </div>
    )
  }
}

/*
`${props.row.title}, Artist: ${props.row.people[0].displayname || 'Unknown'}, Culture: ${props.row.culture}, Dated: ${props.row.title}`
*/

export default PhotoListItem;