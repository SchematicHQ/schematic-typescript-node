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

import { mapValues } from "../runtime";
/**
 * The created resource
 * @export
 * @interface CrmLineItemResponseData
 */
export interface CrmLineItemResponseData {
  /**
   *
   * @type {string}
   * @memberof CrmLineItemResponseData
   */
  accountId: string;
  /**
   *
   * @type {Date}
   * @memberof CrmLineItemResponseData
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof CrmLineItemResponseData
   */
  dealId?: string;
  /**
   *
   * @type {Date}
   * @memberof CrmLineItemResponseData
   */
  deletedAt?: Date;
  /**
   *
   * @type {string}
   * @memberof CrmLineItemResponseData
   */
  environmentId: string;
  /**
   *
   * @type {string}
   * @memberof CrmLineItemResponseData
   */
  productExternalId?: string;
  /**
   *
   * @type {Date}
   * @memberof CrmLineItemResponseData
   */
  updatedAt: Date;
}

/**
 * Check if a given object implements the CrmLineItemResponseData interface.
 */
export function instanceOfCrmLineItemResponseData(value: object): boolean {
  if (!("accountId" in value)) return false;
  if (!("createdAt" in value)) return false;
  if (!("environmentId" in value)) return false;
  if (!("updatedAt" in value)) return false;
  return true;
}

export function CrmLineItemResponseDataFromJSON(
  json: any,
): CrmLineItemResponseData {
  return CrmLineItemResponseDataFromJSONTyped(json, false);
}

export function CrmLineItemResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CrmLineItemResponseData {
  if (json == null) {
    return json;
  }
  return {
    accountId: json["account_id"],
    createdAt: new Date(json["created_at"]),
    dealId: json["deal_id"] == null ? undefined : json["deal_id"],
    deletedAt:
      json["deleted_at"] == null ? undefined : new Date(json["deleted_at"]),
    environmentId: json["environment_id"],
    productExternalId:
      json["product_external_id"] == null
        ? undefined
        : json["product_external_id"],
    updatedAt: new Date(json["updated_at"]),
  };
}

export function CrmLineItemResponseDataToJSON(
  value?: CrmLineItemResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    account_id: value["accountId"],
    created_at: value["createdAt"].toISOString(),
    deal_id: value["dealId"],
    deleted_at:
      value["deletedAt"] == null
        ? undefined
        : (value["deletedAt"] as any).toISOString(),
    environment_id: value["environmentId"],
    product_external_id: value["productExternalId"],
    updated_at: value["updatedAt"].toISOString(),
  };
}
