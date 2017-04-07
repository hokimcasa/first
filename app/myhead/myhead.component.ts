import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { User }    from '../user/user';
import { UserService }           from '../user/user.service';
@Component({
  moduleId: module.id,
  selector: 'myhead',
  templateUrl: './myhead.component.html',
  styleUrls:['./myhead.component.css']
})
export class MyHeadComponent {
  user:User;
  constructor(
    private router: Router,
    private userService:UserService
  ) {}
  buttonckick():void{
    let buttontext = document.getElementById("loginbutton").innerText;
    console.log(buttontext);
    if(buttontext==="登入"){
      this.router.navigate(['/login']);
    }else if(buttontext==="登出"){
      let id =Cookie.get("id");
      this.userService.getUser(id)
      .then(user=>{
        this.user=user;
         this.userService
          .logout(this.user)
          .then(str=>{
              Cookie.delete('username');
              Cookie.delete('groupId');
              Cookie.delete('id');
          });
          document.getElementById("loginbutton").innerText="登入";
          this.router.navigate(['/login']);
      });
     
    }
  }
}
