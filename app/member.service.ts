import { Injectable } from '@angular/core';
import { Headers,Http}from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member } from './member';

@Injectable()
export class MemberService {
  private headers = new Headers({'Content-Type':'application/json'});
  private memberUrl = 'api/members';

  constructor(private http:Http){}

  getMembers(): Promise<Member[]> {
    return this.http.get(this.memberUrl)
            .toPromise()
            .then(response =>  response.json().data as Member[])
            .catch(this.handleError);
  }

  private handleError(error:any):Promise<any>{
    console.error('An error occurred',error);
    return Promise.reject(error.message||error);
  }
}
