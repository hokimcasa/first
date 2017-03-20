import { Injectable } from '@angular/core';
import { TransactionData } from './transactiondata';
import { TRANSACTIONDATAS } from './mock-transactiondatas';


@Injectable()
export class TransactionService {
 
  getTransactionDatas(): Promise<TransactionData[]> {
    return Promise.resolve(TRANSACTIONDATAS);
  }
}
