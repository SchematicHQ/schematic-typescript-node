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
import type { ListPlanEntitlementsParams } from './ListPlanEntitlementsParams';
import {
    ListPlanEntitlementsParamsFromJSON,
    ListPlanEntitlementsParamsFromJSONTyped,
    ListPlanEntitlementsParamsToJSON,
} from './ListPlanEntitlementsParams';
import type { PlanEntitlementResponseData } from './PlanEntitlementResponseData';
import {
    PlanEntitlementResponseDataFromJSON,
    PlanEntitlementResponseDataFromJSONTyped,
    PlanEntitlementResponseDataToJSON,
} from './PlanEntitlementResponseData';

/**
 * 
 * @export
 * @interface ListPlanEntitlementsResponse
 */
export interface ListPlanEntitlementsResponse {
    /**
     * The returned resources
     * @type {Array<PlanEntitlementResponseData>}
     * @memberof ListPlanEntitlementsResponse
     */
    data: Array<PlanEntitlementResponseData>;
    /**
     * 
     * @type {ListPlanEntitlementsParams}
     * @memberof ListPlanEntitlementsResponse
     */
    params: ListPlanEntitlementsParams;
}

/**
 * Check if a given object implements the ListPlanEntitlementsResponse interface.
 */
export function instanceOfListPlanEntitlementsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function ListPlanEntitlementsResponseFromJSON(json: any): ListPlanEntitlementsResponse {
    return ListPlanEntitlementsResponseFromJSONTyped(json, false);
}

export function ListPlanEntitlementsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPlanEntitlementsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PlanEntitlementResponseDataFromJSON)),
        'params': ListPlanEntitlementsParamsFromJSON(json['params']),
    };
}

export function ListPlanEntitlementsResponseToJSON(value?: ListPlanEntitlementsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(PlanEntitlementResponseDataToJSON)),
        'params': ListPlanEntitlementsParamsToJSON(value.params),
    };
}
