import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class Auth{

  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  // login
  public login(data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/login`, data);
  }

}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'environments/environment.development';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {

//   private baseUrl = environment.apiUrl; 

//   constructor(private http: HttpClient) {}

//   // login
//   public login(data: any): Observable<any>{
//     return this.http.post(`${this.baseUrl}/api/auth/login`, data);
//   }

// }
