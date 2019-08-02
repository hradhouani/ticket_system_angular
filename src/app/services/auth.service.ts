import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const apiUrl = 'http://127.0.0.1:8000/api/auth/';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router, private http: HttpClient) {
    }


    login(form): void {
        this.http.post<any>(apiUrl + 'login', form).subscribe((data) => {
                 console.log(data);
                localStorage.setItem('user', JSON.stringify(data.data.user));
                 localStorage.setItem('token', data.data.token);

                 console.log(localStorage.getItem('user'));
                  console.log(localStorage.getItem('token'));
            this.router.navigate(['/']);
            }, error => alert(error)
        );


    }

    logout(): void {
        this.http.post(apiUrl + 'logout?token='+localStorage.getItem('token'), {}).subscribe((data) => {
                 console.log(data);
                localStorage.clear();
            this.router.navigate(['/login']);
            }, error => alert(error)
        );


    }

    public me(token): Observable<any> {
        return this.http.post(apiUrl + 'me?token=' + token, {});
    }




}
