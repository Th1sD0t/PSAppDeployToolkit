'$Serial: 1561 $ $Revision: #29 $';function SHA1(cU,dy,dx,hq){var lY=64,hf=
[0x67452301,0xefcdab89,0x98badcfe,271733878,0xc3d2e1f0],l8=new Array(80),lZ=
new Array(lY+2),l3=0,l6=new g3(),l1=(c5?function(dV,S){return c7(c6(S,dV),c8
(S,32-dV))}:function(dV,S){return(S<<dV)|(S>>>(32-dV))}),eI=(c5?function(aw,
S,T,lX){if(aw<20)return 0x5a827999+d_(c4(S,T),c4(c2(S),lX));if(aw<40)
return 0x6ed9eba1+d_(d_(S,T),lX);if(aw<60)return 0x8f1bbcdc+d_(d_(c4(S,T),c4
(S,lX)),c4(T,lX));return 0xca62c1d6+d_(d_(S,T),lX)}:function(aw,S,T,lX){if(
aw<20)return 0x5a827999+((S&T)^(~S&lX));if(aw<40)return 0x6ed9eba1+(S^T^lX);
if(aw<60)return 0x8f1bbcdc+((S&T)^(S&lX)^(T&lX));return 0xca62c1d6+(S^T^lX)}
);function hp(lZ){var aw,l5,lW=l8,_,d=lW.length;for(aw=_=0;aw<16;aw++,_+=4)
lW[aw]=lZ[_]<<24|lZ[_+1]<<16|lZ[_+2]<<8|lZ[_+3];if(c5)for(;aw<d;aw++)lW[aw]=
l1(1,d_(d_(d_(lW[aw-3],lW[aw-8]),lW[aw-14]),lW[aw-16]));else for(;aw<d;aw++)
lW[aw]=l1(1,lW[aw-3]^lW[aw-8]^lW[aw-14]^lW[aw-16]);var cS=hf[0],i=hf[1],au=
hf[2],dE=hf[3],dq=hf[4];for(aw=0;aw<d;aw++){l5=l1(5,cS)+eI(aw,i,au,dE)+dq+lW
[aw];dq=dE;dE=au;au=l1(30,i);i=cS;cS=l5}if(c5){hf[0]=c4(hf[0]+cS,da);hf[1]=
c4(hf[1]+i,da);hf[2]=c4(hf[2]+au,da);hf[3]=c4(hf[3]+dE,da);hf[4]=c4(hf[4]+dq
,da)}else{hf[0]=(hf[0]+cS)&da;hf[1]=(hf[1]+i)&da;hf[2]=(hf[2]+au)&da;hf[3]=(
hf[3]+dE)&da;hf[4]=(hf[4]+dq)&da}}this.digest=function(cU,dy,dx,hq){var dF=
typeof cU==dv,au,hj,hm=cU.length,lV=lZ,lU=l3;if(!dy)dy=0;else if(dy<0)dy+=hm
;if(!dx)dx=hm;else if(dx<0)dx+=hm;for(hj=dy;hj<dx;hj++){au=dF?cU.charCodeAt(
hj):cU[hj];if(!hq||au<128){lV[lU++]=au&255}else if(au<2048){lV[lU++]=192|au
>>>6;lV[lU++]=128|au&63}else{lV[lU++]=224|au>>>12;lV[lU++]=128|(au>>>6)&63;
lV[lU++]=128|au&63}if(lU>=lY){hp(lV,0);l6.add(lY);switch(lU-lY){case 2:lV[1]
=lV[lY+1];case 1:lV[0]=lV[lY];default:lU-=lY}}}l3=lU;return this};this.
finalize=function(){var lV=lZ,lU=l3,l2,l4,l0;l0=new g3(l6).add(lU);l4=new g3
(l0).add(9);l4.add(63).mask(~63);l2=l4.subToInt(l0);l0.multiply(8);var l7=1;
while(--l2>=0){if(l7){lV[lU++]=128;l7=0}else if(l2>7)lV[lU++]=0;else lV[lU++
]=l0.getByte(l2);if(lU==lY){hp(lV,0);lU=0}}return g6(hf)};this.length=
function(){return 20};if(arguments.length)this.digest(cU,dy,dx,hq)}zt=SHA1;
