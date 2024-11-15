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
 * The AnalyzeARecipeSearchQuery200ResponseIngredientsInner model module.
 * @module model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner
 * @version 1.1
 */
class AnalyzeARecipeSearchQuery200ResponseIngredientsInner {
    /**
     * Constructs a new <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code>.
     * @alias module:model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner
     * @param image {String} 
     * @param include {Boolean} 
     * @param name {String} 
     */
    constructor(image, include, name) { 
        
        AnalyzeARecipeSearchQuery200ResponseIngredientsInner.initialize(this, image, include, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, image, include, name) { 
        obj['image'] = image;
        obj['include'] = include;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner} obj Optional instance to populate.
     * @return {module:model/AnalyzeARecipeSearchQuery200ResponseIngredientsInner} The populated <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyzeARecipeSearchQuery200ResponseIngredientsInner();

            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('include')) {
                obj['include'] = ApiClient.convertToType(data['include'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyzeARecipeSearchQuery200ResponseIngredientsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AnalyzeARecipeSearchQuery200ResponseIngredientsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

AnalyzeARecipeSearchQuery200ResponseIngredientsInner.RequiredProperties = ["image", "include", "name"];

/**
 * @member {String} image
 */
AnalyzeARecipeSearchQuery200ResponseIngredientsInner.prototype['image'] = undefined;

/**
 * @member {Boolean} include
 */
AnalyzeARecipeSearchQuery200ResponseIngredientsInner.prototype['include'] = undefined;

/**
 * @member {String} name
 */
AnalyzeARecipeSearchQuery200ResponseIngredientsInner.prototype['name'] = undefined;






export default AnalyzeARecipeSearchQuery200ResponseIngredientsInner;
