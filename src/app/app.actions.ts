import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = '[Note Component] Add',
    Remove = '[Note Component] Remove',
    Edit = '[Note Component] Edit',
    Complete = '[Note Component] Complete',
    Incomplete = '[Note Component] Incomplete',
}

export class Add implements Action {
    readonly type = ActionTypes.Add;
    constructor(public payload: { title: string }) {}
}
export class Remove implements Action {
    readonly type = ActionTypes.Remove;
    constructor(public payload: { id: string }) {}
}
export class Edit implements Action {
    readonly type = ActionTypes.Edit;
    constructor(public payload: { id: string, title: string }) {}
}
export class Complete implements Action {
    readonly type = ActionTypes.Complete;
    constructor(public payload: { id: string }) {}
}
export class Incomplete implements Action {
    readonly type = ActionTypes.Incomplete;
    constructor(public payload: { id: string }) {}
}
