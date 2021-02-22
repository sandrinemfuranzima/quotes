import { Quote } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  isComplete: any;

  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  @Input() quote !: Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
