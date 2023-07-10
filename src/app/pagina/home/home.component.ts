import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private router: Router){
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl('assets/images/desenvolver.jpg');
  }

  navigateToHome() {
    this.router.navigate(['/']); // Navega para a página inicial (rota padrão)
  }
}
