import { Component, OnInit, TemplateRef, Input, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';
import { Metier } from './../store/models/metier.model';
import { Operation } from './../store/models/operation.model';
import {Task} from './../store/models/task.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouteroperation',
  templateUrl: './ajouteroperation.component.html',
  styleUrls: ['./ajouteroperation.component.scss']
})
export class AjouteroperationComponent implements OnInit {

  tasks: Array<Task> = [];
  menu: string;
  nom: string;
  prst: string = '';
  tarif: number=0;
  description: string;
  sousmenu =[];
  lesmetiers: Array<any> = [];
  metier = {} as Metier;
  operation = {} as Operation;

  constructor( private toastr: ToastrService,private SpinnerService: NgxSpinnerService, public service: DataService, private dataService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.service.getMetier().subscribe(res => {
      this.lesmetiers =res;

   });
  }

  changeSuit(){

  }

  changeMetier(event){
    const value = event.target.value;
    this.lesmetiers.forEach(element =>{

      if (element.cle===value){
        this.operation.metier =value;
        this.sousmenu =element.sousmenu;

      }
    })

  }

  listingCommentaire(){
    this.router.navigate(['/listingcommentaire']);
   }
  

  ajouterMetier() {
    this.router.navigate(['/ajoutermetier']);
  }
 listingMetier() {
  this.router.navigate(['/listingmetier']);
 }

 ajouterOperation(){
  this.router.navigate(['/ajouteroperation']);
 }

 listingOperation(){
  this.router.navigate(['/listingoperation']);
 }

 listingPrestataire(){
  this.router.navigate(['/listingprestataire']);
 }

 listingClient(){
  this.router.navigate(['/listingclient']);
 }
 listingCommande(){
  this.router.navigate(['/listingcommande']);
 }


 listingcommande() {
  this.router.navigate(['/listingcommande']);
 }

 dashboard() {
  this.router.navigate(['/dashboard']);
 }


  logout() {
this.dataService.deleteToken();
window.location.href = window.location.href;
}

public onOptionsSelected(event) {
  const val= event.target.value;
  this.prst = val;

}

enregistrer() {
  this.operation.nom =this.prst;
  this.operation.tarif =this.tarif;
  this.operation.detail = this.tasks;
  this.operation.description = this.description;
  this.SpinnerService.show();
  this.service.addOperationId(this.prst, this.operation).then(res => {
    this.SpinnerService.hide();
    this.tasks = null;
    this.nom = '';
    this.tarif =0;
    this.description='';
    this.toastr.success('Alert', 'Ajout avec succès');


  }, err=>{

    this.SpinnerService.hide();
    this.toastr.error('Alert', 'Une erreur est survenue, merci de réessayer');
  });

}

// Gestion du sous menu


clearToDo() {
  const do_delete = confirm('Voulez vous vraiement supprimer?');
  if (do_delete) {
    this.tasks.splice(0);
  }
}

addTask(input) {
  const value = input.value;
  input.value = '';
  this.tasks.push(
    {
      title: value,
      is_canceled: false
    });
}

cancelTask(idx: number) {
  if (this.tasks[idx].is_canceled) {
    this.tasks[idx].is_canceled = false;
  } else {
    this.tasks[idx].is_canceled = true;
  }
}

deleteTask(idx: number) {
  const do_delete = confirm('Voulez vous vraiment supprimer?');
  if (do_delete) {
    this.tasks.splice(idx, 1);
  }
}

editTask(idx: number) {
  const title = this.tasks[idx].title;
  const result = prompt('Modifier le titre', title);
  if (result !== null && result !== '') {
    this.tasks[idx].title = result;
  }
}


}
