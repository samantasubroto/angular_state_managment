import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";


const routes: Routes = [
    {
        path: '',
        component: PostListComponent,
        children: [
            {path:'add-posts', component: AddPostComponent},
            {path:'edit/:id', component: EditPostComponent}
          ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('posts', postsReducer)
    ], 
    declarations: [
        PostListComponent,
        AddPostComponent,
        EditPostComponent
    ], 
    exports: []
})
export class PostModule {}