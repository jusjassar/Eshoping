import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchstrEntered:string='Iphone'
  constructor() { }

  ngOnInit(): void {
    
  }
  searchStr(data:Event){
      console.log((<HTMLInputElement>data.target).value)
      this.searchstrEntered=(<HTMLInputElement>data.target).value
  }
}
