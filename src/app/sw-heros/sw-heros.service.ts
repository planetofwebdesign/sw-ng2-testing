import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SwHerosService {

    constructor(
        private http: HttpClient
    ) { }

    getHeros(): Observable<any> {
        const url = 'https://swapi.co/api/people';
        return this.http.get(url)
        .pipe(
            map((data: any) => {
               return  data.results;
            })
        );
    }

}

