/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  EventsGet200Response,
  EventsIdGet200Response,
  MetricCountsGet200Response,
  MetricsGet200Response,
} from '../models';
import {
    EventsGet200ResponseFromJSON,
    EventsGet200ResponseToJSON,
    EventsIdGet200ResponseFromJSON,
    EventsIdGet200ResponseToJSON,
    MetricCountsGet200ResponseFromJSON,
    MetricCountsGet200ResponseToJSON,
    MetricsGet200ResponseFromJSON,
    MetricsGet200ResponseToJSON,
} from '../models';

export interface EventsGetRequest {
    featureId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface EventsIdGetRequest {
    eventId: string;
}

export interface MetricCountsGetRequest {
    definitionId?: string;
    startTime?: Date;
    endTime?: Date;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface MetricsGetRequest {
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
     * List events
     */
    async eventsGetRaw(requestParameters: EventsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventsGet200Response>> {
        const queryParameters: any = {};

        if (requestParameters.featureId !== undefined) {
            queryParameters['feature_id'] = requestParameters.featureId;
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

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List events
     */
    async eventsGet(requestParameters: EventsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventsGet200Response> {
        const response = await this.eventsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get event
     */
    async eventsIdGetRaw(requestParameters: EventsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventsIdGet200Response>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling eventsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/events/:id`.replace(`{${"event_id"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsIdGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get event
     */
    async eventsIdGet(requestParameters: EventsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventsIdGet200Response> {
        const response = await this.eventsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List metric-counts
     */
    async metricCountsGetRaw(requestParameters: MetricCountsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricCountsGet200Response>> {
        const queryParameters: any = {};

        if (requestParameters.definitionId !== undefined) {
            queryParameters['definition_id'] = requestParameters.definitionId;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['start_time'] = (requestParameters.startTime as any).toISOString();
        }

        if (requestParameters.endTime !== undefined) {
            queryParameters['end_time'] = (requestParameters.endTime as any).toISOString();
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

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/metric-counts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricCountsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List metric-counts
     */
    async metricCountsGet(requestParameters: MetricCountsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricCountsGet200Response> {
        const response = await this.metricCountsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List metrics
     */
    async metricsGetRaw(requestParameters: MetricsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetricsGet200Response>> {
        const queryParameters: any = {};

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

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/metrics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetricsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List metrics
     */
    async metricsGet(requestParameters: MetricsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetricsGet200Response> {
        const response = await this.metricsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
