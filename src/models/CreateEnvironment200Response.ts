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
import type { CreateEnvironment200ResponseData } from './CreateEnvironment200ResponseData';
import {
    CreateEnvironment200ResponseDataFromJSON,
    CreateEnvironment200ResponseDataFromJSONTyped,
    CreateEnvironment200ResponseDataToJSON,
} from './CreateEnvironment200ResponseData';

/**
 * 
 * @export
 * @interface CreateEnvironment200Response
 */
export interface CreateEnvironment200Response {
    /**
     * 
     * @type {CreateEnvironment200ResponseData}
     * @memberof CreateEnvironment200Response
     */
    data?: CreateEnvironment200ResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateEnvironment200Response
     */
    params?: object;
}

/**
 * Check if a given object implements the CreateEnvironment200Response interface.
 */
export function instanceOfCreateEnvironment200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateEnvironment200ResponseFromJSON(json: any): CreateEnvironment200Response {
    return CreateEnvironment200ResponseFromJSONTyped(json, false);
}

export function CreateEnvironment200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEnvironment200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CreateEnvironment200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function CreateEnvironment200ResponseToJSON(value?: CreateEnvironment200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CreateEnvironment200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}
