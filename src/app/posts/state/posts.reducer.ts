import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPosts, updatePosts, } from "./posts.action";

const _postReducer = createReducer(
    initialState,
    on(addPosts, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePosts, (state, action) => {
        const updatedPost = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        })
        return {
            ...state,
            posts: updatedPost,
        }
    })
)

export function postsReducer(state, action) {
    return _postReducer(state, action);
}