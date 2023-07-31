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
 * @interface CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
 */
export interface CreateFeatureRequestFlagsInnerRulesInnerConditionsInner {
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
     */
    eventSubtype?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
     */
    objectType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
     */
    operator?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
     */
    priority?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
     */
    resourceIds?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CreateFeatureRequestFlagsInnerRulesInnerConditionsInner
     */
    value?: number;
}

/**
 * Check if a given object implements the CreateFeatureRequestFlagsInnerRulesInnerConditionsInner interface.
 */
export function instanceOfCreateFeatureRequestFlagsInnerRulesInnerConditionsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFeatureRequestFlagsInnerRulesInnerConditionsInnerFromJSON(json: any): CreateFeatureRequestFlagsInnerRulesInnerConditionsInner {
    return CreateFeatureRequestFlagsInnerRulesInnerConditionsInnerFromJSONTyped(json, false);
}

export function CreateFeatureRequestFlagsInnerRulesInnerConditionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeatureRequestFlagsInnerRulesInnerConditionsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'objectType': !exists(json, 'object_type') ? undefined : json['object_type'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'resourceIds': !exists(json, 'resource_ids') ? undefined : json['resource_ids'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CreateFeatureRequestFlagsInnerRulesInnerConditionsInnerToJSON(value?: CreateFeatureRequestFlagsInnerRulesInnerConditionsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event_subtype': value.eventSubtype,
        'id': value.id,
        'object_type': value.objectType,
        'operator': value.operator,
        'priority': value.priority,
        'resource_ids': value.resourceIds,
        'value': value.value,
    };
}

