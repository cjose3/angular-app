import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FlexLayoutModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
