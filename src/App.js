
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './home/home';
import RandomJoke from './ChucknorrisJoke/RandomJoke.js';
import Countries from './countries/Countries.js';
import About from './about/About.js';
import CountrySearch from './countries/countrySearch';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chuckjoke/" element={<RandomJoke />}/>
          <Route path="about/" element={<About/>}/>
          <Route path="countries/" element={<Countries />} />
          <Route path="countries/:countryname/" element={<CountrySearch />} />
            
          {/* <Route path="countries/" element={<Countries />} />
            <Route path="countries/:countryname" element={<CountrySearch />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
         
       
        </Route>
      </Routes>
  )
}


export default App;
