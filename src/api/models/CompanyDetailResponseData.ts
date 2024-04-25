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
import type { PreviewObject } from './PreviewObject';
import {
    PreviewObjectFromJSON,
    PreviewObjectFromJSONTyped,
    PreviewObjectToJSON,
} from './PreviewObject';

/**
 * 
 * @export
 * @interface CompanyDetailResponseData
 */
export interface CompanyDetailResponseData {
    /**
     * 
     * @type {Date}
     * @memberof CompanyDetailResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {Array<EntityTraitDetailResponseData>}
     * @memberof CompanyDetailResponseData
     */
    entityTraits: Array<EntityTraitDetailResponseData>;
    /**
     * 
     * @type {string}
     * @memberof CompanyDetailResponseData
     */
    environmentId: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyDetailResponseData
     */
    id: string;
    /**
     * 
     * @type {Array<EntityKeyDetailResponseData>}
     * @memberof CompanyDetailResponseData
     */
    keys: Array<EntityKeyDetailResponseData>;
    /**
     * 
     * @type {Date}
     * @memberof CompanyDetailResponseData
     */
    lastSeenAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CompanyDetailResponseData
     */
    logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyDetailResponseData
     */
    name: string;
    /**
     * 
     * @type {Array<PreviewObject>}
     * @memberof CompanyDetailResponseData
     */
    plans: Array<PreviewObject>;
    /**
     * A map of trait names to trait values
     * @type {object}
     * @memberof CompanyDetailResponseData
     */
    traits?: object;
    /**
     * 
     * @type {Date}
     * @memberof CompanyDetailResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof CompanyDetailResponseData
     */
    userCount: number;
}

/**
 * Check if a given object implements the CompanyDetailResponseData interface.
 */
export function instanceOfCompanyDetailResponseData(value: object): boolean {
    if (!('createdAt' in value)) return false;
    if (!('entityTraits' in value)) return false;
    if (!('environmentId' in value)) return false;
    if (!('id' in value)) return false;
    if (!('keys' in value)) return false;
    if (!('name' in value)) return false;
    if (!('plans' in value)) return false;
    if (!('updatedAt' in value)) return false;
    if (!('userCount' in value)) return false;
    return true;
}

export function CompanyDetailResponseDataFromJSON(json: any): CompanyDetailResponseData {
    return CompanyDetailResponseDataFromJSONTyped(json, false);
}

export function CompanyDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyDetailResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'entityTraits': ((json['entity_traits'] as Array<any>).map(EntityTraitDetailResponseDataFromJSON)),
        'environmentId': json['environment_id'],
        'id': json['id'],
        'keys': ((json['keys'] as Array<any>).map(EntityKeyDetailResponseDataFromJSON)),
        'lastSeenAt': json['last_seen_at'] == null ? undefined : (new Date(json['last_seen_at'])),
        'logoUrl': json['logo_url'] == null ? undefined : json['logo_url'],
        'name': json['name'],
        'plans': ((json['plans'] as Array<any>).map(PreviewObjectFromJSON)),
        'traits': json['traits'] == null ? undefined : json['traits'],
        'updatedAt': (new Date(json['updated_at'])),
        'userCount': json['user_count'],
    };
}

export function CompanyDetailResponseDataToJSON(value?: CompanyDetailResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['createdAt']).toISOString()),
        'entity_traits': ((value['entityTraits'] as Array<any>).map(EntityTraitDetailResponseDataToJSON)),
        'environment_id': value['environmentId'],
        'id': value['id'],
        'keys': ((value['keys'] as Array<any>).map(EntityKeyDetailResponseDataToJSON)),
        'last_seen_at': value['lastSeenAt'] == null ? undefined : ((value['lastSeenAt'] as any).toISOString()),
        'logo_url': value['logoUrl'],
        'name': value['name'],
        'plans': ((value['plans'] as Array<any>).map(PreviewObjectToJSON)),
        'traits': value['traits'],
        'updated_at': ((value['updatedAt']).toISOString()),
        'user_count': value['userCount'],
    };
}

