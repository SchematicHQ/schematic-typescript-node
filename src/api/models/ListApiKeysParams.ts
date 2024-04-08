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
/**
 * Input parameters
 * @export
 * @interface ListApiKeysParams
 */
export interface ListApiKeysParams {
    /**
     * 
     * @type {string}
     * @memberof ListApiKeysParams
     */
    environmentId?: string;
    /**
     * 
     * @type {number}
     * @memberof ListApiKeysParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListApiKeysParams
     */
    offset?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ListApiKeysParams
     */
    requireEnvironment?: boolean;
}

/**
 * Check if a given object implements the ListApiKeysParams interface.
 */
export function instanceOfListApiKeysParams(value: object): boolean {
    return true;
}

export function ListApiKeysParamsFromJSON(json: any): ListApiKeysParams {
    return ListApiKeysParamsFromJSONTyped(json, false);
}

export function ListApiKeysParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListApiKeysParams {
    if (json == null) {
        return json;
    }
    return {
        
        'environmentId': json['environment_id'] == null ? undefined : json['environment_id'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'requireEnvironment': json['require_environment'] == null ? undefined : json['require_environment'],
    };
}

export function ListApiKeysParamsToJSON(value?: ListApiKeysParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'environment_id': value['environmentId'],
        'limit': value['limit'],
        'offset': value['offset'],
        'require_environment': value['requireEnvironment'],
    };
}

