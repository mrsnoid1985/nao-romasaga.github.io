var _0xb3b1=['ファスト効果','ディレイ効果','技威力[E]','技威力[D]','技威力[C]','技威力[A]','技威力[SSS]','直接攻撃','不死特効','水棲特効','植物特効','骨特効','岩石特効','人間特効','女性特効','カエル特効','獣特効','火精特効','魚特効','スタン','器用さ','素早さ','敵全体','敵縦一列','敵横一列','味方単体','skill_','skill_bp','Char','Skill','Style','Ability','all','database','goOffline','BattleType','PowerGrade','ConsumeBp','indexOf','AttackKansetsu','kan','push','ready','.selectJoken','hide','._FilterLink','toggleClass','filterActive','table#skill_holder_table\x20tbody\x20*','remove','html','concat','each','hasClass','href','substr','attr','data-col','#skill_name_label','join','#skillList','#skill_damage_ranking','#SKILL_TEXT','show','sort','SkillIryoku','Holders','length','slideDown','.skill_select','data-id','#SKILL_TEMPLATE','clone','d-none','find','.skillNameClass','append','<span>','addClass','icon_sm','text','KakuseiSozai','.skillKakuseiArea','Kakusei','\x20<span\x20class=\x22fukidashi\x22\x20style=\x22display:\x20inline-block\x22><span\x20class=\x22icon_','.iconArea','AttackAttributes','split','forEach','BadStatus','Buff','DeBuff','AttackArea','敵単体','[間接]','Fast','Delay','[ディレイ]','.iryokuArea','BP:','\x20威力:','<div>','Rarity','style','style_icon/','.png',';\x20width:35px;height:35px;\x20background-size:\x2035px\x20!important;','width:35px;height:35px;','70px\x20!important;','width:70px;height:70px;','\x20background-size:\x20','col-3\x20col-sm-2\x20text-center','<p\x20class=\x27pad0\x20damage-label\x27>ダメージ\x20','culcDamage','</p>','<div\x20class=\x27style-label\x27>','Name','</div>','html,body','animate','#SKILL_NAME','top','<h5\x20style=\x22padding:top:\x205px;\x22>','assign','#skill_holder_list','CharacterId','<tr>','darkButton','border:initial;','<td>','text-center','<b>','toLocaleString','</b>','<button\x20class=\x22icon_info\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22top\x22\x20title=\x22','アビリティ倍率:','ability','\x22></button>','<td\x20colspan=2>','\x20<small>','AnotherName','width:80px','justify-content:\x20space-between;','small','<br>','StyleAbility','tooltip','FastDelay','fast','delay','KakuseiSearch','CriticalTargets','ファスト','#count_','slice','-200px','scroll','scrollTop','stop','-10px','click','#weponLabel','offset','skill_ken','skill_ono','skill_sken','skill_yari','skill_kon','skill_en','skill_zan','skill_totsu','skill_da','skill_netsu','skill_rei','skill_in','skill_yo','skill_tantai','skill_tate','skill_yoko','skill_cyoku','skill_kan','skill_jishin','skill_mikata','skill_fast','skill_delay','skill_hi','skill_tsuchi','skill_yami','skill_sokushi','skill_doku','skill_sekika','skill_miryo','skill_nemuri','skill_konran','skill_kyosenshi','skill_deb_wan','skill_deb_kiyo','skill_deb_suba','skill_deb_sei','skill_iryoku_d','skill_iryoku_c','skill_iryoku_b','skill_iryoku_s','skill_iryoku_ss','skill_iryoku_sss','skill_crit_fuyu','skill_crit_suise','skill_crit_shoku','skill_crit_mushi','skill_crit_hone','skill_crit_gan','skill_crit_jo','skill_crit_kaeru','skill_crit_kemo','skill_crit_fire','skill_crit_fish','green','orange','purple','red','yellow','斬属性','打属性','冷属性','雷属性','陰属性','陽属性','毒付与','暗闇付与','スタン付与','混乱付与','魅了付与','腕力減少付与','体力減少付与','器用さ減少付与','素早さ減少付与','知力減少付与','精神減少付与','全体攻撃','縦一列攻撃','横一列攻撃','味方単体対象','近接攻撃','遠距離攻撃','自身が対象'];(function(_0x2e872d,_0x476638){var _0x35dca8=function(_0xc6f9e2){while(--_0xc6f9e2){_0x2e872d['push'](_0x2e872d['shift']());}};_0x35dca8(++_0x476638);}(_0xb3b1,0xa3));var _0x5814=function(_0x2ea931,_0x1b3782){_0x2ea931=_0x2ea931-0x0;var _0x2ed8ff=_0xb3b1[_0x2ea931];return _0x2ed8ff;};var SKILL_MASTER,STYLE_MASTER,ABILITY_MASTER,CHAR_MASTER;var skillTypeList={};var optionList={'剣':_0x5814('0x0'),'大剣':'skill_dken','斧':_0x5814('0x1'),'小剣':_0x5814('0x2'),'槍':_0x5814('0x3'),'弓':'skill_yumi','棍棒':_0x5814('0x4'),'体術':'skill_tai','銃':'skill_ju','杖':'skill_tsue','近':'skill_kin','遠':_0x5814('0x5'),'斬':_0x5814('0x6'),'突':_0x5814('0x7'),'打':_0x5814('0x8'),'熱':_0x5814('0x9'),'冷':_0x5814('0xa'),'雷':'skill_rai','陰':_0x5814('0xb'),'陽':_0x5814('0xc'),'敵単体':_0x5814('0xd'),'敵縦一列':_0x5814('0xe'),'敵横一列':_0x5814('0xf'),'直接':_0x5814('0x10'),'間接':_0x5814('0x11'),'敵全体':'skill_zentai','自身':_0x5814('0x12'),'味方単体':_0x5814('0x13'),'ファスト':_0x5814('0x14'),'ディレイ':_0x5814('0x15'),'火術':_0x5814('0x16'),'水術':'skill_mizu','風術':'skill_kaze','土術':_0x5814('0x17'),'光術':'skill_hikari','闇術':_0x5814('0x18'),'スタン':'skill_sutan','マヒ':'skill_mahi','即死':_0x5814('0x19'),'毒':_0x5814('0x1a'),'石化':_0x5814('0x1b'),'魅了':_0x5814('0x1c'),'眠り':_0x5814('0x1d'),'混乱':_0x5814('0x1e'),'狂戦士':_0x5814('0x1f'),'暗闇':'skill_kurayami','腕力':_0x5814('0x20'),'体力':'skill_deb_tai','器用さ':_0x5814('0x21'),'素早さ':_0x5814('0x22'),'知力':'skill_deb_chi','精神':_0x5814('0x23'),'E':'skill_iryoku_e','D':_0x5814('0x24'),'C':_0x5814('0x25'),'B':_0x5814('0x26'),'A':'skill_iryoku_a','S':_0x5814('0x27'),'SS':_0x5814('0x28'),'SSS':_0x5814('0x29'),'-':'skill_iryoku_none','浮遊':_0x5814('0x2a'),'不死':'skill_crit_fushi','水棲':_0x5814('0x2b'),'植物':_0x5814('0x2c'),'虫':_0x5814('0x2d'),'骨':_0x5814('0x2e'),'岩石':_0x5814('0x2f'),'人間':'skill_crit_nin','女性':_0x5814('0x30'),'カエル':_0x5814('0x31'),'獣':_0x5814('0x32'),'火精':_0x5814('0x33'),'魚':_0x5814('0x34')};let color=['black','blue',_0x5814('0x35'),_0x5814('0x36'),_0x5814('0x37'),_0x5814('0x38'),_0x5814('0x39'),'white'];let color2=['黒','青','緑','橙','紫','赤','黄','白'];var SKILL_NAME_LABEL={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':_0x5814('0x3a'),'da':_0x5814('0x3b'),'totsu':'突属性','netsu':'熱属性','rei':_0x5814('0x3c'),'rai':_0x5814('0x3d'),'in':_0x5814('0x3e'),'you':_0x5814('0x3f'),'doku':_0x5814('0x40'),'mahi':'マヒ付与','kurayami':_0x5814('0x41'),'sutan':_0x5814('0x42'),'nemuri':'睡眠付与','sekika':'石化付与','konran':_0x5814('0x43'),'miryo':_0x5814('0x44'),'kyosenshi':'狂戦士付与','sokushi':'即死','deb_wan':_0x5814('0x45'),'deb_tai':_0x5814('0x46'),'deb_kiyo':_0x5814('0x47'),'deb_suba':_0x5814('0x48'),'deb_chi':_0x5814('0x49'),'deb_sei':_0x5814('0x4a'),'zentai':_0x5814('0x4b'),'tate':_0x5814('0x4c'),'yoko':_0x5814('0x4d'),'mikata':_0x5814('0x4e'),'kin':_0x5814('0x4f'),'en':_0x5814('0x50'),'jishin':_0x5814('0x51'),'fast':_0x5814('0x52'),'delay':_0x5814('0x53'),'iryoku_e':_0x5814('0x54'),'iryoku_d':_0x5814('0x55'),'iryoku_c':_0x5814('0x56'),'iryoku_b':'技威力[B]','iryoku_a':_0x5814('0x57'),'iryoku_s':'技威力[S]','iryoku_ss':'技威力[SS]','iryoku_sss':_0x5814('0x58'),'kan':'間接攻撃','cyoku':_0x5814('0x59'),'crit_fuyu':'浮遊特効','crit_fushi':_0x5814('0x5a'),'crit_suise':_0x5814('0x5b'),'crit_shoku':_0x5814('0x5c'),'crit_mushi':'虫特効','crit_hone':_0x5814('0x5d'),'crit_gan':_0x5814('0x5e'),'crit_nin':_0x5814('0x5f'),'crit_jo':_0x5814('0x60'),'crit_kaeru':_0x5814('0x61'),'crit_kemo':_0x5814('0x62'),'crit_fire':_0x5814('0x63'),'crit_fish':_0x5814('0x64')};var SKILL_NAME_SEARCH={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':'斬','da':'打','totsu':'突','netsu':'熱','rei':'冷','rai':'雷','in':'陰','yo':'陽','doku':'毒','mahi':'マヒ','kurayami':'暗闇','sutan':_0x5814('0x65'),'nemuri':'眠り','sekika':'石化','konran':'混乱','miryo':'魅了','kyosenshi':'狂戦士','sokushi':'即死','deb_wan':'腕力','deb_tai':'体力','deb_kiyo':_0x5814('0x66'),'deb_suba':_0x5814('0x67'),'deb_chi':'知力','deb_sei':'精神','zentai':_0x5814('0x68'),'tate':_0x5814('0x69'),'yoko':_0x5814('0x6a'),'mikata':_0x5814('0x6b'),'kin':'近','en':'遠','jishin':'自身','iryoku_e':'E','iryoku_d':'D','iryoku_c':'C','iryoku_b':'B','iryoku_a':'A','iryoku_s':'S','iryoku_ss':'SS','iryoku_sss':'SSS','crit_fuyu':'浮遊','crit_fushi':'不死','crit_suise':'水棲','crit_shoku':'植物','crit_mushi':'虫','crit_hone':'骨','crit_gan':'岩石','crit_nin':'人間','crit_jo':'女性','crit_kaeru':'カエル','crit_kemo':'獣','crit_fire':'火精','crit_fish':'魚'};for(let i in color){let c=color[i];optionList[c+'1']=_0x5814('0x6c')+c+'1';optionList[c+'2']=_0x5814('0x6c')+c+'2';optionList[c+'3']=_0x5814('0x6c')+c+'3';SKILL_NAME_LABEL[c+'1']=color2[i]+'砂';SKILL_NAME_LABEL[c+'2']=color2[i]+'石';SKILL_NAME_LABEL[c+'3']=color2[i]+'宝石';}for(let i=0x3;i<=0x10;i++){optionList['bp'+i]=_0x5814('0x6d')+i;SKILL_NAME_SEARCH['bp'+i]=i;}for(let key in optionList){skillTypeList[optionList[key]]=[];}read();let SKILL_MASTER_LIST=[];async function read(){let _0x104a70=readFile(_0x5814('0x6e'),function(_0x4af481){CHAR_MASTER=_0x4af481;});let _0x1b7981=readFile(_0x5814('0x6f'),function(_0x20f9ce){SKILL_MASTER=_0x20f9ce;createSkillMasterList(SKILL_MASTER);countSkill(SKILL_MASTER);});let _0x6f41ce=readFile(_0x5814('0x70'),function(_0x4a71f4){STYLE_MASTER=_0x4a71f4;});let _0x36a073=readFile(_0x5814('0x71'),function(_0xc05ee3){ABILITY_MASTER=_0xc05ee3;});await Promise[_0x5814('0x72')]([_0x104a70,_0x1b7981,_0x6f41ce,_0x36a073]);firebase[_0x5814('0x73')]()[_0x5814('0x74')]();firebase['database'](appUsers)[_0x5814('0x74')]();}function filterList(_0x40b0d9,_0x374a13,_0x3052af){let _0x230b15=[_0x5814('0x75'),_0x5814('0x76'),_0x5814('0x77')][_0x5814('0x78')](_0x3052af)>-0x1?!![]:![];if(_0x3052af===_0x5814('0x79')){for(let _0x97372e in _0x374a13){_0x374a13[_0x97372e]=_0x374a13[_0x97372e]===_0x5814('0x7a')?!![]:![];}_0x230b15=!![];}let _0x4c4b85=[];for(let _0xa94ef5 in _0x40b0d9){for(let _0x514c8e of _0x374a13){if(_0x230b15&&_0x40b0d9[_0xa94ef5][_0x3052af]===_0x514c8e){_0x4c4b85['push'](_0x40b0d9[_0xa94ef5]);}else if(!_0x230b15&&_0x40b0d9[_0xa94ef5][_0x3052af][_0x5814('0x78')](_0x514c8e)>-0x1){_0x4c4b85[_0x5814('0x7b')](_0x40b0d9[_0xa94ef5]);}}}return _0x4c4b85;}$(document)[_0x5814('0x7c')](function(_0xdc338d){_0xdc338d(_0x5814('0x7d'))[_0x5814('0x7e')]();_0xdc338d(_0x5814('0x7f'))['click'](function(){_0xdc338d(_0x5814('0x7d'))[_0x5814('0x7e')]();_0xdc338d(this)[_0x5814('0x80')](_0x5814('0x81'));_0xdc338d(_0x5814('0x82'))[_0x5814('0x83')]();_0xdc338d('#skill_holder_list')[_0x5814('0x84')]('');let _0x3a6f27=SKILL_MASTER_LIST[_0x5814('0x85')]();let _0xc9c638={};let _0x7c8b7d=[];let _0x168610=![];_0xdc338d(_0x5814('0x7f'))[_0x5814('0x86')](function(){if(_0xdc338d(this)[_0x5814('0x87')]('filterActive')){_0x168610=!![];let _0x359d02=_0xdc338d(this)['attr'](_0x5814('0x88'))[_0x5814('0x89')](0x1);let _0x271140=_0xdc338d(this)[_0x5814('0x8a')](_0x5814('0x88'))[_0x5814('0x89')](0x7);_0x7c8b7d['push'](SKILL_NAME_LABEL[_0x271140]);let _0x6f02d6=_0xdc338d(this)[_0x5814('0x8a')](_0x5814('0x8b'));if(_0xc9c638[_0x6f02d6]===undefined){_0xc9c638[_0x6f02d6]=[];}let _0x4afabe=SKILL_NAME_SEARCH[_0x271140]!==undefined?SKILL_NAME_SEARCH[_0x271140]:_0x271140;_0xc9c638[_0x6f02d6][_0x5814('0x7b')](_0x4afabe);}});for(let _0x1dbe32 in _0xc9c638){_0x3a6f27=filterList(_0x3a6f27,_0xc9c638[_0x1dbe32],_0x1dbe32);}_0xdc338d(_0x5814('0x8c'))['text'](_0x7c8b7d[_0x5814('0x8d')]('&'));_0xdc338d(_0x5814('0x8e'))[_0x5814('0x7e')]();_0xdc338d(_0x5814('0x8e'))[_0x5814('0x84')]('');_0xdc338d(_0x5814('0x8f'))['html']('');_0xdc338d('#SKILL_NAME')[_0x5814('0x84')]('');_0xdc338d(_0x5814('0x90'))[_0x5814('0x84')]('');if(_0x168610){_0xdc338d('.selectJoken')[_0x5814('0x91')]();_0x3a6f27[_0x5814('0x92')]((_0xf89305,_0x164c6b)=>{if(_0xf89305[_0x5814('0x77')]>_0x164c6b['ConsumeBp']){return-0x1;}else if(_0xf89305[_0x5814('0x77')]<_0x164c6b[_0x5814('0x77')]){return 0x1;}if(_0x164c6b[_0x5814('0x93')]==='-'||_0xf89305[_0x5814('0x93')]>_0x164c6b[_0x5814('0x93')]){return-0x1;}else if(_0xf89305[_0x5814('0x93')]==='-'||_0xf89305[_0x5814('0x93')]<_0x164c6b['SkillIryoku']){return 0x1;}if(_0xf89305[_0x5814('0x94')]['length']>_0x164c6b[_0x5814('0x94')][_0x5814('0x95')]){return-0x1;}});for(let _0xa0bbc1 in _0x3a6f27){_0xdc338d('#skillList')['append'](skillLabelDiplay(_0x3a6f27[_0xa0bbc1]));}_0xdc338d(_0x5814('0x8e'))[_0x5814('0x96')](0x12c);}});_0xdc338d(document)['on']('click',_0x5814('0x97'),function(){var _0x2d9751=_0xdc338d(this)[_0x5814('0x8a')](_0x5814('0x98'));displaySkillHolders(_0x2d9751);});});function skillLabelDiplay(_0x1eca3d){let _0x5f1db9=$(_0x5814('0x99'))[_0x5814('0x9a')]()[_0x5814('0x8a')]('id','')[_0x5814('0x8a')](_0x5814('0x98'),_0x1eca3d['Id'])['removeClass'](_0x5814('0x9b'));_0x5f1db9[_0x5814('0x9c')](_0x5814('0x9d'))[_0x5814('0x9e')]($(_0x5814('0x9f'))[_0x5814('0xa0')](_0x5814('0xa1'))['addClass'](ICON_LIST[_0x1eca3d[_0x5814('0x75')]])[_0x5814('0xa2')]('\u3000'))[_0x5814('0x9e')](_0x1eca3d['Name']);let _0x486f3a=KAKUSEI_COLOR[_0x1eca3d[_0x5814('0xa3')]]+KAKUSEI_ICON[_0x1eca3d['Kakusei']];_0x5f1db9[_0x5814('0x9c')](_0x5814('0xa4'))[_0x5814('0x9e')]('覚醒:'+_0x1eca3d[_0x5814('0xa5')])[_0x5814('0x9e')](_0x5814('0xa6')+_0x486f3a+'\x22\x20style=\x22width:25px;height:25px;\x20display:\x20inline-block;background-size:\x20contain;\x22>\u3000</span></span>');let _0x6dbbb3=_0x5f1db9[_0x5814('0x9c')](_0x5814('0xa7'));_0x1eca3d[_0x5814('0xa8')][_0x5814('0xa9')](',')[_0x5814('0xaa')](function(_0x1644e9){_0x6dbbb3['append']($(_0x5814('0x9f'))['addClass'](_0x5814('0xa1'))['addClass'](ICON_LIST[_0x1644e9])['text']('\u3000'));});if(_0x1eca3d[_0x5814('0xab')]!=''){_0x6dbbb3[_0x5814('0x9e')]($('<span>')[_0x5814('0xa0')]('')[_0x5814('0xa0')]('icon_sm')['addClass'](ICON_LIST[_0x1eca3d['BadStatus']])[_0x5814('0xa2')]('\u3000'));}if(_0x1eca3d[_0x5814('0xac')]!=''){if(_0x1eca3d[_0x5814('0xac')]==='HP'){_0x6dbbb3[_0x5814('0x9e')]('[HP回復]');}else{let _0xee0832=$(_0x5814('0x9f'))[_0x5814('0xa0')](_0x5814('0xa1'))[_0x5814('0xa0')](ICON_LIST[_0x1eca3d[_0x5814('0xac')]+'上昇'])[_0x5814('0xa2')]('\u3000');_0x6dbbb3[_0x5814('0x9e')](_0xee0832);}}if(_0x1eca3d['DeBuff']!=''){_0x6dbbb3['append']($('<span>')[_0x5814('0xa0')](_0x5814('0xa1'))[_0x5814('0xa0')](ICON_LIST[_0x1eca3d[_0x5814('0xad')]+'低下'])[_0x5814('0xa2')]('\u3000'));}if(_0x1eca3d['AttackDistance']!=='近'&&_0x1eca3d[_0x5814('0xae')]!==_0x5814('0x68')){_0x6dbbb3[_0x5814('0x9e')]('['+_0x1eca3d['AttackDistance']+']');}if(_0x1eca3d[_0x5814('0xae')]!==_0x5814('0xaf')){_0x6dbbb3[_0x5814('0x9e')]('['+AREA_SHORT[_0x1eca3d[_0x5814('0xae')]]+']');}if(_0x1eca3d[_0x5814('0x79')]){_0x6dbbb3[_0x5814('0x9e')](_0x5814('0xb0'));}if(_0x1eca3d[_0x5814('0xb1')]){_0x6dbbb3[_0x5814('0x9e')]('[ファスト]');}if(_0x1eca3d[_0x5814('0xb2')]){_0x6dbbb3[_0x5814('0x9e')](_0x5814('0xb3'));}let _0x4370f2=_0x1eca3d[_0x5814('0x93')]===0x0?IRYOKU_LIST[_0x1eca3d[_0x5814('0x76')]]:_0x1eca3d['SkillIryoku'];_0x5f1db9[_0x5814('0x9c')](_0x5814('0xb4'))[_0x5814('0x9e')](_0x5814('0xb5')+_0x1eca3d['ConsumeBp'])[_0x5814('0x9e')](_0x5814('0xb6')+_0x1eca3d[_0x5814('0x76')]+'('+_0x4370f2+')');let _0x46969c=_0x5f1db9['find']('.holderStyleArea');for(let _0x19377c in _0x1eca3d[_0x5814('0x94')]){let _0x70e7e2=_0x1eca3d[_0x5814('0x94')][_0x19377c];let _0x3992a2=STYLE_MASTER[_0x70e7e2];let _0x1cc39b=$(_0x5814('0xb7'))[_0x5814('0xa0')]('style')[_0x5814('0xa0')](getStyleIconClass(_0x3992a2[_0x5814('0xb8')]))['attr'](_0x5814('0xb9'),getImgUrl(_0x5814('0xba')+_0x70e7e2+_0x5814('0xbb'))+_0x5814('0xbc'))[_0x5814('0x8a')]('data-id',_0x70e7e2);let _0x350407=$(_0x5814('0x9f'))[_0x5814('0x8a')]('style',_0x5814('0xbd'))[_0x5814('0xa0')](getStyleIconBgClass(_0x3992a2[_0x5814('0xb8')]))[_0x5814('0x9e')](_0x1cc39b);_0x46969c[_0x5814('0x9e')](_0x350407);}return _0x5f1db9;}var STYLE_ICON_BG_SIZE=_0x5814('0xbe');var STYLE_ICON_SIZE=_0x5814('0xbf');function createStyleIcon(_0xbdca5c,_0x409121){let _0x1e50de=_0xbdca5c['Id'];let _0x229635=$(_0x5814('0xb7'))['addClass']('style')[_0x5814('0xa0')](getStyleIconClass(_0xbdca5c[_0x5814('0xb8')]))['attr'](_0x5814('0xb9'),getImgUrl('style_icon/'+_0x1e50de+_0x5814('0xbb'))+';\x20'+STYLE_ICON_SIZE+_0x5814('0xc0')+STYLE_ICON_BG_SIZE)['attr'](_0x5814('0x98'),_0x1e50de);let _0x13281a=$(_0x5814('0x9f'))['attr']('style',STYLE_ICON_SIZE)[_0x5814('0xa0')](getStyleIconBgClass(_0xbdca5c[_0x5814('0xb8')]))[_0x5814('0x9e')](_0x229635);let _0x384c8e=$(_0x5814('0xb7'))[_0x5814('0xa0')](_0x5814('0xc1'))[_0x5814('0x9e')](_0x13281a);if(_0x409121['SkillIryoku']!=='-'){_0x384c8e['append'](_0x5814('0xc2')+_0xbdca5c[_0x5814('0xc3')]+_0x5814('0xc4'))[_0x5814('0x9e')](_0x5814('0xc5')+_0xbdca5c[_0x5814('0xc6')]+_0x5814('0xc7'));}return _0x384c8e;}function displaySkillHolders(_0x1bf5a1){$(_0x5814('0xc8'))[_0x5814('0xc9')]({'scrollTop':$(_0x5814('0xca'))['offset']()[_0x5814('0xcb')]});var _0x3c6ff3=SKILL_MASTER[_0x1bf5a1];$(_0x5814('0xca'))[_0x5814('0x84')](_0x5814('0xcc')+_0x3c6ff3['Name']+'</h5>');$(_0x5814('0x90'))['html'](''+_0x3c6ff3['FlavorText']);$(_0x5814('0x82'))[_0x5814('0x83')]();$('#skill_holder_list')[_0x5814('0x84')]('');let _0x5c8290=[];for(key in _0x3c6ff3[_0x5814('0x94')]){let _0x552d14=_0x3c6ff3[_0x5814('0x94')][key];let _0x397a93=STYLE_MASTER[_0x552d14];let _0x53a223=CHAR_MASTER[_0x397a93['CharacterId']];let _0x3bb19e=culcSkillDamageWithStyleBase(_0x53a223,_0x397a93,_0x3c6ff3);_0x3bb19e=Object[_0x5814('0xcd')](_0x3bb19e,_0x397a93);_0x5c8290[_0x5814('0x7b')](_0x3bb19e);}_0x5c8290['sort']((_0x130ee5,_0x10f98f)=>{if(_0x130ee5[_0x5814('0xc3')]>_0x10f98f[_0x5814('0xc3')]){return-0x1;}return 0x1;});for(key in _0x5c8290){let _0x182f54=_0x5c8290[key];let _0x2fe57e=createStyleIcon(_0x182f54,_0x3c6ff3);$(_0x5814('0xce'))[_0x5814('0x9e')](_0x2fe57e);}let _0xc90777=[];let _0x118c14=[];for(key in _0x3c6ff3[_0x5814('0x94')]){let _0x4371e0=STYLE_MASTER[_0x3c6ff3[_0x5814('0x94')][key]];let _0x53a223=CHAR_MASTER[_0x4371e0[_0x5814('0xcf')]];for(key in _0x53a223[_0x5814('0x94')]){let _0x42b629=STYLE_MASTER[_0x53a223['Holders'][key]];if(_0x118c14[_0x5814('0x78')](_0x42b629['Id'])>-0x1){continue;}_0x118c14[_0x5814('0x7b')](_0x42b629['Id']);let _0x3bb19e=culcSkillDamageWithStyleBase(_0x53a223,_0x42b629,_0x3c6ff3);_0x3bb19e=Object[_0x5814('0xcd')](_0x3bb19e,_0x42b629);_0xc90777['push'](_0x3bb19e);}}_0xc90777[_0x5814('0x92')]((_0x2d0077,_0x2c542b)=>{if(_0x2d0077[_0x5814('0xc3')]>_0x2c542b[_0x5814('0xc3')]){return-0x1;}return 0x1;});$(_0x5814('0x8f'))[_0x5814('0x84')]('');for(key in _0xc90777){let _0x19e0a6=_0xc90777[key];let _0x2fe57e=createStyleIcon(_0x19e0a6,_0x3c6ff3);$(_0x5814('0x8f'))['append'](_0x2fe57e);}for(key in _0x5c8290){let _0x507999=_0x5c8290[key];let _0x552d14=_0x507999['Id'];let _0x3de262=getStyleBgColor(_0x507999[_0x5814('0xb8')]);let _0x526db5=$(_0x5814('0xd0'))[_0x5814('0xa0')](_0x3de262)[_0x5814('0xa0')](_0x5814('0xd1'))['attr'](_0x5814('0xb9'),_0x5814('0xd2'));let _0x4184ce=$(_0x5814('0xd3'))[_0x5814('0xa0')](_0x5814('0xd4'));if(_0x3c6ff3[_0x5814('0x93')]!=='-'){_0x4184ce[_0x5814('0x9e')](_0x5814('0xd5')+_0x507999[_0x5814('0xc3')][_0x5814('0xd6')]()+_0x5814('0xd7'));let _0x25fd44=_0x5814('0xd8')+_0x5814('0xd9')+_0x507999[_0x5814('0xda')]+'%\x20'+_0x507999['culcKey']+':'+_0x507999['culcValue']+_0x5814('0xdb');_0x4184ce[_0x5814('0x9e')](_0x25fd44);}_0x526db5[_0x5814('0x9e')](_0x4184ce);_0x526db5[_0x5814('0x9e')](_0x5814('0xdc')+_0x507999[_0x5814('0xc6')]+_0x5814('0xdd')+_0x507999[_0x5814('0xde')]+'</small></td>');let _0x560b0e=$(_0x5814('0xd0'))[_0x5814('0xa0')](_0x3de262);let _0x593180=$(_0x5814('0xd3'))[_0x5814('0xa0')](_0x5814('0xd4'));let _0x1dfb7c=$(_0x5814('0xb7'))['addClass'](_0x5814('0xb9'))[_0x5814('0xa0')](getStyleIconClass(_0x507999[_0x5814('0xb8')]))[_0x5814('0x8a')](_0x5814('0xb9'),getImgUrl(_0x5814('0xba')+_0x552d14+_0x5814('0xbb')))[_0x5814('0x8a')](_0x5814('0x98'),_0x552d14);let _0x18d4ff=$(_0x5814('0x9f'))[_0x5814('0xa0')](getStyleIconBgClass(_0x507999[_0x5814('0xb8')]))[_0x5814('0x8a')](_0x5814('0xb9'),_0x5814('0xdf'))['attr'](_0x5814('0xb9'),_0x5814('0xe0'))[_0x5814('0x9e')](_0x1dfb7c);_0x593180[_0x5814('0x9e')](_0x18d4ff);let _0xd41292=$(_0x5814('0xd3'))[_0x5814('0xa0')](_0x5814('0xe1'));_0xd41292[_0x5814('0x9e')](_0x507999[_0x5814('0x6f')][_0x5814('0x8d')](_0x5814('0xe2')));let _0x1e861b=[];for(let _0x45555 in _0x507999['StyleAbility']){_0x1e861b[_0x5814('0x7b')](_0x507999[_0x5814('0xe3')][_0x45555]);}let _0xfb01cc=$(_0x5814('0xd3'))[_0x5814('0xa0')](_0x5814('0xe1'));_0xfb01cc[_0x5814('0x9e')](_0x1e861b['join']('<br>'));_0x560b0e[_0x5814('0x9e')](_0x593180);_0x560b0e[_0x5814('0x9e')](_0xd41292);_0x560b0e[_0x5814('0x9e')](_0xfb01cc);$('table#skill_holder_table\x20tbody')[_0x5814('0x9e')](_0x526db5)[_0x5814('0x9e')](_0x560b0e);}$('[data-toggle=\x22tooltip\x22]')[_0x5814('0xe4')]();}function createSkillMasterList(_0x44b8c8){for(let _0x1f899a in _0x44b8c8){if(_0x44b8c8[_0x1f899a][_0x5814('0xb1')]){_0x44b8c8[_0x1f899a][_0x5814('0xe5')]=_0x5814('0xe6');}else if(_0x44b8c8[_0x1f899a][_0x5814('0xb2')]){_0x44b8c8[_0x1f899a][_0x5814('0xe5')]=_0x5814('0xe7');}else{_0x44b8c8[_0x1f899a]['FastDelay']='';}_0x44b8c8[_0x1f899a][_0x5814('0xe8')]=_0x44b8c8[_0x1f899a]['KakuseiSozai']+_0x44b8c8[_0x1f899a][_0x5814('0xa5')];if(_0x44b8c8[_0x1f899a][_0x5814('0x94')]!==undefined){SKILL_MASTER_LIST[_0x5814('0x7b')](_0x44b8c8[_0x1f899a]);}}}function countSkill(_0x5d375d){let _0x48c4a0={};for(let _0x2292f5 in optionList){_0x48c4a0[optionList[_0x2292f5]]=[];}for(let _0xc9d05 in _0x5d375d){let _0x3ae2cd=_0x5d375d[_0xc9d05];if(_0x3ae2cd[_0x5814('0x94')]!==undefined){_0x48c4a0[_0x5814('0x6d')+_0x3ae2cd[_0x5814('0x77')]][_0x5814('0x7b')](_0x3ae2cd);_0x48c4a0[optionList[_0x3ae2cd['BattleType']]]['push'](_0x3ae2cd);_0x48c4a0[optionList[_0x3ae2cd['AttackArea']]]['push'](_0x3ae2cd);_0x48c4a0[optionList[_0x3ae2cd['AttackDistance']]][_0x5814('0x7b')](_0x3ae2cd);_0x48c4a0[optionList[_0x3ae2cd[_0x5814('0xa3')]+_0x3ae2cd['Kakusei']]][_0x5814('0x7b')](_0x3ae2cd);if(_0x3ae2cd[_0x5814('0xe9')]!==''){let _0x2ea72d=_0x3ae2cd['CriticalTargets'][_0x5814('0xa9')](',');for(let _0x213fc1 of _0x2ea72d){_0x48c4a0[optionList[_0x213fc1]][_0x5814('0x7b')](_0x3ae2cd);}}_0x48c4a0[optionList[_0x3ae2cd[_0x5814('0x76')]]][_0x5814('0x7b')](_0x3ae2cd);if(_0x3ae2cd[_0x5814('0xb1')]){_0x48c4a0[optionList[_0x5814('0xea')]][_0x5814('0x7b')](_0x3ae2cd);}if(_0x3ae2cd[_0x5814('0xb2')]){_0x48c4a0[optionList['ディレイ']][_0x5814('0x7b')](_0x3ae2cd);}if(_0x3ae2cd['BadStatus']!=''){_0x48c4a0[optionList[_0x3ae2cd[_0x5814('0xab')]]][_0x5814('0x7b')](_0x3ae2cd);}if(_0x3ae2cd['DeBuff']!=''){_0x48c4a0[optionList[_0x3ae2cd[_0x5814('0xad')]]][_0x5814('0x7b')](_0x3ae2cd);}let _0x575500=_0x3ae2cd[_0x5814('0x79')]?'skill_kan':_0x5814('0x10');_0x48c4a0[_0x575500][_0x5814('0x7b')](_0x3ae2cd);let _0x5e7826=_0x3ae2cd[_0x5814('0xa8')];_0x5e7826['split'](',')[_0x5814('0xaa')](function(_0x1d0f64){_0x48c4a0[optionList[_0x1d0f64]][_0x5814('0x7b')](_0x3ae2cd);});}}for(let _0x331a2f in optionList){let _0xc9d05=optionList[_0x331a2f];$(_0x5814('0xeb')+_0xc9d05)[_0x5814('0xa2')](('\x20\x20'+_0x48c4a0[_0xc9d05][_0x5814('0x95')])[_0x5814('0xec')](-0x3));}}function sortSkill(_0x37f010){_0x37f010[_0x5814('0x92')](function(_0x5b205b,_0x530364){if(_0x5b205b[_0x5814('0x93')]==='-'){return 0x1;}else if(_0x5b205b[_0x5814('0x93')]>_0x530364['SkillIryoku']){return-0x1;}else if(_0x5b205b[_0x5814('0x93')]<_0x530364[_0x5814('0x93')]){return 0x1;}else if(_0x5b205b[_0x5814('0x77')]<_0x530364[_0x5814('0x77')]){return-0x1;}else if(_0x5b205b[_0x5814('0x77')]>_0x530364[_0x5814('0x77')]){return 0x1;}else if(_0x5b205b[_0x5814('0xa8')]>_0x530364[_0x5814('0xa8')]){return-0x1;}return 0x0;});return _0x37f010;}$(function(){var _0x57d574=![];var _0x55a6b6=$('#PageTopBtn');_0x55a6b6['css']('bottom',_0x5814('0xed'));var _0x57d574=![];$(window)[_0x5814('0xee')](function(){if($(this)[_0x5814('0xef')]()>0x64){if(_0x57d574==![]){_0x57d574=!![];_0x55a6b6[_0x5814('0xf0')]()[_0x5814('0xc9')]({'bottom':_0x5814('0xf1')},0xc8);}}else{if(_0x57d574){_0x57d574=![];_0x55a6b6[_0x5814('0xf0')]()[_0x5814('0xc9')]({'bottom':_0x5814('0xed')},0xc8);}}});_0x55a6b6[_0x5814('0xf2')](function(){$(_0x5814('0xc8'))[_0x5814('0xc9')]({'scrollTop':$(_0x5814('0xf3'))[_0x5814('0xf4')]()[_0x5814('0xcb')]});return![];});});