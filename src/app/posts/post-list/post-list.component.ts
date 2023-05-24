import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../state/posts.state';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

}
