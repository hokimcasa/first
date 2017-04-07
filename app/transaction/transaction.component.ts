import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';

import { TransactionData } from './transactiondata';
import { TransactionService }from './transaction.service';
import { TransactionSearch} from './transaction-search';
import { Member } from '../member/member';
import { MemberService }from '../member/member.service';
import { Channel } from '../channel/channel';
import { ChannelService }from '../channel/channel.service';

@Component({
  moduleId: module.id,
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls:['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  transactionDatas:TransactionData[];
  transactionSearch:TransactionSearch = new TransactionSearch();
     today = new Date();
     todayString:string;

  onChange(deviceValue:string) {
        // console.log(deviceValue);
        this.transactionSearch.channelId=deviceValue;
     }    
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

  initsearchbar():void{
        this.transactionSearch.channelId="C00001";
        let yyyy = ""+this.today.getFullYear();
        let mm = ""+(this.today.getMonth()+1);
        let dd = ""+this.today.getDate();
        if(mm.toString.length<2){
          mm = "0"+mm;
        }
        if(dd.toString.length<2){
          dd = "0"+dd;
        }
        console.log(yyyy+"-"+mm+"-"+dd);
        this.todayString=yyyy+"-"+mm+"-"+dd;
        this.transactionSearch.startDate=this.todayString;
        this.transactionSearch.endDate=this.todayString;
  }

  ngOnInit():void{
      this.getTransactionDatas();
      this.initsearchbar();
  }

  gotoDetail(transactionid:string): void {
      this.router.navigate(['/transactiondetail',transactionid]);
  }


  onClick(){

      //測試抓取到的資料
      // console.log("console.log(this.transactionSearch.startDate)"+this.transactionSearch.startDate);
      // console.log("console.log(this.transactionSearch.endDate)"+this.transactionSearch.endDate);
      // console.log("console.log(this.transactionSearch.channelId)"+this.transactionSearch.channelId);
      // if(this.transactionSearch.memberName!==undefined){
      //   console.log("console.log(this.transactionSearch.memberName)"+this.transactionSearch.memberName);
      // }
      
      //檢查日期早晚
      let startDate = new Date(this.transactionSearch.startDate);
      let endDate = new Date(this.transactionSearch.endDate);
      console.log("startDate.getTime()"+startDate.getTime());
      console.log("endDate.getTime()"+endDate.getTime());
      
      if(startDate.getTime()>=endDate.getTime()){

          alert("開始日請早於終止日");
          return;
      }

      //判斷有無輸入會員名接著送出請求
      if(this.transactionSearch.memberName===undefined){
         this.transactionService.
         getTransactionWithinTheConditionNoMemberName(this.transactionSearch.channelId,""+startDate.getTime(),""+endDate.getTime()).
         then(transactionDatas=>{
           if(transactionDatas[0].id==="0"){
              alert("沒有符合的搜尋條件");
              return;
           }
          this.transactionDatas=transactionDatas;
          console.log(this.transactionDatas);
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
      }else{
          
          this.transactionService.
          getTransactionWithinTheCondition(this.transactionSearch.channelId,""+startDate.getTime(),""+endDate.getTime(),this.transactionSearch.memberName).
          then(transactionDatas=>{
            if(transactionDatas[0].id==="0"){
              alert("沒有符合的搜尋條件");
              return;
            }
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


    }
}
