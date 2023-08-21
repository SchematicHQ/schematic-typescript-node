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
 * Input parameters
 * @export
 * @interface ListEvents200ResponseParams
 */
export interface ListEvents200ResponseParams {
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseParams
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseParams
     */
    dir?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseParams
     */
    eventSubtype?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseParams
     */
    featureId?: string;
    /**
     * 
     * @type {number}
     * @memberof ListEvents200ResponseParams
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListEvents200ResponseParams
     */
    offset?: number;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseParams
     */
    order?: string;
    /**
     * 
     * @type {string}
     * @memberof ListEvents200ResponseParams
     */
    userId?: string;
}

/**
 * Check if a given object implements the ListEvents200ResponseParams interface.
 */
export function instanceOfListEvents200ResponseParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListEvents200ResponseParamsFromJSON(json: any): ListEvents200ResponseParams {
    return ListEvents200ResponseParamsFromJSONTyped(json, false);
}

export function ListEvents200ResponseParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEvents200ResponseParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'dir': !exists(json, 'dir') ? undefined : json['dir'],
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
    };
}

export function ListEvents200ResponseParamsToJSON(value?: ListEvents200ResponseParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'dir': value.dir,
        'event_subtype': value.eventSubtype,
        'feature_id': value.featureId,
        'limit': value.limit,
        'offset': value.offset,
        'order': value.order,
        'user_id': value.userId,
    };
}

