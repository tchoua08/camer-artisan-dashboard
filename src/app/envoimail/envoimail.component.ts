import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../app/data.service';
import {TranslateService} from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-envoimail',
  templateUrl: './envoimail.component.html',
  styleUrls: ['./envoimail.component.scss']
})
export class EnvoimailComponent implements OnInit {

  user: any;
  envoi= false;
  users: any[];
  objet: any = null;
  message: any = null;
  public loading = false;
   filtered: any[] = [];

  filteredUsersMultiple: any[];

  constructor(private toastr: ToastrService,private spinnerService: NgxSpinnerService,private translate: TranslateService,public io: DataService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }



  filterUserMultiple(event) {
    const query = event.query;
    this.io.getUtilisateur().subscribe(users => {

        this.filteredUsersMultiple = this.filterUser(query, users);
    });
}

filterUser(query, users: any[]): any[] {

    this.filtered = [];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            this.filtered.push(user);

        }
    }



    return this.filtered;
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

 envoiMail(){
  this.router.navigate(['/sendmail']);
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

 send()  {
  this.spinnerService.show();
 let contacts ="";
 this.users.forEach(element=>{
     contacts = contacts+ ""+element.email+","
 })
 contacts =contacts.substring(0,contacts.length-1);

  this.io.sendEmail(this.objet, this.message, contacts).subscribe(res=>{
    this.envoi = true;
    this.message = '';
    this.objet = "";
    this.users = null;
     this.toastr.success("OK", "Message envoyé avec succè");
     this.spinnerService.hide();

  },err=>{
  
    this.spinnerService.hide();
     this.toastr.error("OUPS", "Erreur d'envoi du message");

  })
 




}


}
