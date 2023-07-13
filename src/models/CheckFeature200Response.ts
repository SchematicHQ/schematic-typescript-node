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
import type { CheckFeature200ResponseData } from './CheckFeature200ResponseData';
import {
    CheckFeature200ResponseDataFromJSON,
    CheckFeature200ResponseDataFromJSONTyped,
    CheckFeature200ResponseDataToJSON,
} from './CheckFeature200ResponseData';
import type { CheckFeature200ResponseParams } from './CheckFeature200ResponseParams';
import {
    CheckFeature200ResponseParamsFromJSON,
    CheckFeature200ResponseParamsFromJSONTyped,
    CheckFeature200ResponseParamsToJSON,
} from './CheckFeature200ResponseParams';

/**
 * 
 * @export
 * @interface CheckFeature200Response
 */
export interface CheckFeature200Response {
    /**
     * 
     * @type {CheckFeature200ResponseData}
     * @memberof CheckFeature200Response
     */
    data?: CheckFeature200ResponseData;
    /**
     * 
     * @type {CheckFeature200ResponseParams}
     * @memberof CheckFeature200Response
     */
    params?: CheckFeature200ResponseParams;
}

/**
 * Check if a given object implements the CheckFeature200Response interface.
 */
export function instanceOfCheckFeature200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckFeature200ResponseFromJSON(json: any): CheckFeature200Response {
    return CheckFeature200ResponseFromJSONTyped(json, false);
}

export function CheckFeature200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckFeature200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CheckFeature200ResponseDataFromJSON(json['data']),
        'params': !exists(json, 'params') ? undefined : CheckFeature200ResponseParamsFromJSON(json['params']),
    };
}

export function CheckFeature200ResponseToJSON(value?: CheckFeature200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CheckFeature200ResponseDataToJSON(value.data),
        'params': CheckFeature200ResponseParamsToJSON(value.params),
    };
}

