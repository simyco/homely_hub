/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';

export type SubCategoriesApiResponse = (BaseResponse & {
    name?: string;
    categoryId?: number;
});
