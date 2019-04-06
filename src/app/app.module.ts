import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {NewNoteComponent} from './components/new-note/new-note.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import {EffectsModule} from '@ngrx/effects';
import {NotesEffects} from './app.effects';

declare global {
    interface Window {
        test: any;
        store: any;
    }
}

@NgModule({
    declarations: [
        AppComponent,
        NewNoteComponent,
        NotesListComponent,
        NoteItemComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        EffectsModule.forRoot([NotesEffects]),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        StoreModule.forRoot(reducers)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
