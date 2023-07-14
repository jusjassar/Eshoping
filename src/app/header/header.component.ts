import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // string interpolation
  slogan:string ="Your one stop shop for everything."
  // vedio 15 property Binding;
  source:string="/assets/shopping.jpg"
}
