import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

export default function RandomJoke(){

  const [currrJoke,setCurrJoke] = useState(null)

  function sendRequest(){
    axios.get('https://api.chucknorris.io/jokes/random')
    .then((response) => {setCurrJoke(response.data.value)})
    }
  
    useEffect(() => {
        sendRequest()
      },[])
      
      return(
        <>
  <h1>{currrJoke}</h1>
  <p></p>
  <Button onClick={()=> sendRequest()} variant="contained" >get me another joke</Button>

  </>
  )
}
