import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Note } from '../../shared/models/note.model';

@Component({
    selector: 'app-note-item',
    templateUrl: './note-item.component.html',
    styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
    @ViewChild('editInput') editInput: ElementRef;

    @Input() note: Note;

    @Output() updateNote: EventEmitter<Note> = new EventEmitter();
    @Output() removeNote: EventEmitter<Note> = new EventEmitter();

    isNoteEditing = false;

    onLabelDblClick() {
        this.isNoteEditing = true;
        setTimeout(() => {
            this.editInput.nativeElement.focus();
        });
    }

    onToggleCompletion() {
        this.note.isCompleted = !this.note.isCompleted;
        this.updateNote.emit(this.note);
    }

    onRemoveNote() {
        this.removeNote.emit(this.note);
    }

    editUpdate(value) {
        if (value.length === 0) {
            return this.onRemoveNote();
        }

        this.note.title = value;
        this.isNoteEditing = false;
    }

    editCancel() {
        this.isNoteEditing = false;
    }
}
