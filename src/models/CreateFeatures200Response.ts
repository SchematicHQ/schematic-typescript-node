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
import type { CreateFeatures200ResponseDataInner } from './CreateFeatures200ResponseDataInner';
import {
    CreateFeatures200ResponseDataInnerFromJSON,
    CreateFeatures200ResponseDataInnerFromJSONTyped,
    CreateFeatures200ResponseDataInnerToJSON,
} from './CreateFeatures200ResponseDataInner';

/**
 * 
 * @export
 * @interface CreateFeatures200Response
 */
export interface CreateFeatures200Response {
    /**
     * The returned resource
     * @type {Array<CreateFeatures200ResponseDataInner>}
     * @memberof CreateFeatures200Response
     */
    data?: Array<CreateFeatures200ResponseDataInner>;
    /**
     * Input parameters
     * @type {object}
     * @memberof CreateFeatures200Response
     */
    params?: object;
}

/**
 * Check if a given object implements the CreateFeatures200Response interface.
 */
export function instanceOfCreateFeatures200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFeatures200ResponseFromJSON(json: any): CreateFeatures200Response {
    return CreateFeatures200ResponseFromJSONTyped(json, false);
}

export function CreateFeatures200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeatures200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(CreateFeatures200ResponseDataInnerFromJSON)),
        'params': !exists(json, 'params') ? undefined : json['params'],
    };
}

export function CreateFeatures200ResponseToJSON(value?: CreateFeatures200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(CreateFeatures200ResponseDataInnerToJSON)),
        'params': value.params,
    };
}
