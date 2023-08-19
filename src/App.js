import "./App.css";
import RecipeList from "./Components/RecipeList/RecipeList";
import Footer from "./Components/Footer/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  const [activeLetter, setActiveLetter] = useState("a")
  const [activeRecipe, setActiveRecipe] = useState("")

  // return recipes from API
  useEffect(() => {
  axios
    .get(currentPageURL)
    .then((res) => {
      setRecipe(
        res.data.meals.map((r) => (
          <>
            <img className="self-center" height="200" width="200" src={r.strMealThumb} alt={r.strMeal} />
            <div>{r.strMeal}</div>
          </>
        ))
      );
    });
  }, [currentPageURL])

  function setLetter(letter) {
    setCurrentPageURL(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    setActiveLetter(letter)
    window.scrollTo(0, 0)
  }


  return (
    <div className="">
      <RecipeList recipe={recipe} />
      <Footer setLetter={setLetter} activeLetter={activeLetter} />


    </div>
  );
}

export default App;
