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
import type { LookupCompanyParams } from './LookupCompanyParams';
import {
    LookupCompanyParamsFromJSON,
    LookupCompanyParamsFromJSONTyped,
    LookupCompanyParamsToJSON,
} from './LookupCompanyParams';

/**
 * 
 * @export
 * @interface LookupCompanyResponse
 */
export interface LookupCompanyResponse {
    /**
     * 
     * @type {CompanyDetailResponseData}
     * @memberof LookupCompanyResponse
     */
    data: CompanyDetailResponseData;
    /**
     * 
     * @type {LookupCompanyParams}
     * @memberof LookupCompanyResponse
     */
    params: LookupCompanyParams;
}

/**
 * Check if a given object implements the LookupCompanyResponse interface.
 */
export function instanceOfLookupCompanyResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function LookupCompanyResponseFromJSON(json: any): LookupCompanyResponse {
    return LookupCompanyResponseFromJSONTyped(json, false);
}

export function LookupCompanyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupCompanyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CompanyDetailResponseDataFromJSON(json['data']),
        'params': LookupCompanyParamsFromJSON(json['params']),
    };
}

export function LookupCompanyResponseToJSON(value?: LookupCompanyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CompanyDetailResponseDataToJSON(value.data),
        'params': LookupCompanyParamsToJSON(value.params),
    };
}

