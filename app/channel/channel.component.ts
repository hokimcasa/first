import 'rxjs/add/operator/switchMap';
import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';
import { Channel }                 from './channel';
import { ChannelService}           from './channel.service';
@Component({
  moduleId: module.id,
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls:['./channel.component.css']
})

export class ChannelComponent implements OnInit{
  temp:Number[];
  memid:number = 0;
  tempDate:Date;
  channels:Channel[];
  selectid:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private channelService: ChannelService
    ) { }

    ngOnInit():void{
        this.getChannel();
    }

    getChannel():void{
      this.channelService.getChanneles().then(
          channels=>this.channels=channels);
    }

    gotoDetail(channelid:string): void {
      this.selectid = channelid;
      this.router.navigate(['/channeldetail', this.selectid]);
    }

    gotoMemberManager(channelid:string): void {
      this.selectid = channelid;
      this.router.navigate(['/channel-membermanager', this.selectid]);
    }
  }
