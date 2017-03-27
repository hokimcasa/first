import { Component, OnInit } from '@angular/core';
import { Member }    from '../member';
import { Location}   from '@angular/common';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { MemberService}           from '../member.service';
@Component({
  moduleId: module.id,
  selector: 'memberinsert',
  templateUrl: './member-update.component.html',
  styleUrls:['./member-update.component.css']
})



export class MemberUpdateComponent implements OnInit{
    member:Member;
  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private memberService: MemberService,
  ){}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.memberService.getMember(params['id']))
      .subscribe(member => {this.member = member;});
  }

  goBack():void{
    this.location.back();
  }

  update():void{
     this.memberService.update(this.member)
      .then(() => this.goBack());
  }
}
