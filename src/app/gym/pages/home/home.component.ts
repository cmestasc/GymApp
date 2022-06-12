import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario!: string;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuarioLocalStorage!;
  }

  logOut() {
    this.router.navigateByUrl('/auth');
    localStorage.clear();
  }

}
