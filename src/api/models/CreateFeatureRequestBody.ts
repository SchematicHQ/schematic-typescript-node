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
import type { CreateOrUpdateFlagRequestBody } from './CreateOrUpdateFlagRequestBody';
import {
    CreateOrUpdateFlagRequestBodyFromJSON,
    CreateOrUpdateFlagRequestBodyFromJSONTyped,
    CreateOrUpdateFlagRequestBodyToJSON,
} from './CreateOrUpdateFlagRequestBody';

/**
 * 
 * @export
 * @interface CreateFeatureRequestBody
 */
export interface CreateFeatureRequestBody {
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestBody
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestBody
     */
    eventSubtype?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestBody
     */
    featureType: CreateFeatureRequestBodyFeatureTypeEnum;
    /**
     * 
     * @type {CreateOrUpdateFlagRequestBody}
     * @memberof CreateFeatureRequestBody
     */
    flag?: CreateOrUpdateFlagRequestBody;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestBody
     */
    lifecyclePhase?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestBody
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestBody
     */
    traitId?: string | null;
}


/**
 * @export
 */
export const CreateFeatureRequestBodyFeatureTypeEnum = {
    Boolean: 'boolean',
    Event: 'event',
    Trait: 'trait'
} as const;
export type CreateFeatureRequestBodyFeatureTypeEnum = typeof CreateFeatureRequestBodyFeatureTypeEnum[keyof typeof CreateFeatureRequestBodyFeatureTypeEnum];


/**
 * Check if a given object implements the CreateFeatureRequestBody interface.
 */
export function instanceOfCreateFeatureRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "featureType" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CreateFeatureRequestBodyFromJSON(json: any): CreateFeatureRequestBody {
    return CreateFeatureRequestBodyFromJSONTyped(json, false);
}

export function CreateFeatureRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeatureRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'featureType': json['feature_type'],
        'flag': !exists(json, 'flag') ? undefined : CreateOrUpdateFlagRequestBodyFromJSON(json['flag']),
        'lifecyclePhase': !exists(json, 'lifecycle_phase') ? undefined : json['lifecycle_phase'],
        'name': json['name'],
        'traitId': !exists(json, 'trait_id') ? undefined : json['trait_id'],
    };
}

export function CreateFeatureRequestBodyToJSON(value?: CreateFeatureRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'event_subtype': value.eventSubtype,
        'feature_type': value.featureType,
        'flag': CreateOrUpdateFlagRequestBodyToJSON(value.flag),
        'lifecycle_phase': value.lifecyclePhase,
        'name': value.name,
        'trait_id': value.traitId,
    };
}

