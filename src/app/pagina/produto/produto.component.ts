import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  imageUrl: SafeResourceUrl;
  imageUrl1: SafeResourceUrl;
  imageUrl2: SafeResourceUrl;
  imageUrl3: SafeResourceUrl;
  imageUrl4: SafeResourceUrl;
  imageUrl5: SafeResourceUrl;
  imageUrl6: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/images/pecas.jpg');
    this.imageUrl1 = this.sanitizer.bypassSecurityTrustUrl('assets/images/celular.jpg');
    this.imageUrl2 = this.sanitizer.bypassSecurityTrustUrl('assets/images/computador.jpg');
    this.imageUrl3 = this.sanitizer.bypassSecurityTrustUrl('assets/images/pendrive.jpg');
    this.imageUrl4 = this.sanitizer.bypassSecurityTrustUrl('assets/images/fone-de-ouvido.jpg');
    this.imageUrl5 = this.sanitizer.bypassSecurityTrustUrl('assets/images/teclado.jpg');
    this.imageUrl6 = this.sanitizer.bypassSecurityTrustUrl('assets/images/mouse.jpg');
  }
}
