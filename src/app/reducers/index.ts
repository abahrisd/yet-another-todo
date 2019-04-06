import {
    Action,
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {Note} from '../shared/models/note.model';
import {ActionTypes, TodoActionsUnion} from '../app.actions';

export interface State {
  notes: Note[];
}

export const reducers: ActionReducerMap<State> = {
    notes: notesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export function notesReducer(state = [], action: TodoActionsUnion) {
    console.log('notesReducer', state);

    const newState = [ ...state];

    switch (action.type) {
        /*case ActionTypes.Add:
            console.log('ADD!!', action);
            newState.push(action.payload);
            break;*/
        case ActionTypes.AddSuccess:
            console.log('AddSuccess', action);
            newState.push(action.payload);
            break;
        default:
            console.log('default redicer case', );
    }

    window.store = newState;

    return newState;
}
