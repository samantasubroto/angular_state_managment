import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const ADD_POST_ACTION = '[posts page] add post';

export const addPosts = createAction(ADD_POST_ACTION, props<{post: Post}>())