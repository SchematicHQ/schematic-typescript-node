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
  CreatePlan200Response,
  CreatePlanRequest,
  DeleteFeature200Response,
  ListPlans200Response,
  UpdatePlan200Response,
} from '../models';
import {
    CreatePlan200ResponseFromJSON,
    CreatePlan200ResponseToJSON,
    CreatePlanRequestFromJSON,
    CreatePlanRequestToJSON,
    DeleteFeature200ResponseFromJSON,
    DeleteFeature200ResponseToJSON,
    ListPlans200ResponseFromJSON,
    ListPlans200ResponseToJSON,
    UpdatePlan200ResponseFromJSON,
    UpdatePlan200ResponseToJSON,
} from '../models';

export interface CreatePlanOperationRequest {
    createPlanRequest: CreatePlanRequest;
    xSchematicEnvironmentId?: string;
}

export interface DeletePlanRequest {
    planId: string;
    xSchematicEnvironmentId?: string;
}

export interface ListPlansRequest {
    xSchematicEnvironmentId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface UpdatePlanRequest {
    createPlanRequest: CreatePlanRequest;
    planId: string;
    xSchematicEnvironmentId?: string;
}

/**
 * 
 */
export class PlansApi extends runtime.BaseAPI {

    /**
     * Create plan
     */
    async createPlanRaw(requestParameters: CreatePlanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatePlan200Response>> {
        if (requestParameters.createPlanRequest === null || requestParameters.createPlanRequest === undefined) {
            throw new runtime.RequiredError('createPlanRequest','Required parameter requestParameters.createPlanRequest was null or undefined when calling createPlan.');
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
            path: `/plans`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePlanRequestToJSON(requestParameters.createPlanRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreatePlan200ResponseFromJSON(jsonValue));
    }

    /**
     * Create plan
     */
    async createPlan(requestParameters: CreatePlanOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatePlan200Response> {
        const response = await this.createPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete plan
     */
    async deletePlanRaw(requestParameters: DeletePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteFeature200Response>> {
        if (requestParameters.planId === null || requestParameters.planId === undefined) {
            throw new runtime.RequiredError('planId','Required parameter requestParameters.planId was null or undefined when calling deletePlan.');
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
            path: `/plans/{plan_id}`.replace(`{${"plan_id"}}`, encodeURIComponent(String(requestParameters.planId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteFeature200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete plan
     */
    async deletePlan(requestParameters: DeletePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteFeature200Response> {
        const response = await this.deletePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List plans
     */
    async listPlansRaw(requestParameters: ListPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListPlans200Response>> {
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

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/plans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListPlans200ResponseFromJSON(jsonValue));
    }

    /**
     * List plans
     */
    async listPlans(requestParameters: ListPlansRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListPlans200Response> {
        const response = await this.listPlansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update plan
     */
    async updatePlanRaw(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdatePlan200Response>> {
        if (requestParameters.createPlanRequest === null || requestParameters.createPlanRequest === undefined) {
            throw new runtime.RequiredError('createPlanRequest','Required parameter requestParameters.createPlanRequest was null or undefined when calling updatePlan.');
        }

        if (requestParameters.planId === null || requestParameters.planId === undefined) {
            throw new runtime.RequiredError('planId','Required parameter requestParameters.planId was null or undefined when calling updatePlan.');
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
            path: `/plans/{plan_id}`.replace(`{${"plan_id"}}`, encodeURIComponent(String(requestParameters.planId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePlanRequestToJSON(requestParameters.createPlanRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdatePlan200ResponseFromJSON(jsonValue));
    }

    /**
     * Update plan
     */
    async updatePlan(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdatePlan200Response> {
        const response = await this.updatePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

}