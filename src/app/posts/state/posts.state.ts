export interface Post {
    id?: string;
    title: string;
    description: string; 
  }
  
  export interface PostsState {
    posts: Post[];
  }

  export const initialState: PostsState = {
    posts: [
        {id:'1', title: 'initial post', description: 'this is initial state'},
        {id:'2', title: 'second post', description: 'this is secodary state'}
    ]
  }