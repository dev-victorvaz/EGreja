import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nome: string = "";
  foto: string = "";

  constructor(
    public authService: AuthService,
    public afs: AngularFireAuth,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
    ) { }

  ngOnInit(): void {
  }
}
