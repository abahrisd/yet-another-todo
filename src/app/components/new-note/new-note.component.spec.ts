import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteComponent } from './new-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('NewNoteComponent', () => {
    let component: NewNoteComponent;
    let fixture: ComponentFixture<NewNoteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [NewNoteComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewNoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('onEnter emit addNote if form valid', () => {
        const title = 'mock';
        const mockResult = { title };
        component.inputForm.get('title').setValue(title);

        spyOn(component.addNote, 'emit');

        expect(component.onEnter()).toEqual(undefined);
        expect(component.addNote.emit).toHaveBeenCalled();
        expect(component.addNote.emit).toHaveBeenCalledWith(mockResult);
    });

    it('onEnter not emit addNote if form invalid', () => {
        spyOn(component.addNote, 'emit');

        expect(component.onEnter()).toEqual(undefined);
        expect(component.addNote.emit).not.toHaveBeenCalled();
    });

    it('onEnter call inputForm.reset if form valid', () => {
        component.inputForm.get('title').setValue('mock');

        spyOn(component.inputForm, 'reset');

        expect(component.onEnter()).toEqual(undefined);
        expect(component.inputForm.reset).toHaveBeenCalled();
        expect(component.inputForm.reset).toHaveBeenCalledWith();
    });
});
