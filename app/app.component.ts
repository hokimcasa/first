import { Component } from '@angular/core';

import { MemberService } from './member.service';
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <myhead></myhead>
    <mybady></mybady>
    `,
   providers:[MemberService] 
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
