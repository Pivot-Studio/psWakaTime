(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{97850:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(94290)}])},94290:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return v}});var t=n(11527),i=n(55049),r=n.n(i),l=n(76792),s=n.n(l),c=n(98269),u=n.n(c),d=n(50955),o=n.n(d),h=n(73669);let g=h.Z.create({baseURL:"http://43.154.191.136:81/api",timeout:3e3});async function m(e){return e?await g.get("leaders?country_code=SG&language=".concat(e)):await g.get("leaders?country_code=SG")}var _=n(40894),x=n(48715),p=n(50959);let f=["matto","@NolanHo","smith","MoonOldh","griffin","Diagonal","CjiW","A1eX"];var j=n(39191),w=n.n(j),y=n(23516);function v(){var e;let[a,n]=(0,p.useState)([]),[i,l]=(0,p.useState)(!1),c=(0,y.useRouter)();async function d(){l(!0);try{let{data:e}=await m(c.query.language),a=e.data,t=a.filter(e=>{let a=e.user.display_name;if(f.includes(a))return!0});l(!1),n(t)}catch(e){l(!1)}}(0,p.useEffect)(()=>{d()},[c.query.language]);let h=[{title:"排名",key:"index",dataIndex:"index",align:"center",width:"80px",render:(e,a,n)=>(0,t.jsx)("span",{children:Number(n)+1})},{title:"用户",key:"userName",dataIndex:"user",align:"center",width:"120px",render:e=>(0,t.jsxs)("div",{className:o().user,children:[(0,t.jsx)(u(),{width:16,height:16,src:e.photo,alt:"avatar"}),(0,t.jsx)(w(),{href:"https://wakatime.com/".concat(e.id),children:e.display_name})]})},{title:"最近一周摸鱼时长",key:"totalTime",dataIndex:["running_total","human_readable_total"],align:"center",width:"200px"},{title:"平均每日摸鱼时间",key:"averageTime",dataIndex:["running_total","human_readable_daily_average"],align:"center",width:"200px"},{title:"摸鱼工具",key:"tools",dataIndex:["running_total","languages"],align:"center",render:e=>(e.length>=9&&e.splice(9),e.map(e=>(0,t.jsx)(w(),{href:"./?language=".concat(e.name),children:(0,t.jsx)(x.Z,{color:"blue",children:e.name})},e.name)))}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:"ps摸鱼社"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"https://wakatime.com/static/img/wakatime.svg"})]}),(0,t.jsxs)("main",{className:"".concat(o().main," ").concat(r().className),children:[(0,t.jsxs)("h2",{className:o().title,children:[(0,t.jsx)(w(),{href:"/",legacyBehavior:!1,children:"ps摸鱼情况统计"}),(null===(e=c.query.language)||void 0===e?void 0:e.length)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"\xb7"}),(0,t.jsx)(w(),{href:"./language=".concat(c.query.language),children:c.query.language})]})]}),(0,t.jsx)(_.Z,{className:o().table,columns:h,dataSource:a,pagination:!1,loading:i})]})]})}},50955:function(e){e.exports={main:"Home_main__2uIek",title:"Home_title__YEn0u",table:"Home_table__ZxOl3",user:"Home_user__xvSZr"}}},function(e){e.O(0,[774,134,888,179],function(){return e(e.s=97850)}),_N_E=e.O()}]);