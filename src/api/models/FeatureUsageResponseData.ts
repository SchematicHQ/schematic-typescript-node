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
import type { FeatureDetailResponseData } from './FeatureDetailResponseData';
import {
    FeatureDetailResponseDataFromJSON,
    FeatureDetailResponseDataFromJSONTyped,
    FeatureDetailResponseDataToJSON,
} from './FeatureDetailResponseData';
import type { PlanResponseData } from './PlanResponseData';
import {
    PlanResponseDataFromJSON,
    PlanResponseDataFromJSONTyped,
    PlanResponseDataToJSON,
} from './PlanResponseData';

/**
 * 
 * @export
 * @interface FeatureUsageResponseData
 */
export interface FeatureUsageResponseData {
    /**
     * Whether further usage is permitted.
     * @type {boolean}
     * @memberof FeatureUsageResponseData
     */
    access: boolean;
    /**
     * The maximum amount of usage that is permitted; a null value indicates that unlimited usage is permitted.
     * @type {number}
     * @memberof FeatureUsageResponseData
     */
    allocation?: number;
    /**
     * 
     * @type {string}
     * @memberof FeatureUsageResponseData
     */
    entitlementId: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureUsageResponseData
     */
    entitlementType: string;
    /**
     * 
     * @type {FeatureDetailResponseData}
     * @memberof FeatureUsageResponseData
     */
    feature?: FeatureDetailResponseData;
    /**
     * The period over which usage is measured.
     * @type {string}
     * @memberof FeatureUsageResponseData
     */
    period?: string;
    /**
     * 
     * @type {PlanResponseData}
     * @memberof FeatureUsageResponseData
     */
    plan?: PlanResponseData;
    /**
     * The amount of usage that has been consumed; a null value indicates that usage is not being measured.
     * @type {number}
     * @memberof FeatureUsageResponseData
     */
    usage?: number;
}

/**
 * Check if a given object implements the FeatureUsageResponseData interface.
 */
export function instanceOfFeatureUsageResponseData(value: object): boolean {
    if (!('access' in value)) return false;
    if (!('entitlementId' in value)) return false;
    if (!('entitlementType' in value)) return false;
    return true;
}

export function FeatureUsageResponseDataFromJSON(json: any): FeatureUsageResponseData {
    return FeatureUsageResponseDataFromJSONTyped(json, false);
}

export function FeatureUsageResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureUsageResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'access': json['access'],
        'allocation': json['allocation'] == null ? undefined : json['allocation'],
        'entitlementId': json['entitlement_id'],
        'entitlementType': json['entitlement_type'],
        'feature': json['feature'] == null ? undefined : FeatureDetailResponseDataFromJSON(json['feature']),
        'period': json['period'] == null ? undefined : json['period'],
        'plan': json['plan'] == null ? undefined : PlanResponseDataFromJSON(json['plan']),
        'usage': json['usage'] == null ? undefined : json['usage'],
    };
}

export function FeatureUsageResponseDataToJSON(value?: FeatureUsageResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'access': value['access'],
        'allocation': value['allocation'],
        'entitlement_id': value['entitlementId'],
        'entitlement_type': value['entitlementType'],
        'feature': FeatureDetailResponseDataToJSON(value['feature']),
        'period': value['period'],
        'plan': PlanResponseDataToJSON(value['plan']),
        'usage': value['usage'],
    };
}

