type Status = '未驗證'|'已驗證'|'停權';
type Level = '黃金'|'白金'|'普通';
export class Member {
  id: number;
  name: string;
  installdate:Date;
  status:Status;
  level:Level;
  remark:string;
  accountNumber:string;
  password:string;
  parent:number;
}