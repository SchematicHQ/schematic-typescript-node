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
import type { UpdateFlag200ResponseData } from './UpdateFlag200ResponseData';
import {
    UpdateFlag200ResponseDataFromJSON,
    UpdateFlag200ResponseDataFromJSONTyped,
    UpdateFlag200ResponseDataToJSON,
} from './UpdateFlag200ResponseData';

/**
 * 
 * @export
 * @interface UpdateFlag200Response
 */
export interface UpdateFlag200Response {
    /**
     * 
     * @type {UpdateFlag200ResponseData}
     * @memberof UpdateFlag200Response
     */
    data?: UpdateFlag200ResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof UpdateFlag200Response
     */
    params?: object;
}

/**
 * Check if a given object implements the UpdateFlag200Response interface.
 */
export function instanceOfUpdateFlag200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateFlag200ResponseFromJSON(json: any): UpdateFlag200Response {
    return UpdateFlag200ResponseFromJSONTyped(json, false);
}

export function UpdateFlag200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFlag200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : UpdateFlag200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function UpdateFlag200ResponseToJSON(value?: UpdateFlag200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UpdateFlag200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

