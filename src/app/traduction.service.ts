import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient,HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TraductionService {

  public urltranslation ="http://localhost:3000/traduction";

  public webUrl = "https://us-central1-camer-artisan.cloudfunctions.net/appTranslationUrl/appTranslation";

  constructor(private http: HttpClient) { }


  fetchUrl(texte:string,from:string,to:string){

    const headers = new HttpHeaders();
    let data={
      texte:texte,
      from:from,
      to:to
    }

  return this.http.post(this.webUrl,data,{headers: headers});

  }



  private extractData(res: any): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
