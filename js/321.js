(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[321],{35860:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>re});var s=i(933),a=i(88288),t=i(7321),l=i(44979),r=i(70593),o=i(27163),c=i(59635),d=i(92257),u=i(86813);class E{constructor(){}async dispose(){}async activate(){}async deactivate(){}}var m,h=i(85893),N=i(67294),v=i(80308),f=i(29707),j=i(10637),g=i(3952),R=i(28787),D=i(80383),_=i(25537),x=i(76933),p=i(78897),T=i(49114),b=i(6184),O=i(46261),k=i(85642),F=i(96361),U=i(94184),S=i.n(U),I=i(77963),L=i(9263),A=i(41865),y=i(63802),w=i(27332);function C(){const e=(0,p.b)(),n=(0,I.y)(L.gx.DefurnishView,!0),i=(0,A.z)(),s=(0,w.Y)(y.c8,(()=>{const e=n?"off":"on";return i.trackToolGuiEvent("settings",`click_settings_${L.gx.DefurnishView}_${e}`),[{key:L.gx.DefurnishView,value:!n}]})),a=e.t(t.Z.TOOLS.SETTINGS_PANEL);return(0,h.jsx)(O.P,Object.assign({icon:"settings",tooltip:a,variant:v.Wu.TERTIARY,tooltipPlacement:"bottom-end",analytic:"defurnish_settings_click",className:"defurnish-settings",testId:"DefurnishViewSettings"},{children:(0,h.jsx)(k.J,{children:(0,h.jsxs)("div",Object.assign({className:"settings-toggle"},{children:[(0,h.jsx)("div",Object.assign({className:"settings-label"},{children:e.t(t.Z.WORKSHOP.DEFURNISH.DEFURN_SETTINGS_VIEW)})),(0,h.jsx)(F.Z,{className:S()("player-option-toggle"),onToggle:s,enabled:!0,onOffLabel:!1,toggled:n,testId:"DefurnishViewSettingToggle"})]}))})}))}!function(e){e.DEFAULT="https://support.matterport.com/",e.CONTACT_SUPPORT="https://support.matterport.com/s/contactsupport?language=en_US",e.DEFURNISH_FEEDBACK="https://docs.google.com/forms/d/e/1FAIpQLSdHSiuy75oz9DmfG_VkOI1mdTqNS-Oq0yXUg6x4jrwGMNFjaA/viewform",e.DEFURNISH_LEARN_MORE="https://support.matterport.com/s/article/Defurnish-your-Space",e.MANAGE_FEATURES="/settings/features/manage"}(m||(m={}));var M=i(87466),P=i(22422),q=i(38637),H=i(49627);const z=new(i(53257).Z)("use-model-local-storage");var K=i(66379),G=i(14336);function B(){const e=(0,p.b)(),[n,i]=(0,N.useState)(void 0),s=n?void 0:e.t(t.Z.WORKSHOP.DEFURNISH.DEFURN_RATING_TITLE),a=n?void 0:e.t(t.Z.WORKSHOP.DEFURNISH.DEFURN_RATING_CONTENT),l=(0,A.z)(),r=(0,G.n)(),[o,c]=function(e,n,i){const[s,a]=(0,H._)(n,{});let t=i;if(e){const n=s[e];void 0!==n&&(t=n)}return[t,n=>{e?(s[e]=n,a(s)):z.warn(`No model ID set, can't save ${n}`)}]}(null==r?void 0:r.activeModelId,K.F.DefurnishRated,!1),[d,u]=(0,N.useState)(!1);return d||o&&!n?null:(0,h.jsx)(v.jL,Object.assign({title:s,text:a,className:"defurnish-feedback"},{children:n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(q.P,{onClose:()=>{u(!0)}}),(0,h.jsx)(P.D,{})]}):(0,h.jsx)(M.q,{setHappiness:e=>{i(e);const n={feature:"defurnish",happiness:e};l.track("feature_rated",n),c(!0)},happiness:n})}))}var V=i(15290),X=i(3989);const{DEFURNISH:W}=t.Z.WORKSHOP,Q=({status:e,onDefurnishStart:n,quota:i})=>{const s=(0,p.b)(),a=(0,b.I)("editor")&&(null==e?void 0:e.supportedByModel),t=(0,T.P)();if(!e)return null;const l=a&&!!t&&(null==e?void 0:e.availability)!==D.a8.LOCKED&&(null==e?void 0:e.availability)!==D.a8.UNAVAILABLE,r=a&&!l&&(null==e?void 0:e.availability)===D.a8.UNLOCKED,c=!a||!l&&(!e||(null==e?void 0:e.availability)===D.a8.UNAVAILABLE||(null==e?void 0:e.unavailabilityCode)),d=a&&!l&&!c&&(null==e?void 0:e.availability)===D.a8.LOCKED;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(_.L,Object.assign({toolId:o.w1.AD_DEFURNISH,title:s.t(W.DEFURN_TOOL_HEADER),controls:(0,h.jsx)(C,{})},{children:(0,h.jsxs)(V.Z,Object.assign({direction:X.Nm.vertical,thumbScrollingOnly:!0},{children:[d&&(0,h.jsx)(Y,{onDefurnishStart:n,defurnishQuota:i}),c&&(0,h.jsx)($,{status:e,quota:i}),r&&(0,h.jsx)(J,{}),l&&(0,h.jsx)(ee,{})]}))}))})},Z=({quota:e})=>{const n=(0,p.b)();if(!e||-1===e.limit)return null;const i=e.limit,s=e.uses;return(0,h.jsx)("div",Object.assign({className:"quota"},{children:(0,h.jsxs)("p",{children:[n.t(W.DEFURN_LOCKED_QUOTA)," ",(0,h.jsx)("span",Object.assign({className:"status"},{children:n.t(W.DEFURN_LOCKED_QUOTA2,{quotaUses:s,quotaTotal:i})}))]})}))};function Y({onDefurnishStart:e,defurnishQuota:n}){var i;const{apiHost:s,analytics:a}=(0,N.useContext)(f.I),t=(0,p.b)(),l=(0,x.r)(),r=(0,N.useMemo)((()=>(0,g.z)({baseUrl:s,server:j.fH})()),[s]),o=(0,N.useCallback)((async()=>{if(!l)throw new Error("unable to find base view");a.trackToolGuiEvent("defurnish","defurnish_process_click");const n={modelID:l};await r.mutate(R.UnlockDefurnishBundle,n).then((()=>{null==e||e()}))}),[a,r,l,e]),c=(null==n?void 0:n.limit)||-1,d=null!==(i=null==n?void 0:n.uses)&&void 0!==i?i:0,u=Math.max(c-d,-1),E=(null==n?void 0:n.strictlyEnforced)||!1;return(0,h.jsx)("div",Object.assign({className:"defurnish-panel"},{children:(0,h.jsxs)("div",Object.assign({className:"defurnish-panel-content"},{children:[(0,h.jsxs)("div",Object.assign({className:"instructions"},{children:[(0,h.jsx)("h4",{children:t.t(W.DEFURN_TITLE)}),(0,h.jsx)("p",{children:t.t(W.DEFURN_TEXT1)}),(0,h.jsxs)("p",Object.assign({className:"info-group"},{children:[(0,h.jsx)(v.JO,{name:"info",className:"info-icon"}),(0,h.jsx)("span",Object.assign({className:"info-text"},{children:t.t(W.DEFURN_TEXT2)}))]})),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:t.t(W.DEFURN_BULLET1)}),(0,h.jsx)("li",{children:t.t(W.DEFURN_BULLET2)}),(0,h.jsx)("li",{children:t.t(W.DEFURN_BULLET3)}),(0,h.jsx)("li",{children:t.t(W.DEFURN_BULLET4)})]})]})),(0,h.jsx)(Z,{quota:n}),(0,h.jsx)("div",Object.assign({className:"cta"},{children:(0,h.jsxs)(v.hE,Object.assign({spacing:"small"},{children:[(0,h.jsx)(v.zx,{variant:v.Wu.TERTIARY,size:v.qE.SMALL,onClick:()=>{window.open(m.DEFURNISH_LEARN_MORE,"_blank")},label:t.t(W.DEFURN_MORE),ariaLabel:t.t(W.DEFURN_MORE)}),(0,h.jsx)(v.zx,{disabled:E&&-1!==c&&u<=0,variant:v.Wu.PRIMARY,size:v.qE.SMALL,onClick:o,label:t.t(W.DEFURN_LOCKED_CTA),ariaLabel:t.t(W.DEFURN_LOCKED_CTA)})]}))}))]}))}))}const $=({status:e,quota:n})=>{const{apiHost:i,locale:s}=(0,N.useContext)(f.I);let a,t=!1,l=!1;const r=()=>{window.open(m.DEFURNISH_LEARN_MORE,"_blank")};switch(null==e?void 0:e.unavailabilityCode){case"quotaExceeded":l=!0,t=!0,a=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:s.t(W.DEFURN_ERR_QUOTA)}),(0,h.jsx)("p",{children:s.t(W.DEFURN_ERR_CONTACT)})]});break;case"permissionMissingUnlock":a=(0,h.jsx)("p",{children:s.t(W.DEFURN_ERR_PERMS)});break;case"orgSettingsDisabled":a=(0,h.jsx)("p",{dangerouslySetInnerHTML:{__html:s.t(W.DEFURN_ERR_SETTINGS,{url:`${i}${m.MANAGE_FEATURES}`})}});break;case"featureBlocked":default:(null==e?void 0:e.supportedByModel)?(t=!0,a=(0,h.jsx)("p",{children:s.t(W.DEFURN_ERR_UNKNOWN)})):a=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:s.t(W.DEFURN_ERR_MODEL_VERSION_UNSUPPORTED)}),(0,h.jsx)("div",Object.assign({className:"cta"},{children:(0,h.jsx)(v.zx,{variant:v.Wu.TERTIARY,size:v.qE.SMALL,onClick:r,label:s.t(W.DEFURN_MORE),ariaLabel:s.t(W.DEFURN_MORE)})}))]})}return(0,h.jsx)("div",Object.assign({className:"defurnish-panel"},{children:(0,h.jsxs)("div",Object.assign({className:"defurnish-panel-content"},{children:[(0,h.jsxs)("div",Object.assign({className:"instructions"},{children:[(0,h.jsx)("h4",{children:s.t(W.DEFURN_ERR_TITLE)}),a]})),l&&(0,h.jsx)(Z,{quota:n}),t&&(0,h.jsxs)("div",Object.assign({className:"feedback"},{children:[(0,h.jsx)(v.JO,{name:"ext-link"}),(0,h.jsx)("a",Object.assign({href:m.CONTACT_SUPPORT,target:"_blank"},{children:s.t(W.DEFURN_CONTACT_SUPPORT)}))]})),!1]}))}))};function J(){const e=(0,p.b)();return(0,h.jsx)("div",Object.assign({className:"defurnish-panel"},{children:(0,h.jsxs)("div",Object.assign({className:"defurnish-panel-content"},{children:[(0,h.jsxs)("div",Object.assign({className:"instructions"},{children:[(0,h.jsx)("h4",{children:e.t(W.DEFURN_TITLE)}),(0,h.jsx)("p",{children:e.t(W.DEFURN_TEXT1)}),(0,h.jsx)("a",Object.assign({href:m.DEFURNISH_LEARN_MORE,target:"_blank"},{children:e.t(W.DEFURN_MORE)})),(0,h.jsx)("p",{children:e.t(W.DEFURN_TEXT2)})]})),(0,h.jsx)("div",Object.assign({className:"cta"},{children:(0,h.jsx)(v.hE,Object.assign({spacing:"small"},{children:(0,h.jsx)(v.zx,{className:"cta-inprogress",variant:v.Wu.PRIMARY,size:v.qE.SMALL,label:e.t(W.DEFURN_UNLOCKED_CTA)})}))}))]}))}))}function ee(){const e=(0,p.b)(),n=e.t(W.DEFURN_FEEDBACK);return(0,h.jsxs)("div",Object.assign({className:"defurnish-panel"},{children:[(0,h.jsx)("div",Object.assign({className:"banner"},{children:(0,h.jsx)(v.jL,Object.assign({title:e.t(W.DEFURN_COMPLETE_TITLE),className:"defurnish-panel-top-banner"},{children:(0,h.jsxs)("p",{children:[e.t(W.DEFURN_COMPLETE_TEXT1),(0,h.jsx)(v.JO,{name:"furniture-slash"}),"/",(0,h.jsx)(v.JO,{name:"furniture"}),e.t(W.DEFURN_COMPLETE_TEXT2)]})}))})),(0,h.jsxs)("div",Object.assign({className:"defurnish-panel-content"},{children:[(0,h.jsxs)("div",Object.assign({className:"instructions"},{children:[(0,h.jsx)("h5",{children:e.t(W.DEFURN_NEXT_TITLE)}),(0,h.jsx)("p",{children:e.t(W.DEFURN_NEXT_TEXT1)}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:e.t(W.DEFURN_NEXT_TEXT2)}),(0,h.jsx)("li",{children:e.t(W.DEFURN_NEXT_TEXT3)}),(0,h.jsx)("li",{children:e.t(W.DEFURN_NEXT_TEXT4)}),(0,h.jsx)("li",{children:e.t(W.DEFURN_NEXT_TEXT5)})]})]})),(0,h.jsxs)("div",Object.assign({className:"defurnish-panel-footer"},{children:[(0,h.jsx)(B,{}),(0,h.jsx)(v.zx,{className:"feedback-button",variant:v.Wu.TERTIARY,size:v.qE.MEDIUM,icon:"ext-link",label:n,ariaLabel:n,onClick:()=>{window.open(m.DEFURNISH_FEEDBACK,"_blank")}})]}))]}))]}))}var ne=i(27285),ie=i(70688);const se={limit:-1,uses:0,strictlyEnforced:!1},ae=async({api:e,organizationId:n})=>{var i,s,a;if(!n)return se;const t={organizationId:n},l=function(e){var n,i;return((null===(i=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.quotas)||void 0===i?void 0:i.results)||[])[0]}(await e.query(ie.GetDefurnishQuota,t));return{limit:null!==(i=null==l?void 0:l.limit)&&void 0!==i?i:se.limit,uses:null!==(s=null==l?void 0:l.uses)&&void 0!==s?s:se.uses,strictlyEnforced:null!==(a=null==l?void 0:l.strictlyEnforced)&&void 0!==a?a:se.strictlyEnforced}};class te{constructor(){this.renderPanel=()=>{const{status:e,refresh:n,isLoading:i}=(0,ne.c)(),{quota:s,isLoading:a}=(()=>{const{apiHost:e,userData:n}=(0,N.useContext)(f.I),[i,s]=(0,N.useState)(),a=n.getModelOrganizationId(),t=(0,N.useRef)(!0),l=(0,N.useMemo)((()=>(0,g.z)({baseUrl:e,server:j.fL})()),[e]);return(0,N.useEffect)((()=>{a&&ae({api:l,organizationId:a}).then((e=>{t.current=!1,s(e)}))}),[s,l,a]),{isLoading:t.current,quota:i}})();return i||a?(0,h.jsx)("div",{children:"..."}):(0,h.jsx)(Q,{quota:s,status:e,onDefurnishStart:n})}}}class le extends s.Y{constructor(){super(),this.name="defurnish"}async init(e,n){this.engine=n;const[i,s]=await Promise.all([n.market.waitForData(r.t),n.market.waitForData(l.n)]);this.toolsData=i;s.hasPolicy(u.ti)&&(this.bindings.push(n.subscribe(a.pB,(e=>{this.addToolPanel()}))),this.addToolPanel())}dispose(e){super.dispose(e)}async addToolPanel(){if(!this.toolsData.hasTool(o.w1.AD_DEFURNISH)){const e=new E,n=new c.U({analytic:"defurnish",dimmed:!1,enabled:!0,helpMessagePhraseKey:t.Z.TOOLS.AD_DEFURNISH_HELP_MESSAGE,helpHref:m.DEFURNISH_LEARN_MORE,icon:"furniture-slash",id:o.w1.AD_DEFURNISH,manager:e,namePhraseKey:t.Z.TOOLS.AD_DEFURNISH,order:120,panel:!0,palette:o.$r.MODEL_BASED,ui:new te,badgePhraseKey:t.Z.WORKSHOP.EDIT_BAR.BETA_TAG});await this.engine.commandBinder.issueCommand(new d.MV([n]))}}}const re=le},70688:e=>{var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetDefurnishQuota"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"organizationId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quotas"},arguments:[{kind:"Argument",name:{kind:"Name",value:"organizationId"},value:{kind:"Variable",name:{kind:"Name",value:"organizationId"}}},{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"namespace"},value:{kind:"StringValue",value:"mp",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"key"},value:{kind:"StringValue",value:"org.autodesigner.defurnish.quota",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"results"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"namespace"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"organizationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"limit"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uses"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"strictlyEnforced"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"source"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"moreResults"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"offset"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:327}};n.loc.source={body:'query GetDefurnishQuota($organizationId: ID!) {\n  quotas(organizationId: $organizationId, query: { namespace:"mp", key: "org.autodesigner.defurnish.quota" }) {\n    results {\n      id\n      key\n      namespace\n      organizationId\n      limit\n      uses\n      strictlyEnforced\n      source\n    }\n    moreResults\n    offset\n  }\n}',name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var s=e.type;"NamedType"===s.kind&&n.add(s.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,n)})),e.definitions&&e.definitions.forEach((function(e){i(e,n)}))}var s={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var s=e.definitions[i];if(s.name&&s.name.value==n)return s}}n.definitions.forEach((function(e){if(e.name){var n=new Set;i(e,n),s[e.name.value]=n}})),e.exports=n,e.exports.GetDefurnishQuota=function(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=s[n]||new Set,l=new Set,r=new Set;for(t.forEach((function(e){r.add(e)}));r.size>0;){var o=r;r=new Set,o.forEach((function(e){l.has(e)||(l.add(e),(s[e]||new Set).forEach((function(e){r.add(e)})))}))}return l.forEach((function(n){var s=a(e,n);s&&i.definitions.push(s)})),i}(n,"GetDefurnishQuota")}}]);