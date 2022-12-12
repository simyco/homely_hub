/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSubjectApiRequest } from '../models/CreateSubjectApiRequest';
import type { SubjectApiResponse } from '../models/SubjectApiResponse';
import type { SubjectCategoryResponse } from '../models/SubjectCategoryResponse';
import type { SubjectSettingsResponse } from '../models/SubjectSettingsResponse';
import type { SubscribeSubjectCategoryApiRequest } from '../models/SubscribeSubjectCategoryApiRequest';
import type { UpdatePasswordApiRequest } from '../models/UpdatePasswordApiRequest';
import type { UpdateSettingsApiRequest } from '../models/UpdateSettingsApiRequest';
import type { UpdateSubjectApiRequest } from '../models/UpdateSubjectApiRequest';
import type { UpdateSubjectImageApiRequest } from '../models/UpdateSubjectImageApiRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectService {

    /**
     * @returns SubjectApiResponse
     * @throws ApiError
     */
    public static subjectMe(): CancelablePromise<SubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subject/Me',
        });
    }

    /**
     * @returns SubjectSettingsResponse
     * @throws ApiError
     */
    public static subjectSettings(): CancelablePromise<SubjectSettingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subject/Settings',
        });
    }

    /**
     * @param requestBody
     * @returns SubjectSettingsResponse
     * @throws ApiError
     */
    public static subjectUpdateSettings(
        requestBody: UpdateSettingsApiRequest,
    ): CancelablePromise<SubjectSettingsResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Subject/Settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SubjectCategoryResponse
     * @throws ApiError
     */
    public static subjectSubscribedCategories(): CancelablePromise<Array<SubjectCategoryResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Subject/SubscribedCategories',
        });
    }

    /**
     * @param requestBody
     * @returns SubjectApiResponse
     * @throws ApiError
     */
    public static subjectCreate(
        requestBody: CreateSubjectApiRequest,
    ): CancelablePromise<SubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subject',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns SubjectApiResponse
     * @throws ApiError
     */
    public static subjectUpdate(
        requestBody: UpdateSubjectApiRequest,
    ): CancelablePromise<SubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Subject',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns boolean
     * @throws ApiError
     */
    public static subjectSubscribedCategory(
        requestBody: SubscribeSubjectCategoryApiRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Subject/SubscribedCategory',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static subjectDelete(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Subject/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param categoryId
     * @returns boolean
     * @throws ApiError
     */
    public static subjectUnSubscribedCategory(
        categoryId: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Subject/SubscribedCategory/{categoryId}',
            path: {
                'categoryId': categoryId,
            },
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static subjectDisable(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Subject/{id}/Disable',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns SubjectApiResponse
     * @throws ApiError
     */
    public static subjectProfileImage(
        requestBody: UpdateSubjectImageApiRequest,
    ): CancelablePromise<SubjectApiResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Subject/ProfileImage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns boolean
     * @throws ApiError
     */
    public static subjectPassword(
        requestBody: UpdatePasswordApiRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Subject/Password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}