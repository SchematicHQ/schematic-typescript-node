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
import type { CompanyOverrideResponseData } from './CompanyOverrideResponseData';
import {
    CompanyOverrideResponseDataFromJSON,
    CompanyOverrideResponseDataFromJSONTyped,
    CompanyOverrideResponseDataToJSON,
} from './CompanyOverrideResponseData';

/**
 * 
 * @export
 * @interface UpdateCompanyOverrideResponse
 */
export interface UpdateCompanyOverrideResponse {
    /**
     * 
     * @type {CompanyOverrideResponseData}
     * @memberof UpdateCompanyOverrideResponse
     */
    data: CompanyOverrideResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof UpdateCompanyOverrideResponse
     */
    params: object;
}

/**
 * Check if a given object implements the UpdateCompanyOverrideResponse interface.
 */
export function instanceOfUpdateCompanyOverrideResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function UpdateCompanyOverrideResponseFromJSON(json: any): UpdateCompanyOverrideResponse {
    return UpdateCompanyOverrideResponseFromJSONTyped(json, false);
}

export function UpdateCompanyOverrideResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCompanyOverrideResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CompanyOverrideResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function UpdateCompanyOverrideResponseToJSON(value?: UpdateCompanyOverrideResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CompanyOverrideResponseDataToJSON(value.data),
        'params': value.params,
    };
}
