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

import { exists, mapValues } from '../runtime';
/**
 * Input parameters
 * @export
 * @interface ListCompanyOverridesParams
 */
export interface ListCompanyOverridesParams {
    /**
     * 
     * @type {string}
     * @memberof ListCompanyOverridesParams
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListCompanyOverridesParams
     */
    featureId?: string;
    /**
     * 
     * @type {number}
     * @memberof ListCompanyOverridesParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListCompanyOverridesParams
     */
    offset?: number;
}

/**
 * Check if a given object implements the ListCompanyOverridesParams interface.
 */
export function instanceOfListCompanyOverridesParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListCompanyOverridesParamsFromJSON(json: any): ListCompanyOverridesParams {
    return ListCompanyOverridesParamsFromJSONTyped(json, false);
}

export function ListCompanyOverridesParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCompanyOverridesParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
    };
}

export function ListCompanyOverridesParamsToJSON(value?: ListCompanyOverridesParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'feature_id': value.featureId,
        'limit': value.limit,
        'offset': value.offset,
    };
}

