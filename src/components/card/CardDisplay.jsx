import React from 'react'

const CardDisplay = (props) => {
  return (
    <>
        <div className='card card--grid'>
            {props.image && <img className='cards--img' src={props.image} alt="" />}
            <div className='card--info'>
                {props.rating && <p>Rating: {props.rating}</p>}
                {props.reviewCounts && <p>Reviews: ({props.reviewCounts})</p>}
                {props.country && <p>{props.country}</p>}
            </div>
            {props.title && <p>{props.title}</p>}
            {props.price && <p className='extra--light'>{props.price} / person</p>}
        </div>
    </>
  )
}

export default CardDisplay
