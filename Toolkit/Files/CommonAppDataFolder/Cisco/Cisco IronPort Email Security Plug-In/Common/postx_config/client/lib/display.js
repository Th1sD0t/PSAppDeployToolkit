'$Serial: 5029 $ $Revision: #29 $';function et(eq,fh,e6,eS){var dq;if(eq&&
document.getElementById&&(dq=document.getElementById(eq)))dq.innerHTML=fh;
else if(e6){self.status=e6;return true}else if(eS)alert(eS);return false}
function fb(_S,fd){var c;if(fd==1){c=er('_Saved1Path','',_S);et('progress1',
'\x3cspan class=progress\x3e'+c+'\x3c/span\x3e','',c);et('progress2','')}
else{var dE=_S.lastIndexOf('\\'),bk=_S.lastIndexOf('/'),cU=_S.lastIndexOf(
':');if(bk>dE)dE=bk;if(cU>dE)dE=cU;var _A=_S.substr(0,dE),fc=_S.substr(dE+1)
;c=er('_SavednPath','',_A);var aw=er('_SavednFile','',fc);et('progress1',
'\x3cspan class=progress\x3e'+c+'\x3c/span\x3e','',c+'\n'+aw);et('progress2'
,'\x3cspan class=progress\x3e'+aw+'\x3c/span\x3e','')}}function fq(dZ,eu){e8
(dZ,eu,{'title':['_Preparing','_StatusPreparing'],'completed':
'_StatusPrepPct'})}function e8(dZ,eu,dN){if(typeof dZ==aG)dZ=dZ.toString();
if(!eu)eu=fy;if(dZ=='clear'){et('progress1','',er('_StatusDone'));et(
'progress2','');et('passMsg','&nbsp;');return;}if(dZ=='tools'){var c=er(
'_ToolsLoading');et('progress1','\x3cspan class=progress\x3e'+c+
'\x3c/span\x3e',c);return;}if(!dN)dN={'title':['_DecProgTitle',
'_StatusDecInit'],'completed':'_StatusDecPct'};if(dZ=='start'){if(et(
'progress1','\x3cspan class=progress\x3e'+er(dN.title[0])+'\x3c/span\x3e',er
(dN.title[1]),''))return;et('passMsg','&nbsp;');dZ=0}else if(dZ=='finish'){
if(document.layers){self.status=er('_StatusDone');return;}dZ=100}else{dZ=
Math.floor(dZ*100)}var eK='#4040FF',eT='#404040';if(typeof eu==dv)eK=eu;else
if(typeof eu==aG&&typeof eu.progressBar==aG){if(eu.progressBar.bgColor)eK=eu
 .progressBar.bgColor;if(eu.progressBar.borderColor)eT=eu.progressBar.
borderColor}var eG=
'\x3ctable align=center cellpadding=0 cellspacing=0 border=1 '+
'bordercolor="'+eT+'" width="85%"\x3e'+'\x3ctr\x3e';if(dZ>0)eG+=
'\x3ctd bgcolor="'+eK+'" width="'+dZ+'%"\x3e&nbsp;\x3c/td\x3e';if(dZ<100)eG
+='\x3ctd\x3e&nbsp;\x3c/td\x3e';eG+='\x3c/tr\x3e\x3c/table\x3e';et(
'progress2',eG,er(dN.completed,'',dZ))}function fa(status,eu){var eA=
'passMsg';if(status==ee){eB();ew(eA,er('_ErrorBadPwds'))}else if(status==fv)
{eB();ew(eA,er('_PlatformIncompatible'))}else if(status==fu){eB();ew(eA,er(
eu.substr(0,5)=='file:'?'_EnvelopeMissingFile':'_EnvelopeMissingNet'))}else
if(status==fs){eB();ew(eA,er('_PayloadDamaged'))}else if(status==ft){eB();ew
(eA,er('_NoPayload'))}else if(status==fr){eB();ew(eA,er('_AppletError'))}
else{var c=er(status==fw?'_ErrorPwdChanged':'_ErrorBadPwd');et(eA,
'\x3cspan class=error\x3e'+c+'\x3c/span\x3e','',c)}et('progress1','',er(
'_StatusDone'));et('progress2','');e4(0,'key1')}function e3(ey,eM){var eI=
document.forms[ey].elements,_,d=eI.length;eM=!eM;for(_=0;_<d;_++)if(eI[_].
type=='submit'||eI[_].type=='button')eI[_].disabled=eM}function eB(){e3(0,
false)}var eZ=false;function e5(fe){eZ=fe}function fl(ez,eR,style){e5(false)
;if(!eR)eR='_blank';return window.open(ez,eR,style)}function e4(ey,eC){if(eZ
&&document.forms[ey]&&document.forms[ey][eC]&&document.forms[ey][eC].focus){
if(document.forms[ey][eC].type=='hidden')return;document.forms[ey][eC].focus
();if(document.forms[ey][eC].select)document.forms[ey][eC].select()}}
function fg(eq){if(!eq)return 0;if(eq.nodeName.toLowerCase()=='table'){var _
;for(_=0;_<eq.childNodes.length;_++)if(eq.childNodes[_].nodeName.toLowerCase
()=='tbody'){eq=eq.childNodes[_];break}}return eq.clientWidth||eq.
scrollWidth||0}function ff(eq){if(!eq)return 0;return eq.clientHeight||eq.
scrollHeight||0}eV={};function am(aL){if(!document.getElementById)return'';
return document.getElementById(aL)||eV[aL]}function eU(eq){if(typeof eq==dv)
eq=getElementById(eq);if(!eq)return;var c;try{while((c=eq.firstChild))eq.
removeChild(c)}catch(fx){eq.innerHTML=''}return eq}function ew(eq,ex,eN){eq=
eU(eq);if(!eq)return;var e2=eq;if(eN){eq=document.createElement('span');eq.
setAttribute('class','error');e2.appendChild(eq)}if(typeof ex==fE)ex='';if(
ex=='&nbsp;'||ex.indexOf('\x3ca ')!=-1)eq.innerHTML=ex;else eq.appendChild(
document.createTextNode(ex));return e2}function fD(eq,aL,eN){return ew(eq,er
(aL),eN)}function fn(){var eD={},eE={};if(arguments.length>0){eD=arguments[0
];if(arguments.length>1)eE=arguments[1]}fo(eD,eE)}function fo(eD,eE){var ev=
document.getElementsByTagName('*');for(var _=0;_<ev.length;_++){var aL=ev[_]
 .id;if(aL){if(aL.indexOf('text_')==0){if(ev[_].tagName.toUpperCase()==
'INPUT')ev[_].value=er(aL.substring(5));else if(ev[_].tagName.toUpperCase()
=='IMG')ev[_].alt=er(aL.substring(5));else ev[_].innerHTML=er(aL.substring(5
))}else if(eD[aL]!==undefined){if(ev[_].tagName.toUpperCase()=='INPUT')ev[_]
 .value=eD[aL];else ev[_].innerHTML=eD[aL]}else if(eE[aL]!==undefined){if(ev
[_].tagName.toUpperCase()=='INPUT')ev[_].value=er(eE[aL]);else ev[_].
innerHTML=er(eE[aL])}}}}function fj(fi,eJ){var e0=getElementById(fi),eO=
getElementById(eJ);if(e0&&eO)eO.parentNode.insertBefore(e0,eO)}function fp(
eP,eJ){var c;if(c=getElementById(eP)){ew(c.cells[0],'');ew(c.cells[1],'');if
(eJ)insertRow(eP,eJ);else{eV[eP]=c;if(c.parentNode)c.parentNode.removeChild(
c)}}}function eW(_H,eQ,_8,es,eH,aL){eH='btn';var f_='\x3cinput type='+(eQ?
'submit':'button')+(aL?' id="'+aL+'" ':'')+' value="'+_H+'" name='+_8+
' onclick="'+es+'" class="'+eH+'"\x3e';return f_}function fz(aL,eQ,_8,es,eH)
{return eW(er(aL),eQ,_8,es,eH,'text_'+aL)}function eX(_8,es,eL,fk,e1){var aL
=genId('c');return'\x3ctr\x3e\x3ctd\x3e\x3cp\x3e'+
'\x3cinput type=checkbox name='+_8+' id='+aL+(eL?' checked':'')+(es?
' onclick="'+es+'"':'')+' style="vertical-align:middle; margin:0"'+
'\x3e\x3clabel for='+aL+' style="vertical-align:middle"'+(e1?' id='+e1:'')+
'\x3e'+fk+'\x3c/label\x3e\x3c/p\x3e\x3c/td\x3e\x3c/tr\x3e'}function fA(_8,es
,eL,e7){return eX(_8,es,eL,er(e7),'text_'+e7)}function eY(ex,ez,eF,es,aL){
return'\x3ca '+'href="'+ez+'" '+(eF?'target="_blank" ':'')+(es?'onclick="'+
es+'" ':'')+(aL?'id="'+aL+'" ':'')+'\x3e'+ex+'\x3c/a\x3e'}function fB(aL,ez,
eF,es){return eY(er(aL),ez,eF,es,'text_'+aL)}function e9(eq,ex,ez,eF,es){if(
typeof eq==dv)eq=getElementById(eq);if(!eq)return;var c;eq.appendChild(
document.createElement('br'));c=document.createElement('a');c.setAttribute(
'href',ez);if(eF)c.setAttribute('target','_blank');if(es){if(c.
addEventListener)c.addEventListener('click',es,false);else if(c.attachEvent)
c.attachEvent('onclick',es);else c.onclick=es}ew(c,ex);eq.appendChild(c)}
function fm(){var c,location;if(window&&window.location&&window.location.
pathname)c=a_(window.location.pathname);else return;location=window.location
;if(location.reload)location.reload(false);else if(location.replace)location
 .replace(c);else if(location.href)location.href=c}displayError=fa;
displayMessage=et;displaySaveLocation=fb;setButtons=e3;setFocused=e5;
openWindow=fl;setFocus=e4;updatePrepareProgress=fq;updateProgress=e8;
clearChildren=eU;setInnerText=ew;insertRow=fj;removeRow=fp;genButton=eW;
genCheckbox=eX;genLink=eY;addLinkToNode=e9;refreshBrowser=fm;fC=fn;
getElementById=am;getWidth=fg;getHeight=ff;
