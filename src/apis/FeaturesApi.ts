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
  CheckFlag200Response,
  CheckFlagRequest,
  CheckFlags201Response,
  CheckFlagsRequest,
  CountFlagValues200Response,
  CreateFeature201Response,
  CreateFeatureRequest,
  CreateFlag201Response,
  CreateFlagRequest,
  DeleteApiKey200Response,
  GetFeature200Response,
  GetFlag200Response,
  ListFeatures200Response,
  ListFlagValues200Response,
  ListFlags200Response,
  UpdateFeature200Response,
  UpdateFeatureRequest,
  UpdateFlag200Response,
} from '../models';
import {
    CheckFlag200ResponseFromJSON,
    CheckFlag200ResponseToJSON,
    CheckFlagRequestFromJSON,
    CheckFlagRequestToJSON,
    CheckFlags201ResponseFromJSON,
    CheckFlags201ResponseToJSON,
    CheckFlagsRequestFromJSON,
    CheckFlagsRequestToJSON,
    CountFlagValues200ResponseFromJSON,
    CountFlagValues200ResponseToJSON,
    CreateFeature201ResponseFromJSON,
    CreateFeature201ResponseToJSON,
    CreateFeatureRequestFromJSON,
    CreateFeatureRequestToJSON,
    CreateFlag201ResponseFromJSON,
    CreateFlag201ResponseToJSON,
    CreateFlagRequestFromJSON,
    CreateFlagRequestToJSON,
    DeleteApiKey200ResponseFromJSON,
    DeleteApiKey200ResponseToJSON,
    GetFeature200ResponseFromJSON,
    GetFeature200ResponseToJSON,
    GetFlag200ResponseFromJSON,
    GetFlag200ResponseToJSON,
    ListFeatures200ResponseFromJSON,
    ListFeatures200ResponseToJSON,
    ListFlagValues200ResponseFromJSON,
    ListFlagValues200ResponseToJSON,
    ListFlags200ResponseFromJSON,
    ListFlags200ResponseToJSON,
    UpdateFeature200ResponseFromJSON,
    UpdateFeature200ResponseToJSON,
    UpdateFeatureRequestFromJSON,
    UpdateFeatureRequestToJSON,
    UpdateFlag200ResponseFromJSON,
    UpdateFlag200ResponseToJSON,
} from '../models';

export interface CheckFlagOperationRequest {
    checkFlagRequest: CheckFlagRequest;
    key: string;
    xSchematicEnvironmentId?: string;
}

export interface CheckFlagsOperationRequest {
    checkFlagsRequest: CheckFlagsRequest;
    xSchematicEnvironmentId?: string;
}

export interface CountFlagValuesRequest {
    entityType: number;
    xSchematicEnvironmentId?: string;
    companyId?: string;
    userId?: string;
    flagId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface CreateFeatureOperationRequest {
    createFeatureRequest: CreateFeatureRequest;
    xSchematicEnvironmentId?: string;
}

export interface CreateFlagOperationRequest {
    createFlagRequest: CreateFlagRequest;
    xSchematicEnvironmentId?: string;
}

export interface DeleteFeatureRequest {
    featureId: string;
    xSchematicEnvironmentId?: string;
}

export interface DeleteFlagRequest {
    flagId: string;
    xSchematicEnvironmentId?: string;
}

export interface GetFeatureRequest {
    featureId: string;
    xSchematicEnvironmentId?: string;
}

export interface GetFlagRequest {
    flagId: string;
    xSchematicEnvironmentId?: string;
}

export interface ListFeaturesRequest {
    xSchematicEnvironmentId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface ListFlagValuesRequest {
    entityType: number;
    xSchematicEnvironmentId?: string;
    companyId?: string;
    userId?: string;
    flagId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface ListFlagsRequest {
    xSchematicEnvironmentId?: string;
    featureId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface UpdateFeatureOperationRequest {
    updateFeatureRequest: UpdateFeatureRequest;
    featureId: string;
    xSchematicEnvironmentId?: string;
}

export interface UpdateFlagRequest {
    createFlagRequest: CreateFlagRequest;
    flagId: string;
    xSchematicEnvironmentId?: string;
}

/**
 * 
 */
export class FeaturesApi extends runtime.BaseAPI {

    /**
     * Check flag
     */
    async checkFlagRaw(requestParameters: CheckFlagOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckFlag200Response>> {
        if (requestParameters.checkFlagRequest === null || requestParameters.checkFlagRequest === undefined) {
            throw new runtime.RequiredError('checkFlagRequest','Required parameter requestParameters.checkFlagRequest was null or undefined when calling checkFlag.');
        }

        if (requestParameters.key === null || requestParameters.key === undefined) {
            throw new runtime.RequiredError('key','Required parameter requestParameters.key was null or undefined when calling checkFlag.');
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
            path: `/flags/{key}/check`.replace(`{${"key"}}`, encodeURIComponent(String(requestParameters.key))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CheckFlagRequestToJSON(requestParameters.checkFlagRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckFlag200ResponseFromJSON(jsonValue));
    }

    /**
     * Check flag
     */
    async checkFlag(requestParameters: CheckFlagOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckFlag200Response> {
        const response = await this.checkFlagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check flags
     */
    async checkFlagsRaw(requestParameters: CheckFlagsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckFlags201Response>> {
        if (requestParameters.checkFlagsRequest === null || requestParameters.checkFlagsRequest === undefined) {
            throw new runtime.RequiredError('checkFlagsRequest','Required parameter requestParameters.checkFlagsRequest was null or undefined when calling checkFlags.');
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
            path: `/flags/check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CheckFlagsRequestToJSON(requestParameters.checkFlagsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckFlags201ResponseFromJSON(jsonValue));
    }

    /**
     * Check flags
     */
    async checkFlags(requestParameters: CheckFlagsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckFlags201Response> {
        const response = await this.checkFlagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Count flag values
     */
    async countFlagValuesRaw(requestParameters: CountFlagValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountFlagValues200Response>> {
        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling countFlagValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.entityType !== undefined) {
            queryParameters['entity_type'] = requestParameters.entityType;
        }

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        if (requestParameters.flagId !== undefined) {
            queryParameters['flag_id'] = requestParameters.flagId;
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
            path: `/flag-values/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountFlagValues200ResponseFromJSON(jsonValue));
    }

    /**
     * Count flag values
     */
    async countFlagValues(requestParameters: CountFlagValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountFlagValues200Response> {
        const response = await this.countFlagValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create feature
     */
    async createFeatureRaw(requestParameters: CreateFeatureOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateFeature201Response>> {
        if (requestParameters.createFeatureRequest === null || requestParameters.createFeatureRequest === undefined) {
            throw new runtime.RequiredError('createFeatureRequest','Required parameter requestParameters.createFeatureRequest was null or undefined when calling createFeature.');
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
            path: `/features`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFeatureRequestToJSON(requestParameters.createFeatureRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateFeature201ResponseFromJSON(jsonValue));
    }

    /**
     * Create feature
     */
    async createFeature(requestParameters: CreateFeatureOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateFeature201Response> {
        const response = await this.createFeatureRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create flag
     */
    async createFlagRaw(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateFlag201Response>> {
        if (requestParameters.createFlagRequest === null || requestParameters.createFlagRequest === undefined) {
            throw new runtime.RequiredError('createFlagRequest','Required parameter requestParameters.createFlagRequest was null or undefined when calling createFlag.');
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
            path: `/flags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFlagRequestToJSON(requestParameters.createFlagRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateFlag201ResponseFromJSON(jsonValue));
    }

    /**
     * Create flag
     */
    async createFlag(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateFlag201Response> {
        const response = await this.createFlagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete feature
     */
    async deleteFeatureRaw(requestParameters: DeleteFeatureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteApiKey200Response>> {
        if (requestParameters.featureId === null || requestParameters.featureId === undefined) {
            throw new runtime.RequiredError('featureId','Required parameter requestParameters.featureId was null or undefined when calling deleteFeature.');
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
            path: `/features/{feature_id}`.replace(`{${"feature_id"}}`, encodeURIComponent(String(requestParameters.featureId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteApiKey200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete feature
     */
    async deleteFeature(requestParameters: DeleteFeatureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteApiKey200Response> {
        const response = await this.deleteFeatureRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete flag
     */
    async deleteFlagRaw(requestParameters: DeleteFlagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteApiKey200Response>> {
        if (requestParameters.flagId === null || requestParameters.flagId === undefined) {
            throw new runtime.RequiredError('flagId','Required parameter requestParameters.flagId was null or undefined when calling deleteFlag.');
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
            path: `/flags/{flag_id}`.replace(`{${"flag_id"}}`, encodeURIComponent(String(requestParameters.flagId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteApiKey200ResponseFromJSON(jsonValue));
    }

    /**
     * Delete flag
     */
    async deleteFlag(requestParameters: DeleteFlagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteApiKey200Response> {
        const response = await this.deleteFlagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get feature
     */
    async getFeatureRaw(requestParameters: GetFeatureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFeature200Response>> {
        if (requestParameters.featureId === null || requestParameters.featureId === undefined) {
            throw new runtime.RequiredError('featureId','Required parameter requestParameters.featureId was null or undefined when calling getFeature.');
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
            path: `/features/{feature_id}`.replace(`{${"feature_id"}}`, encodeURIComponent(String(requestParameters.featureId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFeature200ResponseFromJSON(jsonValue));
    }

    /**
     * Get feature
     */
    async getFeature(requestParameters: GetFeatureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFeature200Response> {
        const response = await this.getFeatureRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get flag
     */
    async getFlagRaw(requestParameters: GetFlagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFlag200Response>> {
        if (requestParameters.flagId === null || requestParameters.flagId === undefined) {
            throw new runtime.RequiredError('flagId','Required parameter requestParameters.flagId was null or undefined when calling getFlag.');
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
            path: `/flags/{flag_id}`.replace(`{${"flag_id"}}`, encodeURIComponent(String(requestParameters.flagId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFlag200ResponseFromJSON(jsonValue));
    }

    /**
     * Get flag
     */
    async getFlag(requestParameters: GetFlagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFlag200Response> {
        const response = await this.getFlagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List features
     */
    async listFeaturesRaw(requestParameters: ListFeaturesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListFeatures200Response>> {
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
            path: `/features`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListFeatures200ResponseFromJSON(jsonValue));
    }

    /**
     * List features
     */
    async listFeatures(requestParameters: ListFeaturesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFeatures200Response> {
        const response = await this.listFeaturesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List flag values
     */
    async listFlagValuesRaw(requestParameters: ListFlagValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListFlagValues200Response>> {
        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling listFlagValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.entityType !== undefined) {
            queryParameters['entity_type'] = requestParameters.entityType;
        }

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        if (requestParameters.flagId !== undefined) {
            queryParameters['flag_id'] = requestParameters.flagId;
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
            path: `/flag-values`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListFlagValues200ResponseFromJSON(jsonValue));
    }

    /**
     * List flag values
     */
    async listFlagValues(requestParameters: ListFlagValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFlagValues200Response> {
        const response = await this.listFlagValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List flags
     */
    async listFlagsRaw(requestParameters: ListFlagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListFlags200Response>> {
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

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/flags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListFlags200ResponseFromJSON(jsonValue));
    }

    /**
     * List flags
     */
    async listFlags(requestParameters: ListFlagsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListFlags200Response> {
        const response = await this.listFlagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update feature
     */
    async updateFeatureRaw(requestParameters: UpdateFeatureOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateFeature200Response>> {
        if (requestParameters.updateFeatureRequest === null || requestParameters.updateFeatureRequest === undefined) {
            throw new runtime.RequiredError('updateFeatureRequest','Required parameter requestParameters.updateFeatureRequest was null or undefined when calling updateFeature.');
        }

        if (requestParameters.featureId === null || requestParameters.featureId === undefined) {
            throw new runtime.RequiredError('featureId','Required parameter requestParameters.featureId was null or undefined when calling updateFeature.');
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
            path: `/features/{feature_id}`.replace(`{${"feature_id"}}`, encodeURIComponent(String(requestParameters.featureId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFeatureRequestToJSON(requestParameters.updateFeatureRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateFeature200ResponseFromJSON(jsonValue));
    }

    /**
     * Update feature
     */
    async updateFeature(requestParameters: UpdateFeatureOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateFeature200Response> {
        const response = await this.updateFeatureRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update flag
     */
    async updateFlagRaw(requestParameters: UpdateFlagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateFlag200Response>> {
        if (requestParameters.createFlagRequest === null || requestParameters.createFlagRequest === undefined) {
            throw new runtime.RequiredError('createFlagRequest','Required parameter requestParameters.createFlagRequest was null or undefined when calling updateFlag.');
        }

        if (requestParameters.flagId === null || requestParameters.flagId === undefined) {
            throw new runtime.RequiredError('flagId','Required parameter requestParameters.flagId was null or undefined when calling updateFlag.');
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
            path: `/flags/{flag_id}`.replace(`{${"flag_id"}}`, encodeURIComponent(String(requestParameters.flagId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFlagRequestToJSON(requestParameters.createFlagRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateFlag200ResponseFromJSON(jsonValue));
    }

    /**
     * Update flag
     */
    async updateFlag(requestParameters: UpdateFlagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateFlag200Response> {
        const response = await this.updateFlagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
