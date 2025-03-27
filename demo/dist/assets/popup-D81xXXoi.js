import{v as M,b as H}from"./virtual_renderer-DgEvkpUF.js";import{a as C}from"./range-88AzluK7.js";import{a as E}from"./event-B9S6OeTq.js";import{a as X}from"./lang-C7f-qoMb.js";import{a as D}from"./dom-DefZfLbd.js";import{c as N}from"./text-zsDcMvPq.js";import{u as I}from"./useragent-ZIaDhLCP.js";function W(f,m){for(var s=0;s<m.length;s++){const e=m[s];if(typeof e!="string"&&!Array.isArray(e)){for(const d in e)if(d!=="default"&&!(d in f)){const l=Object.getOwnPropertyDescriptor(e,d);l&&Object.defineProperty(f,d,l.get?l:{enumerable:!0,get:()=>e[d]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var y={},j=M.VirtualRenderer,B=H.Editor,O=C.Range,G=E,V=X,$=D,L=N.nls,R=I,T=function(f){return`suggest-aria-id:${f}`},F=R.isSafari?"menu":"listbox",q=R.isSafari?"menuitem":"option",P=R.isSafari?"aria-current":"aria-selected",z=function(f){var m=new j(f);m.$maxLines=4;var s=new B(m);return s.setHighlightActiveLine(!1),s.setShowPrintMargin(!1),s.renderer.setShowGutter(!1),s.renderer.setHighlightGutterLine(!1),s.$mouseHandler.$focusTimeout=0,s.$highlightTagPending=!0,s};class J{constructor(m){var s=$.createElement("div"),e=z(s);m&&m.appendChild(s),s.style.display="none",e.renderer.content.style.cursor="default",e.renderer.setStyle("ace_autocomplete"),e.renderer.$textLayer.element.setAttribute("role",F),e.renderer.$textLayer.element.setAttribute("aria-roledescription",L("autocomplete.popup.aria-roledescription","Autocomplete suggestions")),e.renderer.$textLayer.element.setAttribute("aria-label",L("autocomplete.popup.aria-label","Autocomplete suggestions")),e.renderer.textarea.setAttribute("aria-hidden","true"),e.setOption("displayIndentGuides",!1),e.setOption("dragDelay",150);var d=function(){};e.focus=d,e.$isFocused=!0,e.renderer.$cursorLayer.restartTimer=d,e.renderer.$cursorLayer.element.style.opacity="0",e.renderer.$maxLines=8,e.renderer.$keepTextAreaAtCursor=!1,e.setHighlightActiveLine(!1),e.session.highlight(""),e.session.$searchHighlight.clazz="ace_highlight-marker",e.on("mousedown",function(r){var t=r.getDocumentPosition();e.selection.moveToPosition(t),g.start.row=g.end.row=t.row,r.stop()});var l,c=new O(-1,0,-1,1/0),g=new O(-1,0,-1,1/0);g.id=e.session.addMarker(g,"ace_active-line","fullLine"),e.setSelectOnHover=function(r){r?c.id&&(e.session.removeMarker(c.id),c.id=null):c.id=e.session.addMarker(c,"ace_line-hover","fullLine")},e.setSelectOnHover(!1),e.on("mousemove",function(r){if(!l){l=r;return}if(!(l.x==r.x&&l.y==r.y)){l=r,l.scrollTop=e.renderer.scrollTop,e.isMouseOver=!0;var t=l.getDocumentPosition().row;c.start.row!=t&&(c.id||e.setRow(t),k(t))}}),e.renderer.on("beforeRender",function(){if(l&&c.start.row!=-1){l.$pos=null;var r=l.getDocumentPosition().row;c.id||e.setRow(r),k(r,!0)}}),e.renderer.on("afterRender",function(){for(var r=e.renderer.$textLayer,t=r.config.firstRow,o=r.config.lastRow;t<=o;t++){const i=r.element.childNodes[t-r.config.firstRow];i.setAttribute("role",q),i.setAttribute("aria-roledescription",L("autocomplete.popup.item.aria-roledescription","item")),i.setAttribute("aria-setsize",e.data.length),i.setAttribute("aria-describedby","doc-tooltip"),i.setAttribute("aria-posinset",t+1);const a=e.getData(t);if(a){const u=`${a.caption||a.value}${a.meta?`, ${a.meta}`:""}`;i.setAttribute("aria-label",u)}i.querySelectorAll(".ace_completion-highlight").forEach(u=>{u.setAttribute("role","mark")})}}),e.renderer.on("afterRender",function(){var r=e.getRow(),t=e.renderer.$textLayer,o=t.element.childNodes[r-t.config.firstRow],i=document.activeElement;if(o!==e.selectedNode&&e.selectedNode&&($.removeCssClass(e.selectedNode,"ace_selected"),e.selectedNode.removeAttribute(P),e.selectedNode.removeAttribute("id")),i.removeAttribute("aria-activedescendant"),e.selectedNode=o,o){var a=T(r);$.addCssClass(o,"ace_selected"),o.id=a,t.element.setAttribute("aria-activedescendant",a),i.setAttribute("aria-activedescendant",a),o.setAttribute(P,"true")}});var A=function(){k(-1)},k=function(r,t){r!==c.start.row&&(c.start.row=c.end.row=r,t||e.session._emit("changeBackMarker"),e._emit("changeHoverMarker"))};e.getHoveredRow=function(){return c.start.row},G.addListener(e.container,"mouseout",function(){e.isMouseOver=!1,A()}),e.on("hide",A),e.on("changeSelection",A),e.session.doc.getLength=function(){return e.data.length},e.session.doc.getLine=function(r){var t=e.data[r];return typeof t=="string"?t:t&&t.value||""};var S=e.session.bgTokenizer;return S.$tokenizeRow=function(r){var t=e.data[r],o=[];if(!t)return o;typeof t=="string"&&(t={value:t});var i=t.caption||t.value||t.name;function a(w,x){w&&o.push({type:(t.className||"")+(x||""),value:w})}for(var b=i.toLowerCase(),u=(e.filterText||"").toLowerCase(),p=0,h=0,n=0;n<=u.length;n++)if(n!=h&&(t.matchMask&1<<n||n==u.length)){var _=u.slice(h,n);h=n;var v=b.indexOf(_,p);if(v==-1)continue;a(i.slice(p,v),""),p=v+_.length,a(i.slice(v,p),"completion-highlight")}return a(i.slice(p,i.length),""),o.push({type:"completion-spacer",value:" "}),t.meta&&o.push({type:"completion-meta",value:t.meta}),t.message&&o.push({type:"completion-message",value:t.message}),o},S.$updateOnChange=d,S.start=d,e.session.$computeWidth=function(){return this.screenWidth=0},e.isOpen=!1,e.isTopdown=!1,e.autoSelect=!0,e.filterText="",e.isMouseOver=!1,e.data=[],e.setData=function(r,t){e.filterText=t||"",e.setValue(V.stringRepeat(`
`,r.length),-1),e.data=r||[],e.setRow(0)},e.getData=function(r){return e.data[r]},e.getRow=function(){return g.start.row},e.setRow=function(r){r=Math.max(this.autoSelect?0:-1,Math.min(this.data.length-1,r)),g.start.row!=r&&(e.selection.clearSelection(),g.start.row=g.end.row=r||0,e.session._emit("changeBackMarker"),e.moveCursorTo(r||0,0),e.isOpen&&e._signal("select"))},e.on("changeSelection",function(){e.isOpen&&e.setRow(e.selection.lead.row),e.renderer.scrollCursorIntoView()}),e.hide=function(){this.container.style.display="none",e.anchorPos=null,e.anchor=null,e.isOpen&&(e.isOpen=!1,this._signal("hide"))},e.tryShow=function(r,t,o,i){if(!i&&e.isOpen&&e.anchorPos&&e.anchor&&e.anchorPos.top===r.top&&e.anchorPos.left===r.left&&e.anchor===o)return!0;var a=this.container,b=window.innerHeight,u=window.innerWidth,p=this.renderer,h=p.$maxLines*t*1.4,n={top:0,bottom:0},_=b-r.top-3*this.$borderSize-t,v=r.top-3*this.$borderSize;o||(v<=_||_>=h?o="bottom":o="top"),o==="top"?(n.bottom=r.top-this.$borderSize,n.top=n.bottom-h):o==="bottom"&&(n.top=r.top+t+this.$borderSize,n.bottom=n.top+h);var w=n.top>=0&&n.bottom<=b;if(!i&&!w)return!1;w?p.$maxPixelHeight=null:o==="top"?p.$maxPixelHeight=v:p.$maxPixelHeight=_,o==="top"?(a.style.top="",a.style.bottom=b-n.bottom+"px",e.isTopdown=!1):(a.style.top=n.top+"px",a.style.bottom="",e.isTopdown=!0),a.style.display="";var x=r.left;return x+a.offsetWidth>u&&(x=u-a.offsetWidth),a.style.left=x+"px",a.style.right="",e.isOpen||(e.isOpen=!0,this._signal("show"),l=null),e.anchorPos=r,e.anchor=o,!0},e.show=function(r,t,o){this.tryShow(r,t,o?"bottom":void 0,!0)},e.goTo=function(r){var t=this.getRow(),o=this.session.getLength()-1;switch(r){case"up":t=t<=0?o:t-1;break;case"down":t=t>=o?-1:t+1;break;case"start":t=0;break;case"end":t=o;break}this.setRow(t)},e.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},e.$imageSize=0,e.$borderSize=1,e}}$.importCssString(`
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #CAD6FA;
    z-index: 1;
}
.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #3a674e;
}
.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #abbffe;
    margin-top: -1px;
    background: rgba(233,233,253,0.4);
    position: absolute;
    z-index: 2;
}
.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid rgba(109, 150, 13, 0.8);
    background: rgba(58, 103, 78, 0.62);
}
.ace_completion-meta {
    opacity: 0.5;
    margin-left: 0.9em;
}
.ace_completion-message {
    margin-left: 0.9em;
    color: blue;
}
.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #2d69c7;
}
.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #93ca12;
}
.ace_editor.ace_autocomplete {
    width: 300px;
    z-index: 200000;
    border: 1px lightgray solid;
    position: fixed;
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    line-height: 1.4;
    background: #fefefe;
    color: #111;
}
.ace_dark.ace_editor.ace_autocomplete {
    border: 1px #484747 solid;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);
    line-height: 1.4;
    background: #25282c;
    color: #c1c1c1;
}
.ace_autocomplete .ace_text-layer  {
    width: calc(100% - 8px);
}
.ace_autocomplete .ace_line {
    display: flex;
    align-items: center;
}
.ace_autocomplete .ace_line > * {
    min-width: 0;
    flex: 0 0 auto;
}
.ace_autocomplete .ace_line .ace_ {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ace_autocomplete .ace_completion-spacer {
    flex: 1;
}
.ace_autocomplete.ace_loading:after  {
    content: "";
    position: absolute;
    top: 0px;
    height: 2px;
    width: 8%;
    background: blue;
    z-index: 100;
    animation: ace_progress 3s infinite linear;
    animation-delay: 300ms;
    transform: translateX(-100%) scaleX(1);
}
@keyframes ace_progress {
    0% { transform: translateX(-100%) scaleX(1) }
    50% { transform: translateX(625%) scaleX(2) } 
    100% { transform: translateX(1500%) scaleX(3) } 
}
@media (prefers-reduced-motion) {
    .ace_autocomplete.ace_loading:after {
        transform: translateX(625%) scaleX(2);
        animation: none;
     }
}
`,"autocompletion.css",!1);var K=y.AcePopup=J,Q=y.$singleLineEditor=z,U=y.getAriaId=T;const ie=W({__proto__:null,$singleLineEditor:Q,AcePopup:K,default:y,getAriaId:U},[y]);export{ie as p};
