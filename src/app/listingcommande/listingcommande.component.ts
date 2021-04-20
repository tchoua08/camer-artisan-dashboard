import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';

import { Commande } from '../store/models/commande.model';
import { AnimationStyleMetadata } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-listingcommande',
  templateUrl: './listingcommande.component.html',
  styleUrls: ['./listingcommande.component.scss']
})
export class ListingcommandeComponent implements OnInit {

  taillemetier=0;
  tailleutilisateur=0;
  taillecommande=0;
  commandes: Observable<Array<Commande>>;
  commandes$ = [];
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(private toastr: ToastrService,public service: DataService,private dataService: ApiService, private route: ActivatedRoute,private router: Router) {

    this.fetchPosts();
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

fetchPosts(): void {
  this.commandes = this.service.getCommande();

  this.commandes.subscribe((resultat) => {
    this.commandes$=[];
    resultat.forEach((res) => {
       //  if (res.nomcommandes!=null){
          this.commandes$.push(res);
       //  }


    });
  });
}


    ngValidation(com:any , etat: string) {
      com.etat = etat;
     // alert(JSON.stringify(com));
      this.service.updateCommande(com.cle,com).then(res=>{
        this.toastr.success('Bravo!', 'état changé avec succès');
      },err=> {
        this.toastr.error('Oups!', 'Erreur de changement d\'etat');
      })

    }




btnSupprimer(com:any){

 this.service.deleteCommande(com.cle).then(res=>{
  this.toastr.success('Bravo!', 'Suppression avec succès');
 },err=>{
  this.toastr.error('Oups!', 'Erreur de suppression.Merci de réessayer');

 })

}


detailPrestataire(pres:any){

}

onTableDataChange(event:any){
  this.page = event;
  this.fetchPosts();
}

onTableSizeChange(event:any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchPosts();
}

listingCommande(){
  this.router.navigate(['/listingcommande']);
 }




}
