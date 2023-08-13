export interface IPost {
  id: number;
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
}

export interface IUserPostProps {
  post: IPost;
  isLast: boolean;
}
