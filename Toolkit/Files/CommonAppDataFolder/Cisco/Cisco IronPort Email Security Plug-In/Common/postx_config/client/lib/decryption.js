'$Serial: 1699 $ $Revision: #29 $';function ej(){var m=_z,_l=m.payload,_o,
d9=0,status=d7;if(_l.maxBadPasswords>0&&(_o=al(db))&&(d9=+_o)>=_l.
maxBadPasswords)status=ee;if(status==d7){m.openerObj=new el(m);if(!m.
openerObj.run()&&(status=m.openerObj.status())!=d7&&_l.maxBadPasswords>0){_9
(db,++d9,_l.expiries.badPasswordCount,'/');if(status==eo&&d9>=_l.
maxBadPasswords)status=ee}}if(status!=d7){m.fns.error(status,m.arg);ec(1);
return 0}return 1}function ef(){var m=_z,_l=m.payload,d6=m.openerObj,d8;if(!
d6){if(!(d8=ej()))return;d6=m.openerObj}else d8=d6.run();if(d8){if(m.fns.
progress)m.fns.progress(d6.completed(),m.arg);setTimeout(ef,m.timeOut);
return;}var status=d6.status();if(status!=d7){if(m.action==_U)m.applet.
endSaveFile();m.fns.error(status,m.arg);ec(1);return;}if(_l.hardenername&&m.
hardener)ep(ac+_l.hardenername,_l.expiries.hardener,m.hardener,m.userKey,_l.
keysize,af);if(_l.maxBadPasswords>0)aj(db,'/');m.cryptDocs=m.openerObj.
getDecryptedText();m.plainDocs=m.openerObj.getDecodedText();m.openerObj=0;if
(_l.flags&em)ek(m.cryptDocs,_l.toc[0][ed][1],m.duration,_l.progressratio,{
'progress':m.fns.progress,'completion':e_},m.arg);else e_(m.cryptDocs)}
function e_(eg){var m=_z,_l=m.payload;m.cryptDocs=eg;if(_l.flags&en)ek(m.
plainDocs,_l.toc[_l.toc.length-1][ed][1],m.duration,_l.progressratio,{
'progress':m.fns.progress,'completion':eb},m.arg);else eb(m.plainDocs)}
function eb(ei){_z.plainDocs=ei;eh()}function eh(){var m=_z;if(m.fns.
progress){m.fns.progress('finish',m.arg);setTimeout(ea,m.timeOut)}else ea()}
function ea(){var m=_z,_S=m.fns.completion(m.cryptDocs,m.plainDocs,m.arg);if
(_S=='')return;if(_S&&m.fns.saved)m.fns.saved(_S,m.payload.toc.length);else
if(m.fns.progress)m.fns.progress('clear',m.arg);ec(1)}
