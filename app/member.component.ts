import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Location }               from '@angular/common';
import { Member }               from './member';
import { MemberService } from './member.service';

const MEMBERS: Member[] = [
  { id: 11, name: 'Mr. Nice',installdate:new Date('2010-10-21'),status:"未驗證"},
  { id: 12, name: 'Mr. Nice',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 13, name: 'Bombasto',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 14, name: 'Celeritas',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 15, name: 'Magneta',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 16, name: 'RubberMan',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 17, name: 'Dynama',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 18, name: 'Dr IQ',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 19, name: 'Magma',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 20, name: 'Tornado',installdate:new Date('2010-10-29'),status:"停權"},
  { id: 21, name: 'Mr. Nice',installdate:new Date('2010-10-21'),status:"未驗證"},
  { id: 22, name: 'Mr. Nice',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 23, name: 'Bombasto',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 24, name: 'Celeritas',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 25, name: 'Magneta',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 26, name: 'RubberMan',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 27, name: 'Dynama',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 28, name: 'Dr IQ',installdate:new Date('2010-10-29'),status:"已驗證"},
  {id: 29, name: 'Magma',installdate:new Date('2010-10-29'),status:"未驗證"},
  {id: 30, name: 'Tornado',installdate:new Date('2010-10-29'),status:"停權"}
];

let MEMBERSSUB: Member[] = MEMBERS.slice(0,10);

const TEMP:Number[] = new Array(Math.ceil(MEMBERS.length/10)).fill(0);

@Component({
  moduleId: module.id,
  selector: 'member',
  templateUrl: './member.component.html',
})

export class MemberComponent {
  members = MEMBERS;
  temp = TEMP;
  memberssub = MEMBERSSUB;
  memid:number = 0;
  memidroute:number = 0;

  constructor(
    private route: ActivatedRoute,
    ) { }

  onSelect(memid: number): void {
    
    this.memid = memid;
    // console.log("memid="+memid);
    this.route.params
      .subscribe((params: Params) => this.memidroute = params['index']);
    // console.log("memidroute="+this.memidroute);
    if(this.memidroute==1){
      this.memberssub = MEMBERS.slice(0,10);
      console.log("1 memidroute="+this.memidroute);
    }else{
      let temp:number = this.memidroute-1;
      this.memberssub = MEMBERS.slice(0+temp*10,10+temp*10);
      console.log("!1 memidroute="+this.memidroute);
    }
    
  }
}
