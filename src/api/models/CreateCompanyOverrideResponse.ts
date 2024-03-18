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
import type { CompanyOverrideResponseData } from './CompanyOverrideResponseData';
import {
    CompanyOverrideResponseDataFromJSON,
    CompanyOverrideResponseDataFromJSONTyped,
    CompanyOverrideResponseDataToJSON,
} from './CompanyOverrideResponseData';

/**
 * 
 * @export
 * @interface CreateCompanyOverrideResponse
 */
export interface CreateCompanyOverrideResponse {
    /**
     * 
     * @type {CompanyOverrideResponseData}
     * @memberof CreateCompanyOverrideResponse
     */
    data: CompanyOverrideResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateCompanyOverrideResponse
     */
    params: object;
}

/**
 * Check if a given object implements the CreateCompanyOverrideResponse interface.
 */
export function instanceOfCreateCompanyOverrideResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function CreateCompanyOverrideResponseFromJSON(json: any): CreateCompanyOverrideResponse {
    return CreateCompanyOverrideResponseFromJSONTyped(json, false);
}

export function CreateCompanyOverrideResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompanyOverrideResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CompanyOverrideResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function CreateCompanyOverrideResponseToJSON(value?: CreateCompanyOverrideResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CompanyOverrideResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

