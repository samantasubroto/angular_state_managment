import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const ADD_POST_ACTION = '[posts page] add post'; //just a name of action we are giving
export const UPDATE_POST_ACTION = '[posts page] update post';
export const DELETE_POST_ACTION = '[posts page] delete post';

export const addPosts = createAction(ADD_POST_ACTION, props<{post: Post}>());
export const updatePosts = createAction(UPDATE_POST_ACTION, props<{post: Post}>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{post: Post}>());