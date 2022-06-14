import { UserLogin } from './../model/UserLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://dalrovereblog.herokuapp.com/usuarios/logar',
      userLogin
    );
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(
      'https://dalrovereblog.herokuapp.com/usuarios/cadastrar',
      user
    );
  }

  getByIdUser(id: number): Observable<User> {
    this.refreshToken()
    console.log(environment.token)
    console.log(this.token);
    return this.http.get<User>(`https://dalrovereblog.herokuapp.com/usuarios/${id}`, this.token);
  }

  logado() {
    let ok = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }
}
