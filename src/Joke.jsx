import React from 'react'

const Joke = (props) => {
  return (
    <div className='joke'>
      <h3 className='font-medium text-2xl'>{props.setup}</h3>
      <p className='text-xl font-extralight'>{props.punchline}</p>
      <hr />
    </div>
  )
}

export default Joke


// this is props concept