import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { counterState } from 'src/app/counter/state/counter.state';
import { Subscription, Observable } from 'rxjs'
import { getCounter } from 'src/app/counter/state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  counter : number;
  counter$ : Observable<counterState>;

  constructor(
    private state: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.counter$ = this.state.select(getCounter);

    // this.state.select('counter').subscribe((data) => {
    //    this.counter = data.counter;
    // })
  }

}
