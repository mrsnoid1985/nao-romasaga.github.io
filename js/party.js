var _0x5a3a=['VH10(最大:+11)','VH9(最大:+9)','VH415(最大:+0)','.SUM','.AVG','.RECO','NOWHP','saveChar','Name','log','hide','.tabArea','#CHAR_TEMPLATE','removeAttr','charTmpl','.charName','.openMenu','SUM','AVG','RECO','#insotsu','insotsu','name','roleType','#baby','baby','.insotsuLabel','for','.babyLabel','ID4e2c8','ID4e2c9','dot/','.png','.dot_mid','.nowData','charInput','<button>','Rarity','style_icon/','<span>','.STYLE_ICON','#LIMIT_TEMPLATE','LIMIT\x20limit','./img/icon/icon_','.icn','./img/style_icon/','./img/style_cutin/','#JINKEI','children','<p\x20class=\x22series-button\x20text-center\x22\x20style=\x22width:30px;\x20margin-bottom:0px;\x22>','</p>','<span\x20class=\x22char-winner\x20char\x20dot_mid\x20dot\x22\x20style=\x22','\x22\x20data-charId=\x27','JINKEI','<div\x20class=\x27charTableParent\x27>','opacity_nocheck','hasClass','limit','inputArea','border:\x201px\x20solid\x20#faf0b4','inputArea\x20d-lg-table-row','border:\x200px','DotId','char-winner','_small','height:\x2030px;','split','.dot','.series-button','編成中','\x20margin-left:0px;\x20position:\x20relative;','dotID36a38','dotID35d54','dotID39274','dotID377e4','dotID94f34','dotID94f98','dotID94ffc','dotID95060','https://nao-romasaga.github.io/party.html','TwitterAuthProvider','PROVIDER_ID','auth','start','#firebaseui-auth-container','.noLogin','.isLogin','d-none','attr','src','width:40px;\x20heidht:40px;\x20\x20\x20\x20border-radius:\x2050%;','displayName','\x20さん:ログイン中','bg-white\x20kadomaru','append','#charData','show','tooltip','.initialHide','removeClass','slideUp','floor','getTime','getMonth','getDate','getHours','slice','getMinutes','<div>','まで</div>','#_icon_toku','first','clone','filter','char','style','CHAR','length','all','.charTmpl','find','.fukidashiInput','ready','.filterList','click','.weaponList','addClass','substr','filterActive','.SeriesChoise','each','parent','toggleClass','.tab-content','.charParam','data-pm','val','.CHAR_SAVE','data-id','icon_btn_on','slideDown','icon_btn_off','change','parents','.charTable','data-charid','data-param','.char','text','.charInput','[data-toggle=\x22tooltip\x22]','.openMenu,\x20.nowData\x20>\x20td','display:\x20block;','slideToggle','.btn_close','.charUnset','#PARTY','remove','splice','.tab-content\x20.char,\x20.weaponList\x20\x20.char','database','goOnline','pop','char-aruku','char-loser','Holders','push','.styleInfoArea','.inputArea','html,body','animate','offset','top','swing','.style','PARTY','.allparams','event','showModal','party','#allSubmit','data-charId','HP:\x20','<br>','腕力:\x20','\x20素早さ:','知力:\x20','\u3000愛:\x20','\x20魅力:','この内容を反映してもよろしいですか？','#allParamConfirm','html','#modal01','fadeIn','#allParamConfirmInner','css','animation','modal\x200.5s\x20forwards','.modalClose','save','data-input','cancel','fadeOut','.baseValue','.LIMIT','data-styleId','.limit','Limit','NOW','status_plus','status_minus','VH11(最大:+13)'];(function(_0x214f39,_0x177555){var _0x5626c8=function(_0x4e088b){while(--_0x4e088b){_0x214f39['push'](_0x214f39['shift']());}};_0x5626c8(++_0x177555);}(_0x5a3a,0x11a));var _0x14b6=function(_0x4961a5,_0xb8cbfb){_0x4961a5=_0x4961a5-0x0;var _0x4774d4=_0x5a3a[_0x4961a5];return _0x4774d4;};var BASE_SKILL_LIST=[];var USE_SKILL_LIST=[];var NOW_CHAR={};var NOW_CHAR_ID='';var NOW_STYLE={};var NOW_PARTY=0x0;var PARTY_LIST=[[]];var BASE=LIMIT_BASE;var UID;var dotStyle=_0x14b6('0x0');var EVENT_ABILITY={1563735600:[_0x14b6('0x1'),_0x14b6('0x2'),_0x14b6('0x3'),_0x14b6('0x4')],1565550000:[_0x14b6('0x5'),_0x14b6('0x6'),_0x14b6('0x7'),_0x14b6('0x8')]};function _noLoginInitial(){var _0x445dd7={'signInSuccessUrl':_0x14b6('0x9'),'signInOptions':[firebase['auth'][_0x14b6('0xa')][_0x14b6('0xb')]]};var _0x3d1a5c=new firebaseui[(_0x14b6('0xc'))]['AuthUI'](firebase['auth'](appUsers));_0x3d1a5c[_0x14b6('0xd')](_0x14b6('0xe'),_0x445dd7);}async function _initial(){$(_0x14b6('0xf'))['hide']();$(_0x14b6('0x10'))['removeClass'](_0x14b6('0x11'));$('#loginInfo')['hide']();let _0x53efe0=$('<img>')[_0x14b6('0x12')](_0x14b6('0x13'),USER['photoURL'])[_0x14b6('0x12')]('style',_0x14b6('0x14'));let _0x13618e=USER[_0x14b6('0x15')]+_0x14b6('0x16');$(_0x14b6('0xe'))['addClass'](_0x14b6('0x17'))[_0x14b6('0x18')](_0x53efe0)[_0x14b6('0x18')](_0x13618e);await init();}async function init(){let _0x5b008e=readUserData('PARTY',async function(_0x85156e){if(_0x85156e===null){PARTY_LIST=[[]];}else{PARTY_LIST=_0x85156e;}});dispChar(CHAR_MASTER);$(_0x14b6('0x19'))[_0x14b6('0x1a')]();$('[data-toggle=\x22tooltip\x22]')[_0x14b6('0x1b')]();await Promise['all']([_0x5b008e]);if(PARTY_LIST===null){return;}await renderParty();$(_0x14b6('0x1c'))[_0x14b6('0x1d')](_0x14b6('0x11'));$('.initialShow')[_0x14b6('0x1e')]();var _0x4301f2=new Date();var _0x50cf9e=Math[_0x14b6('0x1f')](_0x4301f2[_0x14b6('0x20')]()/0x3e8);for(var _0x338825 in EVENT_ABILITY){if(_0x338825>_0x50cf9e){console['log'](_0x50cf9e,_0x338825,EVENT_ABILITY[_0x338825]);var _0x45c53c=new Date(_0x338825*0x3e8);var _0x2731ed=_0x45c53c[_0x14b6('0x21')]()+0x1;var _0x3cca25=_0x45c53c[_0x14b6('0x22')]();var _0x15daa2=('0'+_0x45c53c[_0x14b6('0x23')]())[_0x14b6('0x24')](-0x2);var _0x455de5=('0'+_0x45c53c[_0x14b6('0x25')]())[_0x14b6('0x24')](-0x2);var _0x20133f=$(_0x14b6('0x26'))[_0x14b6('0x18')]('<div>'+_0x2731ed+'/'+_0x3cca25+'\x20'+_0x15daa2+':'+_0x455de5+_0x14b6('0x27'));$('#_icon_toku')[_0x14b6('0x18')](_0x20133f);for(var _0x1e4ea7 of EVENT_ABILITY[_0x338825]){$(_0x14b6('0x28'))[_0x14b6('0x18')]($('.'+_0x1e4ea7)[_0x14b6('0x29')]()[_0x14b6('0x2a')]());}}}setLimitData();}async function renderParty(){let _0x643a1e=0x0;PARTY_LIST[0x0]=PARTY_LIST[0x0][_0x14b6('0x2b')](_0x1e9ebe=>CHAR_MASTER[_0x1e9ebe[_0x14b6('0x2c')]]!==undefined);let _0x5745e5=PARTY_LIST[0x0][_0x643a1e];let _0x1aa042=0x0;let _0xa93543=[];while(_0x5745e5!==undefined){let _0x5ae08a=_0x5745e5[_0x14b6('0x2c')];let _0x3d9995=_0x5745e5[_0x14b6('0x2d')];NOW_CHAR=CHAR_MASTER[_0x5ae08a];selectDotHensei(CHAR_MASTER[_0x5ae08a]);let _0x4bafb1=readUserDataWithId(_0x14b6('0x2e'),_0x5ae08a,async function(_0x4823ce){await displayCharInfo(CHAR_MASTER[_0x5ae08a],_0x4823ce);await displayStyleInfo(_0x5ae08a,_0x3d9995);if(_0x1aa042===PARTY_LIST[0x0][_0x14b6('0x2f')]){}closeInput(_0x5ae08a,![]);});_0xa93543['push'](_0x4bafb1);_0x5745e5=PARTY_LIST[0x0][++_0x643a1e];}await Promise[_0x14b6('0x30')](_0xa93543);}function closeInput(_0x5b3c30,_0x332b39=![]){$(_0x14b6('0x31')+_0x5b3c30)[_0x14b6('0x32')](_0x14b6('0x33'))[_0x14b6('0x1e')](0xfa);if(_0x332b39){saveCharData(_0x5b3c30);}}$(document)[_0x14b6('0x34')](function(_0xea3786){_0xea3786(_0x14b6('0x35'))[_0x14b6('0x36')](function(){_0xea3786(_0x14b6('0x37'))[_0x14b6('0x38')](_0x14b6('0x11'));let _0x2395d4=_0xea3786(this)[_0x14b6('0x12')]('href')[_0x14b6('0x39')](0x1);if(_0xea3786(this)['parent']()['hasClass'](_0x14b6('0x3a'))){_0xea3786(_0x14b6('0x3b'))[_0x14b6('0x1d')](_0x14b6('0x11'));_0xea3786(_0x14b6('0x35'))[_0x14b6('0x3c')](function(){_0xea3786(this)[_0x14b6('0x3d')]()[_0x14b6('0x1d')](_0x14b6('0x3a'));});}else{_0xea3786(_0x14b6('0x3b'))['addClass']('d-none');_0xea3786('#_'+_0x2395d4)[_0x14b6('0x1d')](_0x14b6('0x11'));_0xea3786('.filterList')[_0x14b6('0x3c')](function(){_0xea3786(this)['parent']()[_0x14b6('0x1d')](_0x14b6('0x3a'));});_0xea3786(this)[_0x14b6('0x3d')]()[_0x14b6('0x3e')](_0x14b6('0x3a'));}});initialHide();_0xea3786(_0x14b6('0x3f'))['on']('click',function(){});_0xea3786(document)['on']('click','.paramButton',function(){let _0x1e500c=_0xea3786(this)[_0x14b6('0x3d')]()[_0x14b6('0x32')](_0x14b6('0x40'));let _0x4c57c0=_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x41'))==='plus'?0x1:-0x1;let _0x35224c=_0x1e500c[_0x14b6('0x42')]();let _0x4dca44=Number(_0x35224c)+_0x4c57c0;_0x1e500c['val'](_0x4dca44);_0x1d4a92(_0xea3786(this),_0x4dca44);});_0xea3786(document)['on'](_0x14b6('0x36'),_0x14b6('0x43'),function(){let _0x4b2017=_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x44'));_0xea3786(this)[_0x14b6('0x1d')](_0x14b6('0x45'))[_0x14b6('0x38')]('icon_btn_off');_0xea3786(this)[_0x14b6('0x1e')](0xc8,function(){_0xea3786(this)[_0x14b6('0x46')](0xc8);_0xea3786(this)['removeClass'](_0x14b6('0x47'))[_0x14b6('0x38')](_0x14b6('0x45'));_0x5813e3(_0x4b2017);saveCharData(_0x4b2017);});});_0xea3786(document)['on'](_0x14b6('0x48'),_0x14b6('0x40'),function(){_0x1d4a92(_0xea3786(this),_0xea3786(this)[_0x14b6('0x42')]());});function _0x1d4a92(_0xc4ff97,_0x156e8b){let _0x24a8fc=_0xc4ff97[_0x14b6('0x49')](_0x14b6('0x4a'));let _0x4f5bdd=_0x24a8fc[_0x14b6('0x12')](_0x14b6('0x4b'));let _0x3a67aa=_0xc4ff97[_0x14b6('0x12')](_0x14b6('0x4c'));_0xea3786(_0x14b6('0x4d')+_0x3a67aa+_0x4f5bdd)[_0x14b6('0x3c')](function(){_0xea3786(this)[_0x14b6('0x4e')](_0x156e8b);});_0xea3786(_0x14b6('0x4f')+_0x3a67aa+_0x4f5bdd)[_0x14b6('0x3c')](function(){_0xea3786(this)[_0x14b6('0x42')](_0x156e8b);});_0x5813e3(_0x4f5bdd);}_0xea3786(_0x14b6('0x50'))['tooltip']();_0xea3786(document)['on'](_0x14b6('0x36'),_0x14b6('0x51'),function(){setLimitData();let _0x2e4e04=_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x44'))!==undefined?_0xea3786(this)['attr'](_0x14b6('0x44')):_0xea3786(this)[_0x14b6('0x3d')]()[_0x14b6('0x12')](_0x14b6('0x44'));NOW_CHAR=CHAR_MASTER[_0x2e4e04];let _0x27e3ee=_0xea3786('.charTmpl'+_0x2e4e04)[_0x14b6('0x32')](_0x14b6('0x33'))[_0x14b6('0x12')](_0x14b6('0x2d'));if(_0x27e3ee===_0x14b6('0x52')){saveCharData(_0x2e4e04);}_0xea3786(_0x14b6('0x31')+_0x2e4e04)[_0x14b6('0x32')](_0x14b6('0x33'))[_0x14b6('0x53')](0xfa);});_0xea3786(document)['on'](_0x14b6('0x36'),_0x14b6('0x54'),function(){closeInput(_0xea3786(this)['attr'](_0x14b6('0x44')),!![]);});_0xea3786(document)['on'](_0x14b6('0x36'),_0x14b6('0x55'),function(){let _0x259dcf=_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x44'));_0x400a8a(_0x259dcf);});function _0x400a8a(_0x333517){let _0x4414f9=CHAR_MASTER[_0x333517];_0xea3786(_0x14b6('0x31')+_0x333517)[_0x14b6('0x49')]('.charTableParent')[_0x14b6('0x1e')](0x1f4);selectDotReset(_0x4414f9);_0xea3786(_0x14b6('0x56'))['find']('.charTmpl'+_0x333517)[_0x14b6('0x57')]();_0xea3786('#JINKEI'+_0x333517)[_0x14b6('0x57')]();let _0x4d0e51=_0x142d10(_0x333517);if(_0x4d0e51!==-0x1){PARTY_LIST[NOW_PARTY][_0x14b6('0x58')](_0x4d0e51,0x1);}_0x2b837c();saveCharData(_0x333517);}function _0x142d10(_0x1961a8){for(let _0x13fd11 in PARTY_LIST[NOW_PARTY]){if(PARTY_LIST[NOW_PARTY][_0x13fd11][_0x14b6('0x2c')]===_0x1961a8){return _0x13fd11;}}return-0x1;}_0xea3786(document)['on']('click',_0x14b6('0x59'),async function(){firebase[_0x14b6('0x5a')]()[_0x14b6('0x5b')]();firebase[_0x14b6('0x5a')](appUsers)[_0x14b6('0x5b')]();let _0x4c6ae0=_0xea3786(this)['attr'](_0x14b6('0x44'));let _0x4dce42=_0x142d10(_0x4c6ae0);if(PARTY_LIST[NOW_PARTY][_0x14b6('0x2f')]>=PARTY_LIMIT||_0x4dce42!==-0x1){while(PARTY_LIST[NOW_PARTY][_0x14b6('0x2f')]>PARTY_LIMIT){let _0x167f44=PARTY_LIST[NOW_PARTY][_0x14b6('0x2f')];let _0x581322=PARTY_LIST[NOW_PARTY][_0x167f44-0x1][_0x14b6('0x2c')];_0x400a8a(_0x581322);PARTY_LIST[NOW_PARTY][_0x14b6('0x5c')]();}_0xea3786(this)[_0x14b6('0x1d')](_0x14b6('0x5d'))[_0x14b6('0x38')](_0x14b6('0x5e'));return;}if(NOW_CHAR['Id']!==undefined){closeInput(NOW_CHAR['Id'],!![]);}NOW_CHAR=CHAR_MASTER[_0x4c6ae0];let _0x29ad6f=NOW_CHAR[_0x14b6('0x5f')][0x0];NOW_STYLE=STYLE_MASTER[_0x29ad6f];PARTY_LIST[NOW_PARTY][_0x14b6('0x60')]({'char':_0x4c6ae0,'style':_0x29ad6f});_0xea3786(_0x14b6('0x61'))['show']();selectDotHensei(NOW_CHAR);readUserDataWithId('CHAR',_0x4c6ae0,async function(_0x54bb79){await displayCharInfo(CHAR_MASTER[_0x4c6ae0],_0x54bb79);await displayStyleInfo(NOW_CHAR['Id'],_0x29ad6f);_0xea3786(_0x14b6('0x31')+_0x4c6ae0)[_0x14b6('0x32')](_0x14b6('0x62'))[_0x14b6('0x1d')](_0x14b6('0x11'))[_0x14b6('0x46')](0x1f4);_0xea3786(_0x14b6('0x63'))[_0x14b6('0x64')]({'scrollTop':_0xea3786('.charTmpl'+_0x4c6ae0)[_0x14b6('0x65')]()[_0x14b6('0x66')]},0x1f4,_0x14b6('0x67'));setLimitData();_0x2b837c();});_0xea3786(_0x14b6('0x50'))[_0x14b6('0x1b')]();});_0xea3786(document)['on']('click',_0x14b6('0x68'),async function(){let _0xc8eddd=_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x44'));NOW_STYLE=STYLE_MASTER[_0xc8eddd];await displayStyleInfo(NOW_CHAR['Id'],_0xc8eddd);let _0x4d08e8=_0x142d10(NOW_CHAR['Id']);PARTY_LIST[NOW_PARTY][_0x4d08e8]['style']=_0xc8eddd;_0x2b837c();});function _0x5813e3(_0x5731de){let _0x5827f1=_0x5731de===undefined?NOW_CHAR['Id']:_0x5731de;for(let _0x359cb8 of PARAM_KEY_HP){let _0x191c73=_0xea3786(_0x14b6('0x4d')+_0x359cb8+_0x5827f1)[_0x14b6('0x29')]()[_0x14b6('0x4e')]();CHAR_MASTER[_0x5827f1]['NOW'+_0x359cb8]=Number(_0x191c73);}if(NOW_CHAR_ID!==_0x5827f1){if(NOW_CHAR_ID!==''){saveCharData(NOW_CHAR_ID);}NOW_CHAR_ID=_0x5827f1;}setLimitData();}function _0x2b837c(){updateData(_0x14b6('0x69'),PARTY_LIST);}_0xea3786(document)['on'](_0x14b6('0x36'),'.hanei',function(){_0x28688c(_0xea3786(this)[_0x14b6('0x3d')]()[_0x14b6('0x32')](_0x14b6('0x6a')));});_0xea3786(document)['on'](_0x14b6('0x48'),_0x14b6('0x6a'),function(){_0x28688c(_0xea3786(this));});function _0x28688c(_0x43176c){gtag(_0x14b6('0x6b'),_0x14b6('0x6c'),{'event_category':_0x14b6('0x6d'),'event_label':'show','value':0x1});_0xea3786(_0x14b6('0x6e'))[_0x14b6('0x12')]('data-input',_0xea3786(_0x43176c)[_0x14b6('0x42')]());_0xea3786('#allSubmit')[_0x14b6('0x12')](_0x14b6('0x6f'),_0xea3786(_0x43176c)[_0x14b6('0x12')](_0x14b6('0x44')));let _0x1ff26e=splitParam(_0xea3786(_0x43176c)[_0x14b6('0x42')](),'不明');let _0x406be9='';_0x406be9+=_0x14b6('0x70')+_0x1ff26e[0x0]+_0x14b6('0x71');_0x406be9+=_0x14b6('0x72')+_0x1ff26e[0x1]+'\x20体力:'+_0x1ff26e[0x2]+_0x14b6('0x71');_0x406be9+='器用さ:\x20'+_0x1ff26e[0x3]+_0x14b6('0x73')+_0x1ff26e[0x4]+_0x14b6('0x71');_0x406be9+=_0x14b6('0x74')+_0x1ff26e[0x5]+'\x20精神:'+_0x1ff26e[0x6]+_0x14b6('0x71');_0x406be9+=_0x14b6('0x75')+_0x1ff26e[0x7]+_0x14b6('0x76')+_0x1ff26e[0x8]+_0x14b6('0x71');_0x406be9+='が入力されました<br>';_0x406be9+=_0x14b6('0x77');_0xea3786(_0x14b6('0x78'))[_0x14b6('0x79')](_0x406be9);_0xea3786(_0x14b6('0x7a'))[_0x14b6('0x7b')]();_0xea3786(_0x14b6('0x7c'))[_0x14b6('0x7d')](_0x14b6('0x7e'),_0x14b6('0x7f'));return![];}_0xea3786(_0x14b6('0x80'))[_0x14b6('0x36')](function(){if(_0xea3786(this)['attr'](_0x14b6('0x44'))==='ok'){gtag(_0x14b6('0x6b'),_0x14b6('0x6c'),{'event_category':'party','event_label':_0x14b6('0x81'),'value':0x1});let _0x40fb72=_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x6f'));let _0x29c570=splitParam(_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x82')),0x0);for(let _0x30d6f2 in _0x29c570){_0xea3786(_0x14b6('0x4f')+PARAM_KEY_HP[_0x30d6f2]+_0x40fb72)[_0x14b6('0x3c')](function(_0x442601,_0x3079fa){_0xea3786(_0x3079fa)['val'](_0x29c570[_0x30d6f2]);});_0xea3786(_0x14b6('0x4d')+PARAM_KEY_HP[_0x30d6f2]+_0x40fb72)[_0x14b6('0x3c')](function(_0xb9bf28,_0x4c6cb5){_0xea3786(_0x4c6cb5)['text'](_0x29c570[_0x30d6f2]);});}_0x5813e3();}else{gtag(_0x14b6('0x6b'),_0x14b6('0x6c'),{'event_category':_0x14b6('0x6d'),'event_label':_0x14b6('0x83'),'value':0x1});}_0xea3786(_0x14b6('0x7a'))[_0x14b6('0x84')]();_0xea3786('#allParamConfirmInner')[_0x14b6('0x7d')](_0x14b6('0x7e'),'modalClose\x200.5s\x20forwards');return![];});_0xea3786(_0x14b6('0x85'))[_0x14b6('0x36')](function(){_0xea3786(_0x14b6('0x85'))[_0x14b6('0x3c')](function(){_0xea3786(this)['removeClass'](_0x14b6('0x47'));_0xea3786(this)[_0x14b6('0x38')](_0x14b6('0x45'));});_0xea3786(this)['addClass'](_0x14b6('0x47'));BASE=Number(_0xea3786(this)[_0x14b6('0x12')](_0x14b6('0x44')));setLimitData();});});function setLimitData(){$(_0x14b6('0x86'))['each'](async function(){let _0xbab047=$(this)[_0x14b6('0x12')](_0x14b6('0x87'));let _0x32b764=STYLE_MASTER[_0xbab047];let _0xe997e2=$(_0x14b6('0x88')+_0xbab047);let _0x41f338=_0xe997e2[_0x14b6('0x12')](_0x14b6('0x6f'));let _0x138a5a=0x0;for(let _0x8e4bfb of PARAM_KEY){let _0x1db9af=_0x32b764[_0x14b6('0x89')+_0x8e4bfb];let _0x9557b=CHAR_MASTER[_0x41f338][_0x14b6('0x8a')+_0x8e4bfb]!==undefined?CHAR_MASTER[_0x41f338][_0x14b6('0x8a')+_0x8e4bfb]:CHAR_MASTER[_0x41f338][_0x8e4bfb];_0x138a5a+=_0x9557b;let _0x402d29=_0x32b764[_0x14b6('0x89')+_0x8e4bfb]!==0x63?BASE+Number(_0x1db9af)-Number(_0x9557b):'?';_0xe997e2[_0x14b6('0x32')]('.'+_0x8e4bfb)[_0x14b6('0x3c')](function(){$(this)[_0x14b6('0x1d')](_0x14b6('0x8b'))[_0x14b6('0x1d')](_0x14b6('0x8c'));if(_0x402d29==='?'){}else if(_0x402d29>0x0){$(this)['addClass'](_0x14b6('0x8b'));}else if(_0x402d29<0x0){$(this)[_0x14b6('0x38')](_0x14b6('0x8c'));}$(this)[_0x14b6('0x4e')](_0x402d29);});}let _0x2f6306=(_0x138a5a-0x171)/0x8;let _0x33e182='+'+_0x2f6306;if(_0x138a5a===0x171){_0x33e182=0x0;}else if(_0x2f6306<0x0){_0x33e182=_0x2f6306;}let _0x1a7abf='遠征';if(_0x2f6306>=0xc){_0x1a7abf='VH12(最大:+15)';}else if(_0x2f6306>0x8){_0x1a7abf=_0x14b6('0x8d');}else if(_0x2f6306>0x5){_0x1a7abf=_0x14b6('0x8e');}else if(_0x2f6306>0x0){_0x1a7abf=_0x14b6('0x8f');}else if(_0x2f6306>-0x3){_0x1a7abf=_0x14b6('0x90');}else if(_0x2f6306>-0x6){_0x1a7abf='H712(最大:-2)';}$(_0x14b6('0x91')+_0x41f338)[_0x14b6('0x4e')](_0x138a5a);$(_0x14b6('0x92')+_0x41f338)[_0x14b6('0x4e')](_0x33e182);$(_0x14b6('0x93')+_0x41f338)[_0x14b6('0x4e')](_0x1a7abf);});}function saveCharData(_0xe90514){update={};let _0x34185d=0x0;for(let _0x1327f0 of PARAM_KEY){let _0x3f58b6=Number(CHAR_MASTER[_0xe90514][_0x14b6('0x8a')+_0x1327f0]);_0x3f58b6=isNaN(_0x3f58b6)||_0x3f58b6>LIMIT_BASE+0x10?0x0:_0x3f58b6;_0x34185d+=_0x3f58b6;update[_0x1327f0]=_0x3f58b6;}let _0x1a292b=Number(CHAR_MASTER[_0xe90514][_0x14b6('0x94')]);update['HP']=isNaN(_0x1a292b)||_0x1a292b>0x3a2?0x0:_0x1a292b;if(_0x34185d>0x0){updateData('CHAR/'+_0xe90514,update);gtag(_0x14b6('0x6b'),_0x14b6('0x95'),{'event_category':_0x14b6('0x6d'),'event_label':CHAR_MASTER[_0xe90514][_0x14b6('0x96')],'value':0x1});}else{console[_0x14b6('0x97')]('合計値が0のため保存をスキップしました。',update);}}function initialHide(){$(_0x14b6('0x19'))[_0x14b6('0x98')]();$(_0x14b6('0x99'))[_0x14b6('0x98')]();$(_0x14b6('0x61'))[_0x14b6('0x98')]();}async function displayCharInfo(_0x39f6f3,_0x456390){let _0x4e24d3=_0x39f6f3['Id'];let _0xb0f5b6=$(_0x14b6('0x9a'))[_0x14b6('0x2a')]()[_0x14b6('0x1d')](_0x14b6('0x11'))[_0x14b6('0x9b')]('id')[_0x14b6('0x38')](_0x14b6('0x9c')+_0x4e24d3)[_0x14b6('0x12')]('data-charId',_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0x9d'))['html'](_0x39f6f3[_0x14b6('0x96')]);_0xb0f5b6[_0x14b6('0x32')]('.icon_btn_on')[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0x55'))[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0x9e'))[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3);_0xb0f5b6['find']('.char')[_0x14b6('0x3d')]()[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')]('.allparams')[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0x43'))['attr'](_0x14b6('0x44'),_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')]('.SUM')['attr'](_0x14b6('0x44'),_0x4e24d3)[_0x14b6('0x38')](_0x14b6('0x9f')+_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0x92'))[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3)[_0x14b6('0x38')](_0x14b6('0xa0')+_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0x93'))[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3)['addClass'](_0x14b6('0xa1')+_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0xa2'))[_0x14b6('0x3d')]()[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')]('#insotsu')[_0x14b6('0x12')]('id',_0x14b6('0xa3')+_0x4e24d3)[_0x14b6('0x12')](_0x14b6('0xa4'),_0x14b6('0xa5')+_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0xa6'))[_0x14b6('0x12')]('id',_0x14b6('0xa7')+_0x4e24d3)[_0x14b6('0x12')](_0x14b6('0xa4'),_0x14b6('0xa5')+_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0xa8'))[_0x14b6('0x12')](_0x14b6('0xa9'),_0x14b6('0xa3')+_0x4e24d3);_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0xaa'))['attr'](_0x14b6('0xa9'),_0x14b6('0xa7')+_0x4e24d3);let _0x8ddd78=_0x39f6f3['DotId'];let _0x406c4b=_0x8ddd78!==_0x14b6('0xab')?_0x8ddd78:_0x14b6('0xac');let _0x102781=getImgUrl(_0x14b6('0xad')+_0x406c4b+_0x14b6('0xae'))+dotStyle;_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0xaf'))[_0x14b6('0x12')](_0x14b6('0x2d'),_0x102781);if(_0x456390!==null){for(let _0x5db522 of PARAM_KEY_HP){_0x39f6f3[_0x14b6('0x8a')+_0x5db522]=Number(_0x456390[_0x5db522]);}}else if(_0x456390===null){for(let _0x447af7 of PARAM_KEY){_0x39f6f3[_0x14b6('0x8a')+_0x447af7]=0x0;}}let _0x209b6e=_0xb0f5b6[_0x14b6('0x32')](_0x14b6('0xb0'));_0x209b6e[_0x14b6('0x12')](_0x14b6('0x44'),_0x4e24d3);for(let _0x1fdfda of PARAM_KEY_HP){_0xb0f5b6[_0x14b6('0x32')]('.char'+_0x1fdfda)[_0x14b6('0x1d')]('char'+_0x1fdfda)[_0x14b6('0x38')](_0x14b6('0xb1')+_0x1fdfda+_0x4e24d3)[_0x14b6('0x42')](_0x39f6f3[_0x14b6('0x8a')+_0x1fdfda]);_0x209b6e['find']('.'+_0x1fdfda)['removeClass'](_0x14b6('0x2c')+_0x1fdfda)['addClass'](_0x14b6('0x2c')+_0x1fdfda+_0x4e24d3)[_0x14b6('0x4e')](_0x39f6f3['NOW'+_0x1fdfda]);}for(let _0xb5d758 of _0x39f6f3[_0x14b6('0x5f')]){let _0x206b6f=STYLE_MASTER[_0xb5d758];let _0x2edc18=$(_0x14b6('0xb2'))['addClass']('style')[_0x14b6('0x38')](getStyleIconClass(_0x206b6f[_0x14b6('0xb3')]))['attr'](_0x14b6('0x2d'),getImgUrl(_0x14b6('0xb4')+_0xb5d758+_0x14b6('0xae')))[_0x14b6('0x12')](_0x14b6('0x44'),_0xb5d758);let _0x42a437=$(_0x14b6('0xb5'))[_0x14b6('0x38')](getStyleIconBgClass(_0x206b6f[_0x14b6('0xb3')]))['append'](_0x2edc18);_0xb0f5b6['find'](_0x14b6('0xb6'))[_0x14b6('0x18')](_0x42a437);let _0x37328c=$(_0x14b6('0xb7'))[_0x14b6('0x2a')]()[_0x14b6('0x1d')](_0x14b6('0x11'))[_0x14b6('0x9b')]('id')[_0x14b6('0x38')](_0x14b6('0xb8')+_0xb5d758)[_0x14b6('0x12')]('data-styleId',_0xb5d758)['attr'](_0x14b6('0x6f'),_0x4e24d3);_0x37328c[_0x14b6('0x32')]('.rare')[_0x14b6('0x12')](_0x14b6('0x13'),_0x14b6('0xb9')+_0x206b6f[_0x14b6('0xb3')]+_0x14b6('0xae'));_0x37328c[_0x14b6('0x32')](_0x14b6('0xba'))[_0x14b6('0x12')](_0x14b6('0x13'),_0x14b6('0xbb')+_0xb5d758+_0x14b6('0xae'));_0x37328c[_0x14b6('0x32')]('.cin')[_0x14b6('0x12')](_0x14b6('0x13'),_0x14b6('0xbc')+_0xb5d758+_0x14b6('0xae'));for(let _0x1fdfda of PARAM_KEY){let _0x33337b=_0x206b6f['Limit'+_0x1fdfda];if(_0x33337b===0x63){_0x37328c[_0x14b6('0x32')]('.'+_0x1fdfda)[_0x14b6('0x4e')]('?');}else{let _0x17a070=BASE+Number(_0x33337b)-Number(_0x39f6f3[_0x14b6('0x8a')+_0x1fdfda]);_0x37328c[_0x14b6('0x32')]('.'+_0x1fdfda)[_0x14b6('0x4e')](_0x17a070);if(_0x17a070>0x0){_0x37328c[_0x14b6('0x32')]('.'+_0x1fdfda)['addClass'](_0x14b6('0x8b'));}else if(_0x17a070<0x0){_0x37328c[_0x14b6('0x32')]('.'+_0x1fdfda)['addClass'](_0x14b6('0x8c'));}}}_0xb0f5b6[_0x14b6('0x18')](_0x37328c);}let _0x2571a8=$(_0x14b6('0xbd'))[_0x14b6('0xbe')]()['length']+0x1;let _0x487242=_0x14b6('0xbf')+_0x2571a8+_0x14b6('0xc0');let _0x2962f5=_0x14b6('0xc1')+getImgUrl('dot/'+_0x406c4b+_0x14b6('0xae'))+_0x14b6('0xc2')+_0x4e24d3+'\x27\x20data-styleId=\x27\x27></span>';$(_0x14b6('0xbd'))[_0x14b6('0x18')]($('<div>')[_0x14b6('0x38')](_0x14b6('0xc3')+_0x4e24d3)[_0x14b6('0x18')](_0x487242+_0x2962f5));let _0x26b421=$(_0x14b6('0xc4'))[_0x14b6('0x18')](_0xb0f5b6);$(_0x14b6('0x56'))[_0x14b6('0x18')](_0x26b421);}async function displayStyleInfo(_0xb961f2,_0xe235f6){let _0x315ec9=STYLE_MASTER[_0xe235f6];if(_0x315ec9===null){return;}$('.charTmpl'+_0xb961f2)[_0x14b6('0x12')](_0x14b6('0x87'),_0xe235f6);$(_0x14b6('0x31')+_0xb961f2)[_0x14b6('0x32')](_0x14b6('0x68'))[_0x14b6('0x3c')](function(){let _0x13c538=$(this)[_0x14b6('0x12')](_0x14b6('0x44'));$(this)[_0x14b6('0x3d')]()[_0x14b6('0x38')](_0x14b6('0xc5'));if(_0xe235f6===_0x13c538){$(this)['parent']()[_0x14b6('0x1d')](_0x14b6('0xc5'));return;}});$(_0x14b6('0x31')+_0xb961f2)[_0x14b6('0x32')](_0x14b6('0x86'))[_0x14b6('0x3c')](function(){if($(this)[_0x14b6('0xc6')](_0x14b6('0xc7')+_0xe235f6)){$(this)[_0x14b6('0x1d')](_0x14b6('0xc8'))['attr']('style',_0x14b6('0xc9'));}else{$(this)[_0x14b6('0x38')](_0x14b6('0xca'))['attr']('style',_0x14b6('0xcb'));}});let _0x2bfe1d=_0x315ec9[_0x14b6('0xcc')];let _0x222ab9=_0x2bfe1d!=='ID4e2c8'?_0x2bfe1d:_0x14b6('0xac');let _0x1f3736=$('.charTmpl'+_0xb961f2)['find'](_0x14b6('0x4d'));_0x1f3736[_0x14b6('0x12')](_0x14b6('0x2d'),getImgUrl(_0x14b6('0xad')+_0x222ab9+'.png')+dotStyle);if(_0x1f3736['length']>0x0){animeReset(_0x1f3736,_0x14b6('0xcd'));}}function getSmallIcon(_0xa59d53){let _0x5c2789=$(_0x14b6('0xb2'))[_0x14b6('0x38')](getStyleIconClass(_0xa59d53[_0x14b6('0xb3')])+_0x14b6('0xce'))[_0x14b6('0x12')](_0x14b6('0x2d'),getImgUrl('style_icon/'+_0xa59d53['Id']+_0x14b6('0xae')));let _0x54d89a=$('<span>')['addClass'](getStyleIconBgClass(_0xa59d53['Rarity']))[_0x14b6('0x12')](_0x14b6('0x2d'),_0x14b6('0xcf'))[_0x14b6('0x18')](_0x5c2789);return _0x54d89a;}function splitParam(_0x5d2db5,_0x40c702){k=/,|\.|\s|\t/g;let _0x482ea2=_0x5d2db5[_0x14b6('0xd0')](k);if(_0x482ea2['length']===0x1){_0x482ea2[0x0]=_0x5d2db5['substr'](0x0,0x3);_0x482ea2[0x1]=_0x5d2db5[_0x14b6('0x39')](0x3,0x2);_0x482ea2[0x2]=_0x5d2db5[_0x14b6('0x39')](0x5,0x2);_0x482ea2[0x3]=_0x5d2db5[_0x14b6('0x39')](0x7,0x2);_0x482ea2[0x4]=_0x5d2db5[_0x14b6('0x39')](0x9,0x2);_0x482ea2[0x5]=_0x5d2db5[_0x14b6('0x39')](0xb,0x2);_0x482ea2[0x6]=_0x5d2db5[_0x14b6('0x39')](0xd,0x2);_0x482ea2[0x7]=_0x5d2db5[_0x14b6('0x39')](0xf,0x2);_0x482ea2[0x8]=_0x5d2db5[_0x14b6('0x39')](0x11,0x2);}for(let _0x1e54ff=0x0;_0x1e54ff<0x8;_0x1e54ff++){if(_0x482ea2[_0x1e54ff]===undefined||_0x482ea2[_0x1e54ff]===''){_0x482ea2[_0x1e54ff]=_0x40c702;}}return _0x482ea2;}function selectDotReset(_0x33ff95){$(_0x14b6('0xd1')+_0x33ff95[_0x14b6('0xcc')])[_0x14b6('0x1d')]('char-winner')['addClass'](_0x14b6('0x5d'))['find'](_0x14b6('0xd2'))[_0x14b6('0x4e')](_0x33ff95['Series']);}function selectDotHensei(_0x2765f3){$(_0x14b6('0xd1')+_0x2765f3[_0x14b6('0xcc')])[_0x14b6('0x1d')](_0x14b6('0x5d'))[_0x14b6('0x1d')](_0x14b6('0x5e'))[_0x14b6('0x38')](_0x14b6('0xcd'))[_0x14b6('0x32')](_0x14b6('0xd2'))[_0x14b6('0x4e')](_0x14b6('0xd3'));}
