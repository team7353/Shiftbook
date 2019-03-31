import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HighlightDirective } from './directives/highlight.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { shiftbook } from './shiftbook/shiftbook.component';
import { shiftbook-detail } from './shiftbook/shiftbook-detail/shiftbook-detail.component';
import { shiftbook-item } from './shiftbook/shiftbook-item/shiftbook-item.component';
import { shiftbook-list } from './shiftbook/shiftbook-list/shiftbook-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    shiftbook,
    shiftbook-detail,
    shiftbook-item,
    shiftbook-list
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
