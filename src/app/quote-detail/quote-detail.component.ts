import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Quote} from '../quote';
import { from } from 'rxjs';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  upDownVotes: number;
  downUpVotes: number;

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  upDownVote = 0;
  downUpVote = 0;
  constructor() {
    this.upDownVotes = 0;
    this.downUpVotes = 0;
   }
   upVote(): boolean {
     this.upDownVotes += 1;
     return false;
   }
   downVote(): boolean {
     this.downUpVotes += 1;
     return false;
   }

   quoteDelete(complete: boolean ) {
    this.isComplete.emit(complete);
  }
  ngOnInit() {
  }

}
