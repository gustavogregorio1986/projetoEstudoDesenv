import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/images/desenvolver.jpg');
  }
}
