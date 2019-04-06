import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListComponent } from './notes-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Note } from '../../shared/models/note.model';

describe('NotesListComponent', () => {
    let component: NotesListComponent;
    let fixture: ComponentFixture<NotesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotesListComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('onUpdate call updateNote.emit', () => {
        const event = new Note();
        spyOn(component.updateNote, 'emit');
        expect(component.onUpdate(event)).toEqual(undefined);
        expect(component.updateNote.emit).toHaveBeenCalled();
        expect(component.updateNote.emit).toHaveBeenCalledWith(event);
    });

    it('onRemove call removeNote.emit', () => {
        const event = new Note();
        spyOn(component.removeNote, 'emit');
        expect(component.onRemove(event)).toEqual(undefined);
        expect(component.removeNote.emit).toHaveBeenCalled();
        expect(component.removeNote.emit).toHaveBeenCalledWith(event);
    });

    it('onRemove call removeNote.emit', () => {
        const notes = [{ title: 'a' }, { title: 'c' }, { title: 'b' }];
        const notesResult = [{ title: 'c' }, { title: 'b' }, { title: 'a' }];
        component.notes = notes;
        expect(component.notes).toEqual(notesResult);
    });
});
