import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { ContentWrapperComponent } from './Components/content-wrapper/content-wrapper.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContainerComponent,
    ContentWrapperComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
