import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()

export class DocumentFieldsService {

  endpoint = 'http://localhost:59357/api/Values';
  //endpoint = 'http://172.20.15.127/WebAPiSegura/api/obtenerlote/ObtenerLoteIndexacion?colaTrabajo=EC%20Constructor%20-%20Indexaci%C3%B3n&colaMsgQueue=indexacionECConstructor';
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json'
   })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getDocuments(): Observable<any> {
    // return this.http.get(this.endpoint).pipe(
    //   map(this.extractData));
    return this.http.get(this.endpoint);
  }

}
