/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponse } from './BaseResponse';
import type { LastMessageApiResponse } from './LastMessageApiResponse';
import type { SubjectApiResponse } from './SubjectApiResponse';

export type GetConversationApiResponse = (BaseResponse & {
    dateLastMessage?: string;
    lastMessage?: LastMessageApiResponse;
    subject?: SubjectApiResponse;
    blocked?: boolean;
});
