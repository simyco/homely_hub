/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationApiResponse } from './NotificationApiResponse';
import type { PaginationInfoApiResponse } from './PaginationInfoApiResponse';

export type PaginationListApiResponseOfListOfNotificationApiResponse = {
    items?: Array<NotificationApiResponse>;
    info?: PaginationInfoApiResponse;
};
