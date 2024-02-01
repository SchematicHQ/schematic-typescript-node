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
 * @interface UpsertUserRequestBody
 */
export interface UpsertUserRequestBody {
    /**
     * Optionally specify company using key/value pairs
     * @type {object}
     * @memberof UpsertUserRequestBody
     */
    company: object;
    /**
     * Optionally specify company using Schematic company ID
     * @type {string}
     * @memberof UpsertUserRequestBody
     */
    companyId?: string | null;
    /**
     * 
     * @type {object}
     * @memberof UpsertUserRequestBody
     */
    keys: object;
    /**
     * 
     * @type {Date}
     * @memberof UpsertUserRequestBody
     */
    lastSeenAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertUserRequestBody
     */
    name?: string | null;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof UpsertUserRequestBody
     */
    traits?: object;
    /**
     * 
     * @type {boolean}
     * @memberof UpsertUserRequestBody
     */
    updateOnly?: boolean | null;
}

/**
 * Check if a given object implements the UpsertUserRequestBody interface.
 */
export function instanceOfUpsertUserRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "company" in value;
    isInstance = isInstance && "keys" in value;

    return isInstance;
}

export function UpsertUserRequestBodyFromJSON(json: any): UpsertUserRequestBody {
    return UpsertUserRequestBodyFromJSONTyped(json, false);
}

export function UpsertUserRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertUserRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': json['company'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'keys': json['keys'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : (json['last_seen_at'] === null ? null : new Date(json['last_seen_at'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
        'updateOnly': !exists(json, 'update_only') ? undefined : json['update_only'],
    };
}

export function UpsertUserRequestBodyToJSON(value?: UpsertUserRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'company_id': value.companyId,
        'keys': value.keys,
        'last_seen_at': value.lastSeenAt === undefined ? undefined : (value.lastSeenAt === null ? null : value.lastSeenAt.toISOString()),
        'name': value.name,
        'traits': value.traits,
        'update_only': value.updateOnly,
    };
}

