type Status = '未驗證'|'已驗證'|'停權';

export class Member {
  id: number;
  name: string;
  installdate:Date;
  status:Status;
}


// //============      建造string enum開始  3/13發現有問題，能再查清楚問題 =========================
// function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
//   return o.reduce((res, key) => {
//     res[key] = key;
//     return res;
//   }, Object.create(null));
// }

// const Status = strEnum([
//   '未驗證',
//   '已驗證',
//   '停權'
// ])
// // //建立type
// type Status = keyof typeof Status;

// //使用範例  Status.未驗證

// //============      建造string enum結束   =========================
