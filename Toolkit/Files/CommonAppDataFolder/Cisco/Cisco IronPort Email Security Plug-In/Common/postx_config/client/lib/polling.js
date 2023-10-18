'$Serial: 0304 $ $Revision: #29 $';var kD=1,kG=2;POLLING_EXPONENTIAL=kD;
POLLING_LINEAR=kG;function kI(kL){this.active=1;this.base=1;this.interval=1;
this.totalDelay=0;this.min=1;this.max=1;this.total=5000;this.wait=5000;this.
timer;this.initialize=function(kA,kF,kC,kz){var dV,dE;this.min=kA;this.max=
kF;this.total=kC;this.wait=kz;this.interval=kA;dV=kC-(kz+kA);dE=kC-(kz+kF);
if(dE!=0)this.base=dV/dE;if(this.base<1)this.base=1;this.totalDelay=kz};this
 .reset=function(){this.initialize(this.min,this.max,this.total,this.wait)};
this.activate=function(kH){if(!(this.active=kH))this.cancel(1)};this.cancel=
function(kJ){if(this.timer){clearTimeout(this.timer);this.timer=0}this.
interval=-2;if(kJ){var _l=payload;jr(_l.rpc,_l.msgID,kK,0,'',{'nr':1})}};
this.getNextInterval=function(kE){if(this.interval<0)return this.interval;
var kB=this.interval;this.totalDelay=this.totalDelay+kB+this.wait;if(this.
totalDelay>=this.total)this.interval=-1;else{this.interval=this.interval*
this.base;if(this.interval>this.max)this.interval=this.max}if(kE&&this.
active)this.timer=setTimeout(kE,kB);return kB}}var kM=new kI(kD);
