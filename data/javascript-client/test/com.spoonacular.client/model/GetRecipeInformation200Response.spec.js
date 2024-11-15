/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.spoonacular.client/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.spoonacular.client/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpoonacularApi);
  }
}(this, function(expect, SpoonacularApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SpoonacularApi.GetRecipeInformation200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetRecipeInformation200Response', function() {
    it('should create an instance of GetRecipeInformation200Response', function() {
      // uncomment below and update the code to test GetRecipeInformation200Response
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be.a(SpoonacularApi.GetRecipeInformation200Response);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property imageType (base name: "imageType")', function() {
      // uncomment below and update the code to test the property imageType
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property servings (base name: "servings")', function() {
      // uncomment below and update the code to test the property servings
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property readyInMinutes (base name: "readyInMinutes")', function() {
      // uncomment below and update the code to test the property readyInMinutes
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property license (base name: "license")', function() {
      // uncomment below and update the code to test the property license
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property sourceName (base name: "sourceName")', function() {
      // uncomment below and update the code to test the property sourceName
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property sourceUrl (base name: "sourceUrl")', function() {
      // uncomment below and update the code to test the property sourceUrl
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property spoonacularSourceUrl (base name: "spoonacularSourceUrl")', function() {
      // uncomment below and update the code to test the property spoonacularSourceUrl
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property aggregateLikes (base name: "aggregateLikes")', function() {
      // uncomment below and update the code to test the property aggregateLikes
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property healthScore (base name: "healthScore")', function() {
      // uncomment below and update the code to test the property healthScore
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property spoonacularScore (base name: "spoonacularScore")', function() {
      // uncomment below and update the code to test the property spoonacularScore
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property pricePerServing (base name: "pricePerServing")', function() {
      // uncomment below and update the code to test the property pricePerServing
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property analyzedInstructions (base name: "analyzedInstructions")', function() {
      // uncomment below and update the code to test the property analyzedInstructions
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property cheap (base name: "cheap")', function() {
      // uncomment below and update the code to test the property cheap
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property creditsText (base name: "creditsText")', function() {
      // uncomment below and update the code to test the property creditsText
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property cuisines (base name: "cuisines")', function() {
      // uncomment below and update the code to test the property cuisines
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property dairyFree (base name: "dairyFree")', function() {
      // uncomment below and update the code to test the property dairyFree
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property diets (base name: "diets")', function() {
      // uncomment below and update the code to test the property diets
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property gaps (base name: "gaps")', function() {
      // uncomment below and update the code to test the property gaps
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property glutenFree (base name: "glutenFree")', function() {
      // uncomment below and update the code to test the property glutenFree
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property instructions (base name: "instructions")', function() {
      // uncomment below and update the code to test the property instructions
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property ketogenic (base name: "ketogenic")', function() {
      // uncomment below and update the code to test the property ketogenic
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property lowFodmap (base name: "lowFodmap")', function() {
      // uncomment below and update the code to test the property lowFodmap
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property occasions (base name: "occasions")', function() {
      // uncomment below and update the code to test the property occasions
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property sustainable (base name: "sustainable")', function() {
      // uncomment below and update the code to test the property sustainable
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property vegan (base name: "vegan")', function() {
      // uncomment below and update the code to test the property vegan
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property vegetarian (base name: "vegetarian")', function() {
      // uncomment below and update the code to test the property vegetarian
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property veryHealthy (base name: "veryHealthy")', function() {
      // uncomment below and update the code to test the property veryHealthy
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property veryPopular (base name: "veryPopular")', function() {
      // uncomment below and update the code to test the property veryPopular
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property whole30 (base name: "whole30")', function() {
      // uncomment below and update the code to test the property whole30
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property weightWatcherSmartPoints (base name: "weightWatcherSmartPoints")', function() {
      // uncomment below and update the code to test the property weightWatcherSmartPoints
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property dishTypes (base name: "dishTypes")', function() {
      // uncomment below and update the code to test the property dishTypes
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property extendedIngredients (base name: "extendedIngredients")', function() {
      // uncomment below and update the code to test the property extendedIngredients
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

    it('should have the property winePairing (base name: "winePairing")', function() {
      // uncomment below and update the code to test the property winePairing
      //var instance = new SpoonacularApi.GetRecipeInformation200Response();
      //expect(instance).to.be();
    });

  });

}));
