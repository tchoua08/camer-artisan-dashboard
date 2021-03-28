import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';

import { Client } from '../store/models/client.model';
import { AnimationStyleMetadata } from '@angular/animations';




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

 listingcommande() {
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




}
