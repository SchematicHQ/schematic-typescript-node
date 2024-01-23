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
 * @interface UpdateFlagRulesRequestBody
 */
export interface UpdateFlagRulesRequestBody {
    /**
     * 
     * @type {Array<CreateOrUpdateRuleRequestBody>}
     * @memberof UpdateFlagRulesRequestBody
     */
    rules: Array<CreateOrUpdateRuleRequestBody>;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateFlagRulesRequestBody
     */
    skipWebhooks?: boolean | null;
}

/**
 * Check if a given object implements the UpdateFlagRulesRequestBody interface.
 */
export function instanceOfUpdateFlagRulesRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rules" in value;

    return isInstance;
}

export function UpdateFlagRulesRequestBodyFromJSON(json: any): UpdateFlagRulesRequestBody {
    return UpdateFlagRulesRequestBodyFromJSONTyped(json, false);
}

export function UpdateFlagRulesRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFlagRulesRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rules': ((json['rules'] as Array<any>).map(CreateOrUpdateRuleRequestBodyFromJSON)),
        'skipWebhooks': !exists(json, 'skip_webhooks') ? undefined : json['skip_webhooks'],
    };
}

export function UpdateFlagRulesRequestBodyToJSON(value?: UpdateFlagRulesRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rules': ((value.rules as Array<any>).map(CreateOrUpdateRuleRequestBodyToJSON)),
        'skip_webhooks': value.skipWebhooks,
    };
}

