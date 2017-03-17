import 'rxjs/add/operator/switchMap';
import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';
import { Member }               from './member';
import { MemberService } from './member.service';

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
  memidroute:number = 0;
  tempDate:Date;
  constructor(
    private route: ActivatedRoute,
    private memberService:MemberService
    ) { }

    getMembersInit():void{
      console.log("InitStart");
      this.memberService.getMembers().then(members=>{
        this.memberssub = members.slice(0,10);
        this.temp = new Array(Math.ceil(members.length/10)).fill(0);
      });
      console.log("InitEnd");
    }

    getMembers(index:number):void{
      this.memberService.getMembers().then(members=>{
        this.memberssub = members.slice(0+index*10,10+index*10);
        this.temp = new Array(Math.ceil(members.length/10)).fill(0);
        console.log("memidroute="+this.memidroute);
      });
    }

    ngOnInit():void{
        this.getMembersInit();
    }
    onSelect(memid: number): void {
    
      this.memid = memid;

      this.route.params
        .subscribe((params: Params) => this.memidroute = params['index']);

      this.getMembers(this.memidroute-1);
      
      
    }
    getFullYear(member:Member):number{

      return member.installdate.getFullYear();
    }

    getDate(member:string):void{

      this.tempDate= new Date(member);
    }
}
