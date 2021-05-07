import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const auth_api = 'http://localhost:4572/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  public login(username:string, password:string): Observable<any> {
    return this.http.post(auth_api + 'signin', {
      username,
      password
    }, httpOptions);
  }

  public register(username:string, email:string, password:string): Observable<any>{
    return this.http.post(auth_api + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

}
