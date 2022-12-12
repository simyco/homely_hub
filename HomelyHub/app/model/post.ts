export type PostType = 'search' | 'event' | 'custom';

export interface Post {
  id: number;
  title?: string;
  description?: string;
  typeDescription?: string;
  type?: PostType;
  category?: number;
  categoryDescription?: string;
  subCategoryId?: number;
  postAdvised?: boolean;
  hours?: string;
  city?: string;
  date?: Date;
  enabledNotification?: boolean;
  bookmarked?: boolean;
  liked?: boolean;
  creatorId?: number;
  creator?: PostCreator;
  expired: boolean;
}
export interface PostCreator {
  id?: number;
  name?: number;
  avatar?: number;
}
export interface PostForm {
  name?: string;
  description?: string;
  type?: string;
  categoryId?: string;
  subCategoryId?: string;
  dueDate?: string;
  hours?: string;
  place?: string;
  hasAuthority?: string;
  authority?: string;
  customType?: string;
}
