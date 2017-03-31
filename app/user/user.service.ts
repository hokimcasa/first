import { Injectable }    from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Location}          from '@angular/common';
import { CookieService}          from './cookie.service';
import 'rxjs/add/operator/toPromise';

import { User }    from './user';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private UserUrl = 'http://localhost:4567/user/login';  // URL to web api

  constructor(private http: Http,
              private location: Location,
              private cookieService:CookieService
            ) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.location.normalize(this.UserUrl))
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }


  getUser(id: string): Promise<User> {
    const url = `${this.UserUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.UserUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(user: User): Promise<User> {
    return this.http
      .post(this.UserUrl, JSON.stringify({name: user.name,id:user.id}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const url = `${this.UserUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  login(user:User):Promise<string>{
      const url = `http://localhost:4567/user/login`;
      console.log(url);
      return this.http
        .post(url,JSON.stringify(user),{headers:this.headers})
        .toPromise()
        .then(res=>{
          console.log(this.cookieService.getCookie("sss"));
          window.debug=res;
          console.log(res.headers.get('ss'));
          console.log(res.headers.get('Authorization'));
          console.log(res.json().name);
          return res.json().name;
        })
        .catch(this.handleError);

  }

  test():Promise<string>{
      return this.http
        .get('http://localhost:4567/user/login',new Headers({'Content-Type': 'application/json'}))
        .toPromise()
        .then(res=>{
          console.log(res.json());
          return res.json();
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

