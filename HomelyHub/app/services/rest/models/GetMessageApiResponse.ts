/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { SubjectApiResponse } from './SubjectApiResponse';

export type GetMessageApiResponse = (BaseResponse & {
    body?: string;
    dateLastMessage?: string;
    subject?: SubjectApiResponse;
});
