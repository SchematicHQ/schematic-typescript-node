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
import type { EntityTraitDefinitionResponseData } from './EntityTraitDefinitionResponseData';
import {
    EntityTraitDefinitionResponseDataFromJSON,
    EntityTraitDefinitionResponseDataFromJSONTyped,
    EntityTraitDefinitionResponseDataToJSON,
} from './EntityTraitDefinitionResponseData';

/**
 * 
 * @export
 * @interface CreateEntityTraitDefinitionResponse
 */
export interface CreateEntityTraitDefinitionResponse {
    /**
     * 
     * @type {EntityTraitDefinitionResponseData}
     * @memberof CreateEntityTraitDefinitionResponse
     */
    data: EntityTraitDefinitionResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateEntityTraitDefinitionResponse
     */
    params: object;
}

/**
 * Check if a given object implements the CreateEntityTraitDefinitionResponse interface.
 */
export function instanceOfCreateEntityTraitDefinitionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function CreateEntityTraitDefinitionResponseFromJSON(json: any): CreateEntityTraitDefinitionResponse {
    return CreateEntityTraitDefinitionResponseFromJSONTyped(json, false);
}

export function CreateEntityTraitDefinitionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEntityTraitDefinitionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': EntityTraitDefinitionResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function CreateEntityTraitDefinitionResponseToJSON(value?: CreateEntityTraitDefinitionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': EntityTraitDefinitionResponseDataToJSON(value.data),
        'params': value.params,
    };
}

