var _0x6a0d=['all','database','goOffline','BattleType','PowerGrade','ConsumeBp','kan','push','.selectJoken','hide','._FilterLink','click','filterActive','table#skill_holder_table\x20tbody\x20*','remove','#skill_holder_list','html','concat','each','hasClass','attr','href','data-col','#skill_name_label','text','join','#skillList','#skill_damage_ranking','show','#SORT_IRYOKU','icon_btn_on','iryoku','desc','#SORT_BP','.skill_select','data-id','.sortButton','removeClass','addClass','icon_btn_off','asc','#BP_SORT_ASC','toggleClass','d-none','#BP_SORT_DESC','#IRYOKU_SORT_ASC','#IRYOKU_SORT_DESC','#SKILL_TEMPLATE','clone','.skillNameClass','append','<span>','icon_sm','Name','KakuseiSozai','find','Kakusei','\x20<span\x20class=\x22fukidashi\x22\x20style=\x22display:\x20inline-block\x22><span\x20class=\x22icon_','.iconArea','AttackAttributes','split','forEach','BadStatus','Buff','[HP回復]','DeBuff','AttackDistance','AttackArea','敵単体','AttackKansetsu','[間接]','Fast','[ファスト]','Delay','[ディレイ]','SkillIryoku','.iryokuArea','.holderStyleArea','Holders','<div>','style','Rarity','.png',';\x20width:35px;height:35px;\x20background-size:\x2035px\x20!important;','width:35px;height:35px;','70px\x20!important;','width:70px;height:70px;','\x20background-size:\x20','col-3\x20col-sm-2\x20text-center','<p\x20class=\x27pad0\x20damage-label\x27>ダメージ\x20','culcDamage','</p>','</div>','html,body','animate','#SKILL_NAME','offset','top','<h5\x20style=\x22padding:top:\x205px;\x22>','</h5>','#SKILL_TEXT','FlavorText','CharacterId','sort','indexOf','assign','<tr>','darkButton','border:initial;','<td>','text-center','<b>','toLocaleString','</b>','アビリティ倍率:','ability','culcKey','culcValue','\x22></button>','<td\x20colspan=2>','\x20<small>','AnotherName','</small></td>','style_icon/','width:80px','justify-content:\x20space-between;','<br>','StyleAbility','small','table#skill_holder_table\x20tbody','FastDelay','fast','delay','KakuseiSearch','CriticalTargets','ファスト','ディレイ','#count_','slideDown','length','#PageTopBtn','css','bottom','-200px','stop','skill_ken','skill_dken','skill_ono','skill_sken','skill_yari','skill_yumi','skill_kon','skill_tai','skill_ju','skill_tsue','skill_kin','skill_en','skill_zan','skill_totsu','skill_rei','skill_rai','skill_yo','skill_kan','skill_zentai','skill_mikata','skill_fast','skill_delay','skill_hi','skill_mizu','skill_kaze','skill_hikari','skill_yami','skill_sutan','skill_mahi','skill_sokushi','skill_doku','skill_sekika','skill_miryo','skill_nemuri','skill_konran','skill_kyosenshi','skill_deb_wan','skill_deb_tai','skill_deb_suba','skill_deb_chi','skill_deb_sei','skill_iryoku_d','skill_iryoku_c','skill_iryoku_s','skill_iryoku_ss','skill_iryoku_sss','skill_iryoku_none','skill_crit_fuyu','skill_crit_fushi','skill_crit_suise','skill_crit_shoku','skill_crit_mushi','skill_crit_hone','skill_crit_nin','skill_crit_jo','skill_crit_kaeru','skill_crit_kemo','skill_crit_fish','skill_crit_devil','black','blue','green','orange','purple','white','突属性','熱属性','毒付与','マヒ付与','暗闇付与','スタン付与','睡眠付与','混乱付与','魅了付与','腕力減少付与','体力減少付与','知力減少付与','全体攻撃','縦一列攻撃','横一列攻撃','味方単体対象','近接攻撃','遠距離攻撃','ファスト効果','ディレイ効果','技威力[E]','技威力[D]','技威力[C]','技威力[B]','技威力[SS]','技威力[SSS]','間接攻撃','直接攻撃','浮遊特効','不死特効','水棲特効','植物特効','虫特効','骨特効','岩石特効','女性特効','獣特効','火精特効','魚特効','悪魔特効','スタン','狂戦士','敵全体','敵縦一列','敵横一列','味方単体','SSS','カエル','skill_','skill_bp','Char','Skill','Style','Ability'];(function(_0x5f4e15,_0x287f82){var _0xb3af7a=function(_0x545a8a){while(--_0x545a8a){_0x5f4e15['push'](_0x5f4e15['shift']());}};_0xb3af7a(++_0x287f82);}(_0x6a0d,0x199));var _0x4b87=function(_0x242ecc,_0x528af0){_0x242ecc=_0x242ecc-0x0;var _0x1e1be8=_0x6a0d[_0x242ecc];return _0x1e1be8;};var SKILL_MASTER,STYLE_MASTER,ABILITY_MASTER,CHAR_MASTER;var skillTypeList={};var NOW_LIST;var optionList={'剣':_0x4b87('0x0'),'大剣':_0x4b87('0x1'),'斧':_0x4b87('0x2'),'小剣':_0x4b87('0x3'),'槍':_0x4b87('0x4'),'弓':_0x4b87('0x5'),'棍棒':_0x4b87('0x6'),'体術':_0x4b87('0x7'),'銃':_0x4b87('0x8'),'杖':_0x4b87('0x9'),'近':_0x4b87('0xa'),'遠':_0x4b87('0xb'),'斬':_0x4b87('0xc'),'突':_0x4b87('0xd'),'打':'skill_da','熱':'skill_netsu','冷':_0x4b87('0xe'),'雷':_0x4b87('0xf'),'陰':'skill_in','陽':_0x4b87('0x10'),'敵単体':'skill_tantai','敵縦一列':'skill_tate','敵横一列':'skill_yoko','直接':'skill_cyoku','間接':_0x4b87('0x11'),'敵全体':_0x4b87('0x12'),'自身':'skill_jishin','味方単体':_0x4b87('0x13'),'ファスト':_0x4b87('0x14'),'ディレイ':_0x4b87('0x15'),'火術':_0x4b87('0x16'),'水術':_0x4b87('0x17'),'風術':_0x4b87('0x18'),'土術':'skill_tsuchi','光術':_0x4b87('0x19'),'闇術':_0x4b87('0x1a'),'スタン':_0x4b87('0x1b'),'マヒ':_0x4b87('0x1c'),'即死':_0x4b87('0x1d'),'毒':_0x4b87('0x1e'),'石化':_0x4b87('0x1f'),'魅了':_0x4b87('0x20'),'眠り':_0x4b87('0x21'),'混乱':_0x4b87('0x22'),'狂戦士':_0x4b87('0x23'),'暗闇':'skill_kurayami','腕力':_0x4b87('0x24'),'体力':_0x4b87('0x25'),'器用さ':'skill_deb_kiyo','素早さ':_0x4b87('0x26'),'知力':_0x4b87('0x27'),'精神':_0x4b87('0x28'),'E':'skill_iryoku_e','D':_0x4b87('0x29'),'C':_0x4b87('0x2a'),'B':'skill_iryoku_b','A':'skill_iryoku_a','S':_0x4b87('0x2b'),'SS':_0x4b87('0x2c'),'SSS':_0x4b87('0x2d'),'-':_0x4b87('0x2e'),'浮遊':_0x4b87('0x2f'),'不死':_0x4b87('0x30'),'水棲':_0x4b87('0x31'),'植物':_0x4b87('0x32'),'虫':_0x4b87('0x33'),'骨':_0x4b87('0x34'),'岩石':'skill_crit_gan','人間':_0x4b87('0x35'),'女性':_0x4b87('0x36'),'カエル':_0x4b87('0x37'),'獣':_0x4b87('0x38'),'火精':'skill_crit_fire','魚':_0x4b87('0x39'),'悪魔':_0x4b87('0x3a')};let color=[_0x4b87('0x3b'),_0x4b87('0x3c'),_0x4b87('0x3d'),_0x4b87('0x3e'),_0x4b87('0x3f'),'red','yellow',_0x4b87('0x40')];let color2=['黒','青','緑','橙','紫','赤','黄','白'];var SKILL_NAME_LABEL={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':'斬属性','da':'打属性','totsu':_0x4b87('0x41'),'netsu':_0x4b87('0x42'),'rei':'冷属性','rai':'雷属性','in':'陰属性','you':'陽属性','doku':_0x4b87('0x43'),'mahi':_0x4b87('0x44'),'kurayami':_0x4b87('0x45'),'sutan':_0x4b87('0x46'),'nemuri':_0x4b87('0x47'),'sekika':'石化付与','konran':_0x4b87('0x48'),'miryo':_0x4b87('0x49'),'kyosenshi':'狂戦士付与','sokushi':'即死','deb_wan':_0x4b87('0x4a'),'deb_tai':_0x4b87('0x4b'),'deb_kiyo':'器用さ減少付与','deb_suba':'素早さ減少付与','deb_chi':_0x4b87('0x4c'),'deb_sei':'精神減少付与','zentai':_0x4b87('0x4d'),'tate':_0x4b87('0x4e'),'yoko':_0x4b87('0x4f'),'mikata':_0x4b87('0x50'),'kin':_0x4b87('0x51'),'en':_0x4b87('0x52'),'jishin':'自身が対象','fast':_0x4b87('0x53'),'delay':_0x4b87('0x54'),'iryoku_e':_0x4b87('0x55'),'iryoku_d':_0x4b87('0x56'),'iryoku_c':_0x4b87('0x57'),'iryoku_b':_0x4b87('0x58'),'iryoku_a':'技威力[A]','iryoku_s':'技威力[S]','iryoku_ss':_0x4b87('0x59'),'iryoku_sss':_0x4b87('0x5a'),'kan':_0x4b87('0x5b'),'cyoku':_0x4b87('0x5c'),'crit_fuyu':_0x4b87('0x5d'),'crit_fushi':_0x4b87('0x5e'),'crit_suise':_0x4b87('0x5f'),'crit_shoku':_0x4b87('0x60'),'crit_mushi':_0x4b87('0x61'),'crit_hone':_0x4b87('0x62'),'crit_gan':_0x4b87('0x63'),'crit_nin':'人間特効','crit_jo':_0x4b87('0x64'),'crit_kaeru':'カエル特効','crit_kemo':_0x4b87('0x65'),'crit_fire':_0x4b87('0x66'),'crit_fish':_0x4b87('0x67'),'crit_devil':_0x4b87('0x68')};var SKILL_NAME_SEARCH={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':'斬','da':'打','totsu':'突','netsu':'熱','rei':'冷','rai':'雷','in':'陰','yo':'陽','doku':'毒','mahi':'マヒ','kurayami':'暗闇','sutan':_0x4b87('0x69'),'nemuri':'眠り','sekika':'石化','konran':'混乱','miryo':'魅了','kyosenshi':_0x4b87('0x6a'),'sokushi':'即死','deb_wan':'腕力','deb_tai':'体力','deb_kiyo':'器用さ','deb_suba':'素早さ','deb_chi':'知力','deb_sei':'精神','zentai':_0x4b87('0x6b'),'tate':_0x4b87('0x6c'),'yoko':_0x4b87('0x6d'),'mikata':_0x4b87('0x6e'),'kin':'近','en':'遠','jishin':'自身','iryoku_e':'E','iryoku_d':'D','iryoku_c':'C','iryoku_b':'B','iryoku_a':'A','iryoku_s':'S','iryoku_ss':'SS','iryoku_sss':_0x4b87('0x6f'),'crit_fuyu':'浮遊','crit_fushi':'不死','crit_suise':'水棲','crit_shoku':'植物','crit_mushi':'虫','crit_hone':'骨','crit_gan':'岩石','crit_nin':'人間','crit_jo':'女性','crit_kaeru':_0x4b87('0x70'),'crit_kemo':'獣','crit_fire':'火精','crit_fish':'魚','crit_devil':'悪魔'};for(let i in color){let c=color[i];optionList[c+'1']=_0x4b87('0x71')+c+'1';optionList[c+'2']=_0x4b87('0x71')+c+'2';optionList[c+'3']=_0x4b87('0x71')+c+'3';SKILL_NAME_LABEL[c+'1']=color2[i]+'砂';SKILL_NAME_LABEL[c+'2']=color2[i]+'石';SKILL_NAME_LABEL[c+'3']=color2[i]+'宝石';}for(let i=0x1;i<=0x14;i++){optionList['bp'+i]=_0x4b87('0x72')+i;SKILL_NAME_SEARCH['bp'+i]=i;}for(let key in optionList){skillTypeList[optionList[key]]=[];}read();let SKILL_MASTER_LIST=[];async function read(){let _0x16cf86=readFile(_0x4b87('0x73'),function(_0x21f7fa){CHAR_MASTER=_0x21f7fa;});let _0x3a416d=readFile(_0x4b87('0x74'),function(_0x254f88){SKILL_MASTER=_0x254f88;createSkillMasterList(SKILL_MASTER);countSkill(SKILL_MASTER);});let _0x3ee913=readFile(_0x4b87('0x75'),function(_0x5cd5df){STYLE_MASTER=_0x5cd5df;});let _0x126df2=readFile(_0x4b87('0x76'),function(_0x108f29){ABILITY_MASTER=_0x108f29;});await Promise[_0x4b87('0x77')]([_0x16cf86,_0x3a416d,_0x3ee913,_0x126df2]);firebase[_0x4b87('0x78')]()[_0x4b87('0x79')]();firebase[_0x4b87('0x78')](appUsers)[_0x4b87('0x79')]();}function filterList(_0x2647f5,_0x5052a7,_0x1eacaf){let _0x1e5a24=[_0x4b87('0x7a'),_0x4b87('0x7b'),_0x4b87('0x7c')]['indexOf'](_0x1eacaf)>-0x1?!![]:![];if(_0x1eacaf==='AttackKansetsu'){for(let _0x49d896 in _0x5052a7){_0x5052a7[_0x49d896]=_0x5052a7[_0x49d896]===_0x4b87('0x7d')?!![]:![];}_0x1e5a24=!![];}let _0x8ac210=[];for(let _0x2d20ce in _0x2647f5){for(let _0x4d8519 of _0x5052a7){if(_0x1e5a24&&_0x2647f5[_0x2d20ce][_0x1eacaf]===_0x4d8519){_0x8ac210[_0x4b87('0x7e')](_0x2647f5[_0x2d20ce]);}else if(!_0x1e5a24&&_0x2647f5[_0x2d20ce][_0x1eacaf]['indexOf'](_0x4d8519)>-0x1){_0x8ac210[_0x4b87('0x7e')](_0x2647f5[_0x2d20ce]);}}}return _0x8ac210;}$(document)['ready'](function(_0x31c99f){_0x31c99f(_0x4b87('0x7f'))[_0x4b87('0x80')]();_0x31c99f(_0x4b87('0x81'))[_0x4b87('0x82')](function(){_0x31c99f(_0x4b87('0x7f'))[_0x4b87('0x80')]();_0x31c99f(this)['toggleClass'](_0x4b87('0x83'));_0x31c99f(_0x4b87('0x84'))[_0x4b87('0x85')]();_0x31c99f(_0x4b87('0x86'))[_0x4b87('0x87')]('');let _0x14ad0b=SKILL_MASTER_LIST[_0x4b87('0x88')]();let _0x3f913c={};let _0x2ef67d=[];let _0x677316=![];_0x31c99f('._FilterLink')[_0x4b87('0x89')](function(){if(_0x31c99f(this)[_0x4b87('0x8a')](_0x4b87('0x83'))){_0x677316=!![];let _0x29ff78=_0x31c99f(this)[_0x4b87('0x8b')](_0x4b87('0x8c'))['substr'](0x1);let _0x30f23c=_0x31c99f(this)[_0x4b87('0x8b')](_0x4b87('0x8c'))['substr'](0x7);_0x2ef67d[_0x4b87('0x7e')](SKILL_NAME_LABEL[_0x30f23c]);let _0x23f132=_0x31c99f(this)[_0x4b87('0x8b')](_0x4b87('0x8d'));if(_0x3f913c[_0x23f132]===undefined){_0x3f913c[_0x23f132]=[];}let _0x36977a=SKILL_NAME_SEARCH[_0x30f23c]!==undefined?SKILL_NAME_SEARCH[_0x30f23c]:_0x30f23c;_0x3f913c[_0x23f132][_0x4b87('0x7e')](_0x36977a);}});for(let _0xbffd7e in _0x3f913c){_0x14ad0b=filterList(_0x14ad0b,_0x3f913c[_0xbffd7e],_0xbffd7e);}countSkill(_0x14ad0b);NOW_LIST=_0x14ad0b;_0x31c99f(_0x4b87('0x8e'))[_0x4b87('0x8f')](_0x2ef67d[_0x4b87('0x90')]('&'));_0x31c99f(_0x4b87('0x91'))[_0x4b87('0x80')]();_0x31c99f(_0x4b87('0x91'))[_0x4b87('0x87')]('');_0x31c99f(_0x4b87('0x92'))[_0x4b87('0x87')]('');_0x31c99f('#SKILL_NAME')[_0x4b87('0x87')]('');_0x31c99f('#SKILL_TEXT')[_0x4b87('0x87')]('');if(_0x677316){_0x31c99f('.selectJoken')[_0x4b87('0x93')]();var _0xc88c15='bp';var _0x416401=!![];if(_0x31c99f(_0x4b87('0x94'))[_0x4b87('0x8a')](_0x4b87('0x95'))){_0xc88c15=_0x4b87('0x96');_0x416401=_0x31c99f(_0x4b87('0x94'))[_0x4b87('0x8a')](_0x4b87('0x97'));}else{_0x416401=_0x31c99f(_0x4b87('0x98'))[_0x4b87('0x8a')]('desc');}if(_0xc88c15==='bp'){sortSkillBP(_0x14ad0b,_0x416401);}else{sortSkillIryoku(_0x14ad0b,_0x416401);}}});_0x31c99f(document)['on'](_0x4b87('0x82'),_0x4b87('0x99'),function(){var _0x2ceeeb=_0x31c99f(this)[_0x4b87('0x8b')](_0x4b87('0x9a'));displaySkillHolders(_0x2ceeeb);});_0x31c99f('.sortButton')[_0x4b87('0x82')](function(){_0x31c99f(_0x4b87('0x9b'))[_0x4b87('0x9c')](_0x4b87('0x95'))[_0x4b87('0x9d')]('icon_btn_off');_0x31c99f(this)[_0x4b87('0x9c')](_0x4b87('0x9e'))[_0x4b87('0x9d')]('icon_btn_on');var _0x3efec5=![];if(_0x31c99f(this)[_0x4b87('0x8a')](_0x4b87('0x9f'))){_0x3efec5=!![];_0x31c99f(this)['removeClass'](_0x4b87('0x9f'))[_0x4b87('0x9d')](_0x4b87('0x97'));}else{_0x31c99f(this)[_0x4b87('0x9c')](_0x4b87('0x97'))['addClass'](_0x4b87('0x9f'));}var _0x3f8286=_0x31c99f(this)[_0x4b87('0x8b')](_0x4b87('0x9a'));if(_0x3f8286==='bp'){_0x31c99f(_0x4b87('0xa0'))[_0x4b87('0xa1')](_0x4b87('0xa2'));_0x31c99f(_0x4b87('0xa3'))[_0x4b87('0xa1')](_0x4b87('0xa2'));sortSkillBP(NOW_LIST,_0x3efec5);}else{_0x31c99f(_0x4b87('0xa4'))['toggleClass'](_0x4b87('0xa2'));_0x31c99f(_0x4b87('0xa5'))[_0x4b87('0xa1')](_0x4b87('0xa2'));sortSkillIryoku(NOW_LIST,_0x3efec5);}});});function skillLabelDiplay(_0x37ad35){let _0x1f96fc=$(_0x4b87('0xa6'))[_0x4b87('0xa7')]()[_0x4b87('0x8b')]('id','')['attr']('data-id',_0x37ad35['Id'])[_0x4b87('0x9c')](_0x4b87('0xa2'));_0x1f96fc['find'](_0x4b87('0xa8'))[_0x4b87('0xa9')]($(_0x4b87('0xaa'))[_0x4b87('0x9d')](_0x4b87('0xab'))[_0x4b87('0x9d')](ICON_LIST[_0x37ad35[_0x4b87('0x7a')]])[_0x4b87('0x8f')]('\u3000'))[_0x4b87('0xa9')](_0x37ad35[_0x4b87('0xac')]);let _0x1017b3=KAKUSEI_COLOR[_0x37ad35[_0x4b87('0xad')]]+KAKUSEI_ICON[_0x37ad35['Kakusei']];_0x1f96fc[_0x4b87('0xae')]('.skillKakuseiArea')[_0x4b87('0xa9')]('覚醒:'+_0x37ad35[_0x4b87('0xaf')])[_0x4b87('0xa9')](_0x4b87('0xb0')+_0x1017b3+'\x22\x20style=\x22width:25px;height:25px;\x20display:\x20inline-block;background-size:\x20contain;\x22>\u3000</span></span>');let _0xeef457=_0x1f96fc[_0x4b87('0xae')](_0x4b87('0xb1'));_0x37ad35[_0x4b87('0xb2')][_0x4b87('0xb3')](',')[_0x4b87('0xb4')](function(_0xb460c8){_0xeef457[_0x4b87('0xa9')]($('<span>')[_0x4b87('0x9d')](_0x4b87('0xab'))['addClass'](ICON_LIST[_0xb460c8])[_0x4b87('0x8f')]('\u3000'));});if(_0x37ad35[_0x4b87('0xb5')]!=''){_0xeef457[_0x4b87('0xa9')]($('<span>')[_0x4b87('0x9d')]('')[_0x4b87('0x9d')](_0x4b87('0xab'))[_0x4b87('0x9d')](ICON_LIST[_0x37ad35['BadStatus']])['text']('\u3000'));}if(_0x37ad35[_0x4b87('0xb6')]!=''){if(_0x37ad35[_0x4b87('0xb6')]==='HP'){_0xeef457[_0x4b87('0xa9')](_0x4b87('0xb7'));}else{let _0x556985=$(_0x4b87('0xaa'))['addClass'](_0x4b87('0xab'))[_0x4b87('0x9d')](ICON_LIST[_0x37ad35[_0x4b87('0xb6')]+'上昇'])[_0x4b87('0x8f')]('\u3000');_0xeef457[_0x4b87('0xa9')](_0x556985);}}if(_0x37ad35['DeBuff']!=''){_0xeef457['append']($(_0x4b87('0xaa'))[_0x4b87('0x9d')](_0x4b87('0xab'))['addClass'](ICON_LIST[_0x37ad35[_0x4b87('0xb8')]+'低下'])[_0x4b87('0x8f')]('\u3000'));}if(_0x37ad35[_0x4b87('0xb9')]!=='近'&&_0x37ad35[_0x4b87('0xba')]!=='敵全体'){_0xeef457[_0x4b87('0xa9')]('['+_0x37ad35['AttackDistance']+']');}if(_0x37ad35['AttackArea']!==_0x4b87('0xbb')){_0xeef457[_0x4b87('0xa9')]('['+AREA_SHORT[_0x37ad35[_0x4b87('0xba')]]+']');}if(_0x37ad35[_0x4b87('0xbc')]){_0xeef457['append'](_0x4b87('0xbd'));}if(_0x37ad35[_0x4b87('0xbe')]){_0xeef457[_0x4b87('0xa9')](_0x4b87('0xbf'));}if(_0x37ad35[_0x4b87('0xc0')]){_0xeef457[_0x4b87('0xa9')](_0x4b87('0xc1'));}let _0x2fe0cc=_0x37ad35['SkillIryoku']===0x0?IRYOKU_LIST[_0x37ad35[_0x4b87('0x7b')]]:_0x37ad35[_0x4b87('0xc2')];_0x1f96fc['find'](_0x4b87('0xc3'))[_0x4b87('0xa9')]('BP:'+_0x37ad35[_0x4b87('0x7c')])[_0x4b87('0xa9')]('\x20威力:'+_0x37ad35[_0x4b87('0x7b')]+'('+_0x2fe0cc+')');let _0x1401da=_0x1f96fc[_0x4b87('0xae')](_0x4b87('0xc4'));for(let _0x4c1a05 in _0x37ad35[_0x4b87('0xc5')]){let _0x3cda25=_0x37ad35[_0x4b87('0xc5')][_0x4c1a05];let _0x85206c=STYLE_MASTER[_0x3cda25];let _0x28b31a=$(_0x4b87('0xc6'))[_0x4b87('0x9d')](_0x4b87('0xc7'))[_0x4b87('0x9d')](getStyleIconClass(_0x85206c[_0x4b87('0xc8')]))[_0x4b87('0x8b')](_0x4b87('0xc7'),getImgUrl('style_icon/'+_0x3cda25+_0x4b87('0xc9'))+_0x4b87('0xca'))['attr'](_0x4b87('0x9a'),_0x3cda25);let _0x69287e=$('<span>')[_0x4b87('0x8b')]('style',_0x4b87('0xcb'))[_0x4b87('0x9d')](getStyleIconBgClass(_0x85206c[_0x4b87('0xc8')]))[_0x4b87('0xa9')](_0x28b31a);_0x1401da[_0x4b87('0xa9')](_0x69287e);}return _0x1f96fc;}var STYLE_ICON_BG_SIZE=_0x4b87('0xcc');var STYLE_ICON_SIZE=_0x4b87('0xcd');function createStyleIcon(_0x5c8195,_0x3053e3){let _0x297101=_0x5c8195['Id'];let _0x3d1739=$('<div>')[_0x4b87('0x9d')](_0x4b87('0xc7'))[_0x4b87('0x9d')](getStyleIconClass(_0x5c8195[_0x4b87('0xc8')]))['attr'](_0x4b87('0xc7'),getImgUrl('style_icon/'+_0x297101+'.png')+';\x20'+STYLE_ICON_SIZE+_0x4b87('0xce')+STYLE_ICON_BG_SIZE)[_0x4b87('0x8b')](_0x4b87('0x9a'),_0x297101);let _0x2c0672=$(_0x4b87('0xaa'))[_0x4b87('0x8b')](_0x4b87('0xc7'),STYLE_ICON_SIZE)[_0x4b87('0x9d')](getStyleIconBgClass(_0x5c8195[_0x4b87('0xc8')]))[_0x4b87('0xa9')](_0x3d1739);let _0xb55730=$('<div>')['addClass'](_0x4b87('0xcf'))[_0x4b87('0xa9')](_0x2c0672);if(_0x3053e3[_0x4b87('0xc2')]!=='-'){_0xb55730[_0x4b87('0xa9')](_0x4b87('0xd0')+_0x5c8195[_0x4b87('0xd1')]+_0x4b87('0xd2'))[_0x4b87('0xa9')]('<div\x20class=\x27style-label\x27>'+_0x5c8195[_0x4b87('0xac')]+_0x4b87('0xd3'));}return _0xb55730;}function displaySkillHolders(_0x12c027){$(_0x4b87('0xd4'))[_0x4b87('0xd5')]({'scrollTop':$(_0x4b87('0xd6'))[_0x4b87('0xd7')]()[_0x4b87('0xd8')]});var _0x1d5b99=SKILL_MASTER[_0x12c027];$(_0x4b87('0xd6'))['html'](_0x4b87('0xd9')+_0x1d5b99[_0x4b87('0xac')]+_0x4b87('0xda'));$(_0x4b87('0xdb'))[_0x4b87('0x87')](''+_0x1d5b99[_0x4b87('0xdc')]);$('table#skill_holder_table\x20tbody\x20*')[_0x4b87('0x85')]();$(_0x4b87('0x86'))[_0x4b87('0x87')]('');let _0x81c5e9=[];for(key in _0x1d5b99['Holders']){let _0x3d4e7b=_0x1d5b99[_0x4b87('0xc5')][key];let _0x15aade=STYLE_MASTER[_0x3d4e7b];let _0x294c87=CHAR_MASTER[_0x15aade[_0x4b87('0xdd')]];let _0x51113d=culcSkillDamageWithStyleBase(_0x294c87,_0x15aade,_0x1d5b99);_0x51113d=Object['assign'](_0x51113d,_0x15aade);_0x81c5e9[_0x4b87('0x7e')](_0x51113d);}_0x81c5e9[_0x4b87('0xde')]((_0x43d7eb,_0xc340bc)=>{if(_0x43d7eb[_0x4b87('0xd1')]>_0xc340bc['culcDamage']){return-0x1;}return 0x1;});for(key in _0x81c5e9){let _0x17f290=_0x81c5e9[key];let _0x4e1aee=createStyleIcon(_0x17f290,_0x1d5b99);$(_0x4b87('0x86'))[_0x4b87('0xa9')](_0x4e1aee);}let _0x11a2e8=[];let _0x48aa2c=[];for(key in _0x1d5b99[_0x4b87('0xc5')]){let _0x11557c=STYLE_MASTER[_0x1d5b99[_0x4b87('0xc5')][key]];let _0x294c87=CHAR_MASTER[_0x11557c[_0x4b87('0xdd')]];for(key in _0x294c87[_0x4b87('0xc5')]){let _0x157937=STYLE_MASTER[_0x294c87[_0x4b87('0xc5')][key]];if(_0x48aa2c[_0x4b87('0xdf')](_0x157937['Id'])>-0x1){continue;}_0x48aa2c[_0x4b87('0x7e')](_0x157937['Id']);let _0x51113d=culcSkillDamageWithStyleBase(_0x294c87,_0x157937,_0x1d5b99);_0x51113d=Object[_0x4b87('0xe0')](_0x51113d,_0x157937);_0x11a2e8[_0x4b87('0x7e')](_0x51113d);}}_0x11a2e8[_0x4b87('0xde')]((_0x23741b,_0x352741)=>{if(_0x23741b[_0x4b87('0xd1')]>_0x352741[_0x4b87('0xd1')]){return-0x1;}return 0x1;});$(_0x4b87('0x92'))[_0x4b87('0x87')]('');for(key in _0x11a2e8){let _0x21aef2=_0x11a2e8[key];let _0x4e1aee=createStyleIcon(_0x21aef2,_0x1d5b99);$('#skill_damage_ranking')[_0x4b87('0xa9')](_0x4e1aee);}for(key in _0x81c5e9){let _0x16d368=_0x81c5e9[key];let _0x3d4e7b=_0x16d368['Id'];let _0xb3e691=getStyleBgColor(_0x16d368[_0x4b87('0xc8')]);let _0x22c16a=$(_0x4b87('0xe1'))['addClass'](_0xb3e691)[_0x4b87('0x9d')](_0x4b87('0xe2'))[_0x4b87('0x8b')](_0x4b87('0xc7'),_0x4b87('0xe3'));let _0x141cec=$(_0x4b87('0xe4'))[_0x4b87('0x9d')](_0x4b87('0xe5'));if(_0x1d5b99[_0x4b87('0xc2')]!=='-'){_0x141cec[_0x4b87('0xa9')](_0x4b87('0xe6')+_0x16d368[_0x4b87('0xd1')][_0x4b87('0xe7')]()+_0x4b87('0xe8'));let _0x55eccf='<button\x20class=\x22icon_info\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22top\x22\x20title=\x22'+_0x4b87('0xe9')+_0x16d368[_0x4b87('0xea')]+'%\x20'+_0x16d368[_0x4b87('0xeb')]+':'+_0x16d368[_0x4b87('0xec')]+_0x4b87('0xed');_0x141cec[_0x4b87('0xa9')](_0x55eccf);}_0x22c16a[_0x4b87('0xa9')](_0x141cec);_0x22c16a['append'](_0x4b87('0xee')+_0x16d368[_0x4b87('0xac')]+_0x4b87('0xef')+_0x16d368[_0x4b87('0xf0')]+_0x4b87('0xf1'));let _0x2153ef=$('<tr>')[_0x4b87('0x9d')](_0xb3e691);let _0x2d057d=$(_0x4b87('0xe4'))[_0x4b87('0x9d')](_0x4b87('0xe5'));let _0x1c3102=$(_0x4b87('0xc6'))[_0x4b87('0x9d')](_0x4b87('0xc7'))['addClass'](getStyleIconClass(_0x16d368[_0x4b87('0xc8')]))[_0x4b87('0x8b')](_0x4b87('0xc7'),getImgUrl(_0x4b87('0xf2')+_0x3d4e7b+_0x4b87('0xc9')))[_0x4b87('0x8b')](_0x4b87('0x9a'),_0x3d4e7b);let _0x4034ec=$(_0x4b87('0xaa'))[_0x4b87('0x9d')](getStyleIconBgClass(_0x16d368[_0x4b87('0xc8')]))[_0x4b87('0x8b')](_0x4b87('0xc7'),_0x4b87('0xf3'))[_0x4b87('0x8b')](_0x4b87('0xc7'),_0x4b87('0xf4'))[_0x4b87('0xa9')](_0x1c3102);_0x2d057d[_0x4b87('0xa9')](_0x4034ec);let _0x4e34f9=$(_0x4b87('0xe4'))[_0x4b87('0x9d')]('small');_0x4e34f9[_0x4b87('0xa9')](_0x16d368[_0x4b87('0x74')]['join'](_0x4b87('0xf5')));let _0x3259c3=[];for(let _0x5e2dd5 in _0x16d368['StyleAbility']){_0x3259c3[_0x4b87('0x7e')](_0x16d368[_0x4b87('0xf6')][_0x5e2dd5]);}let _0x36dcd5=$('<td>')['addClass'](_0x4b87('0xf7'));_0x36dcd5[_0x4b87('0xa9')](_0x3259c3[_0x4b87('0x90')](_0x4b87('0xf5')));_0x2153ef[_0x4b87('0xa9')](_0x2d057d);_0x2153ef[_0x4b87('0xa9')](_0x4e34f9);_0x2153ef[_0x4b87('0xa9')](_0x36dcd5);$(_0x4b87('0xf8'))[_0x4b87('0xa9')](_0x22c16a)['append'](_0x2153ef);}$('[data-toggle=\x22tooltip\x22]')['tooltip']();}function createSkillMasterList(_0x216923){for(let _0x4390e0 in _0x216923){if(_0x216923[_0x4390e0][_0x4b87('0xbe')]){_0x216923[_0x4390e0][_0x4b87('0xf9')]=_0x4b87('0xfa');}else if(_0x216923[_0x4390e0]['Delay']){_0x216923[_0x4390e0][_0x4b87('0xf9')]=_0x4b87('0xfb');}else{_0x216923[_0x4390e0][_0x4b87('0xf9')]='';}_0x216923[_0x4390e0][_0x4b87('0xfc')]=_0x216923[_0x4390e0]['KakuseiSozai']+_0x216923[_0x4390e0][_0x4b87('0xaf')];if(_0x216923[_0x4390e0][_0x4b87('0xc5')]!==undefined){SKILL_MASTER_LIST[_0x4b87('0x7e')](_0x216923[_0x4390e0]);}}}function countSkill(_0x4fc6d7){let _0x152d4d={};for(let _0x59c428 in optionList){_0x152d4d[optionList[_0x59c428]]=[];}for(let _0x41c2da in _0x4fc6d7){let _0x594216=_0x4fc6d7[_0x41c2da];if(_0x594216[_0x4b87('0xc5')]!==undefined){_0x152d4d['skill_bp'+_0x594216['ConsumeBp']][_0x4b87('0x7e')](_0x594216);_0x152d4d[optionList[_0x594216[_0x4b87('0x7a')]]][_0x4b87('0x7e')](_0x594216);_0x152d4d[optionList[_0x594216['AttackArea']]][_0x4b87('0x7e')](_0x594216);_0x152d4d[optionList[_0x594216[_0x4b87('0xb9')]]][_0x4b87('0x7e')](_0x594216);_0x152d4d[optionList[_0x594216[_0x4b87('0xad')]+_0x594216['Kakusei']]][_0x4b87('0x7e')](_0x594216);if(_0x594216[_0x4b87('0xfd')]!==''){let _0x59a9aa=_0x594216[_0x4b87('0xfd')][_0x4b87('0xb3')](',');for(let _0x42fbd1 of _0x59a9aa){_0x152d4d[optionList[_0x42fbd1]][_0x4b87('0x7e')](_0x594216);}}_0x152d4d[optionList[_0x594216[_0x4b87('0x7b')]]]['push'](_0x594216);if(_0x594216[_0x4b87('0xbe')]){_0x152d4d[optionList[_0x4b87('0xfe')]]['push'](_0x594216);}if(_0x594216[_0x4b87('0xc0')]){_0x152d4d[optionList[_0x4b87('0xff')]][_0x4b87('0x7e')](_0x594216);}if(_0x594216[_0x4b87('0xb5')]!=''){_0x152d4d[optionList[_0x594216[_0x4b87('0xb5')]]]['push'](_0x594216);}if(_0x594216[_0x4b87('0xb8')]!=''){_0x152d4d[optionList[_0x594216[_0x4b87('0xb8')]]][_0x4b87('0x7e')](_0x594216);}let _0x3f2d0a=_0x594216['AttackKansetsu']?_0x4b87('0x11'):'skill_cyoku';_0x152d4d[_0x3f2d0a][_0x4b87('0x7e')](_0x594216);let _0x2a31dd=_0x594216[_0x4b87('0xb2')];_0x2a31dd['split'](',')[_0x4b87('0xb4')](function(_0x526b22){_0x152d4d[optionList[_0x526b22]]['push'](_0x594216);});}}for(let _0x3cbd1c in optionList){let _0x41c2da=optionList[_0x3cbd1c];$(_0x4b87('0x100')+_0x41c2da)[_0x4b87('0x8f')](('\x20\x20'+_0x152d4d[_0x41c2da]['length'])['slice'](-0x3));}}function sortSkillIryoku(_0x367580,_0x3cb3c1=!![]){$(_0x4b87('0x91'))[_0x4b87('0x87')]('');_0x367580['sort'](function(_0x2d81ab,_0x4364d1){if(_0x2d81ab[_0x4b87('0xc2')]==='-'){return _0x3cb3c1?0x1:-0x1;}else if(_0x2d81ab[_0x4b87('0xc2')]>_0x4364d1[_0x4b87('0xc2')]){return _0x3cb3c1?-0x1:0x1;}else if(_0x2d81ab[_0x4b87('0xc2')]<_0x4364d1[_0x4b87('0xc2')]){return _0x3cb3c1?0x1:-0x1;}else if(_0x2d81ab['ConsumeBp']<_0x4364d1[_0x4b87('0x7c')]){return _0x3cb3c1?-0x1:0x1;}else if(_0x2d81ab[_0x4b87('0x7c')]>_0x4364d1[_0x4b87('0x7c')]){return _0x3cb3c1?0x1:-0x1;}else if(_0x2d81ab[_0x4b87('0xb2')]>_0x4364d1['AttackAttributes']){return _0x3cb3c1?-0x1:0x1;}return 0x0;});for(let _0x32771b in _0x367580){$(_0x4b87('0x91'))[_0x4b87('0xa9')](skillLabelDiplay(_0x367580[_0x32771b]));}$(_0x4b87('0x91'))[_0x4b87('0x101')](0x12c);}function sortSkillBP(_0x4d689d,_0x1077f0=!![]){$(_0x4b87('0x91'))[_0x4b87('0x87')]('');_0x4d689d['sort']((_0x3e5ede,_0x5e241f)=>{if(_0x3e5ede[_0x4b87('0x7c')]>_0x5e241f[_0x4b87('0x7c')]){return _0x1077f0?-0x1:0x1;}else if(_0x3e5ede[_0x4b87('0x7c')]<_0x5e241f['ConsumeBp']){return _0x1077f0?0x1:-0x1;}if(_0x5e241f[_0x4b87('0xc2')]==='-'||_0x3e5ede['SkillIryoku']>_0x5e241f['SkillIryoku']){return _0x1077f0?-0x1:0x1;}else if(_0x3e5ede[_0x4b87('0xc2')]==='-'||_0x3e5ede[_0x4b87('0xc2')]<_0x5e241f[_0x4b87('0xc2')]){return _0x1077f0?0x1:-0x1;}if(_0x3e5ede[_0x4b87('0xc5')][_0x4b87('0x102')]>_0x5e241f[_0x4b87('0xc5')]['length']){return _0x1077f0?-0x1:0x1;}});for(let _0x49234e in _0x4d689d){$(_0x4b87('0x91'))[_0x4b87('0xa9')](skillLabelDiplay(_0x4d689d[_0x49234e]));}$(_0x4b87('0x91'))['slideDown'](0x12c);}$(function(){var _0x1b23aa=![];var _0x4f4bba=$(_0x4b87('0x103'));_0x4f4bba[_0x4b87('0x104')](_0x4b87('0x105'),_0x4b87('0x106'));var _0x1b23aa=![];$(window)['scroll'](function(){if($(this)['scrollTop']()>0x64){if(_0x1b23aa==![]){_0x1b23aa=!![];_0x4f4bba[_0x4b87('0x107')]()[_0x4b87('0xd5')]({'bottom':'-10px'},0xc8);}}else{if(_0x1b23aa){_0x1b23aa=![];_0x4f4bba[_0x4b87('0x107')]()['animate']({'bottom':_0x4b87('0x106')},0xc8);}}});_0x4f4bba[_0x4b87('0x82')](function(){$('html,body')['animate']({'scrollTop':$('#weponLabel')[_0x4b87('0xd7')]()[_0x4b87('0xd8')]});return![];});});
