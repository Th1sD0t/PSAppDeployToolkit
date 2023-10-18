'$Serial: 0543 $ $Revision: #29 $';var k={'SBox':[99,124,119,123,242,107,
111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,
162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,
49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,
110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,
190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,
81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,
151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,
184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,
231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,
166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,
87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,
40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],'RconRows':
[11,9,8],'GFMultTables':{'9':0,'11':0,'13':0,'14':0}};function AES(j,v,_i){
if(!v)v={};var P='',x=4,l,F,m=[[],[],[],[]],g;function _b(i){if(i>127)
return(i<<1)^283;return i<<1}function _g(S,T){var __=0;while(S){if(S&1)__^=T
;S>>>=1;T=_b(T)}return __}if(v.keysize)j=j.substr(0,v.keysize);var _,b,d=j.
length,o=d;if(o<=16)o=16;else if(o<=24)o=24;else o=32;var G=new Array(o);for
(_=0;_<d;_++)G[_]=j.charCodeAt(_);if(d<o){var I=d,N=0;while(I<o){d=o-I;if(d>
j.length)d=j.length;else N=(j.length-d)>>1;for(_=0,b=d-1;_<d;_++,b--)G[I+_]=
G[N+b]^165;I+=d}}j=G;if(v.IV)P=_h.decodeToArray(v.IV);l=j.length/4;F=l+6;var
p=k.SBox;if(!k.initialized){g=k.InvSBox=new Array(256);for(_=0;_<256;_++)g[p
[_]]=_;for(b in k.GFMultTables){d=+b;g=k.GFMultTables[b]=new Array(256);for(
_=0;_<256;_++)g[_]=_g(_,d)}k.initialized=1}d=k.RconRows[(l-4)/2];var X=new
Array(d*l);for(_=1,b=1;_<d;_++,b=_b(b))X[_*l]=b;d=x*(F+1);g=new Array(d);for
(_=0,b=0;_<l;_++,b+=4)g[_]=[j[b],j[b+1],j[b+2],j[b+3]];var n=new Array(4),h=
g[l-1];for(_=l,b=0;_<d;_++,b++){if(_%l==0){n[0]=p[h[1]]^X[_];n[1]=p[h[2]];n[
2]=p[h[3]];n[3]=p[h[0]];h=n}else if(l>6&&_%l==4){n[0]=p[h[0]];n[1]=p[h[1]];n
[2]=p[h[2]];n[3]=p[h[3]];h=n}h=g[_]=[g[b][0]^h[0],g[b][1]^h[1],g[b][2]^h[2],
g[b][3]^h[3]]}function W(c){var a,f=k.InvSBox;a=c[0];a[0]=f[a[0]];a[1]=f[a[1
]];a[2]=f[a[2]];a[3]=f[a[3]];a=c[1];a[0]=f[a[0]];a[1]=f[a[1]];a[2]=f[a[2]];a
[3]=f[a[3]];a=c[2];a[0]=f[a[0]];a[1]=f[a[1]];a[2]=f[a[2]];a[3]=f[a[3]];a=c[3
];a[0]=f[a[0]];a[1]=f[a[1]];a[2]=f[a[2]];a[3]=f[a[3]]}function V(c){var a,Z,
H,u;a=c[1];u=a[3];a[3]=a[2];a[2]=a[1];a[1]=a[0];a[0]=u;a=c[2];H=a[2];u=a[3];
a[3]=a[1];a[2]=a[0];a[1]=u;a[0]=H;a=c[3];Z=a[1];H=a[2];u=a[3];a[3]=a[0];a[2]
=u;a[1]=H;a[0]=Z}function _c(c){var _,q=c[0],r=c[1],s=c[2],t=c[3],B,C,D,E,J=
k.GFMultTables[9],K=k.GFMultTables[11],L=k.GFMultTables[13],M=k.GFMultTables
[14];for(_=0;_<x;_++){B=q[_];C=r[_];D=s[_];E=t[_];q[_]=M[B]^K[C]^L[D]^J[E];r
[_]=J[B]^M[C]^K[D]^L[E];s[_]=L[B]^J[C]^M[D]^K[E];t[_]=K[B]^L[C]^J[D]^M[E]}}
function O(c,A){var q=c[0],r=c[1],s=c[2],t=c[3],e;A*=x;e=g[A++];q[0]^=e[0];r
[0]^=e[1];s[0]^=e[2];t[0]^=e[3];e=g[A++];q[1]^=e[0];r[1]^=e[1];s[1]^=e[2];t[
1]^=e[3];e=g[A++];q[2]^=e[0];r[2]^=e[1];s[2]^=e[2];t[2]^=e[3];e=g[A];q[3]^=e
[0];r[3]^=e[1];s[3]^=e[2];t[3]^=e[3]}function _a(c,i){var _,b;for(_=0,b=0;b<
4;_+=4,b++){i[_]=c[0][b];i[_+1]=c[1][b];i[_+2]=c[2][b];i[_+3]=c[3][b]}
return i}function _d(i,N,c){var _,b;for(_=N,b=0;b<4;_+=4,b++){c[0][b]=i[_];c
[1][b]=i[_+1];c[2][b]=i[_+2];c[3][b]=i[_+3]}}var Y=[];this.decrypt=function(
_e,_f){var z=P,_,b,d,w,Q=new Array(x*4),U=z!=null,R=new Array(x*4),y=Y;y=y.
concat(_e);d=y.length&~15;w=new Array(d);for(_=0;_<d;_+=16){_d(y,_,m);if(U)
_a(m,Q);O(m,F);for(b=F-1;b>0;b--){V(m);W(m);O(m,b);_c(m)}V(m);W(m);O(m,0);_a
(m,R);if(U){for(b=0;b<16;b++)w[_+b]=R[b]^z[b];b=Q;Q=z;z=b}else for(b=0;b<16;
b++)w[_+b]=R[b]}Y=y.slice(d);P=z;if(_f&&(_-=w[_-1])>=0)w.length=_;return w}}
