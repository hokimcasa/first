import { Component }        from '@angular/core';
import { Member }           from './member';
import { Location}          from '@angular/common';
import { MemberService}     from'./member.service';
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})



export class LoginComponent{
 
  constructor(
    private location:Location
  ){}

  goBack():void{
    this.location.back();
  }

}
