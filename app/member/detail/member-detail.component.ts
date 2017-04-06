import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Member }                 from '../member';
import { MemberService}           from '../member.service';
import { Location}                from '@angular/common';
import { Channel }                 from '../../channel/channel';
import { ChannelService}           from '../../channel/channel.service';
import { User }                 from '../../user/user';
import { UserService}           from '../../user/user.service';
@Component({
  moduleId: module.id,
  selector: 'memberdetail',
  templateUrl: './member-detail.component.html',
  styleUrls:['./member-detail.component.css']
})



export class MemberDetailComponent implements OnInit{
  member:Member;
  channel:Channel;
  user:User;
  updateUser:User;
  constructor(
    private memberService: MemberService,
    private channelService: ChannelService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.memberService.getMember(params['id']))
      .subscribe(member => {this.member = member;
                            this.member.createDate = new Date(this.member.createDate);
                            console.log(this.member.lastUpdate);
                            if(this.member.lastUpdate!==null){
                              console.log("%%%");
                                this.member.lastUpdate = new Date(this.member.lastUpdate);
                            }
                            this.channelService.getChannel(this.member.channelId)
                            .then(channel=>{
                            this.channel = channel;
                            });
                            this.userService.getUser(this.member.createUser)
                            .then(user=>{
                            this.user = user;
                            });
                            this.userService.getUser(this.member.updateUser)
                            .then(updateUser=>{
                            this.updateUser = updateUser;
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
