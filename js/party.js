var _0xcd23=['removeClass','d-none','<img>','attr','style','width:40px;\x20heidht:40px;\x20\x20\x20\x20border-radius:\x2050%;','displayName','\x20さん:ログイン中','addClass','append','PARTY','#charData','[data-toggle=\x22tooltip\x22]','tooltip','all','.initialHide','.initialShow','floor','getMonth','getDate','getHours','slice','getMinutes','<div>','まで</div>','#_icon_toku','first','char','CHAR','push','.charTmpl','.fukidashiInput','slideUp','ready','.filterList','click','.weaponList','href','substr','parent','hasClass','filterActive','.SeriesChoise','each','toggleClass','.tab-content','.paramButton','find','.charParam','data-pm','plus','val','.CHAR_SAVE','data-id','icon_btn_on','slideDown','icon_btn_off','change','parents','.charTable','data-charid','data-param','.char','text','.charInput','display:\x20block;','slideToggle','.btn_close','#PARTY_RESET','.charTableParent','#PARTY','remove','splice','database','goOnline','length','pop','char-loser','Holders','show','.inputArea','.style','NOW','.hanei','.allparams','event','party','#allSubmit','data-charId','HP:\x20','<br>','腕力:\x20','\x20体力:','器用さ:\x20','\x20素早さ:','知力:\x20','\x20精神:','\u3000愛:\x20','この内容を反映してもよろしいですか？','html','#modal01','fadeIn','#allParamConfirmInner','css','animation','modal\x200.5s\x20forwards','.modalClose','showModal','save','data-input','cancel','fadeOut','modalClose\x200.5s\x20forwards','.baseValue','.LIMIT','data-styleId','.limit','Limit','status_minus','status_plus','外伝2-3以降(+18)','外伝1(最大:+16)','VH12(最大:+15)','VH11(最大:+13)','VH10(最大:+11)','VH9(最大:+9)','VH415(最大:+0)','H712(最大:-2)','.SUM','.AVG','NOWHP','CHAR/','log','.styleInfoArea','removeAttr','charTmpl','.charName','Name','.charUnset','SUM','AVG','#insotsu','insotsu','name','roleType','#baby','baby','.insotsuLabel','for','.babyLabel','DotId','ID4e2c8','.png','.nowData','<button>','style_icon/','<span>','.STYLE_ICON','clone','LIMIT\x20limit','src','./img/icon/icon_','Rarity','.icn','./img/style_icon/','.cin','./img/style_cutin/','#JINKEI','children','<p\x20class=\x22series-button\x20text-center\x22\x20style=\x22width:30px;\x20margin-bottom:0px;\x22>','</p>','<span\x20class=\x22char-winner\x20char\x20dot_mid\x20dot\x22\x20style=\x22','dot/','JINKEI','<div\x20class=\x27charTableParent\x27>','opacity_nocheck','limit','border:\x201px\x20solid\x20#faf0b4','inputArea\x20d-lg-table-row','border:\x200px','ID4e2c9','_small','height:\x2030px;','split','.dot','char-aruku','.series-button','Series','char-winner','\x20margin-left:0px;\x20position:\x20relative;','https://nao-romasaga.github.io/party.html','TwitterAuthProvider','PROVIDER_ID','auth','AuthUI','start','#firebaseui-auth-container','hide'];(function(_0x458d88,_0x5798e7){var _0x482657=function(_0xa5709a){while(--_0xa5709a){_0x458d88['push'](_0x458d88['shift']());}};_0x482657(++_0x5798e7);}(_0xcd23,0x183));var _0x50cc=function(_0x396bc0,_0x204660){_0x396bc0=_0x396bc0-0x0;var _0x229f8b=_0xcd23[_0x396bc0];return _0x229f8b;};var BASE_SKILL_LIST=[];var USE_SKILL_LIST=[];var NOW_CHAR={};var NOW_CHAR_ID='';var NOW_STYLE={};var NOW_PARTY=0x0;var PARTY_LIST=[[]];var BASE=LIMIT_BASE;var UID;var dotStyle=_0x50cc('0x0');function _noLoginInitial(){var _0x580636={'signInSuccessUrl':_0x50cc('0x1'),'signInOptions':[firebase['auth'][_0x50cc('0x2')][_0x50cc('0x3')]]};var _0x540e84=new firebaseui[(_0x50cc('0x4'))][(_0x50cc('0x5'))](firebase['auth'](appUsers));_0x540e84[_0x50cc('0x6')](_0x50cc('0x7'),_0x580636);}async function _initial(){$('.noLogin')[_0x50cc('0x8')]();$('.isLogin')[_0x50cc('0x9')](_0x50cc('0xa'));$('#loginInfo')[_0x50cc('0x8')]();let _0x4b7a3e=$(_0x50cc('0xb'))['attr']('src',USER['photoURL'])[_0x50cc('0xc')](_0x50cc('0xd'),_0x50cc('0xe'));let _0x1d805d=USER[_0x50cc('0xf')]+_0x50cc('0x10');$('#firebaseui-auth-container')[_0x50cc('0x11')]('bg-white\x20kadomaru')[_0x50cc('0x12')](_0x4b7a3e)[_0x50cc('0x12')](_0x1d805d);await init();}async function init(){let _0x518b3e=readUserData(_0x50cc('0x13'),async function(_0x2ed612){if(_0x2ed612===null){PARTY_LIST=[[]];}else{PARTY_LIST=_0x2ed612;}});dispChar(CHAR_MASTER);$(_0x50cc('0x14'))['show']();$(_0x50cc('0x15'))[_0x50cc('0x16')]();await Promise[_0x50cc('0x17')]([_0x518b3e]);if(PARTY_LIST===null){return;}await renderParty();$(_0x50cc('0x18'))[_0x50cc('0x9')](_0x50cc('0xa'));$(_0x50cc('0x19'))['slideUp']();var _0x5a2daa=new Date();var _0xc7305f=Math[_0x50cc('0x1a')](_0x5a2daa['getTime']()/0x3e8);for(var _0x50fb8c in EVENT_ABILITY){if(_0x50fb8c>_0xc7305f){var _0x49fa36=new Date(_0x50fb8c*0x3e8);var _0x3d8623=_0x49fa36[_0x50cc('0x1b')]()+0x1;var _0x53951c=_0x49fa36[_0x50cc('0x1c')]();var _0x357cda=('0'+_0x49fa36[_0x50cc('0x1d')]())[_0x50cc('0x1e')](-0x2);var _0x56a644=('0'+_0x49fa36[_0x50cc('0x1f')]())[_0x50cc('0x1e')](-0x2);var _0x2affb9=$(_0x50cc('0x20'))['append']('<div>'+_0x3d8623+'/'+_0x53951c+'\x20'+_0x357cda+':'+_0x56a644+_0x50cc('0x21'));$(_0x50cc('0x22'))[_0x50cc('0x12')](_0x2affb9);for(var _0x449c35 of EVENT_ABILITY[_0x50fb8c]){$('#_icon_toku')['append']($('.'+_0x449c35)[_0x50cc('0x23')]()['clone']());}}}setLimitData();}async function renderParty(){let _0x4a8e4a=0x0;PARTY_LIST[0x0]=PARTY_LIST[0x0]['filter'](_0x58eac9=>CHAR_MASTER[_0x58eac9[_0x50cc('0x24')]]!==undefined);let _0x198554=PARTY_LIST[0x0][_0x4a8e4a];let _0x20d5c6=0x0;let _0x2f9e72=[];while(_0x198554!==undefined){let _0x28d144=_0x198554[_0x50cc('0x24')];let _0x18fb57=_0x198554[_0x50cc('0xd')];NOW_CHAR=CHAR_MASTER[_0x28d144];selectDotHensei(CHAR_MASTER[_0x28d144]);let _0x8d5ab9=asyncReadUserDataWithId(_0x50cc('0x25'),_0x28d144,async function(_0xf7faca){await displayCharInfo(CHAR_MASTER[_0x28d144],_0xf7faca);await displayStyleInfo(_0x28d144,_0x18fb57);if(_0x20d5c6===PARTY_LIST[0x0]['length']){}closeInput(_0x28d144,![]);});_0x2f9e72[_0x50cc('0x26')](_0x8d5ab9);_0x198554=PARTY_LIST[0x0][++_0x4a8e4a];}await Promise['all'](_0x2f9e72);}function closeInput(_0x3c9da5,_0x245692=![]){$(_0x50cc('0x27')+_0x3c9da5)['find'](_0x50cc('0x28'))[_0x50cc('0x29')](0xfa);if(_0x245692){saveCharData(_0x3c9da5);}}$(document)[_0x50cc('0x2a')](function(_0x5e0ff2){_0x5e0ff2(_0x50cc('0x2b'))[_0x50cc('0x2c')](function(){_0x5e0ff2(_0x50cc('0x2d'))[_0x50cc('0x11')](_0x50cc('0xa'));let _0x14306e=_0x5e0ff2(this)['attr'](_0x50cc('0x2e'))[_0x50cc('0x2f')](0x1);if(_0x5e0ff2(this)[_0x50cc('0x30')]()[_0x50cc('0x31')](_0x50cc('0x32'))){_0x5e0ff2(_0x50cc('0x33'))[_0x50cc('0x9')](_0x50cc('0xa'));_0x5e0ff2(_0x50cc('0x2b'))[_0x50cc('0x34')](function(){_0x5e0ff2(this)[_0x50cc('0x30')]()[_0x50cc('0x9')](_0x50cc('0x32'));});}else{_0x5e0ff2(_0x50cc('0x33'))[_0x50cc('0x11')](_0x50cc('0xa'));_0x5e0ff2('#_'+_0x14306e)[_0x50cc('0x9')](_0x50cc('0xa'));_0x5e0ff2(_0x50cc('0x2b'))[_0x50cc('0x34')](function(){_0x5e0ff2(this)['parent']()[_0x50cc('0x9')](_0x50cc('0x32'));});_0x5e0ff2(this)[_0x50cc('0x30')]()[_0x50cc('0x35')](_0x50cc('0x32'));}});initialHide();_0x5e0ff2(_0x50cc('0x36'))['on']('click',function(){});_0x5e0ff2(document)['on'](_0x50cc('0x2c'),_0x50cc('0x37'),function(){let _0x515bd5=_0x5e0ff2(this)['parent']()[_0x50cc('0x38')](_0x50cc('0x39'));let _0x1f6d8d=_0x5e0ff2(this)['attr'](_0x50cc('0x3a'))===_0x50cc('0x3b')?0x1:-0x1;let _0x27174d=_0x515bd5[_0x50cc('0x3c')]();let _0x30145e=Number(_0x27174d)+_0x1f6d8d;_0x515bd5[_0x50cc('0x3c')](_0x30145e);_0xf271e4(_0x5e0ff2(this),_0x30145e);});_0x5e0ff2(document)['on'](_0x50cc('0x2c'),_0x50cc('0x3d'),function(){let _0x1a67cd=_0x5e0ff2(this)['attr'](_0x50cc('0x3e'));_0x5e0ff2(this)[_0x50cc('0x9')](_0x50cc('0x3f'))['addClass']('icon_btn_off');_0x5e0ff2(this)['slideUp'](0xc8,function(){_0x5e0ff2(this)[_0x50cc('0x40')](0xc8);_0x5e0ff2(this)[_0x50cc('0x9')](_0x50cc('0x41'))[_0x50cc('0x11')](_0x50cc('0x3f'));_0x35494b(_0x1a67cd);saveCharData(_0x1a67cd);});});_0x5e0ff2(document)['on'](_0x50cc('0x42'),_0x50cc('0x39'),function(){_0xf271e4(_0x5e0ff2(this),_0x5e0ff2(this)[_0x50cc('0x3c')]());});function _0xf271e4(_0x5c5aea,_0x5c72b7){let _0x5b5063=_0x5c5aea[_0x50cc('0x43')](_0x50cc('0x44'));let _0x5db892=_0x5b5063[_0x50cc('0xc')](_0x50cc('0x45'));let _0x3a71e5=_0x5c5aea[_0x50cc('0xc')](_0x50cc('0x46'));_0x5e0ff2(_0x50cc('0x47')+_0x3a71e5+_0x5db892)[_0x50cc('0x34')](function(){_0x5e0ff2(this)[_0x50cc('0x48')](_0x5c72b7);});_0x5e0ff2(_0x50cc('0x49')+_0x3a71e5+_0x5db892)[_0x50cc('0x34')](function(){_0x5e0ff2(this)[_0x50cc('0x3c')](_0x5c72b7);});_0x35494b(_0x5db892);}_0x5e0ff2(_0x50cc('0x15'))[_0x50cc('0x16')]();_0x5e0ff2(document)['on']('click','.openMenu,\x20.nowData\x20>\x20td',function(){setLimitData();let _0x334377=_0x5e0ff2(this)[_0x50cc('0xc')](_0x50cc('0x3e'))!==undefined?_0x5e0ff2(this)[_0x50cc('0xc')]('data-id'):_0x5e0ff2(this)[_0x50cc('0x30')]()[_0x50cc('0xc')](_0x50cc('0x3e'));NOW_CHAR=CHAR_MASTER[_0x334377];let _0x17058b=_0x5e0ff2('.charTmpl'+_0x334377)[_0x50cc('0x38')](_0x50cc('0x28'))[_0x50cc('0xc')](_0x50cc('0xd'));if(_0x17058b===_0x50cc('0x4a')){saveCharData(_0x334377);}_0x5e0ff2(_0x50cc('0x27')+_0x334377)[_0x50cc('0x38')](_0x50cc('0x28'))[_0x50cc('0x4b')](0xfa);});_0x5e0ff2(document)['on']('click',_0x50cc('0x4c'),function(){closeInput(_0x5e0ff2(this)[_0x50cc('0xc')]('data-id'),!![]);});_0x5e0ff2(document)['on'](_0x50cc('0x2c'),_0x50cc('0x4d'),function(){var _0x5abb25=[];for(let _0x5c2a01 in PARTY_LIST[NOW_PARTY]){var _0x4a3fc1=PARTY_LIST[NOW_PARTY][_0x5c2a01][_0x50cc('0x24')];_0x5abb25[_0x50cc('0x26')](_0x4a3fc1);}for(_0x4a3fc1 of _0x5abb25){_0x25f868(_0x4a3fc1);}});_0x5e0ff2(document)['on'](_0x50cc('0x2c'),'.charUnset',function(){let _0x44f30c=_0x5e0ff2(this)[_0x50cc('0xc')](_0x50cc('0x3e'));_0x25f868(_0x44f30c);});function _0x25f868(_0x27b23c){let _0x2d0583=CHAR_MASTER[_0x27b23c];_0x5e0ff2(_0x50cc('0x27')+_0x27b23c)[_0x50cc('0x43')](_0x50cc('0x4e'))[_0x50cc('0x29')](0x1f4);selectDotReset(_0x2d0583);_0x5e0ff2(_0x50cc('0x4f'))[_0x50cc('0x38')]('.charTmpl'+_0x27b23c)['remove']();_0x5e0ff2('#JINKEI'+_0x27b23c)[_0x50cc('0x50')]();let _0x260e8e=_0x1ee9cb(_0x27b23c);if(_0x260e8e!==-0x1){PARTY_LIST[NOW_PARTY][_0x50cc('0x51')](_0x260e8e,0x1);}_0x481578();saveCharData(_0x27b23c);}function _0x1ee9cb(_0x3e1d38){for(let _0x169fe0 in PARTY_LIST[NOW_PARTY]){if(PARTY_LIST[NOW_PARTY][_0x169fe0][_0x50cc('0x24')]===_0x3e1d38){return _0x169fe0;}}return-0x1;}_0x5e0ff2(document)['on'](_0x50cc('0x2c'),'.tab-content\x20.char,\x20.weaponList\x20\x20.char',async function(){firebase[_0x50cc('0x52')]()[_0x50cc('0x53')]();firebase['database'](appUsers)[_0x50cc('0x53')]();let _0x46c680=_0x5e0ff2(this)['attr'](_0x50cc('0x3e'));let _0x414db4=_0x1ee9cb(_0x46c680);if(PARTY_LIST[NOW_PARTY][_0x50cc('0x54')]>=PARTY_LIMIT||_0x414db4!==-0x1){while(PARTY_LIST[NOW_PARTY][_0x50cc('0x54')]>PARTY_LIMIT){let _0x4f61fa=PARTY_LIST[NOW_PARTY][_0x50cc('0x54')];let _0x551821=PARTY_LIST[NOW_PARTY][_0x4f61fa-0x1][_0x50cc('0x24')];_0x25f868(_0x551821);PARTY_LIST[NOW_PARTY][_0x50cc('0x55')]();}_0x5e0ff2(this)[_0x50cc('0x9')]('char-aruku')[_0x50cc('0x11')](_0x50cc('0x56'));return;}if(NOW_CHAR['Id']!==undefined){closeInput(NOW_CHAR['Id'],!![]);}NOW_CHAR=CHAR_MASTER[_0x46c680];let _0x1dfdd6=NOW_CHAR[_0x50cc('0x57')][0x0];NOW_STYLE=STYLE_MASTER[_0x1dfdd6];PARTY_LIST[NOW_PARTY][_0x50cc('0x26')]({'char':_0x46c680,'style':_0x1dfdd6});_0x5e0ff2('.styleInfoArea')[_0x50cc('0x58')]();selectDotHensei(NOW_CHAR);readUserDataWithId('CHAR',_0x46c680,async function(_0x5ebc23){await displayCharInfo(CHAR_MASTER[_0x46c680],_0x5ebc23);await displayStyleInfo(NOW_CHAR['Id'],_0x1dfdd6);_0x5e0ff2(_0x50cc('0x27')+_0x46c680)['find'](_0x50cc('0x59'))['removeClass'](_0x50cc('0xa'))['slideDown'](0x1f4);setLimitData();_0x481578();});_0x5e0ff2('[data-toggle=\x22tooltip\x22]')[_0x50cc('0x16')]();});_0x5e0ff2(document)['on'](_0x50cc('0x2c'),_0x50cc('0x5a'),async function(){let _0x2c52aa=_0x5e0ff2(this)[_0x50cc('0xc')](_0x50cc('0x3e'));NOW_STYLE=STYLE_MASTER[_0x2c52aa];await displayStyleInfo(NOW_CHAR['Id'],_0x2c52aa);let _0x271831=_0x1ee9cb(NOW_CHAR['Id']);PARTY_LIST[NOW_PARTY][_0x271831][_0x50cc('0xd')]=_0x2c52aa;_0x481578();});function _0x35494b(_0x3928f6){let _0x33e8cc=_0x3928f6===undefined?NOW_CHAR['Id']:_0x3928f6;for(let _0x453505 of PARAM_KEY_HP){let _0x1d6a3d=_0x5e0ff2(_0x50cc('0x47')+_0x453505+_0x33e8cc)[_0x50cc('0x23')]()[_0x50cc('0x48')]();CHAR_MASTER[_0x33e8cc][_0x50cc('0x5b')+_0x453505]=Number(_0x1d6a3d);}if(NOW_CHAR_ID!==_0x33e8cc){if(NOW_CHAR_ID!==''){saveCharData(NOW_CHAR_ID);}NOW_CHAR_ID=_0x33e8cc;}setLimitData();}function _0x481578(){updateData(_0x50cc('0x13'),PARTY_LIST);}_0x5e0ff2(document)['on'](_0x50cc('0x2c'),_0x50cc('0x5c'),function(){_0x23cfe2(_0x5e0ff2(this)[_0x50cc('0x30')]()['find'](_0x50cc('0x5d')));});_0x5e0ff2(document)['on']('change','.allparams',function(){_0x23cfe2(_0x5e0ff2(this));});function _0x23cfe2(_0x4b6751){gtag(_0x50cc('0x5e'),'showModal',{'event_category':_0x50cc('0x5f'),'event_label':_0x50cc('0x58'),'value':0x1});_0x5e0ff2('#allSubmit')[_0x50cc('0xc')]('data-input',_0x5e0ff2(_0x4b6751)[_0x50cc('0x3c')]());_0x5e0ff2(_0x50cc('0x60'))[_0x50cc('0xc')](_0x50cc('0x61'),_0x5e0ff2(_0x4b6751)[_0x50cc('0xc')]('data-id'));let _0x5957c9=splitParam(_0x5e0ff2(_0x4b6751)[_0x50cc('0x3c')](),'不明');let _0xc5011c='';_0xc5011c+=_0x50cc('0x62')+_0x5957c9[0x0]+_0x50cc('0x63');_0xc5011c+=_0x50cc('0x64')+_0x5957c9[0x1]+_0x50cc('0x65')+_0x5957c9[0x2]+_0x50cc('0x63');_0xc5011c+=_0x50cc('0x66')+_0x5957c9[0x3]+_0x50cc('0x67')+_0x5957c9[0x4]+_0x50cc('0x63');_0xc5011c+=_0x50cc('0x68')+_0x5957c9[0x5]+_0x50cc('0x69')+_0x5957c9[0x6]+_0x50cc('0x63');_0xc5011c+=_0x50cc('0x6a')+_0x5957c9[0x7]+'\x20魅力:'+_0x5957c9[0x8]+_0x50cc('0x63');_0xc5011c+='が入力されました<br>';_0xc5011c+=_0x50cc('0x6b');_0x5e0ff2('#allParamConfirm')[_0x50cc('0x6c')](_0xc5011c);_0x5e0ff2(_0x50cc('0x6d'))[_0x50cc('0x6e')]();_0x5e0ff2(_0x50cc('0x6f'))[_0x50cc('0x70')](_0x50cc('0x71'),_0x50cc('0x72'));return![];}_0x5e0ff2(_0x50cc('0x73'))[_0x50cc('0x2c')](function(){if(_0x5e0ff2(this)[_0x50cc('0xc')](_0x50cc('0x3e'))==='ok'){gtag(_0x50cc('0x5e'),_0x50cc('0x74'),{'event_category':'party','event_label':_0x50cc('0x75'),'value':0x1});let _0x21ec56=_0x5e0ff2(this)[_0x50cc('0xc')](_0x50cc('0x61'));let _0x19dd62=splitParam(_0x5e0ff2(this)[_0x50cc('0xc')](_0x50cc('0x76')),0x0);for(let _0x45ac90 in _0x19dd62){_0x5e0ff2(_0x50cc('0x49')+PARAM_KEY_HP[_0x45ac90]+_0x21ec56)[_0x50cc('0x34')](function(_0x40329a,_0x32fe8a){_0x5e0ff2(_0x32fe8a)[_0x50cc('0x3c')](_0x19dd62[_0x45ac90]);});_0x5e0ff2(_0x50cc('0x47')+PARAM_KEY_HP[_0x45ac90]+_0x21ec56)[_0x50cc('0x34')](function(_0x1529b2,_0x5b1e8a){_0x5e0ff2(_0x5b1e8a)['text'](_0x19dd62[_0x45ac90]);});}_0x35494b();}else{gtag(_0x50cc('0x5e'),_0x50cc('0x74'),{'event_category':'party','event_label':_0x50cc('0x77'),'value':0x1});}_0x5e0ff2(_0x50cc('0x6d'))[_0x50cc('0x78')]();_0x5e0ff2(_0x50cc('0x6f'))[_0x50cc('0x70')](_0x50cc('0x71'),_0x50cc('0x79'));return![];});_0x5e0ff2('.baseValue')[_0x50cc('0x2c')](function(){_0x5e0ff2(_0x50cc('0x7a'))['each'](function(){_0x5e0ff2(this)[_0x50cc('0x9')](_0x50cc('0x41'));_0x5e0ff2(this)[_0x50cc('0x11')](_0x50cc('0x3f'));});_0x5e0ff2(this)[_0x50cc('0x11')](_0x50cc('0x41'));BASE=Number(_0x5e0ff2(this)[_0x50cc('0xc')](_0x50cc('0x3e')));setLimitData();});});function setLimitData(){$(_0x50cc('0x7b'))[_0x50cc('0x34')](async function(){let _0x149c4c=$(this)[_0x50cc('0xc')](_0x50cc('0x7c'));let _0x46b5dc=STYLE_MASTER[_0x149c4c];let _0x339ea6=$(_0x50cc('0x7d')+_0x149c4c);let _0x53a782=_0x339ea6[_0x50cc('0xc')](_0x50cc('0x61'));let _0x231807=0x0;for(let _0x393edb of PARAM_KEY){let _0x3a29be=_0x46b5dc[_0x50cc('0x7e')+_0x393edb];let _0x461a98=CHAR_MASTER[_0x53a782][_0x50cc('0x5b')+_0x393edb]!==undefined?CHAR_MASTER[_0x53a782][_0x50cc('0x5b')+_0x393edb]:CHAR_MASTER[_0x53a782][_0x393edb];_0x231807+=_0x461a98;let _0x3482a1=_0x46b5dc[_0x50cc('0x7e')+_0x393edb]!==0x63?BASE+Number(_0x3a29be)-Number(_0x461a98):'?';_0x339ea6[_0x50cc('0x38')]('.'+_0x393edb)[_0x50cc('0x34')](function(){$(this)['removeClass']('status_plus')[_0x50cc('0x9')](_0x50cc('0x7f'));if(_0x3482a1==='?'){}else if(_0x3482a1>0x0){$(this)[_0x50cc('0x11')](_0x50cc('0x80'));}else if(_0x3482a1<0x0){$(this)[_0x50cc('0x11')](_0x50cc('0x7f'));}$(this)[_0x50cc('0x48')](_0x3482a1);});}let _0x1e3c46=(_0x231807-0x171)/0x8;let _0x304afa='+'+_0x1e3c46;if(_0x231807===0x171){_0x304afa=0x0;}else if(_0x1e3c46<0x0){_0x304afa=_0x1e3c46;}let _0x1f43d1='遠征';if(_0x1e3c46>=0x12){_0x1f43d1='VH13以降(+21)';}else if(_0x1e3c46>0x10){_0x1f43d1=_0x50cc('0x81');}else if(_0x1e3c46>0xf){_0x1f43d1='外伝1-5以降(+17)';}else if(_0x1e3c46>0xe){_0x1f43d1=_0x50cc('0x82');}else if(_0x1e3c46>0xc){_0x1f43d1=_0x50cc('0x83');}else if(_0x1e3c46>0x8){_0x1f43d1=_0x50cc('0x84');}else if(_0x1e3c46>0x5){_0x1f43d1=_0x50cc('0x85');}else if(_0x1e3c46>0x0){_0x1f43d1=_0x50cc('0x86');}else if(_0x1e3c46>-0x3){_0x1f43d1=_0x50cc('0x87');}else if(_0x1e3c46>-0x6){_0x1f43d1=_0x50cc('0x88');}$(_0x50cc('0x89')+_0x53a782)[_0x50cc('0x48')](_0x231807);$(_0x50cc('0x8a')+_0x53a782)[_0x50cc('0x48')](_0x304afa);$('.RECO'+_0x53a782)[_0x50cc('0x48')](_0x1f43d1);});}function saveCharData(_0x51cf0e){update={};let _0x8619b7=0x0;for(let _0xfd62ad of PARAM_KEY){let _0x47ae33=Number(CHAR_MASTER[_0x51cf0e][_0x50cc('0x5b')+_0xfd62ad]);_0x47ae33=isNaN(_0x47ae33)||_0x47ae33>LIMIT_BASE+0x10?0x0:_0x47ae33;_0x8619b7+=_0x47ae33;update[_0xfd62ad]=_0x47ae33;}let _0x27e1fd=Number(CHAR_MASTER[_0x51cf0e][_0x50cc('0x8b')]);update['HP']=isNaN(_0x27e1fd)||_0x27e1fd>0x3a2?0x0:_0x27e1fd;if(_0x8619b7>0x0){updateData(_0x50cc('0x8c')+_0x51cf0e,update);gtag('event','saveChar',{'event_category':_0x50cc('0x5f'),'event_label':CHAR_MASTER[_0x51cf0e]['Name'],'value':0x1});}else{console[_0x50cc('0x8d')]('合計値が0のため保存をスキップしました。',update);}}function initialHide(){$('#charData')[_0x50cc('0x8')]();$('.tabArea')[_0x50cc('0x8')]();$(_0x50cc('0x8e'))[_0x50cc('0x8')]();}async function displayCharInfo(_0x18838b,_0xf8a56c){let _0x34e587=_0x18838b['Id'];let _0x108ea9=$('#CHAR_TEMPLATE')['clone']()[_0x50cc('0x9')](_0x50cc('0xa'))[_0x50cc('0x8f')]('id')[_0x50cc('0x11')](_0x50cc('0x90')+_0x34e587)[_0x50cc('0xc')](_0x50cc('0x61'),_0x34e587);_0x108ea9['find'](_0x50cc('0x91'))[_0x50cc('0x6c')](_0x18838b[_0x50cc('0x92')]);_0x108ea9[_0x50cc('0x38')]('.icon_btn_on')[_0x50cc('0xc')]('data-id',_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x93'))[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587);_0x108ea9['find']('.openMenu')[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587);_0x108ea9[_0x50cc('0x38')]('.char')[_0x50cc('0x30')]()[_0x50cc('0xc')]('data-id',_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x5d'))['attr']('data-id',_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x3d'))[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x89'))[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587)[_0x50cc('0x11')](_0x50cc('0x94')+_0x34e587);_0x108ea9['find'](_0x50cc('0x8a'))[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587)['addClass'](_0x50cc('0x95')+_0x34e587);_0x108ea9[_0x50cc('0x38')]('.RECO')[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587)[_0x50cc('0x11')]('RECO'+_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x96'))[_0x50cc('0x30')]()[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x96'))[_0x50cc('0xc')]('id',_0x50cc('0x97')+_0x34e587)[_0x50cc('0xc')](_0x50cc('0x98'),_0x50cc('0x99')+_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x9a'))[_0x50cc('0xc')]('id',_0x50cc('0x9b')+_0x34e587)[_0x50cc('0xc')](_0x50cc('0x98'),_0x50cc('0x99')+_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x9c'))['attr'](_0x50cc('0x9d'),'insotsu'+_0x34e587);_0x108ea9[_0x50cc('0x38')](_0x50cc('0x9e'))[_0x50cc('0xc')](_0x50cc('0x9d'),'baby'+_0x34e587);let _0x1ef5ff=_0x18838b[_0x50cc('0x9f')];let _0x1c294f=_0x1ef5ff!==_0x50cc('0xa0')?_0x1ef5ff:'ID4e2c9';let _0x39b05f=getImgUrl('dot/'+_0x1c294f+_0x50cc('0xa1'))+dotStyle;_0x108ea9[_0x50cc('0x38')]('.dot_mid')[_0x50cc('0xc')](_0x50cc('0xd'),_0x39b05f);if(_0xf8a56c!==null){for(let _0xfbbd19 of PARAM_KEY_HP){_0x18838b['NOW'+_0xfbbd19]=Number(_0xf8a56c[_0xfbbd19]);}}else if(_0xf8a56c===null){for(let _0x1022b9 of PARAM_KEY){_0x18838b[_0x50cc('0x5b')+_0x1022b9]=0x0;}}let _0x1f1316=_0x108ea9['find'](_0x50cc('0xa2'));_0x1f1316[_0x50cc('0xc')](_0x50cc('0x3e'),_0x34e587);for(let _0x201fe7 of PARAM_KEY_HP){_0x108ea9[_0x50cc('0x38')]('.char'+_0x201fe7)[_0x50cc('0x9')](_0x50cc('0x24')+_0x201fe7)[_0x50cc('0x11')]('charInput'+_0x201fe7+_0x34e587)[_0x50cc('0x3c')](_0x18838b[_0x50cc('0x5b')+_0x201fe7]);_0x1f1316[_0x50cc('0x38')]('.'+_0x201fe7)['removeClass'](_0x50cc('0x24')+_0x201fe7)[_0x50cc('0x11')](_0x50cc('0x24')+_0x201fe7+_0x34e587)[_0x50cc('0x48')](_0x18838b[_0x50cc('0x5b')+_0x201fe7]);}for(let _0x976695 of _0x18838b[_0x50cc('0x57')]){let _0xda4a36=STYLE_MASTER[_0x976695];let _0x5d1285=$(_0x50cc('0xa3'))[_0x50cc('0x11')](_0x50cc('0xd'))[_0x50cc('0x11')](getStyleIconClass(_0xda4a36['Rarity']))[_0x50cc('0xc')]('style',getImgUrl(_0x50cc('0xa4')+_0x976695+_0x50cc('0xa1')))['attr'](_0x50cc('0x3e'),_0x976695);let _0x3fdeb2=$(_0x50cc('0xa5'))[_0x50cc('0x11')](getStyleIconBgClass(_0xda4a36['Rarity']))[_0x50cc('0x12')](_0x5d1285);_0x108ea9['find'](_0x50cc('0xa6'))[_0x50cc('0x12')](_0x3fdeb2);let _0x3f6619=$('#LIMIT_TEMPLATE')[_0x50cc('0xa7')]()[_0x50cc('0x9')](_0x50cc('0xa'))[_0x50cc('0x8f')]('id')[_0x50cc('0x11')](_0x50cc('0xa8')+_0x976695)[_0x50cc('0xc')](_0x50cc('0x7c'),_0x976695)[_0x50cc('0xc')](_0x50cc('0x61'),_0x34e587);_0x3f6619[_0x50cc('0x38')]('.rare')[_0x50cc('0xc')](_0x50cc('0xa9'),_0x50cc('0xaa')+_0xda4a36[_0x50cc('0xab')]+_0x50cc('0xa1'));_0x3f6619['find'](_0x50cc('0xac'))[_0x50cc('0xc')](_0x50cc('0xa9'),_0x50cc('0xad')+_0x976695+_0x50cc('0xa1'));_0x3f6619[_0x50cc('0x38')](_0x50cc('0xae'))[_0x50cc('0xc')](_0x50cc('0xa9'),_0x50cc('0xaf')+_0x976695+_0x50cc('0xa1'));for(let _0x201fe7 of PARAM_KEY){let _0x53b9ac=_0xda4a36[_0x50cc('0x7e')+_0x201fe7];if(_0x53b9ac===0x63){_0x3f6619['find']('.'+_0x201fe7)[_0x50cc('0x48')]('?');}else{let _0x102cf2=BASE+Number(_0x53b9ac)-Number(_0x18838b[_0x50cc('0x5b')+_0x201fe7]);_0x3f6619[_0x50cc('0x38')]('.'+_0x201fe7)[_0x50cc('0x48')](_0x102cf2);if(_0x102cf2>0x0){_0x3f6619[_0x50cc('0x38')]('.'+_0x201fe7)['addClass'](_0x50cc('0x80'));}else if(_0x102cf2<0x0){_0x3f6619[_0x50cc('0x38')]('.'+_0x201fe7)[_0x50cc('0x11')]('status_minus');}}}_0x108ea9[_0x50cc('0x12')](_0x3f6619);}let _0x37d224=$(_0x50cc('0xb0'))[_0x50cc('0xb1')]()['length']+0x1;let _0x392360=_0x50cc('0xb2')+_0x37d224+_0x50cc('0xb3');let _0xfcab4f=_0x50cc('0xb4')+getImgUrl(_0x50cc('0xb5')+_0x1c294f+_0x50cc('0xa1'))+'\x22\x20data-charId=\x27'+_0x34e587+'\x27\x20data-styleId=\x27\x27></span>';$('#JINKEI')[_0x50cc('0x12')]($(_0x50cc('0x20'))[_0x50cc('0x11')](_0x50cc('0xb6')+_0x34e587)[_0x50cc('0x12')](_0x392360+_0xfcab4f));let _0x483f04=$(_0x50cc('0xb7'))[_0x50cc('0x12')](_0x108ea9);$(_0x50cc('0x4f'))[_0x50cc('0x12')](_0x483f04);}async function displayStyleInfo(_0x4a3af9,_0x3b16f5){let _0x2a31d8=STYLE_MASTER[_0x3b16f5];if(_0x2a31d8===null){return;}$(_0x50cc('0x27')+_0x4a3af9)[_0x50cc('0xc')](_0x50cc('0x7c'),_0x3b16f5);$(_0x50cc('0x27')+_0x4a3af9)[_0x50cc('0x38')](_0x50cc('0x5a'))[_0x50cc('0x34')](function(){let _0x190185=$(this)['attr'](_0x50cc('0x3e'));$(this)[_0x50cc('0x30')]()[_0x50cc('0x11')]('opacity_nocheck');if(_0x3b16f5===_0x190185){$(this)[_0x50cc('0x30')]()[_0x50cc('0x9')](_0x50cc('0xb8'));return;}});$(_0x50cc('0x27')+_0x4a3af9)[_0x50cc('0x38')](_0x50cc('0x7b'))[_0x50cc('0x34')](function(){if($(this)[_0x50cc('0x31')](_0x50cc('0xb9')+_0x3b16f5)){$(this)[_0x50cc('0x9')]('inputArea')[_0x50cc('0xc')](_0x50cc('0xd'),_0x50cc('0xba'));}else{$(this)[_0x50cc('0x11')](_0x50cc('0xbb'))[_0x50cc('0xc')](_0x50cc('0xd'),_0x50cc('0xbc'));}});let _0x4c185c=_0x2a31d8[_0x50cc('0x9f')];let _0x23a502=_0x4c185c!==_0x50cc('0xa0')?_0x4c185c:_0x50cc('0xbd');let _0x1d8811=$(_0x50cc('0x27')+_0x4a3af9)[_0x50cc('0x38')](_0x50cc('0x47'));_0x1d8811[_0x50cc('0xc')]('style',getImgUrl('dot/'+_0x23a502+_0x50cc('0xa1'))+dotStyle);if(_0x1d8811[_0x50cc('0x54')]>0x0){animeReset(_0x1d8811,'char-winner');}}function getSmallIcon(_0x2f75a2){let _0x1d4f51=$(_0x50cc('0xa3'))[_0x50cc('0x11')](getStyleIconClass(_0x2f75a2[_0x50cc('0xab')])+_0x50cc('0xbe'))[_0x50cc('0xc')](_0x50cc('0xd'),getImgUrl(_0x50cc('0xa4')+_0x2f75a2['Id']+_0x50cc('0xa1')));let _0xb2fe1d=$(_0x50cc('0xa5'))[_0x50cc('0x11')](getStyleIconBgClass(_0x2f75a2[_0x50cc('0xab')]))[_0x50cc('0xc')]('style',_0x50cc('0xbf'))[_0x50cc('0x12')](_0x1d4f51);return _0xb2fe1d;}function splitParam(_0x4772f2,_0xd21fdd){k=/,|\.|\s|\t/g;let _0x5ae3ad=_0x4772f2[_0x50cc('0xc0')](k);if(_0x5ae3ad['length']===0x1){_0x5ae3ad[0x0]=_0x4772f2[_0x50cc('0x2f')](0x0,0x3);_0x5ae3ad[0x1]=_0x4772f2[_0x50cc('0x2f')](0x3,0x2);_0x5ae3ad[0x2]=_0x4772f2[_0x50cc('0x2f')](0x5,0x2);_0x5ae3ad[0x3]=_0x4772f2['substr'](0x7,0x2);_0x5ae3ad[0x4]=_0x4772f2[_0x50cc('0x2f')](0x9,0x2);_0x5ae3ad[0x5]=_0x4772f2['substr'](0xb,0x2);_0x5ae3ad[0x6]=_0x4772f2['substr'](0xd,0x2);_0x5ae3ad[0x7]=_0x4772f2['substr'](0xf,0x2);_0x5ae3ad[0x8]=_0x4772f2[_0x50cc('0x2f')](0x11,0x2);}for(let _0x3eb568=0x0;_0x3eb568<0x8;_0x3eb568++){if(_0x5ae3ad[_0x3eb568]===undefined||_0x5ae3ad[_0x3eb568]===''){_0x5ae3ad[_0x3eb568]=_0xd21fdd;}}return _0x5ae3ad;}function selectDotReset(_0x4f1ee6){$(_0x50cc('0xc1')+_0x4f1ee6[_0x50cc('0x9f')])[_0x50cc('0x9')]('char-winner')['addClass'](_0x50cc('0xc2'))[_0x50cc('0x38')](_0x50cc('0xc3'))[_0x50cc('0x48')](_0x4f1ee6[_0x50cc('0xc4')]);}function selectDotHensei(_0xadac12){$(_0x50cc('0xc1')+_0xadac12[_0x50cc('0x9f')])[_0x50cc('0x9')](_0x50cc('0xc2'))[_0x50cc('0x9')](_0x50cc('0x56'))[_0x50cc('0x11')](_0x50cc('0xc5'))[_0x50cc('0x38')](_0x50cc('0xc3'))[_0x50cc('0x48')]('編成中');}