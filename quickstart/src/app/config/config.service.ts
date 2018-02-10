import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getUser(url:string) {
    let api= "https://api.github.com/repos/"+ url;
    return this.http.get(api)
      .map((res:Response) => res.json());
  }

}
