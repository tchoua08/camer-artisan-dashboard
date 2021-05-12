import { Component, OnInit } from '@angular/core';
import { Commande } from '../store/models/commande.model';
import { DataService } from '../../app/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.scss'],
})
export class DetailCommandeComponent implements OnInit {

  commande = {} as Commande;
   title:string;
   debut:any;
   fin:any;


    constructor(public service: DataService,private dataService: ApiService,private routr: Router,private toastr: ToastrService, private dataservice:DataService, public router:ActivatedRoute) {





    }


   logout()
   {
   this.dataService.deleteToken();
   window.location.href = window.location.href;
   }


   listingformateur(){
    this.routr.navigate(['/listingformateur']);
  }
  listingorganisme(){
  this.routr.navigate(['/listingorganisme']);
  }

  listingcommande(){
  this.routr.navigate(['/listingcommande']);
  }

  dashboard(){
  this.routr.navigate(['/dashboard']);
  }

  ngOnInit() {}


   /* enregistrer(){

      this.dataservice.updateCommande( this.commande.commandeid,   this.commande).then(res=>{
        this.toastr.success('Bravo!', 'Sauvegarde avec succès');
        this.dataservice.sendEmail("commande", this.commande.nomorganisme,this.commande.emailorganisme);
      },err=>{
        this.toastr.error('Oups!', 'Erreur d\'enregistrement');
      })
    }

    ngValidation(validation: string) {
      this.commande.validation =validation;


  }


    ngOnInit() {

      this.router.queryParams.subscribe(params => {
        this.commande.organismeId=params["organismeId"];
        this.commande.formateurId=params["formateurId"];
        this.commande.nomformateur=params["nomformateur"];
        this.commande.emailformateur=params["emailformateur"];
        this.commande.numerotelformateur=params["numerotelformateur"];
        this.commande.nomorganisme=params["nomorganisme"];
        this.commande.emailorganisme=params["emailorganisme"];
        this.commande.adresseorganisme=params["adresseorganisme"];
        this.commande.adresseformateur=params["adresseformateur"];
        this.commande.numerotelephoneorganisme=params["numerotelephoneorganisme"];
        this.title=params["title"];
        this.debut=params["debut"];
        this.fin=params["fin"];
        this.commande.dateCreation=params["dateCreation"];
        this.commande.validation=params["validation"];
        this.commande.commandeid =params ["idcommande"];

  });
  }**/







}
