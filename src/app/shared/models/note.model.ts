import {NoteState} from './noteState.enum';

export class Note {
    id?: string;
    state: NoteState;
    constructor(public title = '') {
    }
}
