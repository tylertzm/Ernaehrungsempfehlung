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
import ParseIngredients200ResponseInnerNutritionCaloricBreakdown from './ParseIngredients200ResponseInnerNutritionCaloricBreakdown';
import ParseIngredients200ResponseInnerNutritionNutrientsInner from './ParseIngredients200ResponseInnerNutritionNutrientsInner';

/**
 * The SearchGroceryProductsByUPC200ResponseNutrition model module.
 * @module model/SearchGroceryProductsByUPC200ResponseNutrition
 * @version 1.1
 */
class SearchGroceryProductsByUPC200ResponseNutrition {
    /**
     * Constructs a new <code>SearchGroceryProductsByUPC200ResponseNutrition</code>.
     * @alias module:model/SearchGroceryProductsByUPC200ResponseNutrition
     * @param nutrients {Array.<module:model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} 
     * @param caloricBreakdown {module:model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} 
     */
    constructor(nutrients, caloricBreakdown) { 
        
        SearchGroceryProductsByUPC200ResponseNutrition.initialize(this, nutrients, caloricBreakdown);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nutrients, caloricBreakdown) { 
        obj['nutrients'] = nutrients;
        obj['caloricBreakdown'] = caloricBreakdown;
    }

    /**
     * Constructs a <code>SearchGroceryProductsByUPC200ResponseNutrition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchGroceryProductsByUPC200ResponseNutrition} obj Optional instance to populate.
     * @return {module:model/SearchGroceryProductsByUPC200ResponseNutrition} The populated <code>SearchGroceryProductsByUPC200ResponseNutrition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchGroceryProductsByUPC200ResponseNutrition();

            if (data.hasOwnProperty('nutrients')) {
                obj['nutrients'] = ApiClient.convertToType(data['nutrients'], [ParseIngredients200ResponseInnerNutritionNutrientsInner]);
            }
            if (data.hasOwnProperty('caloricBreakdown')) {
                obj['caloricBreakdown'] = ParseIngredients200ResponseInnerNutritionCaloricBreakdown.constructFromObject(data['caloricBreakdown']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchGroceryProductsByUPC200ResponseNutrition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchGroceryProductsByUPC200ResponseNutrition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchGroceryProductsByUPC200ResponseNutrition.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['nutrients']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['nutrients'])) {
                throw new Error("Expected the field `nutrients` to be an array in the JSON data but got " + data['nutrients']);
            }
            // validate the optional field `nutrients` (array)
            for (const item of data['nutrients']) {
                ParseIngredients200ResponseInnerNutritionNutrientsInner.validateJSON(item);
            };
        }
        // validate the optional field `caloricBreakdown`
        if (data['caloricBreakdown']) { // data not null
          ParseIngredients200ResponseInnerNutritionCaloricBreakdown.validateJSON(data['caloricBreakdown']);
        }

        return true;
    }


}

SearchGroceryProductsByUPC200ResponseNutrition.RequiredProperties = ["nutrients", "caloricBreakdown"];

/**
 * @member {Array.<module:model/ParseIngredients200ResponseInnerNutritionNutrientsInner>} nutrients
 */
SearchGroceryProductsByUPC200ResponseNutrition.prototype['nutrients'] = undefined;

/**
 * @member {module:model/ParseIngredients200ResponseInnerNutritionCaloricBreakdown} caloricBreakdown
 */
SearchGroceryProductsByUPC200ResponseNutrition.prototype['caloricBreakdown'] = undefined;






export default SearchGroceryProductsByUPC200ResponseNutrition;

