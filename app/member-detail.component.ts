import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Member }                 from './member';
import { MemberService}           from './member.service';
import { Location}                from '@angular/common';
import { Channel }                 from './channel';
import { ChannelService}           from './channel.service';
@Component({
  moduleId: module.id,
  selector: 'memberdetail',
  templateUrl: './member-detail.component.html',
  styleUrls:['./member-detail.component.css']
})



export class MemberDetailComponent implements OnInit{
  member:Member;
  channel:Channel;
  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private location: Location,
    private channelService: ChannelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.memberService.getMember(params['id']))
      .subscribe(member => {this.member = member;
                            console.log(member.mobileNO);
                            this.channelService.getChannel(this.member.channelId)
                            .then(channel=>{
                            this.channel = channel;
                            });
                          });
  }


  goBack():void{
    this.location.back();
  }

  goUpdate(memberid:string): void {
    
      this.router.navigate(['/memberupdate',memberid]);
  }
}
