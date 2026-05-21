import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//main ui chills here
//class components work but its some old jawn
//they usually use function components nowadays
const App = () => {
  
  // set has liked is used to actual set the state
  return ( 
    <div className = "card-container">
      <Card title="Movies" />
      <Card title="TV Shows"/>
      <Card title="Books" />
    </div>

  )
}

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  
  useEffect(() => {
    console.log(`${title} The card  has been ${hasLiked ? 'liked' : 'unliked'}`);
  });
  
  return (
    <div className = "card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'} 
      </button>
    </div>
  )
}

//state holds info that changes over time
//using a regular variable as opposed to a state, it wont work
// wont update variables that change. relys on state
export default App
