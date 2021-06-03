import { Component, OnInit } from '@angular/core';
import { Client } from '../store/models/client.model';
import { DataService } from '../../app/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.scss']
})
export class DetailclientComponent implements OnInit {

  client = {} as Client;
  title: string;
  debut: any;
  fin: any;


  constructor(private translate: TranslateService,public service: DataService, private dataService: ApiService, private route: Router, private toastr: ToastrService, private dataservice: DataService, public router: ActivatedRoute) {




   }

   logout() {
   this.dataService.deleteToken();
   window.location.href = window.location.href;
   }

   ajouterMetier() {
    this.route.navigate(['/ajoutermetier']);
  }
 listingMetier() {
  this.route.navigate(['/listingmetier']);
 }

 envoiMail(){
  this.route.navigate(['/sendmail']);
 }

 listingCommentaire(){
  this.route.navigate(['/listingcommentaire']);
 }



 listingClient() {
  this.route.navigate(['/listingclient']);
 }

 listingPrestataire() {
  this.route.navigate(['/listingprestataire']);
 }

 ajouterOperation() {
  this.route.navigate(['/ajouteroperation']);
 }

 listingOperation() {
  this.route.navigate(['/listingoperation']);
 }


  dashboard() {
  this.route.navigate(['/dashboard']);
  }

   enregistrer() {

     this.dataservice.updateClient( this.client.id, this.client).then(res => {
      this.toastr.success('Bravo!', 'Validation avec succès');
      this.dataservice.sendEmail('user', this.client.nom, this.client.email);
    }, err => {
      this.toastr.error('Oups!', 'Erreur de validation');
    });
   }

   ngValidation(validation: string) {
     this.client.activation = validation;


 }


   ngOnInit() {

    this.router.queryParams.subscribe(params => {

      this.client.id = params.id;
      this.client.adresse = params.adresse;
      this.client.numeroTel = params.numeroTel;
      this.client.adresse = params.adresse;
      this.client.nom = params.nom;
      this.client.prenom = params.prenom;
      this.client.email = params.email;
      this.client.dateCreation = params.dateCreation;
      this.client.fonction = params.fonction;
      this.client.validation = params.validation;
      this.client.activation = params.activation;




});
 }







}

