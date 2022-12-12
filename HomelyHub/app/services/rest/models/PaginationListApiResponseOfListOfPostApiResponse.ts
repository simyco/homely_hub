/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationInfoApiResponse } from './PaginationInfoApiResponse';
import type { PostApiResponse } from './PostApiResponse';

export type PaginationListApiResponseOfListOfPostApiResponse = {
    items?: Array<PostApiResponse>;
    info?: PaginationInfoApiResponse;
};
