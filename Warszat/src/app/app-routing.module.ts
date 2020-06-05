import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceListComponent } from './price-list/price-list.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { RegisterComponent } from './register/register.component';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { ReviewPartsComponent } from './review-parts/review-parts.component';
import { ReviewApplicationWorkerComponent } from './review-application-worker/review-application-worker.component';
import { BrowseEmployeesComponent } from './browse-employees/browse-employees.component';
import { BrowseReportComponent } from './browse-report/browse-report.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'price-list', component: PriceListComponent },
  { path: 'add-application', component: AddApplicationComponent },
  { path: 'review-application', component: ReviewApplicationComponent },
  { path: 'add-parts', component: AddPartsComponent },
  { path: 'review-parts', component: ReviewPartsComponent },
  { path: 'review-application-worker', component: ReviewApplicationWorkerComponent },
  { path: 'browse-employees', component: BrowseEmployeesComponent},
  { path: 'browse-report', component: BrowseReportComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
