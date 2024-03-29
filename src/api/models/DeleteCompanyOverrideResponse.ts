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
import type { DeleteResponse } from './DeleteResponse';
import {
    DeleteResponseFromJSON,
    DeleteResponseFromJSONTyped,
    DeleteResponseToJSON,
} from './DeleteResponse';

/**
 * 
 * @export
 * @interface DeleteCompanyOverrideResponse
 */
export interface DeleteCompanyOverrideResponse {
    /**
     * 
     * @type {DeleteResponse}
     * @memberof DeleteCompanyOverrideResponse
     */
    data: DeleteResponse;
    /**
     * Input parameters
     * @type {object}
     * @memberof DeleteCompanyOverrideResponse
     */
    params: object;
}

/**
 * Check if a given object implements the DeleteCompanyOverrideResponse interface.
 */
export function instanceOfDeleteCompanyOverrideResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "params" in value;

    return isInstance;
}

export function DeleteCompanyOverrideResponseFromJSON(json: any): DeleteCompanyOverrideResponse {
    return DeleteCompanyOverrideResponseFromJSONTyped(json, false);
}

export function DeleteCompanyOverrideResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteCompanyOverrideResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': DeleteResponseFromJSON(json['data']),
        'params': json['params'],
    };
}

export function DeleteCompanyOverrideResponseToJSON(value?: DeleteCompanyOverrideResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': DeleteResponseToJSON(value.data),
        'params': value.params,
    };
}

