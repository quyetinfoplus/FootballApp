import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: any) {
    return localStorage[key];
  }

  remove(key: any) {
    localStorage.removeItem(key);
  }
}
