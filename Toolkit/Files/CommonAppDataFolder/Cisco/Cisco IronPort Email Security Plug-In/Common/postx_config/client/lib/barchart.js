'$Serial: 7788 $ $Revision: #29 $';'JavaScript Diagram Builder 3.0'
'Copyright (c) 2001-2004 Lutz Tautenhahn, all rights reserved.'
'The Author grants you a non-exclusive, royalty free, license to use,'
'modify and redistribute this software, provided that this copyright notice'
'and license appear on all copies of the software.'
'This software is provided "as is", without a warranty of any kind.';var bN=
0,cB=0,bM=0,cC=0,cD=0,bO=0,cz=0,cA=0,bl=0,bc=(navigator.appName==
'Microsoft Internet Explorer')?1:-1;if(navigator.userAgent.search('Opera')>=
0)bc=-1;var bL=0;if(bc==1){bL=1;if(window.document.documentElement.
clientHeight)bc=-1}var cF=(document.layers)?1:0,cE='';function Diagram(){
this.Target=window;this.SetWindow=bG;this.xtext='';this.Font=
'font-family:arial, helvetica, verdana, san-serif;font-weight:normal;font-size:9pt;line-height:9pt;'
;this.ytext='';this.title='';this.XScale=1;this.YScale=1;this.ID='Dia'+bN;
bN++;bl++;this.zIndex=bl;this.SetFont=bP;this.SetFrame=c_;this.SetBorder=b8;
this.SetText=cb;this.SetGridColor=ca;this.ScreenX=b4;this.ScreenY=b5;this.
RealX=b1;this.RealY=b2;this.XGrid=new Array(3);this.GetXGrid=bW;this.YGrid=
new Array(3);this.GetYGrid=bX;this.XGridDelta=0;this.YGridDelta=0;this.
XSubGrids=0;this.YSubGrids=0;this.SubGrids=0;this.GridColor='';this.
SubGridColor='';this.Draw=bT;this.SetVisibility=bF;this.SetTitle=bE;this.
Delete=bD;return(this)}function bP(cg){this.Font=cg}function bG(cr){this.
Target=cr}function c_(aY,aZ,bv,bs){this.left=aY;this.right=bv;this.top=aZ;
this.bottom=bs}function b8(ch,ck,cf,cq){this.xmin=ch;this.xmax=ck;this.ymin=
cf;this.ymax=cq}function cb(cl,cm,bK){this.xtext=cl;this.ytext=cm;this.title
=bK}function ca(bt,bw){this.GridColor=bt;this.SubGridColor=bw}function b4(ci
){return(Math.round((ci-this.xmin)/(this.xmax-this.xmin)*(this.right-this.
left)+this.left))}function b5(cj){return(Math.round((this.ymax-cj)/(this.
ymax-this.ymin)*(this.bottom-this.top)+this.top))}function b1(cn){return(
this.xmin+(this.xmax-this.xmin)*(cn-this.left)/(this.right-this.left))}
function b2(co){return(this.ymax-(this.ymax-this.ymin)*(co-this.top)/(this.
bottom-this.top))}function a2(bb){if(bb<0)return(-1);else return(1)}function
bW(){var aS,_,b,d,S,aI,aN,a6,bf,aQ;aN=(this.xmax-this.xmin);if(Math.abs(aN)>
0){bf=(this.right-this.left)/(this.xmax-this.xmin);if((this.XScale==1)||(
isNaN(this.XScale))){aI=1;while(Math.abs(aN)>=100){aN/=10;aI*=10}while(Math.
abs(aN)<10){aN*=10;aI/=10}if(Math.abs(aN)>=50){this.SubGrids=5;aQ=10*aI*a2(
aN)}else{if(Math.abs(aN)>=20){this.SubGrids=5;aQ=5*aI*a2(aN)}else{this.
SubGrids=4;aQ=2*aI*a2(aN)}}}else aQ=this.DateInterval(Math.abs(aN))*a2(aN);
if(this.XGridDelta!=0)aQ=this.XGridDelta;if(this.XSubGrids!=0)this.SubGrids=
this.XSubGrids;S=Math.floor(this.xmin/aQ)*aQ;_=0;this.XGrid[1]=aQ;for(b=54;b
>=-1;b--){a6=S+b*aQ;aS=Math.round(this.left+(-this.xmin+a6)*bf);if((aS>=this
 .left)&&(aS<=this.right)){if(_==0)this.XGrid[2]=a6;this.XGrid[0]=a6;_++}}}
return(this.XGrid)}function bX(){var aT,_,b,d,T,aI,aO,a7,bg,aR;aO=this.ymax
-this.ymin;if(Math.abs(aO)>0){bg=(this.bottom-this.top)/(this.ymax-this.ymin
);if((this.YScale==1)||(isNaN(this.YScale))){aI=1;while(Math.abs(aO)>=100){
aO/=10;aI*=10}while(Math.abs(aO)<10){aO*=10;aI/=10}if(Math.abs(aO)>=50){this
 .SubGrids=5;aR=10*aI*a2(aO)}else{if(Math.abs(aO)>=20){this.SubGrids=5;aR=5*
aI*a2(aO)}else{this.SubGrids=4;aR=2*aI*a2(aO)}}}else aR=this.DateInterval(
Math.abs(aO))*a2(aO);if(this.YGridDelta!=0)aR=this.YGridDelta;if(this.
YSubGrids!=0)this.SubGrids=this.YSubGrids;T=Math.floor(this.ymax/aR)*aR;this
 .YGrid[1]=aR;_=0;for(b=-1;b<=54;b++){a7=T-b*aR;aT=Math.round(this.top+(this
 .ymax-a7)*bg);if((aT>=this.top)&&(aT<=this.bottom)){if(_==0)this.YGrid[2]=
a7;this.YGrid[0]=a7;_++}}}return(this.YGrid)}function aP(bR,bb){if(bR==null)
return(bb);var br=String(bR);while(br.search('\'')>=0)br=br.replace('\'',
'&#39;');return(br)}function a4(ba){if(ba){if(bc==1)return('cursor:hand;');
else return('cursor:pointer;')}return('')}function cy(ba){var aK,bm=ba[0];
for(aK=1;aK<ba.length;aK++){if(bm>ba[aK])bm=ba[aK]}return(bm)}function cx(ba
){var aK,bm=ba[0];for(aK=1;aK<ba.length;aK++){if(bm<ba[aK])bm=ba[aK]}return(
bm)}function bT(bJ,b_,bq,bn,bh,bt,bw){var aS,aT,_,b,a9,d,S,T,aI,bk,a8,aN,aO,
a6,a7,bf,bg,aQ,aR,aL=this.ID,bp=0,aH='',aJ='',aK=0,cH,aE,a3,cG='&#151;',a0=(
bL)?'&nbsp;':'';if(aP(bt,'')!='')this.GridColor=bt;if(aP(bw,'')!='')this.
SubGridColor=bw;bp--;if(this.Target.document.all)aH=eval(
'this.Target.document.all.'+aL);else aH=this.Target.document.getElementById(
aL);if(aH)bp--;if(bp<-1)aH.title=aP(bn,'');else aJ='\x3cdiv id=\''+this.ID+
'\' title=\''+aP(bn,'')+'\'\x3e';aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' onClick=\''+aP(bh,'')+'\' style=\''+a4(bh)+'position:absolute; left:'+
eval(this.left)+'px; width:'+eval(this.right-this.left+bc)+'px; top:'+eval(
this.top)+'px; height:'+eval(this.bottom-this.top+bc)+
'px; background-color:'+bJ+'; color:'+b_+
'; border-style:solid; border-width:1px; z-index:'+this.zIndex+
'\'\x3e&nbsp;\x3c/div\x3e';if((this.XScale==1)||(isNaN(this.XScale))){bk='';
a8='';if(isNaN(this.XScale)){if(this.XScale.substr(0,9)=='function ')a8=eval
('window.'+this.XScale.substr(9));else bk=this.XScale}aN=(this.xmax-this.
xmin);if(Math.abs(aN)>0){bf=(this.right-this.left)/(this.xmax-this.xmin);aI=
1;while(Math.abs(aN)>=100){aN/=10;aI*=10}while(Math.abs(aN)<10){aN*=10;aI/=
10}if(Math.abs(aN)>=50){this.SubGrids=5;aQ=10*aI*a2(aN)}else{if(Math.abs(aN)
>=20){this.SubGrids=5;aQ=5*aI*a2(aN)}else{this.SubGrids=4;aQ=2*aI*a2(aN)}}if
(this.XGridDelta!=0)aQ=this.XGridDelta;if(this.XSubGrids!=0)this.SubGrids=
this.XSubGrids;a3=aQ*bf/this.SubGrids;S=Math.floor(this.xmin/aQ)*aQ;a9=0;for
(b=54;b>=-1;b--){a6=S+b*aQ;aS=Math.round(this.left+(-this.xmin+a6)*bf);if(
this.SubGridColor){for(aE=1;aE<this.SubGrids;aE++){if((aS-aE*a3>this.left+1)
&&(aS-aE*a3<this.right-1))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' style=\'position:absolute; left:'+Math.round(aS-aE*a3)+'px; top:'+eval(
this.top+1)+'px; z-index:'+this.zIndex+'; width:1px; height:'+eval(this.
bottom-this.top-1)+'px; background-color:'+this.SubGridColor+
'; font-size:1pt\'\x3e\x3c/div\x3e'}}if((aS>=this.left)&&(aS<=this.right)){
a9++;if((a9!=2)||(!bq)){if(aI>1){if(a8)d=a8(a6)+'';else{d=a6+''+bk}}else{if(
a8)d=a8(Math.round(10*a6/aI)/Math.round(10/aI))+'';else d=Math.round(10*a6/
aI)/Math.round(10/aI)+''+bk}if(d.charAt(0)=='.')d='0'+d;if(d.substr(0,2)==
'-.')d='-0'+d.substr(1,100)}else d=this.xtext;aJ+='\x3cdiv id=\''+this.ID+
'i'+eval(aK++)+'\' align=center style=\'position:absolute; left:'+eval(aS-50
)+'px; width:102px; top:'+eval(this.bottom+4)+'px; color:'+b_+';'+this.Font+
' z-index:'+this.zIndex+'\'\x3e'+d+'\x3c/div\x3e';aJ+='\x3cdiv id=\''+this.
ID+'i'+eval(aK++)+'\' style=\'position:absolute; left:'+aS+'px; top:'+eval(
this.bottom-5)+'px; z-index:'+this.zIndex+
'; width:0px; height:12px; background-color:'+b_+
'; font-size:1pt\'\x3e\x3c/div\x3e';if((this.GridColor)&&(aS>this.left)&&(aS
<this.right))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' style=\'position:absolute; left:'+aS+'px; top:'+eval(this.top+1)+
'px; z-index:'+this.zIndex+'; width:1px; height:'+eval(this.bottom-this.top
-1)+'px; background-color:'+this.GridColor+
'; font-size:1pt\'\x3e\x3c/div\x3e'}}}}if((!isNaN(this.XScale))&&(this.
XScale>1)){aN=(this.xmax-this.xmin);if(Math.abs(aN)>0){bf=(this.right-this.
left)/(this.xmax-this.xmin);aQ=this.DateInterval(Math.abs(aN))*a2(aN);if(
this.XGridDelta!=0)aQ=this.XGridDelta;if(this.XSubGrids!=0)this.SubGrids=
this.XSubGrids;a3=aQ*bf/this.SubGrids;S=Math.floor(this.xmin/aQ)*aQ;a9=0;for
(b=54;b>=-2;b--){a6=S+b*aQ;aS=Math.round(this.left+(-this.xmin+S+b*aQ)*bf);
if(this.SubGridColor){for(aE=1;aE<this.SubGrids;aE++){if((aS-aE*a3>this.left
+1)&&(aS-aE*a3<this.right-1))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' style=\'position:absolute; left:'+Math.round(aS-aE*a3)+'px; top:'+eval(
this.top+1)+'px; z-index:'+this.zIndex+'; width:1px; height:'+eval(this.
bottom-this.top-1)+'px; background-color:'+this.SubGridColor+
'; font-size:1pt\'\x3e\x3c/div\x3e'}}if((aS>=this.left)&&(aS<=this.right)){
a9++;if((a9!=2)||(!bq))d=bS(a6,Math.abs(aQ),this.XScale);else d=this.xtext;
aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' align=center style=\'position:absolute; left:'+eval(aS-50)+
'px; width:102px; top:'+eval(this.bottom+8)+'px; color:'+b_+';'+this.Font+
' z-index:'+this.zIndex+'\'\x3e'+d+'\x3c/div\x3e';aJ+='\x3cdiv id=\''+this.
ID+'i'+eval(aK++)+'\' style=\'position:absolute; left:'+aS+'px; top:'+eval(
this.bottom-5)+'px; z-index:'+this.zIndex+
'; width:1px; height:12px; background-color:'+b_+
'; font-size:1pt\'\x3e\x3c/div\x3e';if((this.GridColor)&&(aS>this.left)&&(aS
<this.right))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' style=\'position:absolute; left:'+aS+'px; top:'+eval(this.top+1)+
'px; z-index:'+this.zIndex+'; width:1px; height:'+eval(this.bottom-this.top
-1)+'px; background-color:'+this.GridColor+
'; font-size:1pt\'\x3e\x3c/div\x3e'}}}}if((this.YScale==1)||(isNaN(this.
YScale))){bk='';a8='';if(isNaN(this.YScale)){if(this.YScale.substr(0,9)==
'function ')a8=eval('window.'+this.YScale.substr(9));else bk=this.YScale}aO=
this.ymax-this.ymin;if(Math.abs(aO)>0){bg=(this.bottom-this.top)/(this.ymax
-this.ymin);aI=1;while(Math.abs(aO)>=100){aO/=10;aI*=10}while(Math.abs(aO)<
10){aO*=10;aI/=10}if(Math.abs(aO)>=50){this.SubGrids=5;aR=10*aI*a2(aO)}else{
if(Math.abs(aO)>=20){this.SubGrids=5;aR=5*aI*a2(aO)}else{this.SubGrids=4;aR=
2*aI*a2(aO)}}if(this.YGridDelta!=0)aR=this.YGridDelta;if(this.YSubGrids!=0)
this.SubGrids=this.YSubGrids;a3=aR*bg/this.SubGrids;T=Math.floor(this.ymax/
aR)*aR;a9=0;for(b=-1;b<=54;b++){a7=T-b*aR;aT=Math.round(this.top+(this.ymax
-a7)*bg);if(this.SubGridColor){for(aE=1;aE<this.SubGrids;aE++){if((aT+aE*a3>
this.top+1)&&(aT+aE*a3<this.bottom-1))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(
aK++)+'\' style=\'position:absolute; left:'+eval(this.left+1)+'px; top:'+
Math.round(aT+aE*a3)+'px; z-index:'+this.zIndex+'; height:1px; width:'+eval(
this.right-this.left-1)+'px; background-color:'+this.SubGridColor+
'; font-size:1pt;line-height:1pt\'\x3e'+a0+'\x3c/div\x3e'}}if((aT>=this.top)
&&(aT<=this.bottom)){a9++;if((a9!=2)||(!bq)){if(aI>1){if(a8)d=a8(a7)+'';else
d=bk+''+a7}else{if(a8)d=a8(Math.round(10*a7/aI)/Math.round(10/aI))+'';else d
=bk+''+Math.round(10*a7/aI)/Math.round(10/aI)}if(d.charAt(0)=='.')d='0'+d;if
(d.substr(0,2)=='-.')d='-0'+d.substr(1,100)}else d=this.ytext;aJ+=
'\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' align=right style=\'position:absolute; left:'+eval(this.left-100)+
'px; width:89px; top:'+eval(aT-9)+'px; color:'+b_+';'+this.Font+' z-index:'+
this.zIndex+'\'\x3e'+d+'\x3c/div\x3e';aJ+='\x3cdiv id=\''+this.ID+'i'+eval(
aK++)+'\' style=\'position:absolute; left:'+eval(this.left-5)+'px; top:'+
eval(aT)+'px; z-index:'+this.zIndex+
'; height:0px; width:0px; background-color:'+b_+
'; font-size:1pt;line-height:0pt\'\x3e'+a0+'\x3c/div\x3e';if((this.GridColor
)&&(aT>this.top)&&(aT<this.bottom))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++
)+'\' style=\'position:absolute; left:'+eval(this.left+1)+'px; top:'+eval(aT
)+'px; z-index:'+this.zIndex+'; height:1px; width:'+eval(this.right-this.
left-1)+'px; background-color:'+this.GridColor+
'; font-size:1pt;line-height:0pt\'\x3e'+a0+'\x3c/div\x3e'}}}}if((!isNaN(this
 .YScale))&&(this.YScale>1)){aO=this.ymax-this.ymin;if(Math.abs(aO)>0){bg=(
this.bottom-this.top)/(this.ymax-this.ymin);aR=this.DateInterval(Math.abs(aO
))*a2(aO);if(this.YGridDelta!=0)aR=this.YGridDelta;if(this.YSubGrids!=0)this
 .SubGrids=this.YSubGrids;a3=aR*bg/this.SubGrids;T=Math.floor(this.ymax/aR)*
aR;a9=0;for(b=-2;b<=54;b++){a7=T-b*aR;aT=Math.round(this.top+(this.ymax-T+b*
aR)*bg);if(this.SubGridColor){for(aE=1;aE<this.SubGrids;aE++){if((aT+aE*a3>
this.top+1)&&(aT+aE*a3<this.bottom-1))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(
aK++)+'\' style=\'position:absolute; left:'+eval(this.left+1)+'px; top:'+
Math.round(aT+aE*a3)+'px; z-index:'+this.zIndex+'; height:1px; width:'+eval(
this.right-this.left-1)+'px; background-color:'+this.SubGridColor+
'; font-size:1pt;line-height:1pt\'\x3e'+a0+'\x3c/div\x3e'}}if((aT>=this.top)
&&(aT<=this.bottom)){a9++;if((a9!=2)||(!bq))d=bS(a7,Math.abs(aR),this.YScale
);else d=this.ytext;aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++)+
'\' align=right style=\'position:absolute; left:'+eval(this.left-100)+
'px; width:89px; top:'+eval(aT-9)+'px; color:'+b_+';'+this.Font+' z-index:'+
this.zIndex+'\'\x3e'+d+'\x3c/div\x3e';aJ+='\x3cdiv id=\''+this.ID+'i'+eval(
aK++)+'\' style=\'position:absolute; left:'+eval(this.left-5)+'px; top:'+
eval(aT)+'px; z-index:'+this.zIndex+
'; height:1px; width:0px; background-color:'+b_+
'; font-size:1pt;line-height:1pt\'\x3e'+a0+'\x3c/div\x3e';if((this.GridColor
)&&(aT>this.top)&&(aT<this.bottom))aJ+='\x3cdiv id=\''+this.ID+'i'+eval(aK++
)+'\' style=\'position:absolute; left:'+eval(this.left+1)+'px; top:'+eval(aT
)+'px; z-index:'+this.zIndex+'; height:1px; width:'+eval(this.right-this.
left-1)+'px; background-color:'+this.GridColor+
'; font-size:1pt;line-height:1pt\'\x3e'+a0+'\x3c/div\x3e'}}}}aJ+=
'\x3cdiv id=\''+this.ID+'i'+eval(aK++)+'\' align=center onClick=\''+aP(bh,''
)+'\' style=\''+a4(bh)+'position:absolute; left:'+this.left+'px; width:'+
eval(this.right-this.left)+'px; top:'+eval(this.top-20)+'px; color:'+b_+';'+
this.Font+' z-index:'+this.zIndex+'\'\x3e'+this.title+'\x3c/div\x3e';if(bp<
-1)aH.innerHTML=aJ;else aJ+='\x3c/div\x3e';this.Target.document.writeln(aJ)}
function Box(aY,aZ,bv,bs,bJ,bx,b_,ce,cd,bn,bh){this.SetFont=bP;this.
SetWindow=bG;this.Target=window;this.Draw=bU;this.Right=bv;this.Bottom=bs;
this.TooltipText=bn;this.ID='Box'+bM;bM++;bl++;this.Font=
'font-family:arial, helvetica, verdana, san-serif;font-weight:normal;font-size:9pt;line-height:9pt;'
;this.Left=aY;this.Top=aZ;this.Width=bv-aY;this.Height=bs-aZ;this.DrawColor=
bJ;this.Text=String(bx);this.TextColor=b_;this.BorderWidth=ce;this.
BorderColor=cd;this.Action=bh;this.SetVisibility=bF;this.SetColor=b6;this.
SetText=b7;this.SetTitle=bE;this.MoveTo=b0;this.ResizeTo=b3;this.Delete=bD;
return(this)}function bU(){var be='',aM=this.BorderWidth;if(aP(this.
BorderWidth,'')=='')aM=0;if((aP(this.BorderWidth,'')!='')&&(aP(this.
BorderColor,'')!=''))be='border-style:solid;border-width:'+this.BorderWidth+
'px;border-color:'+this.BorderColor+';';var aJ='';aM=0;if(aP(this.Text,'')!=
''){aJ+='\x3cdiv id=\''+this.ID+'\' onClick=\''+aP(this.Action,'')+
'\' style=\'border-left-width: '+eval(this.Right-this.Left+aM*bc)+
'px; border-left-color:'+this.DrawColor+'; border-left-style:solid; '+a4(
this.Action)+' position:absolute;left:'+this.Left+'px;top:'+this.Top+
'px;width:0px;height:'+(eval(this.Bottom-this.Top+aM*bc))+
'px;background-color:'+this.DrawColor+';color:'+this.TextColor+';'+this.Font
+';z-index:'+bl+'\'; title=\''+aP(this.TooltipText,'')+'\' align=center\x3e'
+this.Text+'\x3c/div\x3e'}else{aJ+='\x3cdiv id=\''+this.ID+'\' onClick=\''+
aP(this.Action,'')+'\' style=\'border-left-width: '+eval(this.Right-this.
Left+aM*bc)+'px; border-left-color:'+this.DrawColor+
'; border-left-style:solid; '+a4(this.Action)+' position:absolute;left:'+
this.Left+'px;top:'+this.Top+'px;width:0px;height:'+(eval(this.Bottom-this.
Top+aM*bc))+'px;background-color:'+this.DrawColor+';font-size:1px;z-index:'+
bl+'\'; title=\''+aP(this.TooltipText,'')+'\'\x3e&nbsp;\x3c/div\x3e'}this.
Target.document.writeln(aJ)}function b6(a5){var aL=this.ID,aH;this.DrawColor
=a5;if(this.Target.document.all)aH=eval('this.Target.document.all.'+aL);else
aH=this.Target.document.getElementById(aL);aH.style.backgroundColor=a5}
function b7(bx){var aL=this.ID,aH;this.Text=String(bx);if(this.Target.
document.all)aH=eval('this.Target.document.all.'+aL);else aH=this.Target.
document.getElementById(aL);aH.innerHTML=bx}function bF(bH){var bd,aL=this.
ID,aH;if(this.Target.document.all){aH=eval('this.Target.document.all.'+aL);
if(bH)aH.style.visibility='visible';else aH.style.visibility='hidden'}else{
aH=this.Target.document.getElementById(aL);if(bH)aH.style.visibility=
'visible';else aH.style.visibility='hidden';if(aL.substr(0,3)=='Dia'){var aK
=0;aH=this.Target.document.getElementById(aL+'i'+eval(aK++));while(aH!=null)
{if(bH)aH.style.visibility='visible';else aH.style.visibility='hidden';aH=
this.Target.document.getElementById(aL+'i'+eval(aK++))}}}}function bE(bK){
var aL=this.ID,aH;if(this.Target.document.all)aH=eval(
'this.Target.document.all.'+aL);else aH=this.Target.document.getElementById(
aL);aH.title=bK}function b0(aY,aZ){var aL=this.ID,aH;if(aY!='')this.left=aY;
if(aZ!='')this.top=aZ;if(this.Target.document.all)aH=eval(
'this.Target.document.all.'+aL);else aH=this.Target.document.getElementById(
aL);with(aH.style){if(aY!='')bI=aY+'px';if(aZ!='')top=aZ+'px';bQ='visible'}}
function b3(aY,aZ,by,bu){var aL=this.ID,aH;if(aY!='')this.left=aY;if(aZ!='')
this.top=aZ;if(by!='')this.width=by;if(bu!='')this.height=bu;if(this.Target.
document.all)aH=eval('this.Target.document.all.'+aL);else aH=this.Target.
document.getElementById(aL);with(aH.style){if(aY!='')bI=aY+'px';if(aZ!='')
top=aZ+'px';if(by!='')cs=by+'px';if(bu!='')cc=bu+'px';bQ='visible'}}function
bD(){var aL=this.ID,aH;if(this.Target.document.all){aH=eval(
'this.Target.document.all.'+aL);aH.outerHTML=''}else{aH=this.Target.document
 .getElementById(aL);aH.parentNode.removeChild(aH)}}function b9(a5){this.
Color=a5;if((a5!='')&&(a5.length<this.Color.length))this.Color='#'+a5;else
this.Color=a5;this.ResizeTo('','','','')}function Line(bz,bB,bA,bC,a5,cp,bn,
bh){this.ID='Line'+bO;bO++;bl++;this.Target=window;this.X0=bz;this.Y0=bB;
this.X1=bA;this.Y1=bC;this.Color=a5;if((a5!='')&&(a5.length==6))this.Color=
'#'+a5;this.Size=Number(aP(cp,1));this.Action=bh;this.SetVisibility=bF;this.
SetColor=b9;this.SetWindow=bG;this.SetTitle=bE;this.MoveTo=bY;this.ResizeTo=
bZ;this.Delete=bD;this.Draw=bV;this.ToolTopText=bn;this.Action=bh;return(
this)}function bV(){var ct,cv,cu,cw,bd,bb,bi,be,aM,aX,aV,aW,aU,a1,bj=Math.
floor(this.Size/2),a0='',bo=(((this.Y1>this.Y0)&&(this.X1>this.X0))||((this.
Y1<this.Y0)&&(this.X1<this.X0)))?true:false;if(this.X0<=this.X1){bd=this.X0;
bb=this.X1}else{bd=this.X1;bb=this.X0}if(this.Y0<=this.Y1){bi=this.Y0;be=
this.Y1}else{bi=this.Y1;be=this.Y0}aM=bb-bd;aX=be-bi;this.Target.document.
write('\x3cdiv id=\''+this.ID+'\' style=\'position:absolute;left:'+eval(bd
-bj)+'px;top:'+eval(bi-bj)+'px; width:'+eval(aM+this.Size)+'px; height:'+
eval(aX+this.Size)+'px; z-index:'+bl+';\' title=\''+aP(this.TooltipText,'')+
'\'\x3e');if((aM==0)||(aX==0))this.Target.document.write(
'\x3cdiv onClick=\''+aP(this.Action,'')+'\' style=\''+a4(this.Action)+
'border-left-width:'+eval(aM+this.Size)+
';border-left-style:solid;border-left-color:'+this.Color+
'position:absolute;left:0px;top:0px;width:0px;height:'+eval(aX+this.Size)+
'px;background-color:'+this.Color+';font-size:1pt;line-height:1pt;\'\x3e'+a0
+'\x3c/div\x3e');else{if(aM>aX){aW=0;aU=0;while(aW<aM){aV=aW;while((Math.
round(aW*aX/aM)==aU)&&(aW<=aM))aW++;if(bo)this.Target.document.write(
'\x3cdiv onClick=\''+aP(this.Action,'')+'\' style=\''+a4(this.Action)+
'border-left-style:solid;border-left-color:'+this.Color+
';border-left-width:'+eval(aW-aV+this.Size)+';position:absolute;left:'+aV+
'px;top:'+aU+'px;width:0px;height:'+this.Size+'px;background-color:'+this.
Color+';font-size:1pt;line-height:1pt;\'\x3e'+a0+'\x3c/div\x3e');else this.
Target.document.write('\x3cdiv onClick=\''+aP(this.Action,'')+'\' style=\''+
a4(this.Action)+'border-left-style:solid;border-left-color:'+this.Color+
';border-left-width:'+eval(aW-aV+this.Size)+';position:absolute;left:'+eval(
aM-aW)+'px;top:'+aU+'px;width:0px;height:'+this.Size+'px;background-color:'+
this.Color+';font-size:1pt;line-height:1pt;\'\x3e'+a0+'\x3c/div\x3e');aU++}}
else{a1=0;aV=0;while(a1<aX){aU=a1;while((Math.round(a1*aM/aX)==aV)&&(a1<aX))
a1++;if(bo)this.Target.document.write('\x3cdiv onClick=\''+aP(this.Action,''
)+'\' style=\''+a4(this.Action)+'border-left-style:solid;border-left-color:'
+this.Color+';border-left-width:'+this.Size+';position:absolute;left:'+aV+
'px;top:'+aU+'px;width:0px;height:'+eval(a1-aU+this.Size)+
'px;background-color:'+this.Color+';font-size:1pt;line-height:1pt;\'\x3e'+a0
+'\x3c/div\x3e');else this.Target.document.write('\x3cdiv onClick=\''+aP(
this.Action,'')+'\' style=\''+a4(this.Action)+
'border-left-style:solid;border-left-color:'+this.Color+
';border-left-width:'+this.Size+';position:absolute;left:'+eval(aM-aV)+
'px;top:'+aU+'px;width:0px;height:'+eval(a1-aU+this.Size)+
'px;background-color:'+this.Color+';font-size:1pt;line-height:1pt;\'\x3e'+a0
+'\x3c/div\x3e');aV++}}}this.Target.document.writeln('\x3c/div\x3e')}
function bZ(bz,bB,bA,bC){var ct,cv,cu,cw,bd,bb,bi,be,aM,aX,aV,aW,aU,a1,aL=
this.ID,bp=0,aH='',aJ='',bj=Math.floor(this.Size/2),a0='';if(bz!='')this.X0=
bz;if(bB!='')this.Y0=bB;if(bA!='')this.X1=bA;if(bC!='')this.Y1=bC;var bo=(((
this.Y1>this.Y0)&&(this.X1>this.X0))||((this.Y1<this.Y0)&&(this.X1<this.X0))
)?true:false;if(this.X0<=this.X1){bd=this.X0;bb=this.X1}else{bd=this.X1;bb=
this.X0}if(this.Y0<=this.Y1){bi=this.Y0;be=this.Y1}else{bi=this.Y1;be=this.
Y0}aM=bb-bd;aX=be-bi;if(document.all)aH=eval('this.Target.document.all.'+aL)
;else aH=this.Target.document.getElementById(aL);with(aH.style){bI=eval(bd
-bj)+'px';top=eval(bi-bj)+'px';cs=eval(aM+this.Size)+'px';cc=eval(aX+this.
Size)+'px'}if((aM==0)||(aX==0))aJ+='\x3cdiv onClick=\''+aP(this.Action,'')+
'\' style=\''+a4(this.Action)+'position:absolute;left:0px;top:0px;width:'+
eval(aM+this.Size)+'px;height:'+eval(aX+this.Size)+'px;background-color:'+
this.Color+';font-size:1pt;line-height:1pt;\'\x3e'+a0+'\x3c/div\x3e';else{if
(aM>aX){aW=0;aU=0;while(aW<aM){aV=aW;while((Math.round(aW*aX/aM)==aU)&&(aW<=
aM))aW++;if(bo)aJ+='\x3cdiv onClick=\''+aP(this.Action,'')+'\' style=\''+a4(
this.Action)+'position:absolute;left:'+aV+'px;top:'+aU+'px;width:'+eval(aW
-aV+this.Size)+'px;height:'+this.Size+'px;background-color:'+this.Color+
';font-size:1pt;line-height:1pt;\'\x3e'+a0+'\x3c/div\x3e';else aJ+=
'\x3cdiv onClick=\''+aP(this.Action,'')+'\' style=\''+a4(this.Action)+
'position:absolute;left:'+eval(aM-aW)+'px;top:'+aU+'px;width:'+eval(aW-aV+
this.Size)+'px;height:'+this.Size+'px;background-color:'+this.Color+
';font-size:1pt;line-height:1pt;\'\x3e'+a0+'\x3c/div\x3e';aU++}}else{a1=0;aV
=0;while(a1<aX){aU=a1;while((Math.round(a1*aM/aX)==aV)&&(a1<aX))a1++;if(bo)
aJ+='\x3cdiv onClick=\''+aP(this.Action,'')+'\' style=\''+a4(this.Action)+
'position:absolute;left:'+aV+'px;top:'+aU+'px;width:'+this.Size+'px;height:'
+eval(a1-aU+this.Size)+'px;background-color:'+this.Color+
';font-size:1pt;line-height:1pt;\'\x3e'+a0+'\x3c/div\x3e';else aJ+=
'\x3cdiv onClick=\''+aP(this.Action,'')+'\' style=\''+a4(this.Action)+
'position:absolute;left:'+eval(aM-aV)+'px;top:'+aU+'px;width:'+this.Size+
'px;height:'+eval(a1-aU+this.Size)+'px;background-color:'+this.Color+
';font-size:1pt;line-height:1pt;\'\x3e'+a0+'\x3c/div\x3e';aV++}}}aH.
innerHTML=aJ}function bY(aY,aZ){var aL=this.ID,aH,bj=Math.floor(this.Size/2)
;if(aY!='')this.left=aY;if(aZ!='')this.top=aZ;if(document.all)aH=eval(
'this.Target.document.all.'+aL);else aH=this.Target.document.getElementById(
aL);with(aH.style){if(aY!='')bI=eval(aY-bj)+'px';if(aZ!='')top=eval(aZ-bj)+
'px';bQ='visible'}}
