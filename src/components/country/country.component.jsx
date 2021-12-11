import React from "react";

const Country = (
    {
      name,
      flags,
      officialName,
      capital,
      independent,
      population,
      continents,
      region,
      subregion
    }
  ) => {
  return(
    <div className="border p-10">
      <img alt="Country Flag" width="100px" src={flags.flags.svg}/>
      <h1>{name.name.common}</h1>
      <p>Official name: {officialName.name.official}</p>
      <p>
        Capital: {capital.capital.map(cap => cap)}
      </p>

      <p>Independent: {independent.independent ? "YES" : "NO"}</p> 
      <p>Population: {population.population}</p>
      <p>Continent: {continents.continents}</p>
      <p>Region: {region.region}</p>
      <p>Subregion: {subregion.subregion}</p>
    </div>
  )
}

export default Country