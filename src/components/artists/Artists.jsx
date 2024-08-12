import React from 'react';
import ArtistDisplay from './ArtistDisplay';
import ArtistsData from '../props-data/ArtistsData';

const Artists = () => {
  const artistList = ArtistsData.map((acting) => {
    return <ArtistDisplay 
        key={acting.id}
        artistName={acting.artistName}
        artistImg={acting.artistImg}
        artistBio={acting.artistBio}
    />
  })
  return (
    <>
      <div>
        {artistList}
      </div>
    </>
  )
}

export default Artists
