import './App.css'
import BemMethodology from './components/css-bem-methodology/BemMethodology'
import Joke from './Joke';
import JokeData from './components/props-data/JokeData';
import Card from './components/card/Card';


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
        <Card />
      </div>
    </>
  )
}

export default App
