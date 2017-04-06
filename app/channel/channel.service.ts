import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Channel } from './channel';

@Injectable()
export class ChannelService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private channelsURL_inner  = 'api/channels';  // URL to web api
  private channelsURL  = 'http://localhost:4567/channel';
  constructor(private http: Http) { }

  getChanneles(): Promise<Channel[]> {
    return this.http.get(`${this.channelsURL}`)
               .toPromise()
               .then(response => response.json() as Channel[])
               .catch(this.handleError);
  }


  getChannel(id: string): Promise<Channel> {
    const url = `${this.channelsURL}/${id}`;
    console.log("url = "+url);
    console.log("id = "+id);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Channel)
      .catch(this.handleError);
  }

  delete(Channel: string): Promise<void> {
    const url = `${this.channelsURL}/${Channel}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Channel> {
    return this.http
      .post(this.channelsURL, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(Channel: Channel): Promise<Channel> {
    const url = `${this.channelsURL}/${Channel.id}`;
    return this.http
      .put(url, JSON.stringify(Channel), {headers: this.headers})
      .toPromise()
      .then(() => Channel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}