var _0x3b18=['icon_stan','icon_mahi','icon_zzz','icon_konran','icon_kyosenshi','icon_kizetsu','<li>','<a\x20class=\x22toggle\x20menu\x20parent\x22>','name','append','<ul\x20class=\x22inner\x20child\x20child01\x22>','list','replace','<span>','addClass','icon_xs_zokusei','text-nowrap','attr','style','padding-left:30px;','toggle\x20menu','<a\x20class=\x22toggle\x20menu\x22>','</a>','<ul\x20class=\x22inner\x20child\x20child02\x22>','time','size','<li\x20class=\x22abilityName\x22\x20style=\x22','\x22\x20abid=\x22','<p\x20style=\x22text-align:left;float:\x20left;\x20margin-bottom:0px;\x22>','</p>','<p\x20style=\x27text-align:right;\x20margin-bottom:0px;\x27><small>','when','</small></p>','style_icon/','.png','html','</li>','Holders','length','<li\x20class=\x22abilityName\x22\x20abid=\x22','</p><p\x20style=\x27text-align:right;\x27><small>','</small></p></li>','push','children','querySelector','svg','clientWidth','clientHeight','hierarchy','select','transform','.node','__data__','#ability_holder_table','#ability_holder_list','<div>','col-12\x20col-md-6\x20col-lg-4\x20style-bgcolor','<small>','AnotherName','clone','style-skill-window\x20small','display:inline-block;\x20padding:\x2010px\x2020px\x20!important;\x20width:200px;\x20margin:0px;','StyleAbilityIds','data-toggle','data-placement','right','data-html','true','title','<br>','icon_rare_large\x20float-left','icon/icon_','Rarity','<button>','display:inline-block;','[data-toggle=\x22tooltip\x22]','tooltip','.abilityName','#abilty_label','text','Name','next','slideToggle','.container','click','database','html,body','animate','icon_buff_str','icon_buff_vit','icon_buff_dex','icon_buff_agi','icon_buff_int','icon_buff_ai','icon_buff_mi','icon_debuff_vit','icon_debuff_dex','icon_debuff_agi','icon_debuff_int','icon_debuff_mnd','icon_debuff_ai','icon_debuff_mi','icon_doku','icon_kurayami'];(function(_0x48991b,_0x30b2b4){var _0x4a5b12=function(_0x48c91a){while(--_0x48c91a){_0x48991b['push'](_0x48991b['shift']());}};_0x4a5b12(++_0x30b2b4);}(_0x3b18,0xb5));var _0xbcaa=function(_0x3ddda7,_0x5dcc01){_0x3ddda7=_0x3ddda7-0x0;var _0xdcb576=_0x3b18[_0x3ddda7];return _0xdcb576;};var tree;$(document)['on']('click',_0xbcaa('0x0'),function(){let _0x40dd0e=$(this)['attr']('abid');$(_0xbcaa('0x1'))[_0xbcaa('0x2')](ABILITY_MASTER[_0x40dd0e][_0xbcaa('0x3')]);displayAbilityHolder(ABILITY_MASTER[_0x40dd0e]);scrollStyleList();});$(document)['on']('click','.switch\x20.toggle',function(){$(this)['toggleClass']('accordionActive')[_0xbcaa('0x4')]()[_0xbcaa('0x5')](0x12c);});$(function(){$(_0xbcaa('0x6'))['on'](_0xbcaa('0x7'),function(){});init();});async function init(){const _0x342dba=[];initial(ABILITY_TREE);firebase[_0xbcaa('0x8')]()['goOffline']();firebase['database'](appUsers)['goOffline']();}function scrollStyleList(){$(_0xbcaa('0x9'))[_0xbcaa('0xa')]({'scrollTop':$(_0xbcaa('0x1'))['offset']()['top']});}let ABILITY_ICON_LIST={'自身強化(バフ)腕力':_0xbcaa('0xb'),'自身強化(バフ)体力':_0xbcaa('0xc'),'自身強化(バフ)器用さ':_0xbcaa('0xd'),'自身強化(バフ)素早さ':_0xbcaa('0xe'),'自身強化(バフ)知力':_0xbcaa('0xf'),'自身強化(バフ)精神':'icon_buff_mnd','自身強化(バフ)愛':_0xbcaa('0x10'),'自身強化(バフ)魅力':_0xbcaa('0x11'),'敵弱体化(デバフ)腕力':'icon_debuff_str','敵弱体化(デバフ)体力':_0xbcaa('0x12'),'敵弱体化(デバフ)器用さ':_0xbcaa('0x13'),'敵弱体化(デバフ)素早さ':_0xbcaa('0x14'),'敵弱体化(デバフ)知力':_0xbcaa('0x15'),'敵弱体化(デバフ)精神':_0xbcaa('0x16'),'敵弱体化(デバフ)愛':_0xbcaa('0x17'),'敵弱体化(デバフ)魅力':_0xbcaa('0x18'),'毒':_0xbcaa('0x19'),'暗闇':_0xbcaa('0x1a'),'スタン':_0xbcaa('0x1b'),'マヒ':_0xbcaa('0x1c'),'眠り':_0xbcaa('0x1d'),'石化':'icon_sekika','混乱':_0xbcaa('0x1e'),'魅了':'icon_miryo','狂戦士':_0xbcaa('0x1f'),'気絶':_0xbcaa('0x20')};function initial(_0x30573a){for(let _0x2c3730 of _0x30573a){let _0x666064=$(_0xbcaa('0x21'));let _0x4a6cdb=_0xbcaa('0x22')+_0x2c3730[_0xbcaa('0x23')]+'</a>';_0x666064[_0xbcaa('0x24')](_0x4a6cdb);let _0x4a532b=$(_0xbcaa('0x25'));for(let _0xf346bd of _0x2c3730[_0xbcaa('0x26')]){if(_0xf346bd[_0xbcaa('0x23')]!=''){let _0x460777;let _0x3019b4='';if(ABILITY_ICON_LIST[_0x2c3730[_0xbcaa('0x23')]+_0xf346bd[_0xbcaa('0x23')]]!==undefined){_0x3019b4=ABILITY_ICON_LIST[_0x2c3730['name']+_0xf346bd[_0xbcaa('0x23')]];}else if(ABILITY_ICON_LIST[_0xf346bd[_0xbcaa('0x23')]]!==undefined){_0x3019b4=ABILITY_ICON_LIST[_0xf346bd['name']];}else if(ABILITY_ICON_LIST[_0xf346bd[_0xbcaa('0x23')][_0xbcaa('0x27')]('耐性','')]!==undefined){_0x3019b4=ABILITY_ICON_LIST[_0xf346bd[_0xbcaa('0x23')][_0xbcaa('0x27')]('耐性','')];}if(_0x3019b4!==''){let _0x18c383=$(_0xbcaa('0x28'))[_0xbcaa('0x29')](_0xbcaa('0x2a'))[_0xbcaa('0x29')](_0x3019b4)[_0xbcaa('0x29')](_0xbcaa('0x2b'))[_0xbcaa('0x2c')](_0xbcaa('0x2d'),_0xbcaa('0x2e'))['text'](_0xf346bd[_0xbcaa('0x23')]);_0x460777=$('<a>')[_0xbcaa('0x29')](_0xbcaa('0x2f'))[_0xbcaa('0x24')](_0x18c383);}else{_0x460777=_0xbcaa('0x30')+_0xf346bd[_0xbcaa('0x23')]+_0xbcaa('0x31');}let _0x1306c2=$(_0xbcaa('0x21'));_0x1306c2['append'](_0x460777);let _0x1ae790=$(_0xbcaa('0x32'));var _0x317582=0x0;for(let _0x17f19a of _0xf346bd[_0xbcaa('0x26')]){for(let _0x341483 of _0x17f19a[_0xbcaa('0x26')]){let _0x461f76=_0x341483['time']!==undefined&&_0x341483[_0xbcaa('0x33')]!==''&&_0x341483['time']!==null?'\x20'+getTime(_0x341483['time']):'';let _0x17f19a=_0x341483['size']!==undefined&&_0x341483[_0xbcaa('0x34')]!==''&&_0x341483[_0xbcaa('0x34')]!==null?'\x20'+_0x341483['size']:'';let _0x1361b0='\x20('+_0x341483['Holders']['length']+')';let _0x383259=_0x317582++%0x2===0x0?'background-color:aliceblue;':'';let _0x565cc2=_0xbcaa('0x35')+_0x383259+_0xbcaa('0x36')+_0x341483['Id']+'\x22>';_0x565cc2+=_0xbcaa('0x37')+_0x341483[_0xbcaa('0x3')]+_0x1361b0+_0xbcaa('0x38');_0x565cc2+=_0xbcaa('0x39')+_0x341483[_0xbcaa('0x3a')]+_0x461f76+_0x17f19a+_0xbcaa('0x3b');for(let _0x2aece9 of _0x341483['Holders']){let _0x33e53d=STYLE_MASTER[_0x2aece9];if(_0x33e53d===undefined){continue;}let _0x3019b4=$('<button>')[_0xbcaa('0x29')](getStyleIconClass(_0x33e53d['Rarity']))[_0xbcaa('0x2c')](_0xbcaa('0x2d'),getImgUrl(_0xbcaa('0x3c')+_0x2aece9+_0xbcaa('0x3d'))+'width:40px;\x20height:40px;\x20background-size:\x2040px\x20!important;');let _0x2dc46c=$(_0xbcaa('0x28'))['addClass'](getStyleIconBgClass(_0x33e53d['Rarity']))[_0xbcaa('0x24')](_0x3019b4);_0x565cc2+=_0x2dc46c[_0xbcaa('0x3e')]();}_0x565cc2+=_0xbcaa('0x3f');_0x1ae790[_0xbcaa('0x24')](_0x565cc2);}}_0x1306c2[_0xbcaa('0x24')](_0x1ae790);_0x4a532b[_0xbcaa('0x24')](_0x1306c2);}else{for(let _0x3a944e of _0xf346bd['list']){for(let _0x341483 of _0x3a944e['list']){let _0x461f76=_0x341483[_0xbcaa('0x33')]!==undefined&&_0x341483['time']!==''&&_0x341483[_0xbcaa('0x33')]!==null?'\x20'+getTime(_0x341483[_0xbcaa('0x33')]):'';let _0x3a944e=_0x341483['size']!==undefined&&_0x341483[_0xbcaa('0x34')]!==''&&_0x341483[_0xbcaa('0x34')]!==null?'\x20'+_0x341483[_0xbcaa('0x34')]:'';let _0x1361b0='\x20('+_0x341483[_0xbcaa('0x40')][_0xbcaa('0x41')]+')';let _0x565cc2=_0xbcaa('0x42')+_0x341483['Id']+'\x22><p\x20style=\x22text-align:left;float:\x20left;\x22>'+_0x341483[_0xbcaa('0x3')]+_0x1361b0+_0xbcaa('0x43')+_0x341483[_0xbcaa('0x3a')]+_0x461f76+_0x3a944e+_0xbcaa('0x44');_0x4a532b[_0xbcaa('0x24')](_0x565cc2);}}}}_0x666064[_0xbcaa('0x24')](_0x4a532b);$('#sp_skill_tree\x20>\x20ul')[_0xbcaa('0x24')](_0x666064);}}function initialSkillTree(_0x365849){for(let _0x4b248b in _0x365849){let _0x4261f1={'name':_0x4b248b,'children':[]};for(let _0x1a066b in _0x365849[_0x4b248b]){var _0x4e20ef={'name':_0x1a066b,'children':[]};for(let _0xb81444 in _0x365849[_0x4b248b][_0x1a066b]){var _0x50d4e4={'name':_0xb81444,'children':[]};for(let _0x29de86 of _0x365849[_0x4b248b][_0x1a066b][_0xb81444]){let _0x10c5d1=_0x29de86[_0xbcaa('0x3a')];let _0x27a55c=_0x29de86[_0xbcaa('0x33')];let _0x2b1c46=_0x29de86[_0xbcaa('0x3')]+'('+_0x10c5d1;if(_0x29de86[_0xbcaa('0x33')]!==undefined&&_0x27a55c!==''){_0x2b1c46+='/'+_0x27a55c+'('+getTime(_0x27a55c)+')';}_0x2b1c46+=')';_0x50d4e4['children'][_0xbcaa('0x45')]({'name':_0x2b1c46,'id':_0x29de86['Id']});}_0x4e20ef[_0xbcaa('0x46')][_0xbcaa('0x45')](_0x50d4e4);}_0x4261f1[_0xbcaa('0x46')][_0xbcaa('0x45')](_0x4e20ef);}data['children'][_0xbcaa('0x45')](_0x4261f1);}var _0x1e7383=document[_0xbcaa('0x47')](_0xbcaa('0x48'))[_0xbcaa('0x49')];var _0xd8b643=document[_0xbcaa('0x47')](_0xbcaa('0x48'))[_0xbcaa('0x4a')];root=d3[_0xbcaa('0x4b')](data);root['x0']=_0xd8b643/0x2;root['y0']=0x0;tree=d3['tree']()[_0xbcaa('0x34')]([_0xd8b643,_0x1e7383-0xa0]);g=d3[_0xbcaa('0x4c')](_0xbcaa('0x48'))[_0xbcaa('0x24')]('g')[_0xbcaa('0x2c')](_0xbcaa('0x4d'),'translate(80,0)');update(root);$(_0xbcaa('0x4e'))['each'](function(_0x130ede,_0x49c59d){if(_0x130ede>0x0&&_0x130ede<=0x10){toggle(_0x49c59d[_0xbcaa('0x4f')]);update(_0x49c59d[_0xbcaa('0x4f')]);}});}function displayAbilityHolder(_0x23d864){$(_0xbcaa('0x50'))[_0xbcaa('0x3e')]('');$(_0xbcaa('0x51'))[_0xbcaa('0x3e')]('');for(key in _0x23d864['Holders']){let _0x36f84b=_0x23d864[_0xbcaa('0x40')][key];let _0x2aac80=STYLE_MASTER[_0x36f84b];if(_0x2aac80===undefined){continue;}let _0x4a4bbb=$(_0xbcaa('0x52'))[_0xbcaa('0x29')](_0xbcaa('0x53'));let _0x2a1536=$('<div>')[_0xbcaa('0x29')]('darkButton');let _0x533c5d=$(_0xbcaa('0x54'))[_0xbcaa('0x29')](_0xbcaa('0x2b'))[_0xbcaa('0x24')](_0x2aac80[_0xbcaa('0x3')]+_0x2aac80[_0xbcaa('0x55')]);_0x2a1536['append'](_0x533c5d[_0xbcaa('0x56')]());let _0x1f84a0=$('<div>')[_0xbcaa('0x29')](_0xbcaa('0x57'))['attr'](_0xbcaa('0x2d'),_0xbcaa('0x58'));for(let _0x5569c2 in _0x2aac80[_0xbcaa('0x59')]){let _0x4aebf7=ABILITY_MASTER[_0x2aac80[_0xbcaa('0x59')][_0x5569c2]];let _0x2cb9d4=$(_0xbcaa('0x28'))[_0xbcaa('0x24')](_0x5569c2+':'+_0x4aebf7[_0xbcaa('0x3')])['attr'](_0xbcaa('0x5a'),'tooltip')[_0xbcaa('0x2c')](_0xbcaa('0x5b'),_0xbcaa('0x5c'))[_0xbcaa('0x2c')](_0xbcaa('0x5d'),_0xbcaa('0x5e'))['attr'](_0xbcaa('0x5f'),_0x4aebf7['FlavorText'][_0xbcaa('0x27')]('\u3000','<br>'));_0x1f84a0['append'](_0x2cb9d4[_0xbcaa('0x56')]());if(_0x5569c2!==0x1e){_0x1f84a0[_0xbcaa('0x24')](_0xbcaa('0x60'));}}let _0x21cd6d=$('<span>')[_0xbcaa('0x29')](_0xbcaa('0x61'))[_0xbcaa('0x2c')](_0xbcaa('0x2d'),getImgUrl(_0xbcaa('0x62')+_0x2aac80[_0xbcaa('0x63')]+_0xbcaa('0x3d'))+'width:30px;\x20height:30px;\x20background-size:cover;\x20position:absolute;\x20z-index:3;');let _0x28d5f2=$(_0xbcaa('0x64'))[_0xbcaa('0x29')](getStyleIconClass(_0x2aac80[_0xbcaa('0x63')]))[_0xbcaa('0x2c')](_0xbcaa('0x2d'),getImgUrl(_0xbcaa('0x3c')+_0x36f84b+_0xbcaa('0x3d')));let _0x21cf01=$('<span>')[_0xbcaa('0x29')](getStyleIconBgClass(_0x2aac80['Rarity']))[_0xbcaa('0x24')](_0x28d5f2);let _0x337f59=$('<div>')[_0xbcaa('0x2c')]('style',_0xbcaa('0x65'))[_0xbcaa('0x24')](_0x21cd6d)[_0xbcaa('0x24')](_0x21cf01[_0xbcaa('0x56')]());_0x4a4bbb[_0xbcaa('0x24')](_0x2a1536);_0x4a4bbb[_0xbcaa('0x24')](_0x1f84a0);_0x4a4bbb[_0xbcaa('0x24')](_0x337f59);$(_0xbcaa('0x50'))[_0xbcaa('0x24')](_0x4a4bbb);$(_0xbcaa('0x51'))[_0xbcaa('0x24')](_0x21cf01[_0xbcaa('0x56')]());$(_0xbcaa('0x66'))[_0xbcaa('0x67')]();}}