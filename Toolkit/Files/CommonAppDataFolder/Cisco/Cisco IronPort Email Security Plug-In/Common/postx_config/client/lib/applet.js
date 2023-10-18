'$Serial: 4958 $ $Revision: #29 $';var _O='http://\x61pplet.postx.com/dist'
,_P=false,_5=false;function ak(_t){if(_W)return null;var _J=null;if(document
 .applets&&document.applets.length)_J=document.applets[_t];return _J}var _M=
'Temporary Internet Files',_x='\\'+_M+'\\',_F=new RegExp('([\\\\/])'+_M+
'\\1'),_L='\\Documents and Settings\\',_0=/^(\/Users\/[^\/]+)/,_G=
/^\/[A-Z][:|][\\\/]/i;function ar(){var m=_z;if(!m.usingApplet){_3(0);
return true}if(_P&&!_5){return false}if(m.fns.progress)m.fns.progress(
'tools',m.arg);_P=true;m.installApplet=0;m.query='';if(_n.forceAppletReload(
)||_n.forceAppletReloadAlways())return _C();var _o=al(m.appletName);if(_n.
ignoreAppletImage()||_n.ignoreAppletImageAlways())if(_o)return _T(_o);else
return _C();var _,c,_r=[];if(_o)_r.push(_o);if(_W){var _B=[
'/Library/Application Support/Cisco','/private/tmp/501/TemporaryItems/Cisco'
];if(location.protocol=='file:'&&(c=location.pathname.match(_0)))_B.unshift(
c[0]+'/Library/Application Support/Cisco');var d=_B.length;for(_=0;_<d;_++)
if(_B[_]!=_o)_r.push(_B[_])}else{c=a_(location.pathname);if(location.
protocol=='file:'&&_G.test(c)){var _A='Cisco';c=c.substr(1);if((_=c.search(
_F))!=-1){c=c.substr(0,_+_x.length)+_A;if(c!=_o)_r.push(c)}else if((_=c.
indexOf(_L))!=-1&&(_=c.indexOf('\\',_+_L.length+1))!=-1){c=c.substr(0,_+1)+
'Local Settings'+_x+_A;if(c!=_o)_r.push(c)}if(c.substr(0,1).toUpperCase()!=
'C'){c=c.substr(0,3)+'Windows'+_x+_A;if(c!=_o)_r.push(c)}c='C:\\Windows'+_x+
_A;if(c!=_o)_r.push(c)}}return _D({'list':_r,'finished':false})}function _D(
m){if(m.finished)return true;if(!m.list.length){m.finished=true;return _C()}
var _S=m.list.shift(),_y=false,_m=new Image();_m.onabort=_m.onerror=function
(){_y=true;_D(m)};_m.onload=function(){_y=true;if(_m.height<1)_D(m);else{m.
finished=true;_T(_S)}};_m.src='file://'+_S+'/'+_z.appletName+'.gif';if(!_y)
var as=setTimeout(function(){_m.onabort=_m.onerror=_m.onload=function(){};if
(!_y)_D(m)},200);return true}function _T(_q){var m=_z;if(_q.substr(0,1)=='/'
)m.path='file://'+_q;else m.path='file:///'+_q;if(_E&&!_V){var _v=a_(
location.pathname),_2=location.protocol=='file:'&&_G.test(_v)&&_v.search(_F)
==-1&&(!document.firstChild||!document.firstChild.text||document.firstChild.
text.substr(0,21)!='\x3c!-- saved from url=('),_X=_q.search(_F)==-1;if(!_2&&
_X){if(!_G.test(_v)||_v.substr(1,3)!=_q.substr(0,3))return _C();var _1=_v.
match(/([\\\/]+)/g).length-2,c='';while(0<_1--)c+='..\\';m.path='file://'+c+
_q.substr(3)}}_9(ad,_q,m.payload.expiries.tools,'/');return _R()}function _C
(){var m=_z;m.installApplet=1;m.path=_O;m.query='?'+new Date().getTime();var
_m=new Image();_m.onerror=_m.onload=_R;_m.src=m.path+'/spacer.gif';
return true}var _Q={'height':1};function _R(){function _k(_8,_H,_4){if(_4)_H
=_Y(_H);return'\x3cparam name="'+_8+'" value="'+_H+'"\x3e\n'}var m=_z,_K=m.
appletClass,_t=m.appletName,_l=m.payload,_,_s,_7=_n.ignoreAppletImage()||_n.
ignoreAppletImageAlways(),_u=_n.appletDebugLevel();if(_u==0)_u=_n.
appletDebugLevelAlways();_n.forceAppletReload(0);_n.ignoreAppletImage(0);_n.
appletDebugLevel(0);_n.save(_l.expiries.preferences,'/');var _j=[
'\x3c\x61pplet name="'+_K+'" '+(m.path?'codeBase="'+m.path+'" ':'')+
'code="com.postx.client.'+_K+'.class" '+'archive="'+_t+'.jar'+m.query+
'" mayscript'];if(m.arg&&m.arg.attrs)_s=ao(m.arg.attrs,_Q);else _s=_Q;for(_
in _s)_j[_j.length]=' '+_+'='+_Y(_s[_]);var _p=m.action;if(!_E&&_p!=_I)_j[_j
 .length]=' style="visibility:hidden"';_j[_j.length]='\x3e\n';if(m.path)_j[
_j.length]=_k('cabBase',_t+'.cab'+m.query)+_k('codeBase',m.path,1);_j[_j.
length]=_k('expiries.tools',_l.expiries.tools)+_k('applet.install',m.
installApplet)+_k('applet.update',_7?0:1)+_k('applet.name',_t)+_k(
'applet.path',_O);if(aq)_j[_j.length]=_k('applet.noNew',1);_j[_j.length]=_k(
'ua',at)+_k('rid',_l.rid[0])+_k('document.url',location.href)+_k(
'document.charset',document.charset||document.characterSet||'UTF-8');_j[_j.
length]=_k('action',_p);if(!ah)_j[_j.length]=_k('ie','1');if(_p==ab)_j[_j.
length]=_k('save.name',_l.saveName,1)+_k('save.data',_l.saveData);else{if(_p
==_I){_j[_j.length]=_k('url',_l.rpc.url)+_k('na',navigator.appName)+_k('nc',
navigator.appCodeName)+_k('nj',navigator.javaEnabled()?1:0)+_k('np',
navigator.platform)+_k('nu',navigator.userAgent)+_k('nv',navigator.
appVersion);if(navigator.language)_k('nl',navigator.language)}if(!_V||!_E){
_j[_j.length]=_k('fns.error',_w(m.fns.error));if(m.fns.completion)_j[_j.
length]=_k('fns.completion',_w(m.fns.completion));if(m.fns.progress)_j[_j.
length]=_k('fns.progress',_w(m.fns.progress));if(m.fns.finalize)_j[_j.length
]=_k('fns.finalize',_w(m.fns.finalize));if(m.fns.success)_j[_j.length]=_k(
'fns.success',_w(m.fns.success));if(_p==_U&&m.fns.saved)_j[_j.length]=_k(
'fns.saved',_w(m.fns.saved));_j[_j.length]=_k('fns.setcookie',"_9")+_k(
'fns.delcookie',"aj")+_k('fns.loaded',"_3")+_k('fns.launch',"an")}if(_p==aa
||_p==_U||_p==_I){_j[_j.length]=_k('payloadname',_l.name,1)+_k('key',_N(m.
key,1));if(_l.hardenername&&m.hardener){ap=1;_j[_j.length]=_k('hardener',_N(
ai(m.hardener,m.userKey,_l.keysize,af),1))+_k('expiries.hardener',_l.
expiries.hardener)+_k('hardener.cookie',ac+_l.hardenername)}if(_l.sessionKey
)_j[_j.length]=_k('sessionKey',_N(_l.sessionKey,1),1)}}if(_l.secureName)_j[
_j.length]=_k('secureName',_l.secureName);if(_l.logoutURL)_j[_j.length]=_k(
'logoutURL',_l.logoutURL);if(_l.localizedCreateDate)_j[_j.length]=_k(
'localizedCreateDate',_l.localizedCreateDate);_j[_j.length]=_k('locale',
getLocale());if(_6)_j[_j.length]=_k('messageBarText',_6,1);if(m.arg)for(_ in
m.arg.params)_j[_j.length]=_k(_,m.arg.params[_],1);if(_u)_j[_j.length]=_k(
'debug',_u);_j[_j.length]='\x3c/\x61pplet\x3e';_j=_j.join('');if(_u>1)if(_=
document.getElementById('debugTextarea')){if(_.value!='')_.value+='\n';_.
value+=_j}else alert('Applet tag:\n\n'+_j);if(_s=document.
getElementsByTagName('base'))for(_=0;_<_s.length;_++)_s[_].removeAttribute(
'href');document.getElementById(ae).innerHTML=_j;return true}function ag(){
if(!_E||_Z)return;var _j=
'\x3capplet height=1 style="position:absolute;left:-500px"'+
' code="java.applet.Applet.class"'+
'\x3e\x3cspan id="appletTest"\x3e&nbsp;\x3c/span\x3e\x3c/applet\x3e';
document.write(_j);if(am('appletTest'))_Z=true}
