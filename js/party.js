var _0x1bfe=['css','.modalClose','showModal','save','data-input','cancel','#modal01','fadeOut','animation','modalClose\x200.5s\x20forwards','.baseValue','.LIMIT','data-styleId','Limit','status_plus','status_minus','外伝1-5以降(+17)','外伝1(最大:+16)','VH11(最大:+13)','VH10(最大:+11)','VH9(最大:+9)','VH415(最大:+0)','H712(最大:-2)','.SUM','.AVG','NOWHP','saveChar','.tabArea','.styleInfoArea','#CHAR_TEMPLATE','removeAttr','.charName','html','Name','.icon_btn_on','.openMenu','.CHAR_SAVE','SUM','AVG','.RECO','RECO','#insotsu','name','#baby','baby','roleType','.insotsuLabel','for','insotsu','.babyLabel','DotId','ID4e2c8','dot/','.png','.dot_mid','.nowData','charInput','Holders','<button>','style_icon/','<span>','Rarity','.STYLE_ICON','#LIMIT_TEMPLATE','.rare','./img/icon/icon_','.icn','./img/style_icon/','.cin','./img/style_cutin/','children','<p\x20class=\x22series-button\x20text-center\x22\x20style=\x22width:30px;\x20margin-bottom:0px;\x22>','</p>','\x22\x20data-charId=\x27','\x27\x20data-styleId=\x27\x27></span>','JINKEI','<div\x20class=\x27charTableParent\x27>','.style','opacity_nocheck','limit','border:\x201px\x20solid\x20#faf0b4','inputArea\x20d-lg-table-row','border:\x200px','ID4e2c9','char-winner','_small','height:\x2030px;','split','.series-button','Series','.dot','編成中','https://nao-romasaga.github.io/party.html','auth','TwitterAuthProvider','PROVIDER_ID','AuthUI','start','#firebaseui-auth-container','hide','.isLogin','removeClass','<img>','attr','src','style','width:40px;\x20heidht:40px;\x20\x20\x20\x20border-radius:\x2050%;','\x20さん:ログイン中','addClass','bg-white\x20kadomaru','append','PARTY','#charData','show','tooltip','.initialHide','d-none','slideUp','getTime','getDate','getHours','slice','getMinutes','<div>','#_icon_toku','first','clone','filter','char','CHAR','length','all','.charTmpl','find','.fukidashiInput','.filterList','click','.weaponList','href','substr','parent','hasClass','filterActive','.SeriesChoise','each','toggleClass','.charParam','data-pm','plus','val','data-id','icon_btn_on','icon_btn_off','slideDown','change','parents','data-charid','data-param','text','.charInput','[data-toggle=\x22tooltip\x22]','.openMenu,\x20.nowData\x20>\x20td','.btn_close','.charUnset','.charTableParent','#PARTY','remove','#JINKEI','splice','.tab-content\x20.char,\x20.weaponList\x20\x20.char','database','goOnline','pop','char-aruku','char-loser','push','.inputArea','html,body','offset','top','swing','.char','NOW','.hanei','.allparams','event','party','#allSubmit','data-charId','HP:\x20','<br>','腕力:\x20','\x20体力:','器用さ:\x20','\x20素早さ:','知力:\x20','\x20精神:','\x20魅力:','が入力されました<br>','この内容を反映してもよろしいですか？','#allParamConfirm','fadeIn','#allParamConfirmInner'];(function(_0x33c69b,_0x40e351){var _0x447e51=function(_0x1350df){while(--_0x1350df){_0x33c69b['push'](_0x33c69b['shift']());}};_0x447e51(++_0x40e351);}(_0x1bfe,0x127));var _0x331f=function(_0x3a697b,_0x4d1e4a){_0x3a697b=_0x3a697b-0x0;var _0x3e0fef=_0x1bfe[_0x3a697b];return _0x3e0fef;};var BASE_SKILL_LIST=[];var USE_SKILL_LIST=[];var NOW_CHAR={};var NOW_CHAR_ID='';var NOW_STYLE={};var NOW_PARTY=0x0;var PARTY_LIST=[[]];var BASE=LIMIT_BASE;var UID;var dotStyle='\x20margin-left:0px;\x20position:\x20relative;';function _noLoginInitial(){var _0x4f65b9={'signInSuccessUrl':_0x331f('0x0'),'signInOptions':[firebase[_0x331f('0x1')][_0x331f('0x2')][_0x331f('0x3')]]};var _0x4dd3b5=new firebaseui[(_0x331f('0x1'))][(_0x331f('0x4'))](firebase['auth'](appUsers));_0x4dd3b5[_0x331f('0x5')](_0x331f('0x6'),_0x4f65b9);}async function _initial(){$('.noLogin')[_0x331f('0x7')]();$(_0x331f('0x8'))[_0x331f('0x9')]('d-none');$('#loginInfo')[_0x331f('0x7')]();let _0x19cd7e=$(_0x331f('0xa'))[_0x331f('0xb')](_0x331f('0xc'),USER['photoURL'])['attr'](_0x331f('0xd'),_0x331f('0xe'));let _0x45a747=USER['displayName']+_0x331f('0xf');$(_0x331f('0x6'))[_0x331f('0x10')](_0x331f('0x11'))[_0x331f('0x12')](_0x19cd7e)[_0x331f('0x12')](_0x45a747);await init();}async function init(){let _0x3d11da=readUserData(_0x331f('0x13'),async function(_0x82a3ae){if(_0x82a3ae===null){PARTY_LIST=[[]];}else{PARTY_LIST=_0x82a3ae;}});dispChar(CHAR_MASTER);$(_0x331f('0x14'))[_0x331f('0x15')]();$('[data-toggle=\x22tooltip\x22]')[_0x331f('0x16')]();await Promise['all']([_0x3d11da]);if(PARTY_LIST===null){return;}await renderParty();$(_0x331f('0x17'))[_0x331f('0x9')](_0x331f('0x18'));$('.initialShow')[_0x331f('0x19')]();var _0x1ce982=new Date();var _0x2de710=Math['floor'](_0x1ce982[_0x331f('0x1a')]()/0x3e8);for(var _0x398a15 in EVENT_ABILITY){if(_0x398a15>_0x2de710){var _0x385896=new Date(_0x398a15*0x3e8);var _0x5a8110=_0x385896['getMonth']()+0x1;var _0x22ae9e=_0x385896[_0x331f('0x1b')]();var _0x13260a=('0'+_0x385896[_0x331f('0x1c')]())[_0x331f('0x1d')](-0x2);var _0x3cbbc0=('0'+_0x385896[_0x331f('0x1e')]())[_0x331f('0x1d')](-0x2);var _0x57e624=$(_0x331f('0x1f'))[_0x331f('0x12')](_0x331f('0x1f')+_0x5a8110+'/'+_0x22ae9e+'\x20'+_0x13260a+':'+_0x3cbbc0+'まで</div>');$(_0x331f('0x20'))[_0x331f('0x12')](_0x57e624);for(var _0x1ac1f9 of EVENT_ABILITY[_0x398a15]){$('#_icon_toku')[_0x331f('0x12')]($('.'+_0x1ac1f9)[_0x331f('0x21')]()[_0x331f('0x22')]());}}}setLimitData();}async function renderParty(){let _0x266e06=0x0;PARTY_LIST[0x0]=PARTY_LIST[0x0][_0x331f('0x23')](_0x340c73=>CHAR_MASTER[_0x340c73[_0x331f('0x24')]]!==undefined);let _0x1f18d4=PARTY_LIST[0x0][_0x266e06];let _0x20d896=0x0;let _0x2c7023=[];while(_0x1f18d4!==undefined){let _0x28cb8d=_0x1f18d4['char'];let _0x2ac0b5=_0x1f18d4[_0x331f('0xd')];NOW_CHAR=CHAR_MASTER[_0x28cb8d];selectDotHensei(CHAR_MASTER[_0x28cb8d]);let _0x3e2a7a=asyncReadUserDataWithId(_0x331f('0x25'),_0x28cb8d,async function(_0x2cf809){await displayCharInfo(CHAR_MASTER[_0x28cb8d],_0x2cf809);await displayStyleInfo(_0x28cb8d,_0x2ac0b5);if(_0x20d896===PARTY_LIST[0x0][_0x331f('0x26')]){}closeInput(_0x28cb8d,![]);});_0x2c7023['push'](_0x3e2a7a);_0x1f18d4=PARTY_LIST[0x0][++_0x266e06];}await Promise[_0x331f('0x27')](_0x2c7023);}function closeInput(_0x112105,_0x4e8eb6=![]){$(_0x331f('0x28')+_0x112105)[_0x331f('0x29')](_0x331f('0x2a'))[_0x331f('0x19')](0xfa);if(_0x4e8eb6){saveCharData(_0x112105);}}$(document)['ready'](function(_0x185aed){_0x185aed(_0x331f('0x2b'))[_0x331f('0x2c')](function(){_0x185aed(_0x331f('0x2d'))['addClass'](_0x331f('0x18'));let _0x3750eb=_0x185aed(this)[_0x331f('0xb')](_0x331f('0x2e'))[_0x331f('0x2f')](0x1);if(_0x185aed(this)[_0x331f('0x30')]()[_0x331f('0x31')](_0x331f('0x32'))){_0x185aed(_0x331f('0x33'))['removeClass'](_0x331f('0x18'));_0x185aed(_0x331f('0x2b'))[_0x331f('0x34')](function(){_0x185aed(this)[_0x331f('0x30')]()[_0x331f('0x9')]('filterActive');});}else{_0x185aed(_0x331f('0x33'))[_0x331f('0x10')](_0x331f('0x18'));_0x185aed('#_'+_0x3750eb)[_0x331f('0x9')](_0x331f('0x18'));_0x185aed('.filterList')['each'](function(){_0x185aed(this)['parent']()[_0x331f('0x9')]('filterActive');});_0x185aed(this)[_0x331f('0x30')]()[_0x331f('0x35')](_0x331f('0x32'));}});initialHide();_0x185aed('.tab-content')['on'](_0x331f('0x2c'),function(){});_0x185aed(document)['on'](_0x331f('0x2c'),'.paramButton',function(){let _0x2bc2e3=_0x185aed(this)[_0x331f('0x30')]()[_0x331f('0x29')](_0x331f('0x36'));let _0x29aa1e=_0x185aed(this)[_0x331f('0xb')](_0x331f('0x37'))===_0x331f('0x38')?0x1:-0x1;let _0xa2d0ea=_0x2bc2e3[_0x331f('0x39')]();let _0x5349cf=Number(_0xa2d0ea)+_0x29aa1e;_0x2bc2e3[_0x331f('0x39')](_0x5349cf);_0x2cfaa0(_0x185aed(this),_0x5349cf);});_0x185aed(document)['on']('click','.CHAR_SAVE',function(){let _0x558940=_0x185aed(this)['attr'](_0x331f('0x3a'));_0x185aed(this)['removeClass'](_0x331f('0x3b'))[_0x331f('0x10')](_0x331f('0x3c'));_0x185aed(this)['slideUp'](0xc8,function(){_0x185aed(this)[_0x331f('0x3d')](0xc8);_0x185aed(this)[_0x331f('0x9')](_0x331f('0x3c'))['addClass'](_0x331f('0x3b'));_0x3cf463(_0x558940);saveCharData(_0x558940);});});_0x185aed(document)['on'](_0x331f('0x3e'),_0x331f('0x36'),function(){_0x2cfaa0(_0x185aed(this),_0x185aed(this)[_0x331f('0x39')]());});function _0x2cfaa0(_0x477755,_0x434ee3){let _0x10a62a=_0x477755[_0x331f('0x3f')]('.charTable');let _0x11a148=_0x10a62a[_0x331f('0xb')](_0x331f('0x40'));let _0x1568b1=_0x477755[_0x331f('0xb')](_0x331f('0x41'));_0x185aed('.char'+_0x1568b1+_0x11a148)[_0x331f('0x34')](function(){_0x185aed(this)[_0x331f('0x42')](_0x434ee3);});_0x185aed(_0x331f('0x43')+_0x1568b1+_0x11a148)[_0x331f('0x34')](function(){_0x185aed(this)[_0x331f('0x39')](_0x434ee3);});_0x3cf463(_0x11a148);}_0x185aed(_0x331f('0x44'))[_0x331f('0x16')]();_0x185aed(document)['on'](_0x331f('0x2c'),_0x331f('0x45'),function(){setLimitData();let _0xf2a073=_0x185aed(this)[_0x331f('0xb')](_0x331f('0x3a'))!==undefined?_0x185aed(this)[_0x331f('0xb')]('data-id'):_0x185aed(this)[_0x331f('0x30')]()[_0x331f('0xb')](_0x331f('0x3a'));NOW_CHAR=CHAR_MASTER[_0xf2a073];let _0x289fba=_0x185aed(_0x331f('0x28')+_0xf2a073)[_0x331f('0x29')](_0x331f('0x2a'))[_0x331f('0xb')](_0x331f('0xd'));if(_0x289fba==='display:\x20block;'){saveCharData(_0xf2a073);}_0x185aed(_0x331f('0x28')+_0xf2a073)[_0x331f('0x29')]('.fukidashiInput')['slideToggle'](0xfa);});_0x185aed(document)['on'](_0x331f('0x2c'),_0x331f('0x46'),function(){closeInput(_0x185aed(this)['attr'](_0x331f('0x3a')),!![]);});_0x185aed(document)['on']('click',_0x331f('0x47'),function(){let _0x49e3e9=_0x185aed(this)[_0x331f('0xb')](_0x331f('0x3a'));_0x4216fd(_0x49e3e9);});function _0x4216fd(_0x4635d7){let _0x16be43=CHAR_MASTER[_0x4635d7];_0x185aed(_0x331f('0x28')+_0x4635d7)[_0x331f('0x3f')](_0x331f('0x48'))[_0x331f('0x19')](0x1f4);selectDotReset(_0x16be43);_0x185aed(_0x331f('0x49'))[_0x331f('0x29')](_0x331f('0x28')+_0x4635d7)[_0x331f('0x4a')]();_0x185aed(_0x331f('0x4b')+_0x4635d7)[_0x331f('0x4a')]();let _0x3bd3b5=_0x31061d(_0x4635d7);if(_0x3bd3b5!==-0x1){PARTY_LIST[NOW_PARTY][_0x331f('0x4c')](_0x3bd3b5,0x1);}_0x2f5d90();saveCharData(_0x4635d7);}function _0x31061d(_0x1c875f){for(let _0x379ba4 in PARTY_LIST[NOW_PARTY]){if(PARTY_LIST[NOW_PARTY][_0x379ba4][_0x331f('0x24')]===_0x1c875f){return _0x379ba4;}}return-0x1;}_0x185aed(document)['on'](_0x331f('0x2c'),_0x331f('0x4d'),async function(){firebase[_0x331f('0x4e')]()[_0x331f('0x4f')]();firebase[_0x331f('0x4e')](appUsers)[_0x331f('0x4f')]();let _0x264845=_0x185aed(this)['attr'](_0x331f('0x3a'));let _0x52d15f=_0x31061d(_0x264845);if(PARTY_LIST[NOW_PARTY]['length']>=PARTY_LIMIT||_0x52d15f!==-0x1){while(PARTY_LIST[NOW_PARTY][_0x331f('0x26')]>PARTY_LIMIT){let _0x3ce5f8=PARTY_LIST[NOW_PARTY][_0x331f('0x26')];let _0x53f880=PARTY_LIST[NOW_PARTY][_0x3ce5f8-0x1][_0x331f('0x24')];_0x4216fd(_0x53f880);PARTY_LIST[NOW_PARTY][_0x331f('0x50')]();}_0x185aed(this)[_0x331f('0x9')](_0x331f('0x51'))['addClass'](_0x331f('0x52'));return;}if(NOW_CHAR['Id']!==undefined){closeInput(NOW_CHAR['Id'],!![]);}NOW_CHAR=CHAR_MASTER[_0x264845];let _0x16b023=NOW_CHAR['Holders'][0x0];NOW_STYLE=STYLE_MASTER[_0x16b023];PARTY_LIST[NOW_PARTY][_0x331f('0x53')]({'char':_0x264845,'style':_0x16b023});_0x185aed('.styleInfoArea')['show']();selectDotHensei(NOW_CHAR);readUserDataWithId(_0x331f('0x25'),_0x264845,async function(_0x5eabeb){await displayCharInfo(CHAR_MASTER[_0x264845],_0x5eabeb);await displayStyleInfo(NOW_CHAR['Id'],_0x16b023);_0x185aed('.charTmpl'+_0x264845)[_0x331f('0x29')](_0x331f('0x54'))[_0x331f('0x9')](_0x331f('0x18'))['slideDown'](0x1f4);_0x185aed(_0x331f('0x55'))['animate']({'scrollTop':_0x185aed('.charTmpl'+_0x264845)[_0x331f('0x56')]()[_0x331f('0x57')]},0x1f4,_0x331f('0x58'));setLimitData();_0x2f5d90();});_0x185aed(_0x331f('0x44'))['tooltip']();});_0x185aed(document)['on']('click','.style',async function(){let _0x7d612c=_0x185aed(this)[_0x331f('0xb')](_0x331f('0x3a'));NOW_STYLE=STYLE_MASTER[_0x7d612c];await displayStyleInfo(NOW_CHAR['Id'],_0x7d612c);let _0x50f14d=_0x31061d(NOW_CHAR['Id']);PARTY_LIST[NOW_PARTY][_0x50f14d][_0x331f('0xd')]=_0x7d612c;_0x2f5d90();});function _0x3cf463(_0x36f386){let _0x55c621=_0x36f386===undefined?NOW_CHAR['Id']:_0x36f386;for(let _0x5971b9 of PARAM_KEY_HP){let _0x669403=_0x185aed(_0x331f('0x59')+_0x5971b9+_0x55c621)[_0x331f('0x21')]()[_0x331f('0x42')]();CHAR_MASTER[_0x55c621][_0x331f('0x5a')+_0x5971b9]=Number(_0x669403);}if(NOW_CHAR_ID!==_0x55c621){if(NOW_CHAR_ID!==''){saveCharData(NOW_CHAR_ID);}NOW_CHAR_ID=_0x55c621;}setLimitData();}function _0x2f5d90(){updateData(_0x331f('0x13'),PARTY_LIST);}_0x185aed(document)['on']('click',_0x331f('0x5b'),function(){_0x62853a(_0x185aed(this)[_0x331f('0x30')]()[_0x331f('0x29')]('.allparams'));});_0x185aed(document)['on'](_0x331f('0x3e'),_0x331f('0x5c'),function(){_0x62853a(_0x185aed(this));});function _0x62853a(_0x35ce11){gtag(_0x331f('0x5d'),'showModal',{'event_category':_0x331f('0x5e'),'event_label':_0x331f('0x15'),'value':0x1});_0x185aed(_0x331f('0x5f'))[_0x331f('0xb')]('data-input',_0x185aed(_0x35ce11)[_0x331f('0x39')]());_0x185aed(_0x331f('0x5f'))[_0x331f('0xb')](_0x331f('0x60'),_0x185aed(_0x35ce11)[_0x331f('0xb')](_0x331f('0x3a')));let _0x2f022e=splitParam(_0x185aed(_0x35ce11)[_0x331f('0x39')](),'不明');let _0x1a576d='';_0x1a576d+=_0x331f('0x61')+_0x2f022e[0x0]+_0x331f('0x62');_0x1a576d+=_0x331f('0x63')+_0x2f022e[0x1]+_0x331f('0x64')+_0x2f022e[0x2]+_0x331f('0x62');_0x1a576d+=_0x331f('0x65')+_0x2f022e[0x3]+_0x331f('0x66')+_0x2f022e[0x4]+_0x331f('0x62');_0x1a576d+=_0x331f('0x67')+_0x2f022e[0x5]+_0x331f('0x68')+_0x2f022e[0x6]+_0x331f('0x62');_0x1a576d+='\u3000愛:\x20'+_0x2f022e[0x7]+_0x331f('0x69')+_0x2f022e[0x8]+'<br>';_0x1a576d+=_0x331f('0x6a');_0x1a576d+=_0x331f('0x6b');_0x185aed(_0x331f('0x6c'))['html'](_0x1a576d);_0x185aed('#modal01')[_0x331f('0x6d')]();_0x185aed(_0x331f('0x6e'))[_0x331f('0x6f')]('animation','modal\x200.5s\x20forwards');return![];}_0x185aed(_0x331f('0x70'))['click'](function(){if(_0x185aed(this)[_0x331f('0xb')]('data-id')==='ok'){gtag(_0x331f('0x5d'),_0x331f('0x71'),{'event_category':_0x331f('0x5e'),'event_label':_0x331f('0x72'),'value':0x1});let _0x27ea72=_0x185aed(this)['attr'](_0x331f('0x60'));let _0x3c3b89=splitParam(_0x185aed(this)['attr'](_0x331f('0x73')),0x0);for(let _0x29f58f in _0x3c3b89){_0x185aed(_0x331f('0x43')+PARAM_KEY_HP[_0x29f58f]+_0x27ea72)[_0x331f('0x34')](function(_0x195cf8,_0x141f53){_0x185aed(_0x141f53)[_0x331f('0x39')](_0x3c3b89[_0x29f58f]);});_0x185aed('.char'+PARAM_KEY_HP[_0x29f58f]+_0x27ea72)[_0x331f('0x34')](function(_0x284c22,_0x2ac31d){_0x185aed(_0x2ac31d)[_0x331f('0x42')](_0x3c3b89[_0x29f58f]);});}_0x3cf463();}else{gtag(_0x331f('0x5d'),'showModal',{'event_category':_0x331f('0x5e'),'event_label':_0x331f('0x74'),'value':0x1});}_0x185aed(_0x331f('0x75'))[_0x331f('0x76')]();_0x185aed(_0x331f('0x6e'))[_0x331f('0x6f')](_0x331f('0x77'),_0x331f('0x78'));return![];});_0x185aed(_0x331f('0x79'))[_0x331f('0x2c')](function(){_0x185aed(_0x331f('0x79'))[_0x331f('0x34')](function(){_0x185aed(this)[_0x331f('0x9')](_0x331f('0x3c'));_0x185aed(this)['addClass'](_0x331f('0x3b'));});_0x185aed(this)['addClass'](_0x331f('0x3c'));BASE=Number(_0x185aed(this)[_0x331f('0xb')](_0x331f('0x3a')));setLimitData();});});function setLimitData(){$(_0x331f('0x7a'))['each'](async function(){let _0x5e6a2b=$(this)[_0x331f('0xb')](_0x331f('0x7b'));let _0x3ad93f=STYLE_MASTER[_0x5e6a2b];let _0x3a74a0=$('.limit'+_0x5e6a2b);let _0x4c3fba=_0x3a74a0[_0x331f('0xb')](_0x331f('0x60'));let _0x55dfdf=0x0;for(let _0x5c340b of PARAM_KEY){let _0x2e4535=_0x3ad93f['Limit'+_0x5c340b];let _0x250b6f=CHAR_MASTER[_0x4c3fba]['NOW'+_0x5c340b]!==undefined?CHAR_MASTER[_0x4c3fba]['NOW'+_0x5c340b]:CHAR_MASTER[_0x4c3fba][_0x5c340b];_0x55dfdf+=_0x250b6f;let _0x466457=_0x3ad93f[_0x331f('0x7c')+_0x5c340b]!==0x63?BASE+Number(_0x2e4535)-Number(_0x250b6f):'?';_0x3a74a0[_0x331f('0x29')]('.'+_0x5c340b)[_0x331f('0x34')](function(){$(this)[_0x331f('0x9')](_0x331f('0x7d'))['removeClass'](_0x331f('0x7e'));if(_0x466457==='?'){}else if(_0x466457>0x0){$(this)[_0x331f('0x10')](_0x331f('0x7d'));}else if(_0x466457<0x0){$(this)['addClass'](_0x331f('0x7e'));}$(this)[_0x331f('0x42')](_0x466457);});}let _0x4d8ae4=(_0x55dfdf-0x171)/0x8;let _0x2d6d0c='+'+_0x4d8ae4;if(_0x55dfdf===0x171){_0x2d6d0c=0x0;}else if(_0x4d8ae4<0x0){_0x2d6d0c=_0x4d8ae4;}let _0x1e6092='遠征';if(_0x4d8ae4>=0x10){_0x1e6092='外伝2-3以降(+18)';}else if(_0x4d8ae4>0xf){_0x1e6092=_0x331f('0x7f');}else if(_0x4d8ae4>0xe){_0x1e6092=_0x331f('0x80');}else if(_0x4d8ae4>0xc){_0x1e6092='VH12(最大:+15)';}else if(_0x4d8ae4>0x8){_0x1e6092=_0x331f('0x81');}else if(_0x4d8ae4>0x5){_0x1e6092=_0x331f('0x82');}else if(_0x4d8ae4>0x0){_0x1e6092=_0x331f('0x83');}else if(_0x4d8ae4>-0x3){_0x1e6092=_0x331f('0x84');}else if(_0x4d8ae4>-0x6){_0x1e6092=_0x331f('0x85');}$(_0x331f('0x86')+_0x4c3fba)[_0x331f('0x42')](_0x55dfdf);$(_0x331f('0x87')+_0x4c3fba)[_0x331f('0x42')](_0x2d6d0c);$('.RECO'+_0x4c3fba)[_0x331f('0x42')](_0x1e6092);});}function saveCharData(_0x43ee96){update={};let _0x47f307=0x0;for(let _0x555699 of PARAM_KEY){let _0x23bbe7=Number(CHAR_MASTER[_0x43ee96][_0x331f('0x5a')+_0x555699]);_0x23bbe7=isNaN(_0x23bbe7)||_0x23bbe7>LIMIT_BASE+0x10?0x0:_0x23bbe7;_0x47f307+=_0x23bbe7;update[_0x555699]=_0x23bbe7;}let _0x5bf195=Number(CHAR_MASTER[_0x43ee96][_0x331f('0x88')]);update['HP']=isNaN(_0x5bf195)||_0x5bf195>0x3a2?0x0:_0x5bf195;if(_0x47f307>0x0){updateData('CHAR/'+_0x43ee96,update);gtag(_0x331f('0x5d'),_0x331f('0x89'),{'event_category':_0x331f('0x5e'),'event_label':CHAR_MASTER[_0x43ee96]['Name'],'value':0x1});}else{console['log']('合計値が0のため保存をスキップしました。',update);}}function initialHide(){$(_0x331f('0x14'))[_0x331f('0x7')]();$(_0x331f('0x8a'))['hide']();$(_0x331f('0x8b'))['hide']();}async function displayCharInfo(_0x3155be,_0x5a9786){let _0x29e3a8=_0x3155be['Id'];let _0x35026a=$(_0x331f('0x8c'))['clone']()[_0x331f('0x9')]('d-none')[_0x331f('0x8d')]('id')[_0x331f('0x10')]('charTmpl'+_0x29e3a8)[_0x331f('0xb')](_0x331f('0x60'),_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x8e'))[_0x331f('0x8f')](_0x3155be[_0x331f('0x90')]);_0x35026a[_0x331f('0x29')](_0x331f('0x91'))['attr'](_0x331f('0x3a'),_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x47'))[_0x331f('0xb')](_0x331f('0x3a'),_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x92'))['attr'](_0x331f('0x3a'),_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x59'))[_0x331f('0x30')]()[_0x331f('0xb')](_0x331f('0x3a'),_0x29e3a8);_0x35026a['find']('.allparams')[_0x331f('0xb')]('data-id',_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x93'))[_0x331f('0xb')](_0x331f('0x3a'),_0x29e3a8);_0x35026a['find'](_0x331f('0x86'))[_0x331f('0xb')](_0x331f('0x3a'),_0x29e3a8)[_0x331f('0x10')](_0x331f('0x94')+_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x87'))['attr'](_0x331f('0x3a'),_0x29e3a8)['addClass'](_0x331f('0x95')+_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x96'))[_0x331f('0xb')](_0x331f('0x3a'),_0x29e3a8)[_0x331f('0x10')](_0x331f('0x97')+_0x29e3a8);_0x35026a['find'](_0x331f('0x98'))['parent']()[_0x331f('0xb')]('data-id',_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x98'))[_0x331f('0xb')]('id','insotsu'+_0x29e3a8)[_0x331f('0xb')](_0x331f('0x99'),'roleType'+_0x29e3a8);_0x35026a['find'](_0x331f('0x9a'))['attr']('id',_0x331f('0x9b')+_0x29e3a8)[_0x331f('0xb')](_0x331f('0x99'),_0x331f('0x9c')+_0x29e3a8);_0x35026a[_0x331f('0x29')](_0x331f('0x9d'))[_0x331f('0xb')](_0x331f('0x9e'),_0x331f('0x9f')+_0x29e3a8);_0x35026a['find'](_0x331f('0xa0'))[_0x331f('0xb')](_0x331f('0x9e'),_0x331f('0x9b')+_0x29e3a8);let _0x46f12b=_0x3155be[_0x331f('0xa1')];let _0x996d39=_0x46f12b!==_0x331f('0xa2')?_0x46f12b:'ID4e2c9';let _0x3218de=getImgUrl(_0x331f('0xa3')+_0x996d39+_0x331f('0xa4'))+dotStyle;_0x35026a[_0x331f('0x29')](_0x331f('0xa5'))[_0x331f('0xb')](_0x331f('0xd'),_0x3218de);if(_0x5a9786!==null){for(let _0x2bcb1b of PARAM_KEY_HP){_0x3155be[_0x331f('0x5a')+_0x2bcb1b]=Number(_0x5a9786[_0x2bcb1b]);}}else if(_0x5a9786===null){for(let _0x53a453 of PARAM_KEY){_0x3155be[_0x331f('0x5a')+_0x53a453]=0x0;}}let _0x603487=_0x35026a[_0x331f('0x29')](_0x331f('0xa6'));_0x603487[_0x331f('0xb')](_0x331f('0x3a'),_0x29e3a8);for(let _0xfa9f1b of PARAM_KEY_HP){_0x35026a[_0x331f('0x29')](_0x331f('0x59')+_0xfa9f1b)[_0x331f('0x9')](_0x331f('0x24')+_0xfa9f1b)['addClass'](_0x331f('0xa7')+_0xfa9f1b+_0x29e3a8)[_0x331f('0x39')](_0x3155be['NOW'+_0xfa9f1b]);_0x603487[_0x331f('0x29')]('.'+_0xfa9f1b)[_0x331f('0x9')](_0x331f('0x24')+_0xfa9f1b)[_0x331f('0x10')](_0x331f('0x24')+_0xfa9f1b+_0x29e3a8)[_0x331f('0x42')](_0x3155be['NOW'+_0xfa9f1b]);}for(let _0x2ebe01 of _0x3155be[_0x331f('0xa8')]){let _0x5c60f1=STYLE_MASTER[_0x2ebe01];let _0x41eb18=$(_0x331f('0xa9'))[_0x331f('0x10')](_0x331f('0xd'))[_0x331f('0x10')](getStyleIconClass(_0x5c60f1['Rarity']))['attr'](_0x331f('0xd'),getImgUrl(_0x331f('0xaa')+_0x2ebe01+_0x331f('0xa4')))[_0x331f('0xb')](_0x331f('0x3a'),_0x2ebe01);let _0xc00d7f=$(_0x331f('0xab'))[_0x331f('0x10')](getStyleIconBgClass(_0x5c60f1[_0x331f('0xac')]))[_0x331f('0x12')](_0x41eb18);_0x35026a[_0x331f('0x29')](_0x331f('0xad'))[_0x331f('0x12')](_0xc00d7f);let _0x10b928=$(_0x331f('0xae'))[_0x331f('0x22')]()[_0x331f('0x9')]('d-none')['removeAttr']('id')['addClass']('LIMIT\x20limit'+_0x2ebe01)['attr'](_0x331f('0x7b'),_0x2ebe01)['attr']('data-charId',_0x29e3a8);_0x10b928[_0x331f('0x29')](_0x331f('0xaf'))[_0x331f('0xb')](_0x331f('0xc'),_0x331f('0xb0')+_0x5c60f1[_0x331f('0xac')]+'.png');_0x10b928[_0x331f('0x29')](_0x331f('0xb1'))['attr'](_0x331f('0xc'),_0x331f('0xb2')+_0x2ebe01+_0x331f('0xa4'));_0x10b928[_0x331f('0x29')](_0x331f('0xb3'))[_0x331f('0xb')](_0x331f('0xc'),_0x331f('0xb4')+_0x2ebe01+'.png');for(let _0xfa9f1b of PARAM_KEY){let _0x5886d0=_0x5c60f1[_0x331f('0x7c')+_0xfa9f1b];if(_0x5886d0===0x63){_0x10b928[_0x331f('0x29')]('.'+_0xfa9f1b)[_0x331f('0x42')]('?');}else{let _0x138930=BASE+Number(_0x5886d0)-Number(_0x3155be['NOW'+_0xfa9f1b]);_0x10b928[_0x331f('0x29')]('.'+_0xfa9f1b)['text'](_0x138930);if(_0x138930>0x0){_0x10b928['find']('.'+_0xfa9f1b)[_0x331f('0x10')](_0x331f('0x7d'));}else if(_0x138930<0x0){_0x10b928[_0x331f('0x29')]('.'+_0xfa9f1b)[_0x331f('0x10')](_0x331f('0x7e'));}}}_0x35026a[_0x331f('0x12')](_0x10b928);}let _0x5ddb69=$(_0x331f('0x4b'))[_0x331f('0xb5')]()[_0x331f('0x26')]+0x1;let _0x525d63=_0x331f('0xb6')+_0x5ddb69+_0x331f('0xb7');let _0x321cdc='<span\x20class=\x22char-winner\x20char\x20dot_mid\x20dot\x22\x20style=\x22'+getImgUrl(_0x331f('0xa3')+_0x996d39+_0x331f('0xa4'))+_0x331f('0xb8')+_0x29e3a8+_0x331f('0xb9');$(_0x331f('0x4b'))['append']($('<div>')[_0x331f('0x10')](_0x331f('0xba')+_0x29e3a8)['append'](_0x525d63+_0x321cdc));let _0xc919c0=$(_0x331f('0xbb'))[_0x331f('0x12')](_0x35026a);$(_0x331f('0x49'))['append'](_0xc919c0);}async function displayStyleInfo(_0x115eb6,_0x56b38d){let _0x18e23a=STYLE_MASTER[_0x56b38d];if(_0x18e23a===null){return;}$(_0x331f('0x28')+_0x115eb6)[_0x331f('0xb')](_0x331f('0x7b'),_0x56b38d);$(_0x331f('0x28')+_0x115eb6)[_0x331f('0x29')](_0x331f('0xbc'))[_0x331f('0x34')](function(){let _0x4ee8b8=$(this)[_0x331f('0xb')]('data-id');$(this)[_0x331f('0x30')]()[_0x331f('0x10')](_0x331f('0xbd'));if(_0x56b38d===_0x4ee8b8){$(this)['parent']()[_0x331f('0x9')](_0x331f('0xbd'));return;}});$(_0x331f('0x28')+_0x115eb6)['find'](_0x331f('0x7a'))[_0x331f('0x34')](function(){if($(this)['hasClass'](_0x331f('0xbe')+_0x56b38d)){$(this)[_0x331f('0x9')]('inputArea')[_0x331f('0xb')]('style',_0x331f('0xbf'));}else{$(this)[_0x331f('0x10')](_0x331f('0xc0'))[_0x331f('0xb')](_0x331f('0xd'),_0x331f('0xc1'));}});let _0x12372d=_0x18e23a[_0x331f('0xa1')];let _0x5a4abc=_0x12372d!==_0x331f('0xa2')?_0x12372d:_0x331f('0xc2');let _0x485697=$(_0x331f('0x28')+_0x115eb6)[_0x331f('0x29')](_0x331f('0x59'));_0x485697[_0x331f('0xb')](_0x331f('0xd'),getImgUrl('dot/'+_0x5a4abc+_0x331f('0xa4'))+dotStyle);if(_0x485697['length']>0x0){animeReset(_0x485697,_0x331f('0xc3'));}}function getSmallIcon(_0x733725){let _0x91f1d3=$(_0x331f('0xa9'))[_0x331f('0x10')](getStyleIconClass(_0x733725[_0x331f('0xac')])+_0x331f('0xc4'))[_0x331f('0xb')](_0x331f('0xd'),getImgUrl(_0x331f('0xaa')+_0x733725['Id']+_0x331f('0xa4')));let _0x3b3a8a=$(_0x331f('0xab'))[_0x331f('0x10')](getStyleIconBgClass(_0x733725[_0x331f('0xac')]))['attr'](_0x331f('0xd'),_0x331f('0xc5'))[_0x331f('0x12')](_0x91f1d3);return _0x3b3a8a;}function splitParam(_0x4c7e3a,_0x2bdd23){k=/,|\.|\s|\t/g;let _0x93d61b=_0x4c7e3a[_0x331f('0xc6')](k);if(_0x93d61b[_0x331f('0x26')]===0x1){_0x93d61b[0x0]=_0x4c7e3a[_0x331f('0x2f')](0x0,0x3);_0x93d61b[0x1]=_0x4c7e3a['substr'](0x3,0x2);_0x93d61b[0x2]=_0x4c7e3a[_0x331f('0x2f')](0x5,0x2);_0x93d61b[0x3]=_0x4c7e3a['substr'](0x7,0x2);_0x93d61b[0x4]=_0x4c7e3a[_0x331f('0x2f')](0x9,0x2);_0x93d61b[0x5]=_0x4c7e3a[_0x331f('0x2f')](0xb,0x2);_0x93d61b[0x6]=_0x4c7e3a[_0x331f('0x2f')](0xd,0x2);_0x93d61b[0x7]=_0x4c7e3a[_0x331f('0x2f')](0xf,0x2);_0x93d61b[0x8]=_0x4c7e3a[_0x331f('0x2f')](0x11,0x2);}for(let _0xb9254b=0x0;_0xb9254b<0x8;_0xb9254b++){if(_0x93d61b[_0xb9254b]===undefined||_0x93d61b[_0xb9254b]===''){_0x93d61b[_0xb9254b]=_0x2bdd23;}}return _0x93d61b;}function selectDotReset(_0x2fd18b){$('.dot'+_0x2fd18b[_0x331f('0xa1')])[_0x331f('0x9')](_0x331f('0xc3'))[_0x331f('0x10')](_0x331f('0x51'))[_0x331f('0x29')](_0x331f('0xc7'))[_0x331f('0x42')](_0x2fd18b[_0x331f('0xc8')]);}function selectDotHensei(_0x35639c){$(_0x331f('0xc9')+_0x35639c['DotId'])['removeClass'](_0x331f('0x51'))[_0x331f('0x9')](_0x331f('0x52'))[_0x331f('0x10')]('char-winner')['find'](_0x331f('0xc7'))[_0x331f('0x42')](_0x331f('0xca'));}