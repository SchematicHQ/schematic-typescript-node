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
/**
 * 
 * @export
 * @interface CreateReqCommon
 */
export interface CreateReqCommon {
    /**
     * 
     * @type {string}
     * @memberof CreateReqCommon
     */
    featureId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReqCommon
     */
    metricPeriod?: CreateReqCommonMetricPeriodEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateReqCommon
     */
    valueBool?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateReqCommon
     */
    valueNumeric?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateReqCommon
     */
    valueTraitId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateReqCommon
     */
    valueType: CreateReqCommonValueTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum CreateReqCommonMetricPeriodEnum {
    Month = 'current_month',
    Week = 'current_week',
    Day = 'current_day'
}
/**
* @export
* @enum {string}
*/
export enum CreateReqCommonValueTypeEnum {
    Boolean = 'Boolean',
    Numeric = 'Numeric',
    Trait = 'Trait',
    Unlimited = 'Unlimited'
}


/**
 * Check if a given object implements the CreateReqCommon interface.
 */
export function instanceOfCreateReqCommon(value: object): boolean {
    if (!('featureId' in value)) return false;
    if (!('valueType' in value)) return false;
    return true;
}

export function CreateReqCommonFromJSON(json: any): CreateReqCommon {
    return CreateReqCommonFromJSONTyped(json, false);
}

export function CreateReqCommonFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateReqCommon {
    if (json == null) {
        return json;
    }
    return {
        
        'featureId': json['feature_id'],
        'metricPeriod': json['metric_period'] == null ? undefined : json['metric_period'],
        'valueBool': json['value_bool'] == null ? undefined : json['value_bool'],
        'valueNumeric': json['value_numeric'] == null ? undefined : json['value_numeric'],
        'valueTraitId': json['value_trait_id'] == null ? undefined : json['value_trait_id'],
        'valueType': json['value_type'],
    };
}

export function CreateReqCommonToJSON(value?: CreateReqCommon | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'feature_id': value['featureId'],
        'metric_period': value['metricPeriod'],
        'value_bool': value['valueBool'],
        'value_numeric': value['valueNumeric'],
        'value_trait_id': value['valueTraitId'],
        'value_type': value['valueType'],
    };
}

