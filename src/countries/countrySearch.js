import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import Countries from "./Countries"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function CountrySearch() {

  const urlParams = useParams()
  console.log(urlParams)

  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
      axios.get(`https://restcountries.com/v3.1/name/${urlParams.countryname}?fullText=true`)
      .then((responseData) => {
          setCountryData(responseData.data[0])
          console.log(responseData)
      })
  }, [urlParams.countryname])



    return (
      
      <>
      

  


<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={countryData.flags.svg}
          alt={urlParams.countryname}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {urlParams.countryname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {countryData && 
          <div>
  <p>capital: {countryData.capital}
  </p>
  <p>continent: {countryData.continents[0]}
  </p>

  <p>population: {countryData.population}
  </p>
  
        </div>
  
}

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

      </>
  )

}