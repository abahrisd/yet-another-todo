import { Action } from '@ngrx/store';
import { Note } from './shared/models/note.model';

export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export enum ActionTypes {
    Add = '[Note Component] Add',
    AddSuccess = '[Note Component] AddSuccess',
    Remove = '[Note Component] Remove',
    RemoveSuccess = '[Note Component] RemoveSuccess',
    Edit = '[Note Component] Edit',
    EditSuccess = '[Note Component] EditSuccess',
    Complete = '[Note Component] Complete',
    CompleteSuccess = '[Note Component] CompleteSuccess',
    Incomplete = '[Note Component] Incomplete',
    IncompleteSuccess = '[Note Component] IncompleteSuccess',
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

export class Complete implements Action {
    readonly type = ActionTypes.Complete;
    constructor(public payload: { id: string }) {}
}
export class CompleteSuccess implements Action {
    readonly type = ActionTypes.CompleteSuccess;
    constructor(public payload: { id: string }) {}
}

export class Incomplete implements Action {
    readonly type = ActionTypes.Incomplete;
    constructor(public payload: { id: string }) {}
}
export class IncompleteSuccess implements Action {
    readonly type = ActionTypes.IncompleteSuccess;
    constructor(public payload: { id: string }) {}
}

export class Fail implements Action {
    readonly type = ActionTypes.Fail;
    constructor(public payload: any) {}
}
/*export class Success implements Action {
    readonly type = ActionTypes.Success;
}*/

export type TodoActionsUnion = Add | Remove | Edit | Complete | Incomplete | AddSuccess | RemoveSuccess | EditSuccess | CompleteSuccess | IncompleteSuccess;
