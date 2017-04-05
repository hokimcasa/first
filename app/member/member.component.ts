import 'rxjs/add/operator/switchMap';
import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';
import { Member }               from './member';
import { MemberService } from './member.service';
import { Channel }                 from '../channel/channel';
import { ChannelService}           from '../channel/channel.service';
@Component({
  moduleId: module.id,
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls:['./member.component.css']
})

export class MemberComponent implements OnInit{
  temp:Number[];
  memberssub:Member[];
  memid:number = 0;
  tempDate:Date;
  channels:Channel[];
  selectid:string;
  constructor(
    private route: ActivatedRoute,
    private memberService:MemberService,
    private router: Router,
    private channelService: ChannelService
    ) { }

    getMembersInit():void{
      // this.memberService.getMembers().then(members=>{
      //   console.log("getAll "+members);
      //   this.memberssub = members.slice(0,10);
      //   this.temp = new Array(Math.ceil(members.length/10)).fill(0);

      // });
      // this.channelService.getChanneles().then(channels=>{
      //   this.channels = channels;
      //     for(let i=0;i<this.memberssub.length;i++){
      //     for(let j=0;j<this.channels.length;j++){
      //         console.log();
      //         if(this.memberssub[i].channelId===this.channels[j].id){
                  
      //             this.memberssub[i].channelId=this.channels[j].channelname;
      //         }
      //     }
      //   }
      // });
      this.memberService.getMembers().then(members=>{
        console.log("getAll "+members);
        this.memberssub = members.slice(0,10);
        this.temp = new Array(Math.ceil(members.length/10)).fill(0);
        this.channelService.getChanneles().then(channels=>{
          this.channels = channels;
            for(let i=0;i<this.memberssub.length;i++){
            for(let j=0;j<channels.length;j++){
                console.log();
                if(this.memberssub[i].channelId===channels[j].id){
                    this.memberssub[i].channelId=channels[j].channelname;
                }
            }
          }
        });
      });
      
    }

    getMembers(index:number):void{
      this.memberService.getMembers().then(members=>{
        this.memberssub = members.slice(0+index*10,10+index*10);
        this.temp = new Array(Math.ceil(members.length/10)).fill(0);
      });
      this.channelService.getChanneles().then(channels=>{
        this.channels = channels;
          for(let i=0;i<this.memberssub.length;i++){
          for(let j=0;j<this.channels.length;j++){
              // console.log();
              if(this.memberssub[i].channelId===this.channels[j].id){
                  
                  this.memberssub[i].channelId=this.channels[j].channelname;
              }
          }
        }
      });
    }

    ngOnInit():void{
        this.getMembersInit();
    }
    onSelect(memid: number): void {
    
      this.memid = memid;
      this.getMembers(memid-1);
      
      
    }

    gotoDetail(memberid:string): void {
      this.selectid = memberid;
      this.router.navigate(['/memberdetail', this.selectid]);
    }

    goUpdate(memberid:string): void {
      this.router.navigate(['/memberupdate',memberid]);
    }
  }
