const _0x2619=['.char','#footer_left','slideDown','dot','.charTmpl','dot/','.inputArea','.fukidashiInput','.styleInfoArea','tooltip','getHours','PROVIDER_ID','SEL','data-styleId','.hanei','#allParamConfirmInner','.paramButton','data-input','LIMIT\x20limit','party','https://nao-romasaga.github.io/party.html','#QUEST_CHOISE','Series','#SHOW_ONLY_MYSTYLE','data-href','Rarity','fuchidori-blue\x20fix-bgcolor','旧外伝2以降','data-charId','fa-toggle-on','pop','hide','partyOtherStyle\x20','HP:\x20','status_minus','push','STYLE_SEICHO','src','.CHAR_SAVE','器用さ:\x20','fadeOut','css','modal\x200.5s\x20forwards','#CHAR_TEMPLATE','show','char-aruku-left','CHAR','click','fadeIn','data-pm','saveChar','.tabArea','.style_icon_bg_base','.CHAR_DOT','#FOOTER_CHAR','.IKKATSU_INFO','background:url(','#float-footer','icon_btn_positive','.btmdot','indexOf','char-winner','SUM','#allSubmit','append','CHAR/','.yubi','filter','.CHAR_STATUS','toggleClass','find','\x20魅力:','VH11以降','.isLogin','data-param','.ICON_TD','.charParam','removeClass','char-aruku','.icon_btn_positive','scrollLeft','AVG','filterActive','#CHAR_CHOISE','まで</div>','icon_btn_on','.style','animation','#quest','showModal','\x20(HP','val','#NOW_PARTYNUM','.LIMIT','#firebaseui-auth-container','removeAttr','RECO','status_question','fast','.charUnset','scroll','#footer_right','<br>','char','.dot-base-circle','新外伝1以降','編成中','<div>','icon/icon_','Ind','\x20体力:','length','status_plus','text','style_cutin/','ID4e2c9','Limit','INPUT_AREA','#JINKEI','getMinutes','html,body','#PARTY_RESET','Fix','splice','#LIMIT_TEMPLATE','floor','#modal01','SIM','getTime','#loginInfo','.noLogin','WeaponType','\x20margin-left:0px;\x20position:\x20relative;','data-charid','substr','parent','.charTableParent','Seicho','#FOOTER_CLOSE','slideUp','style','NOW','SIMPLE_MODE','icon/icon_base_','addClass','concat','ONLY_MYSTYLE','.limit','.nowData','.tab-content','ready','PARTY','#FOOTER_PARTY','TwitterAuthProvider','fa-toggle-off','#NOW_QUEST','[data-toggle=\x22tooltip\x22]','animate','#SHOW_SIMPLE_DISPLAY','database','.btn_close','#dot','.modalClose','toLowerCase','VH15以降','.openMenu','VH12以降','Holders','\x22\x20style=\x22height:10px;\x22>','status-bgcolor','VH14以降','trigger','getDate','#allParamConfirm','.PARENT_TABLE','.STYLE_ICON','DotId','display:\x20block;','.fas','first','.baseDispChange','\u3000愛:\x20','.SIMPLE_HIDE','2章VH2以降','char-loser','all','slideToggle','#btmdot','#PARTY','auth','parents','.CHECK_COVER','#PARTY_FOOTER','.NOW_BASE','.dot','#_icon_toku','icon_nocheck','remove','change','cancel','.charInput','partyNowStyle','hasClass','.fButton','.SUM','#FOOTER_QUEST','swing','event','.allparams','attr','background:\x20url(','icon_btn_off','2章VH1以降','VH10以降','icon_btn_negative','腕力:\x20','.RECO','VH13以降','.charTable','width','icon/icon_ind_','clone','.series-button','VH9以降','btmdot','modalClose\x200.5s\x20forwards','goOnline','.questList','charTmpl','offset','.baseValue','ID4e2c8','.AVG','.filterList','<img\x20src=\x22','知力:\x20','.initialHide','d-none','.png','each','html','#STYLE_SEICHO','charInput','.questListNow','Name','data-id','slice','DISPLAY/PARTY','top','#SHOW_ONLY_CHOISE'];(function(_0x559463,_0x26190b){const _0x4d9fcf=function(_0x1f70ce){while(--_0x1f70ce){_0x559463['push'](_0x559463['shift']());}};_0x4d9fcf(++_0x26190b);}(_0x2619,0x1cb));const _0x4d9f=function(_0x559463,_0x26190b){_0x559463=_0x559463-0x0;let _0x4d9fcf=_0x2619[_0x559463];return _0x4d9fcf;};var BASE_SKILL_LIST=[];var USE_SKILL_LIST=[];var NOW_CHAR={};var NOW_CHAR_ID='';var NOW_STYLE={};var MY_STYLE=[];var IS_SET_MY_STYLE=![];var IS_SHOW_MY_STYLE=!![];var IS_SIMPLE_MODE=![];var IS_SHOW_ONLY_CHOISE_STYLE=![];var NOW_PARTY=0x0;var PARTY_LIST=[[]];var BASE=LIMIT_BASE;var UID;var dotStyle=_0x4d9f('0xad');var DISPLAY_OPTION={'Q':'','BS':'','RE':0x1,'SIM':0x0,'SEL':0x0};var DISP_UPDATE_FLG=![];function _noLoginInitial(){var _0x4de9c6={'signInSuccessUrl':_0x4d9f('0x3d'),'signInOptions':[firebase[_0x4d9f('0xe6')][_0x4d9f('0xc2')][_0x4d9f('0x34')]]};var _0x19aab9=new firebaseui[(_0x4d9f('0xe6'))]['AuthUI'](firebase[_0x4d9f('0xe6')](appUsers));_0x19aab9['start'](_0x4d9f('0x87'),_0x4de9c6);}async function _initial(){$(_0x4d9f('0xab'))[_0x4d9f('0x48')]();$(_0x4d9f('0x72'))['removeClass'](_0x4d9f('0x1c'));$(_0x4d9f('0xaa'))['hide']();loginCard(_0x4d9f('0x87'));await init();}async function init(){let _0x2b4603=readUserData('STYLECHECK',function(_0x3b9d3a){let _0x4d3f08=_0x3b9d3a===null||_0x3b9d3a['A']===undefined?[]:_0x3b9d3a['A'];let _0xc45163=_0x3b9d3a===null||_0x3b9d3a['S']===undefined?[]:_0x3b9d3a['S'];let _0x5772b5=_0x3b9d3a===null||_0x3b9d3a['SS']===undefined?[]:_0x3b9d3a['SS'];MY_STYLE=_0x4d3f08[_0x4d9f('0xba')](_0xc45163)[_0x4d9f('0xba')](_0x5772b5);});let _0x1b8b8d=readUserData(_0x4d9f('0xc0'),async function(_0x2ca6fb){if(_0x2ca6fb===null){PARTY_LIST=[[]];}else{PARTY_LIST=_0x2ca6fb;$(_0x4d9f('0x85'))[_0x4d9f('0x9a')](PARTY_LIST[NOW_PARTY][_0x4d9f('0x98')]);}});let _0x1b7a69=readUserData(_0x4d9f('0x26'),async function(_0x1be87e){if(_0x1be87e!==null){DISPLAY_OPTION=_0x1be87e;}});updateDisplayDB();dispChar(CHAR_MASTER);$(_0x4d9f('0xe5'))[_0x4d9f('0x55')]();$(_0x4d9f('0xc5'))[_0x4d9f('0x32')]();await Promise[_0x4d9f('0xe2')]([_0x1b8b8d,_0x2b4603,_0x1b7a69]);IS_SET_MY_STYLE=MY_STYLE[_0x4d9f('0x98')]>0x0;if(IS_SET_MY_STYLE){IS_SHOW_MY_STYLE=!![];$('#SHOW_ONLY_MYSTYLE_INFO')['hide']();}else{IS_SHOW_MY_STYLE=![];$(_0x4d9f('0x40'))[_0x4d9f('0x48')]();}if(PARTY_LIST===null){DISP_UPDATE_FLG=!![];return;}await renderParty();$(_0x4d9f('0x1b'))[_0x4d9f('0x76')](_0x4d9f('0x1c'));$(_0x4d9f('0x12'))[_0x4d9f('0xb4')]();$(_0x4d9f('0x22'))[_0x4d9f('0x2b')]();$('.initialShow')['slideUp']();var _0x429333=new Date();var _0x1190bc=Math[_0x4d9f('0xa6')](_0x429333[_0x4d9f('0xa9')]()/0x3e8);for(var _0x2dd31a in EVENT_ABILITY){if(_0x2dd31a>_0x1190bc){var _0x317508=new Date(_0x2dd31a*0x3e8);var _0x54140d=_0x317508['getMonth']()+0x1;var _0x161d2d=_0x317508[_0x4d9f('0xd5')]();var _0x482ed7=('0'+_0x317508[_0x4d9f('0x33')]())[_0x4d9f('0x25')](-0x2);var _0xb3cc3b=('0'+_0x317508[_0x4d9f('0xa0')]())[_0x4d9f('0x25')](-0x2);var _0x3f8d32=$(_0x4d9f('0x94'))[_0x4d9f('0x69')](_0x4d9f('0x94')+_0x54140d+'/'+_0x161d2d+'\x20'+_0x482ed7+':'+_0xb3cc3b+_0x4d9f('0x7d'));$(_0x4d9f('0xec'))[_0x4d9f('0x69')](_0x3f8d32);for(var _0x4bf9dd of EVENT_ABILITY[_0x2dd31a]){$(_0x4d9f('0xec'))[_0x4d9f('0x69')]($('.'+_0x4bf9dd)[_0x4d9f('0xdc')]()[_0x4d9f('0xb0')]()[_0x4d9f('0xc')]());}}}setDisplayOption();setLimitData();}function setDisplayOption(){if(DISPLAY_OPTION['Q']!==''){$(_0x4d9f('0xdd'))[_0x4d9f('0x1e')](function(){if($(this)['attr']('data-id')==DISPLAY_OPTION['Q']){$(this)[_0x4d9f('0xd4')]('click');return![];}});if(DISPLAY_OPTION['BS']!==''){$(_0x4d9f('0x81')+DISPLAY_OPTION['Q'])[_0x4d9f('0x6f')](_0x4d9f('0x15'))[_0x4d9f('0x1e')](function(){if($(this)[_0x4d9f('0x0')](_0x4d9f('0x24'))==DISPLAY_OPTION['BS']){$(this)[_0x4d9f('0xd4')](_0x4d9f('0x58'));return![];}});}}if(DISPLAY_OPTION['RE']===0x0){$('#SHOW_ONLY_MYSTYLE')[_0x4d9f('0xd4')](_0x4d9f('0x58'));}if(DISPLAY_OPTION[_0x4d9f('0x35')]===0x1){$(_0x4d9f('0x28'))[_0x4d9f('0xd4')]('click');}if(DISPLAY_OPTION[_0x4d9f('0xa8')]===0x1){$(_0x4d9f('0xc7'))[_0x4d9f('0xd4')](_0x4d9f('0x58'));}DISP_UPDATE_FLG=!![];}$(document)[_0x4d9f('0xbf')](function(_0x48907f){_0x48907f(_0x4d9f('0x2a'))[_0x4d9f('0x48')]();_0x48907f('#footer_right')[_0x4d9f('0x48')]();_0x48907f(_0x4d9f('0x18'))[_0x4d9f('0x58')](function(){_0x48907f('.dotList')[_0x4d9f('0xb9')](_0x4d9f('0x1c'));let _0x26828d=_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x41'));_0x48907f('#'+_0x26828d)[_0x4d9f('0x76')](_0x4d9f('0x1c'));if(!_0x48907f(this)[_0x4d9f('0x6f')](_0x4d9f('0xf4'))[_0x4d9f('0xf3')](_0x4d9f('0x7b'))){_0x48907f(_0x4d9f('0x18'))[_0x4d9f('0x1e')](function(){_0x48907f(this)[_0x4d9f('0x6f')](_0x4d9f('0xf4'))[_0x4d9f('0x76')](_0x4d9f('0x7b'));});_0x48907f(this)[_0x4d9f('0x6f')](_0x4d9f('0xf4'))['toggleClass'](_0x4d9f('0x7b'));}});initialHide();_0x48907f(_0x4d9f('0xbe'))['on'](_0x4d9f('0x58'),function(){});_0x48907f(_0x4d9f('0x2a'))[_0x4d9f('0x58')](function(){_0x48907f(_0x4d9f('0xe9'))[_0x4d9f('0xc6')]({'scrollLeft':0x0},_0x4d9f('0x8b'),_0x4d9f('0xf7'));});_0x48907f(_0x4d9f('0x8e'))[_0x4d9f('0x58')](function(){var _0x448a84=_0x48907f('#PARTY_FOOTER')[_0x4d9f('0xa')]();var _0x1d05fc=Math[_0x4d9f('0xa6')](_0x448a84/0x3c);var _0x56e1f5=PARTY_LIST[NOW_PARTY][_0x4d9f('0x98')];var _0x46da08=(_0x56e1f5-_0x1d05fc)*0x3c;_0x48907f('#PARTY_FOOTER')[_0x4d9f('0xc6')]({'scrollLeft':_0x46da08},_0x4d9f('0x8b'),_0x4d9f('0xf7'));});_0x48907f(_0x4d9f('0xe9'))[_0x4d9f('0x8d')](function(){var _0x2edc1b=_0x48907f(_0x4d9f('0xe9'))[_0x4d9f('0xa')]();var _0xffe7ed=Math[_0x4d9f('0xa6')](_0x2edc1b/0x3c);var _0x2a0a05=PARTY_LIST[NOW_PARTY][_0x4d9f('0x98')];var _0x4d2beb=(_0x2a0a05-_0xffe7ed-0x1)*0x3c;if(_0x48907f(this)[_0x4d9f('0x79')]()<0x14){_0x48907f('#footer_left')[_0x4d9f('0x48')]();}else{_0x48907f(_0x4d9f('0x2a'))['show']();}if(_0x48907f(this)[_0x4d9f('0x79')]()>_0x4d2beb){_0x48907f(_0x4d9f('0x8e'))['hide']();}else{_0x48907f('#footer_right')[_0x4d9f('0x55')]();}});_0x48907f(document)['on']('click',_0x4d9f('0x64'),function(){var _0x5854bc=_0x48907f(this)[_0x4d9f('0x0')]('data-id');if(DISPLAY_OPTION['SIM']===0x1){var _0x4092da=_0x48907f(_0x4d9f('0xca')+_0x5854bc)[_0x4d9f('0xe7')](_0x4d9f('0xb1'))[_0x4d9f('0x6f')](_0x4d9f('0x6d'));_0x48907f('html,body')[_0x4d9f('0xc6')]({'scrollTop':_0x4092da[_0x4d9f('0x14')]()[_0x4d9f('0x27')]-0x28},0x1f4,_0x4d9f('0xf7'));}else{_0x48907f('html,body')['animate']({'scrollTop':_0x48907f(_0x4d9f('0xca')+_0x5854bc)[_0x4d9f('0x14')]()[_0x4d9f('0x27')]},0x1f4,_0x4d9f('0xf7'));}});_0x48907f(document)['on']('click',_0x4d9f('0xb3'),function(){_0x48907f('.FOOTER_CLOSE_ARROW')[_0x4d9f('0x6e')](_0x4d9f('0x1c'));_0x48907f(this)[_0x4d9f('0x6e')](_0x4d9f('0x63'))['toggleClass'](_0x4d9f('0x5'));_0x48907f(_0x4d9f('0xc1'))[_0x4d9f('0xe3')]();});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0xf6'),function(){_0x48907f('html,body')['animate']({'scrollTop':_0x48907f(_0x4d9f('0x3e'))['offset']()[_0x4d9f('0x27')]},0x1f4,_0x4d9f('0xf7'));});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x5f'),function(){_0x48907f(_0x4d9f('0xa1'))[_0x4d9f('0xc6')]({'scrollTop':_0x48907f(_0x4d9f('0x7c'))[_0x4d9f('0x14')]()[_0x4d9f('0x27')]},0x1f4,_0x4d9f('0xf7'));});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x40'),function(){_0x48907f(this)[_0x4d9f('0x6e')]('ONLY_MYSTYLE');_0x48907f(this)[_0x4d9f('0x6e')](_0x4d9f('0x7e'));_0x48907f(this)[_0x4d9f('0x6e')](_0x4d9f('0x2'));_0x48907f(this)[_0x4d9f('0x6f')](_0x4d9f('0xdb'))[_0x4d9f('0x6e')](_0x4d9f('0x46'))[_0x4d9f('0x6e')](_0x4d9f('0xc3'));if(_0x48907f(this)[_0x4d9f('0xf3')](_0x4d9f('0xbb'))){IS_SHOW_MY_STYLE=!![];}else{IS_SHOW_MY_STYLE=![];}DISPLAY_OPTION['RE']=Number(IS_SHOW_MY_STYLE);updateDisplayDB();_0x27e083();});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x28'),function(){_0x48907f(this)[_0x4d9f('0x6e')]('SIMPLE_MODE');_0x48907f(this)[_0x4d9f('0x6e')]('icon_btn_on');_0x48907f(this)[_0x4d9f('0x6e')](_0x4d9f('0x2'));_0x48907f(this)[_0x4d9f('0x6f')](_0x4d9f('0xdb'))[_0x4d9f('0x6e')](_0x4d9f('0x46'))[_0x4d9f('0x6e')](_0x4d9f('0xc3'));if(_0x48907f(this)[_0x4d9f('0xf3')](_0x4d9f('0xb7'))){IS_SHOW_ONLY_CHOISE_STYLE=!![];}else{IS_SHOW_ONLY_CHOISE_STYLE=![];}DISPLAY_OPTION['SEL']=Number(IS_SHOW_ONLY_CHOISE_STYLE);updateDisplayDB();_0x27e083();});function _0x27e083(){var _0x461632=[];_0x48907f(_0x4d9f('0x86'))[_0x4d9f('0x1e')](function(){var _0x54ca39=_0x48907f(this)[_0x4d9f('0x0')]('data-styleid');if(!IS_SHOW_MY_STYLE&&!IS_SHOW_ONLY_CHOISE_STYLE){_0x48907f(this)['removeClass'](_0x4d9f('0x1c'));return!![];}if(IS_SHOW_MY_STYLE&&MY_STYLE[_0x4d9f('0x65')](_0x54ca39)==-0x1){_0x48907f(this)[_0x4d9f('0xb9')](_0x4d9f('0x1c'));_0x461632[_0x4d9f('0x4c')](_0x54ca39);}else if(IS_SHOW_ONLY_CHOISE_STYLE&&_0x48907f(this)[_0x4d9f('0xf3')]('partyOtherStyle')){_0x48907f(this)[_0x4d9f('0xb9')](_0x4d9f('0x1c'));}else{_0x48907f(this)[_0x4d9f('0x76')](_0x4d9f('0x1c'));}});_0x48907f(_0x4d9f('0x5d'))[_0x4d9f('0x1e')](function(){_0x48907f(this)['removeClass'](_0x4d9f('0x1c'));var _0x25e22a=_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24'));if(_0x461632[_0x4d9f('0x65')](_0x25e22a)>-0x1){_0x48907f(this)[_0x4d9f('0xb9')]('d-none');}});}_0x48907f(document)['on'](_0x4d9f('0x58'),'#SHOW_SIMPLE_DISPLAY',function(){_0x48907f(this)[_0x4d9f('0x6e')](_0x4d9f('0xb7'));_0x48907f(this)[_0x4d9f('0x6e')](_0x4d9f('0x7e'));_0x48907f(this)[_0x4d9f('0x6e')](_0x4d9f('0x2'));_0x48907f(this)[_0x4d9f('0x6f')]('.fas')[_0x4d9f('0x6e')](_0x4d9f('0x46'))[_0x4d9f('0x6e')](_0x4d9f('0xc3'));if(_0x48907f(this)[_0x4d9f('0xf3')](_0x4d9f('0xb7'))){IS_SIMPLE_MODE=!![];}else{IS_SIMPLE_MODE=![];}DISPLAY_OPTION[_0x4d9f('0xa8')]=Number(IS_SIMPLE_MODE);updateDisplayDB();if(IS_SIMPLE_MODE){_0x48907f(_0x4d9f('0xdf'))[_0x4d9f('0x1e')](function(){_0x48907f(this)[_0x4d9f('0xb9')](_0x4d9f('0x1c'));});}else{_0x48907f(_0x4d9f('0xdf'))['each'](function(){_0x48907f(this)[_0x4d9f('0x76')]('d-none');});}});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x4f'),function(){let _0x20d045=_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24'));_0x48907f(this)['removeClass'](_0x4d9f('0x63'))[_0x4d9f('0xb9')](_0x4d9f('0x5'));_0x48907f(this)[_0x4d9f('0xb4')](0xc8,function(){_0x48907f(this)[_0x4d9f('0x2b')](0xc8);updateDB(_0x20d045);saveCharData(_0x20d045);});});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x39'),function(){let _0x50c34c=_0x48907f(this)[_0x4d9f('0xb0')]()[_0x4d9f('0x6f')](_0x4d9f('0x75'));let _0x4a8b41=_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x5a'))==='plus'?0x1:-0x1;let _0x432cb2=_0x50c34c['val']();let _0x3e35f6=Number(_0x432cb2)+_0x4a8b41;_0x50c34c[_0x4d9f('0x84')](_0x3e35f6);updateDisplayStatus(_0x48907f(this),_0x3e35f6);});_0x48907f(document)['on'](_0x4d9f('0xef'),'.charParam',function(){updateDisplayStatus(_0x48907f(this),_0x48907f(this)[_0x4d9f('0x84')]());});_0x48907f(_0x4d9f('0xc5'))['tooltip']();_0x48907f(document)['on'](_0x4d9f('0x58'),'.openMenu,\x20.nowData\x20>\x20td',function(){let _0x4d26ad=_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24'))!==undefined?_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24')):_0x48907f(this)[_0x4d9f('0xb0')]()[_0x4d9f('0x0')](_0x4d9f('0x24'));NOW_CHAR=CHAR_MASTER[_0x4d26ad];_0x48907f('.charTable')[_0x4d9f('0x1e')](function(){if(_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0xae'))!==_0x4d26ad){_0x48907f(this)[_0x4d9f('0x6f')]('.fukidashiInput')[_0x4d9f('0xb4')]();}});let _0x1edb53=_0x48907f(_0x4d9f('0x2d')+_0x4d26ad)[_0x4d9f('0x6f')](_0x4d9f('0x30'))[_0x4d9f('0x0')](_0x4d9f('0xb5'));if(_0x1edb53===_0x4d9f('0xda')){saveCharData(_0x4d26ad);}_0x48907f(_0x4d9f('0x2d')+_0x4d26ad)[_0x4d9f('0x6f')]('.fukidashiInput')[_0x4d9f('0xe3')](0xfa);});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0xc9'),function(){closeInput(_0x48907f(this)[_0x4d9f('0x0')]('data-id'),!![]);});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0xa2'),function(){var _0x43ecaf=[];for(let _0x49e27e in PARTY_LIST[NOW_PARTY]){var _0x24bcba=PARTY_LIST[NOW_PARTY][_0x49e27e][_0x4d9f('0x90')];_0x43ecaf[_0x4d9f('0x4c')](_0x24bcba);}for(_0x24bcba of _0x43ecaf){charUnset(_0x24bcba);}});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x8c'),function(){let _0x172539=_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24'));charUnset(_0x172539);});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x37'),function(){showModal(_0x48907f(this)[_0x4d9f('0xe7')](_0x4d9f('0xd7'))[_0x4d9f('0x6f')](_0x4d9f('0xf9')));});_0x48907f(document)['on'](_0x4d9f('0xef'),'.allparams',function(){showModal(_0x48907f(this));});_0x48907f(document)['on'](_0x4d9f('0x58'),'.dotList\x20.dot-base',async function(){firebase[_0x4d9f('0xc8')]()[_0x4d9f('0x11')]();firebase[_0x4d9f('0xc8')](appUsers)[_0x4d9f('0x11')]();let _0x75bff9=_0x48907f(this)['find'](_0x4d9f('0x29'))[_0x4d9f('0x0')](_0x4d9f('0x24'));let _0x59d82f=getCharFromPartyList(_0x75bff9);if(PARTY_LIST[NOW_PARTY]['length']>=PARTY_LIMIT||_0x59d82f!==-0x1){while(PARTY_LIST[NOW_PARTY][_0x4d9f('0x98')]>PARTY_LIMIT){let _0x585908=PARTY_LIST[NOW_PARTY][_0x4d9f('0x98')];let _0x1efc26=PARTY_LIST[NOW_PARTY][_0x585908-0x1][_0x4d9f('0x90')];charUnset(_0x1efc26);PARTY_LIST[NOW_PARTY][_0x4d9f('0x47')]();}_0x48907f(this)[_0x4d9f('0x6f')](_0x4d9f('0x29'))[_0x4d9f('0x76')](_0x4d9f('0x77'))['addClass'](_0x4d9f('0xe1'));return;}if(NOW_CHAR['Id']!==undefined){closeInput(NOW_CHAR['Id'],!![]);}NOW_CHAR=CHAR_MASTER[_0x75bff9];_0x48907f(_0x4d9f('0x85'))[_0x4d9f('0x9a')](PARTY_LIST[NOW_PARTY]['length']+0x1);_0x48907f(_0x4d9f('0x31'))[_0x4d9f('0x55')]();selectDotHensei(NOW_CHAR);readUserDataWithId(_0x4d9f('0x57'),_0x75bff9,async function(_0x54efab){await displayCharInfo(CHAR_MASTER[_0x75bff9],_0x54efab);var _0x14f165=NOW_CHAR['Holders'][0x0];for(var _0x14f165 of NOW_CHAR[_0x4d9f('0xd0')]){if(IS_SHOW_MY_STYLE){if(MY_STYLE[_0x4d9f('0x65')](_0x14f165)>-0x1){NOW_STYLE=STYLE_MASTER[_0x14f165];break;}}else{NOW_STYLE=STYLE_MASTER[_0x14f165];break;}}await displayStyleInfo(NOW_CHAR['Id'],_0x14f165);PARTY_LIST[NOW_PARTY]['push']({'char':_0x75bff9,'style':_0x14f165});var _0x533eb2=_0x48907f('#PARTY_FOOTER')['width']();var _0x5d6afe=Math['floor'](_0x533eb2/0x3c);var _0x324acd=PARTY_LIST[NOW_PARTY]['length'];if(_0x324acd>_0x5d6afe){_0x48907f(_0x4d9f('0x8e'))[_0x4d9f('0x55')]();}_0x48907f(_0x4d9f('0x2d')+_0x75bff9)[_0x4d9f('0x6f')](_0x4d9f('0x2f'))[_0x4d9f('0x76')]('d-none')[_0x4d9f('0x2b')](0x1f4);setLimitData(_0x75bff9);updatePartyDB();});_0x48907f(_0x4d9f('0xc5'))[_0x4d9f('0x32')]();});_0x48907f(document)['on'](_0x4d9f('0x58'),_0x4d9f('0x7f'),async function(){let _0x1148bd=_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24'));NOW_STYLE=STYLE_MASTER[_0x1148bd];await displayStyleInfo(NOW_CHAR['Id'],_0x1148bd);let _0x769d0f=getCharFromPartyList(NOW_CHAR['Id']);PARTY_LIST[NOW_PARTY][_0x769d0f][_0x4d9f('0xb5')]=_0x1148bd;updatePartyDB();});_0x48907f(_0x4d9f('0xcb'))[_0x4d9f('0x58')](function(){if(_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24'))==='ok'){gtag(_0x4d9f('0xf8'),_0x4d9f('0x82'),{'event_category':_0x4d9f('0x3c'),'event_label':'save','value':0x1});let _0x4b297a=_0x48907f(this)['attr'](_0x4d9f('0x45'));let _0x680338=splitParam(_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x3a')),0x0);for(let _0x4711e2 in _0x680338){_0x48907f('.charInput'+PARAM_KEY_HP[_0x4711e2]+_0x4b297a)['each'](function(_0x2e214a,_0x135ab2){_0x48907f(_0x135ab2)[_0x4d9f('0x84')](_0x680338[_0x4711e2]);});_0x48907f(_0x4d9f('0x29')+PARAM_KEY_HP[_0x4711e2]+_0x4b297a)['each'](function(_0x58e60e,_0x4833af){_0x48907f(_0x4833af)['text'](_0x680338[_0x4711e2]);});}updateDB();}else{gtag(_0x4d9f('0xf8'),_0x4d9f('0x82'),{'event_category':_0x4d9f('0x3c'),'event_label':_0x4d9f('0xf0'),'value':0x1});}_0x48907f('#modal01')[_0x4d9f('0x51')]();_0x48907f(_0x4d9f('0x38'))[_0x4d9f('0x52')](_0x4d9f('0x80'),_0x4d9f('0x10'));return![];});_0x48907f(_0x4d9f('0xdd'))[_0x4d9f('0x58')](function(){_0x48907f(_0x4d9f('0xdd'))[_0x4d9f('0x1e')](function(){_0x48907f(this)[_0x4d9f('0x76')](_0x4d9f('0x7e'));_0x48907f(this)[_0x4d9f('0xb9')](_0x4d9f('0x2'));});_0x48907f(this)[_0x4d9f('0x76')](_0x4d9f('0x2'));_0x48907f(this)[_0x4d9f('0xb9')]('icon_btn_on');questId=Number(_0x48907f(this)['attr']('data-id'));DISPLAY_OPTION['Q']=questId;updateDisplayDB();_0x48907f(_0x4d9f('0x12'))[_0x4d9f('0xb4')]();_0x48907f('#quest'+questId)[_0x4d9f('0x2b')]();});_0x48907f(_0x4d9f('0x15'))[_0x4d9f('0x58')](function(){_0x48907f('.baseValue')['each'](function(){_0x48907f(this)[_0x4d9f('0x76')](_0x4d9f('0x7e'));_0x48907f(this)[_0x4d9f('0xb9')](_0x4d9f('0x2'));});_0x48907f(this)['removeClass'](_0x4d9f('0x2'));_0x48907f(this)[_0x4d9f('0xb9')](_0x4d9f('0x7e'));BASE=Number(_0x48907f(this)[_0x4d9f('0x0')](_0x4d9f('0x24')));DISPLAY_OPTION['BS']=BASE;updateDisplayDB();var _0x1a29f0=(BASE+0x1a)*0xa;setLimitData();_0x48907f(_0x4d9f('0xc4'))[_0x4d9f('0x9a')](_0x48907f(this)[_0x4d9f('0x9a')]()+(_0x4d9f('0x83')+_0x1a29f0+')'));_0x48907f(_0x4d9f('0xea'))[_0x4d9f('0x9a')](BASE);});});async function renderParty(){let _0x1b9c57=0x0;PARTY_LIST[0x0]=PARTY_LIST[0x0][_0x4d9f('0x6c')](_0x233e24=>CHAR_MASTER[_0x233e24['char']]!==undefined);let _0x599dc5=PARTY_LIST[0x0][_0x1b9c57];let _0x50be32=0x0;let _0xe8b29a=[];while(_0x599dc5!==undefined){let _0x12c4f1=_0x599dc5[_0x4d9f('0x90')];let _0x4548db=_0x599dc5['style'];NOW_CHAR=CHAR_MASTER[_0x12c4f1];selectDotHensei(CHAR_MASTER[_0x12c4f1]);let _0x26dba1=asyncReadUserDataWithId(_0x4d9f('0x57'),_0x12c4f1,async function(_0x187075){await displayCharInfo(CHAR_MASTER[_0x12c4f1],_0x187075);await displayStyleInfo(_0x12c4f1,_0x4548db);if(_0x50be32===PARTY_LIST[0x0][_0x4d9f('0x98')]){}closeInput(_0x12c4f1,![]);});_0xe8b29a[_0x4d9f('0x4c')](_0x26dba1);_0x599dc5=PARTY_LIST[0x0][++_0x1b9c57];}var _0x5226af=$('#PARTY_FOOTER')['width']();var _0x13c581=Math[_0x4d9f('0xa6')](_0x5226af/0x3c);var _0x10828d=PARTY_LIST[0x0][_0x4d9f('0x98')];if(_0x10828d>_0x13c581){$(_0x4d9f('0x8e'))[_0x4d9f('0x55')]();}await Promise[_0x4d9f('0xe2')](_0xe8b29a);}function closeInput(_0x4557f7,_0x1c2ed1=![]){$(_0x4d9f('0x2d')+_0x4557f7)[_0x4d9f('0x6f')](_0x4d9f('0x30'))[_0x4d9f('0xb4')](0xfa);if(_0x1c2ed1){saveCharData(_0x4557f7);}}function updateDisplayStatus(_0xf8eba0,_0x1331dc){var _0x3e2ea2=_0xf8eba0[_0x4d9f('0xe7')](_0x4d9f('0x9'))[_0x4d9f('0x6f')]('.CHAR_SAVE');_0x3e2ea2[_0x4d9f('0x76')]('icon_btn_negative')[_0x4d9f('0xb9')](_0x4d9f('0x63'));let _0xf2d190=_0xf8eba0[_0x4d9f('0xe7')](_0x4d9f('0x9'));let _0x535f9a=_0xf2d190[_0x4d9f('0x0')]('data-charid');let _0x345b82=_0xf8eba0[_0x4d9f('0x0')](_0x4d9f('0x73'));$('.char'+_0x345b82+_0x535f9a)[_0x4d9f('0x1e')](function(){$(this)[_0x4d9f('0x9a')](_0x1331dc);});$(_0x4d9f('0xf1')+_0x345b82+_0x535f9a)[_0x4d9f('0x1e')](function(){$(this)[_0x4d9f('0x84')](_0x1331dc);});updateDB(_0x535f9a);}function charUnset(_0x5f1473){let _0x4b776f=CHAR_MASTER[_0x5f1473];selectDotReset(_0x4b776f);$(_0x4d9f('0x2d')+_0x5f1473)[_0x4d9f('0xe7')](_0x4d9f('0xb1'))[_0x4d9f('0xb4')](0x1f4,function(){$(_0x4d9f('0xe5'))[_0x4d9f('0x6f')](_0x4d9f('0x2d')+_0x5f1473)[_0x4d9f('0xe7')](_0x4d9f('0xb1'))[_0x4d9f('0xee')]();});$(_0x4d9f('0x62'))[_0x4d9f('0x6f')](_0x4d9f('0xe4')+_0x5f1473)[_0x4d9f('0xee')]();$(_0x4d9f('0x9f')+_0x5f1473)[_0x4d9f('0xee')]();let _0x251432=getCharFromPartyList(_0x5f1473);if(_0x251432!==-0x1){PARTY_LIST[NOW_PARTY][_0x4d9f('0xa4')](_0x251432,0x1);$(_0x4d9f('0x85'))[_0x4d9f('0x9a')](PARTY_LIST[NOW_PARTY][_0x4d9f('0x98')]);}updatePartyDB();saveCharData(_0x5f1473);var _0x4b750d=$('#PARTY_FOOTER')[_0x4d9f('0xa')]();var _0x3502d7=Math[_0x4d9f('0xa6')](_0x4b750d/0x3c);var _0x59b742=PARTY_LIST[NOW_PARTY][_0x4d9f('0x98')];if(_0x59b742<=_0x3502d7){$(_0x4d9f('0x2a'))[_0x4d9f('0x48')]();$('#footer_right')[_0x4d9f('0x48')]();}}function getCharFromPartyList(_0x1fb137){for(let _0x493425 in PARTY_LIST[NOW_PARTY]){if(PARTY_LIST[NOW_PARTY][_0x493425][_0x4d9f('0x90')]===_0x1fb137){return _0x493425;}}return-0x1;}function updateDB(_0x3f7834){let _0x117c0e=_0x3f7834===undefined?NOW_CHAR['Id']:_0x3f7834;for(let _0x132ebd of PARAM_KEY_HP){let _0x1f3222=$(_0x4d9f('0x29')+_0x132ebd+_0x117c0e)[_0x4d9f('0xdc')]()[_0x4d9f('0x9a')]();CHAR_MASTER[_0x117c0e]['NOW'+_0x132ebd]=Number(_0x1f3222);}if(NOW_CHAR_ID!==_0x117c0e){if(NOW_CHAR_ID!==''){saveCharData(NOW_CHAR_ID);}NOW_CHAR_ID=_0x117c0e;}setLimitData(_0x117c0e);}function updatePartyDB(){updateData(_0x4d9f('0xc0'),PARTY_LIST);}function updateDisplayDB(){if(DISP_UPDATE_FLG){updateData('DISPLAY/PARTY',DISPLAY_OPTION);}}function showModal(_0x36698b){gtag('event',_0x4d9f('0x82'),{'event_category':_0x4d9f('0x3c'),'event_label':_0x4d9f('0x55'),'value':0x1});$(_0x4d9f('0x68'))[_0x4d9f('0x0')](_0x4d9f('0x3a'),$(_0x36698b)[_0x4d9f('0x84')]());$(_0x4d9f('0x68'))['attr'](_0x4d9f('0x45'),$(_0x36698b)[_0x4d9f('0x0')](_0x4d9f('0x24')));let _0x29d26b=splitParam($(_0x36698b)[_0x4d9f('0x84')](),'不明');let _0xf413f0='';_0xf413f0+=_0x4d9f('0x4a')+_0x29d26b[0x0]+_0x4d9f('0x8f');_0xf413f0+=_0x4d9f('0x6')+_0x29d26b[0x1]+_0x4d9f('0x97')+_0x29d26b[0x2]+_0x4d9f('0x8f');_0xf413f0+=_0x4d9f('0x50')+_0x29d26b[0x3]+'\x20素早さ:'+_0x29d26b[0x4]+_0x4d9f('0x8f');_0xf413f0+=_0x4d9f('0x1a')+_0x29d26b[0x5]+'\x20精神:'+_0x29d26b[0x6]+'<br>';_0xf413f0+=_0x4d9f('0xde')+_0x29d26b[0x7]+_0x4d9f('0x70')+_0x29d26b[0x8]+_0x4d9f('0x8f');_0xf413f0+='が入力されました<br>';_0xf413f0+='この内容を反映してもよろしいですか？';$(_0x4d9f('0xd6'))[_0x4d9f('0x1f')](_0xf413f0);$(_0x4d9f('0xa7'))[_0x4d9f('0x59')]();$(_0x4d9f('0x38'))[_0x4d9f('0x52')](_0x4d9f('0x80'),_0x4d9f('0x53'));return![];}function setLimitData(_0x44dfd1=undefined){$(_0x4d9f('0x86'))[_0x4d9f('0x1e')](function(){let _0x455a2d=$(this)[_0x4d9f('0x0')](_0x4d9f('0x36'));let _0x100b96=STYLE_MASTER[_0x455a2d];let _0x5002a7=$(_0x4d9f('0xbc')+_0x455a2d);let _0x5a7310=_0x5002a7['attr'](_0x4d9f('0x45'));if(_0x44dfd1!==undefined&&_0x5a7310!=_0x44dfd1){return!![];}let _0x501b3c=0x0;for(let _0x4416a4 of PARAM_KEY){let _0x93fd3d=_0x100b96['Limit'+_0x4416a4];let _0x281554=CHAR_MASTER[_0x5a7310][_0x4d9f('0xb6')+_0x4416a4]!==undefined?CHAR_MASTER[_0x5a7310]['NOW'+_0x4416a4]:CHAR_MASTER[_0x5a7310][_0x4416a4];_0x501b3c+=_0x281554;let _0x3667f2=_0x100b96[_0x4d9f('0x9d')+_0x4416a4]!==0x63?BASE+Number(_0x93fd3d)-Number(_0x281554):'?';_0x5002a7[_0x4d9f('0x6f')]('.'+_0x4416a4)['each'](function(){$(this)[_0x4d9f('0x76')](_0x4d9f('0x99'))['removeClass'](_0x4d9f('0x4b'));if(_0x3667f2==='?'){$(this)['addClass'](_0x4d9f('0x8a'));}else if(_0x3667f2>0x0){$(this)['addClass'](_0x4d9f('0x99'));}else if(_0x3667f2<0x0){$(this)[_0x4d9f('0xb9')]('status_minus');}$(this)[_0x4d9f('0x9a')](_0x3667f2);});let _0x18023c=_0x100b96['Ind'+_0x4416a4]!==undefined?_0x100b96[_0x4d9f('0x96')+_0x4416a4]:0x1;var _0xd5185a=getImgPath(_0x4d9f('0xb')+_0x18023c+'.png');let _0x1286b4=_0x4d9f('0x19')+_0xd5185a+_0x4d9f('0xd1');_0x5002a7[_0x4d9f('0x6f')]('.'+_0x4416a4+_0x4d9f('0xb2'))['each'](function(){let _0x34640e=BASE+Number(_0x93fd3d);let _0x2e8fe3=Number(_0x93fd3d)-CHAR_MASTER[_0x5a7310][_0x4416a4];$(this)['html'](_0x1286b4+'\x20'+_0x34640e+'\x20('+_0x2e8fe3+')');});}let _0x125132=(_0x501b3c-0x171)/0x8;let _0x19f9d2='+'+_0x125132;if(_0x501b3c===0x171){_0x19f9d2=0x0;}else if(_0x125132<0x0){_0x19f9d2=_0x125132;}let _0x397f12='遠征';if(_0x125132>=0x20){_0x397f12=_0x4d9f('0xe0');}else if(_0x125132>=0x1d){_0x397f12=_0x4d9f('0x3');}else if(_0x125132>=0x1a){_0x397f12=_0x4d9f('0x92');}else if(_0x125132>=0x17){_0x397f12=_0x4d9f('0xcd');}else if(_0x125132>=0x14){_0x397f12=_0x4d9f('0xd3');}else if(_0x125132>0x12){_0x397f12=_0x4d9f('0x8');}else if(_0x125132>0x10){_0x397f12=_0x4d9f('0x44');}else if(_0x125132>0xf){_0x397f12='旧外伝1以降';}else if(_0x125132>0xc){_0x397f12=_0x4d9f('0xcf');}else if(_0x125132>0x8){_0x397f12=_0x4d9f('0x71');}else if(_0x125132>0x5){_0x397f12=_0x4d9f('0x4');}else if(_0x125132>0x0){_0x397f12=_0x4d9f('0xe');}$(_0x4d9f('0xf5')+_0x5a7310)[_0x4d9f('0x9a')](_0x501b3c);$(_0x4d9f('0x17')+_0x5a7310)[_0x4d9f('0x9a')](_0x19f9d2);$(_0x4d9f('0x7')+_0x5a7310)[_0x4d9f('0x9a')](_0x397f12);});}function saveCharData(_0x425afb){$(_0x4d9f('0x2d')+_0x425afb)[_0x4d9f('0x6f')](_0x4d9f('0x78'))[_0x4d9f('0x76')](_0x4d9f('0x63'))[_0x4d9f('0xb9')](_0x4d9f('0x5'));update={};let _0x1a6751=0x0;for(let _0x30a73e of PARAM_KEY){let _0x55990e=Number(CHAR_MASTER[_0x425afb][_0x4d9f('0xb6')+_0x30a73e]);_0x55990e=isNaN(_0x55990e)||_0x55990e>LIMIT_BASE+0x10?0x0:_0x55990e;_0x1a6751+=_0x55990e;update[_0x30a73e]=_0x55990e;}let _0x9421ee=Number(CHAR_MASTER[_0x425afb]['NOWHP']);update['HP']=isNaN(_0x9421ee)||_0x9421ee>HP_LIMIT?0x0:_0x9421ee;gtag('event',_0x4d9f('0x5b'),{'event_category':_0x4d9f('0x3c'),'event_label':CHAR_MASTER[_0x425afb][_0x4d9f('0x23')],'value':0x1});if(_0x1a6751>0x0){updateData(_0x4d9f('0x6a')+_0x425afb,update);}else{}}function initialHide(){$(_0x4d9f('0xe5'))[_0x4d9f('0x48')]();$(_0x4d9f('0x5c'))[_0x4d9f('0x48')]();$(_0x4d9f('0x31'))[_0x4d9f('0x48')]();}async function displayCharInfo(_0x191391,_0x114cc5){let _0x1bde00=_0x191391['Id'];let _0x32fbdc=$('#CHAR_TEMPLATE_PARENT')[_0x4d9f('0xc')]()[_0x4d9f('0x76')](_0x4d9f('0x1c'))[_0x4d9f('0x88')]('id');if(IS_SIMPLE_MODE){_0x32fbdc['find']('.SIMPLE_HIDE')[_0x4d9f('0xb9')]('d-none');}let _0x209a52=$(_0x4d9f('0x54'))[_0x4d9f('0xc')]()[_0x4d9f('0x76')](_0x4d9f('0x1c'))[_0x4d9f('0x88')]('id')[_0x4d9f('0xb9')](_0x4d9f('0x13')+_0x1bde00)[_0x4d9f('0x0')](_0x4d9f('0x45'),_0x1bde00);_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0xc9'))[_0x4d9f('0x0')]('data-id',_0x1bde00);_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0x8c'))['attr']('data-id',_0x1bde00);_0x32fbdc[_0x4d9f('0x6f')](_0x4d9f('0x8c'))[_0x4d9f('0x0')]('data-id',_0x1bde00);_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0x29'))[_0x4d9f('0xb0')]()['attr']('data-id',_0x1bde00);_0x209a52[_0x4d9f('0x6f')]('.allparams')[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00);_0x209a52[_0x4d9f('0x6f')]('.CHAR_SAVE')[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00);_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0xf5'))[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00)[_0x4d9f('0xb9')](_0x4d9f('0x67')+_0x1bde00);_0x209a52[_0x4d9f('0x6f')]('.AVG')[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00)[_0x4d9f('0xb9')](_0x4d9f('0x7a')+_0x1bde00);_0x209a52[_0x4d9f('0x6f')]('.RECO')[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00)[_0x4d9f('0xb9')](_0x4d9f('0x89')+_0x1bde00);var _0x2cd626=_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0xd7'));_0x2cd626[_0x4d9f('0x6f')](_0x4d9f('0x60'))[_0x4d9f('0xb4')]();_0x2cd626['find'](_0x4d9f('0x6b'))['click'](function(){$(this)['parents'](_0x4d9f('0xd7'))['find'](_0x4d9f('0x60'))[_0x4d9f('0xe3')]();});_0x32fbdc[_0x4d9f('0x6f')]('.SUM')[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00)[_0x4d9f('0xb9')](_0x4d9f('0x67')+_0x1bde00);_0x32fbdc[_0x4d9f('0x6f')](_0x4d9f('0x17'))[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00)[_0x4d9f('0xb9')](_0x4d9f('0x7a')+_0x1bde00);_0x32fbdc[_0x4d9f('0x6f')]('.RECO')[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00)[_0x4d9f('0xb9')](_0x4d9f('0x89')+_0x1bde00);_0x32fbdc[_0x4d9f('0x6f')](_0x4d9f('0xce'))[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00);_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0x20'))[_0x4d9f('0x0')]('id',_0x4d9f('0x4d')+_0x1bde00);if(_0x114cc5!==null){for(let _0x36e493 of PARAM_KEY_HP){_0x191391[_0x4d9f('0xb6')+_0x36e493]=Number(_0x114cc5[_0x36e493]);}}else if(_0x114cc5===null){for(let _0x3314f9 of PARAM_KEY){_0x191391['NOW'+_0x3314f9]=0x0;}}let _0x42f26c=_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0xbd'));_0x42f26c[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x1bde00);for(let _0x1285f9 of PARAM_KEY_HP){_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0x29')+_0x1285f9)['removeClass'](_0x4d9f('0x90')+_0x1285f9)[_0x4d9f('0xb9')](_0x4d9f('0x21')+_0x1285f9+_0x1bde00)[_0x4d9f('0x84')](_0x191391[_0x4d9f('0xb6')+_0x1285f9]);_0x42f26c['find']('.'+_0x1285f9)[_0x4d9f('0x76')]('char'+_0x1285f9)[_0x4d9f('0xb9')](_0x4d9f('0x90')+_0x1285f9+_0x1bde00)['text'](_0x191391[_0x4d9f('0xb6')+_0x1285f9]);}var _0x5e6da6=[];for(let _0x2f03d5 of _0x191391['Holders']){_0x5e6da6[_0x4d9f('0x4c')](STYLE_MASTER[_0x2f03d5]);}var _0x3ece75=sortStyleId(_0x5e6da6);for(let _0x29b681 of _0x3ece75){let _0x261e29=STYLE_MASTER[_0x29b681];let _0x21c3bf=getStyleIcon(_0x261e29[_0x4d9f('0x42')],_0x29b681,_0x191391[_0x4d9f('0xac')]);_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0xd8'))[_0x4d9f('0x69')](_0x21c3bf);let _0x3c5ef1=$(_0x4d9f('0xa5'))[_0x4d9f('0xc')]()['removeClass'](_0x4d9f('0x1c'))[_0x4d9f('0x88')]('id')[_0x4d9f('0xb9')](_0x4d9f('0x3b')+_0x29b681)[_0x4d9f('0x0')](_0x4d9f('0x36'),_0x29b681)[_0x4d9f('0x0')]('data-charId',_0x1bde00);if(IS_SET_MY_STYLE&&IS_SHOW_MY_STYLE&&MY_STYLE[_0x4d9f('0x65')](_0x29b681)==-0x1){_0x3c5ef1[_0x4d9f('0xb9')](_0x4d9f('0x1c'));_0x21c3bf[_0x4d9f('0xb9')]('d-none');}var _0xf336a3=getImgPath(_0x4d9f('0x9b')+_0x29b681+_0x4d9f('0x1d'));var _0x15c151=getImgPath(_0x4d9f('0x95')+_0x261e29[_0x4d9f('0x42')]+'.png');var _0x2876a6=$('<img\x20class=\x22\x22\x20src=\x22'+_0x15c151+'\x22\x20style=\x22position:absolute;\x20left:0;\x20top:\x200px;\x20height:22px\x22>');_0x3c5ef1[_0x4d9f('0x6f')](_0x4d9f('0x74'))[_0x4d9f('0x69')](_0x2876a6)['attr'](_0x4d9f('0xb5'),_0x4d9f('0x61')+_0xf336a3+')\x20no-repeat;\x20background-size:cover;\x20background-position:\x20calc(50%\x20+\x2020px);');var _0x300f31=_0x3c5ef1[_0x4d9f('0xc')]();_0x300f31[_0x4d9f('0xb9')]('INPUT_AREA');_0x300f31[_0x4d9f('0xb9')](_0x4d9f('0xd2'));let _0x22d902=_0x261e29[_0x4d9f('0xa3')]==='f';let _0x77531=_0x261e29['Fix']==='c';for(let _0x2e6ef6 of PARAM_KEY){let _0x219aee=_0x261e29[_0x4d9f('0x9d')+_0x2e6ef6];if(_0x219aee===0x63){_0x3c5ef1[_0x4d9f('0x6f')]('.'+_0x2e6ef6)[_0x4d9f('0x9a')]('?');}else{let _0x16f9a6=BASE+Number(_0x219aee);let _0x3b5f9d=Number(_0x219aee)-_0x191391[_0x2e6ef6];let _0x1a309e='';if(_0x22d902||_0x261e29[_0x4d9f('0xa3')+_0x2e6ef6]=='k'||_0x261e29[_0x4d9f('0xa3')+_0x2e6ef6]=='f'||_0x3b5f9d===0x0){_0x1a309e=_0x4d9f('0x43');}else if(!_0x77531){_0x1a309e='fuchidori-yellow\x20kari-bgcolor';}_0x300f31['find']('.'+_0x2e6ef6)[_0x4d9f('0xb9')](_0x1a309e)[_0x4d9f('0x76')](_0x2e6ef6)['addClass'](_0x2e6ef6+_0x4d9f('0xb2'));}}_0x209a52['append'](_0x3c5ef1);_0x209a52[_0x4d9f('0x6f')](_0x4d9f('0x20')+_0x1bde00)['before'](_0x300f31);}var _0x40510c=getCharBase('',_0x191391[_0x4d9f('0xd9')],_0x191391[_0x4d9f('0x23')]);var _0x19edd5=_0x40510c['clone']();_0x40510c[_0x4d9f('0x6f')]('.char-aruku-left')[_0x4d9f('0xb9')]('char-winner')['removeClass'](_0x4d9f('0x56'))[_0x4d9f('0x88')]('id')['attr']('id',_0x4d9f('0x2c')+_0x191391['Id']);_0x32fbdc[_0x4d9f('0x6f')](_0x4d9f('0x5e'))[_0x4d9f('0x69')](_0x40510c[_0x4d9f('0xc')]());_0x32fbdc[_0x4d9f('0x6f')](_0x4d9f('0x6d'))[_0x4d9f('0x69')](_0x209a52);$(_0x4d9f('0xe5'))[_0x4d9f('0x69')](_0x32fbdc);var _0x1dff60=_0x19edd5[_0x4d9f('0x6f')](_0x4d9f('0x29'));_0x1dff60[_0x4d9f('0x0')]('id','btmdot'+_0x191391['Id'])[_0x4d9f('0x0')](_0x4d9f('0x24'),_0x191391['Id'])[_0x4d9f('0xb9')](_0x4d9f('0xf'));$(_0x4d9f('0x62'))[_0x4d9f('0x69')](_0x1dff60[_0x4d9f('0xc')]());}async function displayStyleInfo(_0x43403f,_0x44028a){let _0x1fdda1=STYLE_MASTER[_0x44028a];if(_0x1fdda1===null){return;}$(_0x4d9f('0x2d')+_0x43403f)['attr'](_0x4d9f('0x36'),_0x44028a);$('.charTmpl'+_0x43403f)[_0x4d9f('0x6f')](_0x4d9f('0x7f'))[_0x4d9f('0x1e')](function(){let _0xda5145=$(this)['attr'](_0x4d9f('0x24'));$(this)[_0x4d9f('0x6f')](_0x4d9f('0xe8'))[_0x4d9f('0xb9')]('icon_nocheck');if(_0x44028a===_0xda5145){$(this)[_0x4d9f('0x6f')](_0x4d9f('0xe8'))[_0x4d9f('0x76')](_0x4d9f('0xed'));return;}});var _0x4c7366=[];$('.charTmpl'+_0x43403f)[_0x4d9f('0x6f')](_0x4d9f('0x86'))['each'](function(){if($(this)['hasClass'](_0x4d9f('0x9e'))){return;}var _0x2a4983=IS_SHOW_ONLY_CHOISE_STYLE?_0x4d9f('0x1c'):'';if($(this)[_0x4d9f('0xf3')]('limit'+_0x44028a)){$(this)[_0x4d9f('0x76')](_0x4d9f('0x49')+_0x2a4983)[_0x4d9f('0xb9')](_0x4d9f('0xf2'));}else{$(this)['addClass'](_0x4d9f('0x49')+_0x2a4983)['removeClass'](_0x4d9f('0xf2'));}});let _0x24f8ce=$(_0x4d9f('0xca')+_0x43403f);let _0x4e5f46=_0x1fdda1[_0x4d9f('0xd9')];let _0x503a95=_0x4e5f46!==_0x4d9f('0x16')?_0x4e5f46:_0x4d9f('0x9c');var _0x4dca86=getImgPath(_0x4d9f('0x2e')+_0x503a95+_0x4d9f('0x1d'));_0x24f8ce[_0x4d9f('0x0')](_0x4d9f('0xb5'),_0x4d9f('0x1')+_0x4dca86+')\x20no-repeat;\x20position:\x20relative;');var _0x2354e0=getImgPath(_0x4d9f('0xb8')+_0x1fdda1[_0x4d9f('0x42')][_0x4d9f('0xcc')]()+_0x4d9f('0x1d'));_0x24f8ce[_0x4d9f('0xb0')]()[_0x4d9f('0x6f')](_0x4d9f('0x91'))[_0x4d9f('0x0')](_0x4d9f('0x4e'),_0x2354e0);if(_0x24f8ce[_0x4d9f('0x98')]>0x0){animeReset(_0x24f8ce,'char-winner');}}function splitParam(_0x581668,_0x1a6bc2){k=/,|\.|\s|\t/g;let _0x358415=_0x581668['split'](k);if(_0x358415[_0x4d9f('0x98')]===0x1){_0x358415[0x0]=_0x581668[_0x4d9f('0xaf')](0x0,0x3);_0x358415[0x1]=_0x581668[_0x4d9f('0xaf')](0x3,0x2);_0x358415[0x2]=_0x581668[_0x4d9f('0xaf')](0x5,0x2);_0x358415[0x3]=_0x581668[_0x4d9f('0xaf')](0x7,0x2);_0x358415[0x4]=_0x581668[_0x4d9f('0xaf')](0x9,0x2);_0x358415[0x5]=_0x581668[_0x4d9f('0xaf')](0xb,0x2);_0x358415[0x6]=_0x581668[_0x4d9f('0xaf')](0xd,0x2);_0x358415[0x7]=_0x581668[_0x4d9f('0xaf')](0xf,0x2);_0x358415[0x8]=_0x581668[_0x4d9f('0xaf')](0x11,0x2);}for(let _0x33003a=0x0;_0x33003a<0x9;_0x33003a++){if(_0x358415[_0x33003a]===undefined||_0x358415[_0x33003a]===''){_0x358415[_0x33003a]=_0x1a6bc2;}}return _0x358415;}function selectDotReset(_0x15a1a5){$('.dot'+_0x15a1a5[_0x4d9f('0xd9')])[_0x4d9f('0x76')](_0x4d9f('0x66'))[_0x4d9f('0xb9')](_0x4d9f('0x77'))[_0x4d9f('0x6f')]('.series-button')[_0x4d9f('0x9a')](_0x15a1a5[_0x4d9f('0x3f')]);}function selectDotHensei(_0x57f922){$(_0x4d9f('0xeb')+_0x57f922[_0x4d9f('0xd9')])[_0x4d9f('0x76')](_0x4d9f('0x77'))[_0x4d9f('0x76')](_0x4d9f('0xe1'))[_0x4d9f('0xb9')](_0x4d9f('0x66'))['find'](_0x4d9f('0xd'))[_0x4d9f('0x9a')](_0x4d9f('0x93'));}