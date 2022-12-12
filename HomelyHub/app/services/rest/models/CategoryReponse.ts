/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { CategoryIconResponse } from './CategoryIconResponse';
import type { SubCategoryResponse } from './SubCategoryResponse';

export type CategoryReponse = (BaseResponse & {
    name?: string;
    icon?: CategoryIconResponse;
    subCategories?: Array<SubCategoryResponse>;
});
