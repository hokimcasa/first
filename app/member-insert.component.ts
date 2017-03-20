import { Component } from '@angular/core';
import { Member }    from './member';
import { Location}   from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'memberinsert',
  templateUrl: './member-insert.component.html'
})



export class MemberInsertComponent{
  constructor(
    private location:Location
  ){}

  goBack():void{
    this.location.back();
  }

}
