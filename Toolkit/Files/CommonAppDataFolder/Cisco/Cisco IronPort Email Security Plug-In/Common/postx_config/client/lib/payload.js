'$Serial: 3169 $ $Revision: #29 $';var io,_z,ih='',iz=0,ip=0,fy,payload={}
;function iP(iu){var ig,_,d;if(iu&&(ig=document.getElementById(iu))){d=ig.
childNodes.length;for(_=0;_<d;_++)if(ig.childNodes[_].nodeType==je){ig=ig.
childNodes[_].data;break}if(_==d)ig=ig.innerHTML;if(ig=ig.match(
/d=([^"&]+)/g))return ig}return''}function i9(ey,iT,iu,jx,jw,i5,gM){ey=
document.forms[ey];var ig,m={'chunked':arguments.length>3,'args':gM,
'completionScript':i5,'form':ey,'formElementName':iT,'payloadId':iu};if(m.
data=iP(iu)){m.index=0;m.maxDuration=1000;m.progressState=0;m.timeOut=_V?125
:1;m.shortCircuit=1;if(m.chunked){io=m;setTimeout(function(){iy(m)},m.
timeOut)}else iy(m)}else if(ey&&(ig=ey[iT].value)){m.data=ig;m.progressState
=-1;iJ(m)}else fa(ft)}function iy(m){var dE=m.data,_=m.index,d=dE.length,jb=
m.shortCircuit,gS=/\'data\':\[([^\']*\'){2}/,cS,iR,cT,h6=m.chunked?new Date(
).getTime()+m.maxDuration:0;do{dE[_]=dE[_].replace(/[\n\r\t ]+/g,'');dE[_]=
a_(dE[_].substr(2),1);if(fG||fO){if((iR=dE[_].search(/[^\r\n]/))>0){dE[_]=dE
[_].substr(iR);if(_>0&&(cT=dE[_-1].length)>0&&dE[_-1].charAt(cT-1)=='\\')dE[
_-1]=dE[_-1].substring(0,cT-1)}dE[_]=dE[_].replace(/\\[\n\r]+/g,'')}if(jb){
if(_>0){dE[_]=dE[_-1]+dE[_];dE[_-1]=''}if(cS=gS.exec(dE[_])){dE[_]=dE[_].
substring(0,cS.index)+cS[0]+",'','']}";dE.length=d=_+1;ih={'data':[],
'completionScript':'','shortCircuit':0};ao(ih,m)}}_++}while(_<d&&(!h6||new
Date().getTime()<h6));var iv=_/d;switch(m.progressState){case 0:if(iv>.3||!m
 .args||!m.args.progressFn){m.progressState=-1;break}m.args.progressFn(
'start',m.args.progressArgs);m.progressState=1;case 1:m.args.progressFn(iv,m
 .args.progressArgs);break}if(_==d){m.data=dE=dE.join('');if(m.form&&m.
formElementName)m.form[m.formElementName].value=dE;if(m.chunked)setTimeout(
function(){iJ(io)},m.timeOut);else iJ(m)}else{m.index=_;setTimeout(function(
){iy(io)},m.timeOut)}}function iJ(m){var _,c,ey=m.form;if(m.progressState&&m
 .args&&m.args.progressFn)m.args.progressFn('clear',m.args.progressArgs);if(
m.chunked)io=0;var il=window.payload||'';try{eval('window.'+"payload"+'='+m.
data)}catch(dq){fa(ft);return;}if(il){if(ey&&il.form)ey.action=il.form.
action;il.data=0;il.segments=0;ao(il,payload);payload=il}var _l=payload;if(
ey){_l.form={'action':ey.action,'form':ey};ey.action='javascript:void(0)'}if
(!_l.segments)_l.segments=[_l.data.length-2,1,1];if(!_l.rid)_l.rid=jq;else
if(typeof _l.rid==dv)_l.rid=[_l.rid];if(!_l.algnames)_l.algnames=i2;else ao(
_l.algnames,i2);if(!_l.algparams)_l.algparams=i3;else ao(_l.algparams,i3);if
(!_l.maxBadPasswords)_l.maxBadPasswords=0;if(!_l.progressratio){if(_l.
algnames.encryption.data=='AES')_l.progressratio=.7;else _l.progressratio=.4
}if(!_l.expiries)_l.expiries=i4;else ao(_l.expiries,i4);if(!_l.keyname)_l.
keyname='Default';if(!_l.sigkeyname)_l.sigkeyname='Default';if(!_l.flags)_l.
flags=0;if(!_l.keysize)_l.keysize=0;if(_l.cryptCompressed)_l.flags|=em;if(_l
 .plainCompressed)_l.flags|=en;if(ey.openerHost&&ey.openerHost.value!='')_l.
flags|=iM;if(_l.algnames.encryption.keys=='RSA')_l.flags|=iF;if(!(_l.flags&
iF)){var d=_l.toc.length;for(_=0;_<d;_++)if(_l.toc[_][iE]&jh){_l.flags|=iF;
break}}if((c=gC(_l.msgID))){if((c[0]&(gF|af))==gF)_l.flags|=hP;else _l.flags
&=~hP;_l.selectedID=c[2];if(c[0]&af)_l.encryptedSessionKey=c[1];else _l.
sessionKey=c[1]}if(_l.userkeyname&&(c=gG(_l.userkeyname))){if(c[0]&gF)_l.
flags|=hP;else _l.flags&=~hP;_l.userKey=c[1];_l.selectedID=c[2];if(c[0]&gJ){
var iS;if(_l.algnames.keyServerKeyHash!='plain'&&(iS=dU(_l.algnames.
keyServerKeyHash)))_l.userKey=iS.digest(_l.userKey,0,0,true).finalize()}else
{_l.algnames.keyServerKeyHash='SHA1'}}if(m.completionScript)eval(m.
completionScript+';')}function iO(){if(payload.showWarning=='true'){jv(
payload.credentialsExpiredDays,payload.pswdExpLink);return;}if(!ih)return;if
(ih.data=iP(ih.payloadId)){io=ih;ih='';iy(io)}else fa(ft)}function it(_l){if
(ih){ih.completionScript="it(payload)";setTimeout(iO,ih.timeOut);
return false}var eI=_l.form.form,iB=document.createElement('input');iB.name=
'credentialsExpiredWarning';iB.value=_l.credentialsExpiredWarning;iB.
setAttribute('type','hidden');var iA=document.createElement('input');iA.name
='credentialsExpiredDays';iA.value=_l.credentialsExpiredDays;iA.setAttribute
('type','hidden');eI.appendChild(iB);eI.appendChild(iA);eI.localeUI.value=
getLocale();eI.action=_l.form.action;eI.onsubmit='';eI.submit();return false
}function j_(_l,j,i8,_p,iq,eu,i0){if(iz)return false;gUserArg=fy=eu;iz=1;if(
iq.progress)iq.progress('clear',eu);if(!iq.completion)iq.completion=i7;var m
={'fns':iq,'arg':eu,'key':_l.userKey||new SHA1(j,0,0,true).finalize(),
'action':_p,'payload':_l,'timeOut':_V?125:1,'duration':i8,'appletMsg':i0,
'appletName':ad,'appletClass':'\x45nvelopeTools'};if(_l.algnames.
keyServerKeyHash=='plain')m.plainKey=j||_l.userKey;_z=m;if(_l.event&&_l.
event.ctrlKey&&!_l.event.altKey&&!_l.event.shiftKey)_n.forceAppletReload(1);
_l.event=js=false;var c;if(_l.encryptedSessionKey){var iI=new ARC4(m.key,{
'keysize':_l.keysize,'prerun':256},1).crypt(_l.encryptedSessionKey);if(!(c=
dL(iI))){iq.error(eo,eu);ec(1);return false}_l.sessionKey=c;var ey=document.
forms[_l.form.index];if(ey&&ey.sessionkey)ey.sessionkey.value=_h.
encodeToString(c)}if(!_l.sessionKey&&_l.hardenername){if((c=gy(ac+_l.
hardenername))&&c[1].length>4){var iI=new ARC4(m.key,{'keysize':_l.keysize,
'prerun':256},1).crypt(c[1]);if(!(c=dL(iI))){m.fns.error(eo,eu);ec(1);
return false}m.hardener=c}}if((m.action==aa||m.action==_U)&&!_l.sessionKey&&
(_l.data[0]==''||(_l.hardenername&&!m.hardener))){var ja=m.action==aa?jl:jm,
gv=_l.hardenername?_l.hardenername+_l.rid[0]:_l.msgID,iw={'su':_l.selectedID
,'lp':getLocale()};if(_l.cookiesEnabled){iw.rm=(_l.flags&jj?1:0);iw.epsp=(_l
 .flags&ji?1:0)}if(_l.secureReplyAlg)iw.sra=_l.secureReplyAlg;if(!_l.
noUserKeyNeeded){var iK=typeof m.plainKey==fE,j=iK?m.key:jy(m.plainKey),ir=
iK?'':'utf8:';if(_l.rpc.trafficKey){ir='arc4:'+ir;j=new ARC4(_l.rpc.
trafficKey,{'prerun':256}).encrypt(j)}ir+=iK?'sha1':_l.algnames.
keyServerKeyHash;ir='base64:'+ir;iw.k=ir+','+_h.encodeToString(j)}jr(_l.rpc,
gv,ja,RPC_FLAG_NEED_SESSION_KEY,jt,iw);return false}return i6(iZ)}function
i6(iG,iY,j,i1){var m=_z,_l=m.payload;if(iG!=iZ){if(m.fns.progress)m.fns.
progress('clear',m.arg);if(iG==jn&&!_l.userKey)m.fns.error(eo,m.arg);else m.
fns.rpc(_l,iY,RPC_FLAG_NEED_SESSION_KEY,iG,m.arg,i1);ec(1);return false}if(j
){if(_l.hardenername)m.hardener=j;else _l.sessionKey=j}if(!_l.hardenername){
var hX=typeof m.plainKey!=fE,gp=(hX?m.plainKey:m.key);if(_l.flags&i_)gH(_l.
userkeyname,_l.expiries.userKey,gp,((_l.flags&hP)?gF:0)|(_l.selectedID?gz:0)
|(hX?gJ:0),_l.selectedID)}if(_l.sessionKey&&_l.flags&h2)gE(_l.msgID,_l.
expiries.sessionKey,_l.sessionKey,m.key,_l.keysize,((_l.flags&hP)?gF:0)|((_l
 .flags&h3)?af:0)|((_l.selectedID)?gz:0),_l.selectedID);if(_l.hardenername&&
m.hardener){m.userKey=m.key;m.key=m.hardener}var iV=(_l.flags&iF)||(m.action
&jg);if((m.usingApplet=iV)){if(_Z){if(_l.flags&iM)it(_l);else m.fns.error(fv
,m.arg);return false}_l.progressratio=1}if(m.action==aa&&iV&&(_l.flags&jk))
it(_l);else setTimeout(iU,m.timeOut);return false}function iU(){var m=_z,_l=
m.payload;if(!m.usingApplet&&ih){ih.completionScript="iU()";iO();return;}if(
_l.algnames.encryption.keys!='RSA'&&(m.action==aa||m.action==_U)&&_l.data[0]
!=''&&!m.usingApplet&&!ej())return;if(!m.usingApplet){_3(0);return;}ip=
setTimeout(function(){ec(0)},5000);if(!ar(m.appletName)){aj(m.appletName,'/'
);_n.forceAppletReload(1);_n.save(_l.expiries.preferences,'/');if((_l.flags&
iM)&&m.action==aa){if(confirm(er('_onlineOption'))){it(_l);return;}}else if(
m.action==jc||m.action==jd)alert(er('_verifyMsg'));else{var d2=m.appletMsg;
if(!d2)d2=er('_appletMsg');alert(d2)}ec(1)}}function ec(dZ){var m=_z,_l=m.
payload||'';if(dZ)_z=0;clearTimeout(ip);ip=0;iz=0;m.key=_l.sessionKey='';if(
m&&m.fns&&m.fns.finalize)m.fns.finalize(dZ,m.arg)}function _3(dZ){if(ip){
clearTimeout(ip);ip=0}iz=1;_5=1;if(dZ!=0){ec(1);return;}var m=_z;if(m.fns.
progress)m.fns.progress('start',m.arg);setTimeout(ef,m.timeOut)}var ix=0,iL=
1,iC=2,iD=4;function i7(eg,ei,eu){var m=_z,_l=m.payload,av,dq,_,d=_l.toc.
length,ij,ii='',ex=0;for(_=0;_<d;_++){dq=_l.toc[_];if(dq[iX]==jo){av=dq[iE]&
iW?eg:ei;ii=av.substr(dq[ed][0],dq[ed][1]);break}}for(_=0;_<d;_++){dq=_l.toc
[_];av=dq[iE]&iW?eg:ei;av=av.substr(dq[ed][0],dq[ed][1]);if(m.action==aa&&(
dq[iE]&jf)){ij=av;ex=dq[iX]==jp}}if(typeof ij==fE)return;m={'input':[ij,ii],
'isText':[ex,false],'convert':[ix,ix],'index':-1,'offset':0,'accum':[],
'timeOut':m.timeOut,'duration':m.duration,'payload':_l,'totalLen':0,'curLen'
:0,'progressFn':m.fns.progress,'userArg':m.arg,'progressState':0,'names':{
'title':['_DisplayConv','_StatusDisplayConv'],'completed':
'_StatusDisplayConvPct'}};var iH,c;d=m.input.length;for(_=0;_<d;_++){c=m.
input[_];if(m.isText[_])m.convert[_]|=iL;iH=c.substr(0,2);if(iH==
'\u00fe\u00ff')m.convert[_]|=iC;else if(iH=='\u00ff\u00fe')m.convert[_]|=iD;
if(m.convert[_]!=ix){m.totalLen+=c.length;if(m.index==-1)m.index=_}}if(m.
index>=0)setTimeout(function(){iN(m)},m.timeOut);else iQ(m);return''}
function iN(m){var ik=m.index,dC=m.input[ik],is=m.convert[ik],N=m.offset,cT=
dC.length;if(N==0&&(is&iC||is&iD))N=2;var au,im='',h6=new Date().getTime()+m
 .duration;do{if(is&iC)au=String.fromCharCode(dC.charCodeAt(N++)<<8|dC.
charCodeAt(N++));else if(is&iD)au=String.fromCharCode(dC.charCodeAt(N++)|dC.
charCodeAt(N++)<<8);else au=dC.charAt(N++);if(is&iL){if(au=='\x26')au=
'\x26amp;';else if(au=='\x3c')au='\x26lt;';else if(au=='\x3e')au='\x26gt;'}
im+=au;if(im.length>100){m.accum[m.accum.length]=im;im=''}}while(N<cT&&new
Date().getTime()<h6);if(im){m.accum[m.accum.length]=im;im=''}m.curLen+=N-m.
offset;var iv=m.curLen/m.totalLen;switch(m.progressState){case 0:if(iv>.3||!
m.progressFn){m.progressState=-1;break}m.progressFn('start',m.userArg,m.
names);m.progressState=1;case 1:m.progressFn(iv,m.userArg,m.names);break}if(
N<cT)m.offset=N;else{m.input[ik]=m.accum.join('');m.accum.length=0;cT=m.
input.length;do ik++;while(m.convert[ik]==ix&&ik<cT);if(ik==cT){setTimeout(
function(){iQ(m)},m.timeOut);return;}m.index=ik;m.offset=0}setTimeout(
function(){iN(m)},m.timeOut)}function iQ(m){var ij=m.input[0],ii=m.input[1];
if(ii){var _l=m.payload,_=ii.indexOf('$[0]');ii=gR(ii,ij,(_l.secureName?_l.
secureName:''),(_l.logoutURL?_l.logoutURL:''),'',(_l.localizedCreateDate?_l.
localizedCreateDate:''),getLocale(),_6);if(_==-1)ii=ii+'\x3chr\x3e'+ij;ij=ii
}document.open();document.write(ij+'\x3c!--');document.write('--\x3e');
document.close();ju(payload.credentialsExpiredDays,payload.
credentialsExpiredWarning,payload.pswdExpLink)}zx=processPayload=j_;zm=
initializePayload=i9;zl=openOnline=it;
