"use strict";(self.webpackChunkmprew_heroku=self.webpackChunkmprew_heroku||[]).push([[302],{29808:($,c,t)=>{t.r(c),t.d(c,{SingleSignOn:()=>E,default:()=>K});var a=t(67294),l=t(68547),P=t(84734),y=t.n(P),i=t(78862),C=t(19408),M=t(62031),b=t(9008),I=t(49425),L=t(47857),f=t(43808),d=t(34626),D=t(97132),T=t(18446),B=t.n(T),G=t(8610),m=t(59942),h=t(87751),u=t(53209);const j=u.Ry().shape({autoRegister:u.Xg().required(l.translatedErrors.required),defaultRole:u.nK().when("autoRegister",(e,s)=>e?s.required(l.translatedErrors.required):s.nullable())});var A=Object.defineProperty,F=Object.defineProperties,x=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,v=(e,s,n)=>s in e?A(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,Z=(e,s)=>{for(var n in s||(s={}))H.call(s,n)&&v(e,n,s[n]);if(p)for(var n of p(s))N.call(s,n)&&v(e,n,s[n]);return e},z=(e,s)=>F(e,x(s));const S=z(Z({},h.Z.settings.sso),{readRoles:h.Z.settings.roles.read}),E=()=>{const{formatMessage:e}=(0,D.useIntl)(),{isLoading:s,allowedActions:{canUpdate:n,canReadRoles:U}}=(0,l.useRBAC)(S),[{formErrors:r,initialData:V,isLoading:W,modifiedData:g,showHeaderButtonLoader:X},_,{handleChange:R,handleSubmit:w}]=(0,m.G4)((0,G.IF)("providers/options"),j,()=>{},["autoRegister","defaultRole"]),{roles:J}=(0,m.bF)(U);(0,l.useFocusWhenNavigate)();const Q=s||W;(0,a.useEffect)(()=>{if(r.defaultRole){const o='[name="defaultRole"]';document.querySelector(o).focus()}},[r]);const O=B()(V,g);return a.createElement(i.Layout,null,a.createElement(l.SettingsPageTitle,{name:"SSO"}),a.createElement(M.Main,{tabIndex:-1},a.createElement("form",{onSubmit:o=>{if(O){o.preventDefault();return}w(o)}},a.createElement(i.HeaderLayout,{primaryAction:a.createElement(C.Button,{"data-testid":"save-button",disabled:O,loading:X,startIcon:a.createElement(y(),null),type:"submit",size:"L"},e({id:"global.save",defaultMessage:"Save"})),title:e({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:e({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),a.createElement(i.ContentLayout,null,Q?a.createElement(l.LoadingIndicatorPage,null):a.createElement(b.Stack,{spacing:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},a.createElement(I.Typography,{variant:"delta",as:"h2"},e({id:"global.settings",defaultMessage:"Settings"})),a.createElement(d.Grid,{gap:4},a.createElement(d.GridItem,{col:6,m:6,s:12},a.createElement(L.ToggleInput,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!n,checked:g.autoRegister,hint:e({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:e({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{R({target:{name:"autoRegister",value:o.target.checked}})}})),a.createElement(d.GridItem,{col:6,m:6,s:12},a.createElement(f.Select,{disabled:!n,hint:e({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:r.defaultRole?e({id:r.defaultRole.id,defaultMessage:r.defaultRole.id}):"",label:e({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:o=>{R({target:{name:"defaultRole",value:o}})},placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:g.defaultRole},J.map(({id:o,name:Y})=>a.createElement(f.Option,{key:o,value:o.toString()},Y))))))))))},K=()=>a.createElement(l.CheckPagePermissions,{permissions:S.main},a.createElement(E,null))}}]);
