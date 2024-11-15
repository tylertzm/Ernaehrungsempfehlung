// help with spoonacular installation https://github.com/ddsky/spoonacular-api-clients/tree/master/javascript#installation

var Spoonacular = require('spoonacular');

var defaultClient = Spoonacular.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "6ec4ef0ad27443c593c8c9ba152ca71d"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix['x-api-key'] = "Token"

var api = new Spoonacular.DefaultApi()
var analyzeRecipeRequest = {"title":"Spaghetti Carbonara","servings":2,"ingredients":["1 lb spaghetti","3.5 oz pancetta","2 Tbsps olive oil","1  egg","0.5 cup parmesan cheese"],"instructions":"Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. "}; // {AnalyzeRecipeRequest} Example request body.
var opts = {
  'language': "en", // {String} The input language, either \"en\" or \"de\".
  'includeNutrition': false, // {Boolean} Whether nutrition data should be added to correctly parsed ingredients.
  'includeTaste': false // {Boolean} Whether taste data should be added to correctly parsed ingredients.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.analyzeRecipe(analyzeRecipeRequest, opts, callback);
