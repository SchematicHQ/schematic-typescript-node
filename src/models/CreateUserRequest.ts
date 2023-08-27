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
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * Optionally specify company using key/value pairs
     * @type {object}
     * @memberof CreateUserRequest
     */
    company?: object;
    /**
     * Optionally specify company using Schematic company ID
     * @type {string}
     * @memberof CreateUserRequest
     */
    companyId?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateUserRequest
     */
    keys?: object;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    lastSeenAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserRequest
     */
    skipWebhooks?: boolean;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof CreateUserRequest
     */
    traits?: object;
}

/**
 * Check if a given object implements the CreateUserRequest interface.
 */
export function instanceOfCreateUserRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateUserRequestFromJSON(json: any): CreateUserRequest {
    return CreateUserRequestFromJSONTyped(json, false);
}

export function CreateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'keys': !exists(json, 'keys') ? undefined : json['keys'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : json['last_seen_at'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
    };
}

export function CreateUserRequestToJSON(value?: CreateUserRequest | null): any {
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
        'last_seen_at': value.lastSeenAt,
        'name': value.name,
        'skip_webhooks': value.skipWebhooks,
        'traits': value.traits,
    };
}

