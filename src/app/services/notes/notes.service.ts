import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class NotesService {

    constructor() {
    }

    createNote(data) {
        return of({...data, id: uuid()});
    }

}
