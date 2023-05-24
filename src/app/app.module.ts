import { ENVIRONMENT_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './counter/state/counter.reducer';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CustomCounterComponent } from './counter/custom-counter/custom-counter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { appReducer } from './store/app.state';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterComponent,
    HomeComponent,
    NavBarComponent,
    ErrorPageComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
    //logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
