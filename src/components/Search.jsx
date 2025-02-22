import { useState, useEffect } from "react";
import styles from './search.module.css';

const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY= "Enter_your_API_KEY_here";



export default function Search({foodData,setFoodData}) {
    const  [query,setquery]=useState()

    
    useEffect(() => {
      async function fetchFood() {
          try {
              const resp = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
              const data = await resp.json();
              console.log(data.results);
              setFoodData(data.results);
          } catch (error) {
              console.error("Error fetching food data:", error);
          }
      }

      fetchFood();
  }, [query]);

  return (


    <div classame={styles.searchContainer}>

        <input className={styles.input}  type="text" onChange={(e)=>{
            setquery(e.target.value);
        } }value={query}/>
        
    </div>
  )
}
