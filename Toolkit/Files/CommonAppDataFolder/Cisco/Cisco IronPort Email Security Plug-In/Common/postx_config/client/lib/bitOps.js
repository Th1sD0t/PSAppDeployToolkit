'$Serial: 5028 $ $Revision: #29 $';var c5=(cZ|(c0-1))!=cZ;function c2(_s){_s
=_s%cY;if(_s<c0)return~(_s+c1)-c1;if(_s>cZ)return~(_s-c1)+c1;return~_s}
function c4(d,aI){d=d%cY;aI=aI%cY;if(d<c0)d+=cY;else if(d>cZ)d-=cY;if(aI<c0)
aI+=cY;else if(aI>cZ)aI-=cY;return d&aI}function c7(d,aI){d=d%cY;aI=aI%cY;if
(d<c0)d+=cY;else if(d>cZ)d-=cY;if(aI<c0)aI+=cY;else if(aI>cZ)aI-=cY;return d
|aI}function d_(d,aI){d=d%cY;aI=aI%cY;if(d<c3||d>cZ)d=-(c2(d)+1);if(aI<c3||
aI>cZ)aI=-(c2(aI)+1);return d^aI}function c6(d,aI){d=d%cY;if(d<c0)d+=cY;else
if(d>cZ)d-=cY;return d<<aI}function c9(d,aI){d=d%cY;if(d<c0)d+=cY;else if(d>
cZ)d-=cY;return d>>aI}function c8(d,aI){d=d%cY;if(d<c0)d+=cY;else if(d>cZ)d
-=cY;return d>>>aI}
