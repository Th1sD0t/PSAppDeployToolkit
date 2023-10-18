'$Serial: 2712 $ $Revision: #29 $';function cX(){this.alphabet=
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';this.
encodeArray=0;this.decodeArray=0;this.getEncodeArray=function(){if(!this.
encodeArray){var c=this.alphabet,cT=c.length,cU=new Array(cT),_;for(_=0;_<cT
;_++)cU[_]=c.charCodeAt(_);this.encodeArray=cU}return this.encodeArray};this
 .encodeToArray=function(cV,cS){var cT=cV.length,cU=this.getEncodeArray(),_,
b,cW,i;_=Math.ceil(cT/3)*4;b=Math.ceil(cT/3*4);cW=_-b;if(!cS)cS=new Array(_)
;_=b=0;while(_<cT){i=cV.charCodeAt(_++)<<16;if(_<cT)i|=cV.charCodeAt(_++)<<8
;if(_<cT)i|=cV.charCodeAt(_++);cS[b++]=cU[(i>>>18)&63];cS[b++]=cU[(i>>>12)&
63];cS[b++]=cU[(i>>>6)&63];cS[b++]=cU[i&63]}cS.length=b;while(cW--)cS[--b]=
61;return cS};this.encodeToString=function(cV){var cS=this.encodeToArray(cV)
,cT=cS.length;for(var _=0;_<cT;_++)cS[_]=String.fromCharCode(cS[_]);
return cS.join('')};this.getDecodeArray=function(){if(!this.decodeArray){var
c=this.alphabet,cT=c.length,cU=new Array(256),_;for(_=0;_<cT;_++)cU[c.
charCodeAt(_)]=_;cU[61]=0;this.decodeArray=cU}return this.decodeArray};this.
decodeToArray=function(cV,cS){var cT=cV.length,cU=this.getDecodeArray(),_=0,
b=0,cW=0,i;while(cT>0&&cV.charAt(cT-1)=='='){cT--;cW++}if(!cS)cS=new Array(
Math.ceil(cT/4*3));while(_<cT){i=cU[cV.charCodeAt(_++)]<<18;i|=cU[cV.
charCodeAt(_++)]<<12;i|=cU[cV.charCodeAt(_++)]<<6;i|=cU[cV.charCodeAt(_++)];
cS[b++]=(i>>>16)&255;cS[b++]=(i>>>8)&255;cS[b++]=i&255}cS.length=b-cW;
return cS};this.decodeToString=function(cV){var cS=this.decodeToArray(cV),cT
=cS.length;for(var _=0;_<cT;_++)cS[_]=String.fromCharCode(cS[_]);return cS.
join('')}}_h=new cX();
