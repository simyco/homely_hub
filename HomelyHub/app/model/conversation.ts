export type NotificationType = 'expiration' | 'comment' | 'newpost';

export interface Conversation {
  id: string;
  lastMessage: string;
  dateLastMessage: Date;
  user?: ConversationUser;
}

export interface ConversationUser {
  id?: string;
  name: string;
  avatar?: string;
}
