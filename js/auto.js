var _0x2e3d=['append','.filterList','click','.weaponList','addClass','d-none','href','substr','parent','hasClass','filterActive','.sp-slides-container','removeClass','each','toggleClass','.char','show','attr','data-id','text','<span>','char-hashiri','char','dot','dot_mid','style','dot/','DotId','.png','#CHAR_DOT','html','html,body','animate','offset','top','swing','#skillAreaParent','hide','#keishoKaijo','.skillChoice','table#skillArea\x20>\x20tbody\x20*','remove','table#skillArea\x20>\x20tfoot\x20*','.culcAfter','table#culcSummary\x20tbody\x20*','#culcDetail','char-aruku','char-winner','char-selected','Holders','event','clickChar','auto','Name','clickStyle','AnotherName','#culcStart','length','table#skillArea\x20>\x20tfoot','slice','.keishoSkill','children','.floatLeft','#noKeisho','UseBp','table#skillArea\x20tfoot','push','#showJoken','none','clickCalc','%0D%0A','#avgDamage','AutoUseBp','UseCount','isKeisho','\x20発動:','https://twitter.com/intent/tweet?text=','&url=https://nao-romasaga.github.io/auto.html&hashtags=全力オートシミュレータ','.my-twitter-share-button','.switch\x20.toggle','accordionActive','next','slideToggle','#enemy_vit','val','totsu','netsu','rei','rai','you','#taisei_','#type','inArray','mizu','tsuchi','kaze','yami','#vit','zan','.styleChoiceArea','#styleChoice','hasRenki','StyleAbility','練気高揚','練気呼吸','<button>','style_icon/','Rarity','<tr\x20class=\x27keishoSkillTr\x27\x20id=\x27noKeisho\x27><td\x20colspan=5\x20class=\x27text-center\x27>継承技未設定</td></tr>','<td\x20colspan=5\x20class=\x27text-center\x27>継承技未設定</td>','#keisyoSkill','style_cutin/','cutin','\x20width:\x20250px;\x20height:62px;','#skillCutin','SkillIds','assign','table#skillArea\x20tbody','ConsumeBp','.style','opacity_nocheck','indexOf','.kakusei','keishoSkill','removeAttr','<p>','BattleType','icon_xs','icon/','AttackAttributes','split','forEach','Kakusei','join','floatRight','\x20覚醒:','\x20BP:','PowerGrade','SkillIryoku','.kakuseiCheck','data-kakusei','.nowBP','data-bp','skill','kakuseiCheck','floatLeft','kakusei','<td>','\x22\x20data-id=\x22','\x22\x20data-bp=\x22','\x22\x20>','</span>','<br>','<tr>','unshift','isNotUseAuto','AttackArea','ID77973c5','ID777ed23','culcDamage','WeaponType','table#culcSummary\x20tbody','シミュレーション結果','<br>練気高揚(25%)発動時はBPに(+1)と表示されます','<label\x20class=\x22badge\x20badge-pill\x20badge-light\x22\x20style=\x22width:90%\x22>','Turn','<div>','darkButton','keishoSkillArea','random','ID7766685','\x20<small>(',')</small>','<small>ダメージ:','toLocaleString','</small>','\x20>\x20','(+1)','darkButtonShine','</td>','</tr>','<td\x20colspan=5\x20class=\x27text-center\x27\x20id=\x27avgDamage\x27\x20style=\x27font-size:200%\x27>平均ダメージ\x20','round','<td\x20colspan=5\x20class=\x27text-center\x27>練気高揚発動回数\x20=\x20','回</td>','<td\x20colspan=5\x20class=\x27text-center\x27>','合計ダメージ\x20=\x20','<br>合計威力\x20=\x20','#styleRank','腕力:','orgSTR','\x20*\x20','STRBonus','#culcDEX','器用さ:','dex','orgDEX','DEXPer','%\x20+','#culcAGI','素早さ:','agi','#culcAGIDtl','orgAGI','AGIPer','AGIBonus','#culcINT','知力:','int','#culcINTDtl','orgINT','INTBonus','#culcWepon','武器威力/術威力:','wepon','アビリティ\x20ダメージ補正:','ability','#culcMaster','マスターレベル\x20ダメージ補正:','master','#culcMasterDtl','#culcEnemy','敵\x20体力/精神:\x2085\x20属性耐性:0','#charData','通常攻撃','敵単体','ready','Char','Skill','Enemy','quest','name','\x20体:','vit','\x20精:','mnd','<option>'];(function(_0x2f10c2,_0x5f4770){var _0x2d2031=function(_0x33d77c){while(--_0x33d77c){_0x2f10c2['push'](_0x2f10c2['shift']());}};_0x2d2031(++_0x5f4770);}(_0x2e3d,0xe0));var _0x50d9=function(_0x468be7,_0x359af){_0x468be7=_0x468be7-0x0;var _0x5b9fc4=_0x2e3d[_0x468be7];return _0x5b9fc4;};var NORMAL_ATTACK={'Name':_0x50d9('0x0'),'AttackArea':_0x50d9('0x1'),'ConsumeBp':0x0,'AutoUseBp':0x0,'UseBp':0x0,'isNotUseAuto':![],'UseCount':0x0,'isKeisho':0x0,'SkillIryoku':0x7};var BASE_SKILL_LIST=[];var USE_SKILL_LIST=[];var NOW_CHAR={};var NOW_STYLE={};var CHAR_MASTER,STYLE_MASTER=[],SKILL_MASTER;$(document)[_0x50d9('0x2')](function(_0x24e497){readFile(_0x50d9('0x3'),function(_0x3863b6){CHAR_MASTER=_0x3863b6;dispChar(CHAR_MASTER,device);});readFile(_0x50d9('0x4'),function(_0x1b78bc){SKILL_MASTER=_0x1b78bc;});readFile(_0x50d9('0x5'),function(_0x1e0d29){ENEMY_DATA=_0x1e0d29;for(let _0x3973cd in ENEMY_DATA){let _0x53103b=ENEMY_DATA[_0x3973cd];let _0x584b99=_0x53103b[_0x50d9('0x6')]+'\x20'+_0x53103b[_0x50d9('0x7')]+_0x50d9('0x8')+_0x53103b[_0x50d9('0x9')]+_0x50d9('0xa')+_0x53103b[_0x50d9('0xb')];$option=_0x24e497(_0x50d9('0xc'),{'value':_0x3973cd,'text':_0x584b99});_0x24e497('#enemy_vit')[_0x50d9('0xd')]($option);}});initialHide();setSlider();_0x24e497(_0x50d9('0xe'))[_0x50d9('0xf')](function(){_0x24e497(_0x50d9('0x10'))[_0x50d9('0x11')](_0x50d9('0x12'));let _0x390aa0=_0x24e497(this)['attr'](_0x50d9('0x13'))[_0x50d9('0x14')](0x1);if(_0x24e497(this)[_0x50d9('0x15')]()[_0x50d9('0x16')](_0x50d9('0x17'))){_0x24e497(_0x50d9('0x18'))[_0x50d9('0x19')](_0x50d9('0x12'));_0x24e497(_0x50d9('0xe'))[_0x50d9('0x1a')](function(){_0x24e497(this)[_0x50d9('0x15')]()[_0x50d9('0x19')](_0x50d9('0x17'));});}else{_0x24e497(_0x50d9('0x18'))[_0x50d9('0x11')](_0x50d9('0x12'));_0x24e497('#_'+_0x390aa0)[_0x50d9('0x19')](_0x50d9('0x12'));_0x24e497(_0x50d9('0xe'))[_0x50d9('0x1a')](function(){_0x24e497(this)[_0x50d9('0x15')]()[_0x50d9('0x19')](_0x50d9('0x17'));});_0x24e497(this)[_0x50d9('0x15')]()[_0x50d9('0x1b')](_0x50d9('0x17'));}});_0x24e497(document)['on'](_0x50d9('0xf'),_0x50d9('0x1c'),async function(){_0x24e497('#charData')[_0x50d9('0x1d')]();let _0x4ea802=_0x24e497(this)[_0x50d9('0x1e')](_0x50d9('0x1f'));NOW_CHAR=CHAR_MASTER[_0x4ea802];_0x24e497('#CHAR_NAME')[_0x50d9('0x20')](NOW_CHAR['Name']);let _0x4999d8=_0x24e497(_0x50d9('0x21'))[_0x50d9('0x11')](_0x50d9('0x22'))[_0x50d9('0x11')](_0x50d9('0x23'))[_0x50d9('0x11')](_0x50d9('0x24'))['addClass'](_0x50d9('0x25'))['attr'](_0x50d9('0x26'),getImgUrl(_0x50d9('0x27')+NOW_CHAR[_0x50d9('0x28')]+_0x50d9('0x29')));_0x24e497(_0x50d9('0x2a'))[_0x50d9('0x2b')]('');_0x24e497(_0x50d9('0x2a'))[_0x50d9('0xd')](_0x4999d8);_0x24e497(_0x50d9('0x2c'))[_0x50d9('0x2d')]({'scrollTop':_0x24e497(_0x50d9('0x18'))[_0x50d9('0x2e')]()[_0x50d9('0x2f')]},0x1f4,_0x50d9('0x30'));_0x24e497(_0x50d9('0x31'))[_0x50d9('0x32')]();_0x24e497('#culcStart')['hide']();_0x24e497(_0x50d9('0x33'))[_0x50d9('0x32')]();_0x24e497(_0x50d9('0x34'))['html']('');_0x24e497(_0x50d9('0x35'))[_0x50d9('0x36')]();_0x24e497(_0x50d9('0x37'))[_0x50d9('0x36')]();_0x24e497('#keisyoSkill')[_0x50d9('0x2b')]('');_0x24e497(_0x50d9('0x38'))[_0x50d9('0x32')]();_0x24e497(_0x50d9('0x39'))[_0x50d9('0x36')]();_0x24e497(_0x50d9('0x3a'))['html']('');_0x24e497('.char-selected')['each'](function(_0x2ac6cd,_0x459314){_0x24e497(this)[_0x50d9('0x19')]('char-winner');_0x24e497(this)['addClass'](_0x50d9('0x3b'));});_0x24e497(this)[_0x50d9('0x19')](_0x50d9('0x3b'));_0x24e497(this)['addClass'](_0x50d9('0x3c'))[_0x50d9('0x11')](_0x50d9('0x3d'))[_0x50d9('0x11')](_0x50d9('0x24'));await displayStyleList(_0x4ea802);let _0x2fea17=NOW_CHAR[_0x50d9('0x3e')][0x0];_0x57286e(_0x2fea17);gtag(_0x50d9('0x3f'),_0x50d9('0x40'),{'event_category':_0x50d9('0x41'),'event_label':NOW_CHAR[_0x50d9('0x42')],'value':0x1});});_0x24e497(document)['on'](_0x50d9('0xf'),'.style',function(){let _0x59d1bc=_0x24e497(this)['attr'](_0x50d9('0x1f'));_0x57286e(_0x59d1bc);gtag(_0x50d9('0x3f'),_0x50d9('0x43'),{'event_category':_0x50d9('0x41'),'event_label':NOW_STYLE[_0x50d9('0x42')]+NOW_STYLE[_0x50d9('0x44')],'value':0x1});});async function _0x57286e(_0x5e51ba){_0x24e497(_0x50d9('0x31'))[_0x50d9('0x1d')]();_0x24e497(_0x50d9('0x45'))[_0x50d9('0x1d')]();if(NOW_CHAR['Holders'][_0x50d9('0x46')]>0x1){_0x24e497(_0x50d9('0x33'))[_0x50d9('0x1d')]();}_0x24e497('.skillChoice')[_0x50d9('0x2b')]('');_0x24e497(_0x50d9('0x35'))[_0x50d9('0x36')]();_0x24e497('table#skillArea\x20>\x20tfoot\x20*')['remove']();_0x24e497(_0x50d9('0x39'))['remove']();NOW_STYLE=await getStyleInfo(_0x5e51ba);displaySkillTable(_0x5e51ba);}_0x24e497(document)['on'](_0x50d9('0xf'),_0x50d9('0x33'),function(){_0x24e497('#noKeisho')[_0x50d9('0x1d')]();_0x24e497(_0x50d9('0x47'))[_0x50d9('0x2b')]('');USE_SKILL_LIST=BASE_SKILL_LIST[_0x50d9('0x48')]();});_0x24e497(document)['on'](_0x50d9('0xf'),_0x50d9('0x49'),function(){_0x24e497('#x')[_0x50d9('0x36')]();_0x24e497(this)[_0x50d9('0x4a')](_0x50d9('0x4b'))[_0x50d9('0xd')]('<span\x20id=\x27x\x27\x20class=\x27icon_keisho_e\x27></span>');_0x24e497(_0x50d9('0x4c'))[_0x50d9('0x32')]();_0x24e497(_0x50d9('0x47'))[_0x50d9('0x2b')]('');let _0x261327=Object['assign']({},SKILL_MASTER[_0x24e497(this)[_0x50d9('0x1e')](_0x50d9('0x1f'))]);_0x261327['isKeisho']=!![];_0x261327[_0x50d9('0x4d')]=_0x261327['ConsumeBp'];addSkillArea(_0x261327,_0x50d9('0x4e'));USE_SKILL_LIST=BASE_SKILL_LIST[_0x50d9('0x48')]();USE_SKILL_LIST[_0x50d9('0x4f')](_0x261327);});_0x24e497(_0x50d9('0x50'))[_0x50d9('0xf')](function(){gtag(_0x50d9('0x3f'),'showJoken',{'event_category':'auto','event_label':_0x50d9('0x51'),'value':0x1});});_0x24e497(_0x50d9('0x45'))[_0x50d9('0xf')](function(){gtag(_0x50d9('0x3f'),_0x50d9('0x52'),{'event_category':_0x50d9('0x41'),'event_label':NOW_STYLE[_0x50d9('0x42')]+NOW_STYLE[_0x50d9('0x44')],'value':0x1});let _0x3805da=displayResult();_0x24e497(_0x50d9('0x2c'))['animate']({'scrollTop':_0x24e497(_0x50d9('0x45'))[_0x50d9('0x2e')]()[_0x50d9('0x2f')]},0x1f4,_0x50d9('0x30'));let _0x4e9cb9=_0x50d9('0x53');let _0x4ef454=NOW_STYLE[_0x50d9('0x42')]+'\x20'+NOW_STYLE['Rarity']+'\x20'+NOW_STYLE[_0x50d9('0x44')]+_0x4e9cb9;_0x4ef454+=''+_0x24e497(_0x50d9('0x54'))[_0x50d9('0x20')]()+_0x4e9cb9;for(let _0xcf26db of _0x3805da){if(_0xcf26db['Id']=='0'){continue;}let _0x320d1b=Number(_0xcf26db['ConsumeBp'])-Number(_0xcf26db[_0x50d9('0x55')]);let _0x3200e6=_0xcf26db[_0x50d9('0x56')];let _0xf540f7='';if(_0xcf26db[_0x50d9('0x57')]){_0xf540f7='[継承]';}_0x4ef454+='・'+_0xcf26db['Name']+_0xf540f7+'\x20覚醒:'+_0x320d1b+_0x50d9('0x58')+_0x3200e6+_0x4e9cb9;}let _0x33fd5f=_0x50d9('0x59')+_0x4ef454+_0x50d9('0x5a');_0x24e497(_0x50d9('0x5b'))[_0x50d9('0x1e')](_0x50d9('0x13'),_0x33fd5f);});_0x24e497(_0x50d9('0x5c'))[_0x50d9('0xf')](function(){_0x24e497(this)['toggleClass'](_0x50d9('0x5d'))[_0x50d9('0x5e')]()[_0x50d9('0x5f')](0x12c);});_0x24e497('#enemy_vit')['change'](function(){let _0xae23c3=_0x24e497(_0x50d9('0x60'))[_0x50d9('0x61')]();if(_0xae23c3==='x'){for(let _0x300be5 of['zan','da',_0x50d9('0x62'),_0x50d9('0x63'),_0x50d9('0x64'),_0x50d9('0x65'),'in',_0x50d9('0x66')]){setTaisei(_0x24e497(_0x50d9('0x67')+_0x300be5),0x0);}return;}let _0x4e26a5=ENEMY_DATA[_0xae23c3];type=_0x24e497(_0x50d9('0x68'))[_0x50d9('0x61')]();if(_0x24e497[_0x50d9('0x69')](type,['hi',_0x50d9('0x6a'),_0x50d9('0x6b'),_0x50d9('0x6c'),'hikari',_0x50d9('0x6d')])>-0x1){_0x24e497(_0x50d9('0x6e'))[_0x50d9('0x61')](_0x4e26a5[_0x50d9('0xb')]);}else{_0x24e497(_0x50d9('0x6e'))[_0x50d9('0x61')](_0x4e26a5[_0x50d9('0x9')]);}for(let _0x1dae7d of[_0x50d9('0x6f'),'da','totsu',_0x50d9('0x63'),_0x50d9('0x64'),'rai','in','you']){setTaisei(_0x24e497(_0x50d9('0x67')+_0x1dae7d),_0x4e26a5[_0x1dae7d]);}culc();});});async function displayStyleList(_0x545a3d){$(_0x50d9('0x70'))[_0x50d9('0x1d')]();$(_0x50d9('0x71'))['html']('');let _0x200b2b=CHAR_MASTER[_0x545a3d];for(let _0x4ad154 of _0x200b2b[_0x50d9('0x3e')]){let _0x7e895a=await getStyleInfo(_0x4ad154);_0x7e895a[_0x50d9('0x72')]=![];for(let _0x4959a4 in _0x7e895a[_0x50d9('0x73')]){if(_0x7e895a[_0x50d9('0x73')][_0x4959a4]===_0x50d9('0x74')||_0x7e895a[_0x50d9('0x73')][_0x4959a4]===_0x50d9('0x75')){_0x7e895a['hasRenki']=!![];}}let _0x38bff5=$(_0x50d9('0x76'))[_0x50d9('0x11')](_0x50d9('0x26'))[_0x50d9('0x11')](getStyleIconClass(_0x7e895a['Rarity']))[_0x50d9('0x1e')](_0x50d9('0x26'),getImgUrl(_0x50d9('0x77')+_0x4ad154+_0x50d9('0x29')))[_0x50d9('0x1e')](_0x50d9('0x1f'),_0x4ad154);let _0x15a065=$(_0x50d9('0x21'))['addClass'](getStyleIconBgClass(_0x7e895a[_0x50d9('0x78')]))[_0x50d9('0xd')](_0x38bff5);$(_0x50d9('0x71'))[_0x50d9('0xd')](_0x15a065);}}var noKeishoTr=_0x50d9('0x79');var noKeishoTd=_0x50d9('0x7a');async function displaySkillTable(_0x5c875a){$(_0x50d9('0x34'))[_0x50d9('0x2b')]('');$(_0x50d9('0x35'))['remove']();$(_0x50d9('0x7b'))[_0x50d9('0x2b')]('');BASE_SKILL_LIST=[];kakuseiData={};let _0x14414e=await getStyleInfo(_0x5c875a);let _0x387230=Object['assign']({},_0x14414e);let _0x3c3e8e=getImgUrl(_0x50d9('0x7c')+_0x5c875a+'.png');let _0x2f1bcd=$(_0x50d9('0x21'))[_0x50d9('0x11')](_0x50d9('0x7d'))[_0x50d9('0x1e')](_0x50d9('0x26'),_0x3c3e8e+_0x50d9('0x7e'));$(_0x50d9('0x7f'))[_0x50d9('0xd')](_0x2f1bcd);for(let _0x506fcf of _0x387230[_0x50d9('0x80')]){let _0x27cd3f=Object[_0x50d9('0x81')]({},SKILL_MASTER[_0x506fcf]);_0x27cd3f[_0x50d9('0x57')]=![];addSkillArea(_0x27cd3f,_0x50d9('0x82'));_0x27cd3f[_0x50d9('0x4d')]=_0x27cd3f[_0x50d9('0x83')];BASE_SKILL_LIST[_0x50d9('0x4f')](_0x27cd3f);}$(_0x50d9('0x82'))[_0x50d9('0xd')](noKeishoTr);USE_SKILL_LIST=BASE_SKILL_LIST[_0x50d9('0x48')]();let _0x2d7862=[];$(_0x50d9('0x84'))['each'](async function(){let _0x564148=$(this)[_0x50d9('0x1e')](_0x50d9('0x1f'));$(this)[_0x50d9('0x15')]()['addClass'](_0x50d9('0x85'));if(_0x5c875a===_0x564148){$(this)[_0x50d9('0x15')]()[_0x50d9('0x19')](_0x50d9('0x85'));return;}let _0x430bf5=await getStyleInfo(_0x564148);for(let _0x47821e of _0x430bf5[_0x50d9('0x80')]){if(_0x2d7862[_0x50d9('0x86')](_0x47821e)>-0x1){continue;}_0x2d7862[_0x50d9('0x4f')](_0x47821e);let _0x61ec97=SKILL_MASTER[_0x47821e];if($(_0x50d9('0x87')+_0x47821e)[_0x50d9('0x46')]===0x0){let _0x291344=kakuseiLabel(_0x61ec97);$(_0x50d9('0x7b'))['append'](_0x291344);}}});}function kakuseiLabel(_0x36aeb0){let _0x42a7a4=$('<button>')[_0x50d9('0x11')]('skill')['addClass'](_0x50d9('0x88'));_0x42a7a4[_0x50d9('0x89')]('id')[_0x50d9('0x1e')](_0x50d9('0x1f'),_0x36aeb0['Id']);let _0x1b2b4d=$(_0x50d9('0x8a'))['addClass']('floatLeft');let _0x25c181=ICON_LIST[_0x36aeb0[_0x50d9('0x8b')]];let _0xf58579=$(_0x50d9('0x21'))[_0x50d9('0x11')](_0x50d9('0x8c'))[_0x50d9('0x20')]('\u3000');_0xf58579[_0x50d9('0x1e')]('style',getImgUrl(_0x50d9('0x8d')+_0x25c181+_0x50d9('0x29')));$(_0x1b2b4d)[_0x50d9('0xd')](_0xf58579);_0x36aeb0[_0x50d9('0x8e')][_0x50d9('0x8f')](',')[_0x50d9('0x90')](function(_0x2a4ede){let _0xf58579=$('<span>')[_0x50d9('0x11')](_0x50d9('0x8c'))[_0x50d9('0x20')]('\u3000');_0xf58579[_0x50d9('0x1e')](_0x50d9('0x26'),getImgUrl(_0x50d9('0x8d')+ICON_LIST[_0x2a4ede]+_0x50d9('0x29')));$(_0x1b2b4d)[_0x50d9('0xd')](_0xf58579);});$(_0x1b2b4d)[_0x50d9('0xd')](_0x36aeb0[_0x50d9('0x42')]);$(_0x1b2b4d)[_0x50d9('0xd')]('(');let _0x14ccec=[];for(let _0x80c7e6=0x1;_0x80c7e6<=_0x36aeb0[_0x50d9('0x91')];_0x80c7e6++){_0x14ccec[_0x50d9('0x4f')]('◇');}$(_0x1b2b4d)[_0x50d9('0xd')](_0x14ccec[_0x50d9('0x92')]('\x20'));$(_0x1b2b4d)[_0x50d9('0xd')](')');let _0x11df02=$(_0x50d9('0x8a'))[_0x50d9('0x11')](_0x50d9('0x93'));$(_0x11df02)[_0x50d9('0xd')](_0x50d9('0x94')+_0x36aeb0[_0x50d9('0x91')]);$(_0x11df02)['append'](_0x50d9('0x95')+_0x36aeb0[_0x50d9('0x83')]);$(_0x11df02)[_0x50d9('0xd')]('\x20'+_0x36aeb0[_0x50d9('0x96')]+'('+_0x36aeb0[_0x50d9('0x97')]+')');_0x42a7a4['append'](_0x1b2b4d)[_0x50d9('0xd')](_0x11df02);return _0x42a7a4;}var kakuseiData={};$(document)['on'](_0x50d9('0xf'),_0x50d9('0x98'),function(){let _0x102463=$(this)[_0x50d9('0x1e')](_0x50d9('0x1f'));let _0x242cba=Number($(this)[_0x50d9('0x1e')](_0x50d9('0x99')));if(kakuseiData[_0x102463]===_0x242cba){_0x242cba=0x0;}kakuseiData[_0x102463]=_0x242cba;let _0x524988=$(_0x50d9('0x9a')+_0x102463)[_0x50d9('0x1e')](_0x50d9('0x9b'));_0x524988-=_0x242cba;$(_0x50d9('0x9a')+_0x102463)['html'](_0x524988);$('.kakusei'+_0x102463)['each'](function(){let _0x24cffc=$(this)[_0x50d9('0x1e')]('data-kakusei');if(_0x24cffc<=_0x242cba){$(this)[_0x50d9('0x2b')]('◆');}else{$(this)['html']('◇');}});for(let _0x41b607 in USE_SKILL_LIST){let _0x1d9b8f=USE_SKILL_LIST[_0x41b607];_0x1d9b8f[_0x50d9('0x4d')]=Number($(_0x50d9('0x9a')+_0x1d9b8f['Id'])[_0x50d9('0x20')]());}});function addSkillArea(_0x6a5131,_0x31f5ab){let _0x1fd2e7=device==='sp'?0x14:0x23;let _0x3bb6c8=$(_0x50d9('0x21'))[_0x50d9('0x11')](_0x50d9('0x9c'))['attr'](_0x50d9('0x1f'),_0x6a5131['Id'])[_0x50d9('0x2b')](_0x6a5131[_0x50d9('0x42')]);let _0x3dad9a=[];for(let _0x5c2251=0x1;_0x5c2251<=_0x6a5131[_0x50d9('0x91')];_0x5c2251++){let _0x17d091=$(_0x50d9('0x76'))[_0x50d9('0x11')](_0x50d9('0x9d'))[_0x50d9('0x11')](_0x50d9('0x9e'))['addClass'](_0x50d9('0x9f')+_0x6a5131['Id'])[_0x50d9('0x1e')](_0x50d9('0x1f'),_0x6a5131['Id'])[_0x50d9('0x1e')](_0x50d9('0x99'),_0x5c2251);$(_0x17d091)[_0x50d9('0x2b')]('◇');_0x3dad9a[_0x50d9('0x4f')](_0x17d091);}let _0x4cdf03=$(_0x50d9('0x21'))['addClass'](_0x50d9('0x8c'))[_0x50d9('0x20')]('\u3000')[_0x50d9('0x1e')](_0x50d9('0x26'),getImgUrl(_0x50d9('0x8d')+ICON_LIST[_0x6a5131[_0x50d9('0x8b')]]+_0x50d9('0x29')));let _0x12f6ca=$(_0x50d9('0xa0'))['append'](_0x4cdf03);_0x6a5131[_0x50d9('0x8e')][_0x50d9('0x8f')](',')[_0x50d9('0x90')](function(_0x3f0770){let _0x4c4768=$('<span>')[_0x50d9('0x11')]('icon_xs')[_0x50d9('0x20')]('\u3000')[_0x50d9('0x1e')](_0x50d9('0x26'),getImgUrl('icon/'+ICON_LIST[_0x3f0770]+_0x50d9('0x29')));_0x12f6ca[_0x50d9('0xd')](_0x4c4768);});let _0x4020fb=$(_0x50d9('0xa0'))[_0x50d9('0xd')](_0x3bb6c8);let _0x1699a0=$(_0x50d9('0xa0'));for(let _0x52bc25 of _0x3dad9a){_0x1699a0[_0x50d9('0xd')](_0x52bc25);}let _0x81be95='';_0x81be95+='<span\x20class=\x22nowBP'+_0x6a5131['Id']+_0x50d9('0xa1')+_0x6a5131['Id']+_0x50d9('0xa2')+_0x6a5131[_0x50d9('0x83')]+_0x50d9('0xa3')+_0x6a5131[_0x50d9('0x83')]+_0x50d9('0xa4');_0x81be95+=_0x50d9('0xa5');let _0x462765=$(_0x50d9('0xa0'))[_0x50d9('0xd')](_0x81be95);let _0xd54a7f=$(_0x50d9('0xa0'))[_0x50d9('0xd')](_0x6a5131[_0x50d9('0x96')]+'('+_0x6a5131[_0x50d9('0x97')]+')');let _0x318051=$(_0x50d9('0xa6'))['append'](_0x12f6ca)[_0x50d9('0xd')](_0x4020fb)[_0x50d9('0xd')](_0x1699a0)[_0x50d9('0xd')](_0x462765)[_0x50d9('0xd')](_0xd54a7f);$(_0x31f5ab)[_0x50d9('0xd')](_0x318051);}function displayResult(){let _0x489c92=USE_SKILL_LIST[_0x50d9('0x48')]();_0x489c92[_0x50d9('0xa7')](Object[_0x50d9('0x81')]({},NORMAL_ATTACK));rewriteBP(_0x489c92);setSkillDamage(_0x489c92);culcAutoMode(_0x489c92);return _0x489c92;}var dummy={'Id':0x0,'AttackArea':'自身','UseBp':0x63,'AutoUseBp':0x63};function rewriteBP(_0x5ee4c8){if($(_0x50d9('0x47'))[_0x50d9('0x2b')]()===''){_0x5ee4c8[_0x50d9('0x4f')](Object[_0x50d9('0x81')]({},dummy));}let _0x5aa714=_0x5ee4c8[0x1];let _0x177bed=_0x5ee4c8[0x2];let _0x25ce2d=_0x5ee4c8[0x3];let _0x5e50af=_0x5ee4c8[0x4];_0x5aa714[_0x50d9('0xa8')]=isNotUseAuto(_0x5aa714);_0x177bed[_0x50d9('0xa8')]=isNotUseAuto(_0x177bed);_0x25ce2d[_0x50d9('0xa8')]=isNotUseAuto(_0x25ce2d);_0x5e50af[_0x50d9('0xa8')]=isNotUseAuto(_0x5e50af);_0x5aa714[_0x50d9('0x55')]=_0x5aa714[_0x50d9('0xa8')]?0x63:_0x5aa714[_0x50d9('0x4d')];_0x177bed[_0x50d9('0x55')]=_0x177bed[_0x50d9('0xa8')]?0x63:_0x177bed[_0x50d9('0x4d')];_0x25ce2d[_0x50d9('0x55')]=_0x25ce2d[_0x50d9('0xa8')]?0x63:_0x25ce2d['UseBp'];_0x5e50af[_0x50d9('0x55')]=_0x5e50af['isNotUseAuto']?0x63:_0x5e50af[_0x50d9('0x4d')];if(_0x5e50af['AutoUseBp']===_0x25ce2d[_0x50d9('0x55')]){_0x25ce2d[_0x50d9('0x55')]=0x63;}if(_0x5e50af[_0x50d9('0x55')]===_0x177bed[_0x50d9('0x55')]){_0x177bed[_0x50d9('0x55')]=0x63;}if(_0x5e50af['AutoUseBp']===_0x5aa714['AutoUseBp']){_0x5aa714[_0x50d9('0x55')]=0x63;}if(_0x5aa714[_0x50d9('0x55')]===_0x177bed['AutoUseBp']){_0x177bed['AutoUseBp']=0x63;}else if(_0x177bed[_0x50d9('0x55')]===_0x25ce2d[_0x50d9('0x55')]){_0x25ce2d['AutoUseBp']=0x63;}_0x5aa714[_0x50d9('0x56')]=0x0;_0x177bed[_0x50d9('0x56')]=0x0;_0x25ce2d[_0x50d9('0x56')]=0x0;_0x5e50af['UseCount']=0x0;_0x5ee4c8['sort']((_0x6170c3,_0x103ab9)=>{if(_0x6170c3[_0x50d9('0x4d')]>_0x103ab9[_0x50d9('0x4d')]){return-0x1;}else if(_0x6170c3['UseBp']===_0x103ab9[_0x50d9('0x4d')]&&_0x6170c3[_0x50d9('0x57')]>_0x103ab9[_0x50d9('0x57')]){return-0x1;}return 0x1;});}function isNotUseAuto(_0x59d670){if(_0x59d670[_0x50d9('0xa9')]==='味方単体'||_0x59d670[_0x50d9('0xa9')]==='自身'){return!![];}if(_0x59d670['Id']===_0x50d9('0xaa')||_0x59d670['Id']===_0x50d9('0xab')){return!![];}return![];}var CULC_DAMAGE_PARAM={};function setSkillDamage(_0x558113){for(let _0x3d1ef5 of _0x558113){CULC_DAMAGE_PARAM=culcSkillDamageWithStyle(NOW_CHAR,0x28,NOW_STYLE,0x32,_0x3d1ef5,0x63,0x1c,5.5,0x55,0x0);_0x3d1ef5[_0x50d9('0xac')]=CULC_DAMAGE_PARAM[_0x50d9('0xac')];}}function culcAutoMode(_0x45624c){let _0xba9012=NOW_STYLE[_0x50d9('0xad')];$(_0x50d9('0x38'))[_0x50d9('0x1d')]();$(_0x50d9('0x39'))['remove']();$('#culcDetail')[_0x50d9('0x2b')]('');let _0x5e7c4a=$(_0x50d9('0xae'));if(_0x45624c[0x0]['Id']===0x0){_0x45624c=_0x45624c[_0x50d9('0x48')](0x1);}let _0x224ba3=$('#culcDetail');let _0x397da7=_0x50d9('0xaf');let _0x5d40b6=0x0;if(NOW_STYLE['hasRenki']){_0x397da7+=_0x50d9('0xb0');_0x5d40b6=0x1;}_0x224ba3[_0x50d9('0xd')](_0x50d9('0xb1')+_0x397da7+'</label>');var _0x48dcc5=0x7;var _0x2181ae=0x14;var _0x2f1d68=0x0;var _0x219684=[0x0,0x0,0x0,_0x5d40b6];let _0x5daaa3=device==='sp'?'T':_0x50d9('0xb2');for(let _0x522e1d=0x1;_0x522e1d<=_0x2181ae;_0x522e1d++){let _0x5830d1=$(_0x50d9('0xb3'))[_0x50d9('0x11')](_0x50d9('0xb4'))['addClass'](_0x50d9('0xb5'));let _0x184914=$(_0x50d9('0x8a'))[_0x50d9('0x11')]('floatLeft');let _0x3c6942=$(_0x50d9('0x8a'))['addClass'](_0x50d9('0x93'));var _0x21d7f2=Math['floor'](Math[_0x50d9('0xb6')]()*_0x219684['length']);_0x48dcc5+=0x3;let _0x346c84=_0x48dcc5;let _0x23fb88='';var _0x2b14cf=0x63;var _0x365b60={};for(let _0x21e3bd of _0x45624c){if(['ID77afa6a',_0x50d9('0xb7'),_0x50d9('0xb7')][_0x50d9('0x86')](_0x21e3bd['Id'])>-0x1){_0x2b14cf=_0x21e3bd[_0x50d9('0x4d')];_0x365b60=_0x21e3bd;}}var _0x466279=![];for(let _0x442e3d of _0x45624c){if(_0x442e3d===_0x365b60){continue;}if(_0x48dcc5>=_0x2b14cf&&!_0x466279){_0x23fb88=_0x50d9('0xb8')+_0x365b60[_0x50d9('0x42')]+')</small>';_0x365b60[_0x50d9('0x56')]++;_0x466279=!![];}else if(_0x442e3d[_0x50d9('0xa8')]&&_0x48dcc5>=_0x442e3d[_0x50d9('0x4d')]){_0x23fb88='\x20<small>('+_0x442e3d[_0x50d9('0x42')]+_0x50d9('0xb9');_0x442e3d[_0x50d9('0x56')]++;}if(_0x48dcc5>=_0x442e3d[_0x50d9('0x55')]){_0x48dcc5-=_0x442e3d[_0x50d9('0x55')];_0x184914[_0x50d9('0xd')](_0x522e1d+_0x5daaa3);if(device!=='sp'){if(_0x442e3d[_0x50d9('0x8e')]===undefined){_0x442e3d[_0x50d9('0x8b')]=_0xba9012;_0x442e3d[_0x50d9('0x8e')]=WEPON_ATTR[_0xba9012];}let _0x2c2bbe=$(_0x50d9('0x21'))[_0x50d9('0x11')](_0x50d9('0x8c'))['text']('\u3000')[_0x50d9('0x1e')](_0x50d9('0x26'),getImgUrl(_0x50d9('0x8d')+ICON_LIST[_0x442e3d[_0x50d9('0x8b')]]+_0x50d9('0x29')));_0x184914[_0x50d9('0xd')](_0x2c2bbe);_0x442e3d[_0x50d9('0x8e')]['split'](',')[_0x50d9('0x90')](function(_0x2006b5){let _0x5dc53b=$(_0x50d9('0x21'))[_0x50d9('0x11')](_0x50d9('0x8c'))[_0x50d9('0x20')]('\u3000')['attr'](_0x50d9('0x26'),getImgUrl(_0x50d9('0x8d')+ICON_LIST[_0x2006b5]+_0x50d9('0x29')));_0x184914[_0x50d9('0xd')](_0x5dc53b);});}_0x184914[_0x50d9('0xd')]('\x20'+_0x442e3d[_0x50d9('0x42')]);if(device!=='sp'){_0x184914['append']('\x20消費BP:'+_0x442e3d[_0x50d9('0x55')]);}_0x184914[_0x50d9('0xd')](_0x23fb88);_0x3c6942[_0x50d9('0xd')](_0x50d9('0xba')+_0x442e3d[_0x50d9('0xac')][_0x50d9('0xbb')]()+_0x50d9('0xbc'));_0x3c6942['append'](_0x50d9('0x95')+_0x346c84+_0x50d9('0xbd'));_0x442e3d[_0x50d9('0x56')]++;break;}}if(_0x219684[_0x21d7f2]>0x0){_0x2f1d68++;_0x48dcc5++;_0x3c6942['append'](_0x48dcc5+_0x50d9('0xbe'));_0x5830d1[_0x50d9('0x19')](_0x50d9('0xb4'))['addClass'](_0x50d9('0xbf'));}else{_0x3c6942[_0x50d9('0xd')](_0x48dcc5);}_0x5830d1[_0x50d9('0xd')](_0x184914)['append'](_0x3c6942);_0x224ba3[_0x50d9('0xd')](_0x5830d1);}let _0x32a3e0=0x0;let _0x1d5603=0x0;for(let _0x471e28 of _0x45624c){_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xa6'));let _0x23d570=$(_0x50d9('0xa0'));if(device!=='sp'&&_0x471e28['AttackAttributes']!==undefined){let _0x2c2bbe=$(_0x50d9('0x21'))['addClass'](_0x50d9('0x8c'))[_0x50d9('0x20')]('\u3000')[_0x50d9('0x1e')](_0x50d9('0x26'),getImgUrl('icon/'+ICON_LIST[_0x471e28['BattleType']]+'.png'));_0x23d570[_0x50d9('0xd')](_0x2c2bbe);_0x471e28['AttackAttributes'][_0x50d9('0x8f')](',')[_0x50d9('0x90')](function(_0x1cf27a){let _0x5a67fa=$(_0x50d9('0x21'))[_0x50d9('0x11')](_0x50d9('0x8c'))['text']('\u3000')['attr'](_0x50d9('0x26'),getImgUrl('icon/'+ICON_LIST[_0x1cf27a]+_0x50d9('0x29')));_0x23d570[_0x50d9('0xd')](_0x5a67fa);});}_0x23d570[_0x50d9('0xd')](_0x471e28[_0x50d9('0x42')]);_0x5e7c4a[_0x50d9('0xd')](_0x23d570);_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xa0')+_0x471e28[_0x50d9('0x4d')]+_0x50d9('0xc0'));_0x5e7c4a['append'](_0x50d9('0xa0')+_0x471e28[_0x50d9('0x56')]+_0x50d9('0xc0'));let _0x2cc427=0x0;if(_0x471e28[_0x50d9('0x55')]!==0x63){_0x2cc427=_0x471e28[_0x50d9('0x97')]*_0x471e28[_0x50d9('0x56')];_0x32a3e0+=_0x2cc427;_0x1d5603+=_0x471e28[_0x50d9('0xac')]*Number(_0x471e28[_0x50d9('0x56')]);}_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xa0')+_0x2cc427+_0x50d9('0xc0'));_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xc1'));}_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xa6'));_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xc2')+Math[_0x50d9('0xc3')](_0x1d5603/_0x2181ae)[_0x50d9('0xbb')]()+_0x50d9('0xc0'));_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xc1'));if(NOW_STYLE['hasRenki']){_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xa6'));_0x5e7c4a['append'](_0x50d9('0xc4')+_0x2f1d68+_0x50d9('0xc5'));_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xc1'));}_0x5e7c4a[_0x50d9('0xd')]('<tr\x20style=\x27border-top:\x201px\x20solid\x27>');_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xc6')+_0x50d9('0xc7')+_0x1d5603+_0x50d9('0xc8')+_0x32a3e0+_0x50d9('0xc0'));_0x5e7c4a[_0x50d9('0xd')](_0x50d9('0xc1'));$(_0x50d9('0xc9'))[_0x50d9('0x2b')]('スタイルLV:50\x20,\x20全技Rank:99');$('#culcSTR')['text'](_0x50d9('0xca')+CULC_DAMAGE_PARAM['str']);$('#culcSTRDtl')[_0x50d9('0x20')](CULC_DAMAGE_PARAM[_0x50d9('0xcb')]+_0x50d9('0xcc')+CULC_DAMAGE_PARAM['STRPer']+'%\x20+'+CULC_DAMAGE_PARAM[_0x50d9('0xcd')]);$(_0x50d9('0xce'))[_0x50d9('0x20')](_0x50d9('0xcf')+CULC_DAMAGE_PARAM[_0x50d9('0xd0')]);$('#culcDEXDtl')[_0x50d9('0x20')](CULC_DAMAGE_PARAM[_0x50d9('0xd1')]+'\x20*\x20'+CULC_DAMAGE_PARAM[_0x50d9('0xd2')]+_0x50d9('0xd3')+CULC_DAMAGE_PARAM['DEXBonus']);$(_0x50d9('0xd4'))[_0x50d9('0x20')](_0x50d9('0xd5')+CULC_DAMAGE_PARAM[_0x50d9('0xd6')]);$(_0x50d9('0xd7'))[_0x50d9('0x20')](CULC_DAMAGE_PARAM[_0x50d9('0xd8')]+'\x20*\x20'+CULC_DAMAGE_PARAM[_0x50d9('0xd9')]+_0x50d9('0xd3')+CULC_DAMAGE_PARAM[_0x50d9('0xda')]);$(_0x50d9('0xdb'))['text'](_0x50d9('0xdc')+CULC_DAMAGE_PARAM[_0x50d9('0xdd')]);$(_0x50d9('0xde'))[_0x50d9('0x20')](CULC_DAMAGE_PARAM[_0x50d9('0xdf')]+_0x50d9('0xcc')+CULC_DAMAGE_PARAM['INTPer']+_0x50d9('0xd3')+CULC_DAMAGE_PARAM[_0x50d9('0xe0')]);$(_0x50d9('0xe1'))[_0x50d9('0x20')](_0x50d9('0xe2')+CULC_DAMAGE_PARAM[_0x50d9('0xe3')]);$('#culcAbility')['text'](_0x50d9('0xe4')+CULC_DAMAGE_PARAM[_0x50d9('0xe5')]+'%');$(_0x50d9('0xe6'))[_0x50d9('0x20')](_0x50d9('0xe7')+CULC_DAMAGE_PARAM[_0x50d9('0xe8')]+'%');$(_0x50d9('0xe9'))[_0x50d9('0x20')]('Lv22〜23');$(_0x50d9('0xea'))[_0x50d9('0x20')](_0x50d9('0xeb'));}function initialHide(){$(_0x50d9('0x38'))[_0x50d9('0x32')]();$(_0x50d9('0x33'))[_0x50d9('0x32')]();$(_0x50d9('0x31'))[_0x50d9('0x32')]();$(_0x50d9('0x45'))[_0x50d9('0x32')]();$(_0x50d9('0x70'))['hide']();$(_0x50d9('0xec'))[_0x50d9('0x32')]();}
