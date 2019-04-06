import { Injectable } from '@angular/core';
import { Actions, Effect, ofType,  } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {NotesService} from './services/notes/notes.service';
import {ActionTypes, AddSuccess, TodoActionsUnion} from './app.actions';

@Injectable()
export class NotesEffects {

    @Effect()
    loadMovies$ = this.actions$
        .pipe(
            ofType(ActionTypes.Add),
            map( (action: TodoActionsUnion) => action.payload),
            mergeMap((data) => this.notesService.createNote(data)
                .pipe(
                    map((newNoteData) => {
                        console.log('EFF newNoteData', newNoteData);
                        return  new AddSuccess(newNoteData);
                    }),
                    catchError(() => EMPTY)
                ))
        );

    constructor(
        private actions$: Actions,
        private notesService: NotesService
    ) {}
}
