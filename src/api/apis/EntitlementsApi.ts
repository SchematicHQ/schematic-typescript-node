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
  CountFeatureUsageResponse,
  CreateCompanyOverrideRequestBody,
  CreateCompanyOverrideResponse,
  CreatePlanEntitlementRequestBody,
  CreatePlanEntitlementResponse,
  DeleteCompanyOverrideResponse,
  DeletePlanEntitlementResponse,
  GetCompanyOverrideResponse,
  GetFeatureUsageByCompanyResponse,
  GetPlanEntitlementResponse,
  ListCompanyOverridesResponse,
  ListFeatureUsageResponse,
  ListPlanEntitlementsResponse,
  UpdateCompanyOverrideRequestBody,
  UpdateCompanyOverrideResponse,
  UpdatePlanEntitlementRequestBody,
  UpdatePlanEntitlementResponse,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CountFeatureUsageResponseFromJSON,
    CountFeatureUsageResponseToJSON,
    CreateCompanyOverrideRequestBodyFromJSON,
    CreateCompanyOverrideRequestBodyToJSON,
    CreateCompanyOverrideResponseFromJSON,
    CreateCompanyOverrideResponseToJSON,
    CreatePlanEntitlementRequestBodyFromJSON,
    CreatePlanEntitlementRequestBodyToJSON,
    CreatePlanEntitlementResponseFromJSON,
    CreatePlanEntitlementResponseToJSON,
    DeleteCompanyOverrideResponseFromJSON,
    DeleteCompanyOverrideResponseToJSON,
    DeletePlanEntitlementResponseFromJSON,
    DeletePlanEntitlementResponseToJSON,
    GetCompanyOverrideResponseFromJSON,
    GetCompanyOverrideResponseToJSON,
    GetFeatureUsageByCompanyResponseFromJSON,
    GetFeatureUsageByCompanyResponseToJSON,
    GetPlanEntitlementResponseFromJSON,
    GetPlanEntitlementResponseToJSON,
    ListCompanyOverridesResponseFromJSON,
    ListCompanyOverridesResponseToJSON,
    ListFeatureUsageResponseFromJSON,
    ListFeatureUsageResponseToJSON,
    ListPlanEntitlementsResponseFromJSON,
    ListPlanEntitlementsResponseToJSON,
    UpdateCompanyOverrideRequestBodyFromJSON,
    UpdateCompanyOverrideRequestBodyToJSON,
    UpdateCompanyOverrideResponseFromJSON,
    UpdateCompanyOverrideResponseToJSON,
    UpdatePlanEntitlementRequestBodyFromJSON,
    UpdatePlanEntitlementRequestBodyToJSON,
    UpdatePlanEntitlementResponseFromJSON,
    UpdatePlanEntitlementResponseToJSON,
} from '../models/index';

export interface CountFeatureUsageRequest {
    companyId?: string;
    companyKeys?: object;
    featureIds?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface CreateCompanyOverrideRequest {
    createCompanyOverrideRequestBody: CreateCompanyOverrideRequestBody;
}

export interface CreatePlanEntitlementRequest {
    createPlanEntitlementRequestBody: CreatePlanEntitlementRequestBody;
}

export interface DeleteCompanyOverrideRequest {
    companyOverrideId: string;
}

export interface DeletePlanEntitlementRequest {
    planEntitlementId: string;
}

export interface GetCompanyOverrideRequest {
    companyOverrideId: string;
}

export interface GetFeatureUsageByCompanyRequest {
    keys: object;
}

export interface GetPlanEntitlementRequest {
    planEntitlementId: string;
}

export interface ListCompanyOverridesRequest {
    companyId?: string;
    featureId?: string;
    featureIds?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface ListFeatureUsageRequest {
    companyId?: string;
    companyKeys?: object;
    featureIds?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface ListPlanEntitlementsRequest {
    planId?: string;
    planIds?: Array<string>;
    featureId?: string;
    featureIds?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface UpdateCompanyOverrideRequest {
    updateCompanyOverrideRequestBody: UpdateCompanyOverrideRequestBody;
    companyOverrideId: string;
}

export interface UpdatePlanEntitlementRequest {
    updatePlanEntitlementRequestBody: UpdatePlanEntitlementRequestBody;
    planEntitlementId: string;
}

/**
 * 
 */
export class EntitlementsApi extends runtime.BaseAPI {

    /**
     * Count feature usage
     */
    async countFeatureUsageRaw(requestParameters: CountFeatureUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountFeatureUsageResponse>> {
        const queryParameters: any = {};

        if (requestParameters['companyId'] != null) {
            queryParameters['company_id'] = requestParameters['companyId'];
        }

        if (requestParameters['companyKeys'] != null) {
            queryParameters['company_keys'] = requestParameters['companyKeys'];
        }

        if (requestParameters['featureIds'] != null) {
            queryParameters['feature_ids'] = requestParameters['featureIds'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/feature-usage/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountFeatureUsageResponseFromJSON(jsonValue));
    }

    /**
     * Count feature usage
     */
    async countFeatureUsage(requestParameters: CountFeatureUsageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountFeatureUsageResponse> {
        const response = await this.countFeatureUsageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create company override
     */
    async createCompanyOverrideRaw(requestParameters: CreateCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateCompanyOverrideResponse>> {
        if (requestParameters['createCompanyOverrideRequestBody'] == null) {
            throw new runtime.RequiredError(
                'createCompanyOverrideRequestBody',
                'Required parameter "createCompanyOverrideRequestBody" was null or undefined when calling createCompanyOverride().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-overrides`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCompanyOverrideRequestBodyToJSON(requestParameters['createCompanyOverrideRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateCompanyOverrideResponseFromJSON(jsonValue));
    }

    /**
     * Create company override
     */
    async createCompanyOverride(requestParameters: CreateCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCompanyOverrideResponse> {
        const response = await this.createCompanyOverrideRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create plan entitlement
     */
    async createPlanEntitlementRaw(requestParameters: CreatePlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatePlanEntitlementResponse>> {
        if (requestParameters['createPlanEntitlementRequestBody'] == null) {
            throw new runtime.RequiredError(
                'createPlanEntitlementRequestBody',
                'Required parameter "createPlanEntitlementRequestBody" was null or undefined when calling createPlanEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/plan-entitlements`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePlanEntitlementRequestBodyToJSON(requestParameters['createPlanEntitlementRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreatePlanEntitlementResponseFromJSON(jsonValue));
    }

    /**
     * Create plan entitlement
     */
    async createPlanEntitlement(requestParameters: CreatePlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatePlanEntitlementResponse> {
        const response = await this.createPlanEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete company override
     */
    async deleteCompanyOverrideRaw(requestParameters: DeleteCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteCompanyOverrideResponse>> {
        if (requestParameters['companyOverrideId'] == null) {
            throw new runtime.RequiredError(
                'companyOverrideId',
                'Required parameter "companyOverrideId" was null or undefined when calling deleteCompanyOverride().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-overrides/{company_override_id}`.replace(`{${"company_override_id"}}`, encodeURIComponent(String(requestParameters['companyOverrideId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteCompanyOverrideResponseFromJSON(jsonValue));
    }

    /**
     * Delete company override
     */
    async deleteCompanyOverride(requestParameters: DeleteCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteCompanyOverrideResponse> {
        const response = await this.deleteCompanyOverrideRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete plan entitlement
     */
    async deletePlanEntitlementRaw(requestParameters: DeletePlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletePlanEntitlementResponse>> {
        if (requestParameters['planEntitlementId'] == null) {
            throw new runtime.RequiredError(
                'planEntitlementId',
                'Required parameter "planEntitlementId" was null or undefined when calling deletePlanEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/plan-entitlements/{plan_entitlement_id}`.replace(`{${"plan_entitlement_id"}}`, encodeURIComponent(String(requestParameters['planEntitlementId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeletePlanEntitlementResponseFromJSON(jsonValue));
    }

    /**
     * Delete plan entitlement
     */
    async deletePlanEntitlement(requestParameters: DeletePlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletePlanEntitlementResponse> {
        const response = await this.deletePlanEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get company override
     */
    async getCompanyOverrideRaw(requestParameters: GetCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCompanyOverrideResponse>> {
        if (requestParameters['companyOverrideId'] == null) {
            throw new runtime.RequiredError(
                'companyOverrideId',
                'Required parameter "companyOverrideId" was null or undefined when calling getCompanyOverride().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-overrides/{company_override_id}`.replace(`{${"company_override_id"}}`, encodeURIComponent(String(requestParameters['companyOverrideId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCompanyOverrideResponseFromJSON(jsonValue));
    }

    /**
     * Get company override
     */
    async getCompanyOverride(requestParameters: GetCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCompanyOverrideResponse> {
        const response = await this.getCompanyOverrideRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get feature usage by company
     */
    async getFeatureUsageByCompanyRaw(requestParameters: GetFeatureUsageByCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFeatureUsageByCompanyResponse>> {
        if (requestParameters['keys'] == null) {
            throw new runtime.RequiredError(
                'keys',
                'Required parameter "keys" was null or undefined when calling getFeatureUsageByCompany().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['keys'] != null) {
            queryParameters['keys'] = requestParameters['keys'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/usage-by-company`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFeatureUsageByCompanyResponseFromJSON(jsonValue));
    }

    /**
     * Get feature usage by company
     */
    async getFeatureUsageByCompany(requestParameters: GetFeatureUsageByCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFeatureUsageByCompanyResponse> {
        const response = await this.getFeatureUsageByCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get plan entitlement
     */
    async getPlanEntitlementRaw(requestParameters: GetPlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlanEntitlementResponse>> {
        if (requestParameters['planEntitlementId'] == null) {
            throw new runtime.RequiredError(
                'planEntitlementId',
                'Required parameter "planEntitlementId" was null or undefined when calling getPlanEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/plan-entitlements/{plan_entitlement_id}`.replace(`{${"plan_entitlement_id"}}`, encodeURIComponent(String(requestParameters['planEntitlementId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPlanEntitlementResponseFromJSON(jsonValue));
    }

    /**
     * Get plan entitlement
     */
    async getPlanEntitlement(requestParameters: GetPlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlanEntitlementResponse> {
        const response = await this.getPlanEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List company overrides
     */
    async listCompanyOverridesRaw(requestParameters: ListCompanyOverridesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCompanyOverridesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['companyId'] != null) {
            queryParameters['company_id'] = requestParameters['companyId'];
        }

        if (requestParameters['featureId'] != null) {
            queryParameters['feature_id'] = requestParameters['featureId'];
        }

        if (requestParameters['featureIds'] != null) {
            queryParameters['feature_ids'] = requestParameters['featureIds'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-overrides`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCompanyOverridesResponseFromJSON(jsonValue));
    }

    /**
     * List company overrides
     */
    async listCompanyOverrides(requestParameters: ListCompanyOverridesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListCompanyOverridesResponse> {
        const response = await this.listCompanyOverridesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List feature usage
     */
    async listFeatureUsageRaw(requestParameters: ListFeatureUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListFeatureUsageResponse>> {
        const queryParameters: any = {};

        if (requestParameters['companyId'] != null) {
            queryParameters['company_id'] = requestParameters['companyId'];
        }

        if (requestParameters['companyKeys'] != null) {
            queryParameters['company_keys'] = requestParameters['companyKeys'];
        }

        if (requestParameters['featureIds'] != null) {
            queryParameters['feature_ids'] = requestParameters['featureIds'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/feature-usage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListFeatureUsageResponseFromJSON(jsonValue));
    }

    /**
     * List feature usage
     */
    async listFeatureUsage(requestParameters: ListFeatureUsageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFeatureUsageResponse> {
        const response = await this.listFeatureUsageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List plan entitlements
     */
    async listPlanEntitlementsRaw(requestParameters: ListPlanEntitlementsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListPlanEntitlementsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['planId'] != null) {
            queryParameters['plan_id'] = requestParameters['planId'];
        }

        if (requestParameters['planIds'] != null) {
            queryParameters['plan_ids'] = requestParameters['planIds'];
        }

        if (requestParameters['featureId'] != null) {
            queryParameters['feature_id'] = requestParameters['featureId'];
        }

        if (requestParameters['featureIds'] != null) {
            queryParameters['feature_ids'] = requestParameters['featureIds'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/plan-entitlements`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListPlanEntitlementsResponseFromJSON(jsonValue));
    }

    /**
     * List plan entitlements
     */
    async listPlanEntitlements(requestParameters: ListPlanEntitlementsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListPlanEntitlementsResponse> {
        const response = await this.listPlanEntitlementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update company override
     */
    async updateCompanyOverrideRaw(requestParameters: UpdateCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateCompanyOverrideResponse>> {
        if (requestParameters['updateCompanyOverrideRequestBody'] == null) {
            throw new runtime.RequiredError(
                'updateCompanyOverrideRequestBody',
                'Required parameter "updateCompanyOverrideRequestBody" was null or undefined when calling updateCompanyOverride().'
            );
        }

        if (requestParameters['companyOverrideId'] == null) {
            throw new runtime.RequiredError(
                'companyOverrideId',
                'Required parameter "companyOverrideId" was null or undefined when calling updateCompanyOverride().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-overrides/{company_override_id}`.replace(`{${"company_override_id"}}`, encodeURIComponent(String(requestParameters['companyOverrideId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCompanyOverrideRequestBodyToJSON(requestParameters['updateCompanyOverrideRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateCompanyOverrideResponseFromJSON(jsonValue));
    }

    /**
     * Update company override
     */
    async updateCompanyOverride(requestParameters: UpdateCompanyOverrideRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateCompanyOverrideResponse> {
        const response = await this.updateCompanyOverrideRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update plan entitlement
     */
    async updatePlanEntitlementRaw(requestParameters: UpdatePlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdatePlanEntitlementResponse>> {
        if (requestParameters['updatePlanEntitlementRequestBody'] == null) {
            throw new runtime.RequiredError(
                'updatePlanEntitlementRequestBody',
                'Required parameter "updatePlanEntitlementRequestBody" was null or undefined when calling updatePlanEntitlement().'
            );
        }

        if (requestParameters['planEntitlementId'] == null) {
            throw new runtime.RequiredError(
                'planEntitlementId',
                'Required parameter "planEntitlementId" was null or undefined when calling updatePlanEntitlement().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/plan-entitlements/{plan_entitlement_id}`.replace(`{${"plan_entitlement_id"}}`, encodeURIComponent(String(requestParameters['planEntitlementId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePlanEntitlementRequestBodyToJSON(requestParameters['updatePlanEntitlementRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdatePlanEntitlementResponseFromJSON(jsonValue));
    }

    /**
     * Update plan entitlement
     */
    async updatePlanEntitlement(requestParameters: UpdatePlanEntitlementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdatePlanEntitlementResponse> {
        const response = await this.updatePlanEntitlementRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
