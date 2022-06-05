import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Musculo } from '../../interfaces/Musculo';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  musculos: any = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMusculos().subscribe(
      res => {
        this.musculos = res;
      },
      err => console.error(err),
    )
  }

}
