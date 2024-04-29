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
import type { PlanDetailResponseData } from './PlanDetailResponseData';
import {
    PlanDetailResponseDataFromJSON,
    PlanDetailResponseDataFromJSONTyped,
    PlanDetailResponseDataToJSON,
} from './PlanDetailResponseData';

/**
 * 
 * @export
 * @interface GetPlanResponse
 */
export interface GetPlanResponse {
    /**
     * 
     * @type {PlanDetailResponseData}
     * @memberof GetPlanResponse
     */
    data: PlanDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof GetPlanResponse
     */
    params: object;
}

/**
 * Check if a given object implements the GetPlanResponse interface.
 */
export function instanceOfGetPlanResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function GetPlanResponseFromJSON(json: any): GetPlanResponse {
    return GetPlanResponseFromJSONTyped(json, false);
}

export function GetPlanResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPlanResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PlanDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function GetPlanResponseToJSON(value?: GetPlanResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': PlanDetailResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

