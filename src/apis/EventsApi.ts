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


import * as runtime from '../runtime';
import type {
  ApiError,
  CountEventTypesResponse,
  CountEventsResponse,
  CreateEventRequestBody,
  CreateEventResponse,
  GetEventResponse,
  GetEventTypeResponse,
  ListEventTypesResponse,
  ListEventsResponse,
  ListMetricCountsHourlyResponse,
  ListMetricCountsResponse,
} from '../models';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CountEventTypesResponseFromJSON,
    CountEventTypesResponseToJSON,
    CountEventsResponseFromJSON,
    CountEventsResponseToJSON,
    CreateEventRequestBodyFromJSON,
    CreateEventRequestBodyToJSON,
    CreateEventResponseFromJSON,
    CreateEventResponseToJSON,
    GetEventResponseFromJSON,
    GetEventResponseToJSON,
    GetEventTypeResponseFromJSON,
    GetEventTypeResponseToJSON,
    ListEventTypesResponseFromJSON,
    ListEventTypesResponseToJSON,
    ListEventsResponseFromJSON,
    ListEventsResponseToJSON,
    ListMetricCountsHourlyResponseFromJSON,
    ListMetricCountsHourlyResponseToJSON,
    ListMetricCountsResponseFromJSON,
    ListMetricCountsResponseToJSON,
} from '../models';

export interface CountEventTypesRequest {
    xSchematicEnvironmentId?: string;
    q?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface CountEventsRequest {
    xSchematicEnvironmentId?: string;
    companyId?: string;
    userId?: string;
    featureId?: string;
    eventSubtype?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface CreateEventRequest {
    createEventRequestBody: CreateEventRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface GetEventRequest {
    eventId: string;
    xSchematicEnvironmentId?: string;
}

export interface GetEventTypeRequest {
    key: string;
    xSchematicEnvironmentId?: string;
}

export interface ListEventTypesRequest {
    xSchematicEnvironmentId?: string;
    q?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface ListEventsRequest {
    xSchematicEnvironmentId?: string;
    companyId?: string;
    userId?: string;
    featureId?: string;
    eventSubtype?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface ListMetricCountsRequest {
    eventSubtype: string;
    xSchematicEnvironmentId?: string;
    startTime?: Date;
    endTime?: Date;
    companyId?: string;
    userId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
    grouping?: string;
}

export interface ListMetricCountsHourlyRequest {
    eventSubtype: string;
    xSchematicEnvironmentId?: string;
    startTime?: Date;
    endTime?: Date;
    companyId?: string;
    userId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

/**
 * 
 */
export class EventsApi extends runtime.BaseAPI {

    /**
     * Count event types
     */
    async countEventTypesRaw(requestParameters: CountEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountEventTypesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.dir !== undefined) {
            queryParameters['dir'] = requestParameters.dir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event-types/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountEventTypesResponseFromJSON(jsonValue));
    }

    /**
     * Count event types
     */
    async countEventTypes(requestParameters: CountEventTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountEventTypesResponse> {
        const response = await this.countEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Count events
     */
    async countEventsRaw(requestParameters: CountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountEventsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        if (requestParameters.featureId !== undefined) {
            queryParameters['feature_id'] = requestParameters.featureId;
        }

        if (requestParameters.eventSubtype !== undefined) {
            queryParameters['event_subtype'] = requestParameters.eventSubtype;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.dir !== undefined) {
            queryParameters['dir'] = requestParameters.dir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/events/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountEventsResponseFromJSON(jsonValue));
    }

    /**
     * Count events
     */
    async countEvents(requestParameters: CountEventsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountEventsResponse> {
        const response = await this.countEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create event
     */
    async createEventRaw(requestParameters: CreateEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateEventResponse>> {
        if (requestParameters.createEventRequestBody === null || requestParameters.createEventRequestBody === undefined) {
            throw new runtime.RequiredError('createEventRequestBody','Required parameter requestParameters.createEventRequestBody was null or undefined when calling createEvent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/events`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateEventRequestBodyToJSON(requestParameters.createEventRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateEventResponseFromJSON(jsonValue));
    }

    /**
     * Create event
     */
    async createEvent(requestParameters: CreateEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateEventResponse> {
        const response = await this.createEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get event
     */
    async getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEventResponse>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling getEvent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/events/{event_id}`.replace(`{${"event_id"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEventResponseFromJSON(jsonValue));
    }

    /**
     * Get event
     */
    async getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEventResponse> {
        const response = await this.getEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get event type
     */
    async getEventTypeRaw(requestParameters: GetEventTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEventTypeResponse>> {
        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling getEventType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event-types/{key}`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEventTypeResponseFromJSON(jsonValue));
    }

    /**
     * Get event type
     */
    async getEventType(requestParameters: GetEventTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEventTypeResponse> {
        const response = await this.getEventTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List event types
     */
    async listEventTypesRaw(requestParameters: ListEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListEventTypesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.dir !== undefined) {
            queryParameters['dir'] = requestParameters.dir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/event-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListEventTypesResponseFromJSON(jsonValue));
    }

    /**
     * List event types
     */
    async listEventTypes(requestParameters: ListEventTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListEventTypesResponse> {
        const response = await this.listEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List events
     */
    async listEventsRaw(requestParameters: ListEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListEventsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        if (requestParameters.featureId !== undefined) {
            queryParameters['feature_id'] = requestParameters.featureId;
        }

        if (requestParameters.eventSubtype !== undefined) {
            queryParameters['event_subtype'] = requestParameters.eventSubtype;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.dir !== undefined) {
            queryParameters['dir'] = requestParameters.dir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListEventsResponseFromJSON(jsonValue));
    }

    /**
     * List events
     */
    async listEvents(requestParameters: ListEventsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListEventsResponse> {
        const response = await this.listEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List metric counts
     */
    async listMetricCountsRaw(requestParameters: ListMetricCountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListMetricCountsResponse>> {
        if (requestParameters.eventSubtype === null || requestParameters.eventSubtype === undefined) {
            throw new runtime.RequiredError('eventSubtype','Required parameter requestParameters.eventSubtype was null or undefined when calling listMetricCounts.');
        }

        const queryParameters: any = {};

        if (requestParameters.startTime !== undefined) {
            queryParameters['start_time'] = (requestParameters.startTime as any).toISOString();
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['end_time'] = (requestParameters.endTime as any).toISOString();
        }

        if (requestParameters.eventSubtype !== undefined) {
            queryParameters['event_subtype'] = requestParameters.eventSubtype;
        }

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.dir !== undefined) {
            queryParameters['dir'] = requestParameters.dir;
        }

        if (requestParameters.grouping !== undefined) {
            queryParameters['grouping'] = requestParameters.grouping;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/metric-counts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListMetricCountsResponseFromJSON(jsonValue));
    }

    /**
     * List metric counts
     */
    async listMetricCounts(requestParameters: ListMetricCountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListMetricCountsResponse> {
        const response = await this.listMetricCountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List metric counts hourly
     */
    async listMetricCountsHourlyRaw(requestParameters: ListMetricCountsHourlyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListMetricCountsHourlyResponse>> {
        if (requestParameters.eventSubtype === null || requestParameters.eventSubtype === undefined) {
            throw new runtime.RequiredError('eventSubtype','Required parameter requestParameters.eventSubtype was null or undefined when calling listMetricCountsHourly.');
        }

        const queryParameters: any = {};

        if (requestParameters.startTime !== undefined) {
            queryParameters['start_time'] = (requestParameters.startTime as any).toISOString();
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['end_time'] = (requestParameters.endTime as any).toISOString();
        }

        if (requestParameters.eventSubtype !== undefined) {
            queryParameters['event_subtype'] = requestParameters.eventSubtype;
        }

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.dir !== undefined) {
            queryParameters['dir'] = requestParameters.dir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/metric-counts-hourly`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListMetricCountsHourlyResponseFromJSON(jsonValue));
    }

    /**
     * List metric counts hourly
     */
    async listMetricCountsHourly(requestParameters: ListMetricCountsHourlyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListMetricCountsHourlyResponse> {
        const response = await this.listMetricCountsHourlyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
