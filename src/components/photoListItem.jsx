import React from 'react';

const PhotoListItem = (props) => {

  if (props.row.images[0]) {
      return (
    <div>
      <img src={props.row.images[0].baseimageurl} alt="fetching"></img>
      <div>
        {props.row.title}
      </div>
    </div>
  )
  } else {
    return (
      <div>Error Fetching Image</div>
    )
  }
}

export default PhotoListItem;