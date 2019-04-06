import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
    @Output() addNote: EventEmitter<string> = new EventEmitter<string>();
    inputForm: FormGroup;
    inputPlaceholder = 'What needs to be done?';

    constructor(private fb: FormBuilder) {
        this.inputForm = this.fb.group({
            title: new FormControl('', Validators.required)
        });
    }

    onEnter() {
        if (this.inputForm.valid) {
            this.addNote.emit(this.inputForm.value);
            this.inputForm.reset();
        }
    }
}
