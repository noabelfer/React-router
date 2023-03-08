import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // corrected import

import TextField from '@mui/material/TextField';
import { Button, LinearProgress, Box } from "@mui/material";
import {Link} from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Countries(){

  const [TextInsert,setTextInsert] = useState('')
  const [loading,setLoading]=useState(false)
  const [countries, setCountries] = useState([])
  const [errorNote, setErrorNote] = useState('')
  

  function handleSubmit(event){
    event.preventDefault()
    setLoading(true)
    axios.get(`https://restcountries.com/v3.1/name/${TextInsert}`)
    .then((responseData)=>{
      setLoading(false)
      const countries = responseData.data.map(country=>({
        name: country.name.common,
        code: country.cca2
      }))
      setCountries(countries)
      setErrorNote('') // reset error note if search was successful
        
    })

    .catch((error)=> {
      console.log('no countries found')
      setLoading(false)
      setErrorNote(`no countries found for ${TextInsert}`)
      setCountries([]) // reset countries array if there was an error
      return error
    })

  }

  return(
    <>
      <h1>countries</h1>

      <Grid container spacing={2} component="form" 
        onSubmit={(event)=>{
          event.preventDefault()
          handleSubmit(event)
        }}>
        <Grid item xs={6}> {/* corrected Grid item component */}
          <Item>
            <TextField
              label="country"
              placeholder="search for a country name"
              variant="filled"
              fullWidth={true} 
              value={TextInsert}
              onChange={(event)=>{
                setTextInsert(event.target.value)
                setErrorNote('')
                setCountries([])
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={6}> {/* corrected Grid item component */}
          <Item>
            <Button
              type="submit"
              style={{height:55.97,outline:null}}
              variant="contained"
              onSubmit={handleSubmit}
            >
              search
            </Button>
          </Item>
          {loading && <LinearProgress/>}
          {errorNote && <Box>{errorNote}</Box>} {/* added conditional rendering for error note */}
          {countries.length > 0 && (
            <Box>
              <ul>
                {countries.map((country,index)=>(
                  <li key={index}>
                    <Link to={`/countries/${country.name}`}>
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  
  )
}
