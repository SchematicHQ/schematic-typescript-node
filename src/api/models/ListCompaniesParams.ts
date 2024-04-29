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
 * @interface ListCompaniesParams
 */
export interface ListCompaniesParams {
    /**
     * 
     * @type {Array<string>}
     * @memberof ListCompaniesParams
     */
    ids?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ListCompaniesParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListCompaniesParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof ListCompaniesParams
     */
    planId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompaniesParams
     */
    q?: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompaniesParams
     */
    withoutFeatureOverrideFor?: string;
}

/**
 * Check if a given object implements the ListCompaniesParams interface.
 */
export function instanceOfListCompaniesParams(value: object): boolean {
    return true;
}

export function ListCompaniesParamsFromJSON(json: any): ListCompaniesParams {
    return ListCompaniesParamsFromJSONTyped(json, false);
}

export function ListCompaniesParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCompaniesParams {
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

export function ListCompaniesParamsToJSON(value?: ListCompaniesParams | null): any {
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

