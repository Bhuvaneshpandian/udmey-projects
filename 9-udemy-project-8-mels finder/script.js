const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');

let foodItems = [];
console.log(foodItems)

function searchMeal(event) {
  event.preventDefault();
  search.innerHTML = ``;
  const serachValue = search.value;
  //console.log(serachValue);

  if (serachValue.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serachValue}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        resultHeading.innerHTML = `<h2> You Search For '${serachValue}'</h2>`

        if (data.meals == null) {
          resultHeading.innerHTML = `<h2>'You Enter The Invalid Food Item ! Please Try Again  '</h2>`
        } else {
          foodItems = data.meals;
          mealsEl.innerHTML = foodItems.map(meal => `
        
        <div class ="meal">
        <img src= "${meal.strMealThumb}" alt="${meal.strMeal}"/>
        <div class = "mealInfo"  mealId ="${meal.idMeal}">
        <h3>'${meal.strMeal}'</h3>
        </div>
        </div>
      `)
            .join('')

        }
      })
    search.value = '';
  } else {
    alert("Please enter Serach meals for get food")
  }

}

function getFoodId(mealsId) {
console.log(mealsId)
return foodItems.find((meal) => mealsId == meal.idMeal);
}


function getRandomMeal(){

  mealsEl.innerHTML = '';
 resultHeading.innerHTML = '';


 fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res=> res.json())
.then(data=>{
const meal = data.meals[0];
addDomEl(meal)
})
}





function addDomEl(meal) {
  const ingredients = [];

  for (i = 1; i < 20; i++) {
    if (meal[`strIngredient${i}`]) {

      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)


      //console.log(ingredients)
    } else {
      break;
    }
  }

  single_mealEl.innerHTML = `
  
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

}


submit.addEventListener('submit', searchMeal);

random.addEventListener('click', getRandomMeal);



mealsEl.addEventListener('click', (event) => {
  const meal_info = event.path.find(item => {

    if (item.classList) {
      return item.classList.contains('mealInfo');
    } else {
      return false;
    }
  });

  if (meal_info) {
  const mealsId = meal_info.getAttribute('mealId');
    const meal = getFoodId(mealsId)
    addDomEl(meal)
  }
})







