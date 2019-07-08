import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Davis', 'Example quote', 'Author: Example'),
  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteOffer}?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  toggleDetails(index) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.name = quoteLength + 1;
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit() {
  }

}
