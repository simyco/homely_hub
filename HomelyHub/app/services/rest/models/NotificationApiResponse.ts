/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { NotificationTypeApiResponse } from './NotificationTypeApiResponse';
import type { SubjectApiResponse } from './SubjectApiResponse';

export type NotificationApiResponse = (BaseResponse & {
    type?: NotificationTypeApiResponse;
    date?: string;
    title?: string;
    body?: string;
    read?: boolean;
    sender?: SubjectApiResponse;
});
