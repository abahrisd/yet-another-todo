import { Injectable } from '@angular/core';
import { LSNotesName } from './local-storage.constants';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    setItem(key, value) {
        const data = this.getAllData();
        data[key] = value;
        localStorage.setItem(LSNotesName, JSON.stringify(data));
    }

    removeItem(key) {
        const data = this.getAllData();
        delete data[key];
        localStorage.setItem(LSNotesName, JSON.stringify(data));
    }

    getAllData() {
        const data = localStorage.getItem(LSNotesName) || '{}';
        return JSON.parse(data);
    }
}
