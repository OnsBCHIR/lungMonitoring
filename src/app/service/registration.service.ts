
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationService {

  constructor(private http : HttpClient) { }

  registerUser(userData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/register',userData);
  }
}
