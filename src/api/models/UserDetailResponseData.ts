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
import type { CompanyMembershipDetailResponseData } from './CompanyMembershipDetailResponseData';
import {
    CompanyMembershipDetailResponseDataFromJSON,
    CompanyMembershipDetailResponseDataFromJSONTyped,
    CompanyMembershipDetailResponseDataToJSON,
} from './CompanyMembershipDetailResponseData';
import type { EntityKeyDetailResponseData } from './EntityKeyDetailResponseData';
import {
    EntityKeyDetailResponseDataFromJSON,
    EntityKeyDetailResponseDataFromJSONTyped,
    EntityKeyDetailResponseDataToJSON,
} from './EntityKeyDetailResponseData';
import type { EntityTraitDetailResponseData } from './EntityTraitDetailResponseData';
import {
    EntityTraitDetailResponseDataFromJSON,
    EntityTraitDetailResponseDataFromJSONTyped,
    EntityTraitDetailResponseDataToJSON,
} from './EntityTraitDetailResponseData';

/**
 * 
 * @export
 * @interface UserDetailResponseData
 */
export interface UserDetailResponseData {
    /**
     * 
     * @type {Array<CompanyMembershipDetailResponseData>}
     * @memberof UserDetailResponseData
     */
    companyMemberships: Array<CompanyMembershipDetailResponseData>;
    /**
     * 
     * @type {Date}
     * @memberof UserDetailResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {Array<EntityTraitDetailResponseData>}
     * @memberof UserDetailResponseData
     */
    entityTraits: Array<EntityTraitDetailResponseData>;
    /**
     * 
     * @type {string}
     * @memberof UserDetailResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailResponseData
     */
    id: string;
    /**
     * 
     * @type {Array<EntityKeyDetailResponseData>}
     * @memberof UserDetailResponseData
     */
    keys: Array<EntityKeyDetailResponseData>;
    /**
     * 
     * @type {Date}
     * @memberof UserDetailResponseData
     */
    lastSeenAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof UserDetailResponseData
     */
    name: string;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof UserDetailResponseData
     */
    traits?: object;
    /**
     * 
     * @type {Date}
     * @memberof UserDetailResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the UserDetailResponseData interface.
 */
export function instanceOfUserDetailResponseData(value: object): boolean {
    if (!('companyMemberships' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('entityTraits' in value)) return false;
    if (!('environmentId' in value)) return false;
    if (!('id' in value)) return false;
    if (!('keys' in value)) return false;
    if (!('name' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function UserDetailResponseDataFromJSON(json: any): UserDetailResponseData {
    return UserDetailResponseDataFromJSONTyped(json, false);
}

export function UserDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDetailResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'companyMemberships': ((json['company_memberships'] as Array<any>).map(CompanyMembershipDetailResponseDataFromJSON)),
        'createdAt': (new Date(json['created_at'])),
        'entityTraits': ((json['entity_traits'] as Array<any>).map(EntityTraitDetailResponseDataFromJSON)),
        'environmentId': json['environment_id'],
        'id': json['id'],
        'keys': ((json['keys'] as Array<any>).map(EntityKeyDetailResponseDataFromJSON)),
        'lastSeenAt': json['last_seen_at'] == null ? undefined : (new Date(json['last_seen_at'])),
        'name': json['name'],
        'traits': json['traits'] == null ? undefined : json['traits'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function UserDetailResponseDataToJSON(value?: UserDetailResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'company_memberships': ((value['companyMemberships'] as Array<any>).map(CompanyMembershipDetailResponseDataToJSON)),
        'created_at': ((value['createdAt']).toISOString()),
        'entity_traits': ((value['entityTraits'] as Array<any>).map(EntityTraitDetailResponseDataToJSON)),
        'environment_id': value['environmentId'],
        'id': value['id'],
        'keys': ((value['keys'] as Array<any>).map(EntityKeyDetailResponseDataToJSON)),
        'last_seen_at': value['lastSeenAt'] == null ? undefined : ((value['lastSeenAt'] as any).toISOString()),
        'name': value['name'],
        'traits': value['traits'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

