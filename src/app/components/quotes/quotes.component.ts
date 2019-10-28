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
    {quote:"try my name today for the sake of it", name:"wil", author:"Chap Man", showDetails:false},
    {quote:"try my name today for the sake of it", name:"wil", author:"Chap Man", showDetails:false}
  ];


  onSubmitting(data) {
    console.log(data);

    this.quotation.push(data);
    console.log(this.quotation);

    event.preventDefault();
  }


  toggleDetails(param){
    console.log(param);
    this.quotation[param].showDetails = !this.quotation[param].showDetails;
  };

  delQuote(isDelete, param){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete this qoute by ${this.quotation[param].name}?`)

      this.quotation[param].showDetails = false;

      if (toDelete){
        this.quotation.splice(param,1)
      }
    }
  }

  ngOnInit() {
  }

}


export class Quatation{
  author: string;
  name: string;
  quote: string;
  showDetails: boolean
}