import React, {useState, useEffect} from "react"
import Axios from "axios"
import './App.css';

const API = 'https://official-joke-api.appspot.com/random_joke'

const App =() => {

  const [joke, setJoke] = useState("")

  const getJoke = () => {
    Axios.get(API).then( (response) => {
      setJoke(`${response.data.setup} .......... ${response.data.punchline} 🤣 `)
    })
  }

  useEffect( () => {
    getJoke()
  }, [])

  return (
      <div className="box row">
        <h2>Jokes</h2>
        <p dangerouslySetInnerHTML={{__html: joke}}/>
        <button className="btn-floating pulse" onClick={getJoke}><i className="fas fa-plus-circle"></i></button>
      </div>
  );
}

export default App;
