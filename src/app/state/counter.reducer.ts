import { createReducer, on } from "@ngrx/store"
import { initalstate } from "./counter.state";
import { customIncrement, decrement, increment, reset } from "./counter.action";
import { state } from "@angular/animations";

const _couterReducer = createReducer(
    initalstate,    //initial state
    on(increment, (state) => {  //increment is the action
        return {
            ...state,  //returning old state as it is
            counter: state.counter + 1,  //on which varialbe and what action it need to perform
        }
    }),
    on(decrement, (state => {
        return {
            ...state,
            counter: state.counter - 1,
        }
    })),
    on(reset, (state => {
        return {
            ...state,
            counter: 0,
        }
    })), 
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: action.customValue,
        }
    })

)


export function counterReducer(state, action) {
    return _couterReducer(state, action);
}