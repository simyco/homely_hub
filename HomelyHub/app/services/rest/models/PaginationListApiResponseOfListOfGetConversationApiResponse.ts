/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetConversationApiResponse } from './GetConversationApiResponse';
import type { PaginationInfoApiResponse } from './PaginationInfoApiResponse';

export type PaginationListApiResponseOfListOfGetConversationApiResponse = {
    items?: Array<GetConversationApiResponse>;
    info?: PaginationInfoApiResponse;
};
