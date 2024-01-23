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
import type { RuleDetailResponseData } from './RuleDetailResponseData';
import {
    RuleDetailResponseDataFromJSON,
    RuleDetailResponseDataFromJSONTyped,
    RuleDetailResponseDataToJSON,
} from './RuleDetailResponseData';

/**
 * The updated resource
 * @export
 * @interface RulesDetailResponseData
 */
export interface RulesDetailResponseData {
    /**
     * 
     * @type {Array<RuleDetailResponseData>}
     * @memberof RulesDetailResponseData
     */
    rules: Array<RuleDetailResponseData>;
}

/**
 * Check if a given object implements the RulesDetailResponseData interface.
 */
export function instanceOfRulesDetailResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rules" in value;

    return isInstance;
}

export function RulesDetailResponseDataFromJSON(json: any): RulesDetailResponseData {
    return RulesDetailResponseDataFromJSONTyped(json, false);
}

export function RulesDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RulesDetailResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rules': ((json['rules'] as Array<any>).map(RuleDetailResponseDataFromJSON)),
    };
}

export function RulesDetailResponseDataToJSON(value?: RulesDetailResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rules': ((value.rules as Array<any>).map(RuleDetailResponseDataToJSON)),
    };
}

