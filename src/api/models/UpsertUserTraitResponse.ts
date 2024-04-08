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
import type { UserDetailResponseData } from './UserDetailResponseData';
import {
    UserDetailResponseDataFromJSON,
    UserDetailResponseDataFromJSONTyped,
    UserDetailResponseDataToJSON,
} from './UserDetailResponseData';

/**
 * 
 * @export
 * @interface UpsertUserTraitResponse
 */
export interface UpsertUserTraitResponse {
    /**
     * 
     * @type {UserDetailResponseData}
     * @memberof UpsertUserTraitResponse
     */
    data: UserDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof UpsertUserTraitResponse
     */
    params: object;
}

/**
 * Check if a given object implements the UpsertUserTraitResponse interface.
 */
export function instanceOfUpsertUserTraitResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function UpsertUserTraitResponseFromJSON(json: any): UpsertUserTraitResponse {
    return UpsertUserTraitResponseFromJSONTyped(json, false);
}

export function UpsertUserTraitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertUserTraitResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UserDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function UpsertUserTraitResponseToJSON(value?: UpsertUserTraitResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': UserDetailResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}

