import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Davis', 'Hello there!', 'Author: Davis'),
    new Quote('Davis', 'Hello there!', 'Author: Davis'),
  ];

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
