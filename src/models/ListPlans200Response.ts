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
import type { ListCompanies200ResponseParams } from './ListCompanies200ResponseParams';
import {
    ListCompanies200ResponseParamsFromJSON,
    ListCompanies200ResponseParamsFromJSONTyped,
    ListCompanies200ResponseParamsToJSON,
} from './ListCompanies200ResponseParams';
import type { ListPlans200ResponseDataInner } from './ListPlans200ResponseDataInner';
import {
    ListPlans200ResponseDataInnerFromJSON,
    ListPlans200ResponseDataInnerFromJSONTyped,
    ListPlans200ResponseDataInnerToJSON,
} from './ListPlans200ResponseDataInner';

/**
 * 
 * @export
 * @interface ListPlans200Response
 */
export interface ListPlans200Response {
    /**
     * The returned resource
     * @type {Array<ListPlans200ResponseDataInner>}
     * @memberof ListPlans200Response
     */
    data?: Array<ListPlans200ResponseDataInner>;
    /**
     * 
     * @type {ListCompanies200ResponseParams}
     * @memberof ListPlans200Response
     */
    params?: ListCompanies200ResponseParams;
}

/**
 * Check if a given object implements the ListPlans200Response interface.
 */
export function instanceOfListPlans200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListPlans200ResponseFromJSON(json: any): ListPlans200Response {
    return ListPlans200ResponseFromJSONTyped(json, false);
}

export function ListPlans200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPlans200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ListPlans200ResponseDataInnerFromJSON)),
        'params': !exists(json, 'params') ? undefined : ListCompanies200ResponseParamsFromJSON(json['params']),
    };
}

export function ListPlans200ResponseToJSON(value?: ListPlans200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ListPlans200ResponseDataInnerToJSON)),
        'params': ListCompanies200ResponseParamsToJSON(value.params),
    };
}

