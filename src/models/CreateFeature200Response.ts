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
 * @interface CreateFeature200Response
 */
export interface CreateFeature200Response {
    /**
     * 
     * @type {CreateFeature200ResponseData}
     * @memberof CreateFeature200Response
     */
    data?: CreateFeature200ResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateFeature200Response
     */
    params?: object;
}

/**
 * Check if a given object implements the CreateFeature200Response interface.
 */
export function instanceOfCreateFeature200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFeature200ResponseFromJSON(json: any): CreateFeature200Response {
    return CreateFeature200ResponseFromJSONTyped(json, false);
}

export function CreateFeature200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeature200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CreateFeature200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function CreateFeature200ResponseToJSON(value?: CreateFeature200Response | null): any {
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

