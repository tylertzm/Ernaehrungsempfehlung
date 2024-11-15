// help with spoonacular installation https://github.com/ddsky/spoonacular-api-clients/tree/master/javascript#installation

var Spoonacular = require('spoonacular');

var defaultClient = Spoonacular.ApiClient.instance;
// Configure API key authorization: apiKeyScheme

// help with spoonacular installation https://github.com/ddsky/spoonacular-api-clients/tree/master/javascript#installation

// Configure API key authorization: apiKeyScheme
let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = '6ec4ef0ad27443c593c8c9ba152ca71d';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix = 'Token';

let apiInstance = new Spoonacular.RecipesApi();
let query = "tofu"; // String | The (natural language) search query.
let opts = {
  'minIron': 0, // Number | The minimum amount of iron in milligrams the recipe must have.
};
apiInstance.searchRecipes(query, opts, (error, data, response) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('API called successfully. Returned data:');
      console.log(JSON.stringify(data, null, 2)); // Pretty-print with indentation
    }
  });
  
