/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationListApiResponseOfListOfNotificationApiResponse } from '../models/PaginationListApiResponseOfListOfNotificationApiResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationService {

    /**
     * @param pageSize
     * @param pageNumber
     * @returns PaginationListApiResponseOfListOfNotificationApiResponse
     * @throws ApiError
     */
    public static notificationGetNotifications(
        pageSize?: number | null,
        pageNumber?: number | null,
    ): CancelablePromise<PaginationListApiResponseOfListOfNotificationApiResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Notification',
            query: {
                'PageSize': pageSize,
                'PageNumber': pageNumber,
            },
        });
    }

}