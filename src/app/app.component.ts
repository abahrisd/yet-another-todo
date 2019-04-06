import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Add, Edit, Remove } from './app.actions';
import { State } from './reducers';
import { Observable } from 'rxjs';
import { Note } from './shared/models/note.model';
import { Notes } from './shared/models/notes.interface';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    notes$: Observable<Note[]>;

    constructor(private store$: Store<State>) {
        this.notes$ = this.store$.select('notes').pipe(map((notes: Notes) => Object.values(notes)));
    }

    onAddNote(event) {
        console.log('onAddNote', event);
        this.store$.dispatch(new Add(event));
    }

    onUpdateNote(event) {
        this.store$.dispatch(new Edit(event));
    }

    onRemoveNote(event) {
        this.store$.dispatch(new Remove(event));
    }
}
