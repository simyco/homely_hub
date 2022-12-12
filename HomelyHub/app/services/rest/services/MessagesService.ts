/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessageApiRequest } from '../models/CreateMessageApiRequest';
import type { MessageApiResponse } from '../models/MessageApiResponse';
import type { PaginationListApiResponseOfListOfGetMessageApiResponse } from '../models/PaginationListApiResponseOfListOfGetMessageApiResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessagesService {

    /**
     * @param conversationId
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfGetMessageApiResponse
     * @throws ApiError
     */
    public static messagesGetMessage(
        conversationId: number,
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfGetMessageApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Messages',
            query: {
                'ConversationId': conversationId,
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

    /**
     * @param requestBody
     * @returns MessageApiResponse
     * @throws ApiError
     */
    public static messagesCreateMessage(
        requestBody: CreateMessageApiRequest,
    ): CancelablePromise<MessageApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Messages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}