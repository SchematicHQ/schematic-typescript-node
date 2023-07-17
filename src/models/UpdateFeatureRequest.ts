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
 * @interface UpdateFeatureRequest
 */
export interface UpdateFeatureRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequest
     */
    lifecyclePhase?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureRequest
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateFeatureRequest
     */
    skipWebhooks?: boolean;
}

/**
 * Check if a given object implements the UpdateFeatureRequest interface.
 */
export function instanceOfUpdateFeatureRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateFeatureRequestFromJSON(json: any): UpdateFeatureRequest {
    return UpdateFeatureRequestFromJSONTyped(json, false);
}

export function UpdateFeatureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFeatureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'lifecyclePhase': !exists(json, 'lifecycle_phase') ? undefined : json['lifecycle_phase'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
    };
}

export function UpdateFeatureRequestToJSON(value?: UpdateFeatureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'lifecycle_phase': value.lifecyclePhase,
        'name': value.name,
        'skip_webhooks': value.skipWebhooks,
    };
}

