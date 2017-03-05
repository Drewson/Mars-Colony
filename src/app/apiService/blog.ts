import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// import { Alien } from '../models';
import { BLOG_URL } from '../models/API';

@Injectable()
export class BlogAPIService {

    constructor(private http: Http){}

    getBlog(): Observable<Response>{
        return this.http.get(BLOG_URL)
            .map( (res: Response) => res.json());
    }
    

}