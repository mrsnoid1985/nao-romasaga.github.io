var _0x5dcd=['\x20体力:','器用さ:\x20','知力:\x20','\x20精神:','\u3000愛:\x20','\x20魅力:','この内容を反映してもよろしいですか？','#allParamConfirm','#modal01','css','animation','modal\x200.5s\x20forwards','.modalClose','save','data-charId','cancel','fadeOut','#allParamConfirmInner','modalClose\x200.5s\x20forwards','.LIMIT','data-styleId','.limit','Limit','status_plus','status_minus','status_question','Ind','<img\x20src=\x22./img/icon/icon_ind_','.png\x22\x20height=\x2215\x22>','Seicho','VH14以降(+25)','VH13以降(+21)','外伝1(最大:+16)','VH12(最大:+15)','VH11(最大:+13)','VH10(最大:+11)','VH9(最大:+9)','VH415(最大:+0)','.SUM','.AVG','.RECO','NOWHP','Name','.tabArea','#CHAR_TEMPLATE','removeAttr','charTmpl','.charName','.icon_btn_on','.openMenu','SUM','AVG','STYLE_SEICHO','DotId','ID4e2c8','dot/','.nowData','charInput','<button>','Rarity','style_icon/','.png','<span>','.STYLE_ICON','#LIMIT_TEMPLATE','LIMIT\x20limit','.rare','.icn','./img/style_icon/','.cin','./img/style_cutin/','Fix','fuchidoriYellow\x20kari-bgcolor','#STYLE_SEICHO','<div\x20class=\x27charTableParent\x27>','.style','opacity_nocheck','true','limit','inputArea\x20partyOtherStyle\x20d-none','partyNowStyle','inputArea\x20partyOtherStyle','ID4e2c9','char-winner','_small','height:\x2030px;','.dot','.series-button','編成中','\x20margin-left:0px;\x20position:\x20relative;','https://nao-romasaga.github.io/party.html','auth','TwitterAuthProvider','PROVIDER_ID','AuthUI','start','#firebaseui-auth-container','hide','removeClass','#loginInfo','<img>','attr','src','photoURL','style','width:40px;\x20heidht:40px;\x20\x20\x20\x20border-radius:\x2050%;','displayName','\x20さん:ログイン中','addClass','bg-white\x20kadomaru','append','PARTY','#charData','show','[data-toggle=\x22tooltip\x22]','tooltip','all','.initialHide','d-none','.initialShow','slideUp','floor','getTime','getMonth','slice','getMinutes','<div>','まで</div>','#_icon_toku','first','clone','CHAR','length','.charTmpl','find','.fukidashiInput','ready','click','data-href','substr','parent','hasClass','filterActive','.SeriesChoise','each','.filterList','toggleClass','.tab-content','.CHAR_SAVE','data-id','icon_btn_on','icon_btn_off','slideDown','.paramButton','.charParam','data-pm','plus','val','change','parents','.charTable','data-charid','data-param','.char','text','.charInput','.openMenu,\x20.nowData\x20>\x20td','display:\x20block;','slideToggle','.btn_close','#PARTY_RESET','char','push','#STYLE_DISP','data-hide','html','未選択スタイルを表示','status-bgcolor','.charTableParent','remove','splice','.tab-content\x20.char,\x20.weaponList\x20\x20.char','goOnline','database','char-aruku','char-loser','Holders','.styleInfoArea','.inputArea','log','NOW','.hanei','.allparams','event','showModal','party','#allSubmit','data-input','HP:\x20','<br>','腕力:\x20'];(function(_0x1dbc25,_0x3a4286){var _0xd7d5a2=function(_0x2a1ca9){while(--_0x2a1ca9){_0x1dbc25['push'](_0x1dbc25['shift']());}};_0xd7d5a2(++_0x3a4286);}(_0x5dcd,0x1eb));var _0x2501=function(_0x15a272,_0x516b6a){_0x15a272=_0x15a272-0x0;var _0x4dd628=_0x5dcd[_0x15a272];return _0x4dd628;};var BASE_SKILL_LIST=[];var USE_SKILL_LIST=[];var NOW_CHAR={};var NOW_CHAR_ID='';var NOW_STYLE={};var NOW_PARTY=0x0;var PARTY_LIST=[[]];var BASE=LIMIT_BASE;var UID;var dotStyle=_0x2501('0x0');function _noLoginInitial(){var _0x32f1bb={'signInSuccessUrl':_0x2501('0x1'),'signInOptions':[firebase[_0x2501('0x2')][_0x2501('0x3')][_0x2501('0x4')]]};var _0x2cc85f=new firebaseui['auth'][(_0x2501('0x5'))](firebase[_0x2501('0x2')](appUsers));_0x2cc85f[_0x2501('0x6')](_0x2501('0x7'),_0x32f1bb);}async function _initial(){$('.noLogin')[_0x2501('0x8')]();$('.isLogin')[_0x2501('0x9')]('d-none');$(_0x2501('0xa'))[_0x2501('0x8')]();let _0x5b16c0=$(_0x2501('0xb'))[_0x2501('0xc')](_0x2501('0xd'),USER[_0x2501('0xe')])[_0x2501('0xc')](_0x2501('0xf'),_0x2501('0x10'));let _0x59739f=USER[_0x2501('0x11')]+_0x2501('0x12');$(_0x2501('0x7'))[_0x2501('0x13')](_0x2501('0x14'))['append'](_0x5b16c0)[_0x2501('0x15')](_0x59739f);await init();}async function init(){let _0x3b8b76=readUserData(_0x2501('0x16'),async function(_0x430754){if(_0x430754===null){PARTY_LIST=[[]];}else{PARTY_LIST=_0x430754;}});dispChar(CHAR_MASTER);$(_0x2501('0x17'))[_0x2501('0x18')]();$(_0x2501('0x19'))[_0x2501('0x1a')]();await Promise[_0x2501('0x1b')]([_0x3b8b76]);if(PARTY_LIST===null){return;}await renderParty();$(_0x2501('0x1c'))[_0x2501('0x9')](_0x2501('0x1d'));$(_0x2501('0x1e'))[_0x2501('0x1f')]();var _0x24ca42=new Date();var _0x3e3fdc=Math[_0x2501('0x20')](_0x24ca42[_0x2501('0x21')]()/0x3e8);for(var _0x2c3e41 in EVENT_ABILITY){if(_0x2c3e41>_0x3e3fdc){var _0x354387=new Date(_0x2c3e41*0x3e8);var _0x5d0a43=_0x354387[_0x2501('0x22')]()+0x1;var _0x35c062=_0x354387['getDate']();var _0x4eec05=('0'+_0x354387['getHours']())[_0x2501('0x23')](-0x2);var _0x588396=('0'+_0x354387[_0x2501('0x24')]())[_0x2501('0x23')](-0x2);var _0x43fec9=$(_0x2501('0x25'))[_0x2501('0x15')]('<div>'+_0x5d0a43+'/'+_0x35c062+'\x20'+_0x4eec05+':'+_0x588396+_0x2501('0x26'));$(_0x2501('0x27'))[_0x2501('0x15')](_0x43fec9);for(var _0x34654a of EVENT_ABILITY[_0x2c3e41]){$(_0x2501('0x27'))[_0x2501('0x15')]($('.'+_0x34654a)[_0x2501('0x28')]()[_0x2501('0x29')]());}}}setLimitData();}async function renderParty(){let _0x5d8b9e=0x0;PARTY_LIST[0x0]=PARTY_LIST[0x0]['filter'](_0xf65dc6=>CHAR_MASTER[_0xf65dc6['char']]!==undefined);let _0x227c00=PARTY_LIST[0x0][_0x5d8b9e];let _0x1ac5f1=0x0;let _0x49f601=[];while(_0x227c00!==undefined){let _0x442db7=_0x227c00['char'];let _0x2e17c8=_0x227c00[_0x2501('0xf')];NOW_CHAR=CHAR_MASTER[_0x442db7];selectDotHensei(CHAR_MASTER[_0x442db7]);let _0x36189e=asyncReadUserDataWithId(_0x2501('0x2a'),_0x442db7,async function(_0x36b15e){await displayCharInfo(CHAR_MASTER[_0x442db7],_0x36b15e);await displayStyleInfo(_0x442db7,_0x2e17c8);if(_0x1ac5f1===PARTY_LIST[0x0][_0x2501('0x2b')]){}closeInput(_0x442db7,![]);});_0x49f601['push'](_0x36189e);_0x227c00=PARTY_LIST[0x0][++_0x5d8b9e];}await Promise[_0x2501('0x1b')](_0x49f601);}function closeInput(_0x500234,_0x3f9279=![]){$(_0x2501('0x2c')+_0x500234)[_0x2501('0x2d')](_0x2501('0x2e'))[_0x2501('0x1f')](0xfa);if(_0x3f9279){saveCharData(_0x500234);}}$(document)[_0x2501('0x2f')](function(_0x80c5ee){_0x80c5ee('.filterList')[_0x2501('0x30')](function(){_0x80c5ee('.weaponList')[_0x2501('0x13')](_0x2501('0x1d'));let _0xbc0339=_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x31'))[_0x2501('0x32')](0x1);if(_0x80c5ee(this)[_0x2501('0x33')]()[_0x2501('0x34')](_0x2501('0x35'))){_0x80c5ee(_0x2501('0x36'))[_0x2501('0x9')](_0x2501('0x1d'));_0x80c5ee('.filterList')[_0x2501('0x37')](function(){_0x80c5ee(this)[_0x2501('0x33')]()['removeClass']('filterActive');});}else{_0x80c5ee(_0x2501('0x36'))[_0x2501('0x13')](_0x2501('0x1d'));_0x80c5ee('#'+_0xbc0339)[_0x2501('0x9')](_0x2501('0x1d'));_0x80c5ee(_0x2501('0x38'))['each'](function(){_0x80c5ee(this)[_0x2501('0x33')]()['removeClass'](_0x2501('0x35'));});_0x80c5ee(this)[_0x2501('0x33')]()[_0x2501('0x39')](_0x2501('0x35'));}});initialHide();_0x80c5ee(_0x2501('0x3a'))['on'](_0x2501('0x30'),function(){});_0x80c5ee(document)['on'](_0x2501('0x30'),_0x2501('0x3b'),function(){let _0x2701bc=_0x80c5ee(this)['attr'](_0x2501('0x3c'));_0x80c5ee(this)[_0x2501('0x9')](_0x2501('0x3d'))[_0x2501('0x13')](_0x2501('0x3e'));_0x80c5ee(this)[_0x2501('0x1f')](0xc8,function(){_0x80c5ee(this)[_0x2501('0x3f')](0xc8);_0x80c5ee(this)[_0x2501('0x9')]('icon_btn_off')['addClass']('icon_btn_on');_0x4c5f0d(_0x2701bc);saveCharData(_0x2701bc);});});_0x80c5ee(document)['on'](_0x2501('0x30'),_0x2501('0x40'),function(){let _0x4123b7=_0x80c5ee(this)[_0x2501('0x33')]()[_0x2501('0x2d')](_0x2501('0x41'));let _0x49b724=_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x42'))===_0x2501('0x43')?0x1:-0x1;let _0x164eba=_0x4123b7[_0x2501('0x44')]();let _0x300498=Number(_0x164eba)+_0x49b724;_0x4123b7['val'](_0x300498);_0x52e894(_0x80c5ee(this),_0x300498);});_0x80c5ee(document)['on'](_0x2501('0x45'),_0x2501('0x41'),function(){_0x52e894(_0x80c5ee(this),_0x80c5ee(this)[_0x2501('0x44')]());});function _0x52e894(_0x49c73b,_0x57649e){let _0x372693=_0x49c73b[_0x2501('0x46')](_0x2501('0x47'));let _0x41c9e6=_0x372693[_0x2501('0xc')](_0x2501('0x48'));let _0x263ac7=_0x49c73b[_0x2501('0xc')](_0x2501('0x49'));_0x80c5ee(_0x2501('0x4a')+_0x263ac7+_0x41c9e6)[_0x2501('0x37')](function(){_0x80c5ee(this)[_0x2501('0x4b')](_0x57649e);});_0x80c5ee(_0x2501('0x4c')+_0x263ac7+_0x41c9e6)[_0x2501('0x37')](function(){_0x80c5ee(this)[_0x2501('0x44')](_0x57649e);});_0x4c5f0d(_0x41c9e6);}_0x80c5ee(_0x2501('0x19'))[_0x2501('0x1a')]();_0x80c5ee(document)['on'](_0x2501('0x30'),_0x2501('0x4d'),function(){let _0xf9fba7=_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x3c'))!==undefined?_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x3c')):_0x80c5ee(this)['parent']()[_0x2501('0xc')](_0x2501('0x3c'));NOW_CHAR=CHAR_MASTER[_0xf9fba7];_0x80c5ee(_0x2501('0x47'))[_0x2501('0x37')](function(){if(_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x48'))!==_0xf9fba7){_0x80c5ee(this)[_0x2501('0x2d')](_0x2501('0x2e'))['slideUp']();}});let _0x3fc3fe=_0x80c5ee('.charTmpl'+_0xf9fba7)[_0x2501('0x2d')](_0x2501('0x2e'))[_0x2501('0xc')](_0x2501('0xf'));if(_0x3fc3fe===_0x2501('0x4e')){saveCharData(_0xf9fba7);}_0x80c5ee('.charTmpl'+_0xf9fba7)[_0x2501('0x2d')](_0x2501('0x2e'))[_0x2501('0x4f')](0xfa);});_0x80c5ee(document)['on'](_0x2501('0x30'),_0x2501('0x50'),function(){closeInput(_0x80c5ee(this)['attr'](_0x2501('0x3c')),!![]);});_0x80c5ee(document)['on'](_0x2501('0x30'),_0x2501('0x51'),function(){var _0x224fee=[];for(let _0xd90601 in PARTY_LIST[NOW_PARTY]){var _0x22c4c6=PARTY_LIST[NOW_PARTY][_0xd90601][_0x2501('0x52')];_0x224fee[_0x2501('0x53')](_0x22c4c6);}for(_0x22c4c6 of _0x224fee){_0xba6ef0(_0x22c4c6);}});_0x80c5ee(document)['on']('click',_0x2501('0x54'),function(){var _0x594804=_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x55'));var _0x5cbc88=_0x594804=='false'?!![]:![];_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x55'),_0x5cbc88);_0x80c5ee(this)[_0x2501('0x56')](_0x5cbc88?'未選択スタイルを非表示':_0x2501('0x57'));_0x80c5ee(this)[_0x2501('0x39')]('icon_btn_off\x20icon_btn_on');_0x80c5ee('.partyOtherStyle')[_0x2501('0x37')](function(){if(!_0x80c5ee(this)[_0x2501('0x34')](_0x2501('0x58'))){_0x80c5ee(this)['toggleClass'](_0x2501('0x1d'));}});});_0x80c5ee(document)['on'](_0x2501('0x30'),'.charUnset',function(){let _0x86a05a=_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x3c'));_0xba6ef0(_0x86a05a);});function _0xba6ef0(_0x4457a4){let _0x56a4ad=CHAR_MASTER[_0x4457a4];_0x80c5ee('.charTmpl'+_0x4457a4)[_0x2501('0x46')](_0x2501('0x59'))[_0x2501('0x1f')](0x1f4);selectDotReset(_0x56a4ad);_0x80c5ee('#PARTY')['find'](_0x2501('0x2c')+_0x4457a4)[_0x2501('0x5a')]();_0x80c5ee('#JINKEI'+_0x4457a4)[_0x2501('0x5a')]();let _0x33583e=_0x33490e(_0x4457a4);if(_0x33583e!==-0x1){PARTY_LIST[NOW_PARTY][_0x2501('0x5b')](_0x33583e,0x1);}_0x2a2673();saveCharData(_0x4457a4);}function _0x33490e(_0x390a52){for(let _0x4a709a in PARTY_LIST[NOW_PARTY]){if(PARTY_LIST[NOW_PARTY][_0x4a709a][_0x2501('0x52')]===_0x390a52){return _0x4a709a;}}return-0x1;}_0x80c5ee(document)['on'](_0x2501('0x30'),_0x2501('0x5c'),async function(){firebase['database']()[_0x2501('0x5d')]();firebase[_0x2501('0x5e')](appUsers)['goOnline']();let _0x12ba76=_0x80c5ee(this)['attr'](_0x2501('0x3c'));let _0x56a0d1=_0x33490e(_0x12ba76);if(PARTY_LIST[NOW_PARTY][_0x2501('0x2b')]>=PARTY_LIMIT||_0x56a0d1!==-0x1){while(PARTY_LIST[NOW_PARTY]['length']>PARTY_LIMIT){let _0x40cbe1=PARTY_LIST[NOW_PARTY]['length'];let _0x54bea1=PARTY_LIST[NOW_PARTY][_0x40cbe1-0x1][_0x2501('0x52')];_0xba6ef0(_0x54bea1);PARTY_LIST[NOW_PARTY]['pop']();}_0x80c5ee(this)[_0x2501('0x9')](_0x2501('0x5f'))['addClass'](_0x2501('0x60'));return;}if(NOW_CHAR['Id']!==undefined){closeInput(NOW_CHAR['Id'],!![]);}NOW_CHAR=CHAR_MASTER[_0x12ba76];let _0x3e2e45=NOW_CHAR[_0x2501('0x61')][0x0];NOW_STYLE=STYLE_MASTER[_0x3e2e45];PARTY_LIST[NOW_PARTY][_0x2501('0x53')]({'char':_0x12ba76,'style':_0x3e2e45});_0x80c5ee(_0x2501('0x62'))['show']();selectDotHensei(NOW_CHAR);readUserDataWithId(_0x2501('0x2a'),_0x12ba76,async function(_0x49e315){await displayCharInfo(CHAR_MASTER[_0x12ba76],_0x49e315);await displayStyleInfo(NOW_CHAR['Id'],_0x3e2e45);_0x80c5ee(_0x2501('0x2c')+_0x12ba76)[_0x2501('0x2d')](_0x2501('0x63'))['removeClass'](_0x2501('0x1d'))[_0x2501('0x3f')](0x1f4);setLimitData(_0x12ba76);_0x2a2673();});_0x80c5ee(_0x2501('0x19'))[_0x2501('0x1a')]();});_0x80c5ee(document)['on'](_0x2501('0x30'),'.style',async function(){let _0x5b9fa2=_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x3c'));NOW_STYLE=STYLE_MASTER[_0x5b9fa2];await displayStyleInfo(NOW_CHAR['Id'],_0x5b9fa2);let _0x4cc782=_0x33490e(NOW_CHAR['Id']);PARTY_LIST[NOW_PARTY][_0x4cc782]['style']=_0x5b9fa2;_0x2a2673();});function _0x4c5f0d(_0x5781aa){console[_0x2501('0x64')]('updateDB');let _0x4445ff=_0x5781aa===undefined?NOW_CHAR['Id']:_0x5781aa;for(let _0x3ca8d3 of PARAM_KEY_HP){let _0x57b9d4=_0x80c5ee(_0x2501('0x4a')+_0x3ca8d3+_0x4445ff)[_0x2501('0x28')]()[_0x2501('0x4b')]();CHAR_MASTER[_0x4445ff][_0x2501('0x65')+_0x3ca8d3]=Number(_0x57b9d4);}if(NOW_CHAR_ID!==_0x4445ff){if(NOW_CHAR_ID!==''){saveCharData(NOW_CHAR_ID);}NOW_CHAR_ID=_0x4445ff;}setLimitData(_0x4445ff);}function _0x2a2673(){updateData(_0x2501('0x16'),PARTY_LIST);}_0x80c5ee(document)['on'](_0x2501('0x30'),_0x2501('0x66'),function(){_0x4705e1(_0x80c5ee(this)[_0x2501('0x33')]()['find'](_0x2501('0x67')));});_0x80c5ee(document)['on'](_0x2501('0x45'),_0x2501('0x67'),function(){_0x4705e1(_0x80c5ee(this));});function _0x4705e1(_0x412321){gtag(_0x2501('0x68'),_0x2501('0x69'),{'event_category':_0x2501('0x6a'),'event_label':_0x2501('0x18'),'value':0x1});_0x80c5ee(_0x2501('0x6b'))[_0x2501('0xc')](_0x2501('0x6c'),_0x80c5ee(_0x412321)['val']());_0x80c5ee(_0x2501('0x6b'))[_0x2501('0xc')]('data-charId',_0x80c5ee(_0x412321)['attr']('data-id'));let _0x8bf114=splitParam(_0x80c5ee(_0x412321)[_0x2501('0x44')](),'不明');let _0x319d3b='';_0x319d3b+=_0x2501('0x6d')+_0x8bf114[0x0]+_0x2501('0x6e');_0x319d3b+=_0x2501('0x6f')+_0x8bf114[0x1]+_0x2501('0x70')+_0x8bf114[0x2]+_0x2501('0x6e');_0x319d3b+=_0x2501('0x71')+_0x8bf114[0x3]+'\x20素早さ:'+_0x8bf114[0x4]+'<br>';_0x319d3b+=_0x2501('0x72')+_0x8bf114[0x5]+_0x2501('0x73')+_0x8bf114[0x6]+_0x2501('0x6e');_0x319d3b+=_0x2501('0x74')+_0x8bf114[0x7]+_0x2501('0x75')+_0x8bf114[0x8]+_0x2501('0x6e');_0x319d3b+='が入力されました<br>';_0x319d3b+=_0x2501('0x76');_0x80c5ee(_0x2501('0x77'))[_0x2501('0x56')](_0x319d3b);_0x80c5ee(_0x2501('0x78'))['fadeIn']();_0x80c5ee('#allParamConfirmInner')[_0x2501('0x79')](_0x2501('0x7a'),_0x2501('0x7b'));return![];}_0x80c5ee(_0x2501('0x7c'))[_0x2501('0x30')](function(){if(_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x3c'))==='ok'){gtag(_0x2501('0x68'),_0x2501('0x69'),{'event_category':_0x2501('0x6a'),'event_label':_0x2501('0x7d'),'value':0x1});let _0x54159e=_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x7e'));let _0x525325=splitParam(_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x6c')),0x0);for(let _0x2bde2b in _0x525325){_0x80c5ee(_0x2501('0x4c')+PARAM_KEY_HP[_0x2bde2b]+_0x54159e)[_0x2501('0x37')](function(_0x46d6b5,_0x4592c2){_0x80c5ee(_0x4592c2)[_0x2501('0x44')](_0x525325[_0x2bde2b]);});_0x80c5ee(_0x2501('0x4a')+PARAM_KEY_HP[_0x2bde2b]+_0x54159e)[_0x2501('0x37')](function(_0x1c9538,_0x52abd9){_0x80c5ee(_0x52abd9)[_0x2501('0x4b')](_0x525325[_0x2bde2b]);});}_0x4c5f0d();}else{gtag(_0x2501('0x68'),_0x2501('0x69'),{'event_category':_0x2501('0x6a'),'event_label':_0x2501('0x7f'),'value':0x1});}_0x80c5ee('#modal01')[_0x2501('0x80')]();_0x80c5ee(_0x2501('0x81'))[_0x2501('0x79')]('animation',_0x2501('0x82'));return![];});_0x80c5ee('.baseValue')[_0x2501('0x30')](function(){_0x80c5ee('.baseValue')[_0x2501('0x37')](function(){_0x80c5ee(this)[_0x2501('0x9')](_0x2501('0x3e'));_0x80c5ee(this)['addClass'](_0x2501('0x3d'));});_0x80c5ee(this)[_0x2501('0x13')](_0x2501('0x3e'));BASE=Number(_0x80c5ee(this)[_0x2501('0xc')](_0x2501('0x3c')));setLimitData();});});function setLimitData(_0x5deddb=undefined){$(_0x2501('0x83'))[_0x2501('0x37')](function(){let _0x933df2=$(this)[_0x2501('0xc')](_0x2501('0x84'));let _0x2dd2f6=STYLE_MASTER[_0x933df2];let _0x253142=$(_0x2501('0x85')+_0x933df2);let _0xd4e39d=_0x253142[_0x2501('0xc')](_0x2501('0x7e'));if(_0x5deddb!==undefined&&_0xd4e39d!=_0x5deddb){return!![];}let _0x32d3ca=0x0;for(let _0x3da8b2 of PARAM_KEY){let _0xa53114=_0x2dd2f6[_0x2501('0x86')+_0x3da8b2];let _0xf3831c=CHAR_MASTER[_0xd4e39d]['NOW'+_0x3da8b2]!==undefined?CHAR_MASTER[_0xd4e39d][_0x2501('0x65')+_0x3da8b2]:CHAR_MASTER[_0xd4e39d][_0x3da8b2];_0x32d3ca+=_0xf3831c;let _0x4bd44d=_0x2dd2f6['Limit'+_0x3da8b2]!==0x63?BASE+Number(_0xa53114)-Number(_0xf3831c):'?';_0x253142[_0x2501('0x2d')]('.'+_0x3da8b2)[_0x2501('0x37')](function(){$(this)[_0x2501('0x9')](_0x2501('0x87'))[_0x2501('0x9')](_0x2501('0x88'));if(_0x4bd44d==='?'){$(this)[_0x2501('0x13')](_0x2501('0x89'));}else if(_0x4bd44d>0x0){$(this)['addClass'](_0x2501('0x87'));}else if(_0x4bd44d<0x0){$(this)['addClass'](_0x2501('0x88'));}$(this)[_0x2501('0x4b')](_0x4bd44d);});let _0x2619db=_0x2dd2f6[_0x2501('0x8a')+_0x3da8b2]!==undefined?_0x2dd2f6['Ind'+_0x3da8b2]:0x1;let _0x40a1df=_0x2501('0x8b')+_0x2619db+_0x2501('0x8c');_0x253142['find']('.'+_0x3da8b2+_0x2501('0x8d'))[_0x2501('0x37')](function(){let _0x382302=BASE+Number(_0xa53114);let _0x50ea7d=Number(_0xa53114)-CHAR_MASTER[_0xd4e39d][_0x3da8b2];$(this)[_0x2501('0x56')](_0x40a1df+'\x20'+_0x382302+'\x20('+_0x50ea7d+')');});}let _0x33a572=(_0x32d3ca-0x171)/0x8;let _0x266d21='+'+_0x33a572;if(_0x32d3ca===0x171){_0x266d21=0x0;}else if(_0x33a572<0x0){_0x266d21=_0x33a572;}let _0x1afdd5='遠征';if(_0x33a572>=0x14){_0x1afdd5=_0x2501('0x8e');}else if(_0x33a572>0x12){_0x1afdd5=_0x2501('0x8f');}else if(_0x33a572>0x10){_0x1afdd5='外伝2-3以降(+18)';}else if(_0x33a572>0xf){_0x1afdd5='外伝1-5以降(+17)';}else if(_0x33a572>0xe){_0x1afdd5=_0x2501('0x90');}else if(_0x33a572>0xc){_0x1afdd5=_0x2501('0x91');}else if(_0x33a572>0x8){_0x1afdd5=_0x2501('0x92');}else if(_0x33a572>0x5){_0x1afdd5=_0x2501('0x93');}else if(_0x33a572>0x0){_0x1afdd5=_0x2501('0x94');}else if(_0x33a572>-0x3){_0x1afdd5=_0x2501('0x95');}else if(_0x33a572>-0x6){_0x1afdd5='H712(最大:-2)';}$(_0x2501('0x96')+_0xd4e39d)[_0x2501('0x4b')](_0x32d3ca);$(_0x2501('0x97')+_0xd4e39d)[_0x2501('0x4b')](_0x266d21);$(_0x2501('0x98')+_0xd4e39d)[_0x2501('0x4b')](_0x1afdd5);});}function saveCharData(_0x269338){update={};let _0x59def2=0x0;for(let _0xa6cdb5 of PARAM_KEY){let _0x1cc8f9=Number(CHAR_MASTER[_0x269338][_0x2501('0x65')+_0xa6cdb5]);_0x1cc8f9=isNaN(_0x1cc8f9)||_0x1cc8f9>LIMIT_BASE+0x10?0x0:_0x1cc8f9;_0x59def2+=_0x1cc8f9;update[_0xa6cdb5]=_0x1cc8f9;}let _0x46bac8=Number(CHAR_MASTER[_0x269338][_0x2501('0x99')]);update['HP']=isNaN(_0x46bac8)||_0x46bac8>HP_LIMIT?0x0:_0x46bac8;gtag(_0x2501('0x68'),'saveChar',{'event_category':_0x2501('0x6a'),'event_label':CHAR_MASTER[_0x269338][_0x2501('0x9a')],'value':0x1});if(_0x59def2>0x0){updateData('CHAR/'+_0x269338,update);}else{deleteCharData(_0x269338);}}function initialHide(){$('#charData')[_0x2501('0x8')]();$(_0x2501('0x9b'))[_0x2501('0x8')]();$(_0x2501('0x62'))[_0x2501('0x8')]();}async function displayCharInfo(_0x21c9fc,_0x290481){let _0x19d2b0=_0x21c9fc['Id'];let _0x5c14a3=$(_0x2501('0x9c'))[_0x2501('0x29')]()[_0x2501('0x9')](_0x2501('0x1d'))[_0x2501('0x9d')]('id')['addClass'](_0x2501('0x9e')+_0x19d2b0)[_0x2501('0xc')](_0x2501('0x7e'),_0x19d2b0);_0x5c14a3[_0x2501('0x2d')](_0x2501('0x9f'))[_0x2501('0x56')](_0x21c9fc['Name']);_0x5c14a3[_0x2501('0x2d')](_0x2501('0xa0'))[_0x2501('0xc')]('data-id',_0x19d2b0);_0x5c14a3['find']('.charUnset')[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0);_0x5c14a3[_0x2501('0x2d')](_0x2501('0xa1'))[_0x2501('0xc')]('data-id',_0x19d2b0);_0x5c14a3[_0x2501('0x2d')](_0x2501('0x4a'))[_0x2501('0x33')]()[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0);_0x5c14a3[_0x2501('0x2d')]('.allparams')[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0);_0x5c14a3['find'](_0x2501('0x3b'))[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0);_0x5c14a3[_0x2501('0x2d')](_0x2501('0x96'))[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0)[_0x2501('0x13')](_0x2501('0xa2')+_0x19d2b0);_0x5c14a3[_0x2501('0x2d')](_0x2501('0x97'))[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0)[_0x2501('0x13')](_0x2501('0xa3')+_0x19d2b0);_0x5c14a3[_0x2501('0x2d')](_0x2501('0x98'))[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0)['addClass']('RECO'+_0x19d2b0);_0x5c14a3[_0x2501('0x2d')]('#STYLE_SEICHO')['attr']('id',_0x2501('0xa4')+_0x19d2b0);let _0x332310=_0x21c9fc[_0x2501('0xa5')];let _0x2551b9=_0x332310!==_0x2501('0xa6')?_0x332310:'ID4e2c9';let _0x506a35=getImgUrl(_0x2501('0xa7')+_0x2551b9+'.png')+dotStyle;_0x5c14a3[_0x2501('0x2d')]('.dot_mid')['attr']('style',_0x506a35);if(_0x290481!==null){for(let _0x48a356 of PARAM_KEY_HP){_0x21c9fc['NOW'+_0x48a356]=Number(_0x290481[_0x48a356]);}}else if(_0x290481===null){for(let _0x1baad7 of PARAM_KEY){_0x21c9fc[_0x2501('0x65')+_0x1baad7]=0x0;}}let _0x37080b=_0x5c14a3[_0x2501('0x2d')](_0x2501('0xa8'));_0x37080b[_0x2501('0xc')](_0x2501('0x3c'),_0x19d2b0);for(let _0x21c9a5 of PARAM_KEY_HP){_0x5c14a3[_0x2501('0x2d')](_0x2501('0x4a')+_0x21c9a5)[_0x2501('0x9')](_0x2501('0x52')+_0x21c9a5)[_0x2501('0x13')](_0x2501('0xa9')+_0x21c9a5+_0x19d2b0)[_0x2501('0x44')](_0x21c9fc[_0x2501('0x65')+_0x21c9a5]);_0x37080b[_0x2501('0x2d')]('.'+_0x21c9a5)['removeClass'](_0x2501('0x52')+_0x21c9a5)[_0x2501('0x13')](_0x2501('0x52')+_0x21c9a5+_0x19d2b0)[_0x2501('0x4b')](_0x21c9fc[_0x2501('0x65')+_0x21c9a5]);}for(let _0x367b4e of _0x21c9fc[_0x2501('0x61')]){let _0x1c5ec7=STYLE_MASTER[_0x367b4e];let _0x2569cd=$(_0x2501('0xaa'))[_0x2501('0x13')]('style')[_0x2501('0x13')](getStyleIconClass(_0x1c5ec7[_0x2501('0xab')]))[_0x2501('0xc')](_0x2501('0xf'),getImgUrl(_0x2501('0xac')+_0x367b4e+_0x2501('0xad')))['attr'](_0x2501('0x3c'),_0x367b4e);let _0xd3d629=$(_0x2501('0xae'))[_0x2501('0x13')](getStyleIconBgClass(_0x1c5ec7['Rarity']))[_0x2501('0x15')](_0x2569cd);_0x5c14a3[_0x2501('0x2d')](_0x2501('0xaf'))[_0x2501('0x15')](_0xd3d629);let _0x436533=$(_0x2501('0xb0'))[_0x2501('0x29')]()[_0x2501('0x9')](_0x2501('0x1d'))[_0x2501('0x9d')]('id')[_0x2501('0x13')](_0x2501('0xb1')+_0x367b4e)[_0x2501('0xc')](_0x2501('0x84'),_0x367b4e)[_0x2501('0xc')](_0x2501('0x7e'),_0x19d2b0);_0x436533[_0x2501('0x2d')](_0x2501('0xb2'))[_0x2501('0xc')](_0x2501('0xd'),'./img/icon/icon_'+_0x1c5ec7[_0x2501('0xab')]+_0x2501('0xad'));_0x436533[_0x2501('0x2d')](_0x2501('0xb3'))[_0x2501('0xc')](_0x2501('0xd'),_0x2501('0xb4')+_0x367b4e+_0x2501('0xad'));_0x436533[_0x2501('0x2d')](_0x2501('0xb5'))['attr'](_0x2501('0xd'),_0x2501('0xb6')+_0x367b4e+_0x2501('0xad'));var _0x22a46d=_0x436533[_0x2501('0x29')]();_0x22a46d[_0x2501('0x13')](_0x2501('0x58'));let _0x107202=_0x1c5ec7[_0x2501('0xb7')]==='f';let _0x182326=_0x1c5ec7[_0x2501('0xb7')]==='c';for(let _0x21c9a5 of PARAM_KEY){let _0x3f2c06=_0x1c5ec7[_0x2501('0x8a')+_0x21c9a5]!==undefined?_0x1c5ec7[_0x2501('0x8a')+_0x21c9a5]:0x1;let _0x45c9db='<img\x20src=\x22./img/icon/icon_ind_'+_0x3f2c06+_0x2501('0x8c');let _0x423ce3='<img\x20src=\x22./img/icon/icon_ind_'+_0x3f2c06+_0x2501('0x8c');let _0x359b5d=_0x1c5ec7['Limit'+_0x21c9a5];if(_0x359b5d===0x63){_0x436533[_0x2501('0x2d')]('.'+_0x21c9a5)['text']('?');}else{let _0x1d14b5=BASE+Number(_0x359b5d);let _0x461c27=Number(_0x359b5d)-_0x21c9fc[_0x21c9a5];let _0x4fbb03='';if(_0x461c27===0x0||_0x3f2c06===0x2&&_0x461c27===0x3||_0x107202){_0x4fbb03='fuchidoriBlue\x20fix-bgcolor';}else if(!_0x182326){_0x4fbb03=_0x2501('0xb8');}_0x22a46d[_0x2501('0x2d')]('.'+_0x21c9a5)[_0x2501('0x13')](_0x4fbb03)[_0x2501('0x9')](_0x21c9a5)[_0x2501('0x13')](_0x21c9a5+_0x2501('0x8d'));}}_0x5c14a3[_0x2501('0x15')](_0x436533);_0x5c14a3[_0x2501('0x2d')](_0x2501('0xb9')+_0x19d2b0)['before'](_0x22a46d);}let _0x168772=$(_0x2501('0xba'))['append'](_0x5c14a3);$('#PARTY')[_0x2501('0x15')](_0x168772);}async function displayStyleInfo(_0x203426,_0x40c827){let _0x1a1251=STYLE_MASTER[_0x40c827];if(_0x1a1251===null){return;}$(_0x2501('0x2c')+_0x203426)[_0x2501('0xc')](_0x2501('0x84'),_0x40c827);$('.charTmpl'+_0x203426)[_0x2501('0x2d')](_0x2501('0xbb'))[_0x2501('0x37')](function(){let _0x392987=$(this)[_0x2501('0xc')](_0x2501('0x3c'));$(this)[_0x2501('0x33')]()[_0x2501('0x13')](_0x2501('0xbc'));if(_0x40c827===_0x392987){$(this)[_0x2501('0x33')]()[_0x2501('0x9')]('opacity_nocheck');return;}});$(_0x2501('0x2c')+_0x203426)[_0x2501('0x2d')](_0x2501('0x83'))[_0x2501('0x37')](function(){var _0x33caa6=$(_0x2501('0x54'))[_0x2501('0xc')](_0x2501('0x55'));var _0x5f23fa=_0x33caa6===_0x2501('0xbd');if($(this)[_0x2501('0x34')](_0x2501('0xbe')+_0x40c827)){$(this)[_0x2501('0x9')](_0x2501('0xbf'))[_0x2501('0x13')](_0x2501('0xc0'));}else{$(this)[_0x2501('0x13')](_0x2501('0xc1'))[_0x2501('0x9')]('partyNowStyle');if(_0x5f23fa&&!$(this)[_0x2501('0x34')](_0x2501('0x58'))){$(this)[_0x2501('0x13')](_0x2501('0x1d'));}}});let _0x5cd89b=_0x1a1251[_0x2501('0xa5')];let _0x4bbf36=_0x5cd89b!==_0x2501('0xa6')?_0x5cd89b:_0x2501('0xc2');let _0x9bd20d=$(_0x2501('0x2c')+_0x203426)[_0x2501('0x2d')](_0x2501('0x4a'));_0x9bd20d[_0x2501('0xc')](_0x2501('0xf'),getImgUrl(_0x2501('0xa7')+_0x4bbf36+'.png')+dotStyle);if(_0x9bd20d[_0x2501('0x2b')]>0x0){animeReset(_0x9bd20d,_0x2501('0xc3'));}}function getSmallIcon(_0x4e68d9){let _0x542250=$('<button>')[_0x2501('0x13')](getStyleIconClass(_0x4e68d9[_0x2501('0xab')])+_0x2501('0xc4'))[_0x2501('0xc')](_0x2501('0xf'),getImgUrl(_0x2501('0xac')+_0x4e68d9['Id']+_0x2501('0xad')));let _0x6be50=$(_0x2501('0xae'))[_0x2501('0x13')](getStyleIconBgClass(_0x4e68d9[_0x2501('0xab')]))['attr'](_0x2501('0xf'),_0x2501('0xc5'))[_0x2501('0x15')](_0x542250);return _0x6be50;}function splitParam(_0x4386c0,_0x39b0e5){k=/,|\.|\s|\t/g;let _0xb64c76=_0x4386c0['split'](k);if(_0xb64c76['length']===0x1){_0xb64c76[0x0]=_0x4386c0['substr'](0x0,0x3);_0xb64c76[0x1]=_0x4386c0['substr'](0x3,0x2);_0xb64c76[0x2]=_0x4386c0[_0x2501('0x32')](0x5,0x2);_0xb64c76[0x3]=_0x4386c0[_0x2501('0x32')](0x7,0x2);_0xb64c76[0x4]=_0x4386c0[_0x2501('0x32')](0x9,0x2);_0xb64c76[0x5]=_0x4386c0[_0x2501('0x32')](0xb,0x2);_0xb64c76[0x6]=_0x4386c0[_0x2501('0x32')](0xd,0x2);_0xb64c76[0x7]=_0x4386c0['substr'](0xf,0x2);_0xb64c76[0x8]=_0x4386c0[_0x2501('0x32')](0x11,0x2);}for(let _0x429eb7=0x0;_0x429eb7<0x8;_0x429eb7++){if(_0xb64c76[_0x429eb7]===undefined||_0xb64c76[_0x429eb7]===''){_0xb64c76[_0x429eb7]=_0x39b0e5;}}return _0xb64c76;}function selectDotReset(_0x4fcf77){$(_0x2501('0xc6')+_0x4fcf77[_0x2501('0xa5')])[_0x2501('0x9')]('char-winner')[_0x2501('0x13')](_0x2501('0x5f'))[_0x2501('0x2d')](_0x2501('0xc7'))[_0x2501('0x4b')](_0x4fcf77['Series']);}function selectDotHensei(_0xee3b97){$(_0x2501('0xc6')+_0xee3b97[_0x2501('0xa5')])['removeClass']('char-aruku')[_0x2501('0x9')](_0x2501('0x60'))[_0x2501('0x13')](_0x2501('0xc3'))[_0x2501('0x2d')](_0x2501('0xc7'))['text'](_0x2501('0xc8'));}