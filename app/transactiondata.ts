type Status = '儲值'|'花費';

export class TransactionData {
  id:string;
  date:Date;  
  status:Status;
  money: number;
  memberid:string;
  channelid:string;
  remark:string;
}