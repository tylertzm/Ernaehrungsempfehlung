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
 * The AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner model module.
 * @module model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner
 * @version 1.1
 */
class AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner {
    /**
     * Constructs a new <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code>.
     * @alias module:model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner
     * @param id {Number} 
     * @param name {String} 
     * @param localizedName {String} 
     * @param image {String} 
     */
    constructor(id, name, localizedName, image) { 
        
        AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.initialize(this, id, name, localizedName, image);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, localizedName, image) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['localizedName'] = localizedName;
        obj['image'] = image;
    }

    /**
     * Constructs a <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner} obj Optional instance to populate.
     * @return {module:model/AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner} The populated <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('localizedName')) {
                obj['localizedName'] = ApiClient.convertToType(data['localizedName'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['localizedName'] && !(typeof data['localizedName'] === 'string' || data['localizedName'] instanceof String)) {
            throw new Error("Expected the field `localizedName` to be a primitive type in the JSON string but got " + data['localizedName']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }

        return true;
    }


}

AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.RequiredProperties = ["id", "name", "localizedName", "image"];

/**
 * @member {Number} id
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['name'] = undefined;

/**
 * @member {String} localizedName
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['localizedName'] = undefined;

/**
 * @member {String} image
 */
AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner.prototype['image'] = undefined;






export default AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerIngredientsInner;
