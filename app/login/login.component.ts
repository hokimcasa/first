import { Component }        from '@angular/core';
import { Location}          from '@angular/common';
import { User }           from '../user/user';
import { UserService }           from '../user/user.service';
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})



export class LoginComponent{
  user:User = new User();
  data:string; 
  constructor(
    private location:Location,
    private userService:UserService
  ){}

  goBack():void{
    this.location.back();
  }

  
  login(user:User):void{
    
    if(!user){return;}
    this.userService
      .login(user)
      .then(str=>this.data=str);
  }

  test():void{
    
    this.userService
      .test()
      .then(str=>this.data=str);
  }

}
