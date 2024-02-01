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
 * @interface UpdateFeatureRequestBody
 */
export interface UpdateFeatureRequestBody {
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequestBody
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequestBody
     */
    eventSubtype?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequestBody
     */
    featureType?: string | null;
    /**
     * 
     * @type {CreateOrUpdateFlagRequestBody}
     * @memberof UpdateFeatureRequestBody
     */
    flag?: CreateOrUpdateFlagRequestBody;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequestBody
     */
    lifecyclePhase?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequestBody
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequestBody
     */
    traitId?: string | null;
}

/**
 * Check if a given object implements the UpdateFeatureRequestBody interface.
 */
export function instanceOfUpdateFeatureRequestBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateFeatureRequestBodyFromJSON(json: any): UpdateFeatureRequestBody {
    return UpdateFeatureRequestBodyFromJSONTyped(json, false);
}

export function UpdateFeatureRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFeatureRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'featureType': !exists(json, 'feature_type') ? undefined : json['feature_type'],
        'flag': !exists(json, 'flag') ? undefined : CreateOrUpdateFlagRequestBodyFromJSON(json['flag']),
        'lifecyclePhase': !exists(json, 'lifecycle_phase') ? undefined : json['lifecycle_phase'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'traitId': !exists(json, 'trait_id') ? undefined : json['trait_id'],
    };
}

export function UpdateFeatureRequestBodyToJSON(value?: UpdateFeatureRequestBody | null): any {
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

