import 'rxjs/add/operator/switchMap';
import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';
import { Channel }                 from './channel';
import { ChannelService}           from './channel.service';
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
  channels:Channel[];
  selectid:string;
  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private router: Router,
    private channelService: ChannelService
    ) { }

    ngOnInit():void{
        this.getChannelMember();
    }

    getChannelMember():void{
      this.channelService.getChanneles().then(
          channels=>this.channels=channels);
    //       this.route.params
    //   .switchMap((params: Params) => this.channelService.getChannel(params['id']))
    //   .subscribe(channel => {
    //     this.channel = channel;
    // });
    }

    goBack():void{
        this.location.back();
    }

    gotoDetail(channelid:string): void {
      this.selectid = channelid;
      this.router.navigate(['/channeldetail', this.selectid]);
    }
  }
