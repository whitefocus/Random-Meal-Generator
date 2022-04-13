import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect } from "react"
import "./index.scss"

export default function Recepie(props) {
  
    let arr = Object.keys(props.recipe).map(key => {
      if(key.includes('strIngredient') && props.recipe[key] != ''){
        return ((<li key={props.recipe['idMeal']}><span>-</span>{props.recipe[key]}</li>))
      }
    })
    
  return(
    <div className="container">
        <button className="next-recipe-mobile" onClick={props.nextRecipe}>Next <br/><FontAwesomeIcon icon={faArrowRight} /></button>

      <div className="recepie">
        <button className="next-recipe" onClick={props.nextRecipe}>Next <br/><FontAwesomeIcon icon={faArrowRight} /></button>
      <div  className="recepie-info">
      <img src={props.recipe["strMealThumb"]} />
      <ul className="ing">
        <li className="head">Ingredients:</li>
        {arr}
      </ul>
      </div>
      <div className="inst">
      <p className="name">{props.recipe['strMeal']}</p>
      <div className="instucitons">
      <p className="head ">Instructions:</p>
      <p >{props.recipe["strInstructions"]}</p>
      </div>
      </div>
      </div>
      
    </div>
  )
}