import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NotesService } from './services/notes/notes.service';
import { ActionTypes, AddSuccess, EditSuccess, Fail, RemoveSuccess, TodoActionsUnion } from './app.actions';

@Injectable()
export class NotesEffects {
    @Effect()
    addNote$ = this.actions$.pipe(
        ofType(ActionTypes.Add),
        map((action: TodoActionsUnion) => action.payload),
        mergeMap(data =>
            this.notesService.createNote(data).pipe(
                map(newNoteData => {
                    return new AddSuccess(newNoteData);
                }),
                catchError(err => {
                    return of(new Fail(err));
                })
            )
        )
    );

    @Effect()
    editNote$ = this.actions$.pipe(
        ofType(ActionTypes.Edit),
        map((action: TodoActionsUnion) => action.payload),
        mergeMap(data =>
            this.notesService.editNote(data).pipe(
                map(newNoteData => {
                    return new EditSuccess(newNoteData);
                }),
                catchError(err => {
                    return of(new Fail(err));
                })
            )
        )
    );

    @Effect()
    removeNote$ = this.actions$.pipe(
        ofType(ActionTypes.Remove),
        map((action: TodoActionsUnion) => action.payload),
        mergeMap(data =>
            this.notesService.removeNote(data).pipe(
                map(newNoteData => {
                    return new RemoveSuccess(newNoteData);
                }),
                catchError(err => {
                    return of(new Fail(err));
                })
            )
        )
    );

    constructor(private actions$: Actions, private notesService: NotesService) {}
}
