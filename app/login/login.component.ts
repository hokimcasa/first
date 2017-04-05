import { Component }        from '@angular/core';
import { Location}          from '@angular/common';
import { User }           from '../user/user';
import { UserService }           from '../user/user.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
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
    private userService:UserService,
    private router: Router
  ){}

  goBack():void{
    this.location.back();
  }

  
  login(user:User):void{
    
    if(!user||user.id===undefined||user.password===undefined){return;}
    this.userService
      .login(user)
      .then(str=>{
        if(str==="user"){
           alert("歡迎你"+user.id);
          //  Cookie.set("Allow","true");
           document.getElementById("username").innerText="使用者："+Cookie.get("username");
           document.getElementById("loginbutton").innerText="登出";
           this.router.navigate(["/member"]);
        }
        else if(str==="not_allowed"){
           alert("所輸入的帳號密碼不符");
        }
      });
  }

  test():void{
    this.userService
      .test()
      .then(str=>this.data=str);
  }

}
