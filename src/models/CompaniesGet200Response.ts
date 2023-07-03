/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CompaniesGet200ResponseDataInner } from './CompaniesGet200ResponseDataInner';
import {
    CompaniesGet200ResponseDataInnerFromJSON,
    CompaniesGet200ResponseDataInnerFromJSONTyped,
    CompaniesGet200ResponseDataInnerToJSON,
} from './CompaniesGet200ResponseDataInner';
import type { CompaniesGet200ResponseParams } from './CompaniesGet200ResponseParams';
import {
    CompaniesGet200ResponseParamsFromJSON,
    CompaniesGet200ResponseParamsFromJSONTyped,
    CompaniesGet200ResponseParamsToJSON,
} from './CompaniesGet200ResponseParams';

/**
 * 
 * @export
 * @interface CompaniesGet200Response
 */
export interface CompaniesGet200Response {
    /**
     * The returned resource
     * @type {Array<CompaniesGet200ResponseDataInner>}
     * @memberof CompaniesGet200Response
     */
    data?: Array<CompaniesGet200ResponseDataInner>;
    /**
     * 
     * @type {CompaniesGet200ResponseParams}
     * @memberof CompaniesGet200Response
     */
    params?: CompaniesGet200ResponseParams;
}

/**
 * Check if a given object implements the CompaniesGet200Response interface.
 */
export function instanceOfCompaniesGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompaniesGet200ResponseFromJSON(json: any): CompaniesGet200Response {
    return CompaniesGet200ResponseFromJSONTyped(json, false);
}

export function CompaniesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompaniesGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(CompaniesGet200ResponseDataInnerFromJSON)),
        'params': !exists(json, 'params') ? undefined : CompaniesGet200ResponseParamsFromJSON(json['params']),
    };
}

export function CompaniesGet200ResponseToJSON(value?: CompaniesGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(CompaniesGet200ResponseDataInnerToJSON)),
        'params': CompaniesGet200ResponseParamsToJSON(value.params),
    };
}

