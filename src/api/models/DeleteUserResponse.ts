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
import type { DeleteResponse } from './DeleteResponse';
import {
    DeleteResponseFromJSON,
    DeleteResponseFromJSONTyped,
    DeleteResponseToJSON,
} from './DeleteResponse';

/**
 * 
 * @export
 * @interface DeleteUserResponse
 */
export interface DeleteUserResponse {
    /**
     * 
     * @type {DeleteResponse}
     * @memberof DeleteUserResponse
     */
    data: DeleteResponse;
    /**
     * Input parameters
     * @type {object}
     * @memberof DeleteUserResponse
     */
    params: object;
}

/**
 * Check if a given object implements the DeleteUserResponse interface.
 */
export function instanceOfDeleteUserResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function DeleteUserResponseFromJSON(json: any): DeleteUserResponse {
    return DeleteUserResponseFromJSONTyped(json, false);
}

export function DeleteUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteUserResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': DeleteResponseFromJSON(json['data']),
        'params': json['params'],
    };
}

export function DeleteUserResponseToJSON(value?: DeleteUserResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': DeleteResponseToJSON(value['data']),
        'params': value['params'],
    };
}

