import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from  'firebase/compat/app'
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
