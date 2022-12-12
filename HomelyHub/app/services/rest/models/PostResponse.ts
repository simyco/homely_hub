/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseDate } from './BaseDate';
import type { BaseResponse } from './BaseResponse';
import type { PostAddress } from './PostAddress';
import type { PostType } from './PostType';
import type { SubCategoryResponse } from './SubCategoryResponse';
import type { SubjectPostInfo } from './SubjectPostInfo';
import type { SubjectResponse } from './SubjectResponse';

export type PostResponse = (BaseResponse & {
    name?: string;
    description?: string;
    type?: PostType;
    startDate?: BaseDate;
    endDate?: BaseDate;
    address?: PostAddress;
    createdBy?: SubjectResponse;
    expired?: boolean;
    subCategoryId?: number;
    subCategory?: SubCategoryResponse;
    subjectPostInfo?: SubjectPostInfo;
});
