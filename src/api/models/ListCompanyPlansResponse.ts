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
import type { CompanyPlanResponseData } from './CompanyPlanResponseData';
import {
    CompanyPlanResponseDataFromJSON,
    CompanyPlanResponseDataFromJSONTyped,
    CompanyPlanResponseDataToJSON,
} from './CompanyPlanResponseData';
import type { ListCompanyPlansParams } from './ListCompanyPlansParams';
import {
    ListCompanyPlansParamsFromJSON,
    ListCompanyPlansParamsFromJSONTyped,
    ListCompanyPlansParamsToJSON,
} from './ListCompanyPlansParams';

/**
 * 
 * @export
 * @interface ListCompanyPlansResponse
 */
export interface ListCompanyPlansResponse {
    /**
     * The returned resources
     * @type {Array<CompanyPlanResponseData>}
     * @memberof ListCompanyPlansResponse
     */
    data: Array<CompanyPlanResponseData>;
    /**
     * 
     * @type {ListCompanyPlansParams}
     * @memberof ListCompanyPlansResponse
     */
    params: ListCompanyPlansParams;
}

/**
 * Check if a given object implements the ListCompanyPlansResponse interface.
 */
export function instanceOfListCompanyPlansResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function ListCompanyPlansResponseFromJSON(json: any): ListCompanyPlansResponse {
    return ListCompanyPlansResponseFromJSONTyped(json, false);
}

export function ListCompanyPlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCompanyPlansResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CompanyPlanResponseDataFromJSON)),
        'params': ListCompanyPlansParamsFromJSON(json['params']),
    };
}

export function ListCompanyPlansResponseToJSON(value?: ListCompanyPlansResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ((value['data'] as Array<any>).map(CompanyPlanResponseDataToJSON)),
        'params': ListCompanyPlansParamsToJSON(value['params']),
    };
}

