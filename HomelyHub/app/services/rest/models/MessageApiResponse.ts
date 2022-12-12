/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { SubjectApiResponse } from './SubjectApiResponse';

export type MessageApiResponse = (BaseResponse & {
    body?: string;
    date?: string;
    conversation?: number;
    recivedBy?: SubjectApiResponse;
});
