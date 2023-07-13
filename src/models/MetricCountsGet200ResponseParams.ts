/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * Input parameters
 * @export
 * @interface MetricCountsGet200ResponseParams
 */
export interface MetricCountsGet200ResponseParams {
    /**
     * 
     * @type {string}
     * @memberof MetricCountsGet200ResponseParams
     */
    definitionId?: string;
    /**
     * Order direction
     * @type {string}
     * @memberof MetricCountsGet200ResponseParams
     */
    dir?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricCountsGet200ResponseParams
     */
    endTime?: string;
    /**
     * Page limit (default 100)
     * @type {number}
     * @memberof MetricCountsGet200ResponseParams
     */
    limit?: number;
    /**
     * Page offset (default 0)
     * @type {number}
     * @memberof MetricCountsGet200ResponseParams
     */
    offset?: number;
    /**
     * Order by column
     * @type {string}
     * @memberof MetricCountsGet200ResponseParams
     */
    order?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricCountsGet200ResponseParams
     */
    startTime?: string;
}

/**
 * Check if a given object implements the MetricCountsGet200ResponseParams interface.
 */
export function instanceOfMetricCountsGet200ResponseParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetricCountsGet200ResponseParamsFromJSON(json: any): MetricCountsGet200ResponseParams {
    return MetricCountsGet200ResponseParamsFromJSONTyped(json, false);
}

export function MetricCountsGet200ResponseParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricCountsGet200ResponseParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'definitionId': !exists(json, 'definition_id') ? undefined : json['definition_id'],
        'dir': !exists(json, 'dir') ? undefined : json['dir'],
        'endTime': !exists(json, 'end_time') ? undefined : json['end_time'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'startTime': !exists(json, 'start_time') ? undefined : json['start_time'],
    };
}

export function MetricCountsGet200ResponseParamsToJSON(value?: MetricCountsGet200ResponseParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'definition_id': value.definitionId,
        'dir': value.dir,
        'end_time': value.endTime,
        'limit': value.limit,
        'offset': value.offset,
        'order': value.order,
        'start_time': value.startTime,
    };
}

