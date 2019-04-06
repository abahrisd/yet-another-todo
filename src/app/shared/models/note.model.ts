import {NoteState} from './noteState.enum';

export class Note {
    id?: string;
    isCompleted?: boolean;
    constructor(public title: string = '') {
    }
}
