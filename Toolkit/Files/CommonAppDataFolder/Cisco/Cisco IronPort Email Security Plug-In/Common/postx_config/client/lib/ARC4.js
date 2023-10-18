'$Serial: 4074 $ $Revision: #29 $';function ARC4(j,v,aC){var aE=new Array(
256),aw,c=new Array(256),_,b;if(typeof v!=aG)v={'keysize':v,'prerun':aC?256:
0};var aA=v.keysize;if(!aA||aA>j.length)aA=j.length;for(_=0;_<256;_++){c[_]=
_;aE[_]=j.charCodeAt(_%aA)}for(_=b=0;_<256;_++){b=(b+c[_]+aE[_])&255;aw=c[_]
;c[_]=c[b];c[b]=aw}_=b=0;var au=v.prerun;while(au-- >0){_=(_+1)&255;b=(b+c[_
])&255;aw=c[_];c[_]=c[b];c[b]=aw}this.crypt=function(av){var ay=c,ax=_,az=b,
au,d=av.length,aB,aF,aD=typeof av==aG;if(!aD){var aw=new Array(d);for(au=0;
au<d;au++)aw[au]=av.charCodeAt(au);av=aw}for(au=0;au<d;au++){ax=(ax+1)&255;
az=(az+ay[ax])&255;aB=ay[ax];aF=ay[ax]=ay[az];ay[az]=aB;av[au]^=ay[(aB+aF)&
255]}_=ax;b=az;if(!aD){for(au=0;au<d;au++)av[au]=String.fromCharCode(av[au])
;av=av.join('')}return av};if(aC)this.decrypt=this.crypt;else this.encrypt=
this.crypt}
