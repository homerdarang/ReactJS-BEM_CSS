import './App.css'
import BemMethodology from './components/css-bem-methodology/BemMethodology'
import Joke from './Joke';
import JokeData from './components/joke-data/JokeData';

function App() {

  const jokesData = JokeData.map((joke) => {
    return <Joke 
      key={joke.id} 
      setup={joke.setup} 
      punchline={joke.punchline} 
      isPun={joke.isPun}
      upvotes={joke.upvotes}
      downvotes={joke.downvotes}
      />
  });

  return (
    <>
      <div className='title'>
        <p className='title--text'>ReactJS | CSS-BEM Methodology</p>
        <BemMethodology />
        {jokesData}
      </div>
    </>
  )
}

export default App
