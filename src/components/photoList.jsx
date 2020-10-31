import React from 'react';
import PhotoListItem from './photoListItem.jsx';

const PhotoList = (props) => {
  // console.log('heres the list: ', props)
  if (props.list.length === 0) {
    return (
      <div>Loading Cool Art</div>
    )
  } else {
    return (
      props.list.records.map((row, key) => (
        <PhotoListItem row={row}/>
      ))
    );
  }
}

export default PhotoList;