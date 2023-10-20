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
import type { CreateFeature201ResponseData } from './CreateFeature201ResponseData';
import {
    CreateFeature201ResponseDataFromJSON,
    CreateFeature201ResponseDataFromJSONTyped,
    CreateFeature201ResponseDataToJSON,
} from './CreateFeature201ResponseData';

/**
 * 
 * @export
 * @interface CreateFeature201Response
 */
export interface CreateFeature201Response {
    /**
     * 
     * @type {CreateFeature201ResponseData}
     * @memberof CreateFeature201Response
     */
    data?: CreateFeature201ResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateFeature201Response
     */
    params?: object;
}

/**
 * Check if a given object implements the CreateFeature201Response interface.
 */
export function instanceOfCreateFeature201Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFeature201ResponseFromJSON(json: any): CreateFeature201Response {
    return CreateFeature201ResponseFromJSONTyped(json, false);
}

export function CreateFeature201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeature201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CreateFeature201ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function CreateFeature201ResponseToJSON(value?: CreateFeature201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CreateFeature201ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

