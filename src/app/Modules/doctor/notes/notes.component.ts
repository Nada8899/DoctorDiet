import { Component } from '@angular/core';
import { NoteService } from '../Service/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
constructor(private noteservice:NoteService, private _router:Router){

}
}
