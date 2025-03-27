const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./text-zsDcMvPq.js","./lang-C7f-qoMb.js","./dom-DefZfLbd.js","./index-sTxQOFI-.js","./useragent-ZIaDhLCP.js","./oop-BL6NmmbS.js","./range-88AzluK7.js","./hash_handler-CEYx_X0m.js","./keys-BfAgDulW.js","./event-B9S6OeTq.js","./popup-D81xXXoi.js","./virtual_renderer-DgEvkpUF.js","./undomanager-Cyh7pn7a.js"])))=>i.map(i=>d[i]);
import{a as ace,_ as __vitePreload}from"./index-sTxQOFI-.js";const searchboxCss=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}

.ace_search_input_wrapper {
    float: left;
    min-width: 17em;
    border-radius: 3px 0 0 3px;
    background-color: white;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
}

.ace_search .ace_scroller.ace_scroll-left:after {
    box-shadow: none;
}

.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`;class MockWorker{constructor(t,n=!1){this.isProduction=n,this.workerContext={},this.workerContext={postMessage:s=>{typeof this.onmessage=="function"&&this.onmessage({data:s})}},t(this.workerContext),this.workerFunction=t}postMessage(t){setTimeout(()=>{typeof this.workerContext.onmessage=="function"&&this.workerContext.onmessage({data:t})},0)}onerror(t){}onmessage(t){}terminate(){}}var $worker=null,workerFunction=function(_self){var str="";function setValue(a){str=a}function findAll(a,t,n){for(var s=[],o=t.lastIndex=0,i;i=t.exec(a);)s.push(o=i.index),i[0].length||(t.lastIndex=o+=1,o>=a.length&&s.pop());n({matches:s})}_self.onmessage=function(e){var msg=e.data;if(msg.command=="setValue")setValue(msg.data);else if(msg.command=="findAll")try{var regex=RegExp(msg.source,msg.flags||"g"),searchStr=str;msg.range&&(searchStr=searchStr.slice(msg.range[0],msg.range[1])),findAll(searchStr,regex,function(a){a.callbackId=msg.callbackId,_self.postMessage(a)})}catch{}else if(msg.eval){try{var r=eval(msg.eval)}catch(a){r=a.message}_self.postMessage({type:"event",data:r})}}},workerSrc="("+workerFunction+")(this)";function getWorker(){if($worker)return $worker;if(typeof Worker<"u"){var a=new Blob([workerSrc],{type:"application/javascript"}),t=(window.URL||window.webkitURL).createObjectURL(a);$worker=new Worker(t),setTimeout(function(){(window.URL||window.webkitURL).revokeObjectURL(t)})}else $worker=new MockWorker(workerFunction);return $worker.onmessage=onMessage,$worker.onerror=function(n){throw n},$worker}function onMessage(a){var t=a.data,n=t.callbackId;$worker.responseTime=Date.now(),n&&callbacks[n]&&(n==callbackId&&callbacks[n](t),callbacks[n]=null)}var callbacks={},callbackId=1;function terminateWorker(){$worker&&$worker.terminate(),$worker=null,callbacks={}}function execFind(a,t,n){a.searchTracker||(a.searchTracker=new SearchTracker(a),a.once("change",function(){a.searchTracker=null}));var s=a.searchTracker;a.searchTracker.get(t,function(o){if(!o)return n("waiting");var i=t.indexRange?t.indexRange[0]:0;if(t.findAll)return n({value:s.value,matches:o,offset:i});var u=t.backwards===!0,g=t.skipCurrent!==!1,l=t.wrap,d=t.range,p;t.start?p=t.start[g!=u?"end":"start"]:p=d?d[u?"end":"start"]:a.selection.getRange()[g!=u?"end":"start"],t.regex||(t.regex=RegExp(t.source,t.flags));var f=s.value;t.indexRange&&(f=f.slice(i,t.indexRange[1]));var v=s.session.doc.positionToIndex(p)-i,m=binIndexOf(o,v),h=m,c,k=!1,x=function(){h>o.length-1?(h=l?0:o.length-1,k=l):h<0&&(h=l?o.length-1:0,k=l)},_=function(){if(o[h]!==void 0)return t.regex.lastIndex=o[h],t.regex.exec(f)};if(u?(c=_(),(!c||o[h]+c[0].length>v)&&(h-=1,x(),c=_())):(o[m]!=v&&(h+=1),x(),c=_()),!c)return n(null);p=s.session.doc.indexToPosition(c.index+i);var w=s.session.doc.indexToPosition(p.column+c[0].length,p.row);n({start:p,end:w,total:o.length,current:h,wrapped:k,value:s.value,startIndex:c.index+i})})}function binIndexOf(a,t){for(var n=0,s=a.length-1;n<=s;){var o=n+s>>1,i=a[o];if(t>i)n=o+1;else if(t<i)s=o-1;else return o}return n-1}class SearchTracker{constructor(t){this.value=t.getValue(),this.results=Object.create(null),this.session=t,this.initWorker()}rangeToIndex(t){var n=this.session.doc.positionToIndex(t.start),s=n-t.start.column+this.session.doc.positionToIndex(t.end,t.start.row);return[n,s]}get(t,n){t.id||(t.id=t.source+"|"+t.flags+(t.range||"")),t.range&&!t.indexRange&&(t.indexRange=this.rangeToIndex(t.range)),clearTimeout(this.crashTimer);var s=this.results[t.id];s?n(s):(this.getMatchOffsets(t,function(o){clearTimeout(this.crashTimer),this.results[t.id]=o.matches,n(o.matches)}.bind(this)),this.crashTimer=setTimeout(function(){n()},500))}getMatchOffsets(t,n){var s=this.initWorker(),o=Date.now();!s.responseTime&&s.requestTime&&o-s.requestTime>1e3&&(terminateWorker(),s=this.initWorker()),callbackId+=1;var i=callbackId;s.responseTime=null,s.requestTime=o,s.postMessage({source:t.source,flags:t.flags,range:t.indexRange,callbackId,command:"findAll"}),callbacks[i]=n}initWorker(){var t=getWorker();return t.value!=this.value&&(t.postMessage({command:"setValue",data:this.value}),t.value=this.value),t}}var TextMode=typeof ace.require=="function"?ace.require("ace/mode/text").Mode:(await __vitePreload(async()=>{const{Mode:a}=await import("./text-zsDcMvPq.js").then(t=>t.t);return{Mode:a}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).Mode,HashHandler$1=typeof ace.require=="function"?ace.require("ace/keyboard/hash_handler").HashHandler:(await __vitePreload(async()=>{const{HashHandler:a}=await import("./hash_handler-CEYx_X0m.js").then(t=>t.h);return{HashHandler:a}},__vite__mapDeps([7,8,3,5,4]),import.meta.url)).HashHandler;class LibSearch{constructor(){this.keyStroke=""}addSearchKeyboardHandler(t,n){var s=this;t.saveHistory=function(){s.saveHistory(this.getValue(),this.session)},t.session.searchHistory=[];var o=new HashHandler$1;return o.bindKeys({Up:function(i){if(i.getCursorPosition().row>0)return!1;s.navigateList("next",i),i.selection.moveCursorFileStart(),i.selection.clearSelection()},Down:function(i){if(i.getCursorPosition().row<i.session.getLength()-1)return!1;s.navigateList("prev",i),i.selection.lead.row=i.session.getLength()-1},"Ctrl-Home":function(i){s.navigateList("first",i)},"Ctrl-End":function(i){s.navigateList("last",i)},"Ctrl-Return":function(i){i.insert(i.session.doc.getNewLineCharacter())}}),o.handleKeyboard=function(i,u,g,l){if(g!="\0"){var d=this.findKeyCommand(u,g),p=i.editor;if(d){var f=p.execCommand(d);if(f!==!1)return{command:"null"}}}},t.setKeyboardHandler(o),o}navigateList(t,n){var s=n.session.searchHistory||[],o=n.getValue();o&&(this.position==-1||s[this.position]!=o)&&(s=this.saveHistory(o,n.session),this.position=0),this.position===void 0&&(this.position=-1);var i;t=="prev"?(i=Math.max(0,this.position-1),this.position<=0&&(i=-1)):t=="next"?i=Math.min(s.length-1,this.position+1):t=="last"?i=Math.max(s.length-1,0):t=="first"&&(i=0),(i in s&&i!=this.position||i==-1)&&(this.keyStroke=t,n.setValue(s[i]||"",1),this.keyStroke="",this.position=i)}saveHistory(t,n){var s=n.searchHistory||[];return t&&s[0]!=t&&(s.unshift(t),s.length>200&&s.splice(200,s.length),n.searchHistory=s),s}setReplaceFieldMode(t,n){var s=t.session;if(s.$modeId!=n){var o=new TextMode;o.$highlightRules=new o.HighlightRules;var i={literal:[{defaultToken:"text"}],jsOnly:[{token:"constant.language.escape",regex:/\$[\d&\$]|\\[\\nrt]/}],extended:[{token:"constant.language.escape",regex:/\$\$|\\[\\nrt]/},{token:"string",regex:/\\\d|\$[\d&]/},{token:"keyword",regex:/\\U/,next:"uppercase"},{token:"keyword",regex:/\\L/,next:"lowercase"},{token:"keyword",regex:/\\E/,next:"start"},{token:"keyword",regex:/\\[ul]/,next:"uppercase"}],uppercase:[{include:"extended"},{defaultToken:"uppercase"}],lowercase:[{include:"extended"},{defaultToken:"lowercase"}]};i.start=i[n]||i.literal,o.$highlightRules.$rules=i,o.$highlightRules.normalizeRules(),s.setMode(o),s.$modeId=n}}setRegexpMode(t,n){var s=n?"regex":"literal",o=t.session;if(o.$modeId!=s){var i=new TextMode;i.$highlightRules=new i.HighlightRules;var u={literal:[{defaultToken:"text"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{defaultToken:"string.regexp.charachterclass"}]};u.start=u[s]||u.literal,i.$highlightRules.$rules=u,i.$highlightRules.normalizeRules(),o.setMode(i),o.$modeId=s}}}var dom=typeof ace.require=="function"?ace.require("ace/lib/dom"):await __vitePreload(()=>import("./dom-DefZfLbd.js").then(a=>a.d),__vite__mapDeps([2,3,4]),import.meta.url),lang=typeof ace.require=="function"?ace.require("ace/lib/lang"):await __vitePreload(()=>import("./lang-C7f-qoMb.js").then(a=>a.l),[],import.meta.url),event=typeof ace.require=="function"?ace.require("ace/lib/event"):await __vitePreload(()=>import("./event-B9S6OeTq.js").then(a=>a.e),__vite__mapDeps([9,3,8,5,4]),import.meta.url),HashHandler=typeof ace.require=="function"?ace.require("ace/keyboard/hash_handler").HashHandler:(await __vitePreload(async()=>{const{HashHandler:a}=await import("./hash_handler-CEYx_X0m.js").then(t=>t.h);return{HashHandler:a}},__vite__mapDeps([7,8,3,5,4]),import.meta.url)).HashHandler,keyUtil=typeof ace.require=="function"?ace.require("ace/lib/keys"):await __vitePreload(()=>import("./keys-BfAgDulW.js").then(a=>a.k),__vite__mapDeps([8,3,5]),import.meta.url),{Range}=typeof ace.require=="function"?ace.require("ace/range"):await __vitePreload(()=>import("./range-88AzluK7.js").then(a=>a.r),[],import.meta.url),{$singleLineEditor}=typeof ace.require=="function"?ace.require("ace/autocomplete/popup"):await __vitePreload(()=>import("./popup-D81xXXoi.js").then(a=>a.p),__vite__mapDeps([10,11,5,2,3,4,1,9,8,0,6,12,7]),import.meta.url),{UndoManager}=typeof ace.require=="function"?ace.require("ace/undomanager"):await __vitePreload(()=>import("./undomanager-Cyh7pn7a.js").then(a=>a.u),__vite__mapDeps([12,6]),import.meta.url);dom.importCssString(searchboxCss,"ace_searchbox",!1);function nls(a,t){return t}class SearchBox{constructor(t,n,s){this.activeInput;var o=dom.createElement("div");dom.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["div",{class:"ace_search_input_wrapper"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},nls("search-box.find-all.text","All")]],["div",{class:"ace_replace_form"},["div",{class:"ace_search_input_wrapper"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},nls("search-box.replace-next.text","Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},nls("search-box.replace-all.text","All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:nls("search-box.toggle-replace.title","Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:nls("search-box.toggle-regexp.title","RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:nls("search-box.toggle-case.title","CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:nls("search-box.toggle-whole-word.title","Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:nls("search-box.toggle-in-selection.title","Search In Selection")},"S"]]],o),this.element=o.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(t),dom.importCssString(searchboxCss,"ace_searchbox",t.container)}setEditor(t){t.searchBox=this,t.renderer.scroller.appendChild(this.element),this.editor=t}setSession(t){this.searchRange=null,this.$syncOptions(!0)}setupInput(t,n){this.libSearch.addSearchKeyboardHandler(t,n),n==="search"?this.libSearch.setRegexpMode(t,this.regExpOption.checked):this.libSearch.setReplaceFieldMode(t,"extended"),t.setOption("customScrollbar",!0),t.session.setUndoManager(new UndoManager),t.commands.removeCommands(["find","replace","replaceall","gotoline","findnext","findprevious","expandtoline","indent","outdent"]),t.renderer.setScrollMargin(5,4,0,0)}$initElements(t){this.searchBox=t.querySelector(".ace_search_form"),this.searchInput=$singleLineEditor(),this.searchInput.setOption("placeholder",nls("search-box.search-for.text","Search for")),this.searchBox.querySelector(".ace_search_input_wrapper").appendChild(this.searchInput.container),this.replaceBox=t.querySelector(".ace_replace_form"),this.replaceInput=$singleLineEditor(),this.replaceInput.setOption("placeholder",nls("search-box.replace-with.text","Replace with")),this.replaceBox.querySelector(".ace_search_input_wrapper").appendChild(this.replaceInput.container),this.searchOption=t.querySelector("[action=searchInSelection]"),this.replaceOption=t.querySelector("[action=toggleReplace]"),this.regExpOption=t.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=t.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=t.querySelector("[action=toggleWholeWords]"),this.searchCounter=t.querySelector(".ace_search_counter"),this.setupInput(this.searchInput,"search"),this.setupInput(this.replaceInput,"replace")}$init(){this.libSearch=new LibSearch;var t=this.element;this.$initElements(t);var n=this;event.addListener(t,"mousedown",function(s){setTimeout(function(){n.activeInput.focus()},0),event.stopPropagation(s)}),event.addListener(t,"click",function(s){var o=s.target||s.srcElement,i=o.getAttribute("action");i&&n[i]?n[i]():n.$searchBarKb.commands[i]&&n.$searchBarKb.commands[i].exec(n),event.stopPropagation(s)}),event.addCommandKeyListener(t,function(s,o,i){var u=keyUtil.keyCodeToString(i),g=n.$searchBarKb.findKeyCommand(o,u);g&&g.exec&&(g.exec(n),event.stopEvent(s))}),this.$onChange=lang.delayedCall(function(){n.find(!1,!1)}),event.addListener(this.searchInput,"input",function(){n.$onChange.schedule(20)}),event.addListener(this.searchInput,"focus",function(){n.activeInput=n.searchInput,n.searchInput.getValue()&&n.highlight()}),event.addListener(this.replaceInput,"focus",function(){n.activeInput=n.replaceInput,n.searchInput.getValue()&&n.highlight()})}setSearchRange(t){this.searchRange=t,t?this.searchRangeMarker=this.editor.session.addMarker(t,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)}$syncOptions(t){dom.setCssClass(this.replaceOption,"checked",this.searchRange!=null),dom.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",dom.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),dom.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),dom.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var n=this.editor.getReadOnly();this.replaceOption.style.display=n?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!n?"":"none",this.find(!1,!1,t)}highlight(t){this.editor.session.highlight(t||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()}getOptions(){var t={wrap:!0,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,regExp:this.regExpOption.checked,range:this.searchRange,needle:this.searchInput.getValue()};return t}find(t,n,s,o){var i=this.getOptions();i.skipCurrent=t,i.backwards=n,i.preventScroll=s,this.execFind(i,o)}execFind(t,n){var s=l=>{var d=l.matches,p=l.value,f=l.offset,v=t.re;if(d.length){for(var m=this.editor.session.doc,h=[],c={row:0,column:0},k={row:0,column:0},x=0,_=0,w=0,R=0;R<d.length;R++){var b=d[R]+f;v.lastIndex=b;var C=v.exec(p),y=C[0],I=y.length;c=m.indexToPosition(b+w-x+c.column,c.row),x=b+w,_=b+I+w,k=m.indexToPosition(_-x+c.column,c.row),h.push(Range.fromPoints(c,k))}this.editor.selection.fromJSON(h)}},o=this.editor.selection.getRange();t.skipCurrent&&this.searchInput.saveHistory(),(t.skipCurrent||!this.currentRange)&&(this.currentRange=o),t.start=this.currentRange;var i=this.editor.$search.$assembleRegExp(t,!0);if(!i){this.counterResults=null,this.updateCounter();{var u=t.start[t.backwards?"end":"start"],g=t.range||Range.fromPoints(u,u);this.editor.revealRange(g)}return n&&n()}this.lastSearchOptions=t,t.re=i,t.source=i.source,t.flags=i.ignoreCase?"igm":"gm",this.editor.$search.set(t),this.editor.$search.set({start:o}),execFind(this.editor.session,t,l=>{if(l=="waiting")return this.counterResults=null,this.updateCounter();l=l||{total:0,current:0},"total"in l&&(this.counterResults={total:l.total,current:l.current,wrapped:l.wrapped},this.updateCounter()),(!l.start||!l.end)&&(l.start=l.end=o[t.backwards?"end":"start"]);var d=Range.fromPoints(l.start,l.end);t.range&&d.isEmpty()&&(d=t.range),t.skipCurrent&&(this.currentRange=d),this.editor.revealRange(d),!t.preventScroll&&(d&&this.editor.revealRange(d),t.findAll?s(l):this.highlight(i),n&&n(l))})}updateCounter(){var t="",n=this.counterResults&&this.counterResults.wrapped?"blue":"";this.counterResults&&typeof this.counterResults.total=="number"&&typeof this.counterResults.current=="number"&&(this.counterResults.total?this.counterResults.current=this.counterResults.current+1:(this.counterResults.current=0,n="red"),t=this.counterResults.current+"/"+this.counterResults.total+t),this.searchCounter.style.color=n,this.searchCounter.textContent=t}findNext(){this.find(!0,!1)}findPrev(){this.find(!0,!0)}findAll(){var t=this.getOptions();t.findAll=!0,this.execFind(t),this.hide()}replace(){if(!this.editor.getReadOnly()){var t=this.getOptions(),n=this.editor.$search.$assembleRegExp(t,!0),s=this.$getReplaceFunction(t),o=this.editor.selection.getRange();this.find(!1,!1,!1,i=>{if(this.editor.selection.getRange().isEqual(o)&&i&&typeof i!="string"&&"total"in i){n.lastIndex=i.startIndex;var u=n.exec(i.value),g=u&&s(u);u[0]!=g&&(o.end=this.editor.session.replace(o,g)),t.backwards?o.end=o.start:o.start=o.end,this.editor.selection.setRange(o)}}),this.replaceInput.saveHistory()}}replaceAndFindNext(){this.editor.getReadOnly()||(this.replace(),this.findNext())}replaceAll(t){if(!this.editor.getReadOnly()){var n=this.getOptions(),s=this.editor.$search.$assembleRegExp(n,!0);if(!s)return this.counterResults=null,this.updateCounter();n.re=s,n.source=s.source,n.flags=s.ignoreCase?"igm":"gm",n.findAll=!0;var o=this.$getReplaceFunction(n);execFind(this.editor.session,n,i=>{if(typeof i!="string"&&"matches"in i){var u=0,g=i.matches,l=i.value,d=i.offset,p=n.re;if(!g.length)return u;for(var f=this.editor.session.doc,v={row:0,column:0},m={row:0,column:0},h=0,c=0,k=0,x=new Range,_=0;_<g.length;_++){var w=g[_]+d;p.lastIndex=w;var R=p.exec(l),b=R[0],C=b.length;v=f.indexToPosition(w+k-h+v.column,v.row),h=w+k,c=w+C+k,m=f.indexToPosition(c-h+v.column,v.row),x.start=v,x.end=m;var y=o(R);b!=y&&(f.replace(x,y),k+=y.length-b.length)}this.counterResults=null,this.updateCounter(),t&&t()}}),this.replaceInput.saveHistory()}}$getReplaceFunction(t){var n=this.replaceInput.getValue(),s=[];function o(p){var f=s.length-1;p&&typeof p=="string"&&typeof s[f]=="string"?s[f]+=p:(typeof p=="number"||p)&&s.push(p)}for(var i={n:`
`,t:"	",r:"\r","&":0,U:-1,L:-2,E:-3,u:-4,l:-5},u=/\$([\$&\d])|\\([\\ULulEntr\d])/g,g=0,l;l=u.exec(n);){o(n.substring(g,l.index)),g=u.lastIndex;var d=l[1]||l[2];/\d/.test(d)?d=t.regExp?parseInt(d,10):d:d in i&&(d=i[d]),o(d)}return o(n.substr(g)),s.length==1&&typeof s[0]=="string"&&!t.preserveCase?function(){return s[0]}:function(p){for(var f=0,v=0,m="",h=0;h<s.length;h++){var c=s[h];if(typeof c=="number"){if(c<0){switch(c){case-1:f=1;break;case-2:f=2;break;case-3:f=0;break;case-4:v=1;break;case-5:v=2;break}continue}c=p[c]||""}f&&(c=f===1?c.toUpperCase():c.toLowerCase()),v&&c&&(m+=v===1?c[0].toUpperCase():c[0].toLowerCase(),c=c.substr(1),v=0),m+=c}if(t.preserveCase){for(var k=p[0],x=m.split(""),h=Math.min(k.length,x.length);h--;){var c=k[h];c&&c.toLowerCase()!=c?x[h]=x[h].toUpperCase():x[h]=x[h].toLowerCase()}m=x.join("")}return m}}hide(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()}show(t,n){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=n,t&&this.searchInput.setValue(t),this.searchInput.focus(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)}isFocused(){var t=document.activeElement;return t==this.searchInput.container||t==this.replaceInput.container}}var $searchBarKb=new HashHandler;$searchBarKb.bindKeys({"Ctrl-f|Command-f":function(a){var t=a.isReplace=!a.isReplace;a.replaceBox.style.display=t?"":"none",a.replaceOption.checked=!1,a.$syncOptions(),a.searchInput.focus()},"Ctrl-H|Command-Option-F":function(a){a.editor.getReadOnly()||(a.replaceOption.checked=!0,a.$syncOptions(),a.replaceInput.focus())},"Ctrl-G|Command-G":function(a){a.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(a){a.findPrev()},esc:function(a){setTimeout(function(){a.hide()})},Return:function(a){a.activeInput==a.replaceInput&&a.replace(),a.findNext()},"Shift-Return":function(a){a.activeInput==a.replaceInput&&a.replace(),a.findPrev()},"Alt-Return":function(a){a.activeInput==a.replaceInput&&a.replaceAll(),a.findAll()},Tab:function(a){(a.activeInput==a.replaceInput?a.searchInput:a.replaceInput).focus()}});$searchBarKb.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(a){a.regExpOption.checked=!a.regExpOption.checked,a.libSearch.setRegexpMode(a.searchInput,a.regExpOption.checked),a.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(a){a.caseSensitiveOption.checked=!a.caseSensitiveOption.checked,a.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(a){a.wholeWordOption.checked=!a.wholeWordOption.checked,a.$syncOptions()}},{name:"toggleReplace",exec:function(a){a.replaceOption.checked=!a.replaceOption.checked,a.$syncOptions()}},{name:"searchInSelection",exec:function(a){a.searchOption.checked=!a.searchRange,a.setSearchRange(a.searchOption.checked&&a.editor.getSelectionRange()),a.$syncOptions()}}]);var $closeSearchBarKb=new HashHandler([{bindKey:"Esc",name:"closeSearchBar",exec:function(a){a.searchBox.hide()}}]);SearchBox.prototype.$searchBarKb=$searchBarKb;SearchBox.prototype.$closeSearchBarKb=$closeSearchBarKb;function Search(a,t){var n=a.searchBox||new SearchBox(a);n.show(a.session.getTextRange(),t)}export{Search,SearchBox};
