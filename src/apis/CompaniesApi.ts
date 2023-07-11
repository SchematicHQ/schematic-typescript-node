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
  CompaniesGet200Response,
} from '../models';
import {
    CompaniesGet200ResponseFromJSON,
    CompaniesGet200ResponseToJSON,
} from '../models';

export interface CompaniesGetRequest {
    xSchematicEnvironmentId?: string;
    limit?: number;
    offset?: number;
    order?: string;
    dir?: string;
}

/**
 * 
 */
export class CompaniesApi extends runtime.BaseAPI {

    /**
     * List companies
     */
    async companiesGetRaw(requestParameters: CompaniesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompaniesGet200Response>> {
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
            path: `/companies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompaniesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * List companies
     */
    async companiesGet(requestParameters: CompaniesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompaniesGet200Response> {
        const response = await this.companiesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
