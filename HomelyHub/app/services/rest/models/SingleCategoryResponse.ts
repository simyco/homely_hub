/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { CategoryIconResponse } from './CategoryIconResponse';

export type SingleCategoryResponse = (BaseResponse & {
    name?: string;
    icon?: CategoryIconResponse;
});
