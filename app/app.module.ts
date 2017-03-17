import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MyHeadComponent }  from './myhead.component';
import { MyBadyComponent }  from './mybady.component';
import { MyFunctionComponent }  from './myfunction.component ';
import { MyContentComponent }  from './mycontent.component';
import { MemberComponent }   from './member.component';
import { TransactionComponent }   from './transaction.component';
import { TransactionHeadComponent }   from './transaction-head.component';

import { AppRoutingModule }     from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyBadyComponent,
    MyFunctionComponent,
    MyContentComponent,
    MemberComponent,
    TransactionComponent,
    TransactionHeadComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
