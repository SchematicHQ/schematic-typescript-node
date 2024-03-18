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
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function CreateCompanyTraitResponseFromJSON(json: any): CreateCompanyTraitResponse {
    return CreateCompanyTraitResponseFromJSONTyped(json, false);
}

export function CreateCompanyTraitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompanyTraitResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CompanyDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function CreateCompanyTraitResponseToJSON(value?: CreateCompanyTraitResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CompanyDetailResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

