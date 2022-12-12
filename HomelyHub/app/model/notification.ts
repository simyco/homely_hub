export interface Notification {
  id: number;
  title: string;
  body: string;
  user: NotificationUser;
  date: Date;
  read: boolean;
  type?: NotificationType;
}

export interface NotificationType {
  description?: string;
  value?: string;
}

export interface User {
  id?: string;
  name: string;
  avatar?: string;
}
export interface NotificationUser extends User {}
