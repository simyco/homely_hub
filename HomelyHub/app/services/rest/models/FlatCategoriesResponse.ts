/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';

export type FlatCategoriesResponse = (BaseResponse & {
    parentId?: number;
    name?: string;
    icon?: string;
});
