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
import type { CompanyMembershipDetailResponseData } from './CompanyMembershipDetailResponseData';
import {
    CompanyMembershipDetailResponseDataFromJSON,
    CompanyMembershipDetailResponseDataFromJSONTyped,
    CompanyMembershipDetailResponseDataToJSON,
} from './CompanyMembershipDetailResponseData';

/**
 * 
 * @export
 * @interface GetOrCreateCompanyMembershipResponse
 */
export interface GetOrCreateCompanyMembershipResponse {
    /**
     * 
     * @type {CompanyMembershipDetailResponseData}
     * @memberof GetOrCreateCompanyMembershipResponse
     */
    data: CompanyMembershipDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof GetOrCreateCompanyMembershipResponse
     */
    params: object;
}

/**
 * Check if a given object implements the GetOrCreateCompanyMembershipResponse interface.
 */
export function instanceOfGetOrCreateCompanyMembershipResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function GetOrCreateCompanyMembershipResponseFromJSON(json: any): GetOrCreateCompanyMembershipResponse {
    return GetOrCreateCompanyMembershipResponseFromJSONTyped(json, false);
}

export function GetOrCreateCompanyMembershipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrCreateCompanyMembershipResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CompanyMembershipDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function GetOrCreateCompanyMembershipResponseToJSON(value?: GetOrCreateCompanyMembershipResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CompanyMembershipDetailResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}
