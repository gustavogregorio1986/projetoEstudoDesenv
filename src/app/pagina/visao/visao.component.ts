import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-visao',
  templateUrl: './visao.component.html',
  styleUrls: ['./visao.component.css']
})
export class VisaoComponent {

  visao: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){
    this.visao = this.sanitizer.bypassSecurityTrustUrl('assets/images/missao.png');
  }
}
