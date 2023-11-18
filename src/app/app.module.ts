import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomDialogComponent } from './material-ui/custom-dialog/custom-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { FinalDialogComponent } from './material-ui/final-dialog/final-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    LayoutComponent,
    CustomDialogComponent,
    FinalDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
