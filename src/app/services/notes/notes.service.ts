import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Notes } from '../../shared/models/notes.interface';

@Injectable({
    providedIn: 'root'
})
export class NotesService {
    constructor(private localStorage: LocalStorageService) {}

    createNote(data) {
        const id = uuid();
        const newNote = { ...data, id };
        this.localStorage.setItem(id, newNote);
        return of(newNote);
    }

    editNote(data) {
        this.localStorage.setItem(data.id, data);
        return of(data);
    }

    removeNote(data) {
        this.localStorage.removeItem(data.id);
        return of(data);
    }

    getInitData(): Observable<Notes> {
        return of(this.localStorage.getAllData() || {});
    }
}
