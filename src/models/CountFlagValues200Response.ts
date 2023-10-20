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
import type { CountApiKeys200ResponseData } from './CountApiKeys200ResponseData';
import {
    CountApiKeys200ResponseDataFromJSON,
    CountApiKeys200ResponseDataFromJSONTyped,
    CountApiKeys200ResponseDataToJSON,
} from './CountApiKeys200ResponseData';
import type { ListFlagValues200ResponseParams } from './ListFlagValues200ResponseParams';
import {
    ListFlagValues200ResponseParamsFromJSON,
    ListFlagValues200ResponseParamsFromJSONTyped,
    ListFlagValues200ResponseParamsToJSON,
} from './ListFlagValues200ResponseParams';

/**
 * 
 * @export
 * @interface CountFlagValues200Response
 */
export interface CountFlagValues200Response {
    /**
     * 
     * @type {CountApiKeys200ResponseData}
     * @memberof CountFlagValues200Response
     */
    data?: CountApiKeys200ResponseData;
    /**
     * 
     * @type {ListFlagValues200ResponseParams}
     * @memberof CountFlagValues200Response
     */
    params?: ListFlagValues200ResponseParams;
}

/**
 * Check if a given object implements the CountFlagValues200Response interface.
 */
export function instanceOfCountFlagValues200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CountFlagValues200ResponseFromJSON(json: any): CountFlagValues200Response {
    return CountFlagValues200ResponseFromJSONTyped(json, false);
}

export function CountFlagValues200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountFlagValues200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CountApiKeys200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : ListFlagValues200ResponseParamsFromJSON(json['params']),
    };
}

export function CountFlagValues200ResponseToJSON(value?: CountFlagValues200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CountApiKeys200ResponseDataToJSON(value.data),
        'params': ListFlagValues200ResponseParamsToJSON(value.params),
    };
}

