import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../shared/models/note.model';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

    @Input() notes: Note[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    onRemove(event) {
        console.log('onRemove', event);

    }

    onUpdate(event) {
        console.log('onUpdate', event);

    }

    onSetState(event) {
        console.log('onSetState', event);

    }


}
