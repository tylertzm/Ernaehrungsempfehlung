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

/**
 * The SearchRecipes200ResponseResultsInner model module.
 * @module model/SearchRecipes200ResponseResultsInner
 * @version 1.1
 */
class SearchRecipes200ResponseResultsInner {
    /**
     * Constructs a new <code>SearchRecipes200ResponseResultsInner</code>.
     * @alias module:model/SearchRecipes200ResponseResultsInner
     * @param id {Number} 
     * @param title {String} 
     * @param calories {Number} 
     * @param carbs {String} 
     * @param fat {String} 
     * @param image {String} 
     * @param imageType {String} 
     * @param protein {String} 
     */
    constructor(id, title, calories, carbs, fat, image, imageType, protein) { 
        
        SearchRecipes200ResponseResultsInner.initialize(this, id, title, calories, carbs, fat, image, imageType, protein);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, calories, carbs, fat, image, imageType, protein) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['calories'] = calories;
        obj['carbs'] = carbs;
        obj['fat'] = fat;
        obj['image'] = image;
        obj['imageType'] = imageType;
        obj['protein'] = protein;
    }

    /**
     * Constructs a <code>SearchRecipes200ResponseResultsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRecipes200ResponseResultsInner} obj Optional instance to populate.
     * @return {module:model/SearchRecipes200ResponseResultsInner} The populated <code>SearchRecipes200ResponseResultsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchRecipes200ResponseResultsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('calories')) {
                obj['calories'] = ApiClient.convertToType(data['calories'], 'Number');
            }
            if (data.hasOwnProperty('carbs')) {
                obj['carbs'] = ApiClient.convertToType(data['carbs'], 'String');
            }
            if (data.hasOwnProperty('fat')) {
                obj['fat'] = ApiClient.convertToType(data['fat'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageType')) {
                obj['imageType'] = ApiClient.convertToType(data['imageType'], 'String');
            }
            if (data.hasOwnProperty('protein')) {
                obj['protein'] = ApiClient.convertToType(data['protein'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchRecipes200ResponseResultsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchRecipes200ResponseResultsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchRecipes200ResponseResultsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['carbs'] && !(typeof data['carbs'] === 'string' || data['carbs'] instanceof String)) {
            throw new Error("Expected the field `carbs` to be a primitive type in the JSON string but got " + data['carbs']);
        }
        // ensure the json data is a string
        if (data['fat'] && !(typeof data['fat'] === 'string' || data['fat'] instanceof String)) {
            throw new Error("Expected the field `fat` to be a primitive type in the JSON string but got " + data['fat']);
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
        if (data['protein'] && !(typeof data['protein'] === 'string' || data['protein'] instanceof String)) {
            throw new Error("Expected the field `protein` to be a primitive type in the JSON string but got " + data['protein']);
        }

        return true;
    }


}

SearchRecipes200ResponseResultsInner.RequiredProperties = ["id", "title", "calories", "carbs", "fat", "image", "imageType", "protein"];

/**
 * @member {Number} id
 */
SearchRecipes200ResponseResultsInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
SearchRecipes200ResponseResultsInner.prototype['title'] = undefined;

/**
 * @member {Number} calories
 */
SearchRecipes200ResponseResultsInner.prototype['calories'] = undefined;

/**
 * @member {String} carbs
 */
SearchRecipes200ResponseResultsInner.prototype['carbs'] = undefined;

/**
 * @member {String} fat
 */
SearchRecipes200ResponseResultsInner.prototype['fat'] = undefined;

/**
 * @member {String} image
 */
SearchRecipes200ResponseResultsInner.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
SearchRecipes200ResponseResultsInner.prototype['imageType'] = undefined;

/**
 * @member {String} protein
 */
SearchRecipes200ResponseResultsInner.prototype['protein'] = undefined;






export default SearchRecipes200ResponseResultsInner;

