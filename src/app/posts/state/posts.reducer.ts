import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPosts } from "./posts.action";

const _postReducer = createReducer(
    initialState,
    on(addPosts, (state, action) => {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    })
)

export function postsReducer(state, action) {
    return _postReducer(state, action);
}