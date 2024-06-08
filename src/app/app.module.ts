import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SearchModule} from "./search/search.module";
import {BookListModule} from "./book-list/book-list.module";
import {LoginModule} from "./login/login.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SearchModule,
    BookListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
