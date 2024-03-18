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
  CreateCompanyMembershipResponse,
  CreateCompanyResponse,
  CreateCompanyTraitResponse,
  CreateEntityTraitDefinitionRequestBody,
  CreateEntityTraitDefinitionResponse,
  CreateUserResponse,
  CreateUserTraitResponse,
  DeleteCompanyMembershipResponse,
  DeleteCompanyResponse,
  DeleteUserResponse,
  GetCompanyResponse,
  GetOrCreateCompanyMembershipRequestBody,
  GetUserResponse,
  ListCompaniesResponse,
  ListCompanyMembershipsResponse,
  ListCompanyPlansResponse,
  ListUsersResponse,
  LookupCompanyResponse,
  LookupUserResponse,
  UpdateEntityTraitDefinitionRequestBody,
  UpdateEntityTraitDefinitionResponse,
  UpsertCompanyRequestBody,
  UpsertTraitRequestBody,
  UpsertUserRequestBody,
} from '../models/index';
import {
    ApiErrorFromJSON,
    ApiErrorToJSON,
    CreateCompanyMembershipResponseFromJSON,
    CreateCompanyMembershipResponseToJSON,
    CreateCompanyResponseFromJSON,
    CreateCompanyResponseToJSON,
    CreateCompanyTraitResponseFromJSON,
    CreateCompanyTraitResponseToJSON,
    CreateEntityTraitDefinitionRequestBodyFromJSON,
    CreateEntityTraitDefinitionRequestBodyToJSON,
    CreateEntityTraitDefinitionResponseFromJSON,
    CreateEntityTraitDefinitionResponseToJSON,
    CreateUserResponseFromJSON,
    CreateUserResponseToJSON,
    CreateUserTraitResponseFromJSON,
    CreateUserTraitResponseToJSON,
    DeleteCompanyMembershipResponseFromJSON,
    DeleteCompanyMembershipResponseToJSON,
    DeleteCompanyResponseFromJSON,
    DeleteCompanyResponseToJSON,
    DeleteUserResponseFromJSON,
    DeleteUserResponseToJSON,
    GetCompanyResponseFromJSON,
    GetCompanyResponseToJSON,
    GetOrCreateCompanyMembershipRequestBodyFromJSON,
    GetOrCreateCompanyMembershipRequestBodyToJSON,
    GetUserResponseFromJSON,
    GetUserResponseToJSON,
    ListCompaniesResponseFromJSON,
    ListCompaniesResponseToJSON,
    ListCompanyMembershipsResponseFromJSON,
    ListCompanyMembershipsResponseToJSON,
    ListCompanyPlansResponseFromJSON,
    ListCompanyPlansResponseToJSON,
    ListUsersResponseFromJSON,
    ListUsersResponseToJSON,
    LookupCompanyResponseFromJSON,
    LookupCompanyResponseToJSON,
    LookupUserResponseFromJSON,
    LookupUserResponseToJSON,
    UpdateEntityTraitDefinitionRequestBodyFromJSON,
    UpdateEntityTraitDefinitionRequestBodyToJSON,
    UpdateEntityTraitDefinitionResponseFromJSON,
    UpdateEntityTraitDefinitionResponseToJSON,
    UpsertCompanyRequestBodyFromJSON,
    UpsertCompanyRequestBodyToJSON,
    UpsertTraitRequestBodyFromJSON,
    UpsertTraitRequestBodyToJSON,
    UpsertUserRequestBodyFromJSON,
    UpsertUserRequestBodyToJSON,
} from '../models/index';

export interface CreateCompanyRequest {
    upsertCompanyRequestBody: UpsertCompanyRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface CreateCompanyMembershipRequest {
    getOrCreateCompanyMembershipRequestBody: GetOrCreateCompanyMembershipRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface CreateCompanyTraitRequest {
    upsertTraitRequestBody: UpsertTraitRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface CreateEntityTraitDefinitionRequest {
    createEntityTraitDefinitionRequestBody: CreateEntityTraitDefinitionRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface CreateUserRequest {
    upsertUserRequestBody: UpsertUserRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface CreateUserTraitRequest {
    upsertTraitRequestBody: UpsertTraitRequestBody;
    xSchematicEnvironmentId?: string;
}

export interface DeleteCompanyRequest {
    companyId: string;
    xSchematicEnvironmentId?: string;
}

export interface DeleteCompanyMembershipRequest {
    companyMembershipId: string;
    xSchematicEnvironmentId?: string;
}

export interface DeleteUserRequest {
    userId: string;
    xSchematicEnvironmentId?: string;
}

export interface GetCompanyRequest {
    companyId: string;
    xSchematicEnvironmentId?: string;
}

export interface GetUserRequest {
    userId: string;
    xSchematicEnvironmentId?: string;
}

export interface ListCompaniesRequest {
    xSchematicEnvironmentId?: string;
    ids?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface ListCompanyMembershipsRequest {
    xSchematicEnvironmentId?: string;
    companyId?: string;
    userId?: string;
    limit?: number;
    offset?: number;
}

export interface ListCompanyPlansRequest {
    xSchematicEnvironmentId?: string;
    companyId?: string;
    planId?: string;
    limit?: number;
    offset?: number;
}

export interface ListUsersRequest {
    xSchematicEnvironmentId?: string;
    ids?: Array<string>;
    limit?: number;
    offset?: number;
}

export interface LookupCompanyRequest {
    keys: object;
    xSchematicEnvironmentId?: string;
}

export interface LookupUserRequest {
    keys: object;
    xSchematicEnvironmentId?: string;
}

export interface UpdateEntityTraitDefinitionRequest {
    entityTraitDefinitionId: string;
    updateEntityTraitDefinitionRequestBody: UpdateEntityTraitDefinitionRequestBody;
    xSchematicEnvironmentId?: string;
}

/**
 * 
 */
export class CompaniesApi extends runtime.BaseAPI {

    /**
     * Create company
     */
    async createCompanyRaw(requestParameters: CreateCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateCompanyResponse>> {
        if (requestParameters['upsertCompanyRequestBody'] == null) {
            throw new runtime.RequiredError(
                'upsertCompanyRequestBody',
                'Required parameter "upsertCompanyRequestBody" was null or undefined when calling createCompany().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/companies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpsertCompanyRequestBodyToJSON(requestParameters['upsertCompanyRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateCompanyResponseFromJSON(jsonValue));
    }

    /**
     * Create company
     */
    async createCompany(requestParameters: CreateCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCompanyResponse> {
        const response = await this.createCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create company membership
     */
    async createCompanyMembershipRaw(requestParameters: CreateCompanyMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateCompanyMembershipResponse>> {
        if (requestParameters['getOrCreateCompanyMembershipRequestBody'] == null) {
            throw new runtime.RequiredError(
                'getOrCreateCompanyMembershipRequestBody',
                'Required parameter "getOrCreateCompanyMembershipRequestBody" was null or undefined when calling createCompanyMembership().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-memberships`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetOrCreateCompanyMembershipRequestBodyToJSON(requestParameters['getOrCreateCompanyMembershipRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateCompanyMembershipResponseFromJSON(jsonValue));
    }

    /**
     * Create company membership
     */
    async createCompanyMembership(requestParameters: CreateCompanyMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCompanyMembershipResponse> {
        const response = await this.createCompanyMembershipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create company trait
     */
    async createCompanyTraitRaw(requestParameters: CreateCompanyTraitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateCompanyTraitResponse>> {
        if (requestParameters['upsertTraitRequestBody'] == null) {
            throw new runtime.RequiredError(
                'upsertTraitRequestBody',
                'Required parameter "upsertTraitRequestBody" was null or undefined when calling createCompanyTrait().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-traits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpsertTraitRequestBodyToJSON(requestParameters['upsertTraitRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateCompanyTraitResponseFromJSON(jsonValue));
    }

    /**
     * Create company trait
     */
    async createCompanyTrait(requestParameters: CreateCompanyTraitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCompanyTraitResponse> {
        const response = await this.createCompanyTraitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create entity trait definition
     */
    async createEntityTraitDefinitionRaw(requestParameters: CreateEntityTraitDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateEntityTraitDefinitionResponse>> {
        if (requestParameters['createEntityTraitDefinitionRequestBody'] == null) {
            throw new runtime.RequiredError(
                'createEntityTraitDefinitionRequestBody',
                'Required parameter "createEntityTraitDefinitionRequestBody" was null or undefined when calling createEntityTraitDefinition().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/entity-trait-definitions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateEntityTraitDefinitionRequestBodyToJSON(requestParameters['createEntityTraitDefinitionRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateEntityTraitDefinitionResponseFromJSON(jsonValue));
    }

    /**
     * Create entity trait definition
     */
    async createEntityTraitDefinition(requestParameters: CreateEntityTraitDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateEntityTraitDefinitionResponse> {
        const response = await this.createEntityTraitDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create user
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUserResponse>> {
        if (requestParameters['upsertUserRequestBody'] == null) {
            throw new runtime.RequiredError(
                'upsertUserRequestBody',
                'Required parameter "upsertUserRequestBody" was null or undefined when calling createUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpsertUserRequestBodyToJSON(requestParameters['upsertUserRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUserResponseFromJSON(jsonValue));
    }

    /**
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUserResponse> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create user trait
     */
    async createUserTraitRaw(requestParameters: CreateUserTraitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateUserTraitResponse>> {
        if (requestParameters['upsertTraitRequestBody'] == null) {
            throw new runtime.RequiredError(
                'upsertTraitRequestBody',
                'Required parameter "upsertTraitRequestBody" was null or undefined when calling createUserTrait().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/user-traits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpsertTraitRequestBodyToJSON(requestParameters['upsertTraitRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateUserTraitResponseFromJSON(jsonValue));
    }

    /**
     * Create user trait
     */
    async createUserTrait(requestParameters: CreateUserTraitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateUserTraitResponse> {
        const response = await this.createUserTraitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete company
     */
    async deleteCompanyRaw(requestParameters: DeleteCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteCompanyResponse>> {
        if (requestParameters['companyId'] == null) {
            throw new runtime.RequiredError(
                'companyId',
                'Required parameter "companyId" was null or undefined when calling deleteCompany().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/companies/{company_id}`.replace(`{${"company_id"}}`, encodeURIComponent(String(requestParameters['companyId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteCompanyResponseFromJSON(jsonValue));
    }

    /**
     * Delete company
     */
    async deleteCompany(requestParameters: DeleteCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteCompanyResponse> {
        const response = await this.deleteCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete company membership
     */
    async deleteCompanyMembershipRaw(requestParameters: DeleteCompanyMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteCompanyMembershipResponse>> {
        if (requestParameters['companyMembershipId'] == null) {
            throw new runtime.RequiredError(
                'companyMembershipId',
                'Required parameter "companyMembershipId" was null or undefined when calling deleteCompanyMembership().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-memberships/{company_membership_id}`.replace(`{${"company_membership_id"}}`, encodeURIComponent(String(requestParameters['companyMembershipId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteCompanyMembershipResponseFromJSON(jsonValue));
    }

    /**
     * Delete company membership
     */
    async deleteCompanyMembership(requestParameters: DeleteCompanyMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteCompanyMembershipResponse> {
        const response = await this.deleteCompanyMembershipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete user
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteUserResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling deleteUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteUserResponseFromJSON(jsonValue));
    }

    /**
     * Delete user
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteUserResponse> {
        const response = await this.deleteUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get company
     */
    async getCompanyRaw(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetCompanyResponse>> {
        if (requestParameters['companyId'] == null) {
            throw new runtime.RequiredError(
                'companyId',
                'Required parameter "companyId" was null or undefined when calling getCompany().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/companies/{company_id}`.replace(`{${"company_id"}}`, encodeURIComponent(String(requestParameters['companyId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCompanyResponseFromJSON(jsonValue));
    }

    /**
     * Get company
     */
    async getCompany(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetCompanyResponse> {
        const response = await this.getCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUserResponse>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/users/{user_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUserResponseFromJSON(jsonValue));
    }

    /**
     * Get user
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUserResponse> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List companies
     */
    async listCompaniesRaw(requestParameters: ListCompaniesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCompaniesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/companies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCompaniesResponseFromJSON(jsonValue));
    }

    /**
     * List companies
     */
    async listCompanies(requestParameters: ListCompaniesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListCompaniesResponse> {
        const response = await this.listCompaniesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List company memberships
     */
    async listCompanyMembershipsRaw(requestParameters: ListCompanyMembershipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCompanyMembershipsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['companyId'] != null) {
            queryParameters['company_id'] = requestParameters['companyId'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['user_id'] = requestParameters['userId'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/company-memberships`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListCompanyMembershipsResponseFromJSON(jsonValue));
    }

    /**
     * List company memberships
     */
    async listCompanyMemberships(requestParameters: ListCompanyMembershipsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListCompanyMembershipsResponse> {
        const response = await this.listCompanyMembershipsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List company plans
     */
    async listCompanyPlansRaw(requestParameters: ListCompanyPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListCompanyPlansResponse>> {
        const queryParameters: any = {};

        if (requestParameters['companyId'] != null) {
            queryParameters['company_id'] = requestParameters['companyId'];
        }

        if (requestParameters['planId'] != null) {
            queryParameters['plan_id'] = requestParameters['planId'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
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
     * List users
     */
    async listUsersRaw(requestParameters: ListUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListUsersResponse>> {
        const queryParameters: any = {};

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListUsersResponseFromJSON(jsonValue));
    }

    /**
     * List users
     */
    async listUsers(requestParameters: ListUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListUsersResponse> {
        const response = await this.listUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lookup company
     */
    async lookupCompanyRaw(requestParameters: LookupCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookupCompanyResponse>> {
        if (requestParameters['keys'] == null) {
            throw new runtime.RequiredError(
                'keys',
                'Required parameter "keys" was null or undefined when calling lookupCompany().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['keys'] != null) {
            queryParameters['keys'] = requestParameters['keys'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/companies/lookup`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LookupCompanyResponseFromJSON(jsonValue));
    }

    /**
     * Lookup company
     */
    async lookupCompany(requestParameters: LookupCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookupCompanyResponse> {
        const response = await this.lookupCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lookup user
     */
    async lookupUserRaw(requestParameters: LookupUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LookupUserResponse>> {
        if (requestParameters['keys'] == null) {
            throw new runtime.RequiredError(
                'keys',
                'Required parameter "keys" was null or undefined when calling lookupUser().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['keys'] != null) {
            queryParameters['keys'] = requestParameters['keys'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/users/lookup`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LookupUserResponseFromJSON(jsonValue));
    }

    /**
     * Lookup user
     */
    async lookupUser(requestParameters: LookupUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LookupUserResponse> {
        const response = await this.lookupUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update entity trait definition
     */
    async updateEntityTraitDefinitionRaw(requestParameters: UpdateEntityTraitDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateEntityTraitDefinitionResponse>> {
        if (requestParameters['entityTraitDefinitionId'] == null) {
            throw new runtime.RequiredError(
                'entityTraitDefinitionId',
                'Required parameter "entityTraitDefinitionId" was null or undefined when calling updateEntityTraitDefinition().'
            );
        }

        if (requestParameters['updateEntityTraitDefinitionRequestBody'] == null) {
            throw new runtime.RequiredError(
                'updateEntityTraitDefinitionRequestBody',
                'Required parameter "updateEntityTraitDefinitionRequestBody" was null or undefined when calling updateEntityTraitDefinition().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters['xSchematicEnvironmentId'] != null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters['xSchematicEnvironmentId']);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = await this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/entity-trait-definitions/{entity_trait_definition_id}`.replace(`{${"entity_trait_definition_id"}}`, encodeURIComponent(String(requestParameters['entityTraitDefinitionId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateEntityTraitDefinitionRequestBodyToJSON(requestParameters['updateEntityTraitDefinitionRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateEntityTraitDefinitionResponseFromJSON(jsonValue));
    }

    /**
     * Update entity trait definition
     */
    async updateEntityTraitDefinition(requestParameters: UpdateEntityTraitDefinitionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateEntityTraitDefinitionResponse> {
        const response = await this.updateEntityTraitDefinitionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
