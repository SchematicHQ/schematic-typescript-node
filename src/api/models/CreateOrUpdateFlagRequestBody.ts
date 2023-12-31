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
import type { CreateOrUpdateRuleRequestBody } from './CreateOrUpdateRuleRequestBody';
import {
    CreateOrUpdateRuleRequestBodyFromJSON,
    CreateOrUpdateRuleRequestBodyFromJSONTyped,
    CreateOrUpdateRuleRequestBodyToJSON,
} from './CreateOrUpdateRuleRequestBody';

/**
 * 
 * @export
 * @interface CreateOrUpdateFlagRequestBody
 */
export interface CreateOrUpdateFlagRequestBody {
    /**
     * 
     * @type {boolean}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    defaultValue: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    featureId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    flagType: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    name: string;
    /**
     * 
     * @type {Array<CreateOrUpdateRuleRequestBody>}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    rules: Array<CreateOrUpdateRuleRequestBody>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateOrUpdateFlagRequestBody
     */
    skipWebhooks?: boolean | null;
}

/**
 * Check if a given object implements the CreateOrUpdateFlagRequestBody interface.
 */
export function instanceOfCreateOrUpdateFlagRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "defaultValue" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "flagType" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "rules" in value;

    return isInstance;
}

export function CreateOrUpdateFlagRequestBodyFromJSON(json: any): CreateOrUpdateFlagRequestBody {
    return CreateOrUpdateFlagRequestBodyFromJSONTyped(json, false);
}

export function CreateOrUpdateFlagRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdateFlagRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultValue': json['default_value'],
        'description': json['description'],
        'featureId': !exists(json, 'feature_id') ? undefined : json['feature_id'],
        'flagType': json['flag_type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'key': json['key'],
        'name': json['name'],
        'rules': ((json['rules'] as Array<any>).map(CreateOrUpdateRuleRequestBodyFromJSON)),
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
    };
}

export function CreateOrUpdateFlagRequestBodyToJSON(value?: CreateOrUpdateFlagRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_value': value.defaultValue,
        'description': value.description,
        'feature_id': value.featureId,
        'flag_type': value.flagType,
        'id': value.id,
        'key': value.key,
        'name': value.name,
        'rules': ((value.rules as Array<any>).map(CreateOrUpdateRuleRequestBodyToJSON)),
        'skip_webhooks': value.skipWebhooks,
    };
}

