/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { SubCategoriesApiResponse } from './SubCategoriesApiResponse';

export type CategoriesApiResponse = (BaseResponse & {
    name?: string;
    icon?: string;
    subCategories?: Array<SubCategoriesApiResponse>;
});
