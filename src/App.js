import "./App.css";
import RecipeList from "./Components/RecipeList/RecipeList";
import Footer from "./Components/Footer/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Components/RecipeList/Recipe";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [activeLetter, setActiveLetter] = useState("a");

  // return recipes from API using axios
  useEffect(() => {
    axios
      .get(currentPageURL)
      .then((res) => {
        recipes.push(res.data.meals);
        setRecipe(
          res.data.meals.map((r) => (
              <Recipe recipe = {r} recipeThumb = {r.strMealThumb} recipeName={r.strMeal} />
          ))
        );
      })
      .catch((error) => {
      });
  }, [currentPageURL, activeRecipe]);



  function setLetter(letter) {
    setCurrentPageURL(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    setActiveLetter(letter);
    window.scrollTo(0, 0);
  }

  const [showTags, setShowTags] = useState(false);

  function handleRecipeClick(r) {
    console.log(r.strMeal)
    setActiveRecipe(r.strMeal)
    setShowTags(!showTags);
  }

  return (
    <div className="bg-white">
      <RecipeList recipe={recipe} />
      <Footer setLetter={setLetter} activeLetter={activeLetter} />
    </div>
  );
}

export default App;
