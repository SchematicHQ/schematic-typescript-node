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
import type { ListUsers200ResponseDataInner } from './ListUsers200ResponseDataInner';
import {
    ListUsers200ResponseDataInnerFromJSON,
    ListUsers200ResponseDataInnerFromJSONTyped,
    ListUsers200ResponseDataInnerToJSON,
} from './ListUsers200ResponseDataInner';
import type { ListUsers200ResponseParams } from './ListUsers200ResponseParams';
import {
    ListUsers200ResponseParamsFromJSON,
    ListUsers200ResponseParamsFromJSONTyped,
    ListUsers200ResponseParamsToJSON,
} from './ListUsers200ResponseParams';

/**
 * 
 * @export
 * @interface ListUsers200Response
 */
export interface ListUsers200Response {
    /**
     * The returned resource
     * @type {Array<ListUsers200ResponseDataInner>}
     * @memberof ListUsers200Response
     */
    data?: Array<ListUsers200ResponseDataInner>;
    /**
     * 
     * @type {ListUsers200ResponseParams}
     * @memberof ListUsers200Response
     */
    params?: ListUsers200ResponseParams;
}

/**
 * Check if a given object implements the ListUsers200Response interface.
 */
export function instanceOfListUsers200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListUsers200ResponseFromJSON(json: any): ListUsers200Response {
    return ListUsers200ResponseFromJSONTyped(json, false);
}

export function ListUsers200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUsers200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ListUsers200ResponseDataInnerFromJSON)),
        'params': !exists(json, 'params') ? undefined : ListUsers200ResponseParamsFromJSON(json['params']),
    };
}

export function ListUsers200ResponseToJSON(value?: ListUsers200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ListUsers200ResponseDataInnerToJSON)),
        'params': ListUsers200ResponseParamsToJSON(value.params),
    };
}

