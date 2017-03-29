Project structure:
==================
assets/                     放入coreui所用的css,font,img 
css/                        放入bootstrapm4用的css
js/                         放入bootstrapm4用的js
app/                        放個元件
|-channel/                  放channel元件們
|   |-detail/               放channel-detail元件，顯示channel所有資料         
|   |-memberdetail/         放channel-memberdetail元件，顯示channel所屬的會員並能加以一
|-chart/                    放chart元件們
|-inMemoryData/             模擬資料由http來源  
|-login/                    放login元件們
|-member/                   放member元件們
|-mybady/                   放mybady元件
|-mycontent/                放mycontent元件
|-myfunction/               放myfunction元件
|-myhead/                   放myhead元件
|-transaction/              放transaction元件們
|-user/                     放user元件
|-app.component.ts          基本樣板設置      
|-app.module.ts             各使用元件管理
|-app-routing.module.ts     各路由導航設定

index.html      主要的頁面加入或移除css,js用，html的進入點
main.ts         app的進入點

