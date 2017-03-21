import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { TransactionData } from './transactiondata';


@Injectable()
export class TransactionService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private transactionsUrl = 'api/transactions';  // URL to web api

  constructor(private http: Http) { }

  getTransactions(): Promise<TransactionData[]> {
    return this.http.get(this.transactionsUrl)
               .toPromise()
               .then(response => response.json().data as TransactionData[])
               .catch(this.handleError);
  }


  getTransaction(id: string): Promise<TransactionData> {
    const url = `${this.transactionsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as TransactionData)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.transactionsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<TransactionData> {
    return this.http
      .post(this.transactionsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(transaction: TransactionData): Promise<TransactionData> {
    const url = `${this.transactionsUrl}/${transaction.id}`;
    return this.http
      .put(url, JSON.stringify(transaction), {headers: this.headers})
      .toPromise()
      .then(() => transaction)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}