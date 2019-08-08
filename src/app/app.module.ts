import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {HttpClientModule} from '@angular/common/http';
import {GetDataService} from './services/get-data.service';
import {DeferLoadDirective} from './directives/defer-load.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DeferLoadDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
