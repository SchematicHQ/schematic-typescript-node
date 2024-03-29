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
import type { CreateOrUpdateConditionGroupRequestBody } from './CreateOrUpdateConditionGroupRequestBody';
import {
    CreateOrUpdateConditionGroupRequestBodyFromJSON,
    CreateOrUpdateConditionGroupRequestBodyFromJSONTyped,
    CreateOrUpdateConditionGroupRequestBodyToJSON,
} from './CreateOrUpdateConditionGroupRequestBody';
import type { CreateOrUpdateConditionRequestBody } from './CreateOrUpdateConditionRequestBody';
import {
    CreateOrUpdateConditionRequestBodyFromJSON,
    CreateOrUpdateConditionRequestBodyFromJSONTyped,
    CreateOrUpdateConditionRequestBodyToJSON,
} from './CreateOrUpdateConditionRequestBody';

/**
 * 
 * @export
 * @interface UpdateAudienceRequestBody
 */
export interface UpdateAudienceRequestBody {
    /**
     * 
     * @type {Array<CreateOrUpdateConditionGroupRequestBody>}
     * @memberof UpdateAudienceRequestBody
     */
    conditionGroups: Array<CreateOrUpdateConditionGroupRequestBody>;
    /**
     * 
     * @type {Array<CreateOrUpdateConditionRequestBody>}
     * @memberof UpdateAudienceRequestBody
     */
    conditions: Array<CreateOrUpdateConditionRequestBody>;
}

/**
 * Check if a given object implements the UpdateAudienceRequestBody interface.
 */
export function instanceOfUpdateAudienceRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "conditionGroups" in value;
    isInstance = isInstance && "conditions" in value;

    return isInstance;
}

export function UpdateAudienceRequestBodyFromJSON(json: any): UpdateAudienceRequestBody {
    return UpdateAudienceRequestBodyFromJSONTyped(json, false);
}

export function UpdateAudienceRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAudienceRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditionGroups': ((json['condition_groups'] as Array<any>).map(CreateOrUpdateConditionGroupRequestBodyFromJSON)),
        'conditions': ((json['conditions'] as Array<any>).map(CreateOrUpdateConditionRequestBodyFromJSON)),
    };
}

export function UpdateAudienceRequestBodyToJSON(value?: UpdateAudienceRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'condition_groups': ((value.conditionGroups as Array<any>).map(CreateOrUpdateConditionGroupRequestBodyToJSON)),
        'conditions': ((value.conditions as Array<any>).map(CreateOrUpdateConditionRequestBodyToJSON)),
    };
}

