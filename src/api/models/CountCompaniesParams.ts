/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * Schematic API
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Input parameters
 * @export
 * @interface CountCompaniesParams
 */
export interface CountCompaniesParams {
    /**
     * 
     * @type {Array<string>}
     * @memberof CountCompaniesParams
     */
    ids?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CountCompaniesParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CountCompaniesParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof CountCompaniesParams
     */
    planId?: string;
    /**
     * 
     * @type {string}
     * @memberof CountCompaniesParams
     */
    q?: string;
    /**
     * 
     * @type {string}
     * @memberof CountCompaniesParams
     */
    withoutFeatureOverrideFor?: string;
}

/**
 * Check if a given object implements the CountCompaniesParams interface.
 */
export function instanceOfCountCompaniesParams(value: object): boolean {
    return true;
}

export function CountCompaniesParamsFromJSON(json: any): CountCompaniesParams {
    return CountCompaniesParamsFromJSONTyped(json, false);
}

export function CountCompaniesParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountCompaniesParams {
    if (json == null) {
        return json;
    }
    return {
        
        'ids': json['ids'] == null ? undefined : json['ids'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'planId': json['plan_id'] == null ? undefined : json['plan_id'],
        'q': json['q'] == null ? undefined : json['q'],
        'withoutFeatureOverrideFor': json['without_feature_override_for'] == null ? undefined : json['without_feature_override_for'],
    };
}

export function CountCompaniesParamsToJSON(value?: CountCompaniesParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ids': value['ids'],
        'limit': value['limit'],
        'offset': value['offset'],
        'plan_id': value['planId'],
        'q': value['q'],
        'without_feature_override_for': value['withoutFeatureOverrideFor'],
    };
}

