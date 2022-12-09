import "./styles.css";
import {useState, useEffect, useRef} from 'react'
import axios from'axios'



export default function App() {

   const getJoke =  () => {
      axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((response)=> {
        console.log(response)
        setJoke(response.data)
      })
     
   } 

   const ref = useRef(null);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [showData, setShowData] = useState(false)

  const {email, password } = formData;

  const [joke, setJoke] = useState()
  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onClick =(e) => {
    e.preventDefault()
    setShowData(true)
  }

  const onClicktoFalse =(e) => {
    e.preventDefault()
    setShowData(false)
  }


  return (
    <>
    {!showData && 
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label for='email'>Email</label>
      <br/>
      
      <input name='email' value={email}  type='text' onChange={onChange} />
      <br/>
      <label for='password'>Password</label> 
      <br/>
      <input name='password' value={password}  type='password' onChange={onChange} />
      <br/>
      <button
        style={{marginTop: '10px'}}
        onClick={onClick}
      >Login</button>

      <br/>
      
    </div> }

    {showData && 
    <div className="App">
      <h1
      id='joke'
      >You are now Logged in as {email}</h1>
      {joke && 
      <h4
      ref={ref} id="joke"
      >{joke.setup}</h4>}
      <button
        onClick={getJoke}
      >Get a joke </button>
      <button
        style={{marginTop: '10px'}}
        onClick={onClicktoFalse}
      >Logout</button>

      <br/>
      
    </div> }

    </>
  );
}
