import React from "react"
import "./App.css"
import SearchBar from "./components/searchBar/searchBar.component";

function App() {

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div className="">
      <div className="text-center px-10">
        <h1 className="text-2xl sm:text-3xl pt-8 text-gray-100 font-bold pb-5">Get quick info on any country of the world!</h1>
      </div>

      <hr />

      <div className="flex justify-center pt-8">
        <div class="relative inline-block w-10 mb-9 select-none transition duration-200 ease-in">
          <input onClick={handleClick} type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black border-4 appearance-none cursor-pointer"/>
          <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-100 cursor-pointer"></label>
        </div>
      </div>

      <div className="pt-5 pb-10">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;