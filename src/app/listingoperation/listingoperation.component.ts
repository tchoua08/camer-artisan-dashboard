import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';

import { Operation } from '../store/models/operation.model';
import { AnimationStyleMetadata } from '@angular/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-listingoperation',
  templateUrl: './listingoperation.component.html',
  styleUrls: ['./listingoperation.component.scss']
})
export class ListingoperationComponent implements OnInit {

  taillemetier=0;
  tailleutilisateur=0;
  taillecommande=0;
  operations: Observable<Array<Operation>>;
  operations$ = [];
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(private translate: TranslateService,private toastr: ToastrService, private SpinnerService: NgxSpinnerService,public service: DataService,private dataService: ApiService, private route: ActivatedRoute,private router: Router) {

    this.fetchPosts();
  }

  ngOnInit() {

  }

  listingCommentaire(){
    this.router.navigate(['/listingcommentaire']);
   }
  

  ajouterMetier(){
    this.router.navigate(['/ajoutermetier']);
  }
 listingMetier(){
  this.router.navigate(['/listingmetier']);
 }

 listingCommande(){
  this.router.navigate(['/listingcommande']);
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
  this.operations = this.service.getOperation();

  this.operations.subscribe((resultat) => {
    this.operations$=[];
    resultat.forEach((res) => {
       //  if (res.nomoperations!=null){
          this.operations$.push(res);
       //  }


    });
  });
}


supprimerOperation(pres:any){
  this.SpinnerService.show();
  this.service.deleteOperation(pres.cle).then(res=>{

    this.SpinnerService.hide();
    this.toastr.success('Alert', 'Suppression avec succès');
  },err=>{

    this.SpinnerService.hide();
    this.toastr.error('Alert!', 'Une erreur est survenue, merci de réessayer');
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




}
