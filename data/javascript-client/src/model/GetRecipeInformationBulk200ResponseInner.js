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

import ApiClient from '../ApiClient';
import GetRecipeInformation200ResponseExtendedIngredientsInner from './GetRecipeInformation200ResponseExtendedIngredientsInner';
import GetRecipeInformation200ResponseWinePairing from './GetRecipeInformation200ResponseWinePairing';

/**
 * The GetRecipeInformationBulk200ResponseInner model module.
 * @module model/GetRecipeInformationBulk200ResponseInner
 * @version 1.1
 */
class GetRecipeInformationBulk200ResponseInner {
    /**
     * Constructs a new <code>GetRecipeInformationBulk200ResponseInner</code>.
     * @alias module:model/GetRecipeInformationBulk200ResponseInner
     * @param id {Number} 
     * @param title {String} 
     * @param image {String} 
     * @param imageType {String} 
     * @param servings {Number} 
     * @param readyInMinutes {Number} 
     * @param license {String} 
     * @param sourceName {String} 
     * @param sourceUrl {String} 
     * @param spoonacularSourceUrl {String} 
     * @param aggregateLikes {Number} 
     * @param healthScore {Number} 
     * @param spoonacularScore {Number} 
     * @param pricePerServing {Number} 
     * @param analyzedInstructions {Array.<String>} 
     * @param cheap {Boolean} 
     * @param creditsText {String} 
     * @param cuisines {Array.<String>} 
     * @param dairyFree {Boolean} 
     * @param diets {Array.<String>} 
     * @param gaps {String} 
     * @param glutenFree {Boolean} 
     * @param instructions {String} 
     * @param ketogenic {Boolean} 
     * @param lowFodmap {Boolean} 
     * @param occasions {Array.<String>} 
     * @param sustainable {Boolean} 
     * @param vegan {Boolean} 
     * @param vegetarian {Boolean} 
     * @param veryHealthy {Boolean} 
     * @param veryPopular {Boolean} 
     * @param whole30 {Boolean} 
     * @param weightWatcherSmartPoints {Number} 
     * @param dishTypes {Array.<String>} 
     * @param extendedIngredients {Array.<module:model/GetRecipeInformation200ResponseExtendedIngredientsInner>} 
     * @param summary {String} 
     * @param winePairing {module:model/GetRecipeInformation200ResponseWinePairing} 
     */
    constructor(id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing) { 
        
        GetRecipeInformationBulk200ResponseInner.initialize(this, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['image'] = image;
        obj['imageType'] = imageType;
        obj['servings'] = servings;
        obj['readyInMinutes'] = readyInMinutes;
        obj['license'] = license;
        obj['sourceName'] = sourceName;
        obj['sourceUrl'] = sourceUrl;
        obj['spoonacularSourceUrl'] = spoonacularSourceUrl;
        obj['aggregateLikes'] = aggregateLikes;
        obj['healthScore'] = healthScore;
        obj['spoonacularScore'] = spoonacularScore;
        obj['pricePerServing'] = pricePerServing;
        obj['analyzedInstructions'] = analyzedInstructions;
        obj['cheap'] = cheap;
        obj['creditsText'] = creditsText;
        obj['cuisines'] = cuisines;
        obj['dairyFree'] = dairyFree;
        obj['diets'] = diets;
        obj['gaps'] = gaps;
        obj['glutenFree'] = glutenFree;
        obj['instructions'] = instructions;
        obj['ketogenic'] = ketogenic;
        obj['lowFodmap'] = lowFodmap;
        obj['occasions'] = occasions;
        obj['sustainable'] = sustainable;
        obj['vegan'] = vegan;
        obj['vegetarian'] = vegetarian;
        obj['veryHealthy'] = veryHealthy;
        obj['veryPopular'] = veryPopular;
        obj['whole30'] = whole30;
        obj['weightWatcherSmartPoints'] = weightWatcherSmartPoints;
        obj['dishTypes'] = dishTypes;
        obj['extendedIngredients'] = extendedIngredients;
        obj['summary'] = summary;
        obj['winePairing'] = winePairing;
    }

    /**
     * Constructs a <code>GetRecipeInformationBulk200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecipeInformationBulk200ResponseInner} obj Optional instance to populate.
     * @return {module:model/GetRecipeInformationBulk200ResponseInner} The populated <code>GetRecipeInformationBulk200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecipeInformationBulk200ResponseInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageType')) {
                obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
            }
            if (data.hasOwnProperty('servings')) {
                obj['servings'] = ApiClient.convertToType(data['servings'], 'Number');
            }
            if (data.hasOwnProperty('readyInMinutes')) {
                obj['readyInMinutes'] = ApiClient.convertToType(data['readyInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('license')) {
                obj['license'] = ApiClient.convertToType(data['license'], 'String');
            }
            if (data.hasOwnProperty('sourceName')) {
                obj['sourceName'] = ApiClient.convertToType(data['sourceName'], 'String');
            }
            if (data.hasOwnProperty('sourceUrl')) {
                obj['sourceUrl'] = ApiClient.convertToType(data['sourceUrl'], 'String');
            }
            if (data.hasOwnProperty('spoonacularSourceUrl')) {
                obj['spoonacularSourceUrl'] = ApiClient.convertToType(data['spoonacularSourceUrl'], 'String');
            }
            if (data.hasOwnProperty('aggregateLikes')) {
                obj['aggregateLikes'] = ApiClient.convertToType(data['aggregateLikes'], 'Number');
            }
            if (data.hasOwnProperty('healthScore')) {
                obj['healthScore'] = ApiClient.convertToType(data['healthScore'], 'Number');
            }
            if (data.hasOwnProperty('spoonacularScore')) {
                obj['spoonacularScore'] = ApiClient.convertToType(data['spoonacularScore'], 'Number');
            }
            if (data.hasOwnProperty('pricePerServing')) {
                obj['pricePerServing'] = ApiClient.convertToType(data['pricePerServing'], 'Number');
            }
            if (data.hasOwnProperty('analyzedInstructions')) {
                obj['analyzedInstructions'] = ApiClient.convertToType(data['analyzedInstructions'], ['String']);
            }
            if (data.hasOwnProperty('cheap')) {
                obj['cheap'] = ApiClient.convertToType(data['cheap'], 'Boolean');
            }
            if (data.hasOwnProperty('creditsText')) {
                obj['creditsText'] = ApiClient.convertToType(data['creditsText'], 'String');
            }
            if (data.hasOwnProperty('cuisines')) {
                obj['cuisines'] = ApiClient.convertToType(data['cuisines'], ['String']);
            }
            if (data.hasOwnProperty('dairyFree')) {
                obj['dairyFree'] = ApiClient.convertToType(data['dairyFree'], 'Boolean');
            }
            if (data.hasOwnProperty('diets')) {
                obj['diets'] = ApiClient.convertToType(data['diets'], ['String']);
            }
            if (data.hasOwnProperty('gaps')) {
                obj['gaps'] = ApiClient.convertToType(data['gaps'], 'String');
            }
            if (data.hasOwnProperty('glutenFree')) {
                obj['glutenFree'] = ApiClient.convertToType(data['glutenFree'], 'Boolean');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('ketogenic')) {
                obj['ketogenic'] = ApiClient.convertToType(data['ketogenic'], 'Boolean');
            }
            if (data.hasOwnProperty('lowFodmap')) {
                obj['lowFodmap'] = ApiClient.convertToType(data['lowFodmap'], 'Boolean');
            }
            if (data.hasOwnProperty('occasions')) {
                obj['occasions'] = ApiClient.convertToType(data['occasions'], ['String']);
            }
            if (data.hasOwnProperty('sustainable')) {
                obj['sustainable'] = ApiClient.convertToType(data['sustainable'], 'Boolean');
            }
            if (data.hasOwnProperty('vegan')) {
                obj['vegan'] = ApiClient.convertToType(data['vegan'], 'Boolean');
            }
            if (data.hasOwnProperty('vegetarian')) {
                obj['vegetarian'] = ApiClient.convertToType(data['vegetarian'], 'Boolean');
            }
            if (data.hasOwnProperty('veryHealthy')) {
                obj['veryHealthy'] = ApiClient.convertToType(data['veryHealthy'], 'Boolean');
            }
            if (data.hasOwnProperty('veryPopular')) {
                obj['veryPopular'] = ApiClient.convertToType(data['veryPopular'], 'Boolean');
            }
            if (data.hasOwnProperty('whole30')) {
                obj['whole30'] = ApiClient.convertToType(data['whole30'], 'Boolean');
            }
            if (data.hasOwnProperty('weightWatcherSmartPoints')) {
                obj['weightWatcherSmartPoints'] = ApiClient.convertToType(data['weightWatcherSmartPoints'], 'Number');
            }
            if (data.hasOwnProperty('dishTypes')) {
                obj['dishTypes'] = ApiClient.convertToType(data['dishTypes'], ['String']);
            }
            if (data.hasOwnProperty('extendedIngredients')) {
                obj['extendedIngredients'] = ApiClient.convertToType(data['extendedIngredients'], [GetRecipeInformation200ResponseExtendedIngredientsInner]);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('winePairing')) {
                obj['winePairing'] = GetRecipeInformation200ResponseWinePairing.constructFromObject(data['winePairing']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetRecipeInformationBulk200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRecipeInformationBulk200ResponseInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetRecipeInformationBulk200ResponseInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['imageType'] && !(typeof data['imageType'] === 'string' || data['imageType'] instanceof String)) {
            throw new Error("Expected the field `imageType` to be a primitive type in the JSON string but got " + data['imageType']);
        }
        // ensure the json data is a string
        if (data['license'] && !(typeof data['license'] === 'string' || data['license'] instanceof String)) {
            throw new Error("Expected the field `license` to be a primitive type in the JSON string but got " + data['license']);
        }
        // ensure the json data is a string
        if (data['sourceName'] && !(typeof data['sourceName'] === 'string' || data['sourceName'] instanceof String)) {
            throw new Error("Expected the field `sourceName` to be a primitive type in the JSON string but got " + data['sourceName']);
        }
        // ensure the json data is a string
        if (data['sourceUrl'] && !(typeof data['sourceUrl'] === 'string' || data['sourceUrl'] instanceof String)) {
            throw new Error("Expected the field `sourceUrl` to be a primitive type in the JSON string but got " + data['sourceUrl']);
        }
        // ensure the json data is a string
        if (data['spoonacularSourceUrl'] && !(typeof data['spoonacularSourceUrl'] === 'string' || data['spoonacularSourceUrl'] instanceof String)) {
            throw new Error("Expected the field `spoonacularSourceUrl` to be a primitive type in the JSON string but got " + data['spoonacularSourceUrl']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['analyzedInstructions'])) {
            throw new Error("Expected the field `analyzedInstructions` to be an array in the JSON data but got " + data['analyzedInstructions']);
        }
        // ensure the json data is a string
        if (data['creditsText'] && !(typeof data['creditsText'] === 'string' || data['creditsText'] instanceof String)) {
            throw new Error("Expected the field `creditsText` to be a primitive type in the JSON string but got " + data['creditsText']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['cuisines'])) {
            throw new Error("Expected the field `cuisines` to be an array in the JSON data but got " + data['cuisines']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['diets'])) {
            throw new Error("Expected the field `diets` to be an array in the JSON data but got " + data['diets']);
        }
        // ensure the json data is a string
        if (data['gaps'] && !(typeof data['gaps'] === 'string' || data['gaps'] instanceof String)) {
            throw new Error("Expected the field `gaps` to be a primitive type in the JSON string but got " + data['gaps']);
        }
        // ensure the json data is a string
        if (data['instructions'] && !(typeof data['instructions'] === 'string' || data['instructions'] instanceof String)) {
            throw new Error("Expected the field `instructions` to be a primitive type in the JSON string but got " + data['instructions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['occasions'])) {
            throw new Error("Expected the field `occasions` to be an array in the JSON data but got " + data['occasions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['dishTypes'])) {
            throw new Error("Expected the field `dishTypes` to be an array in the JSON data but got " + data['dishTypes']);
        }
        if (data['extendedIngredients']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['extendedIngredients'])) {
                throw new Error("Expected the field `extendedIngredients` to be an array in the JSON data but got " + data['extendedIngredients']);
            }
            // validate the optional field `extendedIngredients` (array)
            for (const item of data['extendedIngredients']) {
                GetRecipeInformation200ResponseExtendedIngredientsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['summary'] && !(typeof data['summary'] === 'string' || data['summary'] instanceof String)) {
            throw new Error("Expected the field `summary` to be a primitive type in the JSON string but got " + data['summary']);
        }
        // validate the optional field `winePairing`
        if (data['winePairing']) { // data not null
          GetRecipeInformation200ResponseWinePairing.validateJSON(data['winePairing']);
        }

        return true;
    }


}

GetRecipeInformationBulk200ResponseInner.RequiredProperties = ["id", "title", "image", "imageType", "servings", "readyInMinutes", "license", "sourceName", "sourceUrl", "spoonacularSourceUrl", "aggregateLikes", "healthScore", "spoonacularScore", "pricePerServing", "analyzedInstructions", "cheap", "creditsText", "cuisines", "dairyFree", "diets", "gaps", "glutenFree", "instructions", "ketogenic", "lowFodmap", "occasions", "sustainable", "vegan", "vegetarian", "veryHealthy", "veryPopular", "whole30", "weightWatcherSmartPoints", "dishTypes", "extendedIngredients", "summary", "winePairing"];

/**
 * @member {Number} id
 */
GetRecipeInformationBulk200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetRecipeInformationBulk200ResponseInner.prototype['title'] = undefined;

/**
 * @member {String} image
 */
GetRecipeInformationBulk200ResponseInner.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
GetRecipeInformationBulk200ResponseInner.prototype['imageType'] = undefined;

/**
 * @member {Number} servings
 */
GetRecipeInformationBulk200ResponseInner.prototype['servings'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
GetRecipeInformationBulk200ResponseInner.prototype['readyInMinutes'] = undefined;

/**
 * @member {String} license
 */
GetRecipeInformationBulk200ResponseInner.prototype['license'] = undefined;

/**
 * @member {String} sourceName
 */
GetRecipeInformationBulk200ResponseInner.prototype['sourceName'] = undefined;

/**
 * @member {String} sourceUrl
 */
GetRecipeInformationBulk200ResponseInner.prototype['sourceUrl'] = undefined;

/**
 * @member {String} spoonacularSourceUrl
 */
GetRecipeInformationBulk200ResponseInner.prototype['spoonacularSourceUrl'] = undefined;

/**
 * @member {Number} aggregateLikes
 */
GetRecipeInformationBulk200ResponseInner.prototype['aggregateLikes'] = undefined;

/**
 * @member {Number} healthScore
 */
GetRecipeInformationBulk200ResponseInner.prototype['healthScore'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
GetRecipeInformationBulk200ResponseInner.prototype['spoonacularScore'] = undefined;

/**
 * @member {Number} pricePerServing
 */
GetRecipeInformationBulk200ResponseInner.prototype['pricePerServing'] = undefined;

/**
 * @member {Array.<String>} analyzedInstructions
 */
GetRecipeInformationBulk200ResponseInner.prototype['analyzedInstructions'] = undefined;

/**
 * @member {Boolean} cheap
 */
GetRecipeInformationBulk200ResponseInner.prototype['cheap'] = undefined;

/**
 * @member {String} creditsText
 */
GetRecipeInformationBulk200ResponseInner.prototype['creditsText'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
GetRecipeInformationBulk200ResponseInner.prototype['cuisines'] = undefined;

/**
 * @member {Boolean} dairyFree
 */
GetRecipeInformationBulk200ResponseInner.prototype['dairyFree'] = undefined;

/**
 * @member {Array.<String>} diets
 */
GetRecipeInformationBulk200ResponseInner.prototype['diets'] = undefined;

/**
 * @member {String} gaps
 */
GetRecipeInformationBulk200ResponseInner.prototype['gaps'] = undefined;

/**
 * @member {Boolean} glutenFree
 */
GetRecipeInformationBulk200ResponseInner.prototype['glutenFree'] = undefined;

/**
 * @member {String} instructions
 */
GetRecipeInformationBulk200ResponseInner.prototype['instructions'] = undefined;

/**
 * @member {Boolean} ketogenic
 */
GetRecipeInformationBulk200ResponseInner.prototype['ketogenic'] = undefined;

/**
 * @member {Boolean} lowFodmap
 */
GetRecipeInformationBulk200ResponseInner.prototype['lowFodmap'] = undefined;

/**
 * @member {Array.<String>} occasions
 */
GetRecipeInformationBulk200ResponseInner.prototype['occasions'] = undefined;

/**
 * @member {Boolean} sustainable
 */
GetRecipeInformationBulk200ResponseInner.prototype['sustainable'] = undefined;

/**
 * @member {Boolean} vegan
 */
GetRecipeInformationBulk200ResponseInner.prototype['vegan'] = undefined;

/**
 * @member {Boolean} vegetarian
 */
GetRecipeInformationBulk200ResponseInner.prototype['vegetarian'] = undefined;

/**
 * @member {Boolean} veryHealthy
 */
GetRecipeInformationBulk200ResponseInner.prototype['veryHealthy'] = undefined;

/**
 * @member {Boolean} veryPopular
 */
GetRecipeInformationBulk200ResponseInner.prototype['veryPopular'] = undefined;

/**
 * @member {Boolean} whole30
 */
GetRecipeInformationBulk200ResponseInner.prototype['whole30'] = undefined;

/**
 * @member {Number} weightWatcherSmartPoints
 */
GetRecipeInformationBulk200ResponseInner.prototype['weightWatcherSmartPoints'] = undefined;

/**
 * @member {Array.<String>} dishTypes
 */
GetRecipeInformationBulk200ResponseInner.prototype['dishTypes'] = undefined;

/**
 * @member {Array.<module:model/GetRecipeInformation200ResponseExtendedIngredientsInner>} extendedIngredients
 */
GetRecipeInformationBulk200ResponseInner.prototype['extendedIngredients'] = undefined;

/**
 * @member {String} summary
 */
GetRecipeInformationBulk200ResponseInner.prototype['summary'] = undefined;

/**
 * @member {module:model/GetRecipeInformation200ResponseWinePairing} winePairing
 */
GetRecipeInformationBulk200ResponseInner.prototype['winePairing'] = undefined;






export default GetRecipeInformationBulk200ResponseInner;

