import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { NavbarComponent } from './theme/navbar/navbar.component';
import { SpinnerComponent } from './theme/spinner/spinner.component';
import { FooterComponent } from './theme/footer/footer.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { UploadTwoComponent } from './upload-two/upload-two.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    SidebarComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    TableTwoComponent,
    UploadTwoComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
