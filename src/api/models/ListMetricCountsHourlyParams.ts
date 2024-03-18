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
 * Input parameters
 * @export
 * @interface ListMetricCountsHourlyParams
 */
export interface ListMetricCountsHourlyParams {
    /**
     * 
     * @type {string}
     * @memberof ListMetricCountsHourlyParams
     */
    companyId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListMetricCountsHourlyParams
     */
    companyIds?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof ListMetricCountsHourlyParams
     */
    endTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ListMetricCountsHourlyParams
     */
    eventSubtype?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListMetricCountsHourlyParams
     */
    eventSubtypes?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof ListMetricCountsHourlyParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListMetricCountsHourlyParams
     */
    offset?: number;
    /**
     * 
     * @type {Date}
     * @memberof ListMetricCountsHourlyParams
     */
    startTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof ListMetricCountsHourlyParams
     */
    userId?: string;
}

/**
 * Check if a given object implements the ListMetricCountsHourlyParams interface.
 */
export function instanceOfListMetricCountsHourlyParams(value: object): boolean {
    return true;
}

export function ListMetricCountsHourlyParamsFromJSON(json: any): ListMetricCountsHourlyParams {
    return ListMetricCountsHourlyParamsFromJSONTyped(json, false);
}

export function ListMetricCountsHourlyParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListMetricCountsHourlyParams {
    if (json == null) {
        return json;
    }
    return {
        
        'companyId': json['company_id'] == null ? undefined : json['company_id'],
        'companyIds': json['company_ids'] == null ? undefined : json['company_ids'],
        'endTime': json['end_time'] == null ? undefined : (new Date(json['end_time'])),
        'eventSubtype': json['event_subtype'] == null ? undefined : json['event_subtype'],
        'eventSubtypes': json['event_subtypes'] == null ? undefined : json['event_subtypes'],
        'limit': json['limit'] == null ? undefined : json['limit'],
        'offset': json['offset'] == null ? undefined : json['offset'],
        'startTime': json['start_time'] == null ? undefined : (new Date(json['start_time'])),
        'userId': json['user_id'] == null ? undefined : json['user_id'],
    };
}

export function ListMetricCountsHourlyParamsToJSON(value?: ListMetricCountsHourlyParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'company_id': value['companyId'],
        'company_ids': value['companyIds'],
        'end_time': value['endTime'] == null ? undefined : ((value['endTime']).toISOString()),
        'event_subtype': value['eventSubtype'],
        'event_subtypes': value['eventSubtypes'],
        'limit': value['limit'],
        'offset': value['offset'],
        'start_time': value['startTime'] == null ? undefined : ((value['startTime']).toISOString()),
        'user_id': value['userId'],
    };
}

