import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { MemberComponent }          from './member.component';
import { MemberInsertComponent }    from './member-insert.component';
import { TransactionComponent }     from './transaction.component';
import { GoogleChatComponent}       from './googlechart.component';
import { MemberDetailComponent }    from './member-detail.component';
import { MemberUpdateComponent }    from './member-update.component';
import { ChannelComponent }    from './channel.component';

const routes: Routes = [
  { path: '', redirectTo: '/member', pathMatch: 'full' },
  { path: 'member',  component: MemberComponent },
  { path: 'transaction',  component: TransactionComponent },
  { path: 'member/:index',  component: MemberComponent },
  { path: 'memberinsert',  component: MemberInsertComponent },
  { path: 'googlechart',  component: GoogleChatComponent },
  { path: 'memberdetail/:id',  component: MemberDetailComponent },
  { path: 'memberupdate/:id',  component: MemberUpdateComponent },
  { path: 'channel',  component: ChannelComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
