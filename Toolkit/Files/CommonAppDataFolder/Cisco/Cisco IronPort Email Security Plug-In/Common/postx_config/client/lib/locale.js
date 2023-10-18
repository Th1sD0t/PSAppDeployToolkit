'$Serial: 0327 $ $Revision: #29 $';var userText={},gInternalText={},gLocale
=[];function gQ(){return gLocale.join('_')}function gT(gL){gLocale=gP(gL);if
(document.documentElement)document.documentElement.lang=gL}function gP(gL){
if(typeof gL!=dv||gL=='')return[];var c=gL.split('_');if(c.length>3)c.length
=3;return c}function er(_8,gN){var _,cU=[userText,gInternalText],c;for(_=0;_
<cU.length;_++)if(typeof(c=cU[_][_8])==dv)break;if(typeof c!=dv)c=typeof gN
==dv?gN:'';return gO(c,arguments,2)}function gR(gK){return gO(gK,arguments,1
)}function gO(gK,gM,N){var gS=/\x24\[(\d+)\]/,cS,_,cU='';while((cS=gS.exec(
gK))){if(cS.index)cU+=gK.substr(0,cS.index);_=+cS[1]+N;if(typeof gM[_]!=fE)
cU+=gM[_];gK=gK.substr(cS.index+cS[0].length)}return cU+gK}zn=getText=er;
getLocale=gQ;setLocale=gT;interpolateText=gR;
