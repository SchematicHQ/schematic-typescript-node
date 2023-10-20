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
 * @interface CreatePlanRequest
 */
export interface CreatePlanRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePlanRequest
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreatePlanRequest
     */
    skipWebhooks: boolean;
}

/**
 * Check if a given object implements the CreatePlanRequest interface.
 */
export function instanceOfCreatePlanRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "skipWebhooks" in value;

    return isInstance;
}

export function CreatePlanRequestFromJSON(json: any): CreatePlanRequest {
    return CreatePlanRequestFromJSONTyped(json, false);
}

export function CreatePlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'skipWebhooks': json['skip_webhooks'],
    };
}

export function CreatePlanRequestToJSON(value?: CreatePlanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'skip_webhooks': value.skipWebhooks,
    };
}

