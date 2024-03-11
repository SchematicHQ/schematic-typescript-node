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
 * @interface CreateEntityTraitDefinitionRequestBody
 */
export interface CreateEntityTraitDefinitionRequestBody {
    /**
     * 
     * @type {string}
     * @memberof CreateEntityTraitDefinitionRequestBody
     */
    entityType: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateEntityTraitDefinitionRequestBody
     */
    hierarchy: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateEntityTraitDefinitionRequestBody
     */
    traitType: string;
}

/**
 * Check if a given object implements the CreateEntityTraitDefinitionRequestBody interface.
 */
export function instanceOfCreateEntityTraitDefinitionRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entityType" in value;
    isInstance = isInstance && "hierarchy" in value;
    isInstance = isInstance && "traitType" in value;

    return isInstance;
}

export function CreateEntityTraitDefinitionRequestBodyFromJSON(json: any): CreateEntityTraitDefinitionRequestBody {
    return CreateEntityTraitDefinitionRequestBodyFromJSONTyped(json, false);
}

export function CreateEntityTraitDefinitionRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEntityTraitDefinitionRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entityType': json['entity_type'],
        'hierarchy': json['hierarchy'],
        'traitType': json['trait_type'],
    };
}

export function CreateEntityTraitDefinitionRequestBodyToJSON(value?: CreateEntityTraitDefinitionRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity_type': value.entityType,
        'hierarchy': value.hierarchy,
        'trait_type': value.traitType,
    };
}

