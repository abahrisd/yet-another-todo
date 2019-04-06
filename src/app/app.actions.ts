import { Action } from '@ngrx/store';
import { Note } from './shared/models/note.model';
import { Notes } from './shared/models/notes.interface';

export enum ActionTypes {
    Add = '[Note Component] Add',
    AddSuccess = '[Note Component] AddSuccess',
    Remove = '[Note Component] Remove',
    RemoveSuccess = '[Note Component] RemoveSuccess',
    Edit = '[Note Component] Edit',
    EditSuccess = '[Note Component] EditSuccess',
    GetLocalData = '[Note Component] GetLocalData',
    GetLocalDataSuccess = '[Note Component] GetLocalDataSuccess',
    Fail = '[Note Component] Fail'
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
    constructor(public payload: Note) {}
}
export class AddSuccess implements Action {
    readonly type = ActionTypes.AddSuccess;
    constructor(public payload: Note) {}
}

export class Remove implements Action {
    readonly type = ActionTypes.Remove;
    constructor(public payload: { id: string }) {}
}
export class RemoveSuccess implements Action {
    readonly type = ActionTypes.RemoveSuccess;
    constructor(public payload: { id: string }) {}
}

export class Edit implements Action {
    readonly type = ActionTypes.Edit;
    constructor(public payload: Note) {}
}
export class EditSuccess implements Action {
    readonly type = ActionTypes.EditSuccess;
    constructor(public payload: Note) {}
}

export class GetLocalData implements Action {
    readonly type = ActionTypes.GetLocalData;
}
export class GetLocalDataSuccess implements Action {
    readonly type = ActionTypes.GetLocalDataSuccess;
    constructor(public payload: Notes) {}
}

export class Fail implements Action {
    readonly type = ActionTypes.Fail;
    constructor(public payload: any) {}
}

export type TodoActionsUnion = Add | Remove | Edit | AddSuccess | RemoveSuccess | EditSuccess | GetLocalData | GetLocalDataSuccess;
