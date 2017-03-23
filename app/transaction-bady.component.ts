import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';

import { TransactionData } from './transactiondata';
import { TransactionService }from './transaction.service';
import { Member } from './member';
import { MemberService }from './member.service';
import { Channel } from './channel';
import { ChannelService }from './channel.service';

@Component({
  moduleId: module.id,
  selector: 'transaction-bady',
  templateUrl: './transaction-bady.component.html',
  styleUrls:['./transaction-bady.component.css']
})
export class TransactionBadyComponent implements OnInit{
    transactionDatas:TransactionData[];
   
    constructor(private transactionService:TransactionService,
                private memberService:MemberService,
                private channelService:ChannelService,
                private router: Router
                ){}

    getTransactionDatas():void{
        this.transactionService.getTransactions().then(transactionDatas=>{
            this.transactionDatas=transactionDatas;
            for(let i = 0;i<transactionDatas.length;i++){
                this.memberService
                    .getMember(transactionDatas[i].memberid)
                    .then(member=>{
                        this.transactionDatas[i].memberid=member.name;
                        this.channelService
                        .getChannel(member.channelId)
                        .then(channel=>this.transactionDatas[i].channelid=channel.channelname);
                    });
                }
        });
        
    }

    ngOnInit():void{
        this.getTransactionDatas();
    }

    gotoDetail(transactionid:string): void {
      this.router.navigate(['/transactiondetail',transactionid]);
    }
}
