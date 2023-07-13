/* tslint:disable */
/* eslint-disable */
/**
 * Schematic API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
  FeaturesFeatureIdCheckGet200Response,
  FeaturesGet200Response,
  PlansGet200Response,
} from '../models';
import {
    FeaturesFeatureIdCheckGet200ResponseFromJSON,
    FeaturesFeatureIdCheckGet200ResponseToJSON,
    FeaturesGet200ResponseFromJSON,
    FeaturesGet200ResponseToJSON,
    PlansGet200ResponseFromJSON,
    PlansGet200ResponseToJSON,
} from '../models';

export interface FeaturesFeatureIdCheckGetRequest {
    featureId: string;
    companyId: string;
    xSchematicEnvironmentId?: string;
}

export interface FeaturesGetRequest {
    xSchematicEnvironmentId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface PlansGetRequest {
    xSchematicEnvironmentId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

/**
 * 
 */
export class EntitlementsApi extends runtime.BaseAPI {

    /**
     * Check feature
     */
    async featuresFeatureIdCheckGetRaw(requestParameters: FeaturesFeatureIdCheckGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeaturesFeatureIdCheckGet200Response>> {
        if (requestParameters.featureId === null || requestParameters.featureId === undefined) {
            throw new runtime.RequiredError('featureId','Required parameter requestParameters.featureId was null or undefined when calling featuresFeatureIdCheckGet.');
        }

        if (requestParameters.companyId === null || requestParameters.companyId === undefined) {
            throw new runtime.RequiredError('companyId','Required parameter requestParameters.companyId was null or undefined when calling featuresFeatureIdCheckGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xSchematicEnvironmentId !== undefined && requestParameters.xSchematicEnvironmentId !== null) {
            headerParameters['X-Schematic-Environment-Id'] = String(requestParameters.xSchematicEnvironmentId);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/features/{feature_id}/check`.replace(`{${"feature_id"}}`, encodeURIComponent(String(requestParameters.featureId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeaturesFeatureIdCheckGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Check feature
     */
    async featuresFeatureIdCheckGet(requestParameters: FeaturesFeatureIdCheckGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeaturesFeatureIdCheckGet200Response> {
        const response = await this.featuresFeatureIdCheckGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List features
     */
    async featuresGetRaw(requestParameters: FeaturesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeaturesGet200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => FeaturesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List features
     */
    async featuresGet(requestParameters: FeaturesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeaturesGet200Response> {
        const response = await this.featuresGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List plans
     */
    async plansGetRaw(requestParameters: PlansGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlansGet200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => PlansGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List plans
     */
    async plansGet(requestParameters: PlansGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlansGet200Response> {
        const response = await this.plansGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
