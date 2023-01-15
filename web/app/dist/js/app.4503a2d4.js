(function(){"use strict";var e={9573:function(e,t,a){var s=a(9242),r=a(3396);function i(e,t,a,s,i,o){const l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(l)])}var o={name:"MyPage",components:{}},l=a(89);const n=(0,l.Z)(o,[["render",i],["__scopeId","data-v-e76ce492"]]);var c=n,u=a(2483),d=a.p+"img/logo.dbf34ed5.png";const p=(0,r._)("div",{class:"home"},[(0,r._)("img",{alt:"Vue logo",src:d})],-1);function h(e,t,a,s,i,o){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("nav",null,[(0,r.Wm)(l,{to:"/SignIn"},{default:(0,r.w5)((()=>[(0,r.Uk)("SignIn")])),_:1}),(0,r.Uk)(" |")]),p,(0,r._)("button",{onClick:t[0]||(t[0]=e=>o.Click())},"ボタン"),(0,r._)("button",{onClick:t[1]||(t[1]=e=>o.Click2())},"ボタン")])}var g={name:"HomeView",components:{},methods:{Click(){this.$cookies.set("default_unit_second","input_value",10),console.log(this.$cookies.get("default_unit_second"))},Click2(){console.log(this.$cookies.get("default_unit_second"))}}};const m=(0,l.Z)(g,[["render",h]]);var _=m;const w=e=>((0,r.dD)("data-v-e6faac48"),e=e(),(0,r.Cn)(),e),v={class:"flex"},k={class:"fixedGlobal"},f={class:"wrap"},y=w((()=>(0,r._)("h1",null,"記憶を画像にしよう",-1))),b={class:"innerWrap"},I=w((()=>(0,r._)("p",null,"題名",-1))),S={key:0},x=w((()=>(0,r._)("br",null,null,-1))),C=w((()=>(0,r._)("p",null,"キーワード ※複数入力の場合は間に,をつけてください。",-1))),D=w((()=>(0,r._)("br",null,null,-1))),U=w((()=>(0,r._)("p",null,"説明",-1))),W=w((()=>(0,r._)("br",null,null,-1))),P={key:0,class:"loadingWrap"},$={class:"loadingContent"},V=w((()=>(0,r._)("p",{class:"warningTitle"},"画像生成中",-1))),z=w((()=>(0,r._)("p",{class:"warning"},"生成には20秒～30秒ほど時間がかかります",-1))),O=w((()=>(0,r._)("p",{class:"warning"},"利用者が多いとそれ以上かかる場合もあります",-1)));function Z(e,t,a,i,o,l){const n=(0,r.up)("GlobalHeader"),c=(0,r.up)("vue-element-loading");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",k,[(0,r.Wm)(n)]),(0,r._)("div",f,[y,(0,r._)("div",b,[I,o.error?((0,r.wg)(),(0,r.iD)("p",S,"入力されていません")):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.title=e),type:"text",class:"text",maxlength:"40"},null,512),[[s.nr,o.title]]),x,C,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.keyword=e),type:"text",class:"text",maxlength:"100",placeholder:"aaa,bbb,ccc,ddd"},null,512),[[s.nr,o.keyword]]),D,U,(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.text_uri=e),maxlength:"200",name:"",cols:"30",rows:"10",class:"textarea"},null,512),[[s.nr,o.text_uri]]),W,(0,r._)("button",{onClick:t[3]||(t[3]=(...e)=>l.ImageRequest&&l.ImageRequest(...e))},"画像を作成")]),o.loadFlag?((0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",$,[V,z,O,(0,r._)("div",null,[(0,r.Wm)(c,{active:0!=o.loadFlag.length,spinner:"bar-fade-scale"},null,8,["active"])])])])):(0,r.kq)("",!0)])])}a(7658);var G=a(6943);const q="http://localhost:8000",F="https://ai.memo-re.org",A="/media/brain/";var H=a(9141),T=a.n(H);const M=e=>((0,r.dD)("data-v-4a13915c"),e=e(),(0,r.Cn)(),e),N={class:"fixed"},j={class:"gl-wrap"},J={class:"gl-global"},E=M((()=>(0,r._)("div",{class:"image"},[(0,r._)("img",{src:d,alt:"ロゴ"})],-1))),B={key:0,class:"side"},K=M((()=>(0,r._)("h3",null,"フレンドリスト",-1))),L=M((()=>(0,r._)("hr",null,null,-1))),R=M((()=>(0,r._)("div",null,null,-1))),Y=[K,L,R],X={key:1,class:"side"},Q=M((()=>(0,r._)("h3",null,"ユーザー検索",-1))),ee=M((()=>(0,r._)("hr",null,null,-1))),te=[Q,ee],ae={key:2,class:"side"},se=M((()=>(0,r._)("h3",null,"通知BOX",-1))),re=M((()=>(0,r._)("hr",null,null,-1))),ie=[se,re];function oe(e,t,a,s,i,o){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("div",j,[(0,r._)("div",J,[E,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(l,{to:"/MyPage"},{default:(0,r.w5)((()=>[(0,r.Uk)("Profile")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(l,{to:"/CreateImage"},{default:(0,r.w5)((()=>[(0,r.Uk)("Create")])),_:1})]),(0,r._)("li",{onClick:t[0]||(t[0]=e=>o.GlobalSide(0)),class:"pointer"},"Friend"),(0,r._)("li",{onClick:t[1]||(t[1]=e=>o.GlobalSide(1)),class:"pointer"},"Search"),(0,r._)("li",{onClick:t[2]||(t[2]=e=>o.GlobalSide(2)),class:"pointer"},"Notice")]),(0,r._)("p",{class:"logout pointer",onClick:t[3]||(t[3]=e=>o.Logout())},"Logout")]),i.sideFriend?((0,r.wg)(),(0,r.iD)("div",B,Y)):(0,r.kq)("",!0),i.sideSearch?((0,r.wg)(),(0,r.iD)("div",X,te)):(0,r.kq)("",!0),i.sideNotice?((0,r.wg)(),(0,r.iD)("div",ae,ie)):(0,r.kq)("",!0)])])}var le={name:"GlobalHeader",components:{},data(){return{sideFriend:!1,sideSearch:!1,sideNotice:!1,sideBar:""}},methods:{GlobalSide(e){0==e?(this.sideFriend=!this.sideFriend,this.sideSearch=!1,this.sideNotice=!1):1==e?(this.sideFriend=!1,this.sideSearch=!this.sideSearch,this.sideNotice=!1):2==e&&(this.sideFriend=!1,this.sideSearch=!1,this.sideNotice=!this.sideNotice)},Logout(){this.$cookies.remove("access"),this.$router.push("/SignIn")}}};const ne=(0,l.Z)(le,[["render",oe],["__scopeId","data-v-4a13915c"]]);var ce=ne,ue={data(){return{loadFlag:!1,user:localStorage.getItem("id"),title:"",keyword:"",text_uri:"",image_uri:"test.png",error:!1}},name:"CreateImage",components:{VueElementLoading:T(),GlobalHeader:ce},methods:{ImageRequest:async function(){if(this.error=!1,""==this.title||""==this.keyword||""==this.text_uri)return void(this.error=!0);this.loadFlag=!0,console.log(this.loadFlag);const e={user_id:this.user,keyword:this.keyword};await G.Z.post(F+"/ai/debug",e).then((()=>{localStorage.setItem("title",this.title),localStorage.setItem("keyword",this.keyword),localStorage.setItem("text_uri",this.text_uri),localStorage.setItem("image_uri",this.image_uri),this.loadFlag=!1,this.$router.push("/PreviewImage")})).catch((e=>{console.log(e),console.log("失敗")})),this.loadFlag=!1}},created(){null===this.$cookies.get("access")&&this.$router.push("/SignIn")}};const de=(0,l.Z)(ue,[["render",Z],["__scopeId","data-v-e6faac48"]]);var pe=de,he=a(7139);const ge=e=>((0,r.dD)("data-v-3cd8bb86"),e=e(),(0,r.Cn)(),e),me={class:"flex"},_e={class:"fixedGlobal"},we={class:"preOWrap"},ve={class:"flex preOverWrap"},ke={class:"preWrap"},fe={class:"flex innerWrap"},ye={class:"title"},be=ge((()=>(0,r._)("p",null,"公開",-1))),Ie={class:"flex"},Se={class:"text_uri"},xe={class:"preImg"},Ce=["src"],De={class:"flex buttonWrap"};function Ue(e,t,a,s,i,o){const l=(0,r.up)("GlobalHeader"),n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",me,[(0,r._)("div",_e,[(0,r.Wm)(l)]),(0,r._)("div",we,[(0,r._)("div",ve,[(0,r._)("div",ke,[(0,r._)("div",fe,[(0,r._)("p",ye,(0,he.zw)(i.title),1),be]),(0,r._)("ul",Ie,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.keywordAry,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"keyword"},(0,he.zw)(e),1)))),128))]),(0,r._)("p",Se,(0,he.zw)(i.text_uri),1)]),(0,r._)("div",xe,[(0,r._)("img",{src:o.imgSrc,alt:"画像"},null,8,Ce)])]),(0,r._)("div",De,[(0,r.Wm)(n,{to:"/createImage",class:"button preButton"},{default:(0,r.w5)((()=>[(0,r.Uk)("戻る")])),_:1}),(0,r._)("button",{class:"button",onClick:t[0]||(t[0]=(...e)=>o.CreateNote&&o.CreateNote(...e))},"ノート作成")])])])}var We={name:"PreviewImage",components:{GlobalHeader:ce},data(){return{user:localStorage.getItem("id"),title:localStorage.getItem("title"),keyword:localStorage.getItem("keyword"),text_uri:localStorage.getItem("text_uri"),image_uri:localStorage.getItem("image_uri"),is_public:!1,keywordAry:[]}},methods:{CreateNote:async function(){const e={user:this.user,title:this.title,keyword:this.keyword,text_uri:this.text_uri,image_uri:this.image_uri,is_public:this.is_public};console.log(e);const t=this.$cookies.get("access");await G.Z.post(q+"/api/v1/brains/",e,{headers:{Authorization:"JWT "+t}}).then((()=>{console.log("成功"),this.$router.push({name:"myPage"})})).catch((e=>{console.log(e)}))}},computed:{imgSrc(){const e="/media/brain/"+this.image_uri;return e}},created(){null===this.$cookies.get("access")&&this.$router.push("/SignIn"),localStorage.removeItem("title"),localStorage.removeItem("keyword"),localStorage.removeItem("text_uri"),localStorage.removeItem("image_uri"),this.keywordAry=this.keyword.split(","),console.log(this.keywordAry)}};const Pe=(0,l.Z)(We,[["render",Ue],["__scopeId","data-v-3cd8bb86"]]);var $e=Pe;const Ve=e=>((0,r.dD)("data-v-2b204074"),e=e(),(0,r.Cn)(),e),ze={class:"wrap"},Oe=Ve((()=>(0,r._)("div",{class:"image"},[(0,r._)("img",{src:d,alt:"ロゴ"})],-1))),Ze=Ve((()=>(0,r._)("h1",null,"サインアップ",-1))),Ge={class:"innerwrap"},qe={key:0,class:"errorSpan"},Fe=Ve((()=>(0,r._)("br",null,null,-1))),Ae={key:0,class:"errorSpan"},He=Ve((()=>(0,r._)("br",null,null,-1))),Te={key:0,class:"errorSpan"},Me={key:1,class:"errorSpan"},Ne=Ve((()=>(0,r._)("br",null,null,-1))),je={key:0,class:"errorSpan"},Je=Ve((()=>(0,r._)("br",null,null,-1))),Ee={class:"button"},Be={class:"signin"};function Ke(e,t,a,i,o,l){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",ze,[Oe,Ze,(0,r._)("div",Ge,[(0,r._)("p",null,[(0,r.Uk)("ユーザー名"),o.errorUsername?((0,r.wg)(),(0,r.iD)("span",qe,"※ユーザー名が入力されていません")):(0,r.kq)("",!0)]),(0,r._)("p",null,(0,he.zw)(o.error.username),1),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e),type:"text",class:"text"},null,512),[[s.nr,o.username]]),Fe,(0,r._)("p",null,[(0,r.Uk)("メールアドレス"),o.errorEmail?((0,r.wg)(),(0,r.iD)("span",Ae,"※メールアドレスが入力されていません")):(0,r.kq)("",!0)]),(0,r._)("p",null,(0,he.zw)(o.error.email),1),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.email=e),type:"text",class:"text"},null,512),[[s.nr,o.email]]),He,(0,r._)("p",null,[(0,r.Uk)("パスワード "),o.errorPassword?((0,r.wg)(),(0,r.iD)("span",Te,"※パスワードが入力されていません")):(0,r.kq)("",!0),o.errorCheck?((0,r.wg)(),(0,r.iD)("span",Me,"※確認パスワードと違います")):(0,r.kq)("",!0)]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.password=e),type:"password",class:"text"},null,512),[[s.nr,o.password]]),Ne,(0,r._)("p",null,[(0,r.Uk)("確認用パスワード"),o.errorCheckpass?((0,r.wg)(),(0,r.iD)("span",je,"※確認用パスワードが入力されていません")):(0,r.kq)("",!0)]),(0,r._)("p",null,(0,he.zw)(o.error.password),1),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.checkpass=e),type:"password",class:"text"},null,512),[[s.nr,o.checkpass]]),Je,(0,r._)("div",Ee,[(0,r._)("button",{onClick:t[4]||(t[4]=e=>l.SignUp())},"新規登録")]),(0,r._)("div",Be,[(0,r.Wm)(n,{to:"/SignIn"},{default:(0,r.w5)((()=>[(0,r.Uk)("サインイン")])),_:1})])])])}var Le={name:"SignUp",components:{},data(){return{username:"",password:"",checkpass:"",email:"",signUp:[],errorUsername:!1,errorPassword:!1,errorCheckpass:!1,errorEmail:!1,errorCheck:!1,error:[]}},methods:{SignUp(){if(this.errorUsername=!1,this.errorPassword=!1,this.errorCheckpass=!1,this.errorCheck=!1,this.errorEmail=!1,""==this.username||""==this.password||""==this.checkpass||""==this.email)return""==this.username&&(this.errorUsername=!0),""==this.password&&(this.errorPassword=!0),""==this.checkpass&&(this.errorCheckpass=!0),void(""==this.email&&(this.errorEmail=!0));if(this.password!=this.checkpass)return void(this.errorCheck=!0);const e={email:this.email,username:this.username,password:this.password};G.Z.post(q+"/api/v1/auth/users/",e).then((e=>{this.signUp=e.data,console.log("success"),console.log(this.signUp),this.$router.push({name:"signIn"})})).catch((e=>{this.error=e.response.data,console.log(e),console.log(this.error)}))}}};const Re=(0,l.Z)(Le,[["render",Ke],["__scopeId","data-v-2b204074"]]);var Ye=Re;const Xe=e=>((0,r.dD)("data-v-206d12dc"),e=e(),(0,r.Cn)(),e),Qe={class:"wrap"},et=Xe((()=>(0,r._)("div",{class:"image"},[(0,r._)("img",{src:d,alt:"ロゴ"})],-1))),tt=Xe((()=>(0,r._)("h1",null,"サインイン",-1))),at={class:"innerwrap"},st={key:0,class:"errorSpan"},rt=Xe((()=>(0,r._)("br",null,null,-1))),it={key:0,class:"errorSpan"},ot=Xe((()=>(0,r._)("br",null,null,-1))),lt={class:"button"},nt={class:"signup"};function ct(e,t,a,i,o,l){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",Qe,[et,tt,(0,r._)("div",at,[(0,r._)("p",null,[(0,r.Uk)("メールアドレス"),o.errorMail?((0,r.wg)(),(0,r.iD)("span",st,"※メールアドレスが入力されていません")):(0,r.kq)("",!0)]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),type:"text",class:"text"},null,512),[[s.nr,o.email]]),rt,(0,r._)("p",null,[(0,r.Uk)("パスワード　　"),o.errorPass?((0,r.wg)(),(0,r.iD)("span",it,"※パスワードが入力されていません")):(0,r.kq)("",!0)]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),type:"password",class:"text"},null,512),[[s.nr,o.password]]),ot,(0,r._)("div",lt,[(0,r._)("button",{onClick:t[2]||(t[2]=e=>l.SignIn())},"サインイン")]),(0,r._)("div",nt,[(0,r.Wm)(n,{to:"/SignUp"},{default:(0,r.w5)((()=>[(0,r.Uk)("新規登録")])),_:1})])])])}var ut={name:"SignIn",components:{},data(){return{password:"",email:"",data:[],errorMail:!1,errorPass:!1}},methods:{SignIn(){if(this.error=!1,this.errorMail=!1,this.errorPass=!1,""==this.password||""==this.email)return""==this.email&&(this.errorMail=!0),""==this.password&&(this.errorPass=!0),void console.log("だめです！");const e={password:this.password,email:this.email};G.Z.post(q+"/api/v1/auth/jwt/create/",e).then((e=>{this.data=e.data;const t=e.data.access;let a=null;console.log("ログイン成功"),console.log(t),G.Z.get(q+"/api/v1/auth/users/me/",{headers:{Authorization:"JWT "+t}}).then((e=>{a=e.data.id,this.$cookies.set("access",t,3e3),localStorage.setItem("id",a),console.log("成功"),this.$router.push({name:"myPage"})})).catch((()=>{console.log("ログイン失敗")}))})).catch((()=>{console.log("ログイン失敗")}))}}};const dt=(0,l.Z)(ut,[["render",ct],["__scopeId","data-v-206d12dc"]]);var pt=dt;const ht=e=>((0,r.dD)("data-v-7fa0af6a"),e=e(),(0,r.Cn)(),e),gt={class:"flex"},mt={class:"fixedGlobal"},_t={class:"userWrap"},wt={class:"flex"},vt={class:"myIcon"},kt=["src"],ft={class:"textWrap"},yt={class:"username"},bt=ht((()=>(0,r._)("div",{class:"flex buttonWrap"},[(0,r._)("h2",null,"すべての記憶"),(0,r._)("button",null,"申請したい記憶を選択")],-1))),It={class:"imageWrap"},St=["onClick"],xt={class:"myPageImage"},Ct=["src"],Dt={class:"opacity"};function Ut(e,t,a,s,i,o){const l=(0,r.up)("GlobalHeader");return(0,r.wg)(),(0,r.iD)("div",gt,[(0,r._)("div",mt,[(0,r.Wm)(l)]),(0,r._)("div",null,[(0,r._)("div",_t,[(0,r._)("div",wt,[(0,r._)("div",vt,[(0,r._)("img",{src:i.user.icon_uri,alt:"アイコン"},null,8,kt)]),(0,r._)("div",ft,[(0,r._)("p",yt,(0,he.zw)(i.user.username),1)])]),bt]),(0,r._)("div",It,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.data,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"imageBox",onClick:t=>o.ImageView(e.id)},[(0,r._)("div",xt,[(0,r._)("img",{src:"/media/brain/"+e.image_uri,alt:"画像"},null,8,Ct),(0,r._)("p",Dt,(0,he.zw)(e.title),1)])],8,St)))),128))])])])}var Wt={name:"MyPage",components:{GlobalHeader:ce},data(){return{data:[],user:[]}},methods:{Created:async function(){const e=this.$cookies.get("access");console.log(e),await G.Z.get(q+"/api/v1/auth/users/me/",{headers:{Authorization:"JWT "+e}}).then((e=>{this.user=e.data,console.log(this.user)})).catch((e=>{console.log(e)})),await G.Z.get(q+"/api/v1/brains/",{headers:{Authorization:"JWT "+e}}).then((e=>{this.data=e.data,console.log(this.data)})).catch((e=>{console.log(e)}))},ImageView(e){localStorage.setItem("noteId",e),this.$router.push("/imageView")}},created(){null!==this.$cookies.get("access")?this.Created():this.$router.push("/SignIn")}};const Pt=(0,l.Z)(Wt,[["render",Ut],["__scopeId","data-v-7fa0af6a"]]);var $t=Pt;const Vt={class:"flex"},zt={class:"fixedGlobal"},Ot={class:"preOWrap"},Zt={class:"flex preOverWrap"},Gt={class:"preWrap"},qt={class:"flex innerWrap"},Ft={class:"title"},At={class:"flex"},Ht={class:"text_uri"},Tt={class:"preImg"},Mt=["src"],Nt={class:"scrWrap"},jt={class:"flex"},Jt=["onClick"],Et=["src"],Bt={class:"opacity"};function Kt(e,t,a,s,i,o){const l=(0,r.up)("GlobalHeader");return(0,r.wg)(),(0,r.iD)("div",Vt,[(0,r._)("div",zt,[(0,r.Wm)(l)]),(0,r._)("div",Ot,[(0,r._)("div",Zt,[(0,r._)("div",Gt,[(0,r._)("div",qt,[(0,r._)("p",Ft,(0,he.zw)(i.data.title),1),!0===this.is_public?((0,r.wg)(),(0,r.iD)("p",{key:0,class:"public",onClick:t[0]||(t[0]=e=>o.Public(0))},"公開")):((0,r.wg)(),(0,r.iD)("p",{key:1,class:"public",onClick:t[1]||(t[1]=e=>o.Public(1))},"非公開"))]),(0,r._)("ul",At,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.keywordAry,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"keyword"},(0,he.zw)(e),1)))),128))]),(0,r._)("p",Ht,(0,he.zw)(i.data.text_uri),1)]),(0,r._)("div",Tt,[(0,r._)("img",{src:i.data.image_uri,alt:"画像"},null,8,Mt)])]),(0,r._)("div",Nt,[(0,r._)("ul",jt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.scrollData,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"scrImg",onClick:t=>o.ImageView(e.id)},[(0,r._)("img",{src:o.ImgSrc(e.image_uri),alt:"画像"},null,8,Et),(0,r._)("p",Bt,(0,he.zw)(e.title),1)],8,Jt)))),128))])])])])}var Lt={name:"ImageView",data(){return{data:[],scrollData:[],keywordAry:"",is_public:null}},components:{GlobalHeader:ce},methods:{ImageData:async function(){const e=localStorage.getItem("noteId"),t=this.$cookies.get("access");await G.Z.get(q+"/api/v1/brains/"+e+"/",{headers:{Authorization:"JWT "+t}}).then((e=>{this.data=e.data,this.data.image_uri=A+this.data.image_uri,this.keywordAry=this.data.keyword.split(","),this.is_public=this.data.is_public,console.log("成功")})).catch((e=>{console.log(e)}))},ScrollData:async function(){const e=this.$cookies.get("access");await G.Z.get(q+"/api/v1/brains/",{headers:{Authorization:"JWT "+e}}).then((e=>{this.scrollData=e.data})).catch((e=>{console.log(e)}))},ImgSrc(e){const t=A+e;return t},ImageView(e){localStorage.setItem("noteId",e),this.$router.go({path:this.$router.currentRoute.path,force:!0})},Public:async function(e){this.is_public=0!==e;const t={is_public:this.is_public},a=localStorage.getItem("noteId"),s=this.$cookies.get("access");await G.Z.patch(q+"/api/v1/brains/"+a+"/",t,{headers:{Authorization:"JWT "+s}}).then((()=>{console.log("成功")})).catch((e=>{console.log(e)}))}},created(){null!==this.$cookies.get("access")?(this.ImageData(),this.ScrollData()):this.$router.push("/SignIn")}};const Rt=(0,l.Z)(Lt,[["render",Kt],["__scopeId","data-v-40517b68"]]);var Yt=Rt;const Xt=[{path:"/",name:"home",component:_},{path:"/signUp",name:"signUp",component:Ye},{path:"/signIn",name:"signIn",component:pt},{path:"/myPage",name:"myPage",component:$t},{path:"/createImage",name:"createImage",component:pe},{path:"/previewImage",name:"previewImage",component:$e},{path:"/imageView",name:"imageView",component:Yt}],Qt=(0,u.p7)({history:(0,u.PO)("/"),routes:Xt});var ea=Qt,ta=a(5269),aa=a.n(ta);(0,s.ri)(c).use(ea).use(aa()).mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,i){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,n=0;n<s.length;n++)(!1&i||o>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[n])}))?s.splice(n--,1):(l=!1,i<o&&(o=i));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,o=s[0],l=s[1],n=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(n)var u=n(a)}for(t&&t(s);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},s=self["webpackChunkmemore"]=self["webpackChunkmemore"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9573)}));s=a.O(s)})();
//# sourceMappingURL=app.4503a2d4.js.map