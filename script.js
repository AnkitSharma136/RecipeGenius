const searchBox = document.querySelector('.searchBox');
const searchButton =document.querySelector('.searchButton');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseButton =document.querySelector('.recipe-close-button');

const fetchRecipes = async (query) => {
    recipeContainer.innerHTML ="<h2>Fecting recipe ....</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    //console.log(response);
    recipeContainer.innerHTML="";
    response.meals.forEach(meal =>{
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea} Dish </p>
        <p>${meal.strCategory}<p>
        `
        const button = document.createElement('button');
        button.textContent ="View Recipe";
        recipeDiv.appendChild(button);

        button.addEventListener('click' , () => {
            openRecipePopup(meal);
        });

        recipeContainer.appendChild(recipeDiv);
    })
};


searchButton.addEventListener('click' , (e) =>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
    //console.log("Button Click");
});