import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { Note } from '../shared/models/note.model';
import { ActionTypes, TodoActionsUnion } from '../app.actions';
import { Notes } from '../shared/models/notes.interface';

export interface State {
    notes: Notes;
}

export const reducers: ActionReducerMap<State> = {
    notes: notesReducer
};

export function notesReducer(state = {}, action: TodoActionsUnion) {
    const newState = { ...state };

    switch (action.type) {
        case ActionTypes.AddSuccess:
        case ActionTypes.EditSuccess:
            newState[action.payload.id] = action.payload;
            break;
        case ActionTypes.RemoveSuccess:
            delete newState[action.payload.id];
            break;
    }

    window.store = newState;

    return newState;
}
