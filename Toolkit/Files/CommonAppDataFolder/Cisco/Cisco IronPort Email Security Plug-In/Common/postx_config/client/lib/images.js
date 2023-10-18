'$Serial: 4248 $ $Revision: #29 $';var gf=1,gg=2;function gj(f1,gb,gc,f3,f6
){if(!f1.flags)f1.flags=0;if(f1.flags&gf){f1.data=go(f1.data);f1.flags&=~gf}
var f9=f1.palette,cs=f1.width,cc=f1.height,_,f5,c,gn=typeof f1.transparent==
fE?-1:f1.transparent;f6=f6?1:0;if(!f3||f3<1)f3=1+f6;else f3=Math.floor(f3)+
f6;if(!(f1.flags&gg)){var gk=[0,'',''],n=[0,0,0],b,d=f9.length;for(_=0;_<d;
_++){f5=f9[_];if(typeof f5!=aG){n[0]=f5;n[1]=n[2]=''}else{for(b=0;b<f5.
length;b++)n[b]=gk[b]=f5[b];for(;b<3;b++)n[b]=gk[b]}if(n[1])n[1]=
' onMouseOver="'+n[1]+'"';if(n[2])n[2]=' onMouseOut="'+n[2]+'"';if(_==gn)n[0
]='';f9[_]=[n[0],n[1]+n[2]]}f1.flags|=gg}var gd=f1.data.split(' '),gi=gd.
length,f2=new Array(gi),g_=0;f2[g_++]=
'\x3cspan style="display:block;position:relative;width:'+(cs*f3-f6)+
'px;height:'+(cc*f3-f6)+'px;font-size:0;line-height:0"\x3e\n';var _m=new
Array(cc);for(_=0;_<cc;_++)_m[_]=new Array(cs);var f7=0,a=0,f8,f4,cS,g,gh,S,
T;for(_=0;_<gi;_++){if(gd[_]=='-'){_m[a++]=0;f7=0;continue}cS=_m[a];while(cS
[f7])f7++;f8=gd[_].split(':');if(f8.length==1){f5=f9[+f8];f4=[1,1]}else{f5=
f9[+f8[1]];f4=f8[0].split('x');f4[0]=f4[0]==''?cs-f7:+f4[0];f4[1]=f4[1]==''?
cc-a:+f4[1]}if(f5[0]||f5[1]){c='\x3cspan style="position:absolute;top:'+a*f3
+'px;left:'+f7*f3+'px;height:'+(f4[1]*f3-f6)+'px';if(f5[0])c+=
';border-left:'+(f4[0]*f3-f6)+'px solid #'+f5[0];f2[g_++]=c+'"'+f5[1]+
'\x3e\x3c/span\x3e\n'}if(f4[1]>1){g=f7+f4[0];gh=a+f4[1];for(T=a+1;T<gh;T++){
cS=_m[T];for(S=f7;S<g;S++)cS[S]=1}}f7+=f4[0]}f2[g_++]='\x3c/span\x3e';f2.
length=g_;return f2.join('')}function gm(ge,gl,ga,f1,gb,gc,f3,f6){if(typeof
f1!=aG){f6=f3;f3=gc;gc=gb;gb=f1;f1=ga;ga={}}ge=_Y(ge);var f2=['\x3ca',
'href="'+ge+'"'];if(_E){f2[f2.length]=
'onmouseover="this.style.cursor=\'hand\'"';f2[f2.length]=
'onmouseout="this.style.cursor=\'default\'"'}if(gl)f2[f2.length]=
'target=_blank';var _;for(_ in ga)f2[f2.length]=_+'="'+_Y(ga[_])+'"';
return f2.join(' ')+'\x3e'+gj(f1,gb,gc,f3,f6)+'\x3c/a\x3e'}zz=
linkInlineImage=gm;zy=makeInlineImage=gj;
