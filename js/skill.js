var _0x4d49=['ディレイ効果','技威力[E]','技威力[C]','技威力[B]','技威力[A]','技威力[S]','技威力[SSS]','技威力無し','間接攻撃','直接攻撃','浮遊特効','不死特効','植物特効','虫特効','骨特効','岩石特効','人間特効','女性特効','カエル特効','獣特効','火精特効','悪魔特効','スタン','狂戦士','器用さ','素早さ','敵全体','敵縦一列','味方単体','SSS','skill_','BattleType','PowerGrade','ConsumeBp','AttackKansetsu','kan','push','.selectJoken','hide','._FilterLink','click','toggleClass','filterActive','#skill_holder_list','html','concat','each','hasClass','attr','href','substr','#skill_name_label','join','#skillList','#SKILL_NAME','#SKILL_TEXT','show','#SORT_IRYOKU','icon_btn_on','iryoku','desc','#SORT_BP','.skill_select','data-id','.sortButton','addClass','icon_btn_off','removeClass','asc','#BP_SORT_ASC','d-none','#BP_SORT_DESC','#IRYOKU_SORT_ASC','#IRYOKU_SORT_DESC','#SKILL_TEMPLATE','clone','find','.skillNameClass','append','<span>','icon_sm','text','Name','KakuseiSozai','Kakusei','.skillKakuseiArea','覚醒:','.iconArea','AttackAttributes','split','BadStatus','Buff','[HP回復]','DeBuff','AttackArea','AttackDistance','[間接]','Fast','[ファスト]','[ディレイ]','SkillIryoku','.iryokuArea','\u3000BP:','.holderStyleArea','Holders','<div>','Rarity','style','.png','70px\x20!important;','width:70px;height:70px;','style_icon/','\x20background-size:\x20','col-3\x20col-sm-2\x20text-center','culcDamage','</p>','<div\x20class=\x27style-label\x27>','</div>','html,body','animate','offset','top','cId','assign','sort','indexOf','#skill_damage_ranking','StyleAbility','<div\x20class=\x22col-12\x20style-skill-list\x22\x20style=\x22padding:\x200px\x205px;\x22>','<div\x20style=\x22width:35px;\x20height:35px;\x20position:\x20absolute;background:\x20url(./img/icon/icon_','.png)\x20no-repeat;\x20background-size:\x20cover;\x22></div>','.png)\x20no-repeat;\x20background-size:\x20cover;\x20opacity:\x200.5;\x22></div>','<small>','</small></div>','<div\x20class=\x22col-7\x22><span\x20style=\x22font-size:30px\x22>','toLocaleString','</span></div>','<div\x20class=\x22col-5\x20text-nowrap\x20small\x22>','ability','<br>アビリティ:+','<div\x20class=\x22col-12\x20text-nowrap\x20small\x22>','FastDelay','fast','Delay','delay','KakuseiSearch','skill_bp','CriticalTargets','ディレイ','skill_cyoku','forEach','#count_','slice','length','slideDown','-200px','stop','#weponLabel','undefined','database','goOffline','skill_dken','skill_ono','skill_yari','skill_yumi','skill_kon','skill_tai','skill_ju','skill_tsue','skill_kin','skill_en','skill_zan','skill_totsu','skill_da','skill_netsu','skill_rei','skill_rai','skill_yo','skill_tantai','skill_tate','skill_yoko','skill_kan','skill_jishin','skill_mikata','skill_fast','skill_delay','skill_mizu','skill_kaze','skill_tsuchi','skill_hikari','skill_yami','skill_sutan','skill_mahi','skill_sokushi','skill_sekika','skill_miryo','skill_nemuri','skill_konran','skill_kyosenshi','skill_kurayami','skill_deb_wan','skill_deb_tai','skill_deb_kiyo','skill_deb_suba','skill_deb_chi','skill_deb_sei','skill_iryoku_e','skill_iryoku_d','skill_iryoku_b','skill_iryoku_a','skill_iryoku_s','skill_iryoku_sss','skill_crit_fushi','skill_crit_suise','skill_crit_shoku','skill_crit_mushi','skill_crit_hone','skill_crit_gan','skill_crit_jo','skill_crit_kaeru','skill_crit_kemo','skill_crit_fire','skill_crit_fish','skill_crit_giant','blue','orange','red','yellow','斬属性','打属性','熱属性','冷属性','雷属性','陰属性','毒付与','スタン付与','睡眠付与','石化付与','狂戦士付与','腕力減少付与','体力減少付与','素早さ減少付与','知力減少付与','精神減少付与','縦一列攻撃','横一列攻撃','味方単体対象','近接攻撃','遠距離攻撃','自身が対象'];(function(_0x2776ea,_0x60edc1){var _0x2f3e31=function(_0x3a89c9){while(--_0x3a89c9){_0x2776ea['push'](_0x2776ea['shift']());}};_0x2f3e31(++_0x60edc1);}(_0x4d49,0x9e));var _0x2038=function(_0x51a856,_0x183179){_0x51a856=_0x51a856-0x0;var _0x377a5b=_0x4d49[_0x51a856];return _0x377a5b;};if(typeof firebase!==_0x2038('0x0')){firebase[_0x2038('0x1')]()[_0x2038('0x2')]();firebase[_0x2038('0x1')](appUsers)[_0x2038('0x2')]();}var SKILL_MASTER_LIST=[];var skillTypeList={};var NOW_LIST;var optionList={'剣':'skill_ken','大剣':_0x2038('0x3'),'斧':_0x2038('0x4'),'小剣':'skill_sken','槍':_0x2038('0x5'),'弓':_0x2038('0x6'),'棍棒':_0x2038('0x7'),'体術':_0x2038('0x8'),'銃':_0x2038('0x9'),'杖':_0x2038('0xa'),'近':_0x2038('0xb'),'遠':_0x2038('0xc'),'斬':_0x2038('0xd'),'突':_0x2038('0xe'),'打':_0x2038('0xf'),'熱':_0x2038('0x10'),'冷':_0x2038('0x11'),'雷':_0x2038('0x12'),'陰':'skill_in','陽':_0x2038('0x13'),'敵単体':_0x2038('0x14'),'敵縦一列':_0x2038('0x15'),'敵横一列':_0x2038('0x16'),'直接':'skill_cyoku','間接':_0x2038('0x17'),'敵全体':'skill_zentai','自身':_0x2038('0x18'),'味方単体':_0x2038('0x19'),'敵ランダム':'skill_random','ファスト':_0x2038('0x1a'),'ディレイ':_0x2038('0x1b'),'火術':'skill_hi','水術':_0x2038('0x1c'),'風術':_0x2038('0x1d'),'土術':_0x2038('0x1e'),'光術':_0x2038('0x1f'),'闇術':_0x2038('0x20'),'スタン':_0x2038('0x21'),'マヒ':_0x2038('0x22'),'気絶':_0x2038('0x23'),'毒':'skill_doku','石化':_0x2038('0x24'),'魅了':_0x2038('0x25'),'眠り':_0x2038('0x26'),'混乱':_0x2038('0x27'),'狂戦士':_0x2038('0x28'),'暗闇':_0x2038('0x29'),'腕力':_0x2038('0x2a'),'体力':_0x2038('0x2b'),'器用さ':_0x2038('0x2c'),'素早さ':_0x2038('0x2d'),'知力':_0x2038('0x2e'),'精神':_0x2038('0x2f'),'E':_0x2038('0x30'),'D':_0x2038('0x31'),'C':'skill_iryoku_c','B':_0x2038('0x32'),'A':_0x2038('0x33'),'S':_0x2038('0x34'),'SS':'skill_iryoku_ss','SSS':_0x2038('0x35'),'-':'skill_iryoku_-','浮遊':'skill_crit_fuyu','不死':_0x2038('0x36'),'水棲':_0x2038('0x37'),'植物':_0x2038('0x38'),'虫':_0x2038('0x39'),'骨':_0x2038('0x3a'),'岩石':_0x2038('0x3b'),'人間':'skill_crit_nin','女性':_0x2038('0x3c'),'カエル':_0x2038('0x3d'),'獣':_0x2038('0x3e'),'火精':_0x2038('0x3f'),'魚':_0x2038('0x40'),'悪魔':'skill_crit_devil','巨人':_0x2038('0x41')};let color=['black',_0x2038('0x42'),'green',_0x2038('0x43'),'purple',_0x2038('0x44'),_0x2038('0x45'),'white'];let color2=['黒','青','緑','橙','紫','赤','黄','白'];var SKILL_NAME_LABEL={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':_0x2038('0x46'),'da':_0x2038('0x47'),'totsu':'突属性','netsu':_0x2038('0x48'),'rei':_0x2038('0x49'),'rai':_0x2038('0x4a'),'in':_0x2038('0x4b'),'you':'陽属性','doku':_0x2038('0x4c'),'mahi':'マヒ付与','kurayami':'暗闇付与','sutan':_0x2038('0x4d'),'nemuri':_0x2038('0x4e'),'sekika':_0x2038('0x4f'),'konran':'混乱付与','miryo':'魅了付与','kyosenshi':_0x2038('0x50'),'sokushi':'気絶','deb_wan':_0x2038('0x51'),'deb_tai':_0x2038('0x52'),'deb_kiyo':'器用さ減少付与','deb_suba':_0x2038('0x53'),'deb_chi':_0x2038('0x54'),'deb_sei':_0x2038('0x55'),'zentai':'全体攻撃','tate':_0x2038('0x56'),'yoko':_0x2038('0x57'),'mikata':_0x2038('0x58'),'kin':_0x2038('0x59'),'en':_0x2038('0x5a'),'jishin':_0x2038('0x5b'),'fast':'ファスト効果','delay':_0x2038('0x5c'),'iryoku_e':_0x2038('0x5d'),'iryoku_d':'技威力[D]','iryoku_c':_0x2038('0x5e'),'iryoku_b':_0x2038('0x5f'),'iryoku_a':_0x2038('0x60'),'iryoku_s':_0x2038('0x61'),'iryoku_ss':'技威力[SS]','iryoku_sss':_0x2038('0x62'),'iryoku_-':_0x2038('0x63'),'kan':_0x2038('0x64'),'cyoku':_0x2038('0x65'),'crit_fuyu':_0x2038('0x66'),'crit_fushi':_0x2038('0x67'),'crit_suise':'水棲特効','crit_shoku':_0x2038('0x68'),'crit_mushi':_0x2038('0x69'),'crit_hone':_0x2038('0x6a'),'crit_gan':_0x2038('0x6b'),'crit_nin':_0x2038('0x6c'),'crit_jo':_0x2038('0x6d'),'crit_kaeru':_0x2038('0x6e'),'crit_kemo':_0x2038('0x6f'),'crit_fire':_0x2038('0x70'),'crit_fish':'魚特効','crit_devil':_0x2038('0x71')};var SKILL_NAME_SEARCH={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':'斬','da':'打','totsu':'突','netsu':'熱','rei':'冷','rai':'雷','in':'陰','yo':'陽','doku':'毒','mahi':'マヒ','kurayami':'暗闇','sutan':_0x2038('0x72'),'nemuri':'眠り','sekika':'石化','konran':'混乱','miryo':'魅了','kyosenshi':_0x2038('0x73'),'sokushi':'気絶','deb_wan':'腕力','deb_tai':'体力','deb_kiyo':_0x2038('0x74'),'deb_suba':_0x2038('0x75'),'deb_chi':'知力','deb_sei':'精神','zentai':_0x2038('0x76'),'tate':_0x2038('0x77'),'yoko':'敵横一列','mikata':_0x2038('0x78'),'kin':'近','en':'遠','jishin':'自身','iryoku_-':'-','iryoku_e':'E','iryoku_d':'D','iryoku_c':'C','iryoku_b':'B','iryoku_a':'A','iryoku_s':'S','iryoku_ss':'SS','iryoku_sss':_0x2038('0x79'),'crit_fuyu':'浮遊','crit_fushi':'不死','crit_suise':'水棲','crit_shoku':'植物','crit_mushi':'虫','crit_hone':'骨','crit_gan':'岩石','crit_nin':'人間','crit_jo':'女性','crit_kaeru':'カエル','crit_kemo':'獣','crit_fire':'火精','crit_fish':'魚','crit_devil':'悪魔','crit_giant':'巨人'};for(let i in color){let _0x60472d=color[i];optionList[_0x60472d+'1']=_0x2038('0x7a')+_0x60472d+'1';optionList[_0x60472d+'2']=_0x2038('0x7a')+_0x60472d+'2';optionList[_0x60472d+'3']=_0x2038('0x7a')+_0x60472d+'3';SKILL_NAME_LABEL[_0x60472d+'1']=color2[i]+'砂';SKILL_NAME_LABEL[_0x60472d+'2']=color2[i]+'石';SKILL_NAME_LABEL[_0x60472d+'3']=color2[i]+'宝石';}for(let i=0x1;i<=0x14;i++){optionList['bp'+i]='skill_bp'+i;SKILL_NAME_SEARCH['bp'+i]=i;}for(let key in optionList){skillTypeList[optionList[key]]=[];}createSkillMasterList(SKILL_MASTER);function filterList(_0x88f5da,_0x329d54,_0x4320a0){let _0x1361cb=[_0x2038('0x7b'),_0x2038('0x7c'),_0x2038('0x7d')]['indexOf'](_0x4320a0)>-0x1?!![]:![];if(_0x4320a0===_0x2038('0x7e')){for(let _0x2c262d in _0x329d54){_0x329d54[_0x2c262d]=_0x329d54[_0x2c262d]===_0x2038('0x7f')?!![]:![];}_0x1361cb=!![];}let _0x2a0a1e=[];for(let _0x5f201d in _0x88f5da){for(let _0x4fc6ff of _0x329d54){if(_0x1361cb&&_0x88f5da[_0x5f201d][_0x4320a0]===_0x4fc6ff){_0x2a0a1e[_0x2038('0x80')](_0x88f5da[_0x5f201d]);}else if(!_0x1361cb&&_0x88f5da[_0x5f201d][_0x4320a0]['indexOf'](_0x4fc6ff)>-0x1){_0x2a0a1e['push'](_0x88f5da[_0x5f201d]);}}}return _0x2a0a1e;}$(document)['ready'](function(_0x38e13d){countSkill(SKILL_MASTER);_0x38e13d(_0x2038('0x81'))[_0x2038('0x82')]();_0x38e13d(_0x2038('0x83'))[_0x2038('0x84')](function(){_0x38e13d('.selectJoken')[_0x2038('0x82')]();_0x38e13d(this)[_0x2038('0x85')](_0x2038('0x86'));_0x38e13d(_0x2038('0x87'))[_0x2038('0x88')]('');let _0x429224=SKILL_MASTER_LIST[_0x2038('0x89')]();let _0xbb3a8d={};let _0x479f64=[];let _0x46fb56=![];_0x38e13d(_0x2038('0x83'))[_0x2038('0x8a')](function(){if(_0x38e13d(this)[_0x2038('0x8b')]('filterActive')){_0x46fb56=!![];let _0x4079ee=_0x38e13d(this)[_0x2038('0x8c')](_0x2038('0x8d'))[_0x2038('0x8e')](0x1);let _0xfc0100=_0x38e13d(this)[_0x2038('0x8c')](_0x2038('0x8d'))[_0x2038('0x8e')](0x7);_0x479f64[_0x2038('0x80')](SKILL_NAME_LABEL[_0xfc0100]);let _0x2c7af7=_0x38e13d(this)[_0x2038('0x8c')]('data-col');if(_0xbb3a8d[_0x2c7af7]===undefined){_0xbb3a8d[_0x2c7af7]=[];}let _0x3a1ee3=SKILL_NAME_SEARCH[_0xfc0100]!==undefined?SKILL_NAME_SEARCH[_0xfc0100]:_0xfc0100;_0xbb3a8d[_0x2c7af7][_0x2038('0x80')](_0x3a1ee3);}});for(let _0x5862d4 in _0xbb3a8d){_0x429224=filterList(_0x429224,_0xbb3a8d[_0x5862d4],_0x5862d4);}countSkill(_0x429224);NOW_LIST=_0x429224;_0x38e13d(_0x2038('0x8f'))['text'](_0x479f64[_0x2038('0x90')]('&'));_0x38e13d('#skillList')[_0x2038('0x82')]();_0x38e13d(_0x2038('0x91'))[_0x2038('0x88')]('');_0x38e13d('#skill_damage_ranking')[_0x2038('0x88')]('');_0x38e13d(_0x2038('0x92'))[_0x2038('0x88')]('');_0x38e13d(_0x2038('0x93'))[_0x2038('0x88')]('');if(_0x46fb56){_0x38e13d(_0x2038('0x81'))[_0x2038('0x94')]();var _0x1f12a8='bp';var _0x592a05=!![];if(_0x38e13d(_0x2038('0x95'))[_0x2038('0x8b')](_0x2038('0x96'))){_0x1f12a8=_0x2038('0x97');_0x592a05=_0x38e13d(_0x2038('0x95'))[_0x2038('0x8b')](_0x2038('0x98'));}else{_0x592a05=_0x38e13d(_0x2038('0x99'))[_0x2038('0x8b')](_0x2038('0x98'));}if(_0x1f12a8==='bp'){sortSkillBP(_0x429224,_0x592a05);}else{sortSkillIryoku(_0x429224,_0x592a05);}}});_0x38e13d(document)['on'](_0x2038('0x84'),_0x2038('0x9a'),function(){var _0x21aeb0=_0x38e13d(this)['attr'](_0x2038('0x9b'));displaySkillHolders(_0x21aeb0);});_0x38e13d(_0x2038('0x9c'))[_0x2038('0x84')](function(){_0x38e13d(_0x2038('0x9c'))['removeClass'](_0x2038('0x96'))[_0x2038('0x9d')](_0x2038('0x9e'));_0x38e13d(this)[_0x2038('0x9f')]('icon_btn_off')[_0x2038('0x9d')](_0x2038('0x96'));var _0x1a905b=![];if(_0x38e13d(this)[_0x2038('0x8b')](_0x2038('0xa0'))){_0x1a905b=!![];_0x38e13d(this)[_0x2038('0x9f')]('asc')['addClass']('desc');}else{_0x38e13d(this)[_0x2038('0x9f')]('desc')['addClass']('asc');}var _0x21a55c=_0x38e13d(this)[_0x2038('0x8c')](_0x2038('0x9b'));if(_0x21a55c==='bp'){_0x38e13d(_0x2038('0xa1'))[_0x2038('0x85')](_0x2038('0xa2'));_0x38e13d(_0x2038('0xa3'))[_0x2038('0x85')](_0x2038('0xa2'));sortSkillBP(NOW_LIST,_0x1a905b);}else{_0x38e13d(_0x2038('0xa4'))[_0x2038('0x85')]('d-none');_0x38e13d(_0x2038('0xa5'))[_0x2038('0x85')](_0x2038('0xa2'));sortSkillIryoku(NOW_LIST,_0x1a905b);}});});function skillLabelDiplay(_0x504b3c){let _0x5e40d9=$(_0x2038('0xa6'))[_0x2038('0xa7')]()['attr']('id','')[_0x2038('0x8c')]('data-id',_0x504b3c['Id'])['removeClass'](_0x2038('0xa2'));_0x5e40d9[_0x2038('0xa8')](_0x2038('0xa9'))[_0x2038('0xaa')]($(_0x2038('0xab'))[_0x2038('0x9d')](_0x2038('0xac'))[_0x2038('0x9d')](ICON_LIST[_0x504b3c[_0x2038('0x7b')]])[_0x2038('0xad')]('\u3000'))[_0x2038('0xaa')](_0x504b3c[_0x2038('0xae')]);let _0x1314d3=KAKUSEI_COLOR[_0x504b3c[_0x2038('0xaf')]]+KAKUSEI_ICON[_0x504b3c[_0x2038('0xb0')]];let _0x4f7754=KAKUSEI_JP[_0x504b3c[_0x2038('0xaf')]];_0x5e40d9[_0x2038('0xa8')](_0x2038('0xb1'))['append'](_0x2038('0xb2')+_0x504b3c[_0x2038('0xb0')])[_0x2038('0xaa')]('\x20<span\x20class=\x22fukidashi\x22\x20style=\x22display:\x20inline-block\x22><span\x20class=\x22icon_'+_0x1314d3+'\x22\x20style=\x22width:25px;height:25px;\x20display:\x20inline-block;background-size:\x20contain;\x22>\u3000</span></span>'+_0x4f7754);let _0x57bf1e=_0x5e40d9['find'](_0x2038('0xb3'));_0x504b3c[_0x2038('0xb4')][_0x2038('0xb5')](',')['forEach'](function(_0x21f36e){_0x57bf1e[_0x2038('0xaa')]($(_0x2038('0xab'))[_0x2038('0x9d')](_0x2038('0xac'))[_0x2038('0x9d')](ICON_LIST[_0x21f36e])[_0x2038('0xad')]('\u3000'));});if(_0x504b3c[_0x2038('0xb6')]!=''){_0x57bf1e[_0x2038('0xaa')]($(_0x2038('0xab'))[_0x2038('0x9d')](_0x2038('0xac'))['addClass'](ICON_LIST[_0x504b3c[_0x2038('0xb6')]])[_0x2038('0xad')]('\u3000'));}if(_0x504b3c[_0x2038('0xb7')]!=''){if(_0x504b3c[_0x2038('0xb7')]==='HP'){_0x57bf1e[_0x2038('0xaa')](_0x2038('0xb8'));}else{let _0x5209c9=$(_0x2038('0xab'))[_0x2038('0x9d')](_0x2038('0xac'))[_0x2038('0x9d')](ICON_LIST[_0x504b3c['Buff']+'上昇'])['text']('\u3000');_0x57bf1e[_0x2038('0xaa')](_0x5209c9);}}if(_0x504b3c['DeBuff']!=''){_0x57bf1e[_0x2038('0xaa')]($(_0x2038('0xab'))[_0x2038('0x9d')](_0x2038('0xac'))[_0x2038('0x9d')](ICON_LIST[_0x504b3c[_0x2038('0xb9')]+'低下'])[_0x2038('0xad')]('\u3000'));}if(_0x504b3c['AttackDistance']!=='近'&&_0x504b3c[_0x2038('0xba')]!==_0x2038('0x76')){_0x57bf1e['append']('['+_0x504b3c[_0x2038('0xbb')]+']');}if(_0x504b3c['AttackArea']!=='敵単体'){_0x57bf1e[_0x2038('0xaa')]('['+AREA_SHORT[_0x504b3c[_0x2038('0xba')]]+']');}if(_0x504b3c[_0x2038('0x7e')]){_0x57bf1e[_0x2038('0xaa')](_0x2038('0xbc'));}if(_0x504b3c[_0x2038('0xbd')]){_0x57bf1e[_0x2038('0xaa')](_0x2038('0xbe'));}if(_0x504b3c['Delay']){_0x57bf1e[_0x2038('0xaa')](_0x2038('0xbf'));}let _0x260039=_0x504b3c[_0x2038('0xc0')]===0x0?IRYOKU_LIST[_0x504b3c['PowerGrade']]:_0x504b3c[_0x2038('0xc0')];_0x5e40d9[_0x2038('0xa8')](_0x2038('0xc1'))[_0x2038('0xaa')](_0x2038('0xc2')+_0x504b3c[_0x2038('0x7d')])[_0x2038('0xaa')]('\x20威力:'+_0x504b3c[_0x2038('0x7c')]+'('+_0x260039+')');let _0x158f47=_0x5e40d9[_0x2038('0xa8')](_0x2038('0xc3'));for(let _0x52e9d8 in _0x504b3c[_0x2038('0xc4')]){let _0x41363e=_0x504b3c[_0x2038('0xc4')][_0x52e9d8];let _0x553696=STYLE_MASTER[_0x41363e];let _0xe8e9de=$(_0x2038('0xc5'))[_0x2038('0x9d')]('style')[_0x2038('0x9d')](getStyleIconClass(_0x553696[_0x2038('0xc6')]))[_0x2038('0x8c')](_0x2038('0xc7'),getImgUrl('style_icon/'+_0x41363e+_0x2038('0xc8'))+';\x20width:35px;height:35px;\x20background-size:\x2035px\x20!important;')[_0x2038('0x8c')](_0x2038('0x9b'),_0x41363e);let _0x136432=$(_0x2038('0xab'))[_0x2038('0x8c')](_0x2038('0xc7'),'width:35px;height:35px;')[_0x2038('0x9d')](getStyleIconBgClass(_0x553696['Rarity']))[_0x2038('0xaa')](_0xe8e9de);_0x158f47['append'](_0x136432);}return _0x5e40d9;}var STYLE_ICON_BG_SIZE=_0x2038('0xc9');var STYLE_ICON_SIZE=_0x2038('0xca');function createStyleIcon(_0x108d55,_0x135648){let _0x5a934e=_0x108d55['Id'];let _0x4456c1=$(_0x2038('0xc5'))[_0x2038('0x9d')](_0x2038('0xc7'))[_0x2038('0x9d')](getStyleIconClass(_0x108d55[_0x2038('0xc6')]))[_0x2038('0x8c')]('style',getImgUrl(_0x2038('0xcb')+_0x5a934e+'.png')+';\x20'+STYLE_ICON_SIZE+_0x2038('0xcc')+STYLE_ICON_BG_SIZE)[_0x2038('0x8c')]('data-id',_0x5a934e);let _0x243723=$('<span>')[_0x2038('0x8c')](_0x2038('0xc7'),STYLE_ICON_SIZE)[_0x2038('0x9d')](getStyleIconBgClass(_0x108d55['Rarity']))['append'](_0x4456c1);let _0x1d1038=$('<div>')[_0x2038('0x9d')](_0x2038('0xcd'))[_0x2038('0xaa')](_0x243723);if(_0x135648[_0x2038('0xc0')]!=='-'){_0x1d1038[_0x2038('0xaa')]('<p\x20class=\x27pad0\x20damage-label\x27>ダメージ\x20'+_0x108d55[_0x2038('0xce')]+_0x2038('0xcf'))[_0x2038('0xaa')](_0x2038('0xd0')+_0x108d55[_0x2038('0xae')]+_0x2038('0xd1'));}return _0x1d1038;}function displaySkillHolders(_0x42a45d){$(_0x2038('0xd2'))[_0x2038('0xd3')]({'scrollTop':$(_0x2038('0x92'))[_0x2038('0xd4')]()[_0x2038('0xd5')]});var _0x13e16a=SKILL_MASTER[_0x42a45d];$('#SKILL_NAME')['html']('<h5\x20style=\x22padding:top:\x205px;\x22>'+_0x13e16a['Name']+'</h5>');$(_0x2038('0x93'))[_0x2038('0x88')](''+_0x13e16a['FlavorText']);$(_0x2038('0x87'))[_0x2038('0x88')]('');let _0xce30e3=[];for(key in _0x13e16a[_0x2038('0xc4')]){let _0x5a6b1a=_0x13e16a[_0x2038('0xc4')][key];let _0x2934f6=STYLE_MASTER[_0x5a6b1a];let _0x1fa264=CHAR_MASTER[_0x2934f6[_0x2038('0xd6')]];let _0x3f0d1e=culcSkillDamageWithStyleBase(_0x1fa264,_0x2934f6,_0x13e16a);_0x3f0d1e=Object[_0x2038('0xd7')](_0x3f0d1e,_0x2934f6);_0xce30e3[_0x2038('0x80')](_0x3f0d1e);}_0xce30e3[_0x2038('0xd8')]((_0x42f102,_0x55fdd4)=>{if(_0x42f102[_0x2038('0xce')]>_0x55fdd4[_0x2038('0xce')]){return-0x1;}return 0x1;});let _0x9dca37=[];let _0x3c6afa=[];for(key in _0x13e16a[_0x2038('0xc4')]){let _0x4e5305=STYLE_MASTER[_0x13e16a[_0x2038('0xc4')][key]];let _0x5f2de6=CHAR_MASTER[_0x4e5305[_0x2038('0xd6')]];for(key in _0x5f2de6[_0x2038('0xc4')]){let _0xa3e164=STYLE_MASTER[_0x5f2de6['Holders'][key]];if(_0x3c6afa[_0x2038('0xd9')](_0xa3e164['Id'])>-0x1){continue;}_0x3c6afa[_0x2038('0x80')](_0xa3e164['Id']);let _0x1fe6c9=culcSkillDamageWithStyleBase(_0x5f2de6,_0xa3e164,_0x13e16a);_0x1fe6c9=Object[_0x2038('0xd7')](_0x1fe6c9,_0xa3e164);_0x9dca37[_0x2038('0x80')](_0x1fe6c9);}}_0x9dca37['sort']((_0x35732c,_0x447eb1)=>{if(_0x35732c['culcDamage']>_0x447eb1[_0x2038('0xce')]){return-0x1;}return 0x1;});$(_0x2038('0xda'))[_0x2038('0x88')]('');for(key in _0x9dca37){var _0x5c0ca6=createSkillCard(_0x9dca37[key]);$(_0x2038('0xda'))[_0x2038('0xaa')](_0x5c0ca6);}for(key in _0xce30e3){var _0x5c0ca6=createSkillCard(_0xce30e3[key]);$(_0x2038('0x87'))[_0x2038('0xaa')](_0x5c0ca6);}}function createSkillCard(_0x1f6985){let _0x3e9cf2=[];for(let _0x4a5ed6 in _0x1f6985[_0x2038('0xdb')]){_0x3e9cf2['push'](_0x1f6985['StyleAbility'][_0x4a5ed6]);}var _0x2bafc3=_0x2038('0xdc');_0x2bafc3+='<div\x20class=\x22row\x20no-gutters\x22>';_0x2bafc3+=_0x2038('0xdd')+_0x1f6985['Rarity']+_0x2038('0xde');_0x2bafc3+='<div\x20style=\x22width:100%;height:100%;position:\x20absolute;background:\x20url(./img/style_cutin/'+_0x1f6985['Id']+_0x2038('0xdf');_0x2bafc3+='<div\x20class=\x22col-12\x20text-center\x22>'+_0x1f6985[_0x2038('0xae')]+_0x2038('0xe0')+_0x1f6985['AnotherName']+_0x2038('0xe1');_0x2bafc3+=_0x2038('0xe2')+_0x1f6985['culcDamage'][_0x2038('0xe3')]()+_0x2038('0xe4');_0x2bafc3+=_0x2038('0xe5')+_0x1f6985['dispValue'];if(_0x1f6985[_0x2038('0xe6')]>0x0){_0x2bafc3+=_0x2038('0xe7')+_0x1f6985['ability']+'%</div>';}_0x2bafc3+=_0x2038('0xd1');_0x2bafc3+=_0x2038('0xe8')+_0x3e9cf2[_0x2038('0x90')]('/')+_0x2038('0xd1');_0x2bafc3+=_0x2038('0xd1');_0x2bafc3+=_0x2038('0xd1');return _0x2bafc3;}function createSkillMasterList(_0x4b7e9d){for(let _0x3cf45d in _0x4b7e9d){if(_0x4b7e9d[_0x3cf45d][_0x2038('0xbd')]){_0x4b7e9d[_0x3cf45d][_0x2038('0xe9')]=_0x2038('0xea');}else if(_0x4b7e9d[_0x3cf45d][_0x2038('0xeb')]){_0x4b7e9d[_0x3cf45d][_0x2038('0xe9')]=_0x2038('0xec');}else{_0x4b7e9d[_0x3cf45d][_0x2038('0xe9')]='';}_0x4b7e9d[_0x3cf45d][_0x2038('0xed')]=_0x4b7e9d[_0x3cf45d][_0x2038('0xaf')]+_0x4b7e9d[_0x3cf45d][_0x2038('0xb0')];if(_0x4b7e9d[_0x3cf45d][_0x2038('0xc4')]!==undefined){SKILL_MASTER_LIST[_0x2038('0x80')](_0x4b7e9d[_0x3cf45d]);}}}function countSkill(_0x386482){let _0x2b54b2={};for(let _0x124ff7 in optionList){_0x2b54b2[optionList[_0x124ff7]]=[];}for(let _0x5db7b1 in _0x386482){let _0x1f47fe=_0x386482[_0x5db7b1];if(_0x1f47fe[_0x2038('0xc4')]!==undefined){_0x2b54b2[_0x2038('0xee')+_0x1f47fe[_0x2038('0x7d')]][_0x2038('0x80')](_0x1f47fe);_0x2b54b2[optionList[_0x1f47fe[_0x2038('0x7b')]]]['push'](_0x1f47fe);_0x2b54b2[optionList[_0x1f47fe[_0x2038('0xba')]]]['push'](_0x1f47fe);_0x2b54b2[optionList[_0x1f47fe[_0x2038('0xbb')]]][_0x2038('0x80')](_0x1f47fe);_0x2b54b2[optionList[_0x1f47fe[_0x2038('0xaf')]+_0x1f47fe[_0x2038('0xb0')]]][_0x2038('0x80')](_0x1f47fe);if(_0x1f47fe['CriticalTargets']!==''){let _0x3130a3=_0x1f47fe[_0x2038('0xef')]['split'](',');for(let _0x38820c of _0x3130a3){_0x2b54b2[optionList[_0x38820c]][_0x2038('0x80')](_0x1f47fe);}}_0x2b54b2[optionList[_0x1f47fe[_0x2038('0x7c')]]][_0x2038('0x80')](_0x1f47fe);if(_0x1f47fe[_0x2038('0xbd')]){_0x2b54b2[optionList['ファスト']][_0x2038('0x80')](_0x1f47fe);}if(_0x1f47fe[_0x2038('0xeb')]){_0x2b54b2[optionList[_0x2038('0xf0')]][_0x2038('0x80')](_0x1f47fe);}if(_0x1f47fe[_0x2038('0xb6')]!=''){_0x2b54b2[optionList[_0x1f47fe[_0x2038('0xb6')]]]['push'](_0x1f47fe);}if(_0x1f47fe[_0x2038('0xb9')]!=''){_0x2b54b2[optionList[_0x1f47fe[_0x2038('0xb9')]]][_0x2038('0x80')](_0x1f47fe);}let _0x5124a6=_0x1f47fe[_0x2038('0x7e')]?_0x2038('0x17'):_0x2038('0xf1');_0x2b54b2[_0x5124a6][_0x2038('0x80')](_0x1f47fe);let _0x29cbc7=_0x1f47fe[_0x2038('0xb4')];_0x29cbc7['split'](',')[_0x2038('0xf2')](function(_0x93290b){_0x2b54b2[optionList[_0x93290b]]['push'](_0x1f47fe);});}}for(let _0x4279ec in optionList){let _0x5db7b1=optionList[_0x4279ec];$(_0x2038('0xf3')+_0x5db7b1)[_0x2038('0xad')](('\x20\x20'+_0x2b54b2[_0x5db7b1]['length'])[_0x2038('0xf4')](-0x3));}}function sortSkillIryoku(_0x35ee35,_0x5c00d9=!![]){$(_0x2038('0x91'))['html']('');var _0x2cbf8e=_0x35ee35[_0x2038('0xf4')](0x0,_0x35ee35[_0x2038('0xf5')]);_0x2cbf8e['sort'](function(_0x533a8f,_0x50eae0){if(_0x533a8f[_0x2038('0xc0')]==='-'){return _0x5c00d9?0x1:-0x1;}else if(_0x533a8f[_0x2038('0xc0')]>_0x50eae0[_0x2038('0xc0')]){return _0x5c00d9?-0x1:0x1;}else if(_0x533a8f[_0x2038('0xc0')]<_0x50eae0[_0x2038('0xc0')]){return _0x5c00d9?0x1:-0x1;}else if(_0x533a8f[_0x2038('0x7d')]<_0x50eae0[_0x2038('0x7d')]){return _0x5c00d9?-0x1:0x1;}else if(_0x533a8f[_0x2038('0x7d')]>_0x50eae0[_0x2038('0x7d')]){return _0x5c00d9?0x1:-0x1;}else if(_0x533a8f[_0x2038('0xb4')]>_0x50eae0[_0x2038('0xb4')]){return _0x5c00d9?-0x1:0x1;}return 0x0;});for(let _0xcb8422 in _0x2cbf8e){$(_0x2038('0x91'))[_0x2038('0xaa')](skillLabelDiplay(_0x2cbf8e[_0xcb8422]));}$(_0x2038('0x91'))[_0x2038('0xf6')](0x12c);}function sortSkillBP(_0x163faf,_0x184e92=!![]){$(_0x2038('0x91'))[_0x2038('0x88')]('');var _0x4e629d=_0x163faf[_0x2038('0xf4')](0x0,_0x163faf[_0x2038('0xf5')]);_0x4e629d['sort'](function(_0x2d5485,_0x4eab61){if(_0x2d5485[_0x2038('0x7d')]>_0x4eab61['ConsumeBp']){return _0x184e92?-0x1:0x1;}else if(_0x2d5485[_0x2038('0x7d')]<_0x4eab61['ConsumeBp']){return _0x184e92?0x1:-0x1;}if(_0x4eab61[_0x2038('0xc0')]==='-'||_0x2d5485['SkillIryoku']>_0x4eab61[_0x2038('0xc0')]){return _0x184e92?-0x1:0x1;}else if(_0x2d5485[_0x2038('0xc0')]==='-'||_0x2d5485[_0x2038('0xc0')]<_0x4eab61[_0x2038('0xc0')]){return _0x184e92?0x1:-0x1;}if(_0x2d5485[_0x2038('0xc4')][_0x2038('0xf5')]>_0x4eab61[_0x2038('0xc4')][_0x2038('0xf5')]){return _0x184e92?-0x1:0x1;}});for(let _0x2050aa in _0x4e629d){$(_0x2038('0x91'))[_0x2038('0xaa')](skillLabelDiplay(_0x4e629d[_0x2050aa]));}$('#skillList')[_0x2038('0xf6')](0x12c);}$(function(){var _0x51af69=![];var _0x47a83f=$('#PageTopBtn');_0x47a83f['css']('bottom',_0x2038('0xf7'));var _0x51af69=![];$(window)['scroll'](function(){if($(this)['scrollTop']()>0x64){if(_0x51af69==![]){_0x51af69=!![];_0x47a83f[_0x2038('0xf8')]()[_0x2038('0xd3')]({'bottom':'-10px'},0xc8);}}else{if(_0x51af69){_0x51af69=![];_0x47a83f[_0x2038('0xf8')]()['animate']({'bottom':_0x2038('0xf7')},0xc8);}}});_0x47a83f[_0x2038('0x84')](function(){$(_0x2038('0xd2'))[_0x2038('0xd3')]({'scrollTop':$(_0x2038('0xf9'))[_0x2038('0xd4')]()[_0x2038('0xd5')]});return![];});});