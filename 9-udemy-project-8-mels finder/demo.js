
  for(i=1;i<20;i++){
    if(meal[`strIngredient${i}`]){
  
  ingredients.push(meal[`strIngredient${i}`])
  console.log(ingredients)
    }else{
      break;
    }
    }
  
  single_mealEl.innerHTML =`
  
  <div class="single-meal">
  <h3>${meal.strMeal}</h3>
  <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
  
  <div class="single-meal-info">
   ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
  ${meal.strArea ? `<p>${meal.strArea}</p>` : ''} 
  </div>
  </div>
  <div class="main">
  <p>${meal.strInstructions}</p>
  <h2>Ingredients</h2>
  <ul>
  ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
  </ul>
  </div>
  </div>
  
  `;



  for(var i=0; i<20;i++){
    if(meal[`strIngredient${i}`]){
    
      ingredients.push(`${meal[`strIngredient${i}`]}`);
      
    console.log(ingredients)
    }else{
    break
    }
    
    }
    
    
    
    single_mealEl.innerHTML =`
      
    <div class="single-meal">
    <h3>${meal.strMeal}</h3>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    
    <div class="single-meal-info">
     ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
    ${meal.strArea ? `<p>${meal.strArea}</p>` : ''} 
    </div>
    </div>
    <div class="main">
    <p>${meal.strInstructions}</p>
    <h2>Ingredients</h2>
    <ul>
    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    </div>
    </div>
    
    `;