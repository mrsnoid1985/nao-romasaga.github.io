var _0x4863=['<br>','#label1','html','setFilter','.tabulator-header,\x20.tabulator-footer,\x20.tabulator-page','.tabulator-cell','tabulator-field','DotId','<span\x20class=\x22char-winner\x20char\x20dot_mid\x20dot\x22\x20style=\x22background:url(./img/dot/','.png)\x20no-repeat;\x20padding-top:35px;\x22></span>','#charNameTd','Name','.char','removeClass','d-none','keyup','replace','split','.charHP','Char','auth','onAuthStateChanged','https://nao-romasaga.github.io/inputchar.html','TwitterAuthProvider','PROVIDER_ID','AuthUI','start','#firebaseui-auth-container','uid','.noLogin','hide','.isLogin','#loginInfo','<img>','src','photoURL','style','width:40px;\x20heidht:40px;\x20\x20\x20\x20border-radius:\x2050%;','displayName','\x20さん:ログイン中','addClass','bg-white\x20kadomaru','append','SUM','WeaponType','Series','#example-table','<span\x20class=\x22icon_mini_zokusei\x20','\x22></span>','desc','remove','<div\x20id=\x22example-table\x22\x20style=\x22width:100%\x22></div>','right','number','fitColumns','local','assign','STR','VIT','AGI','<span\x20class=\x22hidden\x20pcBlock\x22>合</span>計','#SAVE','CHAR/','.filterList','click','toggleClass','filterActive','.paramButton','parent','find','.charParam','attr','val','#CHAR_INPUT','slideUp','each','data-type','href','substr','hasClass','WeaponTypeFilter','push','SeriesFilter','text','clearFilter','length','武器種:','join','\x20&\x20'];(function(_0x8bc9c2,_0x3bd439){var _0x596e04=function(_0x18bd52){while(--_0x18bd52){_0x8bc9c2['push'](_0x8bc9c2['shift']());}};_0x596e04(++_0x3bd439);}(_0x4863,0xf1));var _0x107c=function(_0x24ea07,_0x2c1f17){_0x24ea07=_0x24ea07-0x0;var _0x4b21ef=_0x4863[_0x24ea07];return _0x4b21ef;};var tableLimit=0xa;var MY_DATA_LIST=[];var MY_CHAR_LIST,CHAR_MASTER;var table;$(_0x107c('0x0'))[_0x107c('0x1')](function(){$(this)['parent']()[_0x107c('0x2')](_0x107c('0x3'));if(table===undefined){return;}filter();});$(document)['on'](_0x107c('0x1'),_0x107c('0x4'),function(){let _0x99f918=$(this)[_0x107c('0x5')]()[_0x107c('0x6')](_0x107c('0x7'));let _0x2f0c4d=$(this)[_0x107c('0x8')]('data-pm')==='plus'?0x1:-0x1;let _0x2cce1c=_0x99f918[_0x107c('0x9')]();_0x99f918[_0x107c('0x9')](Number(_0x2cce1c)+_0x2f0c4d);});function filter(){$(_0x107c('0xa'))[_0x107c('0xb')](0x12c);let _0xdba533=[];let _0x4810e6=[];let _0x3d365d=[];let _0x4e6e9b=[];let _0x3e2b5e=[];let _0x15e1d8=[];$(_0x107c('0x0'))[_0x107c('0xc')](function(){let _0x3e4a54=$(this)[_0x107c('0x8')](_0x107c('0xd'));let _0x4f98d0=$(this)[_0x107c('0x8')](_0x107c('0xe'))[_0x107c('0xf')](0x1);if($(this)[_0x107c('0x5')]()[_0x107c('0x10')](_0x107c('0x3'))){if(_0x3e4a54===_0x107c('0x11')){_0xdba533[_0x107c('0x12')]({'field':_0x3e4a54,'type':'=','value':_0x4f98d0});_0x3e2b5e[_0x107c('0x12')]($(this)[_0x107c('0x8')]('data-label'));}else if(_0x3e4a54===_0x107c('0x13')){_0x4810e6['push']({'field':_0x3e4a54,'type':'=','value':_0x4f98d0});_0x15e1d8[_0x107c('0x12')](_0x4f98d0);}else{_0x3d365d[_0x107c('0x12')]({'field':_0x4f98d0,'type':'=','value':'0'});_0x4e6e9b[_0x107c('0x12')]($(this)[_0x107c('0x14')]());}}});let _0xd72bc8=[];table[_0x107c('0x15')]();let _0x43ca14=[];if(_0xdba533[_0x107c('0x16')]>0x0){_0x43ca14[_0x107c('0x12')](_0xdba533);_0xd72bc8[_0x107c('0x12')](_0x107c('0x17')+_0x3e2b5e[_0x107c('0x18')](','));}if(_0x4810e6[_0x107c('0x16')]>0x0){_0x43ca14[_0x107c('0x12')](_0x4810e6);_0xd72bc8[_0x107c('0x12')](_0x15e1d8[_0x107c('0x18')](','));}if(_0x3d365d[_0x107c('0x16')]>0x0){_0x43ca14['push'](_0x3d365d);_0xd72bc8[_0x107c('0x12')](_0x4e6e9b[_0x107c('0x18')](','));}let _0x204285='';if(_0xd72bc8[_0x107c('0x16')]>0x0){_0x204285=_0xd72bc8[_0x107c('0x18')](_0x107c('0x19'))+_0x107c('0x1a');}$(_0x107c('0x1b'))[_0x107c('0x1c')](_0x204285);table[_0x107c('0x1d')](_0x43ca14);changeId2Dot();}$(document)['on'](_0x107c('0x1'),_0x107c('0x1e'),function(){changeId2Dot();});var NOW_CHAR;$(document)['on'](_0x107c('0x1'),_0x107c('0x1f'),function(){$(this)['parent']()[_0x107c('0x6')](_0x107c('0x1f'))['each'](async function(){let _0x20fc4e=$(this)[_0x107c('0x14')]();let _0x40bcc7=$(this)[_0x107c('0x8')](_0x107c('0x20'));if(_0x40bcc7==='Id'){NOW_CHAR=CHAR_MASTER[_0x20fc4e];let _0x1386f7=NOW_CHAR[_0x107c('0x21')];$('#dotTd')[_0x107c('0x1c')](_0x107c('0x22')+_0x1386f7+_0x107c('0x23'));$(_0x107c('0x24'))[_0x107c('0x14')](NOW_CHAR[_0x107c('0x25')]);for(let _0x4d08e4 of PARAM_KEY_HP){$(_0x107c('0x26')+_0x4d08e4)[_0x107c('0x9')](NOW_CHAR[_0x4d08e4]);}}});$(_0x107c('0xa'))['slideUp'](0x12c);$(_0x107c('0xa'))[_0x107c('0x27')](_0x107c('0x28'));$(_0x107c('0xa'))['slideDown'](0x12c);});$(document)['on'](_0x107c('0x29'),'.allparams',function(){let _0x34c3f2=$(this)[_0x107c('0x9')]();_0x34c3f2=_0x34c3f2[_0x107c('0x2a')](/[\s|\t]/g,'.');let _0xde1750=_0x34c3f2[_0x107c('0x2b')]('.');_0xde1750=_0xde1750['filter'](Boolean);$(_0x107c('0x2c'))[_0x107c('0x9')](Number(_0xde1750[0x0][_0x107c('0xf')](0x0,0x3)));let _0x31f73f=0x1;for(let _0x23b123 of PARAM_KEY){let _0x237c96=_0xde1750[_0x31f73f]===undefined?0x0:_0xde1750[_0x31f73f];_0x31f73f++;if(_0x237c96===''||_0x237c96===0x0){continue;}_0x237c96=_0x237c96>0x64?_0x237c96[_0x107c('0xf')](0x0,0x2):_0x237c96;$(_0x107c('0x26')+_0x23b123)[_0x107c('0x9')](_0x237c96);}});readFile(_0x107c('0x2d'),function(_0x486cfd){CHAR_MASTER=_0x486cfd;if(MY_CHAR_LIST!==undefined&&CHAR_MASTER!==undefined){init();}});firebase[_0x107c('0x2e')](appUsers)[_0x107c('0x2f')](_0x8e8a14=>{if(!_0x8e8a14){var _0x9717d={'signInSuccessUrl':_0x107c('0x30'),'signInOptions':[firebase[_0x107c('0x2e')][_0x107c('0x31')][_0x107c('0x32')]]};var _0x3ec367=new firebaseui[(_0x107c('0x2e'))][(_0x107c('0x33'))](firebase[_0x107c('0x2e')](appUsers));_0x3ec367[_0x107c('0x34')](_0x107c('0x35'),_0x9717d);}else{UID=_0x8e8a14[_0x107c('0x36')];$(_0x107c('0x37'))[_0x107c('0x38')]();$(_0x107c('0x39'))[_0x107c('0x27')](_0x107c('0x28'));$(_0x107c('0x3a'))['hide']();let _0x268e6b=$(_0x107c('0x3b'))[_0x107c('0x8')](_0x107c('0x3c'),_0x8e8a14[_0x107c('0x3d')])[_0x107c('0x8')](_0x107c('0x3e'),_0x107c('0x3f'));let _0x36ff9d=_0x8e8a14[_0x107c('0x40')]+_0x107c('0x41');$(_0x107c('0x35'))[_0x107c('0x42')](_0x107c('0x43'))[_0x107c('0x44')](_0x268e6b)[_0x107c('0x44')](_0x36ff9d);readMyChar(function(_0x59b7d0){MY_CHAR_LIST=_0x59b7d0;if(MY_CHAR_LIST!==undefined&&CHAR_MASTER!==undefined){init();}});}});let MY_LIST=[];function init(){for(let _0x46982b in CHAR_MASTER){let _0x2a20e3=CHAR_MASTER[_0x46982b]['Id'];if(MY_CHAR_LIST[_0x2a20e3]!==undefined){let _0x3f95b1=0x0;for(let _0x1a0f9d of PARAM_KEY_HP){CHAR_MASTER[_0x46982b][_0x1a0f9d]=MY_CHAR_LIST[_0x2a20e3][_0x1a0f9d]!==undefined?MY_CHAR_LIST[_0x2a20e3][_0x1a0f9d]:0x0;_0x3f95b1+=Number(CHAR_MASTER[_0x46982b][_0x1a0f9d]);}CHAR_MASTER[_0x46982b][_0x107c('0x45')]=_0x3f95b1-Number(CHAR_MASTER[_0x46982b]['HP']);}else{for(let _0x560a91 of PARAM_KEY_HP){CHAR_MASTER[_0x46982b][_0x560a91]=0x0;}CHAR_MASTER[_0x46982b][_0x107c('0x45')]=0x0;}CHAR_MASTER[_0x46982b][_0x107c('0x11')]=ICON_LIST[CHAR_MASTER[_0x46982b][_0x107c('0x46')]];CHAR_MASTER[_0x46982b][_0x107c('0x46')]=ICON_LIST[CHAR_MASTER[_0x46982b][_0x107c('0x46')]];CHAR_MASTER[_0x46982b][_0x107c('0x13')]=CHAR_MASTER[_0x46982b][_0x107c('0x47')];MY_LIST[_0x107c('0x12')](Object['assign']({},CHAR_MASTER[_0x46982b]));}drawTable();}function changeId2Dot(){var _0x45ebee,_0x34da6f;$(_0x107c('0x48'))[_0x107c('0x6')](_0x107c('0x1f'))['each'](function(){let _0x1cd07a=$(this)[_0x107c('0x14')]();let _0x2a70f8=$(this)[_0x107c('0x8')]('tabulator-field');if(_0x2a70f8==='Id'){let _0x132240=CHAR_MASTER[_0x1cd07a][_0x107c('0x21')];_0x45ebee='<img\x20src=\x22./img/dot/'+_0x132240+'.png\x22\x20style=\x22object-position:\x20-10px\x20-10px\x22>';}else if(_0x2a70f8===_0x107c('0x21')){$(this)[_0x107c('0x1c')](_0x45ebee);}else if(_0x2a70f8===_0x107c('0x11')){_0x34da6f=_0x107c('0x49')+_0x1cd07a+_0x107c('0x4a');}else if(_0x2a70f8===_0x107c('0x46')){$(this)[_0x107c('0x1c')](_0x34da6f);}});}function drawTable(_0x3e420e){let _0x1f185d=_0x3e420e===undefined?_0x107c('0x4b'):_0x3e420e;$(_0x107c('0x48'))[_0x107c('0x4c')]();$('#example-table-display')[_0x107c('0x44')](_0x107c('0x4d'));let _0x2e644e={'align':_0x107c('0x4e'),'sortable':!![],'sorter':_0x107c('0x4f'),'minWidth':0x1e,'width':0x1e};table=new Tabulator(_0x107c('0x48'),{'layout':_0x107c('0x50'),'data':MY_LIST,'tooltips':![],'history':!![],'pagination':_0x107c('0x51'),'paginationSize':tableLimit,'initialSort':[{'column':'SUM','dir':_0x1f185d}],'autoResize':![],'resizableRows':![],'resizableColumns':![],'responsiveLayout':!![],'columns':[{'title':'','field':'Id','visible':![],'frozen':!![]},{'title':'','field':_0x107c('0x21'),'width':0x1e,'frozen':!![]},{'title':'','field':'SeriesFilter','visible':![]},{'title':'','field':_0x107c('0x11'),'visible':![]},{'title':'名前','field':_0x107c('0x25'),'responsive':0x7,'minWidth':0x1e,'width':0xb4},{'title':'作品','field':_0x107c('0x47'),'width':0x1e,'responsive':0xa},{'title':'武器','field':_0x107c('0x46'),'width':0x1e,'responsive':0x9},{'title':'HP','field':'HP','align':'right','sortable':!![],'sorter':_0x107c('0x4f'),'minWidth':0x1e,'width':0x28},Object[_0x107c('0x52')]({'title':'腕','field':_0x107c('0x53')},_0x2e644e),Object[_0x107c('0x52')]({'title':'体','field':_0x107c('0x54')},_0x2e644e),Object[_0x107c('0x52')]({'title':'器','field':'DEX'},_0x2e644e),Object[_0x107c('0x52')]({'title':'速','field':_0x107c('0x55')},_0x2e644e),Object[_0x107c('0x52')]({'title':'知','field':'INT'},_0x2e644e),Object['assign']({'title':'精','field':'MND'},_0x2e644e),Object[_0x107c('0x52')]({'title':'愛','field':'AI'},_0x2e644e),Object[_0x107c('0x52')]({'title':'魅','field':'MI'},_0x2e644e),{'title':_0x107c('0x56'),'field':_0x107c('0x45'),'sortable':!![],'minWidth':0x1e,'width':0x28,'sorter':_0x107c('0x4f'),'responsive':0x8}]});changeId2Dot();}$(_0x107c('0x57'))['click'](function(){let _0x4d6ff2={};let _0x518734=NOW_CHAR['Id'];let _0x46dffc=0x0;for(let _0x4511d7 of PARAM_KEY_HP){let _0x2d0fb2=Number($(_0x107c('0x26')+_0x4511d7)[_0x107c('0x9')]());_0x4d6ff2[_0x4511d7]=_0x2d0fb2;CHAR_MASTER[_0x518734][_0x4511d7]=_0x2d0fb2;_0x46dffc+=_0x2d0fb2;}updateData(_0x107c('0x58')+_0x518734,_0x4d6ff2);$(_0x107c('0x1f'))[_0x107c('0xc')](function(){let _0x57171d=$(this)[_0x107c('0x14')]();let _0x11a36d=$(this)[_0x107c('0x8')](_0x107c('0x20'));if(_0x11a36d==='Id'&&_0x57171d===_0x518734){$(this)['parent']()[_0x107c('0x6')]('.tabulator-cell')['each'](async function(){let _0x45ee53=$(this)[_0x107c('0x8')]('tabulator-field');if(_0x4d6ff2[_0x45ee53]!==undefined){$(this)[_0x107c('0x14')](_0x4d6ff2[_0x45ee53]);}else if(_0x45ee53===_0x107c('0x45')){$(this)[_0x107c('0x14')](_0x46dffc);}});return![];}});for(let _0x407dfe in MY_LIST){if(MY_LIST[_0x407dfe]['Id']===_0x518734){let _0x10afb3=0x0;for(let _0x4511d7 of PARAM_KEY_HP){MY_LIST[_0x407dfe][_0x4511d7]=Number(_0x4d6ff2[_0x4511d7]);_0x10afb3+=Number(_0x4d6ff2[_0x4511d7]);}MY_LIST[_0x407dfe][_0x107c('0x45')]=_0x10afb3-Number(_0x4d6ff2['HP']);}}$('#CHAR_INPUT')[_0x107c('0xb')](0x12c);});
