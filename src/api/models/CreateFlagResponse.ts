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

import { mapValues } from '../runtime';
import type { FlagDetailResponseData } from './FlagDetailResponseData';
import {
    FlagDetailResponseDataFromJSON,
    FlagDetailResponseDataFromJSONTyped,
    FlagDetailResponseDataToJSON,
} from './FlagDetailResponseData';

/**
 * 
 * @export
 * @interface CreateFlagResponse
 */
export interface CreateFlagResponse {
    /**
     * 
     * @type {FlagDetailResponseData}
     * @memberof CreateFlagResponse
     */
    data: FlagDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateFlagResponse
     */
    params: object;
}

/**
 * Check if a given object implements the CreateFlagResponse interface.
 */
export function instanceOfCreateFlagResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function CreateFlagResponseFromJSON(json: any): CreateFlagResponse {
    return CreateFlagResponseFromJSONTyped(json, false);
}

export function CreateFlagResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFlagResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': FlagDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function CreateFlagResponseToJSON(value?: CreateFlagResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': FlagDetailResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

