type Status = '未驗證'|'已驗證'|'停權';

export class Member {
  id: number;
  name: string;
  installdate:Date;
  status:Status;

  toDate(date:string):Date{
    return new Date(date);
  }
}