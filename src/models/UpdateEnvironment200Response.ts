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
import type { UpdateEnvironment200ResponseData } from './UpdateEnvironment200ResponseData';
import {
    UpdateEnvironment200ResponseDataFromJSON,
    UpdateEnvironment200ResponseDataFromJSONTyped,
    UpdateEnvironment200ResponseDataToJSON,
} from './UpdateEnvironment200ResponseData';

/**
 * 
 * @export
 * @interface UpdateEnvironment200Response
 */
export interface UpdateEnvironment200Response {
    /**
     * 
     * @type {UpdateEnvironment200ResponseData}
     * @memberof UpdateEnvironment200Response
     */
    data?: UpdateEnvironment200ResponseData;
    /**
     * 
     * @type {any}
     * @memberof UpdateEnvironment200Response
     */
    params?: any | null;
}

/**
 * Check if a given object implements the UpdateEnvironment200Response interface.
 */
export function instanceOfUpdateEnvironment200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateEnvironment200ResponseFromJSON(json: any): UpdateEnvironment200Response {
    return UpdateEnvironment200ResponseFromJSONTyped(json, false);
}

export function UpdateEnvironment200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEnvironment200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : UpdateEnvironment200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function UpdateEnvironment200ResponseToJSON(value?: UpdateEnvironment200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UpdateEnvironment200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

