import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member }    from './member';

@Injectable()
export class MemberService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private MemberesUrl = 'api/members';  // URL to web api

  constructor(private http: Http) { }

  getMembers(): Promise<Member[]> {
    //給InMemoryData用
    // return this.http.get('http://localhost:4567/member')
    //            .toPromise()
    //            .then(response => response.json().data as Member[])
    //            .catch(this.handleError);
    //------------------------------------------------------------------
    //給從後台回傳資料用     出處    http://stackoverflow.com/questions/41921403/how-to-get-an-array-from-json-data-in-angular-2
    return this.http.get('http://localhost:4567/member')
               .toPromise()
               .then(response => response.json() as Member[])
               .catch(this.handleError);
  }


  getMember(id: string): Promise<Member> {
    const url = `${this.MemberesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Member)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.MemberesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(member: Member): Promise<Member> {
    return this.http
      .post(this.MemberesUrl, JSON.stringify({name: member.name,fee:member.fee, mobileNO:member.mobileNO,
                                              accountNo:member.accountNo,email:member.email,address:member.address,
                                              webSite:member.webSite,createDate:new Date()}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(Member: Member): Promise<Member> {
    const url = `${this.MemberesUrl}/${Member.id}`;
    return this.http
      .put(url, JSON.stringify(Member), {headers: this.headers})
      .toPromise()
      .then(() => Member)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

