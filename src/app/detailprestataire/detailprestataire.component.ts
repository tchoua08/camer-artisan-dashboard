import { Component, OnInit } from '@angular/core';
import { Prestataire } from '../store/models/prestataire.model';
import { DataService } from '../../app/data.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-detailprestataire',
  templateUrl: './detailprestataire.component.html',
  styleUrls: ['./detailprestataire.component.scss']
})

export class DetailprestataireComponent implements OnInit {

  prestataire = {} as Prestataire;
  title: string;
  debut: any;
  fin: any;


  constructor(public service: DataService, private dataService: ApiService, private route: Router, private toastr: ToastrService, private dataservice: DataService, public router: ActivatedRoute) {




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

  ajouterOperation() {
   this.route.navigate(['/ajouteroperation']);
  }

  listingOperation() {
   this.route.navigate(['/listingoperation']);
  }

  listingClient() {
    this.route.navigate(['/listingclient']);
   }

   listingPrestataire() {
    this.route.navigate(['/listingprestataire']);
   }


   dashboard() {
   this.route.navigate(['/dashboard']);
   }

   enregistrer() {

     this.dataservice.updatePrestataire( this.prestataire.id,   this.prestataire).then(res => {
      this.toastr.success('Bravo!', 'Validation avec succès');
      this.dataservice.sendEmail('user', this.prestataire.nom, this.prestataire.email);
    }, err => {
      this.toastr.error('Oups!', 'Erreur de validation');
    });
   }

   ngValidation(validation: string) {
     this.prestataire.validation = validation;


 }


   ngOnInit() {
    this.router.queryParams.subscribe(params => {

      this.prestataire.id = params.id;
      this.prestataire.adresse = params.adresse;
      this.prestataire.nom = params.nom;
      this.prestataire.email = params.email;
      this.prestataire.numeroTel = params.numeroTel;
      this.prestataire.nom = params.nom;
      this.prestataire.prenom = params.prenom;
      this.prestataire.email = params.email;
      this.prestataire.dateCreation = params.dateCreation;
      this.prestataire.fonction = params.fonction;
      this.prestataire.validation = params.validation;
      this.prestataire.activation = params.activation;




});
 }







}
