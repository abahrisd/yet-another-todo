import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { NotesService } from './services/notes/notes.service';
import { ActionTypes, Add, AddSuccess, Edit, EditSuccess, Fail, GetLocalDataSuccess, Remove, RemoveSuccess } from './app.actions';

@Injectable()
export class NotesEffects {
    @Effect()
    addNote$ = this.actions$.pipe(
        ofType(ActionTypes.Add),
        map((action: Add) => action.payload),
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
        map((action: Edit) => action.payload),
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
        map((action: Remove) => action.payload),
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

    @Effect()
    initData$ = this.actions$.pipe(
        ofType(ActionTypes.GetLocalData),
        mergeMap(() =>
            this.notesService.getInitData().pipe(
                map(initData => {
                    return new GetLocalDataSuccess(initData);
                }),
                catchError(err => {
                    return of(new Fail(err));
                })
            )
        )
    );

    constructor(private actions$: Actions, private notesService: NotesService) {}
}
