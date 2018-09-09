import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SaveitemComponent } from './saveitem/saveitem.component';
import { ItemService } from './itemservice/item.service';
import { ListitemsComponent } from './listitems/listitems.component';


@NgModule({
  declarations: [
    AppComponent,
    SaveitemComponent,
    ListitemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
