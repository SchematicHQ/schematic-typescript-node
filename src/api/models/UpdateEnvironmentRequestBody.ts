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
 * @interface UpdateEnvironmentRequestBody
 */
export interface UpdateEnvironmentRequestBody {
    /**
     * 
     * @type {string}
     * @memberof UpdateEnvironmentRequestBody
     */
    environmentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateEnvironmentRequestBody
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEnvironmentRequestBody
     */
    skipWebhooks?: boolean | null;
}

/**
 * Check if a given object implements the UpdateEnvironmentRequestBody interface.
 */
export function instanceOfUpdateEnvironmentRequestBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateEnvironmentRequestBodyFromJSON(json: any): UpdateEnvironmentRequestBody {
    return UpdateEnvironmentRequestBodyFromJSONTyped(json, false);
}

export function UpdateEnvironmentRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEnvironmentRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'environmentType': !exists(json, 'environment_type') ? undefined : json['environment_type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
    };
}

export function UpdateEnvironmentRequestBodyToJSON(value?: UpdateEnvironmentRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'environment_type': value.environmentType,
        'name': value.name,
        'skip_webhooks': value.skipWebhooks,
    };
}

