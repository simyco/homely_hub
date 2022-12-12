/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetMessageApiResponse } from './GetMessageApiResponse';
import type { PaginationInfoApiResponse } from './PaginationInfoApiResponse';

export type PaginationListApiResponseOfListOfGetMessageApiResponse = {
    items?: Array<GetMessageApiResponse>;
    info?: PaginationInfoApiResponse;
};
