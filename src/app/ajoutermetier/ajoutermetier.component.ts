import { Component, OnInit, TemplateRef, Input, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../app/data.service';
import { Metier } from './../store/models/metier.model';
import {Task} from './../store/models/task.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-ajoutermetier',
  templateUrl: './ajoutermetier.component.html',
  styleUrls: ['./ajoutermetier.component.scss']
})
export class AjoutermetierComponent implements OnInit {

  tasks: Array<Task> = [];
  menu : string;
  metier = {} as Metier;
  constructor(private translate: TranslateService,  private toastr: ToastrService,private SpinnerService: NgxSpinnerService,public service: DataService, private dataService: ApiService, private route: ActivatedRoute, private router: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
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


listingPrestataire(){
  this.router.navigate(['/listingprestataire']);
 }

 listingClient(){
  this.router.navigate(['/listingclient']);
 }

 listingCommentaire(){
  this.router.navigate(['/listingcommentaire']);
 }


 listingCommande(){
  this.router.navigate(['/listingcommande']);
 }

 listingOperation(){
  this.router.navigate(['/listingoperation']);
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

enregistrer(){
  this.metier.menu =this.menu.toLowerCase();
  this.metier.sousmenu =this.tasks;
  this.SpinnerService.show();

  this.service.addMetierId(this.menu.toLowerCase(),this.metier).then(res=>{
    this.SpinnerService.hide();
    this.tasks=null;
    this.menu='';
    this.toastr.success('Alert', 'Ajout avec succès');
  }, err=>{
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
  if (this.tasks[idx].is_canceled){
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
