var _0x5504=['skill_tsue','skill_en','skill_zan','skill_totsu','skill_da','skill_netsu','skill_rei','skill_yo','skill_tantai','skill_tate','skill_yoko','skill_cyoku','skill_kan','skill_jishin','skill_mikata','skill_fast','skill_delay','skill_hi','skill_kaze','skill_tsuchi','skill_hikari','skill_yami','skill_mahi','skill_sokushi','skill_doku','skill_sekika','skill_nemuri','skill_konran','skill_kyosenshi','skill_kurayami','skill_deb_wan','skill_deb_tai','skill_deb_kiyo','skill_deb_suba','skill_deb_chi','skill_deb_sei','skill_iryoku_e','skill_iryoku_d','skill_iryoku_c','skill_iryoku_b','skill_iryoku_a','skill_iryoku_s','skill_iryoku_none','skill_crit_shoku','skill_crit_mushi','skill_crit_nin','skill_crit_jo','skill_crit_kaeru','skill_crit_kemo','skill_crit_fire','black','blue','green','orange','purple','red','yellow','斬属性','打属性','突属性','熱属性','冷属性','雷属性','陰属性','陽属性','毒付与','マヒ付与','スタン付与','睡眠付与','狂戦士付与','腕力減少付与','体力減少付与','素早さ減少付与','精神減少付与','縦一列攻撃','横一列攻撃','味方単体対象','近接攻撃','遠距離攻撃','自身が対象','ファスト効果','ディレイ効果','技威力[E]','技威力[D]','技威力[C]','技威力[B]','技威力[SS]','技威力[SSS]','間接攻撃','直接攻撃','浮遊特効','不死特効','植物特効','虫特効','人間特効','女性特効','カエル特効','獣特効','魚特効','器用さ','素早さ','敵全体','敵縦一列','敵横一列','味方単体','カエル','skill_','skill_bp','Char','Skill','Style','Ability','database','goOffline','BattleType','PowerGrade','ConsumeBp','kan','push','indexOf','ready','.selectJoken','hide','._FilterLink','click','toggleClass','table#skill_holder_table\x20tbody\x20*','remove','#skill_holder_list','html','concat','each','hasClass','filterActive','attr','substr','href','data-col','#skill_name_label','text','#skillList','#skill_damage_ranking','sort','SkillIryoku','length','append','.skill_select','data-id','removeClass','find','.skillNameClass','<span>','addClass','icon_sm','Name','KakuseiSozai','Kakusei','.skillKakuseiArea','覚醒:','\x20<span\x20class=\x22fukidashi\x22\x20style=\x22display:\x20inline-block\x22><span\x20class=\x22icon_','\x22\x20style=\x22width:25px;height:25px;\x20display:\x20inline-block;background-size:\x20contain;\x22>\u3000</span></span>','.iconArea','AttackAttributes','forEach','BadStatus','Buff','[HP回復]','AttackArea','AttackDistance','敵単体','AttackKansetsu','[間接]','Fast','[ファスト]','[ディレイ]','.iryokuArea','BP:','\x20威力:','.holderStyleArea','Holders','<div>','style','Rarity','style_icon/','.png',';\x20width:35px;height:35px;\x20background-size:\x2035px\x20!important;','width:35px;height:35px;','70px\x20!important;','width:70px;height:70px;','\x20background-size:\x20','col-3\x20col-sm-2\x20text-center','<p\x20class=\x27pad0\x20damage-label\x27>ダメージ\x20','culcDamage','</p>','</div>','html,body','animate','#holder_label','offset','top','CharacterId','assign','<tr>','darkButton','border:initial;','<td>','text-center','</b>','<button\x20class=\x22icon_info\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22top\x22\x20title=\x22','アビリティ倍率:','ability','culcKey','culcValue','\x22></button>','\x20<small>','AnotherName','</small></td>','width:80px','justify-content:\x20space-between;','small','join','StyleAbility','<br>','table#skill_holder_table\x20tbody','[data-toggle=\x22tooltip\x22]','tooltip','FastDelay','fast','Delay','delay','KakuseiSearch','CriticalTargets','log','ファスト','ディレイ','DeBuff','split','#count_','slice','#PageTopBtn','bottom','scroll','scrollTop','stop','-200px','#weponLabel','skill_ono','skill_sken','skill_yari','skill_yumi','skill_ju'];(function(_0x2ec0a2,_0x550eb4){var _0xa6e725=function(_0x5d83d0){while(--_0x5d83d0){_0x2ec0a2['push'](_0x2ec0a2['shift']());}};_0xa6e725(++_0x550eb4);}(_0x5504,0xf6));var _0x4830=function(_0x2f5632,_0x45fc79){_0x2f5632=_0x2f5632-0x0;var _0x33af65=_0x5504[_0x2f5632];return _0x33af65;};var SKILL_MASTER,STYLE_MASTER,ABILITY_MASTER,CHAR_MASTER;var skillTypeList={};var optionList={'剣':'skill_ken','大剣':'skill_dken','斧':_0x4830('0x0'),'小剣':_0x4830('0x1'),'槍':_0x4830('0x2'),'弓':_0x4830('0x3'),'棍棒':'skill_kon','体術':'skill_tai','銃':_0x4830('0x4'),'杖':_0x4830('0x5'),'近':'skill_kin','遠':_0x4830('0x6'),'斬':_0x4830('0x7'),'突':_0x4830('0x8'),'打':_0x4830('0x9'),'熱':_0x4830('0xa'),'冷':_0x4830('0xb'),'雷':'skill_rai','陰':'skill_in','陽':_0x4830('0xc'),'敵単体':_0x4830('0xd'),'敵縦一列':_0x4830('0xe'),'敵横一列':_0x4830('0xf'),'直接':_0x4830('0x10'),'間接':_0x4830('0x11'),'敵全体':'skill_zentai','自身':_0x4830('0x12'),'味方単体':_0x4830('0x13'),'ファスト':_0x4830('0x14'),'ディレイ':_0x4830('0x15'),'火術':_0x4830('0x16'),'水術':'skill_mizu','風術':_0x4830('0x17'),'土術':_0x4830('0x18'),'光術':_0x4830('0x19'),'闇術':_0x4830('0x1a'),'スタン':'skill_sutan','マヒ':_0x4830('0x1b'),'即死':_0x4830('0x1c'),'毒':_0x4830('0x1d'),'石化':_0x4830('0x1e'),'魅了':'skill_miryo','眠り':_0x4830('0x1f'),'混乱':_0x4830('0x20'),'狂戦士':_0x4830('0x21'),'暗闇':_0x4830('0x22'),'腕力':_0x4830('0x23'),'体力':_0x4830('0x24'),'器用さ':_0x4830('0x25'),'素早さ':_0x4830('0x26'),'知力':_0x4830('0x27'),'精神':_0x4830('0x28'),'E':_0x4830('0x29'),'D':_0x4830('0x2a'),'C':_0x4830('0x2b'),'B':_0x4830('0x2c'),'A':_0x4830('0x2d'),'S':_0x4830('0x2e'),'SS':'skill_iryoku_ss','SSS':'skill_iryoku_sss','-':_0x4830('0x2f'),'浮遊':'skill_crit_fuyu','不死':'skill_crit_fushi','水棲':'skill_crit_suise','植物':_0x4830('0x30'),'虫':_0x4830('0x31'),'骨':'skill_crit_hone','岩石':'skill_crit_gan','人間':_0x4830('0x32'),'女性':_0x4830('0x33'),'カエル':_0x4830('0x34'),'獣':_0x4830('0x35'),'火精':_0x4830('0x36'),'魚':'skill_crit_fish'};let color=[_0x4830('0x37'),_0x4830('0x38'),_0x4830('0x39'),_0x4830('0x3a'),_0x4830('0x3b'),_0x4830('0x3c'),_0x4830('0x3d'),'white'];let color2=['黒','青','緑','橙','紫','赤','黄','白'];var SKILL_NAME_LABEL={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':_0x4830('0x3e'),'da':_0x4830('0x3f'),'totsu':_0x4830('0x40'),'netsu':_0x4830('0x41'),'rei':_0x4830('0x42'),'rai':_0x4830('0x43'),'in':_0x4830('0x44'),'you':_0x4830('0x45'),'doku':_0x4830('0x46'),'mahi':_0x4830('0x47'),'kurayami':'暗闇付与','sutan':_0x4830('0x48'),'nemuri':_0x4830('0x49'),'sekika':'石化付与','konran':'混乱付与','miryo':'魅了付与','kyosenshi':_0x4830('0x4a'),'sokushi':'即死','deb_wan':_0x4830('0x4b'),'deb_tai':_0x4830('0x4c'),'deb_kiyo':'器用さ減少付与','deb_suba':_0x4830('0x4d'),'deb_chi':'知力減少付与','deb_sei':_0x4830('0x4e'),'zentai':'全体攻撃','tate':_0x4830('0x4f'),'yoko':_0x4830('0x50'),'mikata':_0x4830('0x51'),'kin':_0x4830('0x52'),'en':_0x4830('0x53'),'jishin':_0x4830('0x54'),'fast':_0x4830('0x55'),'delay':_0x4830('0x56'),'iryoku_e':_0x4830('0x57'),'iryoku_d':_0x4830('0x58'),'iryoku_c':_0x4830('0x59'),'iryoku_b':_0x4830('0x5a'),'iryoku_a':'技威力[A]','iryoku_s':'技威力[S]','iryoku_ss':_0x4830('0x5b'),'iryoku_sss':_0x4830('0x5c'),'kan':_0x4830('0x5d'),'cyoku':_0x4830('0x5e'),'crit_fuyu':_0x4830('0x5f'),'crit_fushi':_0x4830('0x60'),'crit_suise':'水棲特効','crit_shoku':_0x4830('0x61'),'crit_mushi':_0x4830('0x62'),'crit_hone':'骨特効','crit_gan':'岩石特効','crit_nin':_0x4830('0x63'),'crit_jo':_0x4830('0x64'),'crit_kaeru':_0x4830('0x65'),'crit_kemo':_0x4830('0x66'),'crit_fire':'火精特効','crit_fish':_0x4830('0x67')};var SKILL_NAME_SEARCH={'ken':'剣','dken':'大剣','ono':'斧','yari':'槍','sken':'小剣','yumi':'弓','kon':'棍棒','tai':'体術','ju':'銃','hi':'火術','mizu':'水術','kaze':'風術','tsuchi':'土術','hikari':'光術','yami':'闇術','zan':'斬','da':'打','totsu':'突','netsu':'熱','rei':'冷','rai':'雷','in':'陰','yo':'陽','doku':'毒','mahi':'マヒ','kurayami':'暗闇','sutan':'スタン','nemuri':'眠り','sekika':'石化','konran':'混乱','miryo':'魅了','kyosenshi':'狂戦士','sokushi':'即死','deb_wan':'腕力','deb_tai':'体力','deb_kiyo':_0x4830('0x68'),'deb_suba':_0x4830('0x69'),'deb_chi':'知力','deb_sei':'精神','zentai':_0x4830('0x6a'),'tate':_0x4830('0x6b'),'yoko':_0x4830('0x6c'),'mikata':_0x4830('0x6d'),'kin':'近','en':'遠','jishin':'自身','iryoku_e':'E','iryoku_d':'D','iryoku_c':'C','iryoku_b':'B','iryoku_a':'A','iryoku_s':'S','iryoku_ss':'SS','iryoku_sss':'SSS','crit_fuyu':'浮遊','crit_fushi':'不死','crit_suise':'水棲','crit_shoku':'植物','crit_mushi':'虫','crit_hone':'骨','crit_gan':'岩石','crit_nin':'人間','crit_jo':'女性','crit_kaeru':_0x4830('0x6e'),'crit_kemo':'獣','crit_fire':'火精','crit_fish':'魚'};for(let i in color){let c=color[i];optionList[c+'1']='skill_'+c+'1';optionList[c+'2']=_0x4830('0x6f')+c+'2';optionList[c+'3']=_0x4830('0x6f')+c+'3';SKILL_NAME_LABEL[c+'1']=color2[i]+'砂';SKILL_NAME_LABEL[c+'2']=color2[i]+'石';SKILL_NAME_LABEL[c+'3']=color2[i]+'宝石';}for(let i=0x3;i<=0x10;i++){optionList['bp'+i]=_0x4830('0x70')+i;SKILL_NAME_SEARCH['bp'+i]=i;}for(let key in optionList){skillTypeList[optionList[key]]=[];}read();let SKILL_MASTER_LIST=[];async function read(){let _0x5ce3d5=readFile(_0x4830('0x71'),function(_0x5f41f4){CHAR_MASTER=_0x5f41f4;});let _0x209f3d=readFile(_0x4830('0x72'),function(_0x11f683){SKILL_MASTER=_0x11f683;createSkillMasterList(SKILL_MASTER);countSkill(SKILL_MASTER);});let _0x1d1477=readFile(_0x4830('0x73'),function(_0x422c99){STYLE_MASTER=_0x422c99;});let _0x3884c8=readFile(_0x4830('0x74'),function(_0x161494){ABILITY_MASTER=_0x161494;});await Promise['all']([_0x5ce3d5,_0x209f3d,_0x1d1477,_0x3884c8]);firebase[_0x4830('0x75')]()['goOffline']();firebase[_0x4830('0x75')](appUsers)[_0x4830('0x76')]();}function filterList(_0x5b3811,_0x481701,_0x339934){let _0x4f7634=[_0x4830('0x77'),_0x4830('0x78'),_0x4830('0x79')]['indexOf'](_0x339934)>-0x1?!![]:![];if(_0x339934==='AttackKansetsu'){for(let _0x469e42 in _0x481701){_0x481701[_0x469e42]=_0x481701[_0x469e42]===_0x4830('0x7a')?!![]:![];}_0x4f7634=!![];}let _0x4d0e2d=[];for(let _0x2da500 in _0x5b3811){for(let _0xc111cb of _0x481701){if(_0x4f7634&&_0x5b3811[_0x2da500][_0x339934]===_0xc111cb){_0x4d0e2d[_0x4830('0x7b')](_0x5b3811[_0x2da500]);}else if(!_0x4f7634&&_0x5b3811[_0x2da500][_0x339934][_0x4830('0x7c')](_0xc111cb)>-0x1){_0x4d0e2d[_0x4830('0x7b')](_0x5b3811[_0x2da500]);}}}return _0x4d0e2d;}$(document)[_0x4830('0x7d')](function(_0x181f11){_0x181f11(_0x4830('0x7e'))[_0x4830('0x7f')]();_0x181f11(_0x4830('0x80'))[_0x4830('0x81')](function(){_0x181f11('.selectJoken')[_0x4830('0x7f')]();_0x181f11(this)[_0x4830('0x82')]('filterActive');_0x181f11(_0x4830('0x83'))[_0x4830('0x84')]();_0x181f11(_0x4830('0x85'))[_0x4830('0x86')]('');let _0x240fb4=SKILL_MASTER_LIST[_0x4830('0x87')]();let _0x4b4439={};let _0x4a70f3=[];let _0xd87f13=![];_0x181f11(_0x4830('0x80'))[_0x4830('0x88')](function(){if(_0x181f11(this)[_0x4830('0x89')](_0x4830('0x8a'))){_0xd87f13=!![];let _0x428a95=_0x181f11(this)[_0x4830('0x8b')]('href')[_0x4830('0x8c')](0x1);let _0x439f0b=_0x181f11(this)[_0x4830('0x8b')](_0x4830('0x8d'))[_0x4830('0x8c')](0x7);_0x4a70f3[_0x4830('0x7b')](SKILL_NAME_LABEL[_0x439f0b]);let _0x112fe7=_0x181f11(this)['attr'](_0x4830('0x8e'));if(_0x4b4439[_0x112fe7]===undefined){_0x4b4439[_0x112fe7]=[];}let _0x40c71e=SKILL_NAME_SEARCH[_0x439f0b]!==undefined?SKILL_NAME_SEARCH[_0x439f0b]:_0x439f0b;_0x4b4439[_0x112fe7][_0x4830('0x7b')](_0x40c71e);}});for(let _0x5277d7 in _0x4b4439){_0x240fb4=filterList(_0x240fb4,_0x4b4439[_0x5277d7],_0x5277d7);}_0x181f11(_0x4830('0x8f'))[_0x4830('0x90')](_0x4a70f3['join']('&'));_0x181f11(_0x4830('0x91'))[_0x4830('0x7f')]();_0x181f11(_0x4830('0x91'))[_0x4830('0x86')]('');_0x181f11(_0x4830('0x92'))[_0x4830('0x86')]('');countSkill(_0x240fb4);if(_0xd87f13){_0x181f11(_0x4830('0x7e'))['show']();_0x240fb4[_0x4830('0x93')]((_0x2f8492,_0x259aea)=>{if(_0x2f8492[_0x4830('0x79')]>_0x259aea['ConsumeBp']){return-0x1;}else if(_0x259aea[_0x4830('0x94')]==='-'||_0x2f8492['SkillIryoku']>_0x259aea[_0x4830('0x94')]){return-0x1;}else if(_0x2f8492[_0x4830('0x94')]==='-'||_0x2f8492[_0x4830('0x94')]<_0x259aea[_0x4830('0x94')]){return 0x1;}else if(_0x2f8492['Holders'][_0x4830('0x95')]>_0x259aea['Holders'][_0x4830('0x95')]){return-0x1;}return 0x1;});for(let _0x7f8feb in _0x240fb4){_0x181f11('#skillList')[_0x4830('0x96')](skillLabelDiplay(_0x240fb4[_0x7f8feb]));}_0x181f11(_0x4830('0x91'))['slideDown'](0x12c);}});_0x181f11(document)['on'](_0x4830('0x81'),_0x4830('0x97'),function(){var _0x5e8af8=_0x181f11(this)[_0x4830('0x8b')](_0x4830('0x98'));displaySkillHolders(_0x5e8af8);});});function skillLabelDiplay(_0x4f1599){let _0x3e7e18=$('#SKILL_TEMPLATE')['clone']()['attr']('id','')[_0x4830('0x8b')](_0x4830('0x98'),_0x4f1599['Id'])[_0x4830('0x99')]('d-none');_0x3e7e18[_0x4830('0x9a')](_0x4830('0x9b'))[_0x4830('0x96')]($(_0x4830('0x9c'))[_0x4830('0x9d')](_0x4830('0x9e'))[_0x4830('0x9d')](ICON_LIST[_0x4f1599[_0x4830('0x77')]])[_0x4830('0x90')]('\u3000'))[_0x4830('0x96')](_0x4f1599[_0x4830('0x9f')]);let _0x2820f3=KAKUSEI_COLOR[_0x4f1599[_0x4830('0xa0')]]+KAKUSEI_ICON[_0x4f1599[_0x4830('0xa1')]];_0x3e7e18[_0x4830('0x9a')](_0x4830('0xa2'))[_0x4830('0x96')](_0x4830('0xa3')+_0x4f1599[_0x4830('0xa1')])[_0x4830('0x96')](_0x4830('0xa4')+_0x2820f3+_0x4830('0xa5'));let _0x16c550=_0x3e7e18[_0x4830('0x9a')](_0x4830('0xa6'));_0x4f1599[_0x4830('0xa7')]['split'](',')[_0x4830('0xa8')](function(_0x4e2203){_0x16c550[_0x4830('0x96')]($('<span>')[_0x4830('0x9d')]('icon_sm')['addClass'](ICON_LIST[_0x4e2203])[_0x4830('0x90')]('\u3000'));});if(_0x4f1599[_0x4830('0xa9')]!=''){_0x16c550['append']($(_0x4830('0x9c'))[_0x4830('0x9d')]('')[_0x4830('0x9d')](_0x4830('0x9e'))['addClass'](ICON_LIST[_0x4f1599[_0x4830('0xa9')]])[_0x4830('0x90')]('\u3000'));}if(_0x4f1599[_0x4830('0xaa')]!=''){if(_0x4f1599[_0x4830('0xaa')]==='HP'){_0x16c550[_0x4830('0x96')](_0x4830('0xab'));}else{let _0x509f0a=$(_0x4830('0x9c'))['addClass'](_0x4830('0x9e'))['addClass'](ICON_LIST[_0x4f1599[_0x4830('0xaa')]+'上昇'])[_0x4830('0x90')]('\u3000');_0x16c550[_0x4830('0x96')](_0x509f0a);}}if(_0x4f1599[_0x4830('0xaa')]!=''){_0x16c550[_0x4830('0x96')]($(_0x4830('0x9c'))[_0x4830('0x9d')](_0x4830('0x9e'))[_0x4830('0x9d')](ICON_LIST[_0x4f1599[_0x4830('0xaa')]+'バフ'])['text']('\u3000'));}if(_0x4f1599['AttackDistance']!=='近'&&_0x4f1599[_0x4830('0xac')]!==_0x4830('0x6a')){_0x16c550[_0x4830('0x96')]('['+_0x4f1599[_0x4830('0xad')]+']');}if(_0x4f1599[_0x4830('0xac')]!==_0x4830('0xae')){_0x16c550[_0x4830('0x96')]('['+AREA_SHORT[_0x4f1599[_0x4830('0xac')]]+']');}if(_0x4f1599[_0x4830('0xaf')]){_0x16c550[_0x4830('0x96')](_0x4830('0xb0'));}if(_0x4f1599[_0x4830('0xb1')]){_0x16c550[_0x4830('0x96')](_0x4830('0xb2'));}if(_0x4f1599['Delay']){_0x16c550[_0x4830('0x96')](_0x4830('0xb3'));}_0x3e7e18[_0x4830('0x9a')](_0x4830('0xb4'))[_0x4830('0x96')](_0x4830('0xb5')+_0x4f1599[_0x4830('0x79')])[_0x4830('0x96')](_0x4830('0xb6')+_0x4f1599[_0x4830('0x78')]+'('+_0x4f1599[_0x4830('0x94')]+')');let _0x6a5e37=_0x3e7e18[_0x4830('0x9a')](_0x4830('0xb7'));for(let _0x3bf61a in _0x4f1599[_0x4830('0xb8')]){let _0x190ba5=_0x4f1599[_0x4830('0xb8')][_0x3bf61a];let _0xe20ae7=STYLE_MASTER[_0x190ba5];let _0x3c78fc=$(_0x4830('0xb9'))['addClass'](_0x4830('0xba'))[_0x4830('0x9d')](getStyleIconClass(_0xe20ae7[_0x4830('0xbb')]))[_0x4830('0x8b')](_0x4830('0xba'),getImgUrl(_0x4830('0xbc')+_0x190ba5+_0x4830('0xbd'))+_0x4830('0xbe'))[_0x4830('0x8b')](_0x4830('0x98'),_0x190ba5);let _0x1f3773=$(_0x4830('0x9c'))[_0x4830('0x8b')](_0x4830('0xba'),_0x4830('0xbf'))[_0x4830('0x9d')](getStyleIconBgClass(_0xe20ae7['Rarity']))[_0x4830('0x96')](_0x3c78fc);_0x6a5e37[_0x4830('0x96')](_0x1f3773);}return _0x3e7e18;}var STYLE_ICON_BG_SIZE=_0x4830('0xc0');var STYLE_ICON_SIZE=_0x4830('0xc1');function createStyleIcon(_0x11d096,_0x498e0c){let _0x276e96=_0x11d096['Id'];let _0xcec1a3=$('<div>')[_0x4830('0x9d')](_0x4830('0xba'))[_0x4830('0x9d')](getStyleIconClass(_0x11d096[_0x4830('0xbb')]))[_0x4830('0x8b')](_0x4830('0xba'),getImgUrl(_0x4830('0xbc')+_0x276e96+'.png')+';\x20'+STYLE_ICON_SIZE+_0x4830('0xc2')+STYLE_ICON_BG_SIZE)[_0x4830('0x8b')](_0x4830('0x98'),_0x276e96);let _0x503683=$('<span>')[_0x4830('0x8b')](_0x4830('0xba'),STYLE_ICON_SIZE)[_0x4830('0x9d')](getStyleIconBgClass(_0x11d096[_0x4830('0xbb')]))[_0x4830('0x96')](_0xcec1a3);let _0xaad88c=$(_0x4830('0xb9'))['addClass'](_0x4830('0xc3'))[_0x4830('0x96')](_0x503683);if(_0x498e0c[_0x4830('0x94')]!=='-'){_0xaad88c[_0x4830('0x96')](_0x4830('0xc4')+_0x11d096[_0x4830('0xc5')]+_0x4830('0xc6'))['append']('<div\x20class=\x27style-label\x27>'+_0x11d096[_0x4830('0x9f')]+_0x4830('0xc7'));}return _0xaad88c;}function displaySkillHolders(_0x501b0f){$(_0x4830('0xc8'))[_0x4830('0xc9')]({'scrollTop':$(_0x4830('0xca'))[_0x4830('0xcb')]()[_0x4830('0xcc')]});var _0x37c698=SKILL_MASTER[_0x501b0f];$(_0x4830('0x83'))[_0x4830('0x84')]();$(_0x4830('0x85'))[_0x4830('0x86')]('');let _0x57ef8c=[];for(key in _0x37c698['Holders']){let _0x36f610=_0x37c698[_0x4830('0xb8')][key];let _0x4ba499=STYLE_MASTER[_0x36f610];let _0x52bd11=CHAR_MASTER[_0x4ba499[_0x4830('0xcd')]];let _0x349669=culcSkillDamageWithStyleBase(_0x52bd11,_0x4ba499,_0x37c698);_0x349669=Object[_0x4830('0xce')](_0x349669,_0x4ba499);_0x57ef8c[_0x4830('0x7b')](_0x349669);}_0x57ef8c['sort']((_0x5a47f6,_0x23b4d4)=>{if(_0x5a47f6[_0x4830('0xc5')]>_0x23b4d4['culcDamage']){return-0x1;}return 0x1;});for(key in _0x57ef8c){let _0x35f7c9=_0x57ef8c[key];let _0x4a5351=createStyleIcon(_0x35f7c9,_0x37c698);$('#skill_holder_list')[_0x4830('0x96')](_0x4a5351);}let _0x2e0808=[];let _0x301d49=[];for(key in _0x37c698[_0x4830('0xb8')]){let _0x4b287d=STYLE_MASTER[_0x37c698[_0x4830('0xb8')][key]];let _0x52bd11=CHAR_MASTER[_0x4b287d[_0x4830('0xcd')]];for(key in _0x52bd11[_0x4830('0xb8')]){let _0x3fe762=STYLE_MASTER[_0x52bd11['Holders'][key]];if(_0x301d49[_0x4830('0x7c')](_0x3fe762['Id'])>-0x1){continue;}_0x301d49['push'](_0x3fe762['Id']);let _0x349669=culcSkillDamageWithStyleBase(_0x52bd11,_0x3fe762,_0x37c698);_0x349669=Object[_0x4830('0xce')](_0x349669,_0x3fe762);_0x2e0808['push'](_0x349669);}}_0x2e0808['sort']((_0x5163e1,_0x2c0b28)=>{if(_0x5163e1['culcDamage']>_0x2c0b28[_0x4830('0xc5')]){return-0x1;}return 0x1;});$(_0x4830('0x92'))[_0x4830('0x86')]('');for(key in _0x2e0808){let _0x52ea4f=_0x2e0808[key];let _0x4a5351=createStyleIcon(_0x52ea4f,_0x37c698);$(_0x4830('0x92'))['append'](_0x4a5351);}for(key in _0x57ef8c){let _0x29f7ee=_0x57ef8c[key];let _0x36f610=_0x29f7ee['Id'];let _0x475e38=getStyleBgColor(_0x29f7ee[_0x4830('0xbb')]);let _0x5b3651=$(_0x4830('0xcf'))['addClass'](_0x475e38)[_0x4830('0x9d')](_0x4830('0xd0'))[_0x4830('0x8b')](_0x4830('0xba'),_0x4830('0xd1'));let _0x1fbd0f=$(_0x4830('0xd2'))[_0x4830('0x9d')](_0x4830('0xd3'));if(_0x37c698[_0x4830('0x94')]!=='-'){_0x1fbd0f[_0x4830('0x96')]('<b>'+_0x29f7ee[_0x4830('0xc5')]['toLocaleString']()+_0x4830('0xd4'));let _0x587797=_0x4830('0xd5')+_0x4830('0xd6')+_0x29f7ee[_0x4830('0xd7')]+'%\x20'+_0x29f7ee[_0x4830('0xd8')]+':'+_0x29f7ee[_0x4830('0xd9')]+_0x4830('0xda');_0x1fbd0f[_0x4830('0x96')](_0x587797);}_0x5b3651[_0x4830('0x96')](_0x1fbd0f);_0x5b3651[_0x4830('0x96')]('<td\x20colspan=2>'+_0x29f7ee[_0x4830('0x9f')]+_0x4830('0xdb')+_0x29f7ee[_0x4830('0xdc')]+_0x4830('0xdd'));let _0x7cc144=$(_0x4830('0xcf'))[_0x4830('0x9d')](_0x475e38);let _0x351616=$(_0x4830('0xd2'))[_0x4830('0x9d')](_0x4830('0xd3'));let _0x426335=$(_0x4830('0xb9'))[_0x4830('0x9d')](_0x4830('0xba'))[_0x4830('0x9d')](getStyleIconClass(_0x29f7ee['Rarity']))[_0x4830('0x8b')](_0x4830('0xba'),getImgUrl(_0x4830('0xbc')+_0x36f610+_0x4830('0xbd')))[_0x4830('0x8b')]('data-id',_0x36f610);let _0x77963=$(_0x4830('0x9c'))[_0x4830('0x9d')](getStyleIconBgClass(_0x29f7ee[_0x4830('0xbb')]))[_0x4830('0x8b')](_0x4830('0xba'),_0x4830('0xde'))['attr']('style',_0x4830('0xdf'))[_0x4830('0x96')](_0x426335);_0x351616[_0x4830('0x96')](_0x77963);let _0xc26dc=$('<td>')[_0x4830('0x9d')](_0x4830('0xe0'));_0xc26dc['append'](_0x29f7ee[_0x4830('0x72')][_0x4830('0xe1')]('<br>'));let _0x46df80=[];for(let _0x39c4f6 in _0x29f7ee[_0x4830('0xe2')]){_0x46df80[_0x4830('0x7b')](_0x29f7ee[_0x4830('0xe2')][_0x39c4f6]);}let _0xbb0774=$(_0x4830('0xd2'))[_0x4830('0x9d')]('small');_0xbb0774[_0x4830('0x96')](_0x46df80[_0x4830('0xe1')](_0x4830('0xe3')));_0x7cc144['append'](_0x351616);_0x7cc144[_0x4830('0x96')](_0xc26dc);_0x7cc144[_0x4830('0x96')](_0xbb0774);$(_0x4830('0xe4'))[_0x4830('0x96')](_0x5b3651)[_0x4830('0x96')](_0x7cc144);}$(_0x4830('0xe5'))[_0x4830('0xe6')]();}function createSkillMasterList(_0x449ff4){for(let _0x104907 in _0x449ff4){if(_0x449ff4[_0x104907][_0x4830('0xb1')]){_0x449ff4[_0x104907][_0x4830('0xe7')]=_0x4830('0xe8');}else if(_0x449ff4[_0x104907][_0x4830('0xe9')]){_0x449ff4[_0x104907][_0x4830('0xe7')]=_0x4830('0xea');}else{_0x449ff4[_0x104907]['FastDelay']='';}_0x449ff4[_0x104907][_0x4830('0xeb')]=_0x449ff4[_0x104907]['KakuseiSozai']+_0x449ff4[_0x104907][_0x4830('0xa1')];if(_0x449ff4[_0x104907][_0x4830('0xb8')]!==undefined){SKILL_MASTER_LIST[_0x4830('0x7b')](_0x449ff4[_0x104907]);}}}function countSkill(_0x25cc78){let _0x171c43={};for(let _0x1b04b7 in optionList){_0x171c43[optionList[_0x1b04b7]]=[];}for(let _0x3c1ca1 in _0x25cc78){let _0x228f07=_0x25cc78[_0x3c1ca1];if(_0x228f07[_0x4830('0xb8')]!==undefined){_0x171c43[_0x4830('0x70')+_0x228f07[_0x4830('0x79')]]['push'](_0x228f07);_0x171c43[optionList[_0x228f07[_0x4830('0x77')]]][_0x4830('0x7b')](_0x228f07);_0x171c43[optionList[_0x228f07['AttackArea']]][_0x4830('0x7b')](_0x228f07);_0x171c43[optionList[_0x228f07['AttackDistance']]][_0x4830('0x7b')](_0x228f07);_0x171c43[optionList[_0x228f07[_0x4830('0xa0')]+_0x228f07[_0x4830('0xa1')]]]['push'](_0x228f07);if(_0x228f07[_0x4830('0xec')]!==''){let _0x431538=_0x228f07[_0x4830('0xec')]['split'](',');for(let _0x5450d6 of _0x431538){console[_0x4830('0xed')](_0x5450d6,optionList[_0x5450d6]);_0x171c43[optionList[_0x5450d6]][_0x4830('0x7b')](_0x228f07);}}_0x171c43[optionList[_0x228f07[_0x4830('0x78')]]][_0x4830('0x7b')](_0x228f07);if(_0x228f07[_0x4830('0xb1')]){_0x171c43[optionList[_0x4830('0xee')]]['push'](_0x228f07);}if(_0x228f07[_0x4830('0xe9')]){_0x171c43[optionList[_0x4830('0xef')]]['push'](_0x228f07);}if(_0x228f07[_0x4830('0xa9')]!=''){_0x171c43[optionList[_0x228f07[_0x4830('0xa9')]]]['push'](_0x228f07);}if(_0x228f07[_0x4830('0xf0')]!=''){_0x171c43[optionList[_0x228f07['DeBuff']]][_0x4830('0x7b')](_0x228f07);}let _0x5ab02c=_0x228f07[_0x4830('0xaf')]?_0x4830('0x11'):_0x4830('0x10');_0x171c43[_0x5ab02c][_0x4830('0x7b')](_0x228f07);let _0x2ae301=_0x228f07[_0x4830('0xa7')];_0x2ae301[_0x4830('0xf1')](',')[_0x4830('0xa8')](function(_0x32a61d){_0x171c43[optionList[_0x32a61d]][_0x4830('0x7b')](_0x228f07);});}}for(let _0x562bb2 in optionList){let _0x3c1ca1=optionList[_0x562bb2];$(_0x4830('0xf2')+_0x3c1ca1)[_0x4830('0x90')](('\x20\x20'+_0x171c43[_0x3c1ca1]['length'])[_0x4830('0xf3')](-0x3));}}function sortSkill(_0x1da9ad){_0x1da9ad[_0x4830('0x93')](function(_0x416cc5,_0x377236){if(_0x416cc5[_0x4830('0x94')]==='-'){return 0x1;}else if(_0x416cc5[_0x4830('0x94')]>_0x377236['SkillIryoku']){return-0x1;}else if(_0x416cc5[_0x4830('0x94')]<_0x377236[_0x4830('0x94')]){return 0x1;}else if(_0x416cc5[_0x4830('0x79')]<_0x377236[_0x4830('0x79')]){return-0x1;}else if(_0x416cc5[_0x4830('0x79')]>_0x377236[_0x4830('0x79')]){return 0x1;}else if(_0x416cc5['AttackAttributes']>_0x377236['AttackAttributes']){return-0x1;}return 0x0;});return _0x1da9ad;}$(function(){var _0x1d5cb2=![];var _0x4647bc=$(_0x4830('0xf4'));_0x4647bc['css'](_0x4830('0xf5'),'-200px');var _0x1d5cb2=![];$(window)[_0x4830('0xf6')](function(){if($(this)[_0x4830('0xf7')]()>0x64){if(_0x1d5cb2==![]){_0x1d5cb2=!![];_0x4647bc['stop']()['animate']({'bottom':'-10px'},0xc8);}}else{if(_0x1d5cb2){_0x1d5cb2=![];_0x4647bc[_0x4830('0xf8')]()[_0x4830('0xc9')]({'bottom':_0x4830('0xf9')},0xc8);}}});_0x4647bc[_0x4830('0x81')](function(){$(_0x4830('0xc8'))[_0x4830('0xc9')]({'scrollTop':$(_0x4830('0xfa'))['offset']()[_0x4830('0xcc')]});return![];});});
