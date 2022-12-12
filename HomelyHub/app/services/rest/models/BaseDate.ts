/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ValueObject } from './ValueObject';

export type BaseDate = (ValueObject & {
    dateOnly?: string;
    time?: string;
    date?: string;
});
