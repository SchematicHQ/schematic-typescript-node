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
 * @interface ListFeatures200ResponseDataInner
 */
export interface ListFeatures200ResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    eventSubtype?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    lifecyclePhase?: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ListFeatures200ResponseDataInner
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the ListFeatures200ResponseDataInner interface.
 */
export function instanceOfListFeatures200ResponseDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ListFeatures200ResponseDataInnerFromJSON(json: any): ListFeatures200ResponseDataInner {
    return ListFeatures200ResponseDataInnerFromJSONTyped(json, false);
}

export function ListFeatures200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListFeatures200ResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': json['created_at'],
        'description': json['description'],
        'eventSubtype': !exists(json, 'event_subtype') ? undefined : json['event_subtype'],
        'id': json['id'],
        'lifecyclePhase': !exists(json, 'lifecycle_phase') ? undefined : json['lifecycle_phase'],
        'name': json['name'],
        'updatedAt': json['updated_at'],
    };
}

export function ListFeatures200ResponseDataInnerToJSON(value?: ListFeatures200ResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt,
        'description': value.description,
        'event_subtype': value.eventSubtype,
        'id': value.id,
        'lifecycle_phase': value.lifecyclePhase,
        'name': value.name,
        'updated_at': value.updatedAt,
    };
}

