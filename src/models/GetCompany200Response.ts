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
import type { CreateCompany201ResponseData } from './CreateCompany201ResponseData';
import {
    CreateCompany201ResponseDataFromJSON,
    CreateCompany201ResponseDataFromJSONTyped,
    CreateCompany201ResponseDataToJSON,
} from './CreateCompany201ResponseData';

/**
 * 
 * @export
 * @interface GetCompany200Response
 */
export interface GetCompany200Response {
    /**
     * 
     * @type {CreateCompany201ResponseData}
     * @memberof GetCompany200Response
     */
    data?: CreateCompany201ResponseData;
    /**
     * 
     * @type {any}
     * @memberof GetCompany200Response
     */
    params?: any | null;
}

/**
 * Check if a given object implements the GetCompany200Response interface.
 */
export function instanceOfGetCompany200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCompany200ResponseFromJSON(json: any): GetCompany200Response {
    return GetCompany200ResponseFromJSONTyped(json, false);
}

export function GetCompany200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCompany200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CreateCompany201ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GetCompany200ResponseToJSON(value?: GetCompany200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CreateCompany201ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

