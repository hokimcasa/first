type Status = '儲值'|'花費';

export class TransactionData {
  id:string;
  date:Date;  
  status:Status;
  money: number;
  balance: number;
  memberid:string;
  remark:string;
}