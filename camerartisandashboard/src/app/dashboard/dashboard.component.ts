import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';
import { Commande } from '../store/models/commande.model';
import { Metier } from '../store/models/metier.model';
import { Utilisateur } from '../store/models/utilisateur.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  taillemetier=0;
  tailleutilisateur=0;
  taillecommande=0;
  commandes: Observable<Array<Commande>>;
  commandes$ = [];
  metiers: Observable<Array<Metier>>;
  metiers$ = [];

  utilisateurs: Observable<Array<Utilisateur>>;
  utilisateurs$ = [];

  constructor(public service: DataService,private dataService: ApiService, private route: ActivatedRoute,private router: Router) {
    this.fetchPostsUtilisateur();
    this.fetchPostsCommande();
    this.fetchPostsMetier();
  }

  ngOnInit() {

  }

  ajouterMetier(){
    this.router.navigate(['/ajoutermetier']);
  }
 listingMetier(){
  this.router.navigate(['/listingmetier']);
 }

 ajouterOperation(){
  this.router.navigate(['/ajouteroperation']);
 }

 listingOperation(){
  this.router.navigate(['/listingoperation']);
 }


 listingClient(){
  this.router.navigate(['/listingclient']);
 }

 listingCommande(){
  this.router.navigate(['/listingcommande']);
 }

 listingPrestataire(){
  this.router.navigate(['/listingprestataire']);
 }

 listingcommande(){
  this.router.navigate(['/listingcommande']);
 }

 dashboard(){
  this.router.navigate(['/dashboard']);
 }


  logout()
{
this.dataService.deleteToken();
window.location.href = window.location.href;
}

fetchPostsCommande(): void {
  this.commandes = this.service.getCommande();

  this.commandes.subscribe((resultat) => {
    this.commandes$=[];
    resultat.forEach((res) => {
       //  if (res.nomcommandes!=null){
          this.commandes$.push(res);

       //  }


    });

  this.taillecommande= this.commandes$.length;

  });
}

fetchPostsMetier(): void {
  this.metiers = this.service.getMetier();

  this.metiers.subscribe((resultat) => {
    this.metiers$=[];
    resultat.forEach((res) => {
       //  if (res.nommetiers!=null){
          this.metiers$.push(res);
       //  }


    });
    this.taillemetier= this.metiers$.length;
  });
}


fetchPostsUtilisateur(): void {
  this.utilisateurs = this.service.getUtilisateur();

  this.utilisateurs.subscribe((resultat) => {
    this.utilisateurs$=[];
    resultat.forEach((res) => {
       //  if (res.nomutilisateurs!=null){
          this.utilisateurs$.push(res);
       //  }


    });
    this.tailleutilisateur= this.utilisateurs$.length;
  });
}


}
