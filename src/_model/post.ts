export interface Post {
  id?: string;
  content?: string;
  imagUrl?: string;
  authorId?: string;
  date?: string;
  likedIds?: string[];
  comments?: any[];
}
