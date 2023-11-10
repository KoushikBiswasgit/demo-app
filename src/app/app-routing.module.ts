import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { UploadTwoComponent } from './upload-two/upload-two.component';

const routes: Routes = [
  { path: 'ghg-factors-upload', component: HomeComponent },
  { path: 'lga-and-sc-summary-upload', component: UploadTwoComponent },
  { path: 'ghg-factors-list', component: TableComponent },
  { path: 'emissions-calculations', component: TableTwoComponent },
  { path: '', redirectTo: '/ghg-factors-upload', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/ghg-factors-upload' }, // Wildcard route (404)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
