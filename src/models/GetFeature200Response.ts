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
import type { CreateFeature200ResponseData } from './CreateFeature200ResponseData';
import {
    CreateFeature200ResponseDataFromJSON,
    CreateFeature200ResponseDataFromJSONTyped,
    CreateFeature200ResponseDataToJSON,
} from './CreateFeature200ResponseData';

/**
 * 
 * @export
 * @interface GetFeature200Response
 */
export interface GetFeature200Response {
    /**
     * 
     * @type {CreateFeature200ResponseData}
     * @memberof GetFeature200Response
     */
    data?: CreateFeature200ResponseData;
    /**
     * 
     * @type {any}
     * @memberof GetFeature200Response
     */
    params?: any | null;
}

/**
 * Check if a given object implements the GetFeature200Response interface.
 */
export function instanceOfGetFeature200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetFeature200ResponseFromJSON(json: any): GetFeature200Response {
    return GetFeature200ResponseFromJSONTyped(json, false);
}

export function GetFeature200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFeature200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CreateFeature200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function GetFeature200ResponseToJSON(value?: GetFeature200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CreateFeature200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}
