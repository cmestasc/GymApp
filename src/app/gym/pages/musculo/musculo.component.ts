import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-musculo',
  templateUrl: './musculo.component.html',
  styleUrls: ['./musculo.component.css']
})
export class MusculoComponent implements OnInit {
  musculo!:string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>this.musculo=res['musculo']);
  }

}
