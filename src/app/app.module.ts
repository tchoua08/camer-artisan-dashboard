import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UtilisateurReducer } from './store/reducers/utilisateur.reducer';
import { PrestataireReducer } from './store/reducers/prestataire.reducer';
import { ClientReducer } from './store/reducers/client.reducer';
import { DataService } from '../app/data.service';

import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { AjoutermetierComponent } from './ajoutermetier/ajoutermetier.component';
import { ListingmetierComponent } from './listingmetier/listingmetier.component';
import { AjouteroperationComponent } from './ajouteroperation/ajouteroperation.component';
import { ListingoperationComponent } from './listingoperation/listingoperation.component';
import { ListingprestataireComponent } from './listingprestataire/listingprestataire.component';
import { ListingclientComponent } from './listingclient/listingclient.component';

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListingcommandeComponent } from './listingcommande/listingcommande.component';

import {DetailCommandeComponent } from './detailcommande/detailcommande.component';

import {DetailprestataireComponent } from './detailprestataire/detailprestataire.component';
import {DetailclientComponent } from './detailclient/detailclient.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ListingcommentaireComponent } from './listingcommentaire/listingcommentaire.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { EnvoimailComponent } from './envoimail/envoimail.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    DetailCommandeComponent,
    DetailprestataireComponent,
    DetailclientComponent,
    AjoutermetierComponent,
    ListingmetierComponent,
    AjouteroperationComponent,
    ListingoperationComponent,
    ListingprestataireComponent,
    ListingclientComponent,
    ListingcommandeComponent,
    ListingcommentaireComponent,
    EnvoimailComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    PaginatorModule,
    AutoCompleteModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
     StoreModule.forRoot({
      user: UtilisateurReducer,
      prestataire:PrestataireReducer,
      client : ClientReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AngularFireStorageModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}