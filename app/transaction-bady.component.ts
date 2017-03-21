import { Component, Input,OnInit } from '@angular/core';
import { TransactionData } from './transactiondata';
import { TransactionService }from './transaction.service';


@Component({
  moduleId: module.id,
  selector: 'transaction-bady',
  templateUrl: './transaction-bady.component.html',
  styleUrls:['./transaction-bady.component.css'],
  providers:[TransactionService]
})
export class TransactionBadyComponent implements OnInit{
    transactionDatas:TransactionData[];

    constructor(private transactionService:TransactionService){}

    getTransactionDatas():void{
        this.transactionService.getTransactions().then(transactionDatas=>{
            this.transactionDatas=transactionDatas;
            
        });
        
    }

    ngOnInit():void{
        this.getTransactionDatas();
    }

}
