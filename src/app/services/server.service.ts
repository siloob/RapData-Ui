import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, ObservableInput, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ServerService {
  private URL = 'http://127.0.0.1:8000/api/';
  private KEY = 'e3f00a940d2d8385723d7e058afef9b6f3a7cde6';

  private httpHeaders = new HttpHeaders({
    Authorization: 'Token ' + this.KEY
  });

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  sendMail(email: string, pseudo: string, comment: string): Observable<string>{
    let mailUrl: string;
    const body: any = {
      email,
      pseudo,
      comment
    };
    mailUrl = this.URL + 'sendMail/';
    console.log(body);
    return this.http.post<any>(mailUrl, body, {headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    );
  }

  register(email: string, pseudo: string, password: string): Observable<HttpResponse<any>>{
    let userUrl: string;
    const body: any = {
      email,
      pseudo,
      password
    };
    userUrl = this.URL + 'user/';
    return this.http.post<any>(userUrl, body, {
      headers: this.httpHeaders,
      observe: 'response'
    });
  }

}

