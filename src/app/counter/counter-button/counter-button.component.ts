import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment123, reset } from 'src/app/counter/state/counter.action';
import { counterState } from 'src/app/counter/state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

 
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.store.dispatch(increment123());
  }

  onDecrement() {
     this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

}
