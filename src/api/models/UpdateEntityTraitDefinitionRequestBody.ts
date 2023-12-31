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
 * @interface UpdateEntityTraitDefinitionRequestBody
 */
export interface UpdateEntityTraitDefinitionRequestBody {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEntityTraitDefinitionRequestBody
     */
    skipWebhooks?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateEntityTraitDefinitionRequestBody
     */
    traitType: string;
}

/**
 * Check if a given object implements the UpdateEntityTraitDefinitionRequestBody interface.
 */
export function instanceOfUpdateEntityTraitDefinitionRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "traitType" in value;

    return isInstance;
}

export function UpdateEntityTraitDefinitionRequestBodyFromJSON(json: any): UpdateEntityTraitDefinitionRequestBody {
    return UpdateEntityTraitDefinitionRequestBodyFromJSONTyped(json, false);
}

export function UpdateEntityTraitDefinitionRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEntityTraitDefinitionRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
        'traitType': json['trait_type'],
    };
}

export function UpdateEntityTraitDefinitionRequestBodyToJSON(value?: UpdateEntityTraitDefinitionRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'skip_webhooks': value.skipWebhooks,
        'trait_type': value.traitType,
    };
}

