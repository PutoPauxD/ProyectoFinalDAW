export interface PostModel{
  id?: number;
  id_user?: number;
  text: string;
  likes: number;
  shares: number;
  hasMedia: number;
  media?: string;
}
