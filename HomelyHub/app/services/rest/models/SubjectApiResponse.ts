/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';

export type SubjectApiResponse = (BaseResponse & {
    name?: string;
    surname?: string;
    email?: string;
    avatar?: string;
    userId?: string;
});
