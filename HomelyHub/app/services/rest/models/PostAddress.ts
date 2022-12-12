/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ValueObject } from './ValueObject';

export type PostAddress = (ValueObject & {
    city?: string;
    street?: string;
});
