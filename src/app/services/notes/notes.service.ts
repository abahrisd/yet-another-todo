import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class NotesService {
    constructor() {}

    createNote(data) {
        const newNote = { ...data, id: uuid() };
        console.log(' NotesService newNote', newNote);
        return of(newNote);
    }

    editNote(data) {
        return of(data);
    }

    removeNote(data) {
        return of(data);
    }
}
