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
  CreatePlanRequestBody,
  CreatePlanResponse,
  DeletePlanResponse,
  GetPlanResponse,
  ListCompanyPlansResponse,
  ListPlansResponse,
  UpdateAudienceRequestBody,
  UpdatePlanAudienceResponse,
  UpdatePlanRequestBody,
  UpdatePlanResponse,
  UpsertBillingPeriodRequestBody,
  UpsertBillingPeriodResponse,
} from '../models';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CreatePlanRequestBodyFromJSON,
    CreatePlanRequestBodyToJSON,
    CreatePlanResponseFromJSON,
    CreatePlanResponseToJSON,
    DeletePlanResponseFromJSON,
    DeletePlanResponseToJSON,
    GetPlanResponseFromJSON,
    GetPlanResponseToJSON,
    ListCompanyPlansResponseFromJSON,
    ListCompanyPlansResponseToJSON,
    ListPlansResponseFromJSON,
    ListPlansResponseToJSON,
    UpdateAudienceRequestBodyFromJSON,
    UpdateAudienceRequestBodyToJSON,
    UpdatePlanAudienceResponseFromJSON,
    UpdatePlanAudienceResponseToJSON,
    UpdatePlanRequestBodyFromJSON,
    UpdatePlanRequestBodyToJSON,
    UpdatePlanResponseFromJSON,
    UpdatePlanResponseToJSON,
    UpsertBillingPeriodRequestBodyFromJSON,
    UpsertBillingPeriodRequestBodyToJSON,
    UpsertBillingPeriodResponseFromJSON,
    UpsertBillingPeriodResponseToJSON,
} from '../models';

export interface CreatePlanRequest {
    createPlanRequestBody: CreatePlanRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface DeletePlanRequest {
    planId: string;
    xSchematicEnvironmentId?: string;
}

export interface GetPlanRequest {
    planId: string;
    xSchematicEnvironmentId?: string;
}

export interface ListCompanyPlansRequest {
    xSchematicEnvironmentId?: string;
    companyId?: string;
    planId?: string;
    active?: boolean;
    limit?: number;
    offset?: number;
}

export interface ListPlansRequest {
    xSchematicEnvironmentId?: string;
    limit?: number;
    offset?: number;
}

export interface UpdatePlanRequest {
    updatePlanRequestBody: UpdatePlanRequestBody;
    planId: string;
    xSchematicEnvironmentId?: string;
}

export interface UpdatePlanAudienceRequest {
    updateAudienceRequestBody: UpdateAudienceRequestBody;
    planAudienceId: string;
    xSchematicEnvironmentId?: string;
}

export interface UpsertBillingPeriodRequest {
    upsertBillingPeriodRequestBody: UpsertBillingPeriodRequestBody;
    key: string;
    xSchematicEnvironmentId?: string;
}

/**
 * 
 */
export class PlansApi extends runtime.BaseAPI {

    /**
     * Create plan
     */
    async createPlanRaw(requestParameters: CreatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatePlanResponse>> {
        if (requestParameters.createPlanRequestBody === null || requestParameters.createPlanRequestBody === undefined) {
            throw new runtime.RequiredError('createPlanRequestBody','Required parameter requestParameters.createPlanRequestBody was null or undefined when calling createPlan.');
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
            body: CreatePlanRequestBodyToJSON(requestParameters.createPlanRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreatePlanResponseFromJSON(jsonValue));
    }

    /**
     * Create plan
     */
    async createPlan(requestParameters: CreatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatePlanResponse> {
        const response = await this.createPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete plan
     */
    async deletePlanRaw(requestParameters: DeletePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletePlanResponse>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => DeletePlanResponseFromJSON(jsonValue));
    }

    /**
     * Delete plan
     */
    async deletePlan(requestParameters: DeletePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletePlanResponse> {
        const response = await this.deletePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get plan
     */
    async getPlanRaw(requestParameters: GetPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlanResponse>> {
        if (requestParameters.planId === null || requestParameters.planId === undefined) {
            throw new runtime.RequiredError('planId','Required parameter requestParameters.planId was null or undefined when calling getPlan.');
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
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPlanResponseFromJSON(jsonValue));
    }

    /**
     * Get plan
     */
    async getPlan(requestParameters: GetPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlanResponse> {
        const response = await this.getPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List company plans
     */
    async listCompanyPlansRaw(requestParameters: ListCompanyPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCompanyPlansResponse>> {
        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.planId !== undefined) {
            queryParameters['plan_id'] = requestParameters.planId;
        }

        if (requestParameters.active !== undefined) {
            queryParameters['active'] = requestParameters.active;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-plans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCompanyPlansResponseFromJSON(jsonValue));
    }

    /**
     * List company plans
     */
    async listCompanyPlans(requestParameters: ListCompanyPlansRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListCompanyPlansResponse> {
        const response = await this.listCompanyPlansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List plans
     */
    async listPlansRaw(requestParameters: ListPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListPlansResponse>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
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

        return new runtime.JSONApiResponse(response, (jsonValue) => ListPlansResponseFromJSON(jsonValue));
    }

    /**
     * List plans
     */
    async listPlans(requestParameters: ListPlansRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListPlansResponse> {
        const response = await this.listPlansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update plan
     */
    async updatePlanRaw(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdatePlanResponse>> {
        if (requestParameters.updatePlanRequestBody === null || requestParameters.updatePlanRequestBody === undefined) {
            throw new runtime.RequiredError('updatePlanRequestBody','Required parameter requestParameters.updatePlanRequestBody was null or undefined when calling updatePlan.');
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
            body: UpdatePlanRequestBodyToJSON(requestParameters.updatePlanRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdatePlanResponseFromJSON(jsonValue));
    }

    /**
     * Update plan
     */
    async updatePlan(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdatePlanResponse> {
        const response = await this.updatePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update plan audience
     */
    async updatePlanAudienceRaw(requestParameters: UpdatePlanAudienceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdatePlanAudienceResponse>> {
        if (requestParameters.updateAudienceRequestBody === null || requestParameters.updateAudienceRequestBody === undefined) {
            throw new runtime.RequiredError('updateAudienceRequestBody','Required parameter requestParameters.updateAudienceRequestBody was null or undefined when calling updatePlanAudience.');
        }

        if (requestParameters.planAudienceId === null || requestParameters.planAudienceId === undefined) {
            throw new runtime.RequiredError('planAudienceId','Required parameter requestParameters.planAudienceId was null or undefined when calling updatePlanAudience.');
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
            path: `/plan-audiences/{plan_audience_id}`.replace(`{${"plan_audience_id"}}`, encodeURIComponent(String(requestParameters.planAudienceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAudienceRequestBodyToJSON(requestParameters.updateAudienceRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdatePlanAudienceResponseFromJSON(jsonValue));
    }

    /**
     * Update plan audience
     */
    async updatePlanAudience(requestParameters: UpdatePlanAudienceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdatePlanAudienceResponse> {
        const response = await this.updatePlanAudienceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Upsert billing period
     */
    async upsertBillingPeriodRaw(requestParameters: UpsertBillingPeriodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpsertBillingPeriodResponse>> {
        if (requestParameters.upsertBillingPeriodRequestBody === null || requestParameters.upsertBillingPeriodRequestBody === undefined) {
            throw new runtime.RequiredError('upsertBillingPeriodRequestBody','Required parameter requestParameters.upsertBillingPeriodRequestBody was null or undefined when calling upsertBillingPeriod.');
        }

        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling upsertBillingPeriod.');
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
            path: `/billing-periods/{key}/upsert`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpsertBillingPeriodRequestBodyToJSON(requestParameters.upsertBillingPeriodRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpsertBillingPeriodResponseFromJSON(jsonValue));
    }

    /**
     * Upsert billing period
     */
    async upsertBillingPeriod(requestParameters: UpsertBillingPeriodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpsertBillingPeriodResponse> {
        const response = await this.upsertBillingPeriodRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
