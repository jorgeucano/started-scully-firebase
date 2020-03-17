import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AngularFireModule } from '@angular/fire';

const firebase = {
  apiKey: "AIzaSyBsaAOe37sS_D_e0q-1Ib8Q4t8XoeUydo4",
  databaseURL: "https://villanuevand-labs.firebaseio.com",
  projectId: "villanuevand-labs",
  appId: "1:24781245035:web:a0d223c4cffc6c22397f2e"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    AngularFireModule.initializeApp(firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
