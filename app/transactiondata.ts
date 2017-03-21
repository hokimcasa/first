type Status = '儲值'|'花費';

export class TransactionData {
  date:Date;  
  status:Status;
  money: number;
  balance: number;
  membername:string;
  memberchannel:string;
  remark:string;
}