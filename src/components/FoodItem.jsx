import React from 'react'
import styles from './fooditem.module.css';

export default function FoodItem({food,setfoodid}) {
  return (


    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt=""/>
     
      <div className={styles.itemContent}>
           <h5 className={styles.itemName}>{food.title}</h5>
</div>

<div className={styles.btnContainer}>
<button onClick={()=>{console.log(food.id)
setfoodid(food.id)
}} className={styles.itembtn}>View Recipe</button>
    </div>
    </div>
  )
}
