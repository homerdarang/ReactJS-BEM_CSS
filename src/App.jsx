import './App.css'
import BemMethodology from './components/css-bem-methodology/BemMethodology'
import Joke from './Joke'

function App() {

  return (
    <>
      <div className='title'>
        <p className='title--text'>ReactJS | CSS-BEM Methodology</p>
        <BemMethodology />
        <Joke 
          setup={'Ako he bilibid nga waray kapresohan'}
          punchline={'Dere ako nadadakop kay madalunot ako!'}
        />
        <Joke 
          setup={'Kahuna la nautakan hihi'}
          punchline={'Takay waray ngean.'}
        />
      </div>
    </>
  )
}

export default App
