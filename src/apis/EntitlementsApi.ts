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
  FeaturesGet200Response,
  FeaturesIdCheckGet200Response,
  PlansGet200Response,
} from '../models';
import {
    FeaturesGet200ResponseFromJSON,
    FeaturesGet200ResponseToJSON,
    FeaturesIdCheckGet200ResponseFromJSON,
    FeaturesIdCheckGet200ResponseToJSON,
    PlansGet200ResponseFromJSON,
    PlansGet200ResponseToJSON,
} from '../models';

export interface FeaturesGetRequest {
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

export interface FeaturesIdCheckGetRequest {
    featureId: string;
    customerId: string;
}

export interface PlansGetRequest {
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
     * Check features
     */
    async featuresIdCheckGetRaw(requestParameters: FeaturesIdCheckGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FeaturesIdCheckGet200Response>> {
        if (requestParameters.featureId === null || requestParameters.featureId === undefined) {
            throw new runtime.RequiredError('featureId','Required parameter requestParameters.featureId was null or undefined when calling featuresIdCheckGet.');
        }

        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling featuresIdCheckGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.customerId !== undefined) {
            queryParameters['customer_id'] = requestParameters.customerId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Schematic-Api-Key"] = this.configuration.apiKey("X-Schematic-Api-Key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/features/:id/check`.replace(`{${"feature_id"}}`, encodeURIComponent(String(requestParameters.featureId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FeaturesIdCheckGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Check features
     */
    async featuresIdCheckGet(requestParameters: FeaturesIdCheckGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FeaturesIdCheckGet200Response> {
        const response = await this.featuresIdCheckGetRaw(requestParameters, initOverrides);
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
