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
 * The GetRecipeNutritionWidgetByID200ResponseBadInner model module.
 * @module model/GetRecipeNutritionWidgetByID200ResponseBadInner
 * @version 1.1
 */
class GetRecipeNutritionWidgetByID200ResponseBadInner {
    /**
     * Constructs a new <code>GetRecipeNutritionWidgetByID200ResponseBadInner</code>.
     * @alias module:model/GetRecipeNutritionWidgetByID200ResponseBadInner
     * @param name {String} 
     * @param amount {String} 
     * @param indented {Boolean} 
     * @param percentOfDailyNeeds {Number} 
     */
    constructor(name, amount, indented, percentOfDailyNeeds) { 
        
        GetRecipeNutritionWidgetByID200ResponseBadInner.initialize(this, name, amount, indented, percentOfDailyNeeds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, amount, indented, percentOfDailyNeeds) { 
        obj['name'] = name;
        obj['amount'] = amount;
        obj['indented'] = indented;
        obj['percentOfDailyNeeds'] = percentOfDailyNeeds;
    }

    /**
     * Constructs a <code>GetRecipeNutritionWidgetByID200ResponseBadInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecipeNutritionWidgetByID200ResponseBadInner} obj Optional instance to populate.
     * @return {module:model/GetRecipeNutritionWidgetByID200ResponseBadInner} The populated <code>GetRecipeNutritionWidgetByID200ResponseBadInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecipeNutritionWidgetByID200ResponseBadInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('indented')) {
                obj['indented'] = ApiClient.convertToType(data['indented'], 'Boolean');
            }
            if (data.hasOwnProperty('percentOfDailyNeeds')) {
                obj['percentOfDailyNeeds'] = ApiClient.convertToType(data['percentOfDailyNeeds'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetRecipeNutritionWidgetByID200ResponseBadInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRecipeNutritionWidgetByID200ResponseBadInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetRecipeNutritionWidgetByID200ResponseBadInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }

        return true;
    }


}

GetRecipeNutritionWidgetByID200ResponseBadInner.RequiredProperties = ["name", "amount", "indented", "percentOfDailyNeeds"];

/**
 * @member {String} name
 */
GetRecipeNutritionWidgetByID200ResponseBadInner.prototype['name'] = undefined;

/**
 * @member {String} amount
 */
GetRecipeNutritionWidgetByID200ResponseBadInner.prototype['amount'] = undefined;

/**
 * @member {Boolean} indented
 */
GetRecipeNutritionWidgetByID200ResponseBadInner.prototype['indented'] = undefined;

/**
 * @member {Number} percentOfDailyNeeds
 */
GetRecipeNutritionWidgetByID200ResponseBadInner.prototype['percentOfDailyNeeds'] = undefined;






export default GetRecipeNutritionWidgetByID200ResponseBadInner;

