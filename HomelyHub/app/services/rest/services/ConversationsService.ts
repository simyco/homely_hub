/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetConversationApiResponse } from '../models/GetConversationApiResponse';
import type { PaginationListApiResponseOfListOfGetConversationApiResponse } from '../models/PaginationListApiResponseOfListOfGetConversationApiResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConversationsService {

    /**
     * @param id
     * @returns GetConversationApiResponse
     * @throws ApiError
     */
    public static conversationsConversation(
        id: number,
    ): CancelablePromise<GetConversationApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Conversation/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfGetConversationApiResponse
     * @throws ApiError
     */
    public static conversationsConversations(
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfGetConversationApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Conversations',
            query: {
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

}