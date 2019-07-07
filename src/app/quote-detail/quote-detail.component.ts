import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Quote} from '../quote';
import { from } from 'rxjs';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  upDownVotes: number;

  @Input() quote: Quote;

  upDownVote = 0;
  constructor() {
    this.upDownVotes = 0;
   }
   upVote(): boolean {
     this.upDownVotes += 1;
     return false;
   }
   downVote(): boolean {
     this.upDownVotes -= 1;
     return false;
   }

  ngOnInit() {
  }

}
