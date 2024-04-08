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
import type { CreateOrUpdateRuleRequestBody } from './CreateOrUpdateRuleRequestBody';
import {
    CreateOrUpdateRuleRequestBodyFromJSON,
    CreateOrUpdateRuleRequestBodyFromJSONTyped,
    CreateOrUpdateRuleRequestBodyToJSON,
} from './CreateOrUpdateRuleRequestBody';

/**
 * 
 * @export
 * @interface UpdateFlagRulesRequestBody
 */
export interface UpdateFlagRulesRequestBody {
    /**
     * 
     * @type {Array<CreateOrUpdateRuleRequestBody>}
     * @memberof UpdateFlagRulesRequestBody
     */
    rules: Array<CreateOrUpdateRuleRequestBody>;
}

/**
 * Check if a given object implements the UpdateFlagRulesRequestBody interface.
 */
export function instanceOfUpdateFlagRulesRequestBody(value: object): boolean {
    if (!('rules' in value)) return false;
    return true;
}

export function UpdateFlagRulesRequestBodyFromJSON(json: any): UpdateFlagRulesRequestBody {
    return UpdateFlagRulesRequestBodyFromJSONTyped(json, false);
}

export function UpdateFlagRulesRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFlagRulesRequestBody {
    if (json == null) {
        return json;
    }
    return {
        
        'rules': ((json['rules'] as Array<any>).map(CreateOrUpdateRuleRequestBodyFromJSON)),
    };
}

export function UpdateFlagRulesRequestBodyToJSON(value?: UpdateFlagRulesRequestBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'rules': ((value['rules'] as Array<any>).map(CreateOrUpdateRuleRequestBodyToJSON)),
    };
}

