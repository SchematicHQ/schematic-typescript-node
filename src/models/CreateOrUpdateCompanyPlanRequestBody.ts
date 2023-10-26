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
 * @interface CreateOrUpdateCompanyPlanRequestBody
 */
export interface CreateOrUpdateCompanyPlanRequestBody {
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateCompanyPlanRequestBody
     */
    companyId: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateOrUpdateCompanyPlanRequestBody
     */
    endedAt?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateCompanyPlanRequestBody
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateCompanyPlanRequestBody
     */
    planId: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateOrUpdateCompanyPlanRequestBody
     */
    startedAt?: Date | null;
}

/**
 * Check if a given object implements the CreateOrUpdateCompanyPlanRequestBody interface.
 */
export function instanceOfCreateOrUpdateCompanyPlanRequestBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyId" in value;
    isInstance = isInstance && "planId" in value;

    return isInstance;
}

export function CreateOrUpdateCompanyPlanRequestBodyFromJSON(json: any): CreateOrUpdateCompanyPlanRequestBody {
    return CreateOrUpdateCompanyPlanRequestBodyFromJSONTyped(json, false);
}

export function CreateOrUpdateCompanyPlanRequestBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdateCompanyPlanRequestBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': json['company_id'],
        'endedAt': !exists(json, 'ended_at') ? undefined : (json['ended_at'] === null ? null : new Date(json['ended_at'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'planId': json['plan_id'],
        'startedAt': !exists(json, 'started_at') ? undefined : (json['started_at'] === null ? null : new Date(json['started_at'])),
    };
}

export function CreateOrUpdateCompanyPlanRequestBodyToJSON(value?: CreateOrUpdateCompanyPlanRequestBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'ended_at': value.endedAt === undefined ? undefined : (value.endedAt === null ? null : value.endedAt.toISOString()),
        'id': value.id,
        'plan_id': value.planId,
        'started_at': value.startedAt === undefined ? undefined : (value.startedAt === null ? null : value.startedAt.toISOString()),
    };
}

