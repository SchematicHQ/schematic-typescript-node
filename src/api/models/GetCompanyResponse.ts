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
import type { CompanyDetailResponseData } from './CompanyDetailResponseData';
import {
    CompanyDetailResponseDataFromJSON,
    CompanyDetailResponseDataFromJSONTyped,
    CompanyDetailResponseDataToJSON,
} from './CompanyDetailResponseData';

/**
 * 
 * @export
 * @interface GetCompanyResponse
 */
export interface GetCompanyResponse {
    /**
     * 
     * @type {CompanyDetailResponseData}
     * @memberof GetCompanyResponse
     */
    data: CompanyDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof GetCompanyResponse
     */
    params: object;
}

/**
 * Check if a given object implements the GetCompanyResponse interface.
 */
export function instanceOfGetCompanyResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function GetCompanyResponseFromJSON(json: any): GetCompanyResponse {
    return GetCompanyResponseFromJSONTyped(json, false);
}

export function GetCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCompanyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CompanyDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function GetCompanyResponseToJSON(value?: GetCompanyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CompanyDetailResponseDataToJSON(value.data),
        'params': value.params,
    };
}

