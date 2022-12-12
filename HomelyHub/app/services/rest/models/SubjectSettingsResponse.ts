/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { SubjectSettingsNotification } from './SubjectSettingsNotification';

export type SubjectSettingsResponse = (BaseResponse & {
    notification?: SubjectSettingsNotification;
    subjectId?: number;
});
