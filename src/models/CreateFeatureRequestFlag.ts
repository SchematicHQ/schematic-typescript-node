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
 * @interface CreateFeatureRequestFlag
 */
export interface CreateFeatureRequestFlag {
    /**
     * 
     * @type {boolean}
     * @memberof CreateFeatureRequestFlag
     */
    defaultValue?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestFlag
     */
    flagType?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFeatureRequestFlag
     */
    key?: string;
}

/**
 * Check if a given object implements the CreateFeatureRequestFlag interface.
 */
export function instanceOfCreateFeatureRequestFlag(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFeatureRequestFlagFromJSON(json: any): CreateFeatureRequestFlag {
    return CreateFeatureRequestFlagFromJSONTyped(json, false);
}

export function CreateFeatureRequestFlagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFeatureRequestFlag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultValue': !exists(json, 'default_value') ? undefined : json['default_value'],
        'flagType': !exists(json, 'flag_type') ? undefined : json['flag_type'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function CreateFeatureRequestFlagToJSON(value?: CreateFeatureRequestFlag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_value': value.defaultValue,
        'flag_type': value.flagType,
        'key': value.key,
    };
}

