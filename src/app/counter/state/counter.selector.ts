import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

const getCounterState = createFeatureSelector<counterState>('counterww');

export const getCounter = createSelector(getCounterState, (state) => {
    return state;
})