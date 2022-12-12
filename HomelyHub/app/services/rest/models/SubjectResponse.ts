/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';

export type SubjectResponse = (BaseResponse & {
    name?: string;
    surname?: string;
    email?: string;
    imageUrl?: string;
    applicationUserId?: string;
});
