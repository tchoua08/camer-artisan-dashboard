import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';

import { Commentaire } from '../store/models/commentaire.model';
import { AnimationStyleMetadata } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { SortEvent } from 'primeng/api';
@Component({
  selector: 'app-listingcommentaire',
  templateUrl: './listingcommentaire.component.html',
  styleUrls: ['./listingcommentaire.component.scss']
})
export class ListingcommentaireComponent implements OnInit {

  taillemetier=0;
  tailleutilisateur=0;
  taillecommande=0;
  commentaires: Observable<Array<Commentaire>>;
  commentaires$ = [];
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

 listingCommentaire(){
  this.router.navigate(['/listingcommentaire']);
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
  this.commentaires = this.service.getCommentaires();

  this.commentaires.subscribe((resultat) => {
    this.commentaires$=[];
    resultat.forEach((res) => {
       //  if (res.nomcommentaires!=null){
          this.commentaires$.push(res);

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

 this.service.deleteCommentaire(com.cle).then(res=>{
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
