import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { INote } from '../Interface/INote';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  AddNote(notedata: object): Observable<any> {

    return this.httpClient.post<INote>(`localhost:5268//api/Note/AddNote`, notedata);
  }
}
