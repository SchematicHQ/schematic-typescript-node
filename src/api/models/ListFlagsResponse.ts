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
import type { FlagResponseData } from './FlagResponseData';
import {
    FlagResponseDataFromJSON,
    FlagResponseDataFromJSONTyped,
    FlagResponseDataToJSON,
} from './FlagResponseData';
import type { ListFlagsParams } from './ListFlagsParams';
import {
    ListFlagsParamsFromJSON,
    ListFlagsParamsFromJSONTyped,
    ListFlagsParamsToJSON,
} from './ListFlagsParams';

/**
 * 
 * @export
 * @interface ListFlagsResponse
 */
export interface ListFlagsResponse {
    /**
     * The returned resources
     * @type {Array<FlagResponseData>}
     * @memberof ListFlagsResponse
     */
    data: Array<FlagResponseData>;
    /**
     * 
     * @type {ListFlagsParams}
     * @memberof ListFlagsResponse
     */
    params: ListFlagsParams;
}

/**
 * Check if a given object implements the ListFlagsResponse interface.
 */
export function instanceOfListFlagsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function ListFlagsResponseFromJSON(json: any): ListFlagsResponse {
    return ListFlagsResponseFromJSONTyped(json, false);
}

export function ListFlagsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFlagsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(FlagResponseDataFromJSON)),
        'params': ListFlagsParamsFromJSON(json['params']),
    };
}

export function ListFlagsResponseToJSON(value?: ListFlagsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(FlagResponseDataToJSON)),
        'params': ListFlagsParamsToJSON(value.params),
    };
}

