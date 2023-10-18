'$Serial: 7778 $ $Revision: #29 $';
'This notice must be untouched at all times.';'wz_jsgraphics.js    v. 2.3';
'The latest version is available at';'http://www.walterzorn.com';
'or http://www.devira.com';'or http://www.walterzorn.de';
'Copyright (c) 2002-2004 Walter Zorn. All rights reserved.';
'Created 3. 11. 2002 by Walter Zorn (Web: http://www.walterzorn.com )';
'Last modified: 29. 9. 2004';
'Performance optimizations for Internet Explorer';
'by Thomas Frank and John Holdsworth.';
'fillPolygon method implemented by Matthieu Haller.';
'High Performance JavaScript Graphics Library.';'Provides methods';
'- to draw lines, rectangles, ellipses, polygons';
'  with specifiable line thickness,';'- to fill rectangles and ellipses';
'- to draw text.';
'NOTE: Operations, functions and branching have rather been optimized';
'to efficiency and speed than to shortness of source code.';'LICENSE: LGPL';
'This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License (LGPL) as published by the Free Software Foundation; either version 2.1 of the License, or (at your option) any later version. This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.'
;
'You should have received a copy of the GNU Lesser General Public License along with this library, if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA, or see http://www.gnu.org/copyleft/lesser.html'
;var ng,m0,m6,m5,nh,nv=(document.layers&&typeof document.classes!=
"undefined");function np(S,_){S=document.body||null;m0=S&&typeof S.
insertAdjacentHTML!="undefined";m5=(S&&!m0&&typeof S.appendChild!=
"undefined"&&typeof document.createRange!="undefined"&&typeof(_=document.
createRange()).setStartBefore!="undefined"&&typeof _.
createContextualFragment!="undefined");ng=!m0&&!m5&&S&&typeof S.innerHTML!=
"undefined";m6=m0&&document.all&&!window.opera;nh=m5&&typeof S.style.
MozOpacity!="undefined"}function nO(){this.wnd.document.write(m6?this.htmRpc
():this.htm);this.htm=''}function nL(){var S=document.createRange();S.
setStartBefore(this.cnv);S=S.createContextualFragment(m6?this.htmRpc():this.
htm);this.cnv.appendChild(S);this.htm=''}function nM(){this.cnv.
insertAdjacentHTML('BeforeEnd',m6?this.htmRpc():this.htm);this.htm=''}
function nN(){this.cnv.innerHTML+=this.htm;this.htm=''}function nK(){this.
htm=''}function nz(S,T,g,gh){this.htm+='\x3cdiv style="position:absolute;'+
'left:'+S+'px;'+'top:'+T+'px;'+'width:'+g+'px;'+'height:'+gh+'px;'+
'clip:rect(0,'+g+'px,'+gh+'px,0);'+'background-color:'+this.color+(!nh?
';overflow:hidden':'')+';"'+'\x3e\x3c/div\x3e'}function nA(S,T,g,gh){this.
htm+='%%'+this.color+';'+S+';'+T+';'+g+';'+gh+';'}function nB(S,T,g,gh){this
 .htm+='\x3cdiv style="position:absolute;'+'border-left:'+g+'px solid '+this
 .color+';'+'left:'+S+'px;'+'top:'+T+'px;'+'width:0px;'+'height:'+gh+'px;'+
'clip:rect(0,'+g+'px,'+gh+'px,0);'+'background-color:'+this.color+(!nh?
';overflow:hidden':'')+';"\x3e\x3c/div\x3e'}function nF(S,T,g,gh){this.htm+=
'\x3clayer '+'left="'+S+'" '+'top="'+T+'" '+'width="'+g+'" '+'height="'+gh+
'" '+'bgcolor="'+this.color+'"\x3e\x3c/layer\x3e\n'}var nl=
/%%([^;]+);([^;]+);([^;]+);([^;]+);([^;]+);/g;function ns(){return this.htm.
replace(nl,
'\x3cdiv style="overflow:hidden;position:absolute;background-color:'+
'$1;left:$2;top:$3;width:$4;height:$5"\x3e\x3c/div\x3e\n')}function nr(){
return this.htm.replace(nl,
'\x3cdiv style="overflow:hidden;position:absolute;background-color:'+
'$1;left:$2;top:$3;width:$4;height:$5;border-left:$4px solid $1"\x3e\x3c/div\x3e\n'
)}function nC(mH,mD,mG,mC){if(mH>mG){var m1=mG,m2=mC;mG=mH;mC=mD;mH=m1;mD=m2
}var aN=mG-mH,aO=Math.abs(mC-mD),S=mH,T=mD,mN=(mD>mC)?-1:1;if(aN>=aO){var mF
=aO<<1,mK=mF-(aN<<1),f5=mF-aN,mB=S;while((aN--)>0){++S;if(f5>0){this.mkDiv(
mB,T,S-mB,1);T+=mN;f5+=mK;mB=S}else f5+=mF}this.mkDiv(mB,T,mG-mB+1,1)}else{
var mF=aN<<1,mK=mF-(aO<<1),f5=mF-aO,mA=T;if(mC<=mD){while((aO--)>0){if(f5>0)
{this.mkDiv(S++,T,1,mA-T+1);T+=mN;f5+=mK;mA=T}else{T+=mN;f5+=mF}}this.mkDiv(
mG,mC,1,mA-mC+1)}else{while((aO--)>0){T+=mN;if(f5>0){this.mkDiv(S++,mA,1,T
-mA);f5+=mK;mA=T}else f5+=mF}this.mkDiv(mG,mA,1,mC-mA+1)}}}function nD(mH,mD
,mG,mC){if(mH>mG){var m1=mG,m2=mC;mG=mH;mC=mD;mH=m1;mD=m2}var aN=mG-mH,aO=
Math.abs(mC-mD),S=mH,T=mD,mN=(mD>mC)?-1:1,c=this.stroke;if(aN>=aO){if(c-3>0)
{var mJ=(c*aN*Math.sqrt(1+aO*aO/(aN*aN))-aN-(c>>1)*aO)/aN;mJ=(!(c-4)?Math.
ceil(mJ):Math.round(mJ))+1}else var mJ=c,mS=Math.ceil(c/2),mF=aO<<1,mK=mF-(
aN<<1),f5=mF-aN,mB=S;while((aN--)>0){++S;if(f5>0){this.mkDiv(mB,T,S-mB+mS,mJ
);T+=mN;f5+=mK;mB=S}else f5+=mF}this.mkDiv(mB,T,mG-mB+mS+1,mJ)}else{if(c-3>0
){var mJ=(c*aO*Math.sqrt(1+aN*aN/(aO*aO))-(c>>1)*aN-aO)/aO;mJ=(!(c-4)?Math.
ceil(mJ):Math.round(mJ))+1}else var mJ=c,mS=Math.round(c/2),mF=aN<<1,mK=mF-(
aO<<1),f5=mF-aO,mA=T;if(mC<=mD){++mS;while((aO--)>0){if(f5>0){this.mkDiv(S++
,T,mJ,mA-T+mS);T+=mN;f5+=mK;mA=T}else{T+=mN;f5+=mF}}this.mkDiv(mG,mC,mJ,mA
-mC+mS)}else{while((aO--)>0){T+=mN;if(f5>0){this.mkDiv(S++,mA,mJ,T-mA+mS);f5
+=mK;mA=T}else f5+=mF}this.mkDiv(mG,mA,mJ,mC-mA+mS+1)}}}function nE(mH,mD,mG
,mC){if(mH>mG){var m1=mG,m2=mC;mG=mH;mC=mD;mH=m1;mD=m2}var aN=mG-mH,aO=Math.
abs(mC-mD),S=mH,T=mD,mN=(mD>mC)?-1:1,mM=true;if(aN>=aO){var mF=aO<<1,mK=mF-(
aN<<1),f5=mF-aN;while((aN--)>0){if(mM)this.mkDiv(S,T,1,1);mM=!mM;if(f5>0){T
+=mN;f5+=mK}else f5+=mF;++S}if(mM)this.mkDiv(S,T,1,1)}else{var mF=aN<<1,mK=
mF-(aO<<1),f5=mF-aO;while((aO--)>0){if(mM)this.mkDiv(S,T,1,1);mM=!mM;T+=mN;
if(f5>0){++S;f5+=mK}else f5+=mF}if(mM)this.mkDiv(S,T,1,1)}}function nG(bI,
top,cs,cc){var cS=cs>>1,i=cc>>1,mI=cs&1,mE=(cc&1)+1,j3=bI+cS,j4=top+i,S=0,T=
i,mB=0,mA=i,ba=(cS*cS)<<1,be=(i*i)<<1,hv=(ba>>1)*(1-(i<<1))+be,bi=(be>>1)-ba
*((i<<1)-1),g,gh;while(T>0){if(hv<0){hv+=be*((S<<1)+3);bi+=(be<<1)*(++S)}
else if(bi<0){hv+=be*((S<<1)+3)-(ba<<1)*(T-1);bi+=(be<<1)*(++S)-ba*(((T--)<<
1)-3);g=S-mB;gh=mA-T;if(g&2&&gh&2){this.mkOvQds(j3,j4,-S+2,mB+mI,-mA,mA-1+mE
,1,1);this.mkOvQds(j3,j4,-S+1,S-1+mI,-T-1,T+mE,1,1)}else this.mkOvQds(j3,j4,
-S+1,mB+mI,-mA,mA-gh+mE,g,gh);mB=S;mA=T}else{bi-=ba*((T<<1)-3);hv-=(ba<<1)*(
--T)}}this.mkDiv(j3-cS,j4-mA,cS-mB+1,(mA<<1)+mE);this.mkDiv(j3+mB+mI,j4-mA,
cS-mB+1,(mA<<1)+mE);var dE=cs,S=top,T=bI;this.mkDiv(S+dE/2,T+dE/2,1,1)}
function ny(j3,j4,jS){var mI=(jS*2)&1,mE=((jS*2)&1)+1,S=0,T=jS,mB=0,mA=jS,ba
=(jS*jS)<<1,be=(jS*jS)<<1,hv=(ba>>1)*(1-(jS<<1))+be,bi=(be>>1)-ba*((jS<<1)-1
),g,gh;while(T>0){if(hv<0){hv+=be*((S<<1)+3);bi+=(be<<1)*(++S)}else if(bi<0)
{hv+=be*((S<<1)+3)-(ba<<1)*(T-1);bi+=(be<<1)*(++S)-ba*(((T--)<<1)-3);g=S-mB;
gh=mA-T;if(g&2&&gh&2){this.mkOvQds(j3,j4,-S+2,mB+mI,-mA,mA-1+mE,1,1);this.
mkOvQds(j3,j4,-S+1,S-1+mI,-T-1,T+mE,1,1)}else this.mkOvQds(j3,j4,-S+1,mB+mI,
-mA,mA-gh+mE,g,gh);mB=S;mA=T}else{bi-=ba*((T<<1)-3);hv-=(ba<<1)*(--T)}}this.
mkDiv(j3-jS,j4-mA,jS-mB+1,(mA<<1)+mE);this.mkDiv(j3+mB+mI,j4-mA,jS-mB+1,(mA
<<1)+mE)}function nH(bI,top,cs,cc){var c=this.stroke;cs+=c-1;cc+=c-1;var cS=
cs>>1,i=cc>>1,mI=cs&1,mE=(cc&1)+1,j3=bI+cS,j4=top+i,S=0,T=i,ba=(cS*cS)<<1,be
=(i*i)<<1,hv=(ba>>1)*(1-(i<<1))+be,bi=(be>>1)-ba*((i<<1)-1);if(c-4<0&&(!(c-2
)||cs-51>0&&cc-51>0)){var mB=0,mA=i,g,gh,mL,nW,mR,nV,m8;while(T>0){if(hv<0){
hv+=be*((S<<1)+3);bi+=(be<<1)*(++S)}else if(bi<0){hv+=be*((S<<1)+3)-(ba<<1)*
(T-1);bi+=(be<<1)*(++S)-ba*(((T--)<<1)-3);g=S-mB;gh=mA-T;if(g-1){m8=g+1+(c&1
);gh=c}else if(gh-1){m8=c;gh+=1+(c&1)}else m8=gh=c;this.mkOvQds(j3,j4,-S+1,
mB-m8+g+mI,-mA,-gh+mA+mE,m8,gh);mB=S;mA=T}else{bi-=ba*((T<<1)-3);hv-=(ba<<1)
*(--T)}}this.mkDiv(j3-cS,j4-mA,c,(mA<<1)+mE);this.mkDiv(j3+cS+mI-c+1,j4-mA,c
,(mA<<1)+mE)}else{var nj=(cs-((c-1)<<1))>>1,mW=(cc-((c-1)<<1))>>1,nb=0,mU=mW
,mV=(nj*nj)<<1,mX=(mW*mW)<<1,n_=(mV>>1)*(1-(mW<<1))+mX,na=(mX>>1)-mV*((mW<<1
)-1),mL=new Array(),mR=new Array(),mO=new Array();mL[0]=0;mR[0]=i;mO[0]=mW-1
;while(T>0){if(hv<0){hv+=be*((S<<1)+3);bi+=(be<<1)*(++S);mL[mL.length]=S;mR[
mR.length]=T}else if(bi<0){hv+=be*((S<<1)+3)-(ba<<1)*(T-1);bi+=(be<<1)*(++S)
-ba*(((T--)<<1)-3);mL[mL.length]=S;mR[mR.length]=T}else{bi-=ba*((T<<1)-3);hv
-=(ba<<1)*(--T)}if(mU>0){if(n_<0){n_+=mX*((nb<<1)+3);na+=(mX<<1)*(++nb);mO[
mO.length]=mU-1}else if(na<0){n_+=mX*((nb<<1)+3)-(mV<<1)*(mU-1);na+=(mX<<1)*
(++nb)-mV*(((mU--)<<1)-3);mO[mO.length]=mU-1}else{na-=mV*((mU<<1)-3);n_-=(mV
<<1)*(--mU);mO[mO.length-1]--;}}}var mB=0,mA=i,m9=mO[0],d=mL.length,g,gh;for
(var _=0;_<d;_++){if(typeof mO[_]!="undefined"){if(mO[_]<m9||mR[_]<mA){S=mL[
_];this.mkOvQds(j3,j4,-S+1,mB+mI,-mA,m9+mE,S-mB,mA-m9);mB=S;mA=mR[_];m9=mO[_
]}}else{S=mL[_];this.mkDiv(j3-S+1,j4-mA,1,(mA<<1)+mE);this.mkDiv(j3+mB+mI,j4
-mA,1,(mA<<1)+mE);mB=S;mA=mR[_]}}this.mkDiv(j3-cS,j4-mA,1,(mA<<1)+mE);this.
mkDiv(j3+mB+mI,j4-mA,1,(mA<<1)+mE)}}function nI(bI,top,cs,cc){var cS=cs>>1,i
=cc>>1,mI=cs&1,mE=cc&1,j3=bI+cS,j4=top+i,S=0,T=i,mP=(cS*cS)<<1,m3=mP<<1,be=(
i*i)<<1,hv=(mP>>1)*(1-(i<<1))+be,bi=(be>>1)-mP*((i<<1)-1),mM=true;while(T>0)
{if(hv<0){hv+=be*((S<<1)+3);bi+=(be<<1)*(++S)}else if(bi<0){hv+=be*((S<<1)+3
)-m3*(T-1);bi+=(be<<1)*(++S)-mP*(((T--)<<1)-3)}else{bi-=mP*((T<<1)-3);hv-=m3
*(--T)}if(mM)this.mkOvQds(j3,j4,-S,S+mI,-T,T+mE,1,1);mM=!mM}}function nk(S,T
,g,gh){var c=this.stroke;this.mkDiv(S,T,g,c);this.mkDiv(S+g,T,c,gh);this.
mkDiv(S,T+gh,g+c,c);this.mkDiv(S,T+c,c,gh-c)}function nJ(S,T,g,gh){this.
drawLine(S,T,S+g,T);this.drawLine(S+g,T,S+g,T+gh);this.drawLine(S,T+gh,S+g,T
+gh);this.drawLine(S,T,S,T+gh)}function nw(){this.PLAIN=
'font-weight:normal;';this.BOLD='font-weight:bold;';this.ITALIC=
'font-style:italic;';this.ITALIC_BOLD=this.ITALIC+this.BOLD;this.BOLD_ITALIC
=this.ITALIC_BOLD}var ni=new nw();function nx(){this.DOTTED=-1}var nU=new nx
();function jsGraphics(aL,nT){this.setColor=new Function('arg',
'this.color = arg.toLowerCase();');this.setStroke=function(S){this.stroke=S;
if(!(S+1)){this.drawLine=nE;this.mkOv=nI;this.drawRect=nJ}else if(S-1>0){
this.drawLine=nD;this.mkOv=nH;this.drawRect=nk}else{this.drawLine=nC;this.
makeCircle=ny;this.mkOv=nG;this.drawRect=nk}};this.setPrintable=function(i1)
{this.printable=i1;if(m6){this.mkDiv=nA;this.htmRpc=i1?nr:ns}else this.mkDiv
=nv?nF:i1?nB:nz};this.setFont=function(nq,nR,nQ){this.ftFam=nq;this.ftSz=nR;
this.ftSty=nQ||ni.PLAIN};this.drawPolyline=this.drawPolyLine=function(S,T,c)
{for(var _=0;_<S.length-1;_++)this.drawLine(S[_],T[_],S[_+1],T[_+1])};this.
fillRect=function(S,T,g,gh){this.mkDiv(S,T,g,gh)};this.drawPolygon=function(
S,T){this.drawPolyline(S,T);this.drawLine(S[S.length-1],T[S.length-1],S[0],T
[0])};this.drawEllipse=this.drawOval=function(S,T,g,gh){this.mkOv(S,T,g,gh)}
;this.drawCircle=function(j3,j4,nP){this.makeCircle(j3,j4,nP)};this.
fillEllipse=this.fillOval=function(bI,top,g,gh){var cS=(g-=1)>>1,i=(gh-=1)>>
1,mI=(g&1)+1,mE=(gh&1)+1,j3=bI+cS,j4=top+i,S=0,T=i,mB=0,mA=i,mP=(cS*cS)<<1,
m3=mP<<1,be=(i*i)<<1,hv=(mP>>1)*(1-(i<<1))+be,bi=(be>>1)-mP*((i<<1)-1),mL,nf
,nc;if(g+1)while(T>0){if(hv<0){hv+=be*((S<<1)+3);bi+=(be<<1)*(++S)}else if(
bi<0){hv+=be*((S<<1)+3)-m3*(T-1);mL=j3-S;nf=(S<<1)+mI;bi+=(be<<1)*(++S)-mP*(
((T--)<<1)-3);nc=mA-T;this.mkDiv(mL,j4-mA,nf,nc);this.mkDiv(mL,j4+mA-nc+mE,
nf,nc);mB=S;mA=T}else{bi-=mP*((T<<1)-3);hv-=m3*(--T)}}this.mkDiv(j3-cS,j4-mA
,g+1,(mA<<1)+mE)};this.fillPolygon=function(m4,mQ,d2){var _,T,ne,m7,mH,mD,mG
,mC,mY,mZ,nd,dV=m4.length;if(!dV)return;ne=mQ[0];m7=mQ[0];for(_=1;_<dV;_++){
if(mQ[_]<ne)ne=mQ[_];if(mQ[_]>m7)m7=mQ[_]}for(T=ne;T<=m7;T++){var mT=new
Array();nd=0;for(_=0;_<dV;_++){if(!_){mY=dV-1;mZ=0}else{mY=_-1;mZ=_}mD=mQ[mY
];mC=mQ[mZ];if(mD<mC){mH=m4[mY];mG=m4[mZ]}else if(mD>mC){mC=mQ[mY];mD=mQ[mZ]
;mG=m4[mY];mH=m4[mZ]}else continue;if((T>=mD)&&(T<mC))mT[nd++]=Math.round((T
-mD)*(mG-mH)/(mC-mD)+mH);else if((T==m7)&&(T>mD)&&(T<=mC))mT[nd++]=Math.
round((T-mD)*(mG-mH)/(mC-mD)+mH)}mT.sort(nu);if(d2!=null)this.htm+=
'\x3cspan title="'+d2+'"\x3e';for(_=0;_<nd;_+=2){g=mT[_+1]-mT[_];this.mkDiv(
mT[_],T,mT[_+1]-mT[_]+1,1)}if(d2!=null)this.htm+='\x3c/span\x3e'}};this.
drawString=function(nS,S,T){this.htm+=
'\x3cdiv style="position:absolute;white-space:nowrap;'+'left:'+S+'px;'+
'top:'+T+'px;'+'font-family:'+this.ftFam+';'+'font-size:'+this.ftSz+';'+
'color:'+this.color+';'+this.ftSty+'"\x3e'+nS+'\x3c/div\x3e'};this.drawImage
=function(nt,S,T,g,gh){this.htm+='\x3cdiv style="position:absolute;'+'left:'
+S+'px;'+'top:'+T+'px;'+'width:'+g+';'+'height:'+gh+';"\x3e'+'\x3cimg src="'
+nt+'" width="'+g+'" height="'+gh+'"\x3e'+'\x3c/div\x3e'};this.clear=
function(){this.htm="";if(this.cnv)this.cnv.innerHTML=this.defhtm};this.
mkOvQds=function(j3,j4,nm,a6,no,nn,g,gh){this.mkDiv(a6+j3,no+j4,g,gh);this.
mkDiv(a6+j3,nn+j4,g,gh);this.mkDiv(nm+j3,nn+j4,g,gh);this.mkDiv(nm+j3,no+j4,
g,gh)};this.setStroke(1);this.setFont('verdana,geneva,helvetica,sans-serif',
String.fromCharCode(49,50,112,120),ni.PLAIN);this.color='#000000';this.htm=
'';this.wnd=nT||window;if(!(m0||m5||ng))np();if(typeof aL!='string'||!aL)
this.paint=nO;else{this.cnv=document.all?(this.wnd.document.all[aL]||null):
document.getElementById?(this.wnd.document.getElementById(aL)||null):null;
this.defhtm=(this.cnv&&this.cnv.innerHTML)?this.cnv.innerHTML:'';this.paint=
m5?nL:m0?nM:ng?nN:nK}this.setPrintable(false)}function nu(S,T){return(S<T)?
-1:((S>T)*1)}
