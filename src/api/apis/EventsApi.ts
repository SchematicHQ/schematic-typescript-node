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
  CreateEventBatchRequestBody,
  CreateEventBatchResponse,
  CreateEventRequestBody,
  CreateEventResponse,
  GetEventResponse,
  GetEventSummariesResponse,
  GetEventSummaryBySubtypeResponse,
  GetSegmentIntegrationStatusResponse,
  ListEventsResponse,
  ListMetricCountsResponse,
} from "../models/index";
import {
  ApiErrorFromJSON,
  ApiErrorToJSON,
  CreateEventBatchRequestBodyFromJSON,
  CreateEventBatchRequestBodyToJSON,
  CreateEventBatchResponseFromJSON,
  CreateEventBatchResponseToJSON,
  CreateEventRequestBodyFromJSON,
  CreateEventRequestBodyToJSON,
  CreateEventResponseFromJSON,
  CreateEventResponseToJSON,
  GetEventResponseFromJSON,
  GetEventResponseToJSON,
  GetEventSummariesResponseFromJSON,
  GetEventSummariesResponseToJSON,
  GetEventSummaryBySubtypeResponseFromJSON,
  GetEventSummaryBySubtypeResponseToJSON,
  GetSegmentIntegrationStatusResponseFromJSON,
  GetSegmentIntegrationStatusResponseToJSON,
  ListEventsResponseFromJSON,
  ListEventsResponseToJSON,
  ListMetricCountsResponseFromJSON,
  ListMetricCountsResponseToJSON,
} from "../models/index";

export interface CreateEventRequest {
  createEventRequestBody: CreateEventRequestBody;
}

export interface CreateEventBatchRequest {
  createEventBatchRequestBody: CreateEventBatchRequestBody;
}

export interface GetEventRequest {
  eventId: string;
}

export interface GetEventSummariesRequest {
  q?: string;
  eventSubtypes?: Array<string>;
  limit?: number;
  offset?: number;
}

export interface GetEventSummaryBySubtypeRequest {
  key: string;
}

export interface ListEventsRequest {
  companyId?: string;
  userId?: string;
  eventSubtype?: string;
  limit?: number;
  offset?: number;
}

export interface ListMetricCountsRequest {
  startTime?: Date;
  endTime?: Date;
  eventSubtype?: string;
  eventSubtypes?: Array<string>;
  companyId?: string;
  companyIds?: Array<string>;
  userId?: string;
  limit?: number;
  offset?: number;
  grouping?: string;
}

/**
 *
 */
export class EventsApi extends runtime.BaseAPI {
  /**
   * Create event
   */
  async createEventRaw(
    requestParameters: CreateEventRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<CreateEventResponse>> {
    if (requestParameters["createEventRequestBody"] == null) {
      throw new runtime.RequiredError(
        "createEventRequestBody",
        'Required parameter "createEventRequestBody" was null or undefined when calling createEvent().',
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
        path: `/events`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateEventRequestBodyToJSON(
          requestParameters["createEventRequestBody"],
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateEventResponseFromJSON(jsonValue),
    );
  }

  /**
   * Create event
   */
  async createEvent(
    requestParameters: CreateEventRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<CreateEventResponse> {
    const response = await this.createEventRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Create event batch
   */
  async createEventBatchRaw(
    requestParameters: CreateEventBatchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<CreateEventBatchResponse>> {
    if (requestParameters["createEventBatchRequestBody"] == null) {
      throw new runtime.RequiredError(
        "createEventBatchRequestBody",
        'Required parameter "createEventBatchRequestBody" was null or undefined when calling createEventBatch().',
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
        path: `/event-batch`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: CreateEventBatchRequestBodyToJSON(
          requestParameters["createEventBatchRequestBody"],
        ),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CreateEventBatchResponseFromJSON(jsonValue),
    );
  }

  /**
   * Create event batch
   */
  async createEventBatch(
    requestParameters: CreateEventBatchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<CreateEventBatchResponse> {
    const response = await this.createEventBatchRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get event
   */
  async getEventRaw(
    requestParameters: GetEventRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEventResponse>> {
    if (requestParameters["eventId"] == null) {
      throw new runtime.RequiredError(
        "eventId",
        'Required parameter "eventId" was null or undefined when calling getEvent().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/events/{event_id}`.replace(
          `{${"event_id"}}`,
          encodeURIComponent(String(requestParameters["eventId"])),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetEventResponseFromJSON(jsonValue),
    );
  }

  /**
   * Get event
   */
  async getEvent(
    requestParameters: GetEventRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEventResponse> {
    const response = await this.getEventRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get event summaries
   */
  async getEventSummariesRaw(
    requestParameters: GetEventSummariesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEventSummariesResponse>> {
    const queryParameters: any = {};

    if (requestParameters["q"] != null) {
      queryParameters["q"] = requestParameters["q"];
    }

    if (requestParameters["eventSubtypes"] != null) {
      queryParameters["event_subtypes"] = requestParameters["eventSubtypes"];
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
        path: `/event-types`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetEventSummariesResponseFromJSON(jsonValue),
    );
  }

  /**
   * Get event summaries
   */
  async getEventSummaries(
    requestParameters: GetEventSummariesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEventSummariesResponse> {
    const response = await this.getEventSummariesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get event summary by subtype
   */
  async getEventSummaryBySubtypeRaw(
    requestParameters: GetEventSummaryBySubtypeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEventSummaryBySubtypeResponse>> {
    if (requestParameters["key"] == null) {
      throw new runtime.RequiredError(
        "key",
        'Required parameter "key" was null or undefined when calling getEventSummaryBySubtype().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/event-types/{key}`.replace(
          `{${"key"}}`,
          encodeURIComponent(String(requestParameters["key"])),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetEventSummaryBySubtypeResponseFromJSON(jsonValue),
    );
  }

  /**
   * Get event summary by subtype
   */
  async getEventSummaryBySubtype(
    requestParameters: GetEventSummaryBySubtypeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEventSummaryBySubtypeResponse> {
    const response = await this.getEventSummaryBySubtypeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get segment integration status
   */
  async getSegmentIntegrationStatusRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetSegmentIntegrationStatusResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/segment-integration`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetSegmentIntegrationStatusResponseFromJSON(jsonValue),
    );
  }

  /**
   * Get segment integration status
   */
  async getSegmentIntegrationStatus(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetSegmentIntegrationStatusResponse> {
    const response = await this.getSegmentIntegrationStatusRaw(initOverrides);
    return await response.value();
  }

  /**
   * List events
   */
  async listEventsRaw(
    requestParameters: ListEventsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ListEventsResponse>> {
    const queryParameters: any = {};

    if (requestParameters["companyId"] != null) {
      queryParameters["company_id"] = requestParameters["companyId"];
    }

    if (requestParameters["userId"] != null) {
      queryParameters["user_id"] = requestParameters["userId"];
    }

    if (requestParameters["eventSubtype"] != null) {
      queryParameters["event_subtype"] = requestParameters["eventSubtype"];
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
        path: `/events`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ListEventsResponseFromJSON(jsonValue),
    );
  }

  /**
   * List events
   */
  async listEvents(
    requestParameters: ListEventsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ListEventsResponse> {
    const response = await this.listEventsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * List metric counts
   */
  async listMetricCountsRaw(
    requestParameters: ListMetricCountsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ListMetricCountsResponse>> {
    const queryParameters: any = {};

    if (requestParameters["startTime"] != null) {
      queryParameters["start_time"] = (
        requestParameters["startTime"] as any
      ).toISOString();
    }

    if (requestParameters["endTime"] != null) {
      queryParameters["end_time"] = (
        requestParameters["endTime"] as any
      ).toISOString();
    }

    if (requestParameters["eventSubtype"] != null) {
      queryParameters["event_subtype"] = requestParameters["eventSubtype"];
    }

    if (requestParameters["eventSubtypes"] != null) {
      queryParameters["event_subtypes"] = requestParameters["eventSubtypes"];
    }

    if (requestParameters["companyId"] != null) {
      queryParameters["company_id"] = requestParameters["companyId"];
    }

    if (requestParameters["companyIds"] != null) {
      queryParameters["company_ids"] = requestParameters["companyIds"];
    }

    if (requestParameters["userId"] != null) {
      queryParameters["user_id"] = requestParameters["userId"];
    }

    if (requestParameters["limit"] != null) {
      queryParameters["limit"] = requestParameters["limit"];
    }

    if (requestParameters["offset"] != null) {
      queryParameters["offset"] = requestParameters["offset"];
    }

    if (requestParameters["grouping"] != null) {
      queryParameters["grouping"] = requestParameters["grouping"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey(
        "X-Schematic-Api-Key",
      ); // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/metric-counts`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ListMetricCountsResponseFromJSON(jsonValue),
    );
  }

  /**
   * List metric counts
   */
  async listMetricCounts(
    requestParameters: ListMetricCountsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ListMetricCountsResponse> {
    const response = await this.listMetricCountsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
