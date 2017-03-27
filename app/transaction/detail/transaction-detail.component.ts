import { Component, Input,OnInit } from '@angular/core';
import { TransactionData } from '../transactiondata';
import { TransactionService }from '../transaction.service';
import { Member } from '../../member/member';
import { MemberService }from '../../member/member.service';
import { Channel } from '../../channel/channel';
import { ChannelService }from '../../channel/channel.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location}   from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls:['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit{
    transaction:TransactionData;
    channel:Channel;
    constructor(private transactionService:TransactionService,
                private memberService:MemberService,
                private channelService:ChannelService,
                private route: ActivatedRoute,
                private location:Location,
                ){}

    getTransactionDatas():void{
        this.route.params
            .switchMap((params: Params) => this.transactionService.getTransaction(params['id']))
            .subscribe(transaction => {this.transaction = transaction;
                                    this.memberService
                                        .getMember(this.transaction.memberid)
                                        .then(member=>{
                                            this.transaction.memberid=member.name;
                                            this.channelService
                                            .getChannel(member.channelId)
                                            .then(channel=>this.channel=channel);
                                        });
                                    });
    }

    ngOnInit():void{
        this.getTransactionDatas();
    }

    goBack():void{
    this.location.back();
  }
}
