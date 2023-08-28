import "./App.css";
import RecipeList from "./Components/RecipeList/RecipeList";
import Footer from "./Components/Footer/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Components/RecipeList/Recipe";
import Home from "./Components/Home/Home";
import Country from "./Components/Home/Country";
import uuid from "react-uuid";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [country, setCountry] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState("");
  const [activeLetter, setActiveLetter] = useState("a");

  // return recipes from API using axios, generate recipe components
  useEffect(() => {
    axios
      .get(currentPageURL)
      .then((res) => {
        if(res.data.meals !== null) {
        setRecipe(res.data.meals.map((r) => <Recipe key={r} recipe={r} />));
        }
        else {
          alert("No recipes found for this letter, please pick another letter and try again.")
        }
      })
      .catch((error) => {});
  }, [currentPageURL]);

  function setLetter(letter) {
    setCurrentPageURL(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    setActiveLetter(letter);
    window.scrollTo(0, 0);
  }

  function setHome() {
    setCurrentPageURL("");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => {
        setCountry(
          res.data.meals.map((c) => <Country key={uuid} country={c} />)
        );
      });
  }

  const [showTags, setShowTags] = useState(false);

  function handleRecipeClick(r) {
    console.log(r.strMeal);
    setShowTags(!showTags);
  }

  return (
    <div>
      <Footer
        setHome={setHome}
        setLetter={setLetter}
        activeLetter={activeLetter}
      />
      <div className={currentPageURL === "" ? "block" : "hidden"}>
        <Home country={country} />
      </div>
      <div className={currentPageURL !== "" ? "block" : "hidden"}>
        <RecipeList recipe={recipe} />
      </div>
    </div>
  );
}

export default App;
