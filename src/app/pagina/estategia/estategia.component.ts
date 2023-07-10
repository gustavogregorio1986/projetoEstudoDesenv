import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estategia',
  templateUrl: './estategia.component.html',
  styleUrls: ['./estategia.component.css']
})
export class EstategiaComponent implements OnInit{

  birthday = new Date(1988, 5, 4); // April 15, 1988 -- since month parameter is zero-based

  public pageTitle: string = '';

  constructor(){}

  ngOnInit(): void {

  }
}
