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
import { CustomerAreaComponent } from './customer-area/customer-area.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'gallery', component:GalleryComponent },
  { path:'price-list', component:PriceListComponent },
  { path:'customer-area', component:CustomerAreaComponent},
  { path:'add-application', component:AddApplicationComponent },
  { path:'review-application', component:ReviewApplicationComponent }, 
  { path:'about', component:AboutComponent },
  { path:'contact', component:ContactComponent },
  { path:'login', component:LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
