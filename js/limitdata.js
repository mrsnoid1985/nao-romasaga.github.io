var _0x3afc=['undefined','UserId','data-id','icon/icon_','getSorters','data-href','村長の舞','\x22\x20width=\x2230\x22\x20height=\x2230\x22\x20style=\x22position:\x20absolute;\x20right:\x20-5px;\x20\x20\x20\x20\x20top:\x200px;\x22>','icon/','.fButton','length','LimitDEX','Rarity','StyleBonusLv50MI','ステータス上限','Power','MyPower','StyleBonusLv50AGI','戦闘力','hasClass','Rei','LimitMND','フェニックスアロー','number','StyleBonus','CharId','#example-table','.baseValue','MaxAGI','OrgStylePlusLv50','Max','SeriesFilter','style_icon','base','floor','Inn','回復呼吸','each','fitData','find','<span\x20class=\x27d-none\x20d-md-inline\x27>','Limit','attr','スタイル補正+ボーナス(Lv50)','rank','Rai','CharMax','MaxDEX','IllustId','エナジー吸入','Attack','MaxAI','MaxVIT','val','StyleBonusLv50ALL','clearFilter','Netsu','OrgStyleBonusLv50','assign','<img\x20src=\x22','style_icon/','LimitSUM','LimitSTR','icon_btn_on','エナジースティール','Series','setSort','RareFilter','push','data-type','CharacterId','撃破吸収','630px','<div\x20class=\x22text-center\x22>','right','MaxSTR','image','30px','database','Heal','回復力','icon_btn_off','MaxINT','append','ready','goOffline','LimitAI','<div\x20id=\x22example-table\x22\x20style=\x22width:100%\x22></div>','MaxSUM','rare_icon','自己再生','MAX','\x22\x20width=\x2240\x22\x20height=\x2240\x22\x20style=\x22left:\x205px;\x22>','StyleBonusLv50','LimitINT','WeaponTypeFilter','アンソロジー','click','filterActive','StyleAbility','.png','StyleBonusLv50INT','left','.dispCol','</div>','addClass','You','toggleClass','org','Totsu','StyleBonusLv50DEX','WeaponType','スイカカット','StyleBonusLv50STR','Resist','limitdata','html','<small>','Name','indexOf','ステータス値(補正)','StyleBonusLv50MND','AnotherName','LimitMI','setFilter','LimitAGI','全能力値','StyleBonusLv50AI'];(function(_0x5ea5a1,_0x3afc57){var _0x5a6480=function(_0x23a74d){while(--_0x23a74d){_0x5ea5a1['push'](_0x5ea5a1['shift']());}};_0x5a6480(++_0x3afc57);}(_0x3afc,0x1f1));var _0x5a64=function(_0x5ea5a1,_0x3afc57){_0x5ea5a1=_0x5ea5a1-0x0;var _0x5a6480=_0x3afc[_0x5ea5a1];return _0x5a6480;};typeof firebase!==_0x5a64('0xf')&&(firebase[_0x5a64('0x5d')]()[_0x5a64('0x64')](),firebase[_0x5a64('0x5d')](appUsers)[_0x5a64('0x64')]());var tableLimit=0xa,table,tableData=[],isLimitShow=!![],isValShow=!![],isPerShow=!![];$(document)[_0x5a64('0x63')](function(){initialLoad();});async function initialLoad(){for(let _0x3e40df in STYLE_MASTER){let _0x5989bd=CONST_STYLE_BONUS_VAL[STYLE_MASTER[_0x3e40df]['Rarity']],_0x812978={};for(let _0x3d16a7 of PARAM_KEY){_0x812978[_0x3d16a7]=0x0;}for(let _0x2d89ac in _0x5989bd){let _0x478971=STYLE_MASTER[_0x3e40df][_0x5a64('0x27')][_0x2d89ac];if(_0x478971===_0x5a64('0xd'))for(let _0x80fe9b of PARAM_KEY){_0x812978[_0x80fe9b]+=_0x5989bd[_0x2d89ac];}else _0x812978[PARAM_KEY[PARAM_NAME[_0x5a64('0x6')](_0x478971)]]+=_0x5989bd[_0x2d89ac];}let _0xb838eb={},_0x47b023=STYLE_MASTER[_0x3e40df]['Id'],_0xfc8a6=STYLE_MASTER[_0x47b023][_0x5a64('0x55')],_0x460138=CHAR_MASTER[_0xfc8a6];_0xb838eb['Id']=_0x3e40df,_0xb838eb[_0x5a64('0x28')]=_0xfc8a6,_0xb838eb['Name']=_0x5a64('0x4')+STYLE_MASTER[_0x3e40df][_0x5a64('0x5')]+_0x5a64('0x37')+STYLE_MASTER[_0x3e40df][_0x5a64('0x9')]+'</span></small>';var _0x441499=getImgPath(_0x5a64('0x12')+STYLE_MASTER[_0x3e40df]['Rarity']+'.png'),_0x1e0efb=getImgPath(_0x5a64('0x17')+ICON_LIST[_0x460138[_0x5a64('0x7e')]]+_0x5a64('0x73')),_0x42fa21=getImgPath(_0x5a64('0x4b')+STYLE_MASTER[_0x3e40df][_0x5a64('0x3f')]+'.png');_0xb838eb[_0x5a64('0x68')]=_0x441499,_0xb838eb[_0x5a64('0x2f')]=_0x5a64('0x58')+(_0x5a64('0x4a')+_0x441499+'\x22\x20width=\x2225\x22\x20height=\x2225\x22\x20style=\x22position:\x20absolute;\x20left:\x20-5px;\x22>')+(_0x5a64('0x4a')+_0x42fa21+_0x5a64('0x6b'))+(_0x5a64('0x4a')+_0x1e0efb+_0x5a64('0x16'))+_0x5a64('0x77'),_0xb838eb[_0x5a64('0x50')]=_0x460138['Series'],_0xb838eb[_0x5a64('0x7e')]=getImgPath(_0x5a64('0x17')+ICON_LIST[_0x460138[_0x5a64('0x7e')]]+_0x5a64('0x73')),_0xb838eb[_0x5a64('0x52')]=STYLE_MASTER[_0x3e40df][_0x5a64('0x1b')],_0xb838eb[_0x5a64('0x2e')]=_0x460138[_0x5a64('0x50')],_0xb838eb[_0x5a64('0x6e')]=ICON_LIST[_0x460138[_0x5a64('0x7e')]];var _0x267c57=0x0,_0x452cc7=0x0,_0x1ff3b6=0x0,_0x396a7d={'STR':0x6,'VIT':0x5,'DEX':0x4,'AGI':0x4,'INT':0x4,'MND':0x5,'AI':0x2,'MI':0x2},_0x46ad3d={'STR':0x6,'VIT':0x5,'DEX':0x2,'AGI':0x6,'INT':0x4,'MND':0x5,'AI':0x2,'MI':0x2},_0x4583b5={'STR':0x0,'VIT':0x5,'DEX':0x6,'AGI':0x5,'INT':0x5,'MND':0x5,'AI':0x3,'MI':0x3},_0x353615={'STR':0x0,'VIT':0x6,'DEX':0x3,'AGI':0x6,'INT':0x6,'MND':0x6,'AI':0x3,'MI':0x2},_0x4ee812=0x0,_0x1b8474=0x0;for(var _0x38ddb7 of['Zan','Da',_0x5a64('0x7c'),_0x5a64('0x47'),_0x5a64('0x23'),_0x5a64('0x3c'),_0x5a64('0x32'),_0x5a64('0x79')]){_0x4ee812+=STYLE_MASTER[_0x3e40df][_0x5a64('0x1')+_0x38ddb7];}_0x1b8474=_0x4ee812;var _0x485ccd=_0x353615;if(['剣','大剣','斧','槍','棍棒'][_0x5a64('0x6')](STYLE_MASTER[_0x3e40df][_0x5a64('0x7e')])>-0x1)_0x485ccd=_0x396a7d;else{if(['小剣','弓','銃'][_0x5a64('0x6')](STYLE_MASTER[_0x3e40df][_0x5a64('0x7e')])>-0x1)_0x485ccd=_0x4583b5;else['体術'][_0x5a64('0x6')](STYLE_MASTER[_0x3e40df]['WeaponType'])>-0x1&&(_0x485ccd=_0x46ad3d);}for(let _0x263bfb of PARAM_KEY){var _0x31169c=STYLE_MASTER[_0x3e40df][_0x5a64('0x6c')+_0x263bfb];_0x1ff3b6+=_0x31169c,_0xb838eb[_0x5a64('0x48')+_0x263bfb]=_0x31169c,_0xb838eb[_0x5a64('0x2c')+_0x263bfb]=_0x812978[_0x263bfb],_0xb838eb['StyleBonusLv50'+_0x263bfb]=_0x31169c,_0xb838eb[_0x5a64('0x6c')+_0x263bfb]+=_0x812978[_0x263bfb]>0x0?'%+'+_0x812978[_0x263bfb]:'%',_0xb838eb[_0x5a64('0x7b')+_0x263bfb]=_0x460138[_0x5a64('0x6a')+_0x263bfb],_0xb838eb[_0x5a64('0x3d')+_0x263bfb]=_0x460138[_0x5a64('0x6a')+_0x263bfb]===-0x63?'?':LIMIT_BASE+_0x460138[_0x5a64('0x6a')+_0x263bfb],_0xb838eb[_0x5a64('0x38')+_0x263bfb]=STYLE_MASTER[_0x3e40df][_0x5a64('0x38')+_0x263bfb]===0x63?'?':LIMIT_BASE+STYLE_MASTER[_0x3e40df][_0x5a64('0x38')+_0x263bfb],_0xb838eb['Max'+_0x263bfb]=_0xb838eb[_0x5a64('0x3d')+_0x263bfb]==='?'?'?':Math['floor'](_0xb838eb[_0x5a64('0x3d')+_0x263bfb]*(0x1+Number(_0x31169c)/0x64))+Number(_0x812978[_0x263bfb]),_0x267c57+=Number(_0xb838eb[_0x5a64('0x38')+_0x263bfb]),_0x452cc7+=Number(_0xb838eb[_0x5a64('0x2d')+_0x263bfb]);var _0x3f73ef=_0xb838eb[_0x5a64('0x3d')+_0x263bfb]+_0xb838eb[_0x5a64('0x3d')+_0x263bfb]*_0x31169c/0x64+_0x812978[_0x263bfb]+URA;_0x4ee812+=POWER_TABLE[_0x263bfb]*_0x3f73ef,_0x1b8474+=_0x485ccd[_0x263bfb]*_0x3f73ef;}var _0x5873af=0x0;if(['剣','大剣','斧','槍','棍棒'][_0x5a64('0x6')](STYLE_MASTER[_0x3e40df]['WeaponType'])>-0x1)_0x5873af=_0xb838eb[_0x5a64('0x5a')]*0x4-0x96;else{if(['小剣','弓'][_0x5a64('0x6')](STYLE_MASTER[_0x3e40df][_0x5a64('0x7e')])>-0x1)_0x5873af=_0xb838eb[_0x5a64('0x3e')]*0x4-0x96;else{if(['銃'][_0x5a64('0x6')](STYLE_MASTER[_0x3e40df][_0x5a64('0x7e')])>-0x1)_0x5873af=_0xb838eb[_0x5a64('0x3e')]*3.6-0x7d;else{if(['杖']['indexOf'](STYLE_MASTER[_0x3e40df][_0x5a64('0x7e')])>-0x1)_0x5873af=_0xb838eb[_0x5a64('0x61')]*0x4-0x96;else['体術'][_0x5a64('0x6')](STYLE_MASTER[_0x3e40df][_0x5a64('0x7e')])>-0x1&&(_0x5873af=_0xb838eb[_0x5a64('0x5a')]*0x2+_0xb838eb[_0x5a64('0x2b')]*2.5-0x78);}}}var _0x385115=0x0,_0x576d3d='',_0x585784='';for(var _0x29bb0e of STYLE_MASTER[_0x3e40df]['Skill']){_0x576d3d+=_0x29bb0e;}for(var _0xcb06f3 in STYLE_MASTER[_0x3e40df][_0x5a64('0x72')]){_0x585784+=STYLE_MASTER[_0x3e40df][_0x5a64('0x72')][_0xcb06f3];}(_0x585784[_0x5a64('0x6')](_0x5a64('0x33'))>-0x1||_0x585784['indexOf']('吸収攻撃')>-0x1||_0x585784[_0x5a64('0x6')](_0x5a64('0x56'))>-0x1||_0x585784[_0x5a64('0x6')](_0x5a64('0x69'))>-0x1||_0x576d3d[_0x5a64('0x6')](_0x5a64('0x25'))>-0x1||_0x576d3d['indexOf']('舞月')>-0x1||_0x576d3d[_0x5a64('0x6')]('ライフドレイン')>-0x1||_0x576d3d[_0x5a64('0x6')](_0x5a64('0x4f'))>-0x1||_0x576d3d['indexOf'](_0x5a64('0x15'))>-0x1||_0x576d3d[_0x5a64('0x6')](_0x5a64('0x6f'))>-0x1||_0x576d3d['indexOf'](_0x5a64('0x7f'))>-0x1||_0x576d3d[_0x5a64('0x6')](_0x5a64('0x40'))>-0x1)&&(_0x385115=_0xb838eb[_0x5a64('0x42')]+_0xb838eb['MaxMI']),_0xb838eb[_0x5a64('0x45')]=_0x1ff3b6,_0xb838eb['LimitSUM']=_0x267c57,_0xb838eb[_0x5a64('0x67')]=_0x452cc7,_0xb838eb[_0x5a64('0x41')]=Math[_0x5a64('0x31')](_0x5873af),_0xb838eb['Heal']=Math[_0x5a64('0x31')](_0x385115),_0xb838eb[_0x5a64('0x1e')]=Math[_0x5a64('0x31')](_0x4ee812+(HP_MAX+URA_HP)*0x5),_0xb838eb[_0x5a64('0x1f')]=Math[_0x5a64('0x31')](_0x1b8474+(HP_MAX+URA_HP)*0x5),tableData[_0x5a64('0x53')](_0xb838eb);}drawTable();};$(_0x5a64('0x76'))[_0x5a64('0x70')](function(){var _0x2cda0b=$(this)[_0x5a64('0x22')]('icon_btn_off'),_0x8a69b1=$(this)[_0x5a64('0x39')]('data-id');$(this)[_0x5a64('0x7a')](_0x5a64('0x60')),$(this)[_0x5a64('0x7a')](_0x5a64('0x4e'));if(_0x8a69b1===_0x5a64('0x30'))isLimitShow=_0x2cda0b;else _0x8a69b1===_0x5a64('0x44')?isValShow=_0x2cda0b:isPerShow=_0x2cda0b;sort=table[_0x5a64('0x13')](),drawTable(),filter(),table[_0x5a64('0x51')](sort);}),$(_0x5a64('0x2a'))['click'](function(){$(_0x5a64('0x2a'))[_0x5a64('0x34')](function(){$(this)['removeClass'](_0x5a64('0x60')),$(this)[_0x5a64('0x78')](_0x5a64('0x4e'));}),$(this)[_0x5a64('0x78')](_0x5a64('0x60')),BASE=Number($(this)[_0x5a64('0x39')](_0x5a64('0x11')));for(let _0xec4cff in tableData){var _0x4c1f51=tableData[_0xec4cff]['Id'],_0x54bd98=0x0;valsum=0x0;for(let _0x587727 of PARAM_KEY){tableData[_0xec4cff][_0x5a64('0x38')+_0x587727]=STYLE_MASTER[_0x4c1f51][_0x5a64('0x38')+_0x587727]===0x63?'?':BASE+STYLE_MASTER[_0x4c1f51][_0x5a64('0x38')+_0x587727],tableData[_0xec4cff][_0x5a64('0x3d')+_0x587727]=tableData[_0xec4cff]['org'+_0x587727]===-0x63?'?':BASE+tableData[_0xec4cff][_0x5a64('0x7b')+_0x587727],tableData[_0xec4cff][_0x5a64('0x2d')+_0x587727]=tableData[_0xec4cff][_0x5a64('0x3d')+_0x587727]==='?'?'?':Math['floor'](tableData[_0xec4cff][_0x5a64('0x3d')+_0x587727]*(0x1+Number(tableData[_0xec4cff][_0x5a64('0x48')+_0x587727])/0x64))+tableData[_0xec4cff][_0x5a64('0x2c')+_0x587727],_0x54bd98+=Number(tableData[_0xec4cff][_0x5a64('0x38')+_0x587727]),valsum+=Number(tableData[_0xec4cff]['Max'+_0x587727]);}tableData[_0xec4cff][_0x5a64('0x4c')]=_0x54bd98,tableData[_0xec4cff][_0x5a64('0x67')]=valsum;}sort=table[_0x5a64('0x13')](),drawTable(),filter(),table[_0x5a64('0x51')](sort);}),$('.filterList')[_0x5a64('0x70')](function(){$(this)[_0x5a64('0x36')]('.fButton')['toggleClass'](_0x5a64('0x71'));if(table===undefined)return;filter(),gtag('event','clickFilter',{'event_category':_0x5a64('0x2'),'event_label':$(this)[_0x5a64('0x39')](_0x5a64('0x14')),'value':0x1});});function filter(){let _0x54cdd7=[],_0x2e360d=[],_0x39e0c7=[];$('.filterList')[_0x5a64('0x34')](function(){let _0x364c93=$(this)[_0x5a64('0x39')](_0x5a64('0x54')),_0x4c36d9=$(this)['attr'](_0x5a64('0x14'));if($(this)[_0x5a64('0x36')](_0x5a64('0x18'))[_0x5a64('0x22')](_0x5a64('0x71'))){if(_0x364c93===_0x5a64('0x6e'))_0x54cdd7['push']({'field':_0x364c93,'type':'=','value':_0x4c36d9});else _0x364c93===_0x5a64('0x52')?_0x39e0c7[_0x5a64('0x53')]({'field':_0x364c93,'type':'=','value':_0x4c36d9}):_0x2e360d[_0x5a64('0x53')]({'field':_0x364c93,'type':'=','value':_0x4c36d9});}}),table[_0x5a64('0x46')]();let _0x1d1265=[];_0x54cdd7['length']>0x0&&_0x1d1265[_0x5a64('0x53')](_0x54cdd7),_0x2e360d[_0x5a64('0x19')]>0x0&&_0x1d1265['push'](_0x2e360d),_0x39e0c7['length']>0x0&&_0x1d1265[_0x5a64('0x53')](_0x39e0c7),table[_0x5a64('0xb')](_0x1d1265);};function drawTable(){$(_0x5a64('0x29'))['remove'](),$('#example-table-display')[_0x5a64('0x62')](_0x5a64('0x66'));let _0x2b36ea={'align':_0x5a64('0x59'),'sortable':!![],'sorter':_0x5a64('0x26'),'minWidth':0x28,'width':0x28,'visible':isLimitShow},_0x145e45={'align':_0x5a64('0x59'),'sortable':!![],'sorter':_0x5a64('0x26'),'minWidth':0x28,'width':0x28,'visible':isValShow},_0x35f142={'align':_0x5a64('0x59'),'sortable':!![],'sorter':_0x5a64('0x26'),'minWidth':0x50,'width':0x50,'visible':isValShow},_0x2f623f={'align':_0x5a64('0x59'),'sortable':!![],'sorter':_0x5a64('0x26'),'minWidth':0x50,'width':0x50,'visible':isValShow},_0x3a04ec={'align':_0x5a64('0x75'),'sortable':!![],'sorter':_0x5a64('0x26'),'minWidth':0x46,'width':0x46,'visible':isPerShow};table=new Tabulator(_0x5a64('0x29'),{'height':_0x5a64('0x57'),'layout':_0x5a64('0x35'),'data':tableData,'tooltips':![],'history':!![],'initialSort':[],'autoResize':![],'resizableRows':![],'resizableColumns':![],'columns':[{'title':'','field':_0x5a64('0x2f'),'width':0x3c,'frozen':!![],'formatter':'html'},{'title':'','field':'Id','visible':![]},{'title':'','field':_0x5a64('0x10'),'visible':![]},{'title':'','field':_0x5a64('0x52'),'visible':![]},{'title':'','field':_0x5a64('0x2e'),'visible':![]},{'title':'','field':'WeaponTypeFilter','visible':![]},{'title':_0x5a64('0x3b'),'field':_0x5a64('0x3b'),'visible':![]},{'title':'武器','field':'WeaponType','width':0x1e,'formatter':_0x5a64('0x5b'),'formatterParams':{'height':_0x5a64('0x5c'),'width':_0x5a64('0x5c')},'visible':![]},{'title':'名前','field':_0x5a64('0x5'),'formatter':_0x5a64('0x3'),'headerFilter':'input'},{'title':_0x5a64('0x1d'),'columns':[Object[_0x5a64('0x49')]({'title':'腕','field':_0x5a64('0x4d')},_0x2b36ea),Object[_0x5a64('0x49')]({'title':'体','field':'LimitVIT'},_0x2b36ea),Object[_0x5a64('0x49')]({'title':'器','field':_0x5a64('0x1a')},_0x2b36ea),Object['assign']({'title':'速','field':_0x5a64('0xc')},_0x2b36ea),Object[_0x5a64('0x49')]({'title':'知','field':_0x5a64('0x6d')},_0x2b36ea),Object[_0x5a64('0x49')]({'title':'精','field':_0x5a64('0x24')},_0x2b36ea),Object[_0x5a64('0x49')]({'title':'愛','field':_0x5a64('0x65')},_0x2b36ea),Object[_0x5a64('0x49')]({'title':'魅','field':_0x5a64('0xa')},_0x2b36ea),Object[_0x5a64('0x49')]({'title':'合計','field':'LimitSUM'},_0x2b36ea)]},{'title':_0x5a64('0x7'),'columns':[Object[_0x5a64('0x49')]({'title':'腕','field':_0x5a64('0x5a')},_0x145e45),Object[_0x5a64('0x49')]({'title':'体','field':_0x5a64('0x43')},_0x145e45),Object['assign']({'title':'器','field':_0x5a64('0x3e')},_0x145e45),Object['assign']({'title':'速','field':_0x5a64('0x2b')},_0x145e45),Object[_0x5a64('0x49')]({'title':'知','field':'MaxINT'},_0x145e45),Object[_0x5a64('0x49')]({'title':'精','field':'MaxMND'},_0x145e45),Object[_0x5a64('0x49')]({'title':'愛','field':_0x5a64('0x42')},_0x145e45),Object[_0x5a64('0x49')]({'title':'魅','field':'MaxMI'},_0x145e45),Object['assign']({'title':'合計','field':_0x5a64('0x67')},_0x2f623f),Object[_0x5a64('0x49')]({'title':'攻撃力','field':_0x5a64('0x41')},_0x2f623f),Object[_0x5a64('0x49')]({'title':_0x5a64('0x5f'),'field':_0x5a64('0x5e')},_0x2f623f),Object['assign']({'title':_0x5a64('0x21'),'field':'Power'},_0x35f142),Object['assign']({'title':'特殊戦闘力','field':_0x5a64('0x1f')},_0x35f142)]},{'title':_0x5a64('0x3a'),'columns':[Object['assign']({'title':'腕%','field':_0x5a64('0x0')},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'体%','field':'StyleBonusLv50VIT'},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'器%','field':_0x5a64('0x7d')},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'速%','field':_0x5a64('0x20')},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'知%','field':_0x5a64('0x74')},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'精%','field':_0x5a64('0x8')},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'愛%','field':_0x5a64('0xe')},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'魅%','field':_0x5a64('0x1c')},_0x3a04ec),Object[_0x5a64('0x49')]({'title':'合計%','field':_0x5a64('0x45')},_0x3a04ec)]}]});};