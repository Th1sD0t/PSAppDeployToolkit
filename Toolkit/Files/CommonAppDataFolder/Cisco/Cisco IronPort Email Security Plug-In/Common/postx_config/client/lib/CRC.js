'$Serial: 1583 $ $Revision: #29 $';function dJ(cU,dy,dx){var dD=new Array(
256),dz,dA,dB,dw=da;if(c5)for(dA=0;dA<256;dA++){dz=dA;for(dB=0;dB<8;dB++)dz=
(dz&1)?d_(c8(dz,1),0xedb88320):c8(dz,1);dD[dA]=dz}else for(dA=0;dA<256;dA++)
{dz=dA;for(dB=0;dB<8;dB++)dz=(dz&1)?(dz>>>1)^0xedb88320:dz>>>1;dD[dA]=dz}var
dK=(c5?function(dw,cU,dy,dx){var au,_,dF=typeof cU==dv;for(_=dy;_<dx;_++){au
=dF?cU.charCodeAt(_):cU[_];dw=dD[d_(dw,au)&255]^c8(dw,8)}return dw}:function
(dw,cU,dy,dx){var au,_,dF=typeof cU==dv;for(_=dy;_<dx;_++){au=dF?cU.
charCodeAt(_):cU[_];dw=dD[(dw^au)&255]^(dw>>>8)}return dw});function dH(dw,
cU,dy,dx){var d=cU.length;if(!dy)dy=0;else if(dy<0)dy+=d;if(!dx)dx=d;else if
(dx<0)dx+=d;return dK(dw,cU,dy,dx)}this.CRCString=(c5?function(dC){return dG
(d_(dH(da,dC),da))}:function(dC){return dG(dH(da,dC)^da)});this.digest=
function(dC,dy,dx){dw=dH(dw,dC,dy,dx);return this};this.finalize=(c5?
function(){var dE=d_(dw,da);dw=da;return dG(dE)}:function(){var dE=dw^da;dw=
da;return dG(dE)});this.length=function(){return 4};if(arguments.length)this
 .digest(cU,dy,dx)}var dI=new dJ();function dL(cN){if(cN&&cN.length>4){var c
=cN.substr(4);if(dI.CRCString(c)==cN.substr(0,4))return c}return 0}function
dM(cN){return dI.CRCString(cN)+cN}
