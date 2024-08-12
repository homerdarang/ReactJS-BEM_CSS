import React from 'react'

const ArtistDisplay = (props) => {
  return (
    <>
        <div>
          {props.artistName && <p>Name: {props.artistName}</p>}
          {props.artistImg && <img src={props.img}/>}
          {props.artistBio && <p>{props.artistBio}</p>}
        </div>
    </>
  )
}

export default ArtistDisplay