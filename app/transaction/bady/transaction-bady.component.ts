import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';

import { TransactionData } from '../transactiondata';
import { TransactionService }from '../transaction.service';
import { Member } from '../../member/member';
import { MemberService }from '../../member/member.service';
import { Channel } from '../../channel/channel';
import { ChannelService }from '../../channel/channel.service';

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
                transactionDatas[i].transactionDate = new Date(transactionDatas[i].transactionDate);
                this.memberService
                    .getMember(transactionDatas[i].memberId)
                    .then(member=>{
                        this.transactionDatas[i].memberId=member.name;
                        this.channelService
                        .getChannel(member.channelId)
                        .then(channel=>this.transactionDatas[i].channelId=channel.channelName);
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
