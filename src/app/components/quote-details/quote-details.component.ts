import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quatation } from '.././quotes/quotes.component';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotation: Quatation;
  @Output() isDelete = new EventEmitter<boolean>();

  

  constructor() { }


  

  quoteDelete(deletes:boolean){
    this.isDelete.emit(deletes);
  }


  ngOnInit() {
  }

}
