import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';

import { Client } from '../store/models/client.model';
import { AnimationStyleMetadata } from '@angular/animations';
import { SortEvent } from 'primeng/api';






@Component({
  selector: 'app-listingclient',
  templateUrl: './listingclient.component.html',
  styleUrls: ['./listingclient.component.scss']
})
export class ListingclientComponent implements OnInit {

  taillemetier = 0;
  tailleutilisateur = 0;
  taillecommande = 0;
  clients: Observable<Array<Client>>;
  clients$ = [];
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(public service: DataService, private dataService: ApiService, private route: ActivatedRoute, private router: Router) {

    this.fetchPosts();
  }

  ngOnInit() {

  }

  ajouterMetier() {
    this.router.navigate(['/ajoutermetier']);
  }
 listingMetier() {
  this.router.navigate(['/listingmetier']);
 }

 ajouterOperation() {
  this.router.navigate(['/ajouteroperation']);
 }

 listingOperation() {
  this.router.navigate(['/listingoperation']);
 }


 listingClient() {
  this.router.navigate(['/listingclient']);
 }

 listingPrestataire() {
  this.router.navigate(['/listingprestataire']);
 }

 listingCommande() {

  this.router.navigate(['/listingcommande']);
 }

 dashboard() {
  this.router.navigate(['/dashboard']);
 }

 detailclient(form: any) {
  this.router.navigate(['/detailclient'], {queryParams:
            {
    id : form.id,
    nom: form.nom,
    prenom: form.prenom,
    numeroTel: form.numeroTel,
    photoprofil: form.photoprofil,
    email: form.email,
    adresse: form.adresse,
    dateCreation: form.dateCreation,
    validation: form.validation,
    activation: form.activation,
    fonction: form.fonction

            }});

}


  logout() {
this.dataService.deleteToken();
window.location.href = window.location.href;
}


fetchPosts(): void {
  this.clients = this.service.getClient();

  this.clients.subscribe((resultat) => {
    this.clients$ = [];
    resultat.forEach((res) => {
       //  if (res.nomclients!=null){
          this.clients$.push(res);
       //  }


    });
  });
}




onTableDataChange(event: any) {
  this.page = event;
  this.fetchPosts();
}

onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchPosts();
}

customSort(event: SortEvent) {
  event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
          result = -1;
      else if (value1 != null && value2 == null)
          result = 1;
      else if (value1 == null && value2 == null)
          result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
          result = value1.localeCompare(value2);
      else
          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
  });
}




}
