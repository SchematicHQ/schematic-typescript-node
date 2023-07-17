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
/**
 * The returned resource
 * @export
 * @interface DeleteFeature200ResponseData
 */
export interface DeleteFeature200ResponseData {
    /**
     * Whether the delete was successful
     * @type {boolean}
     * @memberof DeleteFeature200ResponseData
     */
    deleted?: boolean;
}

/**
 * Check if a given object implements the DeleteFeature200ResponseData interface.
 */
export function instanceOfDeleteFeature200ResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteFeature200ResponseDataFromJSON(json: any): DeleteFeature200ResponseData {
    return DeleteFeature200ResponseDataFromJSONTyped(json, false);
}

export function DeleteFeature200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFeature200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
    };
}

export function DeleteFeature200ResponseDataToJSON(value?: DeleteFeature200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deleted': value.deleted,
    };
}

