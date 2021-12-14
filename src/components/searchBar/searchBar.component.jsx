import React, { useEffect, useState } from "react";
import axios from "axios"
import Country from "../country/country.component";

const SearchBar = () => {

  const [input, setInput] = useState("")
  const [allCountries, setAllCountries] = useState([])
  const [res] = useState(false)

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
        .toLowerCase()) 
        || 
      country.name.official
        .toLowerCase()
        .includes(input
          .toLowerCase()) 
    )
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

  if(filteredResult.length > 0 && filteredResult.length < 16) {
    result = filteredResult
  }
  else if(input === ""){
    result = ""
  }
  else if(filteredResult.length > 11){
    manyMatches = "Too many matches! specify another query."
  }
  else if (input !== filteredResult){
    notFound = "Country not found!"
  }
    
  return(
    <div>
      <div className="flex justify-center ">
        <input className="shadow-2xl placeholder:italic placeholder:text-gray-500 block w-40% border border-gray-300 rounded-3xl py-2 pl-6 pr-2 focus:outline-none focus:border-white focus:ring-gray-900 dark:focus:ring-white dark:shadow-[#8b8787] dark:shadow-lg focus:ring-1 sm:text-sm" placeholder="Search any country..."
        type="text"
        value={input}
        onChange={handleChange}
        />
      </div>
      <h1 className="text-center text-gray-100">{res ? "Results Found" : ""}</h1>
      
      <div>
        {result}
      </div>
      
      <p className="text-yellow-600 font-semibold text-center pt-10 text-lg font-mono">{manyMatches}</p>
      <p className="text-red-600 font-semibold text-center pt-5 text-lg font-mono">{notFound}</p>
    </div>
  )
}

export default SearchBar