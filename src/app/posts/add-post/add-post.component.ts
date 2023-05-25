import { Component, OnInit } from '@angular/core';
import { Post } from '../state/posts.state'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { addPosts } from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{
 
  constructor(
    private fb : FormBuilder,
    private store: Store<AppState>
  ) 
  { }

  addPostsForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })
 
  ngOnInit(): void {
    //hrow new Error('Method not implemented.');
  }


  addPosts() {
    if(this.addPostsForm.valid) {
     const post: Post = {
         title : this.addPostsForm.value.title,
         description : this.addPostsForm.value.description,
      }
      console.log(post);
      this.store.dispatch(addPosts({post}))
    }
  }

}
