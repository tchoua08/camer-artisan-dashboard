import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';

import { Operation } from '../store/models/operation.model';
import { AnimationStyleMetadata } from '@angular/animations';




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

  constructor(public service: DataService,private dataService: ApiService, private route: ActivatedRoute,private router: Router) {

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

supprimerOperation(op:any){

  this.service.deleteOperation(op.cle).then(res=>{

  },err=>{

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
