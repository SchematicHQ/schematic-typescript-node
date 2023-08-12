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
 * @interface CreateCompanyRequest
 */
export interface CreateCompanyRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCompanyRequest
     */
    id?: string;
    /**
     * 
     * @type {object}
     * @memberof CreateCompanyRequest
     */
    keys?: object;
    /**
     * 
     * @type {Date}
     * @memberof CreateCompanyRequest
     */
    lastSeenAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateCompanyRequest
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCompanyRequest
     */
    skipWebhooks?: boolean;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof CreateCompanyRequest
     */
    traits?: object;
}

/**
 * Check if a given object implements the CreateCompanyRequest interface.
 */
export function instanceOfCreateCompanyRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCompanyRequestFromJSON(json: any): CreateCompanyRequest {
    return CreateCompanyRequestFromJSONTyped(json, false);
}

export function CreateCompanyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompanyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'keys': !exists(json, 'keys') ? undefined : json['keys'],
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : (new Date(json['last_seen_at'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
        'traits': !exists(json, 'traits') ? undefined : json['traits'],
    };
}

export function CreateCompanyRequestToJSON(value?: CreateCompanyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'keys': value.keys,
        'last_seen_at': value.lastSeenAt === undefined ? undefined : (value.lastSeenAt.toISOString()),
        'name': value.name,
        'skip_webhooks': value.skipWebhooks,
        'traits': value.traits,
    };
}

