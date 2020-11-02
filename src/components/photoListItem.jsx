import React from 'react';

const PhotoListItem = (props) => {

  if (props.row.images && typeof props.row.images[0] === 'object') {

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
      <div>
      <a href={props.row.url}>Error fetching image, Try this link:</a>
      <div>
        {props.row.title}
      </div>
      <div>
        {props.row.culture}
      </div>
      <div>
        {`Dated: ${props.row.dated}}`}
      </div>
      <div>
    {'Artist' ? props.row.people[0].displayname : 'Unknown'}
      </div>
      </div>
    )
  }
}

export default PhotoListItem;