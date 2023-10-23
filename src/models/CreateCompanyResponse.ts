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
 * @interface CreateCompanyResponse
 */
export interface CreateCompanyResponse {
    /**
     * 
     * @type {CompanyDetailResponseData}
     * @memberof CreateCompanyResponse
     */
    data: CompanyDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateCompanyResponse
     */
    params: object;
}

/**
 * Check if a given object implements the CreateCompanyResponse interface.
 */
export function instanceOfCreateCompanyResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function CreateCompanyResponseFromJSON(json: any): CreateCompanyResponse {
    return CreateCompanyResponseFromJSONTyped(json, false);
}

export function CreateCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompanyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CompanyDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function CreateCompanyResponseToJSON(value?: CreateCompanyResponse | null): any {
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

