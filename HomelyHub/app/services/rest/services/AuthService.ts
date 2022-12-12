/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponse } from '../models/AuthResponse';
import type { CreateRefreshTokenApiRequest } from '../models/CreateRefreshTokenApiRequest';
import type { CreateTokenApiRequest } from '../models/CreateTokenApiRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @param requestBody
     * @returns AuthResponse
     * @throws ApiError
     */
    public static authRefreshToken(
        requestBody: CreateRefreshTokenApiRequest,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/RefreshToken',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns AuthResponse
     * @throws ApiError
     */
    public static authToken(
        requestBody: CreateTokenApiRequest,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Auth/Token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}