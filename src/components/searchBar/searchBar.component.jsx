import React, { useEffect, useState } from "react";
import axios from "axios"
import Country from "../country/country.component";

const SearchBar = () => {

  const [input, setInput] = useState("")
  const [allCountries, setAllCountries] = useState([])

  const handleChange = e => {
    setInput(e.target.value)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res => {
        console.log("Promise Passed!");
        setAllCountries(res.data)
      })
  }, [])

  const filteredResult = allCountries
    .filter(country => country.name.common
      .toLowerCase()
      .includes(input
        .toLowerCase()))
    .map((filtered, index) => 
    (
      <Country 
        key={index}
        name={filtered}
        flags={filtered}
        capital={filtered}
        officialName={filtered}
        independent={filtered}
        population={filtered}
        continents={filtered}
        region={filtered}
        subregion={filtered}
      />
    ))

  let result = "" 
  let notFound = ""
  let manyMatches = ""

  if(filteredResult.length > 0 && filteredResult.length < 11) {
    result = filteredResult
  }
  else if(input === ""){
    result = ""
  }
  else if(filteredResult.length > 11){
    manyMatches = "Too many matches, specify another query"
  }
  else if (input !== filteredResult){
    notFound = "Country not found"
  }
    
  return(
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
      />
      <p>{result}</p>
      <p className="text-orange-500">{manyMatches}</p>
      <p className="text-red-500">{notFound}</p>
    </div>
  )
}

export default SearchBar