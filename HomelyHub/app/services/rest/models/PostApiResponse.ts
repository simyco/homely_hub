/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseDate } from './BaseDate';
import type { BaseResponse } from './BaseResponse';
import type { PostAddress } from './PostAddress';
import type { PostType } from './PostType';
import type { SubCategoryResponse } from './SubCategoryResponse';
import type { SubjectApiResponse } from './SubjectApiResponse';
import type { SubjectPostInfo } from './SubjectPostInfo';

export type PostApiResponse = (BaseResponse & {
    name?: string;
    description?: string;
    type?: PostType;
    startDate?: BaseDate;
    endDate?: BaseDate;
    address?: PostAddress;
    createdBy?: SubjectApiResponse;
    expired?: boolean;
    subCategoryId?: number;
    subCategory?: SubCategoryResponse;
    subjectPostInfo?: SubjectPostInfo;
});
