import { Component }        from '@angular/core';
import { Member }           from '../member';
import { Location}          from '@angular/common';
import { MemberService}     from'../member.service';
@Component({
  moduleId: module.id,
  selector: 'memberinsert',
  templateUrl: './member-insert.component.html',
  styleUrls:['./member-insert.component.css']
})



export class MemberInsertComponent{
  member:Member=new Member();
  constructor(
    private location:Location,
    private memberService:MemberService
  ){}

  goBack():void{
    this.location.back();
  }

  Insert(member: Member): void {
    if (!member) { return; }
    this.memberService.create(member)
      .then();
  }
}
