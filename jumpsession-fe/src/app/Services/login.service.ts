import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Login from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  //ToDo: write Login endpoint to handle log in, leave this as is for them to fix with correct endpoint, Maybe
  // login(username: string, password: string): Observable<boolean> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
  //   return this.http.get<any>(`${this.apiUrl}/post-login_details`, { headers })
  //     .pipe(map(response => {
  //       // for (let admin of response) {
  //       //   if (admin.username === username && admin.password === password) {
  //       //     return true;
  //       //   }
  //       // }
  //       console.log("Hello");
  //       return /*response.status;*/ false;
  //     }));
  // }

  login(login: Login): Observable<boolean>{
    return this.http.post<boolean>(`${this.apiUrl}/post-login_details`,login);
  }
}
