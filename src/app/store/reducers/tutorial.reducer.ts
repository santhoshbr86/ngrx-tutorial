import { Action } from '@ngrx/store';
import { Tutorial } from "../../models/tutorial.model";
import * as tutorialActions from '../actions/tutorial.actions';
import { adapter } from '../entities/tutorial.adapter';

export interface TutorialState{
    entities:{[id:number]:Tutorial},
    loading:boolean,
}

export const initalState: TutorialState = adapter.getInitialState({
    entities:[],
    loading:false
});

export function reducer(state: TutorialState = initalState, action?: tutorialActions.Actions){
    switch(action.type){
        case tutorialActions.LOAD_TUTORIAL:
            return { ...state, 
                    loading:true
            };
        case tutorialActions.LOAD_TUTORIAL_SUCCESS:
            const tutorials = action.payload;
            const entities = tutorials.data.reduce(
            (entities:{[id:number]:any}, tutorial) => {
                return {
                    ...entities,
                    [tutorial._id]:tutorial
                };
            },
            {
                ...state.entities,
            });
            return {
                ...state,
                loading:false,
                entities
            };
        // case tutorialActions.ADD_TUTORIAL: 
        //     return {...state, loading:false}
        // case tutorialActions.REMOVE_TUTORIAL: 
        //   return { ...state };
        default :
            return state;
    }
}