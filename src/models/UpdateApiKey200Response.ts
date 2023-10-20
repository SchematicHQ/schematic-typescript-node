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
import type { UpdateApiKey200ResponseData } from './UpdateApiKey200ResponseData';
import {
    UpdateApiKey200ResponseDataFromJSON,
    UpdateApiKey200ResponseDataFromJSONTyped,
    UpdateApiKey200ResponseDataToJSON,
} from './UpdateApiKey200ResponseData';

/**
 * 
 * @export
 * @interface UpdateApiKey200Response
 */
export interface UpdateApiKey200Response {
    /**
     * 
     * @type {UpdateApiKey200ResponseData}
     * @memberof UpdateApiKey200Response
     */
    data?: UpdateApiKey200ResponseData;
    /**
     * 
     * @type {any}
     * @memberof UpdateApiKey200Response
     */
    params?: any | null;
}

/**
 * Check if a given object implements the UpdateApiKey200Response interface.
 */
export function instanceOfUpdateApiKey200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateApiKey200ResponseFromJSON(json: any): UpdateApiKey200Response {
    return UpdateApiKey200ResponseFromJSONTyped(json, false);
}

export function UpdateApiKey200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiKey200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : UpdateApiKey200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function UpdateApiKey200ResponseToJSON(value?: UpdateApiKey200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UpdateApiKey200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

