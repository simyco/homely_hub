/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ValueObject } from './ValueObject';

export type SubjectSettingsNotification = (ValueObject & {
    newMyPostComment?: boolean;
    newCommentedPostComment?: boolean;
    updateCommentedPost?: boolean;
});
