/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostApiRequest } from '../models/CreatePostApiRequest';
import type { CreatePostCommentApiRequest } from '../models/CreatePostCommentApiRequest';
import type { PaginationListApiResponseOfListOfPostApiResponse } from '../models/PaginationListApiResponseOfListOfPostApiResponse';
import type { PaginationListApiResponseOfListOfPostCommentsApiResponse } from '../models/PaginationListApiResponseOfListOfPostCommentsApiResponse';
import type { PostCommentResponse } from '../models/PostCommentResponse';
import type { PostResponse } from '../models/PostResponse';
import type { ReportPostApiRequest } from '../models/ReportPostApiRequest';
import type { UpdatePostApiRequest } from '../models/UpdatePostApiRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * @param id
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfPostCommentsApiResponse
     * @throws ApiError
     */
    public static postsComments(
        id: number,
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfPostCommentsApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/Comments',
            query: {
                'Id': id,
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

    /**
     * @param requestBody
     * @returns PostCommentResponse
     * @throws ApiError
     */
    public static postsCreateComment(
        requestBody: CreatePostCommentApiRequest,
    ): CancelablePromise<PostCommentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Posts/Comments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns PostCommentResponse
     * @throws ApiError
     */
    public static postsUpdateComment(
        requestBody: UpdatePostApiRequest,
    ): CancelablePromise<PostCommentResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Posts/Comments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfPostApiResponse
     * @throws ApiError
     */
    public static postsMyCommentReports(
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfPostApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/Comments/MyReport',
            query: {
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

    /**
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfPostApiResponse
     * @throws ApiError
     */
    public static postsMyReport(
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfPostApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/MyReport',
            query: {
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

    /**
     * @param id
     * @returns PostResponse
     * @throws ApiError
     */
    public static postsPost(
        id: number,
    ): CancelablePromise<PostResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Post/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param name
     * @param type
     * @param categoryIds
     * @param subCategoryIds
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfPostApiResponse
     * @throws ApiError
     */
    public static postsPosts(
        name?: string | null,
        type?: string | null,
        categoryIds?: string | null,
        subCategoryIds?: string | null,
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfPostApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts',
            query: {
                'Name': name,
                'Type': type,
                'CategoryIds': categoryIds,
                'SubCategoryIds': subCategoryIds,
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

    /**
     * @param requestBody
     * @returns PostResponse
     * @throws ApiError
     */
    public static postsCreatePost(
        requestBody: CreatePostApiRequest,
    ): CancelablePromise<PostResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Posts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns PostResponse
     * @throws ApiError
     */
    public static postsUpdatePost(
        requestBody: UpdatePostApiRequest,
    ): CancelablePromise<PostResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Posts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfPostApiResponse
     * @throws ApiError
     */
    public static postsMyPosts(
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfPostApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/MyPosts',
            query: {
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

    /**
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfPostApiResponse
     * @throws ApiError
     */
    public static postsCancelled(
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfPostApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/Cancelled',
            query: {
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

    /**
     * @param id
     * @returns PostCommentResponse
     * @throws ApiError
     */
    public static postsDeleteComment(
        id: number,
    ): CancelablePromise<PostCommentResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Posts/Comments/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static postsAddToFavorite(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Posts/{id}/Favorite',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static postsDeleteFavorite(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Posts/{id}/Favorite',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static postsAddToLike(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Posts/{id}/Like',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static postsDeleteLike(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Posts/{id}/Like',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns PostResponse
     * @throws ApiError
     */
    public static postsDeletePost(
        id: number,
    ): CancelablePromise<PostResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Posts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns boolean
     * @throws ApiError
     */
    public static postsReport(
        requestBody: ReportPostApiRequest,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Posts/Report',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static postsUnReport(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Posts/{id}/UnReport',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static postsSubscribeToNotification(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Posts/{id}/SubscribeNotification',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns boolean
     * @throws ApiError
     */
    public static postsUnsubscribeToNotificationNotification(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Posts/{id}/SubscribeNotification',
            path: {
                'id': id,
            },
        });
    }

}