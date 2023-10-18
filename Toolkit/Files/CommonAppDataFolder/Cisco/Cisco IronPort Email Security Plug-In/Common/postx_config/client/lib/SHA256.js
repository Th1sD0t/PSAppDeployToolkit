'$Serial: 3418 $ $Revision: #29 $';function dR(cU,dy,dx,hq){var lY=64,mj=32,
mk=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,961987163,0x59f111f1,
0x923f82a4,0xab1c5ed5,0xd807aa98,310598401,607225278,0x550c7dc3,0x72be5d74,
0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,264347078,604807628,
770255983,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,
0xbf597fc7,0xc6e00bf3,0xd5a79147,113926993,338241895,666307205,773529912,
0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1
,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,275423344
,430227734,506948616,659060556,883997877,958139571,0x4ed8aa4a,0x5b9cca4f,
0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb
,0xbef9a3f7,0xc67178f2],hf=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,
0x510e527f,0x9b05688c,528734635,0x5be0cd19],l8=new Array(64),lZ=new Array(lY
+2),l3=0,l6=new g3();if(c5){function m_(dV,S){return c7(c8(S,dV),c6(S,(32-dV
)))}function mc(S,T,lX){return d_(c4(S,T),c4(c2(S),lX))}function md(S,T,lX){
return d_(d_(c4(S,T),c4(S,lX)),c4(T,lX))}function me(S){return d_(d_(m_(2,S)
,m_(13,S)),m_(22,S))}function mf(S){return d_(d_(m_(6,S),m_(11,S)),m_(25,S))
}function mh(S){return d_(d_(m_(7,S),m_(18,S)),c8(S,3))}function mi(S){
return d_(d_(m_(17,S),m_(19,S)),c8(S,10))}}else{function m_(dV,S){return(S
>>>dV)|(S<<(32-dV))}function mc(S,T,lX){return(S&T)^(~S&lX)}function md(S,T,
lX){return(S&T)^(S&lX)^(T&lX)}function me(S){return m_(2,S)^m_(13,S)^m_(22,S
)}function mf(S){return m_(6,S)^m_(11,S)^m_(25,S)}function mh(S){return m_(7
,S)^m_(18,S)^(S>>>3)}function mi(S){return m_(17,S)^m_(19,S)^(S>>>10)}}
function hp(lZ){var aw,mb,mg,l9=hf,ml=mk,lW=l8,_,d=l8.length;for(aw=_=0;aw<
16;aw++,_+=4)lW[aw]=lZ[_]<<24|lZ[_+1]<<16|lZ[_+2]<<8|lZ[_+3];for(;aw<d;aw++)
lW[aw]=mi(lW[aw-2])+lW[aw-7]+mh(lW[aw-15])+lW[aw-16];var cS=l9[0],i=l9[1],au
=l9[2],dE=l9[3],dq=l9[4],eI=l9[5],ma=l9[6],gh=l9[7];for(aw=0;aw<d;aw++){mb=
gh+mf(dq)+mc(dq,eI,ma)+ml[aw]+lW[aw];mg=me(cS)+md(cS,i,au);gh=ma;ma=eI;eI=dq
;dq=dE+mb;dE=au;au=i;i=cS;cS=mb+mg}if(c5){hf[0]=c4(l9[0]+cS,da);hf[1]=c4(l9[
1]+i,da);hf[2]=c4(l9[2]+au,da);hf[3]=c4(l9[3]+dE,da);hf[4]=c4(l9[4]+dq,da);
hf[5]=c4(l9[5]+eI,da);hf[6]=c4(l9[6]+ma,da);hf[7]=c4(l9[7]+gh,da)}else{hf[0]
=(l9[0]+cS)&da;hf[1]=(l9[1]+i)&da;hf[2]=(l9[2]+au)&da;hf[3]=(l9[3]+dE)&da;hf
[4]=(l9[4]+dq)&da;hf[5]=(l9[5]+eI)&da;hf[6]=(l9[6]+ma)&da;hf[7]=(l9[7]+gh)&
da}l6.add(lY)}this.digest=function(cU,dy,dx,hq){var dF=typeof cU==dv,au,hj,
hm=cU.length,lV=lZ,lU=l3;if(!dy)dy=0;else if(dy<0)dy+=hm;if(!dx)dx=hm;else
if(dx<0)dx+=hm;for(hj=dy;hj<dx;hj++){au=dF?cU.charCodeAt(hj):cU[hj];if(!hq||
au<128){lV[lU++]=au&255}else if(au<2048){lV[lU++]=192|au>>>6;lV[lU++]=128|au
&63}else{lV[lU++]=224|au>>>12;lV[lU++]=128|(au>>>6)&63;lV[lU++]=128|au&63}if
(lU>=lY){hp(lV,0);switch(lU-lY){case 2:lV[1]=lV[lY+1];case 1:lV[0]=lV[lY];
default:lU-=lY}}}l3=lU;return this};this.finalize=function(){var lV=lZ,lU=l3
,l2,l4,l0;l0=new g3(l6).add(lU);l4=new g3(l0).add(9);l4.add(lY-1).mask(~(lY
-1));l2=l4.subToInt(l0);l0.multiply(8);var l7=1;while(--l2>=0){if(l7){lV[
lU++]=128;l7=0}else if(l2>7)lV[lU++]=0;else lV[lU++]=l0.getByte(l2);if(lU==
lY){hp(lV,0);lU=0}}return g6(hf)};this.length=function(){return mj};if(
arguments.length)this.digest(cU,dy,dx,hq)}
