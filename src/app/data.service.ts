import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

// Importation des Models
import { Client } from '../app/store/models/client.model';
import { Commande } from '../app/store/models/commande.model';
import { Commentaire } from '../app/store/models/commentaire.model';
import { Prestataire } from '../app/store/models/prestataire.model';
import { Utilisateur } from '../app/store/models/utilisateur.model';
import { Metier } from '../app/store/models/metier.model';
import { Operation } from '../app/store/models/operation.model';

import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { FileUpload } from '../app/store/models/upload.model';
import { finalize } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AngularFireStorage } from '@angular/fire/storage';
import { UtilisateurAddItemAction } from '../app/store/actions/utilisateur.action';
import { ClientAddItemAction } from '../app/store/actions/client.action';
import { PrestataireAddItemAction } from '../app/store/actions/prestataire.action';
import { MetierAddItemAction } from '../app/store/actions/metier.action';
import { OperationAddItemAction } from '../app/store/actions/operation.action';
import { AppState } from '../app/store/models/app-state.model';





@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dbClientPath = '/Client';
  private dbCommandePath = '/Commande';
  private dbPrestatairePath = '/Prestataire';
  private dbUtilisateurPath = '/Utilisateur';
  private dbMetierPath = '/Metier';
  private dbOperationPath = '/Operation';
  public userKey = '';
  public endpoint = "http://suitdesk.com/sendEmail.php";
  private db: AngularFirestore;

  private commentaireCollection: AngularFirestoreCollection<Commentaire>;


  private commandeCollection: AngularFirestoreCollection<Commande>;

  private clientCollection: AngularFirestoreCollection<Client>;

  private prestataireCollection: AngularFirestoreCollection<Prestataire>;

  private utilisateurCollection: AngularFirestoreCollection<Utilisateur>;

  private metierCollection: AngularFirestoreCollection<Metier>;
  private operationCollection: AngularFirestoreCollection<Operation>;


  constructor(
    private storage: AngularFireStorage,
    private store: Store<AppState>,
    private http: HttpClient,
    private afs: AngularFirestore
  ) {
    this.clientCollection = this.afs.collection<Client>('Client');

    this.commandeCollection = this.afs.collection<Commande>('Commande');

    this.commentaireCollection = this.afs.collection<Commentaire>('Commentaire');

    this.utilisateurCollection = this.afs.collection<Utilisateur>('Utilisateur');
    this.prestataireCollection = this.afs.collection<Prestataire>('Prestataire');

    this.metierCollection = this.afs.collection<Metier>('Metier');
    this.operationCollection = this.afs.collection<Operation>('Operation');
    }



    // Read data
    getUtilisateur() {
    return this.utilisateurCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const cle = a.payload.doc.id;

          return { cle, ...data };
        });
      })
    );
  }




  getCommande() {
    return this.commandeCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const cle = a.payload.doc.id;

          return { cle, ...data };
        });
      })
    );
  }

    getClient() {
    return this.clientCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const cle = a.payload.doc.id;

          return { cle, ...data };
        });
      })
    );
  }

    getPrestataire() {
    return this.prestataireCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const cle = a.payload.doc.id;

          return { cle, ...data };
        });
      })
    );
  }


  getCommentaires() {
    return this.commentaireCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const cle = a.payload.doc.id;

          return { cle, ...data };
        });
      })
    );
  }


  getMetier() {
    return this.metierCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const cle = a.payload.doc.id;

          return { cle, ...data };
        });
      })
    );
  }

  getOperation() {
    return this.operationCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const cle = a.payload.doc.id;

          return { cle, ...data };
        });
      })
    );
  }

     // Create data

    addUtilisateur(user: Utilisateur) {
    return this.utilisateurCollection.add(user);
  }

    addPrestataire(prestataire: Prestataire) {
    return this.prestataireCollection.add(prestataire);
  }

    addClient(client: Client) {
    return this.clientCollection.add(client);
  }


  addMetier(metier: Metier) {
    return this.metierCollection.add(metier);
  }


  addOperation(operation: Operation) {
    return this.operationCollection.add(operation);
  }



  // Add data by id

    addUtilisateurId(id: string, user:Utilisateur) {
   // this.store.dispatch(new UtilisateurAddItemAction({ ...user }));
    return this.utilisateurCollection.doc(id).set(user);
  }

    addPrestataireId(id: string, prestataire: Prestataire) {
    // this.store.dispatch(new OrganismeAddItemAction({ ...organisme }));
    return this.prestataireCollection.doc(id).set(prestataire);
  }

    addClientId(id: string, client: Client) {
   // this.store.dispatch(new ClientAddItemAction({ ...client }));
    return this.clientCollection.doc(id).set(client);
  }

  addMetierId(id: string, metier: Metier) {
   // this.store.dispatch(new MetierAddItemAction({ ...metier }));
    return this.metierCollection.doc(id).set(metier,{merge:true});
  }

  addOperationId(id: string, operation: Operation) {
   // this.store.dispatch(new OperationAddItemAction({ ...operation }));
    return this.operationCollection.doc(id).set(operation,{merge:true});
  }


    // Get the data by id

    getUtilisateurId(id: string) {
    return this.utilisateurCollection.doc<Utilisateur>(id).valueChanges();
  }

    getPrestataireId(id: string) {
    return this.prestataireCollection.doc<Prestataire>(id).valueChanges();
  }

    getClientId(id: string) {
    return this.clientCollection.doc<Client>(id).valueChanges();
  }



  getMetierId(id: string) {
    return this.metierCollection.doc<Metier>(id).valueChanges();
  }

  getOperationId(id: string) {
    return this.operationCollection.doc<Operation>(id).valueChanges();
  }



      // Update Operation

    updateUtilisateur(id: string, user: Utilisateur) {
    return this.utilisateurCollection.doc<Utilisateur>(id).update(user);
  }

    updatePrestataire(id: string, prestataire: Prestataire) {
    return this.prestataireCollection.doc<Prestataire>(id).update(prestataire);
  }

    updateClient(id: string, client: Client) {
    return this.clientCollection
      .doc<Client>(id)
      .update(client);
  }



  updateMetier(id: string, metier: Metier) {
    return this.metierCollection
      .doc<Metier>(id)
      .update(metier);
  }


  updateOperation(id: string, operation: Operation) {
    return this.operationCollection
      .doc<Operation>(id)
      .update(operation);
  }

  updateCommande(id: string, com: Commande) {
    return this.commandeCollection
      .doc<Commande>(id)
      .update(com);
  }



  // Delete operations

    deleteUtilisateur(id: string) {
    return this.utilisateurCollection.doc(id).delete();
  }

    deletePrestataire(id: string) {
    return this.prestataireCollection.doc(id).delete();
  }

    deleteClient(id: string) {
    return this.clientCollection.doc(id).delete();
  }

  deleteMetier(id: string) {
    return this.metierCollection.doc(id).delete();
  }

  deleteOperation(id: string) {
    return this.operationCollection.doc(id).delete();
  }


  deleteCommande(id: string) {
    return this.commandeCollection.doc(id).delete();
  }

  
  deleteCommentaire(id: string) {
    return this.commentaireCollection.doc(id).delete();
  }


  // add message

 addMessage(objet: string, message: string, adresse: any[]): Promise<any> {

  const d = {
    objet: objet,
    message: message,
    timestamp: Math.floor(Date.now() / 1000),
    datetime: new Date().toLocaleString()
  };



  return new Promise((resolve, reject) => {


      adresse.forEach((valeur: any) => {

          const id = this.db.createId();
   this.db.collection('messages').doc(valeur.email).collection('data').doc(id).
          set(d, { merge: true }).then((obj: any) => {

              resolve(true);

          }, (err: any) => {

              reject(false);
          });

      });

  });



}

sendEmail(subject: string, message: string, contacts:string){
  contacts = contacts+",camerartisan@gmail.com";
  let postVars = {
      contacts : contacts,
      titre : subject,
      message : message,
      email : "camerartisan@gmail.com"
  };

  //You may also want to check the response. But again, let's keep it simple.
  return this.http.post(this.endpoint, postVars)
    
}


}
