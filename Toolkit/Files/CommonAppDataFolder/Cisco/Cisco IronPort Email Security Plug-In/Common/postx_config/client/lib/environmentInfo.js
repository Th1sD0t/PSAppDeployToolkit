'$Serial: 5189 $ $Revision: #29 $';var at=navigator.userAgent.toLowerCase()
,_E=at.indexOf('msie')!=-1,ah=!_E,fH=parseInt(navigator.appVersion),fM=ah&&
fH<5,fN=at.indexOf('netscape6/')!=-1,fJ=at.indexOf(' gecko/')+1,fK=at.
indexOf('msie 5.0')!=-1,fL=at.indexOf('msie 7')!=-1,fO=at.indexOf('opera')!=
-1,fI=at.indexOf(' chrome/')!=-1,fF=0,_W=0,fG=0;if(navigator.platform.substr
(0,3)=='Mac'){if(ah)fF=at.indexOf('mac os x')==-1;else{fF=at.indexOf('msie')
;fF=parseFloat(at.substr(fF+5))<5.2}_W=!fF;if((fG=at.indexOf(' applewebkit/'
)+1))fH=parseInt(at.substr(fG+12))/100}var _V=fF||_W,fP=false,fQ=!fG,fR=fG,
_Z=fF||!navigator.javaEnabled();aq=true;OSMacOS9=fF;OSMacOSX=_W;
browserAppleWebKit=fG;
