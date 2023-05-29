import { createAction , props} from "@ngrx/store";


export const increment123 = createAction('[Counter Component] Increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction('customIncrement', props<{customValue: number}>())