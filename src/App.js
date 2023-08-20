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

  // return recipes from API using axios, generate recipe components
  useEffect(() => {
    axios
      .get(currentPageURL)
      .then((res) => {
        setRecipe(
          res.data.meals.map((r) => (
              <Recipe key={r} recipe = {r} />
          ))
        );
      })
      .catch((error) => {
      });
  }, [currentPageURL]);



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
    setShowTags(!showTags);
  }

  return (
    <div className="bg-black">
      <Footer setLetter={setLetter} activeLetter={activeLetter} />

      <RecipeList recipe={recipe} />
    </div>
  );
}

export default App;
