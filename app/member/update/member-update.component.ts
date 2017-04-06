import { Component, OnInit } from '@angular/core';
import { Member }    from '../member';
import { Location}   from '@angular/common';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { MemberService}           from '../member.service';
import { Channel }                 from '../../channel/channel';
import { ChannelService}           from '../../channel/channel.service';
import { User }                 from '../../user/user';
import { UserService}           from '../../user/user.service';
@Component({
  moduleId: module.id,
  selector: 'memberinsert',
  templateUrl: './member-update.component.html',
  styleUrls:['./member-update.component.css']
})



export class MemberUpdateComponent implements OnInit{
    member:Member;
    channel:Channel;
    user:User;
    updateUser:User;
  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private memberService: MemberService,
    private channelService: ChannelService,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.memberService.getMember(params['id']))
      .subscribe(member => {
        this.member = member;
        this.member.createDate = new Date(this.member.createDate);
        this.member.lastUpdate = new Date(this.member.lastUpdate);
        this.channelService.getChannel(member.channelId).then(channel=>{
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

  update():void{
     this.memberService.update(this.member)
      .then(() => this.goBack());
  }
}
