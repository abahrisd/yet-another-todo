import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestStore } from 'src/app/shared/mocks/test-store';
import { Add, Edit, Remove } from './app.actions';
import { Note } from './shared/models/note.model';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let store: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [{ provide: Store, useClass: TestStore }],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        store = TestBed.get(Store);
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('onAddNote call store$.dispatch', () => {
        const event = new Note();
        spyOn(store, 'dispatch');
        expect(component.onAddNote(event)).toEqual(undefined);
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith(new Add(event));
    });

    it('onUpdateNote call store$.dispatch', () => {
        const event = new Note();
        spyOn(store, 'dispatch');
        expect(component.onUpdateNote(event)).toEqual(undefined);
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith(new Edit(event));
    });

    it('onRemoveNote call store$.dispatch', () => {
        const event = new Note();
        spyOn(store, 'dispatch');
        expect(component.onRemoveNote(event)).toEqual(undefined);
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith(new Remove(event));
    });
});
