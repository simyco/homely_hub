/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { SubjectApiResponse } from './SubjectApiResponse';

export type PostCommentsApiResponse = (BaseResponse & {
    text?: string;
    actualText?: string;
    postId?: number;
    createdAt?: string;
    sender?: SubjectApiResponse;
});
