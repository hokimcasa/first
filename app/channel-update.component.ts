import { Component, OnInit } from '@angular/core';
import { Channel }    from './channel';
import { Location}   from '@angular/common';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { ChannelService}           from './channel.service';
@Component({
  moduleId: module.id,
  selector: 'channelinsert',
  templateUrl: './channel-update.component.html',
  styleUrls:['./channel-update.component.css']
})



export class ChannelUpdateComponent implements OnInit{
    channel:Channel;
  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private channelService: ChannelService,
  ){}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.channelService.getChannel(params['id']))
      .subscribe(channel => {this.channel = channel;});
  }

  goBack():void{
    this.location.back();
  }

  update():void{
     this.channelService.update(this.channel)
      .then(() => this.goBack());
  }
}
