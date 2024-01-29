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
    metricPeriod?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCompanyOverrideRequestBody
     */
    skipWebhooks?: boolean | null;
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
    valueType: string;
}

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
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
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
        'skip_webhooks': value.skipWebhooks,
        'value_bool': value.valueBool,
        'value_numeric': value.valueNumeric,
        'value_trait_id': value.valueTraitId,
        'value_type': value.valueType,
    };
}

