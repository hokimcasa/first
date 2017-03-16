import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberComponent }   from './member.component';
import { TransactionComponent }   from './transaction.component';

const routes: Routes = [
  { path: '', redirectTo: '/member', pathMatch: 'full' },
  { path: 'member',  component: MemberComponent },
  { path: 'transaction',  component: TransactionComponent },
  { path: 'member/:index',  component: MemberComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
