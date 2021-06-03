import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';

import { Prestataire } from '../store/models/prestataire.model';
import { AnimationStyleMetadata } from '@angular/animations';
import { SortEvent } from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TraductionService } from 'src/app/traduction.service';



@Component({
  selector: 'app-listingprestataire',
  templateUrl: './listingprestataire.component.html',
  styleUrls: ['./listingprestataire.component.scss']
})
export class ListingprestataireComponent implements OnInit {

  taillemetier=0;
  tailleutilisateur=0;
  taillecommande=0;
  prestataires: Observable<Array<Prestataire>>;
  prestataires$ = [];
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(private traduction: TraductionService, private toastr: ToastrService,private SpinnerService: NgxSpinnerService,private translate: TranslateService,public service: DataService,private dataService: ApiService, private route: ActivatedRoute,private router: Router) {

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

 listingCommentaire(){
  this.router.navigate(['/listingcommentaire']);
 }

 ajouterOperation(){
  this.router.navigate(['/ajouteroperation']);
 }

 listingCommande(){
  this.router.navigate(['/listingcommande']);
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

 envoiMail(){
  this.router.navigate(['/sendmail']);
 }


  logout()
{
this.dataService.deleteToken();
window.location.href = window.location.href;
}


fetchPosts(): void {
  this.prestataires = this.service.getPrestataire();

  this.prestataires.subscribe((resultat) => {
    this.prestataires$=[];
    resultat.forEach((res) => {
       //  if (res.nomprestataires!=null){
        
          this.SpinnerService.show();
          this.traduction.fetchUrl(res.prestation, 'fr',this.translate.getBrowserLang()).subscribe((resultat:any)=>{

            res.prestation =decodeURI(resultat.message);
            this.prestataires$.push(res);
            this.SpinnerService.hide();

             })

       //  }


    });
  });
}

supprimerPrestataire(prestataire:any){
  this.SpinnerService.show();
  this.service.deletePrestataire(prestataire.cle).then(resul=>{
     this.service.deleteUtilisateur(prestataire.cle).then(res=>{
      this.toastr.success('OK', 'Suppression avec succès');
      this.SpinnerService.hide();
     },(error:any)=>{

      this.SpinnerService.hide();
      this.toastr.error('Oups!', 'Erreur de suppression');
     })
  },err=>{
    
    this.SpinnerService.hide();
    this.toastr.error('Oups!', 'Erreur de suppression');
  })
 }


detailPrestataire(form: any) {
  this.router.navigate(['/detailprestataire'], {queryParams:
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


onTableDataChange(event:any){
  this.page = event;
  this.fetchPosts();
}

onTableSizeChange(event:any): void {
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
