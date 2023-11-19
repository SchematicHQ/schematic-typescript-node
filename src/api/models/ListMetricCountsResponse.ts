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
import type { ListMetricCountsParams } from './ListMetricCountsParams';
import {
    ListMetricCountsParamsFromJSON,
    ListMetricCountsParamsFromJSONTyped,
    ListMetricCountsParamsToJSON,
} from './ListMetricCountsParams';
import type { MetricCountsHourlyResponseData } from './MetricCountsHourlyResponseData';
import {
    MetricCountsHourlyResponseDataFromJSON,
    MetricCountsHourlyResponseDataFromJSONTyped,
    MetricCountsHourlyResponseDataToJSON,
} from './MetricCountsHourlyResponseData';

/**
 * 
 * @export
 * @interface ListMetricCountsResponse
 */
export interface ListMetricCountsResponse {
    /**
     * The returned resources
     * @type {Array<MetricCountsHourlyResponseData>}
     * @memberof ListMetricCountsResponse
     */
    data: Array<MetricCountsHourlyResponseData>;
    /**
     * 
     * @type {ListMetricCountsParams}
     * @memberof ListMetricCountsResponse
     */
    params: ListMetricCountsParams;
}

/**
 * Check if a given object implements the ListMetricCountsResponse interface.
 */
export function instanceOfListMetricCountsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function ListMetricCountsResponseFromJSON(json: any): ListMetricCountsResponse {
    return ListMetricCountsResponseFromJSONTyped(json, false);
}

export function ListMetricCountsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListMetricCountsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(MetricCountsHourlyResponseDataFromJSON)),
        'params': ListMetricCountsParamsFromJSON(json['params']),
    };
}

export function ListMetricCountsResponseToJSON(value?: ListMetricCountsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(MetricCountsHourlyResponseDataToJSON)),
        'params': ListMetricCountsParamsToJSON(value.params),
    };
}
