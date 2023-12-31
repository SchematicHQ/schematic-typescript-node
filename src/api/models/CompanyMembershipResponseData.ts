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
 * @interface CompanyMembershipResponseData
 */
export interface CompanyMembershipResponseData {
    /**
     * 
     * @type {string}
     * @memberof CompanyMembershipResponseData
     */
    companyId: string;
    /**
     * 
     * @type {Date}
     * @memberof CompanyMembershipResponseData
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CompanyMembershipResponseData
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CompanyMembershipResponseData
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CompanyMembershipResponseData
     */
    userId: string;
}

/**
 * Check if a given object implements the CompanyMembershipResponseData interface.
 */
export function instanceOfCompanyMembershipResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "companyId" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function CompanyMembershipResponseDataFromJSON(json: any): CompanyMembershipResponseData {
    return CompanyMembershipResponseDataFromJSONTyped(json, false);
}

export function CompanyMembershipResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyMembershipResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': json['company_id'],
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'updatedAt': (new Date(json['updated_at'])),
        'userId': json['user_id'],
    };
}

export function CompanyMembershipResponseDataToJSON(value?: CompanyMembershipResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'created_at': (value.createdAt.toISOString()),
        'id': value.id,
        'updated_at': (value.updatedAt.toISOString()),
        'user_id': value.userId,
    };
}

