import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShiftbookComponent } from './shiftbook/shiftbook.component';
import { ShiftbookDetailComponent } from './shiftbook/shiftbook-detail/shiftbook-detail.component';
import { ShiftbookItemComponent } from './shiftbook/shiftbook-item/shiftbook-item.component';
import { ShiftbookListComponent } from './shiftbook/shiftbook-list/shiftbook-list.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    ShiftbookComponent,
    ShiftbookDetailComponent,
    ShiftbookItemComponent,
    ShiftbookListComponent
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
