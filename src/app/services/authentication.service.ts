import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

// Service
import { AlertService } from './alert.service';

// Token model
import { Tokens } from '../interfaces/tokens';

// Api URL
import { AppConfig } from '../app.config';

@Injectable({
	providedIn: 'root'
})

export class AuthenticationService {

	private apiUrl: string = AppConfig.apiUrl;
	private readonly TOKEN = 'TOKEN';
	private readonly REFRESH = 'REFRESH';
	private readonly EMAIL = 'EMAIL';
	private readonly NAME = 'NAME';
	private loggedUser: string;

	constructor(
		private http: HttpClient,
		private alertService: AlertService
		) {}

	// Start Login coll
	public login(user: { email: string, password: string }): Observable<any> {
		return this.http.post<any>(this.apiUrl + '/v1/auth/login', user)
      .pipe(
				tap(tokens => this.doLoginUser(user.email, tokens)),
				mapTo(true),
        catchError(error => {
          this.alertService.error(error);
          return of(false);
			}));
	}

	// Logout User
	public logout() {
    return this.http.post(this.apiUrl + '/v1/auth/refresh-token', {
			refreshToken: this.getRefreshToken(),
			email: this.getEmailToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
				return of(false);
		}));
	}

	// Refresh user Token
	public refreshToken() {
		return this.http.post(this.apiUrl + '/v1/auth/refresh-token', {
			refreshToken: this.getRefreshToken(),
      email: this.getEmailToken()
    }).pipe(
			tap((tokens: Tokens) => {
			this.storeJwtToken(tokens.result.token.accessToken);
			this.storeEmailToken(tokens.result.user.email);
		}));
	}

	public isLoggedIn() {
		return !this.getJwtToken();
  }

	// Store user: email and user: token
	private doLoginUser(email: string, tokens: Tokens): void {
		this.loggedUser = email;
		this.storeTokens(tokens);
	}

	private doLogoutUser(): void {
    this.loggedUser = null;
    this.removeTokens();
	}

	public getJwtToken() {
		return localStorage.getItem(this.TOKEN);
	}

	private getRefreshToken() {
		return localStorage.getItem(this.REFRESH);
	}

	public getEmailToken() {
		return localStorage.getItem(this.EMAIL);
	}

	public getNameToken() {
		return localStorage.getItem(this.NAME);
	}

	private storeJwtToken(accessToken: string): void {
		localStorage.setItem(this.TOKEN, accessToken);
	}

	private storeEmailToken(email: string): void {
		localStorage.setItem(this.EMAIL, email);
	}

	// Set token to LocalStorage
	private storeTokens(tokens: Tokens): void {
		localStorage.setItem(this.TOKEN, tokens.result.token.accessToken);
		localStorage.setItem(this.REFRESH, tokens.result.token.refreshToken);
		localStorage.setItem(this.EMAIL, tokens.result.user.email);
		localStorage.setItem(this.NAME, tokens.result.user.firstName);
	}

	// Remove token from LocalStorage
	private removeTokens(): void {
		localStorage.removeItem(this.TOKEN);
		localStorage.removeItem(this.REFRESH);
		localStorage.removeItem(this.EMAIL);
		localStorage.removeItem(this.NAME);
  }

}
