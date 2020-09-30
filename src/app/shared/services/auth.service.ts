import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDto } from 'src/app/dto/authDto';
import { LoginDto } from 'src/app/dto/loginDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  userName: string;

  constructor(private http: HttpClient) { }

  loginToken(objLogin: LoginDto){
     return this.http.post<AuthDto>(`${environment.baseUrl}Auth/login`, objLogin);     
  }

  estaLogueado(): boolean{
    return localStorage.getItem("autkey") != null && localStorage.getItem("autkey").length > 1;    
  }

  deleteKey(){
    localStorage.removeItem("autkey");
  }
}
