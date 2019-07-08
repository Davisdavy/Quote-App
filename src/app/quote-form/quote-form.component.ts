import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { from } from 'rxjs';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote('', '', new Date());

  @Output() addQuote = new EventEmitter<Quote>();
  quoteName: string;
  quoteAuthor: string;
  theQuote: any;
  quoteDate: Date = new Date();

  submitQuote() {
    this.theQuote = new Quote(this.quoteName, this.quoteAuthor, this.quoteDate);
    this.quoteAuthor = '';
    this.quoteName = '';
    this.addQuote.emit(this.theQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
