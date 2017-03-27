import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Member }                 from '../../member/member';
import { MemberService}           from '../../member/member.service';
import { Location}                from '@angular/common';
import { Channel }                 from '../channel';
import { ChannelService}           from '../channel.service';
@Component({
  moduleId: module.id,
  selector: 'channeldetail',
  templateUrl: './channel-detail.component.html',
  styleUrls:['./channel-detail.component.css']
})



export class ChannelDetailComponent implements OnInit{
  channel:Channel;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private channelService: ChannelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.channelService.getChannel(params['id']))
      .subscribe(channel => {
        this.channel = channel;
    });
  }


  goBack():void{
    this.location.back();
  }

  goUpdate(channelid:string): void {
      this.router.navigate(['/channelupdate',channelid]);
  }
}
