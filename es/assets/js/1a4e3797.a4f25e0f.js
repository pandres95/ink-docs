"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7920],{42027:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var a=r(67294),n=r(52263),l=r(70179),s=r(35742),c=r(39960),o=r(95999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}var d=r(86010),g=r(16550),f=r(10412);const y=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:r}}=(0,n.Z)(),a=f.Z.canUseDOM?new URLSearchParams(t.search):null,l=(null==a?void 0:a.get("q"))||"",s=(null==a?void 0:a.get("ctx"))||"",c=(null==a?void 0:a.get("version"))||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const a=new URLSearchParams(t.search);a.set("ctx",r),e.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var E=r(90022),S=r(98202),I=r(82539),v=r(10726),w=r(91073),R=r(80311),C=r(73926),P=r(61029);const x={searchVersionInput:"searchVersionInput_t5lH",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};function b(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:u,updateSearchContext:m}=y(),[h,i]=(0,a.useState)(r),[g,f]=(0,a.useState)(),[I,v]=(0,a.useState)(),w=`${e}${c}`,C=(0,a.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{u(h),g&&(h?g(h,(e=>{v(e)})):v(void 0))}),[h,g]);const b=(0,a.useCallback)((e=>{i(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==h&&i(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,E.w)(w,l);f((()=>(0,S.v)(e,t,100)))}()}),[l,w]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,C)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,C),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",x.searchQueryColumn,{"col--9":Array.isArray(P.Kc),"col--12":!Array.isArray(P.Kc)})},a.createElement("input",{type:"search",name:"q",className:x.searchQueryInput,"aria-label":"Search",onChange:b,value:h,autoComplete:"off",autoFocus:!0})),Array.isArray(P.Kc)?a.createElement("div",{className:(0,d.Z)("col","col--3","padding-left--none",x.searchVersionColumn)},a.createElement("select",{name:"search-context",className:x.searchVersionInput,id:"context-selector",value:l,onChange:e=>m(e.target.value)},a.createElement("option",{value:""},P.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),P.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!g&&h&&a.createElement("div",null,a.createElement(R.Z,null)),I&&(I.length>0?a.createElement("p",null,t(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,I&&I.map((e=>a.createElement(k,{key:e.document.i,searchResult:e}))))))}function k(e){let{searchResult:{document:t,type:r,page:n,tokens:l,metadata:s}}=e;const o=0===r,u=2===r,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(P.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return a.createElement("article",{className:x.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,I.C)(h,l):(0,v.o)(h,(0,w.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:x.searchResultItemPath},(0,C.e)(m)),u&&a.createElement("p",{className:x.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,v.o)(t.t,(0,w.m)(s,"t"),l,100)}}))}const _=function(){return a.createElement(l.Z,null,a.createElement(b,null))}}}]);