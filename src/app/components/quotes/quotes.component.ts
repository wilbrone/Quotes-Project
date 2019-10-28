import { Component, OnInit, Input } from '@angular/core';
import { Directive,ElementRef,HostListener } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit { 


  constructor() { }
  // quotation:Quatation = new Quatation(quotation.quote);
  quotation: Quatation[] = [];

  // new_quotation = new Quatation();

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