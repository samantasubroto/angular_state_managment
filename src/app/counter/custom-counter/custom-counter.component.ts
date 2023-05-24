import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/counter/state/counter.action';
import { counterState } from 'src/app/counter/state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styles: ['button{background-color:red}']
})
export class CustomCounterComponent implements OnInit {

  customValue: number;
  constructor(
    private store: Store<{counter: counterState}>
  ) { }

  ngOnChanges() {
    console.log("calling from ng on changes");
  }
  

  ngOnInit(): void {
    console.log("calling from ng on init");
  }

  sumit() {
    this.store.dispatch(customIncrement({customValue: this.customValue}))
    console.log(this.customValue);
  }
}
