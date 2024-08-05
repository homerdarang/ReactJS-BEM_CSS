import React from 'react'
import CardData from '../props-data/CardData'
import CardDisplay from './CardDisplay'

const Card = () => {
    const datasFromCard = CardData.map((datas) => {
        return <CardDisplay 
            key={datas.id}
            image={datas.image}
            rating={datas.rating}
            reviewCounts={datas.reviewCounts}
            country={datas.country}
            title={datas.title}
            price={datas.price}
            comment={datas.comment}
        />
    });

  return (
    <div className='card--content'>
      {datasFromCard}
    </div>
  );
}

export default Card

