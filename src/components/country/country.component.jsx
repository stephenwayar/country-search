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
    <div className="sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12 dark:shadow-[#5c5a5a] shadow-2xl dark:shadow-lg rounded-3xl m-auto w-60 mt-5 bg-white">

      <div className="w-full">
        <img className="h-28 sm:h-40 w-full  rounded-t-3xl" alt="Country Flag" src={flags.flags.png ? flags.flags.png : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}/>
      </div>

      <div className="px-3 pt-3 pb-5 text-gray-900">

        <h1 className="font-mono text-2xl sm:text-3xl font-bold">{name.name.common}</h1>

        <hr/>

        <p className="pt-2 text-xs sm:text-base font-bold">Official name: <span className="font-normal">{officialName.name.official ? officialName.name.official : ""}</span></p>

        <hr />

        <p className="pt-2 text-xs font-bold sm:text-base">
          Capital: <span className="font-normal">{capital.capital ? capital.capital.map(cap => cap) : ""}</span>
        </p>
        
        <p className="pt-2 text-xs font-bold sm:text-base">Independent: <span className="font-normal">{independent.independent ? "YES" : "NO"}</span></p> 

        <hr />

        <p className="pt-2 text-xs font-bold sm:text-base">Population: <span className="font-normal">{population.population ? population.population : ""}</span></p>

        <hr />

        <p className="pt-2 text-xs font-bold sm:text-base">Continent: <span className="font-normal">{continents.continents ? continents.continents : ""}</span></p>

        <p className="pt-2 text-xs font-bold sm:text-base">Region: <span className="font-normal">{region.region ? region.region : ""}</span></p>

        <p className="pt-2 text-xs font-bold sm:text-base">Subregion: <span className="font-normal">{subregion.subregion ? subregion.subregion : ""}</span></p>
      </div>
    </div>
  )
}

export default Country