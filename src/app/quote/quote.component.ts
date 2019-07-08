import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Quote by:- Davis', 'Example quote', new Date()),
  ];
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  toggleDetails(index) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
