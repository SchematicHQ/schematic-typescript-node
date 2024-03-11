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
 * @interface CreateCompanyTraitResponse
 */
export interface CreateCompanyTraitResponse {
    /**
     * 
     * @type {CompanyDetailResponseData}
     * @memberof CreateCompanyTraitResponse
     */
    data: CompanyDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateCompanyTraitResponse
     */
    params: object;
}

/**
 * Check if a given object implements the CreateCompanyTraitResponse interface.
 */
export function instanceOfCreateCompanyTraitResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function CreateCompanyTraitResponseFromJSON(json: any): CreateCompanyTraitResponse {
    return CreateCompanyTraitResponseFromJSONTyped(json, false);
}

export function CreateCompanyTraitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompanyTraitResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CompanyDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function CreateCompanyTraitResponseToJSON(value?: CreateCompanyTraitResponse | null): any {
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
