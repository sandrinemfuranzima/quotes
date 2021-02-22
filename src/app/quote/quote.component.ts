import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() authorName: QuoteFormComponent | undefined;
  @Input() quote: any;
  @Input() submitByName: any;
  @Input() quoteUpdate: QuoteFormComponent | undefined;

  Id = 7;

  quotes = [
    new Quotes(
      1,
      'Ray Goforth',
      'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.',
      'Sandrine',
      new Date(2021, 2, 18),
      0,
      0
    ),
    new Quotes(
      2,
      'Albert Einstein',
      'Try not to become a man of success. Rather become a man of value.',
      'Sandrine',
    new Date(2021, 2, 29),
      0,
      0
    ),
    new Quotes(
      3,
      'Barack Obama',
      'The real test is not whether you avoid this failure, because you will not.It is whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.',
      'Sandrine',
      new Date(2021,3,17),
      0,
      0
    ),
    new Quotes(
      4,
      'Winston Churchill',
      'Never give in except to convictions of honor and good sense.',
      'Sandrine',
    new Date(2021, 7, 9),
      0,
      0
    ),

  ];
  showDesc(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    this.quotes[index].showBtn = !this.quotes [index].showBtn;
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  upVoter(index :any) {
    let i: number;
    i = this.quotes[index].upVote;
    i++;
    this.quotes[index].upVote = i;
    console.log('this i: ' + i);
  }

  dnVoter(index: string | number) {
    let j: number;
    j = this.quotes[index].dnVote;
    j++;
    this.quotes[index].dnVote = j;
  }

  highest(arr: number[]) {
    arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote);
    });
    const high = Math.max.apply(Math, arr);
    return high;
  }

  addQuote(quote: Quotes) {
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }

  constructor() { }

  ngOnInit() {

    const arr: number[] = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote - quote.dnVote);
    });
    const high = Math.max.apply(Math, arr);
  }

}
