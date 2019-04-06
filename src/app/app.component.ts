import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Add} from './app.actions';
import {State} from './reducers';
import {Observable} from 'rxjs';
import {Note} from './shared/models/note.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    notes$: Observable<Note[]>;

    constructor(private store$: Store<State>) {
        this.notes$ = this.store$.select('notes');
    }

    onAddNote(event) {
        console.log('onAddNote', event);
        this.store$.dispatch(new Add(event));
    }
}
