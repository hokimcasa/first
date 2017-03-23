import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule}     from '@angular/http'; 

import { AppComponent }  from './app.component';
import { MyHeadComponent }  from './myhead.component';
import { MyBadyComponent }  from './mybady.component';
import { MyFunctionComponent }  from './myfunction.component ';
import { MyContentComponent }  from './mycontent.component';
import { MemberComponent }   from './member.component';
import { MemberInsertComponent }   from './member-insert.component';
import { MemberDetailComponent }   from './member-detail.component';
import { TransactionComponent }   from './transaction.component';
import { TransactionHeadComponent }   from './transaction-head.component';
import { TransactionBadyComponent }   from './transaction-bady.component';
import { GoogleChatComponent}         from './googlechart.component';
import { MemberService}           from './member.service';
import { ChannelService}           from './channel.service';
import { MemberUpdateComponent }    from './member-update.component';
import { ChannelComponent }    from './channel.component';
import { ChannelDetailComponent }   from './channel-detail.component';
import { ChannelUpdateComponent }   from './channel-update.component';
import { ChannelMemberManagerComponent }    from './channel-membermanager.component';
import { TransactionService}           from './transaction.service';

import { AppRoutingModule }     from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryDataService} from './InMemoryDataService'

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
    GoogleChatComponent,
    MemberDetailComponent,
    MemberUpdateComponent,
    ChannelComponent,
    ChannelDetailComponent,
    ChannelUpdateComponent,
    ChannelMemberManagerComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ MemberService ,
               ChannelService,
               TransactionService ]
})
export class AppModule { }
