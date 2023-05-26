import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from '../state/posts.state';
import { updatePosts } from '../state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  post: Post;
  addPostsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store.select(getPostById, { id }).subscribe((post) => {
        this.post = post;
        this.addPostsForm = this.fb.group({
          title: [this.post?.title, Validators.required],
          description: [this.post?.description, Validators.required]
        })
      })
    })
  }


  updatePosts() {
    if (this.addPostsForm.valid) {
      const post: Post = {
        id: this.post.id,
        title: this.addPostsForm.value.title,
        description: this.addPostsForm.value.description,
      }
      console.log(post);
      this.store.dispatch(updatePosts({ post }))
    }
  }
}
