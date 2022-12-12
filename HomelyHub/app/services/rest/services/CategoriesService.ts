/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriesApiResponse } from '../models/CategoriesApiResponse';
import type { CategoryReponse } from '../models/CategoryReponse';
import type { CreateCategoryApiRequest } from '../models/CreateCategoryApiRequest';
import type { CreateSubCategoryApiRequest } from '../models/CreateSubCategoryApiRequest';
import type { FlatCategoriesResponse } from '../models/FlatCategoriesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CategoriesService {

    /**
     * @returns CategoriesApiResponse
     * @throws ApiError
     */
    public static categoriesCategories(): CancelablePromise<Array<CategoriesApiResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Categories',
        });
    }

    /**
     * @param requestBody
     * @returns CategoryReponse
     * @throws ApiError
     */
    public static categoriesCreateCategory(
        requestBody: CreateCategoryApiRequest,
    ): CancelablePromise<CategoryReponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Categories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns FlatCategoriesResponse
     * @throws ApiError
     */
    public static categoriesSubCategories(): CancelablePromise<Array<FlatCategoriesResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Categories/SubCategories',
        });
    }

    /**
     * @param requestBody
     * @returns CategoryReponse
     * @throws ApiError
     */
    public static categoriesCreateSubCategory(
        requestBody: CreateSubCategoryApiRequest,
    ): CancelablePromise<CategoryReponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Categories/CreateSubCategory',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}