import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const host = 'http://localhost:4572/api/test';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http:HttpClient) {}
  
  public getListeVoitures(token:string){
    let headers = new HttpHeaders({ "Authorization": "Bearer " + token });
    return this.http.get(host + "/findAllVoitures", { headers: headers, observe: 'response' });
  }

  public createVoiture(data: any, token:string): Observable<any>{
    let headers = new HttpHeaders({ "Authorization": "Bearer " + token });
    return this.http.post(host + '/saveVoiture', data, { headers: headers, observe:'response'});
  }

  public getDetails(idVoiture:any, token:string){
    let headers = new HttpHeaders({ "Authorization": "Bearer " + token });
    return this.http.get(host + '/details?idVoiture=' +idVoiture, {headers: headers, observe: 'response' });
  }

  public comment(data: any, token:string): Observable<any>{
    let headers = new HttpHeaders({ "Authorization": "Bearer " + token });
    return this.http.post(host + '/saveComment', data, { headers: headers, observe:'response'});
  }

}
