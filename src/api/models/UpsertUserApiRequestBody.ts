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
 * @interface UpsertUserApiRequestBody
 */
export interface UpsertUserApiRequestBody {
    /**
     * Optionally specify company using key/value pairs
     * @type {object}
     * @memberof UpsertUserApiRequestBody
     */
    company: object;
    /**
     * Optionally specify company using Schematic company ID
     * @type {string}
     * @memberof UpsertUserApiRequestBody
     */
    companyId?: string;
    /**
     * 
     * @type {object}
     * @memberof UpsertUserApiRequestBody
     */
    keys: object;
    /**
     * 
     * @type {Date}
     * @memberof UpsertUserApiRequestBody
     */
    lastSeenAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof UpsertUserApiRequestBody
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpsertUserApiRequestBody
     */
    skipWebhooks: boolean;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof UpsertUserApiRequestBody
     */
    traits?: object;
}

/**
 * Check if a given object implements the UpsertUserApiRequestBody interface.
 */
export function instanceOfUpsertUserApiRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "company" in value;
    isInstance = isInstance && "keys" in value;
    isInstance = isInstance && "skipWebhooks" in value;

    return isInstance;
}

export function UpsertUserApiRequestBodyFromJSON(json: any): UpsertUserApiRequestBody {
    return UpsertUserApiRequestBodyFromJSONTyped(json, false);
}

export function UpsertUserApiRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertUserApiRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': json['company'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'keys': json['keys'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : (json['last_seen_at'] === null ? null : new Date(json['last_seen_at'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'skipWebhooks': json['skip_webhooks'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
    };
}

export function UpsertUserApiRequestBodyToJSON(value?: UpsertUserApiRequestBody | null): any {
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
        'skip_webhooks': value.skipWebhooks,
        'traits': value.traits,
    };
}

