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

import { RequestInit } from "node-fetch";
import * as runtime from "../runtime";
import type {
  ApiError,
  CreateCrmDealLineItemAssociationRequestBody,
  CreateCrmDealRequestBody,
  CreateCrmLineItemRequestBody,
  CreateCrmProductRequestBody,
  ListCrmProductsResponse,
  UpsertCrmDealResponse,
  UpsertCrmProductResponse,
  UpsertDealLineItemAssociationResponse,
  UpsertLineItemResponse,
} from "../models/index";
import {
  ApiErrorFromJSON,
  ApiErrorToJSON,
  CreateCrmDealLineItemAssociationRequestBodyFromJSON,
  CreateCrmDealLineItemAssociationRequestBodyToJSON,
  CreateCrmDealRequestBodyFromJSON,
  CreateCrmDealRequestBodyToJSON,
  CreateCrmLineItemRequestBodyFromJSON,
  CreateCrmLineItemRequestBodyToJSON,
  CreateCrmProductRequestBodyFromJSON,
  CreateCrmProductRequestBodyToJSON,
  ListCrmProductsResponseFromJSON,
  ListCrmProductsResponseToJSON,
  UpsertCrmDealResponseFromJSON,
  UpsertCrmDealResponseToJSON,
  UpsertCrmProductResponseFromJSON,
  UpsertCrmProductResponseToJSON,
  UpsertDealLineItemAssociationResponseFromJSON,
  UpsertDealLineItemAssociationResponseToJSON,
  UpsertLineItemResponseFromJSON,
  UpsertLineItemResponseToJSON,
} from "../models/index";

export interface ListCrmProductsRequest {
  ids?: Array<string>;
  name?: string;
  limit?: number;
  offset?: number;
}

export interface UpsertCrmDealRequest {
  createCrmDealRequestBody: CreateCrmDealRequestBody;
}

export interface UpsertCrmProductRequest {
  createCrmProductRequestBody: CreateCrmProductRequestBody;
}

export interface UpsertDealLineItemAssociationRequest {
  createCrmDealLineItemAssociationRequestBody: CreateCrmDealLineItemAssociationRequestBody;
}

export interface UpsertLineItemRequest {
  createCrmLineItemRequestBody: CreateCrmLineItemRequestBody;
}

/**
 *
 */
export class CrmApi extends runtime.BaseAPI {
  /**
   * List crm products
   */
  async listCrmProductsRaw(
    requestParameters: ListCrmProductsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ListCrmProductsResponse>> {
    const queryParameters: any = {};

    if (requestParameters["ids"] != null) {
      queryParameters["ids"] = requestParameters["ids"];
    }

    if (requestParameters["name"] != null) {
      queryParameters["name"] = requestParameters["name"];
    }

    if (requestParameters["limit"] != null) {
      queryParameters["limit"] = requestParameters["limit"];
    }

    if (requestParameters["offset"] != null) {
      queryParameters["offset"] = requestParameters["offset"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/crm/products`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ListCrmProductsResponseFromJSON(jsonValue),
    );
  }

  /**
   * List crm products
   */
  async listCrmProducts(
    requestParameters: ListCrmProductsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ListCrmProductsResponse> {
    const response = await this.listCrmProductsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Upsert crm deal
   */
  async upsertCrmDealRaw(
    requestParameters: UpsertCrmDealRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UpsertCrmDealResponse>> {
    if (requestParameters["createCrmDealRequestBody"] == null) {
      throw new runtime.RequiredError(
        "createCrmDealRequestBody",
        'Required parameter "createCrmDealRequestBody" was null or undefined when calling upsertCrmDeal().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/crm/deals/upsert`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateCrmDealRequestBodyToJSON(
          requestParameters["createCrmDealRequestBody"],
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpsertCrmDealResponseFromJSON(jsonValue),
    );
  }

  /**
   * Upsert crm deal
   */
  async upsertCrmDeal(
    requestParameters: UpsertCrmDealRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UpsertCrmDealResponse> {
    const response = await this.upsertCrmDealRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Upsert crm product
   */
  async upsertCrmProductRaw(
    requestParameters: UpsertCrmProductRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UpsertCrmProductResponse>> {
    if (requestParameters["createCrmProductRequestBody"] == null) {
      throw new runtime.RequiredError(
        "createCrmProductRequestBody",
        'Required parameter "createCrmProductRequestBody" was null or undefined when calling upsertCrmProduct().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/crm/products/upsert`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateCrmProductRequestBodyToJSON(
          requestParameters["createCrmProductRequestBody"],
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpsertCrmProductResponseFromJSON(jsonValue),
    );
  }

  /**
   * Upsert crm product
   */
  async upsertCrmProduct(
    requestParameters: UpsertCrmProductRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UpsertCrmProductResponse> {
    const response = await this.upsertCrmProductRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Upsert deal line item association
   */
  async upsertDealLineItemAssociationRaw(
    requestParameters: UpsertDealLineItemAssociationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UpsertDealLineItemAssociationResponse>> {
    if (
      requestParameters["createCrmDealLineItemAssociationRequestBody"] == null
    ) {
      throw new runtime.RequiredError(
        "createCrmDealLineItemAssociationRequestBody",
        'Required parameter "createCrmDealLineItemAssociationRequestBody" was null or undefined when calling upsertDealLineItemAssociation().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/crm/associations/deal-line-item`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateCrmDealLineItemAssociationRequestBodyToJSON(
          requestParameters["createCrmDealLineItemAssociationRequestBody"],
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpsertDealLineItemAssociationResponseFromJSON(jsonValue),
    );
  }

  /**
   * Upsert deal line item association
   */
  async upsertDealLineItemAssociation(
    requestParameters: UpsertDealLineItemAssociationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UpsertDealLineItemAssociationResponse> {
    const response = await this.upsertDealLineItemAssociationRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Upsert line item
   */
  async upsertLineItemRaw(
    requestParameters: UpsertLineItemRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<UpsertLineItemResponse>> {
    if (requestParameters["createCrmLineItemRequestBody"] == null) {
      throw new runtime.RequiredError(
        "createCrmLineItemRequestBody",
        'Required parameter "createCrmLineItemRequestBody" was null or undefined when calling upsertLineItem().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/crm/deal-line-item/upsert`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateCrmLineItemRequestBodyToJSON(
          requestParameters["createCrmLineItemRequestBody"],
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      UpsertLineItemResponseFromJSON(jsonValue),
    );
  }

  /**
   * Upsert line item
   */
  async upsertLineItem(
    requestParameters: UpsertLineItemRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<UpsertLineItemResponse> {
    const response = await this.upsertLineItemRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}