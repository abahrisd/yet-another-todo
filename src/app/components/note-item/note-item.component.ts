import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Note } from '../../shared/models/note.model';

@Component({
    selector: 'app-note-item',
    templateUrl: './note-item.component.html',
    styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
    @ViewChild('editInput') editInput: ElementRef;

    @Input() note: Note = new Note();

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
        if (!this.isNoteEditing) {
            return;
        }

        const newValue = value.trim();

        if (newValue.length === 0) {
            this.onRemoveNote();
            return;
        }

        this.note.title = newValue;
        this.isNoteEditing = false;
        this.updateNote.emit(this.note);
    }

    editCancel() {
        this.isNoteEditing = false;
    }
}
