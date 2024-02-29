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
 * @interface CreateCompanyOverrideRequestBody
 */
export interface CreateCompanyOverrideRequestBody {
    /**
     * 
     * @type {string}
     * @memberof CreateCompanyOverrideRequestBody
     */
    companyId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompanyOverrideRequestBody
     */
    featureId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCompanyOverrideRequestBody
     */
    metricPeriod?: CreateCompanyOverrideRequestBodyMetricPeriodEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCompanyOverrideRequestBody
     */
    valueBool?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CreateCompanyOverrideRequestBody
     */
    valueNumeric?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCompanyOverrideRequestBody
     */
    valueTraitId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCompanyOverrideRequestBody
     */
    valueType: CreateCompanyOverrideRequestBodyValueTypeEnum;
}


/**
 * @export
 */
export const CreateCompanyOverrideRequestBodyMetricPeriodEnum = {
    Month: 'current_month',
    Week: 'current_week',
    Day: 'current_day'
} as const;
export type CreateCompanyOverrideRequestBodyMetricPeriodEnum = typeof CreateCompanyOverrideRequestBodyMetricPeriodEnum[keyof typeof CreateCompanyOverrideRequestBodyMetricPeriodEnum];

/**
 * @export
 */
export const CreateCompanyOverrideRequestBodyValueTypeEnum = {
    Boolean: 'Boolean',
    Numeric: 'Numeric',
    Trait: 'Trait',
    Unlimited: 'Unlimited'
} as const;
export type CreateCompanyOverrideRequestBodyValueTypeEnum = typeof CreateCompanyOverrideRequestBodyValueTypeEnum[keyof typeof CreateCompanyOverrideRequestBodyValueTypeEnum];


/**
 * Check if a given object implements the CreateCompanyOverrideRequestBody interface.
 */
export function instanceOfCreateCompanyOverrideRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyId" in value;
    isInstance = isInstance && "featureId" in value;
    isInstance = isInstance && "valueType" in value;

    return isInstance;
}

export function CreateCompanyOverrideRequestBodyFromJSON(json: any): CreateCompanyOverrideRequestBody {
    return CreateCompanyOverrideRequestBodyFromJSONTyped(json, false);
}

export function CreateCompanyOverrideRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCompanyOverrideRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': json['company_id'],
        'featureId': json['feature_id'],
        'metricPeriod': !exists(json, 'metric_period') ? undefined : json['metric_period'],
        'valueBool': !exists(json, 'value_bool') ? undefined : json['value_bool'],
        'valueNumeric': !exists(json, 'value_numeric') ? undefined : json['value_numeric'],
        'valueTraitId': !exists(json, 'value_trait_id') ? undefined : json['value_trait_id'],
        'valueType': json['value_type'],
    };
}

export function CreateCompanyOverrideRequestBodyToJSON(value?: CreateCompanyOverrideRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'feature_id': value.featureId,
        'metric_period': value.metricPeriod,
        'value_bool': value.valueBool,
        'value_numeric': value.valueNumeric,
        'value_trait_id': value.valueTraitId,
        'value_type': value.valueType,
    };
}

