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
import type { PlanAudienceDetailResponseData } from './PlanAudienceDetailResponseData';
import {
    PlanAudienceDetailResponseDataFromJSON,
    PlanAudienceDetailResponseDataFromJSONTyped,
    PlanAudienceDetailResponseDataToJSON,
} from './PlanAudienceDetailResponseData';

/**
 * 
 * @export
 * @interface UpdateAudienceResponse
 */
export interface UpdateAudienceResponse {
    /**
     * 
     * @type {PlanAudienceDetailResponseData}
     * @memberof UpdateAudienceResponse
     */
    data: PlanAudienceDetailResponseData;
    /**
     * Input parameters
     * @type {object}
     * @memberof UpdateAudienceResponse
     */
    params: object;
}

/**
 * Check if a given object implements the UpdateAudienceResponse interface.
 */
export function instanceOfUpdateAudienceResponse(value: object): boolean {
    if (!('data' in value)) return false;
    if (!('params' in value)) return false;
    return true;
}

export function UpdateAudienceResponseFromJSON(json: any): UpdateAudienceResponse {
    return UpdateAudienceResponseFromJSONTyped(json, false);
}

export function UpdateAudienceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAudienceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PlanAudienceDetailResponseDataFromJSON(json['data']),
        'params': json['params'],
    };
}

export function UpdateAudienceResponseToJSON(value?: UpdateAudienceResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': PlanAudienceDetailResponseDataToJSON(value['data']),
        'params': value['params'],
    };
}
