// URL for the API call
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=avocado';

// Make the API call using fetch
fetch(url)
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    console.log('API called successfully. Data:', data);
    // You can access the meal data in `data.meals`
    if (data.meals) {
      data.meals.forEach(meal => {
        console.log(`Meal Name: ${meal.strMeal}`);
        console.log(`Meal ID: ${meal.idMeal}`);
      });
    } else {
      console.log('No meals found');
    }
  })
  .catch(error => {
    console.error('Error with API call:', error);
  });
