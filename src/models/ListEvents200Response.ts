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
import type { ListEvents200ResponseDataInner } from './ListEvents200ResponseDataInner';
import {
    ListEvents200ResponseDataInnerFromJSON,
    ListEvents200ResponseDataInnerFromJSONTyped,
    ListEvents200ResponseDataInnerToJSON,
} from './ListEvents200ResponseDataInner';
import type { ListEvents200ResponseParams } from './ListEvents200ResponseParams';
import {
    ListEvents200ResponseParamsFromJSON,
    ListEvents200ResponseParamsFromJSONTyped,
    ListEvents200ResponseParamsToJSON,
} from './ListEvents200ResponseParams';

/**
 * 
 * @export
 * @interface ListEvents200Response
 */
export interface ListEvents200Response {
    /**
     * The returned resource
     * @type {Array<ListEvents200ResponseDataInner>}
     * @memberof ListEvents200Response
     */
    data?: Array<ListEvents200ResponseDataInner>;
    /**
     * 
     * @type {ListEvents200ResponseParams}
     * @memberof ListEvents200Response
     */
    params?: ListEvents200ResponseParams;
}

/**
 * Check if a given object implements the ListEvents200Response interface.
 */
export function instanceOfListEvents200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListEvents200ResponseFromJSON(json: any): ListEvents200Response {
    return ListEvents200ResponseFromJSONTyped(json, false);
}

export function ListEvents200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEvents200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ListEvents200ResponseDataInnerFromJSON)),
        'params': !exists(json, 'params') ? undefined : ListEvents200ResponseParamsFromJSON(json['params']),
    };
}

export function ListEvents200ResponseToJSON(value?: ListEvents200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ListEvents200ResponseDataInnerToJSON)),
        'params': ListEvents200ResponseParamsToJSON(value.params),
    };
}

