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
 * @interface ListFeatureCompaniesParams
 */
export interface ListFeatureCompaniesParams {
    /**
     * 
     * @type {string}
     * @memberof ListFeatureCompaniesParams
     */
    featureId?: string;
    /**
     * 
     * @type {number}
     * @memberof ListFeatureCompaniesParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListFeatureCompaniesParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof ListFeatureCompaniesParams
     */
    q?: string;
}

/**
 * Check if a given object implements the ListFeatureCompaniesParams interface.
 */
export function instanceOfListFeatureCompaniesParams(value: object): boolean {
    return true;
}

export function ListFeatureCompaniesParamsFromJSON(json: any): ListFeatureCompaniesParams {
    return ListFeatureCompaniesParamsFromJSONTyped(json, false);
}

export function ListFeatureCompaniesParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFeatureCompaniesParams {
    if (json == null) {
        return json;
    }
    return {
        
        'featureId': json['feature_id'] == null ? undefined : json['feature_id'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'q': json['q'] == null ? undefined : json['q'],
    };
}

export function ListFeatureCompaniesParamsToJSON(value?: ListFeatureCompaniesParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'feature_id': value['featureId'],
        'limit': value['limit'],
        'offset': value['offset'],
        'q': value['q'],
    };
}

