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
import type { PlanResponseData } from './PlanResponseData';
import {
    PlanResponseDataFromJSON,
    PlanResponseDataFromJSONTyped,
    PlanResponseDataToJSON,
} from './PlanResponseData';

/**
 * 
 * @export
 * @interface ListPlansResponse
 */
export interface ListPlansResponse {
    /**
     * The returned resources
     * @type {Array<PlanResponseData>}
     * @memberof ListPlansResponse
     */
    data: Array<PlanResponseData>;
    /**
     * Input parameters
     * @type {object}
     * @memberof ListPlansResponse
     */
    params: object;
}

/**
 * Check if a given object implements the ListPlansResponse interface.
 */
export function instanceOfListPlansResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function ListPlansResponseFromJSON(json: any): ListPlansResponse {
    return ListPlansResponseFromJSONTyped(json, false);
}

export function ListPlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPlansResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PlanResponseDataFromJSON)),
        'params': json['params'],
    };
}

export function ListPlansResponseToJSON(value?: ListPlansResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(PlanResponseDataToJSON)),
        'params': value.params,
    };
}

