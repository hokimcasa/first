"use strict";
var Member = (function () {
    function Member() {
    }
    return Member;
}());
exports.Member = Member;
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
//# sourceMappingURL=member.js.map