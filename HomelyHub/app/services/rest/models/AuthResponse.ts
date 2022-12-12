/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubjectResponse } from './SubjectResponse';

export type AuthResponse = {
    subject?: SubjectResponse;
    token?: string;
    refreshToken?: string;
};
