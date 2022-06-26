import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar-ejercicio',
  templateUrl: './confirmar-ejercicio.component.html',
  styleUrls: ['./confirmar-ejercicio.component.css']
})
export class ConfirmarEjercicioComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmarEjercicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit(): void {
}

borrar(){
this.dialogRef.close(true);
}
cerrar(){
this.dialogRef.close();
}
}
