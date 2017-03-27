import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule}     from '@angular/http'; 

import { AppComponent }  from './app.component';
import { MyHeadComponent }  from './myhead/myhead.component';
import { MyBadyComponent }  from './mybady/mybady.component';
import { MyFunctionComponent }  from './myfunction/myfunction.component ';
import { MyContentComponent }  from './mycontent/mycontent.component';
import { MemberComponent }   from './member/member.component';
import { MemberInsertComponent }   from './member/insert/member-insert.component';
import { MemberDetailComponent }   from './member/detail/member-detail.component';
import { TransactionComponent }   from './transaction/transaction.component';
import { TransactionHeadComponent }   from './transaction/head/transaction-head.component';
import { TransactionBadyComponent }   from './transaction/bady/transaction-bady.component';
import { GoogleChartComponent}         from './chart/googlechart/googlechart.component';
import { MemberService}           from './member/member.service';
import { ChannelService}           from './channel/channel.service';
import { MemberUpdateComponent }    from './member/update/member-update.component';
import { ChannelComponent }    from './channel/channel.component';
import { ChannelDetailComponent }   from './channel/detail/channel-detail.component';
import { ChannelUpdateComponent }   from './channel/update/channel-update.component';
import { ChannelMemberManagerComponent }    from './channel/membermanager/channel-membermanager.component';
import { TransactionService}           from './transaction/transaction.service';
import { TransactionDetailComponent}           from './transaction/detail/transaction-detail.component';
import { LoginComponent} from './login/login.component';                 

import { AppRoutingModule }     from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryDataService} from './inMemoryData/InMemoryDataService'

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    FormsModule,
    AppRoutingModule],
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyBadyComponent,
    MyFunctionComponent,
    MyContentComponent,
    MemberComponent,
    MemberInsertComponent,
    TransactionComponent,
    TransactionHeadComponent,
    TransactionBadyComponent,
    GoogleChartComponent,
    MemberDetailComponent,
    MemberUpdateComponent,
    ChannelComponent,
    ChannelDetailComponent,
    ChannelUpdateComponent,
    ChannelMemberManagerComponent,
    TransactionDetailComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ MemberService ,
               ChannelService,
               TransactionService ]
})
export class AppModule { }
