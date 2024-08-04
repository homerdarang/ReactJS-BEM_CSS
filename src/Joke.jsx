import React from 'react'

const Joke = (props) => {
  return (
    <div className='joke'>
      {props.isPun && props.setup && <h3 className='font-medium text-3xl'>setup:{props.setup}, upvotes: {props.upvotes}</h3>}
      {props.punchline && <p className='text-xl font-extralight'>punchline: {props.punchline}, downvotes: {props.downvotes}</p>}
      <hr />
    </div>
  )
}

export default Joke


// this is props concept