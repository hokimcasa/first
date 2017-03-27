import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { MemberComponent }          from './member/member.component';
import { MemberInsertComponent }    from './member/insert/member-insert.component';
import { TransactionComponent }     from './transaction/transaction.component';
import { GoogleChartComponent}       from './chart/googlechart/googlechart.component';
import { MemberDetailComponent }    from './member/detail/member-detail.component';
import { MemberUpdateComponent }    from './member/update/member-update.component';
import { ChannelComponent }    from './channel/channel.component';
import { ChannelDetailComponent }    from './channel/detail/channel-detail.component';
import { ChannelUpdateComponent }    from './channel/update/channel-update.component';
import { ChannelMemberManagerComponent }    from './channel/membermanager/channel-membermanager.component';
import { TransactionDetailComponent }    from './transaction/detail/transaction-detail.component';
import { LoginComponent }    from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/member', pathMatch: 'full' },
  { path: 'member',  component: MemberComponent },
  { path: 'transaction',  component: TransactionComponent },
  { path: 'member/:index',  component: MemberComponent },
  { path: 'memberinsert',  component: MemberInsertComponent },
  { path: 'googlechart',  component: GoogleChartComponent },
  { path: 'memberdetail/:id',  component: MemberDetailComponent },
  { path: 'memberupdate/:id',  component: MemberUpdateComponent },
  { path: 'channel',  component: ChannelComponent },
  { path: 'channeldetail/:id',  component: ChannelDetailComponent },
  { path: 'channelupdate/:id',  component: ChannelUpdateComponent },
  { path: 'channel-membermanager/:id',  component: ChannelMemberManagerComponent },
  { path: 'transactiondetail/:id',  component: TransactionDetailComponent },
  { path: 'login',  component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
