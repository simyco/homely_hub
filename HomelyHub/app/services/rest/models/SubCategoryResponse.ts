/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { SingleCategoryResponse } from './SingleCategoryResponse';

export type SubCategoryResponse = (BaseResponse & {
    name?: string;
    category?: SingleCategoryResponse;
});
