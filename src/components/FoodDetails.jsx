import React, { useEffect,useState } from 'react'
import styles from './foodDetails.module.css'
import ItemList from './ItemList';

export default function FoodDetails({foodid}) {
const [food,setfood]=useState({});

const[isLoading,setIsLoading]=useState(true);

  const URL=`https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY= "Enter_your_API_KEY_here";


useEffect(()=>{
  async function fetchFood(){
    const res=await fetch(`${URL}?apiKey=${API_KEY}`)
    const data= await res.json();
    console.log(data);
    setfood(data);
    setIsLoading(false);
  }
  fetchFood();
},[foodid])

  return (
    <div className={styles.mainCard}>
      <div className={styles.recipeCard}>
         <h1 className={styles.recipeName}> {food.title}</h1>
      
      <img className={styles.recipeImage}  src={food.image} />
       
       
       <div className={styles.recipeDetails}>

      <span>
        <b>🕒  {food.readyInMinutes} </b>
      </span>
      <span>
        <b>Serves :-{food.servings}</b>
      </span>
      <span>
      <b>{"    "}{food.vegetarian ? "  Vegetarian":"Non-Vegetarian"}</b>
      </span>
      <span>
       <b> Vegan {food.vegan ? ":-Vegan ":":-No Vegan"}</b>
      </span>
      </div>
          <div>
          <span>
              <b>${ (food.pricePerServing / 100).toFixed(3) } Per Serving</b>
          </span>

          </div>
        
        <h2>Require Ingrediants</h2>
        <ItemList food={food} isLoading={isLoading}/>


        <h2> Instructions </h2>

        <div className={styles.recipeInstructions}>
        <ol>
  {isLoading ? (
    <p>Loading...</p>
  ) : (
    food.analyzedInstructions?.[0]?.steps?.map((step, index) => (
      <li key={index}>{step.step}</li>
    )) || <p>No instructions available.</p>
  )}
</ol>

        </div>
         </div>
    </div>

  )
}
