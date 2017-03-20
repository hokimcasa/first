import {Member} from'./Member';

type Status = '未驗證'|'已驗證'|'停權';

export class TransactionData {
  date:Date;  
  status:Status;
  money: number;
  member:Member;
  Remark:string;
}