import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Musculo } from '../../interfaces/Musculo';
import { ApiService } from '../../services/api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-musculo',
  templateUrl: './musculo.component.html',
  styleUrls: ['./musculo.component.css']
})
export class MusculoComponent implements OnInit {
  musculoNombre:string = "";
  musculo:Musculo = {
    ID_musculo: undefined,
    musculo: undefined
  }

  constructor(private activatedRoute: ActivatedRoute, private apiService:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=> {
      this.musculoNombre=res['musculo']
    });
    this.apiService.getMusculoID(this.musculoNombre)
    .subscribe(res=>{
      this.musculo = res
    });
    
  
  }

}
