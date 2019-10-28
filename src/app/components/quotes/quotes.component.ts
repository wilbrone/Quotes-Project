import { Component, OnInit, Input } from '@angular/core';
import { Directive,ElementRef,HostListener } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit { 


  constructor() { }
  quotation: Quatation[] = [
    {quote:"try my name today for the sake of it", name:"wil", author:"Chap Man"}
  ];


  onSubmitting(data) {
    console.log(data);

    this.quotation.push(data);
    console.log(this.quotation);

    event.preventDefault();
  }

  ngOnInit() {
  }

}


export interface Quatation{
  author: string;
  name: string;
  quote: string
}