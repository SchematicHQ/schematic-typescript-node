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
  CountEventTypes200Response,
  CountEvents200Response,
  CreateEvent200Response,
  CreateEventRequest,
  GetEvent200Response,
  GetEventType200Response,
  ListEventTypes200Response,
  ListEvents200Response,
} from '../models';
import {
    CountEventTypes200ResponseFromJSON,
    CountEventTypes200ResponseToJSON,
    CountEvents200ResponseFromJSON,
    CountEvents200ResponseToJSON,
    CreateEvent200ResponseFromJSON,
    CreateEvent200ResponseToJSON,
    CreateEventRequestFromJSON,
    CreateEventRequestToJSON,
    GetEvent200ResponseFromJSON,
    GetEvent200ResponseToJSON,
    GetEventType200ResponseFromJSON,
    GetEventType200ResponseToJSON,
    ListEventTypes200ResponseFromJSON,
    ListEventTypes200ResponseToJSON,
    ListEvents200ResponseFromJSON,
    ListEvents200ResponseToJSON,
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

export interface CreateEventOperationRequest {
    createEventRequest: CreateEventRequest;
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

/**
 * 
 */
export class EventsApi extends runtime.BaseAPI {

    /**
     * Count event types
     */
    async countEventTypesRaw(requestParameters: CountEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountEventTypes200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CountEventTypes200ResponseFromJSON(jsonValue));
    }

    /**
     * Count event types
     */
    async countEventTypes(requestParameters: CountEventTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountEventTypes200Response> {
        const response = await this.countEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Count events
     */
    async countEventsRaw(requestParameters: CountEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountEvents200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => CountEvents200ResponseFromJSON(jsonValue));
    }

    /**
     * Count events
     */
    async countEvents(requestParameters: CountEventsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountEvents200Response> {
        const response = await this.countEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create event
     */
    async createEventRaw(requestParameters: CreateEventOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateEvent200Response>> {
        if (requestParameters.createEventRequest === null || requestParameters.createEventRequest === undefined) {
            throw new runtime.RequiredError('createEventRequest','Required parameter requestParameters.createEventRequest was null or undefined when calling createEvent.');
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
            body: CreateEventRequestToJSON(requestParameters.createEventRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateEvent200ResponseFromJSON(jsonValue));
    }

    /**
     * Create event
     */
    async createEvent(requestParameters: CreateEventOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateEvent200Response> {
        const response = await this.createEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get event
     */
    async getEventRaw(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEvent200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEvent200ResponseFromJSON(jsonValue));
    }

    /**
     * Get event
     */
    async getEvent(requestParameters: GetEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEvent200Response> {
        const response = await this.getEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get event type
     */
    async getEventTypeRaw(requestParameters: GetEventTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEventType200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEventType200ResponseFromJSON(jsonValue));
    }

    /**
     * Get event type
     */
    async getEventType(requestParameters: GetEventTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEventType200Response> {
        const response = await this.getEventTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List event types
     */
    async listEventTypesRaw(requestParameters: ListEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListEventTypes200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ListEventTypes200ResponseFromJSON(jsonValue));
    }

    /**
     * List event types
     */
    async listEventTypes(requestParameters: ListEventTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListEventTypes200Response> {
        const response = await this.listEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List events
     */
    async listEventsRaw(requestParameters: ListEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListEvents200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ListEvents200ResponseFromJSON(jsonValue));
    }

    /**
     * List events
     */
    async listEvents(requestParameters: ListEventsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListEvents200Response> {
        const response = await this.listEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
