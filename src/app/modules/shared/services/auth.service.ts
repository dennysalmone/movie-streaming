import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { ITokenUser, IUserLogin, IUserRegister } from "../interfaces/interfaces";
import { environment } from "src/environments/environment";
import { SharedModule } from "../shared.module";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  constructor(private http: HttpClient, private router: Router) {
  }

  register(user: IUserRegister): Observable<any> {
    return this.http.post<any>(`${environment.mongo}register`, user)
  }

  login(user: IUserLogin): Observable<ITokenUser> {
    return this.http.post<ITokenUser>(`${environment.mongo}login`, user)
    .pipe(
      tap(
        ({token, user}) => {
          localStorage.setItem('authToken', token);
          console.log(user.favourite) // закинуть в ngrx
          this.setToken(token);
          this.setTokenFromLocalStorage();
        }
      )
    )
  }

  setToken (token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  setTokenFromLocalStorage(): void {
    if (!localStorage.getItem('authToken')) return;
    this.token = (localStorage.getItem('authToken') as string);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.setToken('');
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);
  }
}