(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9398],{9398:function(e,a,t){"use strict";t.r(a);var r=t(85893),l=t(53917),n=t(75722),s=t(3697),i=t(15052),o=t(94715),d=t(39964),c=t(48802),h=t(62481),m=t(36814),u=t(57637),g=t(81156),p=t(82702),x=t(53533),j=t(52866),f=t(72923),Z=t(20286),v=t(64723),y=t(41664),S=t.n(y),b=t(67294),_=t(2664),w=t(32871),C=t(93967),T=t.n(C),N=t(16680),I=t(39684),B=t(15382),P=t(58533),k=t(23279),A=t.n(k),E=t(94405),O=t.n(E);let{Option:F}=s.default,$={handleLogin:I.x4},U=(0,_.$j)(e=>({siteName:e.settings.siteName,currentUser:e.user.current}),$),q=[{label:"College",value:"College"},{label:"High School",value:"High School"},{label:"Other",value:"Other"}],H=[{label:"All Teams",value:""},{label:"Men's",value:"men"},{label:"Women's",value:"women"}],L=[{id:"other",displayName:"Other/Not listed",nickName:"",mascot:"",abbreviation:"",city:"",state:"",country:"",fullName:"Other/Not listed",division:"",color1:"",color2:""}];a.default=U(function(e){let{currentUser:a,handleLogin:t}=e,[y,_]=(0,b.useState)(!1),[C,I]=(0,b.useState)(!1),[k,E]=(0,b.useState)("College"),[$,U]=(0,b.useState)("College"),[z,D]=(0,b.useState)("College"),[M,R]=(0,b.useState)(""),[V,G]=(0,b.useState)("All Teams"),[W,J]=(0,b.useState)("All Teams"),[X,Y]=(0,b.useState)({data:[],total:0}),[K,Q]=(0,b.useState)({data:[],total:0}),[ee,ea]=(0,b.useState)([]),[et,er]=(0,b.useState)(!1),[el,en]=(0,b.useState)(!0),[es,ei]=(0,b.useState)(null),[eo,ed]=(0,b.useState)(1),[ec,eh]=(0,b.useState)(1),[em]=(0,b.useState)(99),[eu,eg]=(0,b.useState)(""),[ep,ex]=(0,b.useState)("displayName"),[ej,ef]=(0,b.useState)("asc"),[eZ]=i.Z.useForm(),ev=async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{let t=e?eo+1:eo;_(!0);let{data:r}=await N.u.getListSchools({limit:em,offset:a?0:t*em,q:eu,sort:ej,sortBy:ep});r&&(e?Y({data:X.data.concat(r.data),total:r.total}):Y({data:r.data,total:r.total})),ed(a?0:t)}catch(e){(0,l.x2)(e||"Something went wrong! Please try again")}finally{_(!1)}},ey=A()(async e=>{eg(e)},500),eS=async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{let{data:t}=await N.u.getListTeams({gender:M,limit:em,offset:a?0:(e?ec+1:ec)*em});t&&Q({data:e?K.data.concat(t.data):t.data,total:t.total})}catch(e){(0,l.x2)(e||"Something went wrong! Please try again")}},eb=async e=>{let t=await B.v.statesList(e);ea(t.data);let r=t.data.find(e=>e===a?.bankingInformation?.state);r&&eZ.setFieldsValue({state:r})},e_=async e=>{await eZ.setFieldsValue({education:e.id}),er("other"===e.id),ei(e)};(0,b.useEffect)(()=>{eb("US")},[]),(0,b.useEffect)(()=>{ev(!1,!0)},[eu]),(0,b.useEffect)(()=>{eS(!1,!0)},[M]);let ew=e=>{"school"===e&&ev(!0,!1)},eC=async e=>{try{I(!0);let{data:a}=await n.O.registerPerformer(e,()=>{});a&&t({password:e.password,username:e.username})}catch(e){(0,l.x2)(e)}finally{I(!1)}},eT=(e,a)=>{let{target:{value:t}}=e;switch(a){case"education":E(t),U(t),D(q.filter(e=>e.value===t)[0].label),er("High School"===t),en("College"===t);break;case"team":R(t),G(t),J(H.filter(e=>e.value===t)[0].label);break;default:return!1}return!0};return(0,r.jsx)("div",{className:"main-container",children:(0,r.jsxs)("div",{className:T()(O()["register-box"]),children:[(0,r.jsx)("h1",{className:O().title,children:"Athlete Sign Up"}),(0,r.jsx)("p",{className:"text-center",children:(0,r.jsx)("small",{children:"Sign up to make money and interact with your boosters!"})}),(0,r.jsxs)(i.Z,{name:"creator_register",initialValues:{country:"US",dateOfBirth:""},onFinish:eC,scrollToFirstError:!0,form:eZ,children:[(0,r.jsx)(o.Z,{children:(0,r.jsx)(d.Z,{span:24,children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(c.Z,{children:"School"}),(0,r.jsx)(d.Z,{span:24,style:{textAlign:"center"},children:(0,r.jsxs)(h.Z,{direction:"vertical",children:[(0,r.jsx)(m.ZP.Group,{options:q,onChange:e=>eT(e,"education"),value:$,name:z,optionType:"button"}),el&&(0,r.jsx)(i.Z.Item,{name:"education",rules:[{required:!0}],children:"College"!==k?(0,r.jsx)(s.default,{style:{width:"100%"},placeholder:`Select ${z}`,onChange:e_,children:L.concat(X.data).map(e=>(0,r.jsx)(s.default.Option,{value:e.id,children:e.displayName||e.fullName},e.id))}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{value:eu||void 0,showSearch:!0,filterOption:!1,listHeight:400,className:T()(O()["search-box"]),placeholder:"Search",onSearch:e=>ey(e),open:!1,defaultActiveFirstOption:!1,autoClearSearchValue:!1,suffixIcon:(0,r.jsx)(j.Z,{})}),(0,r.jsx)("div",{id:"scrollableDiv",style:{height:300,overflow:"scroll",padding:"0 16px",border:"1px solid rgba(140, 140, 140, 0.35)"},children:(0,r.jsx)(P.Z,{dataLength:X?.data.length,next:()=>ew("school"),hasMore:X?.data.length<X.total,loader:(0,r.jsx)(u.Z,{avatar:!0,paragraph:{rows:1},active:!0}),scrollableTarget:"scrollableDiv",children:(0,r.jsx)(g.Z,{loading:y,dataSource:X?.data.length?L.concat(X.data):[],renderItem:e=>(0,r.jsx)(g.Z.Item,{className:T()(O().item,{[O().active]:e?.id===es?.id}),onClick:()=>e_(e),children:(0,r.jsx)(g.Z.Item.Meta,{title:(0,r.jsx)("span",{children:e.displayName||e.fullName})})},e.id)})})})]})})]})}),(0,r.jsx)(c.Z,{children:"Sport"}),(0,r.jsx)(d.Z,{span:24,style:{textAlign:"center"},children:(0,r.jsxs)(h.Z,{direction:"vertical",children:[(0,r.jsx)(m.ZP.Group,{options:H,onChange:e=>eT(e,"team"),value:V,name:W,optionType:"button"}),(0,r.jsx)(i.Z.Item,{name:"team",rules:[{required:!0}],children:(0,r.jsx)(s.default,{style:{width:"100%"},placeholder:`Select ${W}`,children:K.data.map(e=>(0,r.jsx)(s.default.Option,{value:e.slug,children:"BOTH"!==e.gender?`${e.gender} ${e.sport}`:`${e.sport}`},e._id))})})]})}),(0,r.jsx)(c.Z,{children:"Player Info"}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"firstName",validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please input your name!"},{pattern:/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,message:"First name can not contain number and special character"}],children:(0,r.jsx)(p.default,{placeholder:"First name"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"lastName",validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please input your name!"},{pattern:/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,message:"Last name can not contain number and special character"}],children:(0,r.jsx)(p.default,{placeholder:"Last name"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"name",validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please input your display name!"},{pattern:/^(?=.*\S).+$/g,message:"Display name can not contain only whitespace"},{min:3,message:"Display name must containt at least 3 characters"}],children:(0,r.jsx)(p.default,{placeholder:"Display name"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"username",validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please input your username!"},{pattern:/^[a-z0-9]+$/g,message:"Username must contain only lowercase alphanumerics only!"},{min:3,message:"username must containt at least 3 characters"}],children:(0,r.jsx)(p.default,{placeholder:"Username"})})}),(0,r.jsx)(d.Z,{span:24,children:(0,r.jsx)(i.Z.Item,{name:"email",validateTrigger:["onChange","onBlur"],rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,r.jsx)(p.default,{className:O()["register-input"],placeholder:"Email address"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"password",validateTrigger:["onChange","onBlur"],rules:[{pattern:/^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[^\w\d]).*$/g,message:"Password must have minimum 8 characters, at least 1 number, 1 uppercase letter, 1 lowercase letter & 1 special character"},{required:!0,message:"Please input your password!"}],children:(0,r.jsx)(p.default.Password,{placeholder:"Password"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"confirm",dependencies:["password"],validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please enter confirm password!"},e=>{let{getFieldValue:a}=e;return{validator:(e,t)=>t&&a("password")!==t?Promise.reject(Error("Passwords do not match together!")):Promise.resolve()}}],children:(0,r.jsx)(p.default.Password,{placeholder:"Confirm password"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"country",rules:[{required:!0}],children:(0,r.jsx)(s.default,{showSearch:!0,optionFilterProp:"label",onChange:e=>eb(e),children:w.o.map(e=>(0,r.jsxs)(F,{value:e.code,label:e.name,children:[(0,r.jsx)("img",{alt:"country_flag",src:e.flag,width:"25px"})," ",e.name]},e.code))})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"state",children:(0,r.jsx)(s.default,{disabled:"US"!==eZ.getFieldValue("country"),placeholder:"State",optionFilterProp:"label",showSearch:!0,children:ee.map(e=>(0,r.jsx)(F,{value:e,label:e,children:e},e))})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"city",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{placeholder:"City"})})}),et&&(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"schoolName",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{placeholder:"School Name"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"phoneNumber",validateTrigger:["onChange","onBlur"],rules:[{pattern:new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/u),message:"Please enter valid phone number format eg +86 800 555 1234"}],children:(0,r.jsx)(p.default,{placeholder:"Phone Number"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"position",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{placeholder:"Position (optional)"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"jersey",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{placeholder:"Jersey # (optional)"})})}),"College"===k&&(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"previousSchoolName",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{placeholder:"Previous High School"})})}),(0,r.jsx)(c.Z,{children:"Socials (all optional)"}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"instagram",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{addonBefore:(0,r.jsx)(f.Z,{}),placeholder:"Instagram"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"tiktok",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{addonBefore:(0,r.jsx)(Z.Z,{}),placeholder:"Tiktok"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"twitter",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{addonBefore:(0,r.jsx)(v.Z,{}),placeholder:"Twitter"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"personalWeb",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{addonBefore:"https://",placeholder:"Web"})})}),(0,r.jsx)(c.Z,{children:"Agent/Manager Info (all optional)"}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"managerName",validateTrigger:["onChange","onBlur"],rules:[{pattern:/^(?=.*\S).+$/g,message:"Name can not contain only whitespace"},{min:3,message:"Name must containt at least 3 characters"}],children:(0,r.jsx)(p.default,{placeholder:"Name"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"company",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{className:O()["register-input"],placeholder:"Company"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"managerEmail",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{className:O()["register-input"],placeholder:"Email"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"managerPhoneNumber",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{placeholder:"Phone"})})}),(0,r.jsx)(d.Z,{span:12,children:(0,r.jsx)(i.Z.Item,{name:"invilationCode",validateTrigger:["onChange","onBlur"],children:(0,r.jsx)(p.default,{placeholder:"Invilation Code"})})})]})})}),(0,r.jsx)(i.Z.Item,{style:{textAlign:"center"},children:(0,r.jsx)(x.ZP,{type:"primary",htmlType:"submit",disabled:C,loading:C,className:O()["form-button"],children:"CREATE YOUR ACCOUNT"})})]}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("p",{children:["By signing up you agree to our"," ",(0,r.jsx)(S(),{href:"/page/terms-of-service",target:"_blank",children:"Terms of Service"})," ","and"," ",(0,r.jsx)(S(),{href:"/page/privacy-policy",target:"_blank",children:"Privacy Policy"}),"."]}),(0,r.jsxs)("p",{children:["Have an account already? \xa0",(0,r.jsx)(S(),{href:"/auth/login",children:"Log in here."})]}),(0,r.jsxs)("p",{children:["Are you a booster? \xa0",(0,r.jsx)(S(),{href:"/auth/booster-register",children:"Sign up here."})]})]})]})})})},94405:function(e){e.exports={"register-box":"model-register-form_register-box__JGARj",item:"model-register-form_item__v7wYe",active:"model-register-form_active__wSBdC",logo:"model-register-form_logo__du7XF","register-input":"model-register-form_register-input__Bgiii",title:"model-register-form_title__UIo_M","form-button":"model-register-form_form-button__5lzOh","upload-grp":"model-register-form_upload-grp__nD_cX","model-photo-verification":"model-register-form_model-photo-verification__RBdw_","id-block":"model-register-form_id-block__ija9U","ant-upload-picture-card-wrapper":"model-register-form_ant-upload-picture-card-wrapper__STZsG","avatar-uploader":"model-register-form_avatar-uploader__zHCUy","img-id":"model-register-form_img-id__S9OkE"}}}]);