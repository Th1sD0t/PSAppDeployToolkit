'$Serial: 3492 $ $Revision: #29 $';function kX(_8){var kW=1,kR=0,kP={},kQ={
'ignoreAppletImage':'B','ignoreAppletImageAlways':'B','forceAppletReload':
'B','forceAppletReloadAlways':'B','appletDebugLevel':'I',
'appletDebugLevelAlways':'I'};function kY(_8,a8){return function(kO){
return a8(_8,kO)}}function dH(_8,kO){var kT=kP[_8];if(typeof kO!=fE&&kO!=kT)
{kP[_8]=kO;kR=1}return kT}function kU(_8,kO){if(typeof kO!=fE)kO=+kO?1:0;if(
!kP[_8])kP[_8]=0;return dH(_8,kO)?1:0}function kV(_8,kO){if(typeof kO!=fE)if
(isNaN(kO=parseInt(kO)))kO=0;if(!kP[_8])kP[_8]=0;return dH(_8,kO)}var f5,kS;
if(!_8||!(f5=dL(al(_8)))||+f5.charAt(0)!=kW)f5='';f5=f5.split(',');var _,d=
f5.length,c,aw;for(_=1;_<d;_++){c=f5[_].split('=');if(!(kS=kQ[c[0]])){aw=c[0
].substr(1,1).toLowerCase()+c[0].substr(2);if(!(kS=kQ[aw]))continue;c[0]=aw}
switch(kS){case'B':c[1]=c.length==1?1:+c[1]?1:0;break;case'I':if(isNaN(c[1]=
parseInt(c[1])))c[1]=0}kP[c[0]]=c[1]}var a8;for(_ in kQ){switch(kQ[_]){case
'B':a8=kU;break;case'I':a8=kV;break}this[_]=kY(_,a8)}this.pref=function(_8,
kO){var aw=kQ[_8];if(!aw)throw new kZ('Unknown preference "'+_8+'"');switch(
aw){case'B':return kU(_8,kO);case'I':return kV(_8,kO)}};this.modified=
function(){return this.modded};this.save=function(dm,_S,dn,dt){if(!kR)
return;var dV,e,f5=kP,c='';for(dV in f5){e=f5[dV];switch(kQ[dV]){case'B':if(
!e)continue;e='';break;case'I':if(!e)continue;e='='+e;break;default:continue
}c+=','+dV+e}if(c)_9(_8,dM(kW+c),dm,_S,dn,dt);else aj(_8,_S,dn);kR=0}}var
gPrefs=_n=new kX(dd);
