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

export interface State {
  notes: Note[];
}

export const reducers: ActionReducerMap<State> = {
    notes: notesReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export function notesReducer(state = [], action: Action) {
    console.log('notesReducer', state);

    return state;
}