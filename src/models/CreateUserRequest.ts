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
import type { CreateCompanyRequestKeysInner } from './CreateCompanyRequestKeysInner';
import {
    CreateCompanyRequestKeysInnerFromJSON,
    CreateCompanyRequestKeysInnerFromJSONTyped,
    CreateCompanyRequestKeysInnerToJSON,
} from './CreateCompanyRequestKeysInner';

/**
 * 
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateUserRequest
     */
    companyId?: number;
    /**
     * 
     * @type {Array<CreateCompanyRequestKeysInner>}
     * @memberof CreateUserRequest
     */
    keys?: Array<CreateCompanyRequestKeysInner>;
    /**
     * 
     * @type {Date}
     * @memberof CreateUserRequest
     */
    lastSeenAt?: Date;
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
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'keys': !exists(json, 'keys') ? undefined : ((json['keys'] as Array<any>).map(CreateCompanyRequestKeysInnerFromJSON)),
        'lastSeenAt': !exists(json, 'last_seen_at') ? undefined : (new Date(json['last_seen_at'])),
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
        
        'company_id': value.companyId,
        'keys': value.keys === undefined ? undefined : ((value.keys as Array<any>).map(CreateCompanyRequestKeysInnerToJSON)),
        'last_seen_at': value.lastSeenAt === undefined ? undefined : (value.lastSeenAt.toISOString()),
        'skip_webhooks': value.skipWebhooks,
        'traits': value.traits,
    };
}

