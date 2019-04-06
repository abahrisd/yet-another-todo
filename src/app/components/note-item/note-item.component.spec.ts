import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NoteItemComponent } from './note-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Note } from '../../shared/models/note.model';

export class MockElementRef {
    nativeElement = {
        focus() {}
    };
}

describe('NoteItemComponent', () => {
    let component: NoteItemComponent;
    let fixture: ComponentFixture<NoteItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NoteItemComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NoteItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.note = new Note();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('onLabelDblClick change value isNoteEditing to true', () => {
        component.editInput = new MockElementRef();
        component.isNoteEditing = false;

        expect(component.onLabelDblClick()).toEqual(undefined);
        expect(component.isNoteEditing).toEqual(true);
    });

    it('onLabelDblClick set focus on editInput', fakeAsync(() => {
        component.editInput = new MockElementRef();
        spyOn(component.editInput.nativeElement, 'focus');

        expect(component.onLabelDblClick()).toEqual(undefined);
        tick();
        expect(component.editInput.nativeElement.focus).toHaveBeenCalled();
    }));

    it('editCancel set isNoteEditing to false', () => {
        component.isNoteEditing = true;

        expect(component.editCancel()).toEqual(undefined);
        expect(component.isNoteEditing).toEqual(false);
    });

    it('onToggleCompletion toggle note.isCompleted', () => {
        component.note.isCompleted = false;

        expect(component.onToggleCompletion()).toEqual(undefined);
        expect(component.note.isCompleted).toEqual(true);
    });

    it('onToggleCompletion call updateNote.emit', () => {
        spyOn(component.updateNote, 'emit');

        expect(component.onToggleCompletion()).toEqual(undefined);
        expect(component.updateNote.emit).toHaveBeenCalled();
        expect(component.updateNote.emit).toHaveBeenCalledWith(component.note);
    });

    it('onRemoveNote call removeNote.emit', () => {
        spyOn(component.removeNote, 'emit');

        expect(component.onRemoveNote()).toEqual(undefined);
        expect(component.removeNote.emit).toHaveBeenCalled();
        expect(component.removeNote.emit).toHaveBeenCalledWith(component.note);
    });

    it('editUpdate call onRemoveNote() if value.length === 0', () => {
        spyOn(component, 'onRemoveNote');

        expect(component.editUpdate('')).toEqual(undefined);
        expect(component.onRemoveNote).toHaveBeenCalled();
        expect(component.onRemoveNote).toHaveBeenCalledWith();
    });

    it('editUpdate set note.title = value if value.length !== 0', () => {
        const value = '' + Math.random();

        expect(component.editUpdate(value)).toEqual(undefined);
        expect(component.note.title).toEqual(value);
    });

    it('editUpdate set isNoteEditing = false if value.length !== 0', () => {
        const value = '' + Math.random();

        expect(component.editUpdate(value)).toEqual(undefined);
        expect(component.isNoteEditing).toEqual(false);
    });

    it('editUpdate call updateNote.emit if value.length !== 0', () => {
        const value = '' + Math.random();

        spyOn(component.updateNote, 'emit');
        expect(component.editUpdate(value)).toEqual(undefined);
        expect(component.updateNote.emit).toHaveBeenCalled();
        expect(component.updateNote.emit).toHaveBeenCalledWith(component.note);
    });
});
