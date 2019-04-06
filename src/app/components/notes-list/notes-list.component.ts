import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../shared/models/note.model';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
    @Input() set notes(value: Note[]) {
        this.localNotes = value.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
    get notes(): Note[] {
        return this.localNotes;
    }

    @Output() updateNote: EventEmitter<Note> = new EventEmitter();
    @Output() removeNote: EventEmitter<Note> = new EventEmitter();

    private localNotes: Note[] = [];

    onUpdate(event) {
        this.updateNote.emit(event);
    }

    onRemove(event) {
        this.removeNote.emit(event);
    }
}
