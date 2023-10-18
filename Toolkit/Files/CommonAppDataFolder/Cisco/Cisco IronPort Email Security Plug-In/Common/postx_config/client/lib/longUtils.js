'$Serial: 3157 $ $Revision: #29 $';function dG(g0){var gZ=g0>>>16,g2=g0&
65535;return String.fromCharCode(gZ>>>8)+String.fromCharCode(gZ&255)+String.
fromCharCode(g2>>>8)+String.fromCharCode(g2&255)}function g6(g1){var _,cT=g1
 .length,R='';for(_=0;_<cT;_++)R+=dG(g1[_]);return R}function g3(){var gV=16
,g5=(1<<gV),g4=g5-1;this.$words=new Array(64/gV);var cS=arguments,_,d=this.
$words.length;for(_=0;_<d;_++)this.$words[_]=0;switch(cS.length){case 1:var
gU=cS[0];if(typeof gU==aG&&gU.$words&&gU.$words.length==d){for(_=0;_<d;_++)
this.$words[_]=gU.$words[_]}else this.$words[d-1]=Math.floor(gU);break;case
2:this.$words[1]=arguments[0];this.$words[3]=arguments[1];break;case 4:for(_
=0;_<d;_++)this.$words[_]=Math.floor(cS[_]);break}if(cS.length)gW(this.
$words);function gW(cS){var gY=0,_,d=cS.length;for(_=d-1;_>=0;_--){cS[_]+=gY
;if((gY=cS[_]>>>gV))cS[_]&=g4}}this.add=function(dV){this.$words[this.$words
 .length-1]+=dV;gW(this.$words);return this};this.mask=function(dV){for(var
_=this.$words.length-1;_>=0;_--){this.$words[_]&=dV;dV>>=gV}return this};
this.multiply=function(dV){var _,d=this.$words.length;for(_=0;_<d;_++)this.
$words[_]*=dV;gW(this.$words);return this};this.subToInt=function(dV){var _,
d=this.$words.length,aw=0;if(typeof dV!=aG||!dV.$words||dV.$words.length!=d)
dV=new g3(dV);for(_=0;_<d;_++)aw=(aw<<16)+this.$words[_]-dV.$words[_];
return aw};this.getByte=function(dV){var d=this.$words.length,gX=dV>>>1;if(
gX>=d)return-1;if(dV&1)return this.$words[d-gX-1]>>>8;return this.$words[d
-gX-1]&255}}
