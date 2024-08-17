import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../Models/Admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) { }

  //ToDo: write Login endpoint to handle log in, leave this as is for them to fix with correct endpoint, Maybe
  // login(username: string, password: string): Observable<boolean> {

    
  //   return this.http.get<boolean>(`${this.apiUrl}/post-login_details`, { headers })
  //     .pipe(map(response => {
  //       for (let admin of response) {
  //         if (admin.username === username && admin.password === password) {
  //           return true;
  //         }
  //       }
  //       return false;
  //       console.log(response);
  //       return response.status;
  //     }));
  // }


  checkdetail(admin: Admin){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<boolean>(`${this.apiUrl}/post-login_details`, admin, {headers }  )
      
  }
}
