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
 * @interface CountFeatureUsageParams
 */
export interface CountFeatureUsageParams {
    /**
     * 
     * @type {string}
     * @memberof CountFeatureUsageParams
     */
    companyId?: string;
    /**
     * 
     * @type {object}
     * @memberof CountFeatureUsageParams
     */
    companyKeys?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof CountFeatureUsageParams
     */
    featureIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CountFeatureUsageParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CountFeatureUsageParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof CountFeatureUsageParams
     */
    q?: string;
}

/**
 * Check if a given object implements the CountFeatureUsageParams interface.
 */
export function instanceOfCountFeatureUsageParams(value: object): boolean {
    return true;
}

export function CountFeatureUsageParamsFromJSON(json: any): CountFeatureUsageParams {
    return CountFeatureUsageParamsFromJSONTyped(json, false);
}

export function CountFeatureUsageParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountFeatureUsageParams {
    if (json == null) {
        return json;
    }
    return {
        
        'companyId': json['company_id'] == null ? undefined : json['company_id'],
        'companyKeys': json['company_keys'] == null ? undefined : json['company_keys'],
        'featureIds': json['feature_ids'] == null ? undefined : json['feature_ids'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'q': json['q'] == null ? undefined : json['q'],
    };
}

export function CountFeatureUsageParamsToJSON(value?: CountFeatureUsageParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'company_id': value['companyId'],
        'company_keys': value['companyKeys'],
        'feature_ids': value['featureIds'],
        'limit': value['limit'],
        'offset': value['offset'],
        'q': value['q'],
    };
}
