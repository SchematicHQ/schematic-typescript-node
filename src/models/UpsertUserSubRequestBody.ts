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
 * @interface UpsertUserSubRequestBody
 */
export interface UpsertUserSubRequestBody {
    /**
     * Optionally specify company using Schematic company ID
     * @type {string}
     * @memberof UpsertUserSubRequestBody
     */
    companyId?: string | null;
    /**
     * 
     * @type {object}
     * @memberof UpsertUserSubRequestBody
     */
    keys: object;
    /**
     * 
     * @type {Date}
     * @memberof UpsertUserSubRequestBody
     */
    lastSeenAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertUserSubRequestBody
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpsertUserSubRequestBody
     */
    skipWebhooks: boolean;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof UpsertUserSubRequestBody
     */
    traits?: object;
}

/**
 * Check if a given object implements the UpsertUserSubRequestBody interface.
 */
export function instanceOfUpsertUserSubRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "keys" in value;
    isInstance = isInstance && "skipWebhooks" in value;

    return isInstance;
}

export function UpsertUserSubRequestBodyFromJSON(json: any): UpsertUserSubRequestBody {
    return UpsertUserSubRequestBodyFromJSONTyped(json, false);
}

export function UpsertUserSubRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertUserSubRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'keys': json['keys'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : (json['last_seen_at'] === null ? null : new Date(json['last_seen_at'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'skipWebhooks': json['skip_webhooks'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
    };
}

export function UpsertUserSubRequestBodyToJSON(value?: UpsertUserSubRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'keys': value.keys,
        'last_seen_at': value.lastSeenAt === undefined ? undefined : (value.lastSeenAt === null ? null : value.lastSeenAt.toISOString()),
        'name': value.name,
        'skip_webhooks': value.skipWebhooks,
        'traits': value.traits,
    };
}

