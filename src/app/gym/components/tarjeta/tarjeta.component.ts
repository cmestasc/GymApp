import { Component, Input, OnInit } from '@angular/core';
import { Musculo } from '../../interfaces/Musculo';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() musculo!: Musculo;

  constructor() { }

  ngOnInit(): void {
  }

}
