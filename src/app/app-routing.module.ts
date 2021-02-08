import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { AjoutermetierComponent } from './ajoutermetier/ajoutermetier.component';
import { ListingmetierComponent } from './listingmetier/listingmetier.component';
import { AjouteroperationComponent } from './ajouteroperation/ajouteroperation.component';
import { ListingoperationComponent } from './listingoperation/listingoperation.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{ path: 'ajoutermetier', component: AjoutermetierComponent,canActivate: [AuthguardGuard] },
{ path: 'listingmetier', component: ListingmetierComponent,canActivate: [AuthguardGuard] },

{ path: 'ajouteroperation', component: AjouteroperationComponent,canActivate: [AuthguardGuard] },
{ path: 'listingoperation', component: ListingoperationComponent,canActivate: [AuthguardGuard] },


]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }