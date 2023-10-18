'$Serial: 7777 $ $Revision: #29 $';var j0=false;function j1(S,T){this.x=S;
this.y=T;this.copy=function(f5){this.x=f5.x;this.y=f5.y};this.toString=
function(){return"("+this.x+","+this.y+")"}}function kf(j3,j4,jS,eT){this.cx
=j3;this.cy=j4;this.radius=jS;this.borderColor=(eT==null?'#000000':eT);this.
toString=function(){return"("+this.cx+","+this.cy+"):"+this.radius};this.
draw=function(){var jM=new jsGraphics();jM.setPrintable(true);jM.setColor(
this.borderColor);jM.setStroke(1);jM.drawCircle(this.cx,this.cy,this.radius)
;jM.paint()}}function ke(j5){this.elements=j5;this.drawPie=function(jO,gM){
var jT=(gM==null?0:gM.startAngle),jP=this.elements,jV=jT;for(var c in jP){jP
[c].fill(jO,jV);jV+=jZ(jP[c].percentage)}};this.drawBar=function(kx){}}
function PieChart(jO,j5,gM){this.circle=jO;this.pieces=j5;this.args=gM;var
jT=(gM==null?0:gM.startAngle),j3=this.circle.cx,j4=this.circle.cy,kh="kt",kg
="ks";this.draw=function(){this.render(kg)};this.fill=function(){this.render
(kh)};this.render=function(ky){var jP=this.pieces,jV=jT;for(var c in jP){jP[
c].fill(this.circle,jV);jV+=jZ(jP[c].percentage)}};this.getArcPoint=function
(aI,j2){return j6(new j1(j3,j4),aI,jU(j2))}}function jZ(kp){var j8=360*kp/
100;return j8}function jU(kl){var km=Math.PI/180;return kl*km}function kv(j7
){return jU(jZ(j7))}function j6(jN,jS,j9){var aS=(Math.cos(j9)*jS)+jN.x,aT=(
Math.sin(j9)*jS)+jN.y;return new j1(aS,aT)}function jR(d2){if(j0)document.
write(d2+"<kr/>")}function kq(d2){if(j0)document.write(d2)}function ki(){for
(var _=0;_<arguments.length;_++){this[this.length]=arguments[_]}return this.
length}function Slice(j7,k_,fk){this.percentage=j7;this.color=k_;this.label=
fk;if(typeof Array.prototype.push=="undefined"){Array.prototype.push=ki}this
 .toString=function(){return this.percentage+"%k_:"+this.color+"fk:"+this.
label};this.fill=function(jO,jT){var aI=jO.radius,jN=new j1(jO.cx,jO.cy),jW=
[],jX=[],ko=2,ka=jU(ko);jR("ku="+ka+"kw");var j8=jZ(this.percentage),kn=j8+
jT,kb=jU(jT),jY=jU(kn),jQ=null;jR("dy j2="+kb+"|dx j2="+jY);jR("jS="+aI+
"jN="+jN);jW.push(jN.x);jX.push(jN.y);for(var _=kb;_<jY;_+=ka){jQ=j6(jN,aI,_
);kq(jQ+"");jW.push(jQ.x);jX.push(jQ.y)}jQ=j6(jN,aI,jY);jW.push(jQ.x);jX.
push(jQ.y);jR("");jR(jY+"->"+jQ);jR("kj ha="+jW.length);jR("kj hi="+jX.
length);var jM=new jsGraphics();jM.setPrintable(true);jM.setColor(this.color
);jM.fillPolygon(jW,jX,this.label+"-"+this.percentage+"%");jM.paint()}}
function drawPieChart(jP,jS,gM){j0=false;var kc=0,kd=0;if(gM){if(gM.xOff!=
null)kc=gM.xOff;if(gM.yOff!=null)kd=gM.yOff}document.write(
'\x3cspan style="position:relative;left:0px;top:0px;"\x3e');var jO=new kf(kc
,kd,jS),kk=new ke(jP);kk.drawPie(jO,null);document.write('\x3c/span\x3e')}
