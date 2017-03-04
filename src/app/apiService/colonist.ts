import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Colonist, NewColonist } from '../models';
import { COLONIST_URL } from '../models/API';

interface ColonistPostRequest {
    colonist: NewColonist;
}

@Injectable()
export class ColonistAPIService {

    constructor(private http: Http){}

    saveColonist( newColonist: ColonistPostRequest ): Observable<Colonist>{
        console.log(localStorage);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        return this.http.post( COLONIST_URL, newColonist, { headers } )
                        .map( (res: Response) => res.json().colonist);
    }

}