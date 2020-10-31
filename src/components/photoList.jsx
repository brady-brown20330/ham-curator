import React from 'react';
import PhotoListItem from './photoListItem.jsx';

const PhotoList = (props) => {
  // console.log('heres the list: ', props)
  if (!props.list.records) {
    console.log('should be an empty array: ', props.list)
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