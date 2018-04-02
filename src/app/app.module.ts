import { InterceptedHttpService } from './service/intercepted.http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SwHerosComponent } from './sw-heros/sw-heros.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SwHerosService } from './sw-heros/sw-heros.service';


@NgModule({
  declarations: [
    AppComponent,
    SwHerosComponent
],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptedHttpService,
      multi: true
    },
    SwHerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
