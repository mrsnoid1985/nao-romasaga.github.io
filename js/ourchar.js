var _0x2a37=['.SUM','isLogin','CHAR','all','no\x20login','MATCH','NONE','.LIMIT','.YOURSUM','.LIMITSUM','.USER_RANK_DISP','list','UID','RANK','sort','#USER_RANK','before','<tr\x20class=\x27USER_RANK_DISP\x27\x20style=\x27background-color:red;\x20color:white;\x27><td\x20colspan=11>協議中</td></tr>','協議中','kyogiList','KYOGI','計算中','pt)','登録がありません','#MY_RANK','#charDotAruku','char-utau','char-aruku','char-hashiri','#charDot','.png)\x20no-repeat;\x20margin:\x200\x2010px;\x22></span>','でランキング','HP/腕/体/器/速/知/精/愛/魅/合計','slice','STR','VIT','AGI','ロマサガRS便利ツール,ロマサガRS育成ランキング','育成ランキング\x20[ロマサガRS便利ツール]\x20','https://twitter.com/intent/tweet?text=','&url=https://nao-romasaga.github.io/ourchar.html?c=','&hashtags=','.rankingTweet','@nao_romasaga_rs\x20育成ランキング\x20協議解除申請\x20','small','<tr>','\x20</td>','<i\x20class=\x22fas\x20fa-crown\x20small\x22>','</i>','</td>','\x20background-color:lightgreen;','\x20background-color:darkorchid;\x20color:yellow;','\x20background-color:red;\x20color:white;','<td\x20class=\x27paramCell2\x27\x20style=\x27','.STYLE_MAX','<td\x20class=\x27paramCell2\x27\x20style=\x27background-color:red;\x20color:white;\x27>','<td\x20class=\x27paramCell2\x27\x20style=\x27background-color:yellow;\x27>','#example-table','.png\x22\x20style=\x22object-position:\x20-10px\x20-10px\x22>','icon','<span\x20class=\x22icon_mini_zokusei\x20','\x22></span>','desc','#example-table-display','<div\x20id=\x22example-table\x22\x20style=\x22width:100%\x22></div>','number','local','UserId','right','assign','MAXSTR','MAXVIT','MAXDEX','MAXAGI','MAXINT','MAXMND','MAXAI','MAXMI','<span\x20class=\x22hidden\x20pcBlock\x22>合</span>計','AVG','登録数','https://nao-romasaga.github.io/ourchar.html','TwitterAuthProvider','PROVIDER_ID','AuthUI','auth','start','#firebaseui-auth-container','.noLogin','hide','.isLogin','d-none','#loginInfo','<img>','src','photoURL','attr','style','width:40px;\x20heidht:40px;\x20\x20\x20\x20border-radius:\x2050%;','displayName','\x20さん:ログイン中','bg-white\x20kadomaru','append','LIST','#UPDATE','text','#CHAR_COUNT','length','DotId','Dot','Name','Series','WeaponType','SeriesFilter','WeaponTypeFilter','rank','removeClass','.initialShow','slideUp','search','substr','split','html,body','animate','#RANKKING_TABLE','offset','top','swing','click','parent','filterActive','event','clickFilter','floor','random','.dotBackground','addClass','each','data-type','href','hasClass','push','data-label','clearFilter','武器種:','join','\x20&\x20','<br>','html','setFilter','.tabulator-cell','tabulator-field','indexOf','clickChar','#badge','#STYLE_LINK','./style.html?s=','Holders','#initialHide','MAX','.MAX','MAXHP','.MAXSUM','MAXSUM','#RANK_COUNT','#INPUT_COUNT','size','remove','log','#STYLE_TEMPLATE','removeAttr','STYLE_ROW','find','./img/icon/icon_','.icn','./img/style_icon/','.png','Limit','Ind','<img\x20src=\x22./img/icon/icon_ind_','.png\x22\x20width=15>','\x20<span\x20class=\x22d-none\x20d-md-inline\x22>',')</span>','\x20<span\x20class=\x22d-none\x20d-md-inline\x22>(','#styleLabelRow','after','.STYLE_ROW','css','background-color','lightgreen','clone','rgba(0,0,0,\x200.2)','.IMG','最大値'];(function(_0x1ad5fa,_0x345095){var _0x227c35=function(_0x268b97){while(--_0x268b97){_0x1ad5fa['push'](_0x1ad5fa['shift']());}};_0x227c35(++_0x345095);}(_0x2a37,0x1d5));var _0x203f=function(_0x329117,_0x276e85){_0x329117=_0x329117-0x0;var _0x38c0be=_0x2a37[_0x329117];return _0x38c0be;};if(typeof firebase==='undefined'){initialLoad();}var tableLimit=0xf;var MY_DATA_LIST=[];var CHAR_RANK;var table;var totalThreathold=0xd;var OVER_LIMIT=0x2;var login=![];function _noLoginInitial(){var _0x7d2114={'signInSuccessUrl':_0x203f('0x0'),'signInOptions':[firebase['auth'][_0x203f('0x1')][_0x203f('0x2')]]};var _0x323e2f=new firebaseui['auth'][(_0x203f('0x3'))](firebase[_0x203f('0x4')](appUsers));_0x323e2f[_0x203f('0x5')](_0x203f('0x6'),_0x7d2114);initialLoad();}function _initial(){login=!![];$(_0x203f('0x7'))[_0x203f('0x8')]();$(_0x203f('0x9'))['removeClass'](_0x203f('0xa'));$(_0x203f('0xb'))[_0x203f('0x8')]();let _0x44ee16=$(_0x203f('0xc'))['attr'](_0x203f('0xd'),USER[_0x203f('0xe')])[_0x203f('0xf')](_0x203f('0x10'),_0x203f('0x11'));let _0x1e58da=USER[_0x203f('0x12')]+_0x203f('0x13');$(_0x203f('0x6'))['addClass'](_0x203f('0x14'))[_0x203f('0x15')](_0x44ee16)['append'](_0x1e58da);initialLoad();}async function initialLoad(){CHAR_RANK=RANK_LIST[_0x203f('0x16')];$(_0x203f('0x17'))[_0x203f('0x18')](RANK_LIST['UPDATE']);$(_0x203f('0x19'))[_0x203f('0x18')](CHAR_RANK[_0x203f('0x1a')]);let _0x259dba=0x1869f;let _0x48898a=0x1;for(let _0x4356c4 in CHAR_RANK){let _0x4396a5=CHAR_RANK[_0x4356c4]['Id'];if(CHAR_MASTER[_0x4396a5]===undefined){continue;}CHAR_RANK[_0x4356c4][_0x203f('0x1b')]=_0x203f('0x1c')+CHAR_MASTER[_0x4396a5][_0x203f('0x1b')];CHAR_RANK[_0x4356c4][_0x203f('0x1d')]=CHAR_MASTER[_0x4396a5][_0x203f('0x1d')];CHAR_RANK[_0x4356c4][_0x203f('0x1e')]=CHAR_MASTER[_0x4396a5][_0x203f('0x1e')];CHAR_RANK[_0x4356c4][_0x203f('0x1f')]=ICON_LIST[CHAR_MASTER[_0x4396a5][_0x203f('0x1f')]];CHAR_RANK[_0x4356c4][_0x203f('0x20')]=CHAR_MASTER[_0x4396a5]['Series'];CHAR_RANK[_0x4356c4][_0x203f('0x21')]=ICON_LIST[CHAR_MASTER[_0x4396a5][_0x203f('0x1f')]];if(_0x259dba>Number(CHAR_RANK[_0x4356c4]['size'])){_0x259dba=Number(CHAR_RANK[_0x4356c4]['size']);_0x48898a=Number(_0x4356c4)+0x1;}CHAR_RANK[_0x4356c4][_0x203f('0x22')]=_0x48898a;}drawTable(CHAR_RANK);$('.initialHide')[_0x203f('0x23')](_0x203f('0xa'));$(_0x203f('0x24'))[_0x203f('0x25')]();if(location[_0x203f('0x26')]!==''){let _0x18fae9=location[_0x203f('0x26')][_0x203f('0x27')](0x3);let _0x1d5e97=_0x18fae9[_0x203f('0x28')]('&');if(CHAR_MASTER[_0x1d5e97[0x0]]!==undefined){dispRanking(_0x1d5e97[0x0]);$(_0x203f('0x29'))[_0x203f('0x2a')]({'scrollTop':$(_0x203f('0x2b'))[_0x203f('0x2c')]()[_0x203f('0x2d')]},0x1f4,_0x203f('0x2e'));}}}$('.filterList')[_0x203f('0x2f')](function(){$(this)[_0x203f('0x30')]()['toggleClass'](_0x203f('0x31'));if(table===undefined){return;}filter();gtag(_0x203f('0x32'),_0x203f('0x33'),{'event_category':'ourchar','event_label':$(this)[_0x203f('0xf')]('href')[_0x203f('0x27')](0x1),'value':0x1});});let rand=Math[_0x203f('0x34')](Math[_0x203f('0x35')]()*0x5);$(_0x203f('0x36'))[_0x203f('0x37')]('bg'+(rand+0x1));function filter(){let _0x2b92cd=[];let _0x13283c=[];let _0x35f208=[];let _0x2ae7f2=[];$('.filterList')[_0x203f('0x38')](function(){let _0x510d08=$(this)[_0x203f('0xf')](_0x203f('0x39'));let _0x1e81e9=$(this)[_0x203f('0xf')](_0x203f('0x3a'))['substr'](0x1);if($(this)[_0x203f('0x30')]()[_0x203f('0x3b')](_0x203f('0x31'))){if(_0x510d08==='WeaponTypeFilter'){_0x2b92cd['push']({'field':_0x510d08,'type':'=','value':_0x1e81e9});_0x35f208[_0x203f('0x3c')]($(this)[_0x203f('0xf')](_0x203f('0x3d')));}else{_0x13283c[_0x203f('0x3c')]({'field':_0x510d08,'type':'=','value':_0x1e81e9});_0x2ae7f2[_0x203f('0x3c')](_0x1e81e9);}}});let _0x6e04dd='';table[_0x203f('0x3e')]();let _0x2f0228=[{'field':'MAXSUM','type':'>','value':0x0}];if(_0x2b92cd[_0x203f('0x1a')]>0x0){_0x2f0228[_0x203f('0x3c')](_0x2b92cd);_0x6e04dd+=_0x203f('0x3f')+_0x35f208[_0x203f('0x40')](',');}if(_0x13283c[_0x203f('0x1a')]>0x0){_0x2f0228[_0x203f('0x3c')](_0x13283c);if(_0x6e04dd!==''){_0x6e04dd+=_0x203f('0x41');}_0x6e04dd+=_0x2ae7f2[_0x203f('0x40')](',');}if(_0x6e04dd!==''){_0x6e04dd+=_0x203f('0x42');}$('#label1')[_0x203f('0x43')](_0x6e04dd);table[_0x203f('0x44')](_0x2f0228);changeId2Dot();}$(document)['on']('click','.tabulator-header,\x20.tabulator-footer,\x20.tabulator-page',function(){changeId2Dot();});$(document)['on'](_0x203f('0x2f'),_0x203f('0x45'),function(){$(this)[_0x203f('0x30')]()['find'](_0x203f('0x45'))[_0x203f('0x38')](async function(){let _0x3336c2=$(this)[_0x203f('0x18')]();let _0x4ef726=$(this)[_0x203f('0xf')](_0x203f('0x46'));if(_0x3336c2[_0x203f('0x47')]('ID')>-0x1){dispRanking(_0x3336c2);}else if(_0x4ef726==='Name'){gtag(_0x203f('0x32'),_0x203f('0x48'),{'event_category':'ourchar','event_label':_0x3336c2,'value':0x1});}});$(_0x203f('0x29'))[_0x203f('0x2a')]({'scrollTop':$(_0x203f('0x49'))[_0x203f('0x2c')]()[_0x203f('0x2d')]},0x1f4,_0x203f('0x2e'));});async function dispRanking(_0x4acf86){$(_0x203f('0x4a'))[_0x203f('0xf')](_0x203f('0x3a'),_0x203f('0x4b')+CHAR_MASTER[_0x4acf86][_0x203f('0x4c')][0x0]);$(_0x203f('0x4d'))[_0x203f('0x23')](_0x203f('0xa'));let _0x127bde={'STR':0x0,'VIT':0x0,'DEX':0x0,'AGI':0x0,'INT':0x0,'MND':0x0,'AI':0x0,'MI':0x0,'SUM':0x0};for(let _0x1aa276 of PARAM_KEY){_0x127bde[_0x1aa276]=CHAR_MASTER[_0x4acf86]['MAX'+_0x1aa276]===-0x63?'?':LIMIT_BASE+Number(CHAR_MASTER[_0x4acf86][_0x203f('0x4e')+_0x1aa276]);}var _0x168943=0x0;for(let _0x3c0129 in CHAR_RANK){if(CHAR_RANK[_0x3c0129]['Id']===_0x4acf86){for(let _0x1aa276 of PARAM_KEY){$(_0x203f('0x4f')+_0x1aa276)[_0x203f('0x18')](CHAR_RANK[_0x3c0129][_0x203f('0x4e')+_0x1aa276]);}_0x168943=CHAR_RANK[_0x3c0129][_0x203f('0x50')];$(_0x203f('0x51'))[_0x203f('0x18')](CHAR_RANK[_0x3c0129][_0x203f('0x52')]);$(_0x203f('0x53'))[_0x203f('0x18')](CHAR_RANK[_0x3c0129][_0x203f('0x22')]);$(_0x203f('0x54'))[_0x203f('0x18')](CHAR_RANK[_0x3c0129][_0x203f('0x55')]);break;}}let _0x2b2f9b='';let _0x948a3e='';let _0x40cfb0='%0D%0A';$('.STYLE_ROW')[_0x203f('0x56')]();_0x2b2f9b=CHAR_MASTER[_0x4acf86][_0x203f('0x1d')];$('.charName')[_0x203f('0x18')](_0x2b2f9b);console[_0x203f('0x57')](CHAR_MASTER[_0x4acf86]);for(let _0x3b98cb of CHAR_MASTER[_0x4acf86][_0x203f('0x4c')]){let _0x4e6400=STYLE_MASTER[_0x3b98cb];console[_0x203f('0x57')](_0x4e6400);let _0x488bac=$(_0x203f('0x58'))['clone']();_0x488bac[_0x203f('0x59')]('id');_0x488bac[_0x203f('0x37')](_0x203f('0x5a'));_0x488bac[_0x203f('0x23')]('d-none');_0x488bac[_0x203f('0x5b')]('.rare')[_0x203f('0xf')](_0x203f('0xd'),_0x203f('0x5c')+_0x4e6400['Rarity']+'.png');_0x488bac[_0x203f('0x5b')](_0x203f('0x5d'))['attr'](_0x203f('0xd'),_0x203f('0x5e')+_0x3b98cb+_0x203f('0x5f'));let _0x4752ad=0x0;let _0x4a9dcf=0x0;for(let _0x1aa276 of PARAM_KEY){let _0x361d96=LIMIT_BASE+Number(_0x4e6400[_0x203f('0x60')+_0x1aa276]);var _0x485faf=_0x4e6400[_0x203f('0x61')+_0x1aa276]!==undefined?_0x4e6400[_0x203f('0x61')+_0x1aa276]:0x1;var _0x2fe359=_0x203f('0x62')+_0x485faf+_0x203f('0x63');var _0x6b17e3=_0x4e6400[_0x203f('0x60')+_0x1aa276]-CHAR_MASTER[_0x4acf86][_0x1aa276];_0x4a9dcf+=_0x6b17e3;if(_0x4e6400[_0x203f('0x60')+_0x1aa276]<0x63){_0x4752ad+=_0x361d96;}else{_0x361d96='?';}_0x488bac[_0x203f('0x5b')]('.'+_0x1aa276)[_0x203f('0x43')](_0x361d96+_0x203f('0x64')+_0x2fe359+'('+_0x6b17e3+_0x203f('0x65'));}_0x488bac['find']('.SUM')[_0x203f('0x43')](_0x4752ad+_0x203f('0x66')+_0x4a9dcf+_0x203f('0x65'));$(_0x203f('0x67'))[_0x203f('0x68')](_0x488bac);}$(_0x203f('0x69'))[_0x203f('0x38')](function(){for(let _0x257eab of PARAM_KEY){let _0x237d11=$(this)['find']('.'+_0x257eab);var _0x312985=_0x237d11['text']()[_0x203f('0x28')]('\x20');if(_0x312985[0x0]==_0x127bde[_0x257eab]){_0x237d11[_0x203f('0x6a')](_0x203f('0x6b'),_0x203f('0x6c'));}}});let _0x25b67d=$('#STYLE_TEMPLATE')[_0x203f('0x6d')]();_0x25b67d[_0x203f('0x59')]('id')[_0x203f('0x37')](_0x203f('0x5a'))[_0x203f('0x23')](_0x203f('0xa'))[_0x203f('0x6a')](_0x203f('0x6b'),_0x203f('0x6e'));_0x25b67d[_0x203f('0x5b')](_0x203f('0x6f'))[_0x203f('0x43')](_0x203f('0x70'));let _0x490269=0x0;for(let _0x283d32 of PARAM_KEY){_0x490269+=_0x127bde[_0x283d32]!=='?'?_0x127bde[_0x283d32]:0x0;_0x25b67d[_0x203f('0x5b')]('.'+_0x283d32)[_0x203f('0x18')](_0x127bde[_0x283d32]);}_0x25b67d[_0x203f('0x5b')](_0x203f('0x71'))[_0x203f('0x18')](_0x490269);_0x25b67d[_0x203f('0x5b')](_0x203f('0x71'))[_0x203f('0x37')]('STYLE_MAX');$(_0x203f('0x67'))[_0x203f('0x68')](_0x25b67d);let _0x4d71bc=null;if(login){console['log'](_0x203f('0x72'));let _0x5ae7ee=[];var _0x3008bb=asyncReadUserDataWithId(_0x203f('0x73'),_0x4acf86,function(_0x46d60c){_0x4d71bc=_0x46d60c;console[_0x203f('0x57')](_0x46d60c);});_0x5ae7ee[_0x203f('0x3c')](_0x3008bb);await Promise[_0x203f('0x74')](_0x5ae7ee);}else{console['log'](_0x203f('0x75'));}let _0x2bd530=_0x203f('0x76');if(_0x4d71bc===null){_0x2bd530=_0x203f('0x77');_0x4d71bc={'STR':0x0,'VIT':0x0,'DEX':0x0,'AGI':0x0,'INT':0x0,'MND':0x0,'AI':0x0,'MI':0x0};}let _0x20ee40=0x0;let _0x46c288=_0x4d71bc['HP'];for(let _0x1e850a of PARAM_KEY){_0x20ee40+=Number(_0x4d71bc[_0x1e850a]);$('.YOUR'+_0x1e850a)[_0x203f('0x18')](_0x4d71bc[_0x1e850a]);let _0xad483e=_0x127bde[_0x1e850a]==='?'?'?':_0x127bde[_0x1e850a]-_0x4d71bc[_0x1e850a];$(_0x203f('0x78')+_0x1e850a)['text'](_0xad483e);}$(_0x203f('0x79'))[_0x203f('0x18')](_0x20ee40);$(_0x203f('0x7a'))[_0x203f('0x18')](_0x490269===0x0?'?':_0x490269-_0x20ee40);let _0x14b013=_0x20ee40;let _0x396c69=RANK_DETAIL[_0x4acf86];let _0x263326='';let _0x16d851=0x1;let _0x4dc49b=0x3e7;var _0x5a9fe2=0x0;$(_0x203f('0x7b'))[_0x203f('0x56')]();var _0x3a2986=![];var _0x201c2d=0x0;var _0x5e8c54=0x0;for(let _0x381fbd in _0x396c69[_0x203f('0x7c')]){let _0x16d93a=0x0;let _0x39b2bf=_0x396c69[_0x203f('0x7c')][_0x381fbd]['HP'];for(let _0x1e850a in PARAM_KEY){_0x16d93a+=Number(_0x396c69['list'][_0x381fbd][_0x1e850a]);}if(_0x201c2d<_0x16d93a){_0x201c2d=_0x16d93a;}if(_0x4dc49b>_0x16d93a||_0x4dc49b==_0x16d93a&&_0x5e8c54>_0x39b2bf){_0x4dc49b=_0x16d93a;_0x5a9fe2=Number(_0x381fbd)+0x1;}_0x5e8c54=_0x39b2bf;if(_0x4dc49b>_0x14b013){_0x16d851=_0x5a9fe2+0x1;}if(!_0x3a2986&&_0x14b013>0x0){if(_0x14b013>_0x16d93a||_0x14b013==_0x16d93a&&_0x46c288>=_0x5e8c54){_0x3a2986=!![];_0x16d851=_0x5a9fe2;addRankRow(_0x5a9fe2,_0x4d71bc,_0x168943,_0x127bde,_0x14b013,!![]);_0x5a9fe2++;}}if(_0x381fbd<OURSTYLE_LIMIT){if(UID!==undefined&&UID[_0x203f('0x27')](0x0,0x4)===_0x396c69[_0x203f('0x7c')][_0x381fbd][_0x203f('0x7d')]&&_0x3a2986){}else{addRankRow(_0x5a9fe2,_0x396c69[_0x203f('0x7c')][_0x381fbd],_0x168943,_0x127bde,_0x16d93a,![]);}}}if(!_0x3a2986&&_0x2bd530!==_0x203f('0x77')&&_0x14b013>0x0){var _0x10a785=[];for(let _0x207e98 in _0x396c69[_0x203f('0x7e')]){_0x10a785[_0x203f('0x3c')]({'p':_0x207e98,'s':_0x396c69[_0x203f('0x7e')][_0x207e98]});}_0x10a785[_0x203f('0x7f')]((_0x2feab2,_0x317ebc)=>{if(_0x2feab2['p']<_0x317ebc['p']){return-0x1;}else{return-0x1;}});var _0x30b79d=0x1;var _0x4bb694=![];for(var _0x3dc2e9 of _0x10a785){if(_0x14b013>=_0x3dc2e9['p']){_0x16d851=_0x30b79d;_0x4bb694=!![];break;}else{_0x30b79d+=Number(_0x3dc2e9['s']);}}if(!_0x4bb694){_0x16d851=_0x30b79d;}addRankRow(_0x16d851,_0x4d71bc,_0x168943,_0x127bde,_0x14b013,!![]);}if(_0x396c69['kyogiList']!==undefined){$(_0x203f('0x80'))[_0x203f('0x81')](_0x203f('0x82'));}_0x5a9fe2=_0x203f('0x83');for(let _0x1c798c in _0x396c69[_0x203f('0x84')]){let _0x2ba55d=0x0;let _0x42dedf=![];for(let _0x1e850a in PARAM_KEY){_0x2ba55d+=Number(_0x396c69[_0x203f('0x84')][_0x1c798c][_0x1e850a]);}if(UID!==undefined&&UID[_0x203f('0x27')](0x0,0x4)===_0x396c69[_0x203f('0x84')][_0x1c798c][_0x203f('0x7d')]){_0x2bd530=_0x203f('0x85');_0x42dedf=!![];}if(_0x1c798c<0xa){if(_0x42dedf){addRankRow(_0x5a9fe2,_0x396c69[_0x203f('0x84')][_0x1c798c],_0x168943,_0x127bde,_0x2ba55d,!![]);}else{addRankRow(_0x5a9fe2,_0x396c69[_0x203f('0x84')][_0x1c798c],_0x168943,_0x127bde,_0x2ba55d,![]);}}}_0x16d851=_0x16d851==0x1&&_0x201c2d>_0x14b013?_0x203f('0x86'):_0x16d851+'位';$('.rankingTweet')[_0x203f('0x30')]()[_0x203f('0x23')](_0x203f('0xa'));if(_0x2bd530===_0x203f('0x85')){_0x948a3e='暫定'+_0x16d851+'位';_0x263326=_0x16d851+'('+_0x14b013+'pt)<br>入力内容を再確認するか画像付きで報告お願い致します';}else if(_0x2bd530===_0x203f('0x76')){_0x948a3e=_0x16d851;_0x263326=_0x16d851+'('+_0x14b013+_0x203f('0x87');}else{$('.rankingTweet')[_0x203f('0x30')]()[_0x203f('0x37')](_0x203f('0xa'));_0x263326=_0x203f('0x88');}$(_0x203f('0x89'))[_0x203f('0x43')](_0x263326);$(_0x203f('0x8a'))[_0x203f('0x23')](_0x203f('0x8b'))[_0x203f('0x23')](_0x203f('0x8c'))['removeClass'](_0x203f('0x8d'));if(Number(_0x16d851)===0x1){$('#charDotAruku')['addClass'](_0x203f('0x8b'));}else if(Number(_0x16d851)<=0xa){$(_0x203f('0x8a'))[_0x203f('0x37')](_0x203f('0x8d'));}else{$(_0x203f('0x8a'))[_0x203f('0x37')](_0x203f('0x8c'));}$(_0x203f('0x8e'))[_0x203f('0x43')]('<span\x20class=\x22char\x20dot_mid\x20dot\x20char-winner\x22\x20style=\x22background:\x20url(./img/dot/'+CHAR_MASTER[_0x4acf86][_0x203f('0x1b')]+_0x203f('0x8f'));$(_0x203f('0x8a'))['attr'](_0x203f('0x10'),'background:\x20url(./img/dot/'+CHAR_MASTER[_0x4acf86][_0x203f('0x1b')]+'.png)\x20no-repeat;\x20margin:\x200\x2010px;');let _0x26cdb0=_0x2b2f9b+_0x203f('0x90')+_0x948a3e+'!!'+_0x40cfb0;_0x26cdb0+=_0x203f('0x91')+_0x40cfb0;_0x26cdb0+=('0'+_0x4d71bc['HP'])[_0x203f('0x92')](-0x3)+'/';_0x26cdb0+=('0'+_0x4d71bc[_0x203f('0x93')])[_0x203f('0x92')](-0x2)+'/';_0x26cdb0+=('0'+_0x4d71bc[_0x203f('0x94')])[_0x203f('0x92')](-0x2)+'/';_0x26cdb0+=('0'+_0x4d71bc['DEX'])['slice'](-0x2)+'/';_0x26cdb0+=('0'+_0x4d71bc[_0x203f('0x95')])['slice'](-0x2)+'/';_0x26cdb0+=('0'+_0x4d71bc['INT'])[_0x203f('0x92')](-0x2)+'/';_0x26cdb0+=('0'+_0x4d71bc['MND'])['slice'](-0x2)+'/';_0x26cdb0+=('0'+_0x4d71bc['AI'])[_0x203f('0x92')](-0x2)+'/';_0x26cdb0+=('0'+_0x4d71bc['MI'])[_0x203f('0x92')](-0x2)+'/';_0x26cdb0+=('0'+_0x20ee40)[_0x203f('0x92')](-0x3)+_0x40cfb0;let _0x45f191=_0x203f('0x96');let _0x526b3d=_0x203f('0x97')+_0x40cfb0+_0x26cdb0;let _0x25333a=_0x203f('0x98')+_0x526b3d+_0x203f('0x99')+_0x4acf86+_0x203f('0x9a')+_0x45f191;$(_0x203f('0x9b'))[_0x203f('0xf')](_0x203f('0x3a'),_0x25333a);let _0x2cdae6=_0x203f('0x9c')+_0x40cfb0+_0x26cdb0;let _0x3db2b2=_0x203f('0x98')+_0x2cdae6+'&url=https://nao-romasaga.github.io/ourchar.html?c='+_0x4acf86+_0x203f('0x9a')+_0x45f191;$('.kaijoTweet')[_0x203f('0xf')](_0x203f('0x3a'),_0x3db2b2);}function addRankRow(_0x5ddd12,_0xf72741,_0x24de17,_0x2d6b75,_0x4fd3c0,_0x5d9295){let _0x19ffb9=_0x5ddd12===_0x203f('0x83')?_0x203f('0x9d'):'';let _0x2a8ef3=$(_0x203f('0x9e'))[_0x203f('0x37')]('text-center\x20USER_RANK_DISP\x20'+_0x19ffb9);if(_0x5d9295){_0x2a8ef3[_0x203f('0x37')]('bg-white');}_0x2a8ef3['append']('<td\x20class=\x27paramCell2\x27>'+_0x5ddd12+_0x203f('0x9f'));let _0x51b9cb=_0xf72741['HP']===undefined?'-':_0xf72741['HP'];if(_0x24de17===_0x51b9cb){_0x51b9cb=_0x203f('0xa0')+_0x51b9cb+_0x203f('0xa1');}_0x2a8ef3['append']('<td\x20class=\x27paramCell2\x20small\x27>'+_0x51b9cb+_0x203f('0xa2'));for(let _0xba1b40 in PARAM_KEY){let _0x3941c8=PARAM_KEY[_0xba1b40];let _0x346324=_0xf72741[_0xba1b40]===undefined?_0xf72741[_0x3941c8]:_0xf72741[_0xba1b40];let _0x2aaccc='';if(_0x2d6b75[_0x3941c8]>0x0){if(_0x346324<_0x2d6b75[_0x3941c8]){_0x2aaccc='';}else if(_0x346324===_0x2d6b75[_0x3941c8]){_0x2aaccc=_0x203f('0xa3');}else if(_0x346324<_0x2d6b75[_0x3941c8]+OVER_LIMIT){_0x2aaccc='\x20background-color:yellow;';}else if(_0x346324==_0x2d6b75[_0x3941c8]+OVER_LIMIT){_0x2aaccc=_0x203f('0xa4');}else{_0x2aaccc=_0x203f('0xa5');}}_0x2a8ef3[_0x203f('0x15')](_0x203f('0xa6')+_0x2aaccc+'\x27>'+_0x346324+_0x203f('0xa2'));}if(Number($(_0x203f('0xa7'))['text']())>_0x4fd3c0){_0x2a8ef3[_0x203f('0x15')]('<td\x20class=\x27paramCell2\x20small\x27>'+_0x4fd3c0+_0x203f('0xa2'));}else if(Number($(_0x203f('0xa7'))['text']())==_0x4fd3c0){_0x2a8ef3[_0x203f('0x15')]('<td\x20class=\x27paramCell2\x27\x20style=\x27background-color:lightgreen;\x27>'+_0x4fd3c0+_0x203f('0xa2'));}else if(Number($(_0x203f('0xa7'))['text']()+totalThreathold)<_0x4fd3c0){_0x2a8ef3[_0x203f('0x15')](_0x203f('0xa8')+_0x4fd3c0+_0x203f('0xa2'));}else{_0x2a8ef3[_0x203f('0x15')](_0x203f('0xa9')+_0x4fd3c0+_0x203f('0xa2'));}$(_0x203f('0x80'))[_0x203f('0x81')](_0x2a8ef3);}function changeId2Dot(){$(_0x203f('0xaa'))[_0x203f('0x5b')](_0x203f('0x45'))[_0x203f('0x38')](function(){let _0x2bb806=$(this)[_0x203f('0x18')]();if(_0x2bb806[_0x203f('0x47')]('Dot')>-0x1){let _0x4fddfd='<img\x20src=\x22./img/dot/'+_0x2bb806[_0x203f('0x27')](0x3)+_0x203f('0xab');$(this)[_0x203f('0x43')](_0x4fddfd);}else if(_0x2bb806['indexOf'](_0x203f('0xac'))>-0x1){let _0x3c9d91=_0x203f('0xad')+_0x2bb806+_0x203f('0xae');$(this)[_0x203f('0x43')](_0x3c9d91);}});}function drawTable(_0x30b99c,_0x32b89e){let _0x28141a=_0x32b89e===undefined?_0x203f('0xaf'):_0x32b89e;$(_0x203f('0xaa'))[_0x203f('0x56')]();$(_0x203f('0xb0'))[_0x203f('0x15')](_0x203f('0xb1'));let _0x592f93={'align':'right','sortable':!![],'sorter':_0x203f('0xb2'),'minWidth':0x1e,'width':0x1e,'responsive':0xd};table=new Tabulator(_0x203f('0xaa'),{'layout':'fitColumns','data':_0x30b99c,'tooltips':![],'history':!![],'pagination':_0x203f('0xb3'),'paginationSize':tableLimit,'initialSort':[{'column':_0x203f('0x52'),'dir':_0x28141a}],'autoResize':![],'resizableRows':![],'resizableColumns':![],'responsiveLayout':!![],'columns':[{'title':'','field':'DotId','width':0x1e,'frozen':!![]},{'title':'','field':'Id','visible':![]},{'title':'','field':_0x203f('0xb4'),'visible':![]},{'title':'','field':_0x203f('0x20'),'visible':![]},{'title':'','field':_0x203f('0x21'),'visible':![]},{'title':_0x203f('0x22'),'field':_0x203f('0x22'),'visible':![]},{'title':'名前','field':_0x203f('0x1d'),'width':0x64},{'title':'作品','field':_0x203f('0x1e'),'width':0x1e,'responsive':0xd},{'title':'武器','field':'WeaponType','width':0x1e,'responsive':0xd},{'title':'HP','field':_0x203f('0x50'),'align':_0x203f('0xb5'),'sortable':!![],'sorter':_0x203f('0xb2'),'minWidth':0x1e,'width':0x28,'responsive':0xd},Object[_0x203f('0xb6')]({'title':'腕','field':_0x203f('0xb7')},_0x592f93),Object[_0x203f('0xb6')]({'title':'体','field':_0x203f('0xb8')},_0x592f93),Object[_0x203f('0xb6')]({'title':'器','field':_0x203f('0xb9')},_0x592f93),Object['assign']({'title':'速','field':_0x203f('0xba')},_0x592f93),Object[_0x203f('0xb6')]({'title':'知','field':_0x203f('0xbb')},_0x592f93),Object['assign']({'title':'精','field':_0x203f('0xbc')},_0x592f93),Object[_0x203f('0xb6')]({'title':'愛','field':_0x203f('0xbd')},_0x592f93),Object[_0x203f('0xb6')]({'title':'魅','field':_0x203f('0xbe')},_0x592f93),{'title':_0x203f('0xbf'),'field':_0x203f('0x52'),'sortable':!![],'sorter':'number'},{'title':'平均','field':_0x203f('0xc0'),'sortable':!![],'sorter':'number','responsive':0xb},{'title':_0x203f('0xc1'),'field':_0x203f('0x55'),'responsive':0xc}]});table[_0x203f('0x44')](_0x203f('0x52'),'>',0x0);changeId2Dot();}