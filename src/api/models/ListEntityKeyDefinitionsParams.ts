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
 * @interface ListEntityKeyDefinitionsParams
 */
export interface ListEntityKeyDefinitionsParams {
    /**
     * 
     * @type {string}
     * @memberof ListEntityKeyDefinitionsParams
     */
    entityType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListEntityKeyDefinitionsParams
     */
    ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ListEntityKeyDefinitionsParams
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof ListEntityKeyDefinitionsParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListEntityKeyDefinitionsParams
     */
    offset?: number;
}

/**
 * Check if a given object implements the ListEntityKeyDefinitionsParams interface.
 */
export function instanceOfListEntityKeyDefinitionsParams(value: object): boolean {
    return true;
}

export function ListEntityKeyDefinitionsParamsFromJSON(json: any): ListEntityKeyDefinitionsParams {
    return ListEntityKeyDefinitionsParamsFromJSONTyped(json, false);
}

export function ListEntityKeyDefinitionsParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEntityKeyDefinitionsParams {
    if (json == null) {
        return json;
    }
    return {
        
        'entityType': json['entity_type'] == null ? undefined : json['entity_type'],
        'ids': json['ids'] == null ? undefined : json['ids'],
        'key': json['key'] == null ? undefined : json['key'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
    };
}

export function ListEntityKeyDefinitionsParamsToJSON(value?: ListEntityKeyDefinitionsParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entity_type': value['entityType'],
        'ids': value['ids'],
        'key': value['key'],
        'limit': value['limit'],
        'offset': value['offset'],
    };
}

