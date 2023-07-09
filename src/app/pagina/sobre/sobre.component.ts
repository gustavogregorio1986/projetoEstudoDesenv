import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  message = 'Desenvolver profissionalmente';
  canEdit = false;
  contador: number = 0;

  incrementar(){
     this.contador++;
  }

  decrementar(){
    this.contador--;
 }

 onEditClick() {
   this.canEdit = !this.canEdit;
   if (this.canEdit) {
     this.message = 'Trabalhar com backend';
   } else {
     this.message = "Trabalhar com fronend";
   }
 }
}
