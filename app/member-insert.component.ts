import { Component }        from '@angular/core';
import { Member }           from './member';
import { Location}          from '@angular/common';
import { MemberService}     from'./member.service';
@Component({
  moduleId: module.id,
  selector: 'memberinsert',
  templateUrl: './member-insert.component.html'
})



export class MemberInsertComponent{
  member:Member;
  constructor(
    private location:Location,
    private memberService:MemberService
  ){}

  goBack():void{
    this.location.back();
  }

}
