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
 * @interface CrmProductResponseData
 */
export interface CrmProductResponseData {
  /**
   *
   * @type {string}
   * @memberof CrmProductResponseData
   */
  accountId: string;
  /**
   *
   * @type {Date}
   * @memberof CrmProductResponseData
   */
  createdAt: Date;
  /**
   *
   * @type {string}
   * @memberof CrmProductResponseData
   */
  currency: string;
  /**
   *
   * @type {Date}
   * @memberof CrmProductResponseData
   */
  deletedAt?: Date;
  /**
   *
   * @type {string}
   * @memberof CrmProductResponseData
   */
  environmentId: string;
  /**
   *
   * @type {string}
   * @memberof CrmProductResponseData
   */
  externalId: string;
  /**
   *
   * @type {string}
   * @memberof CrmProductResponseData
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CrmProductResponseData
   */
  price: string;
  /**
   *
   * @type {string}
   * @memberof CrmProductResponseData
   */
  productId: string;
  /**
   *
   * @type {number}
   * @memberof CrmProductResponseData
   */
  quantity: number;
  /**
   *
   * @type {Date}
   * @memberof CrmProductResponseData
   */
  updatedAt: Date;
}

/**
 * Check if a given object implements the CrmProductResponseData interface.
 */
export function instanceOfCrmProductResponseData(
  value: object,
): value is CrmProductResponseData {
  if (!("accountId" in value) || value["accountId"] === undefined) return false;
  if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("environmentId" in value) || value["environmentId"] === undefined)
    return false;
  if (!("externalId" in value) || value["externalId"] === undefined)
    return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("price" in value) || value["price"] === undefined) return false;
  if (!("productId" in value) || value["productId"] === undefined) return false;
  if (!("quantity" in value) || value["quantity"] === undefined) return false;
  if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
  return true;
}

export function CrmProductResponseDataFromJSON(
  json: any,
): CrmProductResponseData {
  return CrmProductResponseDataFromJSONTyped(json, false);
}

export function CrmProductResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CrmProductResponseData {
  if (json == null) {
    return json;
  }
  return {
    accountId: json["account_id"],
    createdAt: new Date(json["created_at"]),
    currency: json["currency"],
    deletedAt:
      json["deleted_at"] == null ? undefined : new Date(json["deleted_at"]),
    environmentId: json["environment_id"],
    externalId: json["external_id"],
    name: json["name"],
    price: json["price"],
    productId: json["product_id"],
    quantity: json["quantity"],
    updatedAt: new Date(json["updated_at"]),
  };
}

export function CrmProductResponseDataToJSON(
  value?: CrmProductResponseData | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    account_id: value["accountId"],
    created_at: value["createdAt"].toISOString(),
    currency: value["currency"],
    deleted_at:
      value["deletedAt"] == null
        ? undefined
        : (value["deletedAt"] as any).toISOString(),
    environment_id: value["environmentId"],
    external_id: value["externalId"],
    name: value["name"],
    price: value["price"],
    product_id: value["productId"],
    quantity: value["quantity"],
    updated_at: value["updatedAt"].toISOString(),
  };
}
