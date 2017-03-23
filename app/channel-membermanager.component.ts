import 'rxjs/add/operator/switchMap';
import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';
import { Channel }                 from './channel';
import { ChannelService}           from './channel.service';
import { Member }                 from './member';
import { MemberService}           from './member.service';

@Component({
  moduleId: module.id,
  selector: 'channelmembermanager',
  templateUrl: './channel-membermanager.component.html',
  styleUrls:['./channel-membermanager.component.css']
})

export class ChannelMemberManagerComponent implements OnInit{
  temp:Number[];
  memid:number = 0;
  tempDate:Date;
  members:Member[]=[];
  selectid:string;
  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
    ) { }

    ngOnInit():void{
        this.route.params
        .subscribe((params: Params)=>{
            this.getChannelMember(params['id']);
        });
        
    }

    getChannelMember(channel:string):void{
        
      this.memberService.getMembers().then(
          members=>{
              for(let i=0;i<members.length;i++){
                  if(members[i].channelId==channel){
                      this.members.push(members[i]);
                      console.log("applymembers["+i+"]" );
                  }
              }
            });
    }

    goBack():void{
        this.location.back();
    }

    gotoDetail(channelid:string): void {
      this.selectid = channelid;
      this.router.navigate(['/memberdetail', this.selectid]);
    }

    delete(member:Member): void {
      member.channelId='';
      this.memberService.update(member)
      .then(() => this.goBack());
    }

    
  }
