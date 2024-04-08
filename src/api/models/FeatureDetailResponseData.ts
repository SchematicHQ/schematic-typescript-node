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
import type { EventSummaryResponseData } from './EventSummaryResponseData';
import {
    EventSummaryResponseDataFromJSON,
    EventSummaryResponseDataFromJSONTyped,
    EventSummaryResponseDataToJSON,
} from './EventSummaryResponseData';
import type { FlagDetailResponseData } from './FlagDetailResponseData';
import {
    FlagDetailResponseDataFromJSON,
    FlagDetailResponseDataFromJSONTyped,
    FlagDetailResponseDataToJSON,
} from './FlagDetailResponseData';

/**
 * The updated resource
 * @export
 * @interface FeatureDetailResponseData
 */
export interface FeatureDetailResponseData {
    /**
     * 
     * @type {Date}
     * @memberof FeatureDetailResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FeatureDetailResponseData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureDetailResponseData
     */
    eventSubtype?: string;
    /**
     * 
     * @type {EventSummaryResponseData}
     * @memberof FeatureDetailResponseData
     */
    eventSummary?: EventSummaryResponseData;
    /**
     * 
     * @type {string}
     * @memberof FeatureDetailResponseData
     */
    featureType: string;
    /**
     * 
     * @type {Array<FlagDetailResponseData>}
     * @memberof FeatureDetailResponseData
     */
    flags: Array<FlagDetailResponseData>;
    /**
     * 
     * @type {string}
     * @memberof FeatureDetailResponseData
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureDetailResponseData
     */
    lifecyclePhase?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureDetailResponseData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureDetailResponseData
     */
    traitId?: string;
    /**
     * 
     * @type {Date}
     * @memberof FeatureDetailResponseData
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the FeatureDetailResponseData interface.
 */
export function instanceOfFeatureDetailResponseData(value: object): boolean {
    if (!('createdAt' in value)) return false;
    if (!('description' in value)) return false;
    if (!('featureType' in value)) return false;
    if (!('flags' in value)) return false;
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('updatedAt' in value)) return false;
    return true;
}

export function FeatureDetailResponseDataFromJSON(json: any): FeatureDetailResponseData {
    return FeatureDetailResponseDataFromJSONTyped(json, false);
}

export function FeatureDetailResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureDetailResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'description': json['description'],
        'eventSubtype': json['event_subtype'] == null ? undefined : json['event_subtype'],
        'eventSummary': json['event_summary'] == null ? undefined : EventSummaryResponseDataFromJSON(json['event_summary']),
        'featureType': json['feature_type'],
        'flags': ((json['flags'] as Array<any>).map(FlagDetailResponseDataFromJSON)),
        'id': json['id'],
        'lifecyclePhase': json['lifecycle_phase'] == null ? undefined : json['lifecycle_phase'],
        'name': json['name'],
        'traitId': json['trait_id'] == null ? undefined : json['trait_id'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function FeatureDetailResponseDataToJSON(value?: FeatureDetailResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': ((value['createdAt']).toISOString()),
        'description': value['description'],
        'event_subtype': value['eventSubtype'],
        'event_summary': EventSummaryResponseDataToJSON(value['eventSummary']),
        'feature_type': value['featureType'],
        'flags': ((value['flags'] as Array<any>).map(FlagDetailResponseDataToJSON)),
        'id': value['id'],
        'lifecycle_phase': value['lifecyclePhase'],
        'name': value['name'],
        'trait_id': value['traitId'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

