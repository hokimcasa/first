import { Injectable }    from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Location}          from '@angular/common';
import 'rxjs/add/operator/toPromise';

import { Cookie } from 'ng2-cookies/ng2-cookies';
import { User }    from './user';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json','withCredentials':true});
  private UserUrl = 'http://localhost:4567/user';  // URL to web api
  constructor(private http: Http,
              private location: Location
            ) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.location.normalize(this.UserUrl))
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }


  getUser(id: string): Promise<User> {
    const url = `${this.UserUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User)
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
      const url = `${this.UserUrl}/login`;
      console.log(url);
      return this.http
        .post(url,JSON.stringify(user),{headers:this.headers})
        .toPromise()
        .then(res=>{
          // window.debug=res;
          res.json();
          Cookie.set('username',res.json().name);
          Cookie.set('groupId',res.json().groupId);
          Cookie.set('id',res.json().id);
          console.log(res.headers.get('X-Authorization'));
          return res.headers.get('X-Authorization');
        })
        .catch(this.handleError);
  }

  logout(user:User):Promise<string>{
      const url = `${this.UserUrl}/logout`;
      console.log(url);
      return this.http
        .post(url,JSON.stringify({id:user.id,name:user.name,password:"",groupId:user.groupId}),{headers:this.headers})
        .toPromise()
        .then(res=>{
          // window.debug=res;
          
          console.log(res.headers.get('X-Authorization'));
          return res.headers.get('X-Authorization');
        })
        .catch(this.handleError);
  }

  test():Promise<string>{
    Cookie.set('sss','aaa');

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

