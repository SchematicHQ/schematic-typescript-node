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
 * 
 * @export
 * @interface UpsertCompanyRequestBody
 */
export interface UpsertCompanyRequestBody {
    /**
     * 
     * @type {string}
     * @memberof UpsertCompanyRequestBody
     */
    id?: string | null;
    /**
     * 
     * @type {object}
     * @memberof UpsertCompanyRequestBody
     */
    keys: object;
    /**
     * 
     * @type {Date}
     * @memberof UpsertCompanyRequestBody
     */
    lastSeenAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertCompanyRequestBody
     */
    name?: string | null;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof UpsertCompanyRequestBody
     */
    traits?: object;
    /**
     * 
     * @type {boolean}
     * @memberof UpsertCompanyRequestBody
     */
    updateOnly?: boolean | null;
}

/**
 * Check if a given object implements the UpsertCompanyRequestBody interface.
 */
export function instanceOfUpsertCompanyRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "keys" in value;

    return isInstance;
}

export function UpsertCompanyRequestBodyFromJSON(json: any): UpsertCompanyRequestBody {
    return UpsertCompanyRequestBodyFromJSONTyped(json, false);
}

export function UpsertCompanyRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertCompanyRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'keys': json['keys'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : (json['last_seen_at'] === null ? null : new Date(json['last_seen_at'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
        'updateOnly': !exists(json, 'update_only') ? undefined : json['update_only'],
    };
}

export function UpsertCompanyRequestBodyToJSON(value?: UpsertCompanyRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'keys': value.keys,
        'last_seen_at': value.lastSeenAt === undefined ? undefined : (value.lastSeenAt === null ? null : value.lastSeenAt.toISOString()),
        'name': value.name,
        'traits': value.traits,
        'update_only': value.updateOnly,
    };
}

