/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationInfoApiResponse } from './PaginationInfoApiResponse';
import type { PostCommentsApiResponse } from './PostCommentsApiResponse';

export type PaginationListApiResponseOfListOfPostCommentsApiResponse = {
    items?: Array<PostCommentsApiResponse>;
    info?: PaginationInfoApiResponse;
};
