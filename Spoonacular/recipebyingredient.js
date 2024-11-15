// help with spoonacular installation https://github.com/ddsky/spoonacular-api-clients/tree/master/javascript#installation

var Spoonacular = require('spoonacular');

var defaultClient = Spoonacular.ApiClient.instance;
// Configure API key authorization: apiKeyScheme

// help with spoonacular installation https://github.com/ddsky/spoonacular-api-clients/tree/master/javascript#installation

// Configure API key authorization: apiKeyScheme
let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = '6ec4ef0ad27443c593c8c9ba152ca71d';

let apiInstance = new Spoonacular.RecipesApi();
let query = "spinach"; // String | The (natural language) search query.
let opts = {
    'number': 100,
    'minIron': 10, // Number | The minimum amount of iron in milligrams the recipe must have.
};
apiInstance.searchRecipes(query, opts, (error, data, response) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('API called successfully. Returned data:');
      console.log(JSON.stringify(data, null, 2)); // Pretty-print with indentation
    }
  });
  