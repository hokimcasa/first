import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Member }                 from './member';
import { MemberService}           from './member.service';
import { Location}                from '@angular/common';
import { Channel }                 from './channel';
import { ChannelService}           from './channel.service';
@Component({
  moduleId: module.id,
  selector: 'memberdetail',
  templateUrl: './member-detail.component.html'
})



export class MemberDetailComponent implements OnInit{
  member:Member;
  channel:Channel;
  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private location: Location,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.memberService.getMember(params['id']))
      .subscribe(member => {this.member = member;
      //  console.log(member===undefined);
      //  console.log(member)
    });
    
    
  }


  goBack():void{
    this.location.back();
  }
}
