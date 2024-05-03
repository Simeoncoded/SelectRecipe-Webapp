import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
//const API_KEY = "2a62f962296f440d981c03991562bebc";
const API_KEY = "77f237f8fcbf430f86c4a9176828eacd";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      //console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
      className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
