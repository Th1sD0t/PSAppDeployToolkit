'$Serial: 4700 $ $Revision: #29 $';function el(m){var _l=m.payload,_,c;c=_l
 .segments;var hx=[c[0]];for(_=1;_<c.length;_++)hx[_]=hx[_-1]+c[_];var hw,j,
hI;if(_l.sessionKey){hw=1;j=_l.sessionKey;hI=hx[0]}else{hw=0;j=m.key;hI=0}
var hX=typeof m.plainKey!=fE;if(_l.flags&i_)gH(_l.userkeyname,_l.expiries.
userKey,hX?m.plainKey:m.key,((_l.flags&hP)?gF:0)|((_l.selectedID)?gz:0)|(hX?
gJ:0),_l.selectedID);var h1=m.key,hO=m.usingApplet?1:0,hY=0,hQ=[],hR=0,hS=''
,hT=0,hU=0,hJ=0,w='',_e='',h0=0,hZ=0,h8=_l.progressratio,hF=h5,h9=_h.
decodeToString(_l.salt);c=_l.data;for(_=0;_<c.length-hO;_++)hZ+=c[_].length;
function hK(hV){hF=hV;if(hV!=d7)_e=w='';hQ=0;hJ=0;return 0}this.completed=
function(){return h8*h0/hZ};this.getDecryptedText=function(){return _e};this
 .getDecodedText=function(){return w};this.status=function(){return hF};this
 .run=function(){var _l=m.payload;if(hF!=h5&&hF!=h4)return 0;var hW=fM?1:0;
hF=h4;var hy=hI,hH=_l.data[hy],hC=hH.length,hz=hQ,hB=hR,hG=hS,hL=hT,gh=hU,aB
=hY,hM=hJ,h7=_h,hA=new Array(3),hN=hw<hx.length-1,gD='',_1=0,h6=new Date().
getTime()+m.duration,au,_,d,hD,hE;do{if(aB==0){if(hw==0&&_l.algnames.
encryption.keys=='RSA'){var _J=m.applet;while(hy<hx[0]){au=_J.decryptRSA(_l.
rid[0],_l.keyname,_l.data[hy],j);if(au)au+='';if(au)break;hy++}if(hy==hx[0])
return hK(eo);j=au;if(_l.flags&h2)gE(_l.msgID,_l.expiries.sessionKey,au,h1,
_l.keysize,((_l.flags&hP)?gF:0)|((_l.flags&h3)?af:0)|((_l.selectedID)?gz:0),
_l.selectedID);hy=hx[hw++]}hN=hw<hx.length-1;hH=_l.data[hy];hC=hH.length;hz[
hB=0]='';hG='';gh=hU=dU(_l.algnames.verification[hw==0?'keys':'data']);hL=gh
 .length();if(hN){if(hw==1)j=dU(_l.algnames.keyHash).digest(j).finalize();hM
=hJ=dS(dU(_l.algnames.keyHash).digest(j+h9).finalize(),hw==0,_l.algnames.
encryption,_l.algparams.encryption)}else hM=hJ=0}hA=h7.decodeToArray(hH.
substr(aB,72),hA);if(hN)hA=hM.decrypt(hA,hC-aB<=72);hD=hA.length;hE=0;if((d=
hL-hG.length)>0){if(d>hD)d=hD;for(_=0;_<d;_++)hG+=String.fromCharCode(hA[_])
;hE=_}if(hE<hD){gh.digest(hA,hE,hD);au='';for(_=hE;_<hD;_++)au+=String.
fromCharCode(hA[_]);if(hz[hB].length>=100)hz[++hB]='';hz[hB]+=au}if(hC-aB>72
){_1+=72+hW;aB+=72+hW}else{_1+=hC-aB;aB=hC}if(aB>=hC){if(hG!=gh.finalize()){
if(hw>0)return hK(fs)}else{hz.length=hB+1;switch(hw){case 0:gD=hz.join('');
if(_l.flags&h2)gE(_l.msgID,_l.expiries.sessionKey,gD,h1,_l.keysize,((_l.
flags&hP)?gF:0)|((_l.flags&h3)?af:0)|((_l.selectedID)?gz:0),_l.selectedID);
break;case 1:_e+=hz.join('');break;case 2:w+=hz.join('');break}}if(++hy==hx[
hw]){if(++hw==hx.length-hO)break;if(hw==1){if(gD=='')return hK(eo);j=gD}}aB=
0}}while(hw==0||new Date().getTime()<h6);hR=hB;hY=aB;hI=hy;hS=hG;hT=hL;h0+=
_1;return hw==hx.length-hO?hK(d7):1}}
