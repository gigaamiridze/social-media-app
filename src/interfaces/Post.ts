export interface IUserPostProps {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
}

export interface IPost extends IUserPostProps {
  id: number;
}