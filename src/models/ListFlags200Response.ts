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
import type { ListFlags200ResponseDataInner } from './ListFlags200ResponseDataInner';
import {
    ListFlags200ResponseDataInnerFromJSON,
    ListFlags200ResponseDataInnerFromJSONTyped,
    ListFlags200ResponseDataInnerToJSON,
} from './ListFlags200ResponseDataInner';
import type { ListFlags200ResponseParams } from './ListFlags200ResponseParams';
import {
    ListFlags200ResponseParamsFromJSON,
    ListFlags200ResponseParamsFromJSONTyped,
    ListFlags200ResponseParamsToJSON,
} from './ListFlags200ResponseParams';

/**
 * 
 * @export
 * @interface ListFlags200Response
 */
export interface ListFlags200Response {
    /**
     * The returned resources
     * @type {Array<ListFlags200ResponseDataInner>}
     * @memberof ListFlags200Response
     */
    data?: Array<ListFlags200ResponseDataInner>;
    /**
     * 
     * @type {ListFlags200ResponseParams}
     * @memberof ListFlags200Response
     */
    params?: ListFlags200ResponseParams;
}

/**
 * Check if a given object implements the ListFlags200Response interface.
 */
export function instanceOfListFlags200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListFlags200ResponseFromJSON(json: any): ListFlags200Response {
    return ListFlags200ResponseFromJSONTyped(json, false);
}

export function ListFlags200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFlags200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ListFlags200ResponseDataInnerFromJSON)),
        'params': !exists(json, 'params') ? undefined : ListFlags200ResponseParamsFromJSON(json['params']),
    };
}

export function ListFlags200ResponseToJSON(value?: ListFlags200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ListFlags200ResponseDataInnerToJSON)),
        'params': ListFlags200ResponseParamsToJSON(value.params),
    };
}

