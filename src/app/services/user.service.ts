import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }


    public getUserDetail() {

        const headers = new HttpHeaders();
        let url = 'https://reqres.in/api/users?page=2';
        return this.http.get(url, { headers });
    }

}
