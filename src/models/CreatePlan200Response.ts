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
import type { CreatePlan200ResponseData } from './CreatePlan200ResponseData';
import {
    CreatePlan200ResponseDataFromJSON,
    CreatePlan200ResponseDataFromJSONTyped,
    CreatePlan200ResponseDataToJSON,
} from './CreatePlan200ResponseData';

/**
 * 
 * @export
 * @interface CreatePlan200Response
 */
export interface CreatePlan200Response {
    /**
     * 
     * @type {CreatePlan200ResponseData}
     * @memberof CreatePlan200Response
     */
    data?: CreatePlan200ResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreatePlan200Response
     */
    params?: object;
}

/**
 * Check if a given object implements the CreatePlan200Response interface.
 */
export function instanceOfCreatePlan200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreatePlan200ResponseFromJSON(json: any): CreatePlan200Response {
    return CreatePlan200ResponseFromJSONTyped(json, false);
}

export function CreatePlan200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlan200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CreatePlan200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function CreatePlan200ResponseToJSON(value?: CreatePlan200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CreatePlan200ResponseDataToJSON(value.data),
        'params': value.params,
    };
}

