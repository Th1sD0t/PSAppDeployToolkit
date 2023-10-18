'$Serial: 1643 $ $Revision: #29 $';function dS(j,dO,dN,v){return dQ(j,dO,dN
,v,true)}function dT(j,dO,dN,v){return dQ(j,dO,dN,v,false)}function dQ(j,dO,
dN,v,aC){dO=dO?'keys':'data';dN=dN[dO];v=v[dO];if(window[dN])return new
window[dN](j,v,aC);alert('No such algorithm `'+dN+'\'')}function dU(dP){if(
dP=='CRC-32')return new dJ();if(dP=='SHA1'||dP=='SHA-1')return new SHA1();if
(dP=='SHA-256')return new dR();alert('No such algorithm `'+dP+'\'')}
