// ===================== DATA =====================

const RARITY_ORDER = ["trash","suchself","normal","rare","precious","legendary","artifact","inonecopy"];

const RARITY_LABEL = {
  trash: "Хлам",
  suchself: "Такое себе",
  normal: "Обычное",
  rare: "Редкое",
  precious: "Ценное",
  legendary: "Легендарное",
  artifact: "Артефакт",
  inonecopy: "В единственном экземпляре"
};

// Big Case item pool, by rarity tier. Tags kept as free-form strings for flavor/detail panel.
// Items with a trailing " *" in the name were invented by Claude to fill gaps in the source material.
const BIG_CASE_POOL = {
  trash: [
    {id:"wires", name:"Провода", tags:"X:R", desc:"Годятся на что угодно — от роботов до подсвечивания истерики."},
    {id:"potato", name:"Картошка", tags:"X", desc:"Скромный корнеплод с большим крафтовым потенциалом."},
    {id:"dirt", name:"Кусок земли", tags:"S", desc:"Просто земля. Ничего интересного, честно."},
    {id:"woodturd", name:"Деревянное говно", tags:"X:S", desc:"Не спрашивайте, как это возможно. Просто примите."},
    {id:"rot", name:"Гниль", tags:"S", desc:"Пахнет историей. И немного будущим."},
    {id:"nail", name:"Гвоздь", tags:"X", desc:"Острый, ржавый, надёжный — как и всё в этой канализации."},
    {id:"grime", name:"Чернь", tags:"X", desc:"Копится на всём. Кто-то её даже покупает."},
    {id:"sandchunk", name:"КУСОК ПЕСКА", tags:"S:R", desc:"Написано капсом не просто так — оно того требует."},
    {id:"stick", name:"Палка", tags:"X:S", desc:"Универсальный инструмент цивилизации."},
    {id:"brick", name:"Кирпич", tags:"X", desc:"Тяжёлый, красный, вселяет уверенность."},
    {id:"grass", name:"Трава", tags:"X", desc:"Растёт даже там, где расти не должна."},
    {id:"apple_core", name:"Огрызок *", tags:"X", desc:"Кто-то не доел. Кто-то доедёт на этом далеко."},
    {id:"ancient_dust", name:"Пыль веков *", tags:"S", desc:"Осела на всём, что тут есть, включая тебя."},
    {id:"rusty_clip", name:"Ржавая скрепка *", tags:"S", desc:"Когда-то держала важные документы. Теперь просто ржавеет."},
    {id:"empty_can", name:"Пустая банка *", tags:"S", desc:"Внутри было что-то. Больше не в курсе, что именно."},
    {id:"toothpick", name:"Зубочистка *", tags:"X", desc:"Маленькая, но с претензией на инженерность."},
    {id:"used_tea", name:"Использованный чай *", tags:"S", desc:"Уже не бодрит, зато мокрый."},
    {id:"soap_chunk", name:"Кусок мыла *", tags:"S", desc:"Хочет отмыть эту канализацию. Задача заведомо провальная."},
    {id:"cracked_plate", name:"Треснутая тарелка *", tags:"S", desc:"Половина сервиза, полная история драмы."}
  ],
  suchself: [
    {id:"clay", name:"Кусок глины", tags:"S", desc:"Из неё можно слепить почти всё. Почти."},
    {id:"board", name:"Доска", tags:"S", desc:"Прочная штука для катапульт и укреплений."},
    {id:"cloth", name:"Ткань", tags:"S", desc:"Мягкая, тянущаяся, слегка подозрительного происхождения."},
    {id:"rotpumpkin", name:"Гнилая тыква", tags:"S:X", desc:"Хэллоуин давно кончился, а она всё ещё тут."},
    {id:"rottape", name:"Гнилая изолента", tags:"", desc:"Держит вещи вместе даже когда сама разваливается."},
    {id:"candy", name:"Конфетка", tags:"X", desc:"Сладкая. Возможно, живая. Сложно сказать."},
    {id:"toilet", name:"Унитаз", tags:"S", desc:"Портал в неевклидову канализацию, если знать заклинание."},
    {id:"meat", name:"Кусок мяса", tags:"S:X", desc:"Происхождение лучше не уточнять."},
    {id:"brokenvac", name:"Сломанный пылесос", tags:"S:C", desc:"Раньше всасывал мусор. Теперь сам мусор."},
    {id:"sausage", name:"Сарделька", tags:"", desc:"Ждёт своего гриля."},
    {id:"cactusthorn", name:"Колючка кактуса", tags:"S:X", desc:"Острая, но с потенциалом для апгрейда."},
    {id:"roach", name:"Таракан", tags:"", desc:"Переживёт всё это заведение. Возможно, и тебя."},
    {id:"stone", name:"Камень", tags:"", desc:"Просто лежит. Уважаемо."},
    {id:"yarn_ball", name:"Клубок ниток *", tags:"S", desc:"Кто-то долго вязал что-то не то."},
    {id:"empty_wallet", name:"Пустой кошелёк *", tags:"", desc:"Символ финансовой философии этого места."},
    {id:"crumpled_hat", name:"Мятая шляпа *", tags:"S", desc:"Видела лучшие дни и худшие крафты."},
    {id:"pickle_jar", name:"Банка солений *", tags:"", desc:"Настоялась дольше, чем стоило."},
    {id:"broken_clock", name:"Сломанные часы *", tags:"S", desc:"Дважды в сутки права. Здесь это не помогает."},
    {id:"pencil_stub", name:"Огрызок карандаша *", tags:"", desc:"Хватит ровно на одну гениальную идею."},
    {id:"band_aid_cartoon", name:"Пластырь с мультиками *", tags:"Y", desc:"Лечит не столько тело, сколько чувство защищённости."}
  ],
  normal: [
    {id:"gnome", name:"Садовый гномик", tags:"W:X", desc:"Смотрит с укором на всё, что ты делаешь."},
    {id:"copperboot", name:"Первый Ботинок из меди", tags:"S:C", desc:"Одна нога комплекта из трёх разных металлов."},
    {id:"yellowpaste", name:"Желтая зубная паста", tags:"S", desc:"Едва ли гигиеническая, зато крафтовая."},
    {id:"robocandy", name:"Робоконфетка", tags:"W:X", desc:"Сладкая снаружи, механическая внутри."},
    {id:"classiccactus", name:"Классический кактусян", tags:"S:W", desc:"Верен традициям колючего образа жизни."},
    {id:"toiletextract", name:"Экстракт унитаза", tags:"S", desc:"Концентрат того, о чём лучше не думать."},
    {id:"paper", name:"Бумага", tags:"", desc:"Годится на записки, самолётики и книги заклинаний."},
    {id:"oven", name:"Печь", tags:"S:P", desc:"Инструмент для тех, кто готовит из чего попало."},
    {id:"waterchunk", name:"Кусок воды", tags:"S:A", desc:"Вода, но твёрдая. Физика тут не работает."},
    {id:"steelingot", name:"Стальной слиток", tags:"S:R", desc:"Надёжная основа половины местной техники."},
    {id:"cards", name:"Игральные карты", tags:"S", desc:"Кто-то проиграл на них состояние. Может, ты выиграешь."},
    {id:"pot", name:"Горшок", tags:"X:S", desc:"Обожжённая глина, готовая к великим свершениям."},
    {id:"burner", name:"Горелка", tags:"X:S", desc:"Открытый огонь в закрытой канализации — что могло пойти не так."},
    {id:"mandolin", name:"Мандолина", tags:"S:X", desc:"Для тех, кто хочет петь в этой дыре."},
    {id:"reroll", name:"Реролъ", tags:"O", desc:"Даёт кейсу второй шанс. Название — тоже, судя по всему."},
    {id:"beaver", name:"Бобер", tags:"S", desc:"Строитель по натуре, укрепитель по профессии."},
    {id:"spring", name:"Пружина *", tags:"S", desc:"Заряжена энергией и лёгкой тревогой."},
    {id:"glass_orb", name:"Стеклянный шар *", tags:"S", desc:"Показывает будущее. Или просто отражает твоё лицо."},
    {id:"dusty_tome", name:"Пыльный фолиант *", tags:"S", desc:"Страницы слиплись от неведомой сырости."},
    {id:"bucket", name:"Ведро *", tags:"S", desc:"Держит воду, мусор и разбитые мечты."},
    {id:"whistle", name:"Свисток *", tags:"", desc:"Громкий, резкий, идеально для паники."},
    {id:"lying_compass", name:"Компас, который врёт *", tags:"O", desc:"Всегда указывает не туда. Стабильно, по крайней мере."},
    {id:"broth_jar", name:"Баночка бульона *", tags:"Y", desc:"Домашнее средство от всего. В основном от голода."}
  ],
  rare: [
    {id:"arena", name:"Обычная арена", tags:"", desc:"Ринг для честных ПВП-разборок."},
    {id:"painting", name:"Картина", tags:"", desc:"Искусство неясного жанра и происхождения."},
    {id:"drawtablet", name:"Планшет для рисования", tags:"S:C", desc:"Для тех, кто хочет рисовать, а не копать."},
    {id:"hulktp", name:"Туалетная бумага Халка", tags:"C", desc:"Слишком прочная, чтобы порваться. Слишком странная, чтобы объяснить."},
    {id:"vacuum", name:"Пылесос", tags:"S:C", desc:"Всасывает мусор с энтузиазмом, недостойным этого места."},
    {id:"mannequin", name:"Модный манекен", tags:"W", desc:"Одет лучше тебя. Не двигается, но осуждает."},
    {id:"magicstone", name:"Магический Камень", tags:"", desc:"Гудит тихонько, если поднести к уху."},
    {id:"halloweenpumpkin", name:"Хэллоуинская тыква", tags:"", desc:"Праздник закончился много лет назад."},
    {id:"quarhuntersart", name:"Ар из Куархантерс", tags:"C", desc:"Отсылка, которую поймут не все."},
    {id:"cookguide", name:"Гид по кулинарии", tags:"P", desc:"Рецептов немного, но все — с огоньком."},
    {id:"silverboot", name:"Третий Ботинок из серебра", tags:"S:O", desc:"Ещё одна нога того же загадочного комплекта."},
    {id:"processor", name:"Обработочная машина", tags:"R:P", desc:"Разбирает вещи на составляющие. Без вопросов."},
    {id:"guy", name:"Чел", tags:"X", desc:"Просто чел. У него есть потенциал."},
    {id:"weakamulet", name:"Слабый магический амулет", tags:"X", desc:"Магии хватает разве что на фокус с картами."},
    {id:"grill", name:"Гриль", tags:"P", desc:"Готовит всё, что попадёт на решётку."},
    {id:"parcel", name:"Посылка", tags:"S", desc:"Отправитель неизвестен. Содержимое интригует."},
    {id:"fattybutter", name:"Очень жирное масло", tags:"", desc:"Настолько жирное, что это уже отдельная категория."},
    {id:"madnessjar", name:"Безумие в банке", tags:"S:X", desc:"Плещется. Иногда шепчет."},
    {id:"bossrushcoupon", name:"Босс раш купон", tags:"B", desc:"Билет на серию плохих решений подряд."},
    {id:"salty_wind_bottle", name:"Бутылка солёного ветра *", tags:"", desc:"Внутри — воспоминание о море, которого тут нет."},
    {id:"stool_blueprint", name:"Чертёж табуретки *", tags:"C", desc:"Инженерная мысль на пике своих амбиций."},
    {id:"wind_key", name:"Заводной ключ *", tags:"Y", desc:"Заводит механизмы и, кажется, немного решимость."},
    {id:"wish_bowl", name:"Пиала для загадывания желаний *", tags:"", desc:"Работает через раз. Условия загадывания не разглашаются."},
    {id:"unlucky_medallion", name:"Медальон невезения *", tags:"Y", desc:"Носить не рекомендуется. Но кто здесь слушает рекомендации."}
  ],
  precious: [
    {id:"sakuraflower", name:"Цветок Сакуры", tags:"S:Y", desc:"Хрупкая красота посреди канализационного хаоса."},
    {id:"transformbook", name:"Магическая книга трансформации", tags:"P", desc:"Переписывает суть вещей на молекулярном уровне."},
    {id:"mask", name:"Маска", tags:"", desc:"Скрывает личность. Может, даже от себя самого."},
    {id:"crazychoc", name:"Сумасшедшая Шоколадка", tags:"W", desc:"Не советуем есть на голодный желудок."},
    {id:"assyacht", name:"Яхта Жопера", tags:"C", desc:"Роскошь в месте, где ей совсем не место."},
    {id:"goldboot", name:"Второй Ботинок из золота", tags:"S:O", desc:"Средняя нога того самого загадочного трио."},
    {id:"warriormannequin", name:"Воин Манекен", tags:"W", desc:"Манекен, вооружённый до зубов и полный решимости."},
    {id:"mage", name:"Маг", tags:"S:W", desc:"Немного магии, немного отчаяния, много амбиций."},
    {id:"decomposer", name:"Разложающая машина", tags:"P", desc:"Разбирает вещи туда, откуда они, возможно, не должны были возвращаться."},
    {id:"microforge", name:"Микрокузница", tags:"R:P", desc:"Маленькая кузница с большими амбициями."},
    {id:"redbook", name:"Красная книга", tags:"C", desc:"Раскрывает рецепты, о которых лучше бы никто не знал."},
    {id:"marblecube", name:"Куб из мрамора", tags:"", desc:"Идеальная форма для не идеального места."},
    {id:"strangeemblem", name:"Странная эмблема", tags:"S", desc:"Символизирует что-то. Неясно, что именно."},
    {id:"soapmachine", name:"Мыловарная машина", tags:"P", desc:"Варит мыло. Ирония происходящего вокруг не учитывается."},
    {id:"midamulet", name:"Магический амулет средней силы", tags:"X", desc:"Не самый мощный, но зато честно называется."},
    {id:"second_sun_shard", name:"Осколок второго солнца *", tags:"", desc:"Здесь никогда не было второго солнца. Теперь есть его осколок."},
    {id:"countdown_clock", name:"Часы обратного отсчёта *", tags:"Y", desc:"Тикают. До чего именно — неизвестно, и это тревожит."},
    {id:"unfinished_spell", name:"Пергамент с недописанным заклинанием *", tags:"", desc:"Автор отвлёкся на середине. Больше не вернулся."},
    {id:"bottled_ghost", name:"Бутылка с призраком *", tags:"", desc:"Внутри кто-то живёт. Точнее, не совсем живёт."},
    {id:"regen_elixir", name:"Эликсир регенерации *", tags:"Y", desc:"Полностью восстанавливает юнита. Вкус лучше не уточнять."}
  ],
  legendary: [
    {id:"sakuraseeds", name:"Семена сакуры", tags:"A", desc:"Из них может вырасти что-то по-настоящему редкое."},
    {id:"goldpumpkin", name:"Золотая тыква", tags:"", desc:"Тяжёлая, блестящая, явно не для еды."},
    {id:"countrybox", name:"Страна в коробке", tags:"", desc:"Компактное государство. Судя по всему, работает."},
    {id:"infinitycactus", name:"Кактус Бесконечности", tags:"", desc:"Колется бесконечно. В прямом смысле."},
    {id:"livingpainting", name:"Живая картина", tags:"", desc:"Персонажи внутри следят за тобой взглядом."},
    {id:"bluebook", name:"Синяя книга", tags:"", desc:"Не хватает страниц. Самых важных, разумеется."},
    {id:"magicpumpkin", name:"Магическая тыква", tags:"", desc:"Обычная тыква явно перестаралась с саморазвитием."},
    {id:"transformmachine", name:"Преобразующая машина", tags:"P", desc:"Превращает одно в другое. Иногда — в лучшее."},
    {id:"beaver_tooth", name:"Зуб древнего бобра *", tags:"", desc:"Судя по размеру, дерево не выжило."},
    {id:"map_to_nowhere", name:"Карта в никуда *", tags:"", desc:"Точна на сто процентов. Просто ведёт в никуда."},
    {id:"manul_tear", name:"Слеза манула *", tags:"Y", desc:"Редчайшая вещь — манулы не плачут по пустякам."}
  ],
  artifact: [
    {id:"restoreamulet", name:"Амулет восстановления", tags:"O", desc:"Возвращает силы юниту. Не бесконечно, увы."},
    {id:"upgradebook", name:"Магическая книга улучшения", tags:"P", desc:"Не тратится — просто щедро делится знаниями."},
    {id:"natureamulet", name:"Амулет природы", tags:"", desc:"Природа в этой канализации — понятие растяжимое."},
    {id:"medal", name:"Медаль", tags:"Y", desc:"За явную доблесть в сомнительных обстоятельствах."},
    {id:"manulcrown", name:"Корона короля манулов", tags:"O", desc:"Даёт право призывать подданных. Пушистых."},
    {id:"telebook", name:"Магическая книга наделения: Телепорт", tags:"P", desc:"Открывает двери туда, куда обычно не попасть."},
    {id:"magicaltar", name:"Магический алтарь", tags:"", desc:"Гудит от накопленной за века магии."},
    {id:"redruby", name:"Красный рубин", tags:"S", desc:"Настоящий, судя по весу и цене."},
    {id:"silent_archive_seal", name:"Печать Молчаливого Архива *", tags:"", desc:"Хранит секрет, о котором даже не намекает."},
    {id:"true_north_compass", name:"Компас Истинного Севера *", tags:"", desc:"Не врёт никогда. В отличие от некоторых других компасов."}
  ],
  inonecopy: [
    {id:"ancientaltar", name:"Древний Магический Алтарь", tags:"", desc:"Один на всю игру. Береги как зеницу ока."},
    {id:"godpumpkin", name:"Тыква богов", tags:"", desc:"Урожай явно не с этого огорода."},
    {id:"anymaterial", name:"Материал для создания любой вещи", tags:"", desc:"Философский камень крафтовой системы."},
    {id:"kgofkg", name:"Килограмм килограммоВ", tags:"", desc:"Единица измерения, придуманная явно не физиком."},
    {id:"revivebook", name:"Магическая книга оживления", tags:"P", desc:"Вдыхает жизнь в то, что её никогда не имело."}
  ]
};

// Flatten to a lookup by id -> {id,name,tags,rarity}
const ITEM_DB = {};
for (const rarity of RARITY_ORDER) {
  for (const it of BIG_CASE_POOL[rarity]) {
    ITEM_DB[it.id] = {...it, rarity};
  }
}
// Extra items that exist only as craft outputs / location rewards / trader stock (not in Big Case pool directly)
const EXTRA_ITEMS = [
  {id:"biotrash", name:"Биомусор", tags:"X", rarity:"normal", desc:"Стандартная добыча из канализационных экспедиций."},
  {id:"lostring", name:"Потерянное кольцо", tags:"S", rarity:"rare", desc:"Кто-то там внизу до сих пор его ищет."},
  {id:"brownbook", name:"Коричневая книга", tags:"C", rarity:"rare", desc:"Пахнет канализацией и раскрывает её секреты."},
  {id:"barrelitem", name:"Бочка", tags:"X", rarity:"rare", desc:"Та самая бочка. Или очень похожая на неё."},
  {id:"steak", name:"Стейк", tags:"Y", rarity:"suchself", desc:"Питательно, если не думать об источнике мяса."},
  {id:"readysausage", name:"Готовая сарделька", tags:"Y", rarity:"normal", desc:"Наконец готова. Ожидание того стоило."},
  {id:"quicksand", name:"Зыбучие пески", tags:"O", rarity:"normal", desc:"Засасывают противника прямо посреди боя."},
  {id:"pepper_spray", name:"Банка перечного спрея *", tags:"Y", rarity:"rare", desc:"Кактусовый экстракт под давлением. Работает на всех, включая своих."},
  {id:"last_breath_charm", name:"Оберег последнего вздоха *", tags:"Y", rarity:"precious", desc:"Не даёт умереть. Один раз. Дальше — сам как-нибудь."},
  {id:"rabbit_foot", name:"Заячья лапка *", tags:"Y", rarity:"suchself", desc:"Технически — от таракана. Но работает точно так же, говорят."}
];
for (const it of EXTRA_ITEMS) ITEM_DB[it.id] = it;

function itemName(id){ return ITEM_DB[id] ? ITEM_DB[id].name : id; }

// Effects for consumable "buff" items (Y-tag) applied to a unit via the Inventory "use item" action,
// or mid-battle (if battleUsable:true) by dragging/tapping the item onto a deployed unit on your turn.
// maxHpDelta/dmgDelta/shldDelta/critDelta/dodgeDelta are permanent stat changes; healAmount (defaults to maxHpDelta) heals current HP.
const ITEM_EFFECTS = {
  steak: {maxHpDelta:4},
  readysausage: {maxHpDelta:5},
  medal: {maxHpDelta:10, dmgDelta:3, shldDelta:2, healAmount:30},
  wind_key: {dmgDelta:1},
  unlucky_medallion: {dmgDelta:-1},
  manul_tear: {healAmount:9999},
  band_aid_cartoon: {healAmount:2, battleUsable:true},
  broth_jar: {healAmount:5, battleUsable:true},
  regen_elixir: {healAmount:9999, battleUsable:true},
  pepper_spray: {dmgDelta:3, battleUsable:true},
  last_breath_charm: {grantAbility:{type:"revive_once"}, battleUsable:true},
  rabbit_foot: {dodgeDelta:15, battleUsable:true}
};

// ===================== UNITS =====================
// Base combat units. abilities is an array of ability descriptor objects.
// Units with a trailing " *" in the name were invented by Claude.
const UNIT_DB = {
  brave_warrior: {id:"brave_warrior", name:"Бравый воин", hp:3, dmg:2, shld:1, abilities:[]},
  bob: {id:"bob", name:"Боб", hp:3, dmg:2, shld:0, abilities:[]},
  gnome_unit: {id:"gnome_unit", name:"Садовый гномик", hp:3, dmg:3, shld:0, abilities:[{type:"on_death_drop", item:"clay"}]},
  robocandy: {id:"robocandy", name:"Робоконфетка", hp:3, dmg:2, shld:0, abilities:[]},
  jyj: {id:"jyj", name:"Жыж", hp:4, dmg:2, shld:0, abilities:[{type:"post_battle_full_heal"}]},
  scarecrow: {id:"scarecrow", name:"Пугало", hp:4, dmg:2, shld:1, abilities:[]},
  figure: {id:"figure", name:"Фигурка", hp:2, dmg:2, shld:1, abilities:[{type:"post_battle_heal_adjacent", amount:2}]},
  who: {id:"who", name:"Кто", hp:8, dmg:3, shld:0, abilities:[]},
  catapult: {id:"catapult", name:"Катапульта", hp:6, dmg:4, shld:0, abilities:[{type:"ranged_attack"}]},
  beaver_fort: {id:"beaver_fort", name:"Бобровое укрепление", hp:5, dmg:2, shld:2, abilities:[]},
  pyroach: {id:"pyroach", name:"Пирокан", hp:3, dmg:4, shld:1, abilities:[]},
  something_alive: {id:"something_alive", name:"Что-то живое", hp:7, dmg:2, shld:0, abilities:[]},
  bard: {id:"bard", name:"Бард", hp:5, dmg:2, shld:0, abilities:[{type:"periodic_heal", every:3, amount:5}]},
  elite_robocandy: {id:"elite_robocandy", name:"Элитная робоконфетка", hp:5, dmg:3, shld:0, abilities:[]},
  mage: {id:"mage", name:"Маг", hp:10, dmg:3, shld:0, abilities:[{type:"on_low_hp_summon", threshold:6, unit:"robocandy"}]},
  statue: {id:"statue", name:"Статуя", hp:9, dmg:3, shld:2, abilities:[]},
  jack: {id:"jack", name:"Джек", hp:9, dmg:3, shld:1, abilities:[]},
  candy_terminator: {id:"candy_terminator", name:"Конфетка терминатор", hp:6, dmg:4, shld:0, abilities:[]},
  toiletheaded: {id:"toiletheaded", name:"Унитазоголовый", hp:5, dmg:5, shld:1, abilities:[]},
  mud_wizard: {id:"mud_wizard", name:"Грязевой волшебник", hp:14, dmg:3, shld:2, abilities:[{type:"on_hit_summon", unit:"brave_warrior"}]},
  golden_statue: {id:"golden_statue", name:"Золотая статуя", hp:20, dmg:4, shld:3, abilities:[{type:"ranged_attack"}]},
  cactusyan_classic: {id:"cactusyan_classic", name:"Классический кактусян", hp:4, dmg:2, shld:1, abilities:[]},
  cactusyan_nonclassic: {id:"cactusyan_nonclassic", name:"Неклассический кактусян", hp:6, dmg:3, shld:1, abilities:[{type:"buff_in_back", shld:1}]},

  // ---- homebrew units (Claude's additions) ----
  slug: {id:"slug", name:"Слизень *", hp:2, dmg:1, shld:0, abilities:[{type:"feed_transform", item:"woodturd", into:"slug_king"}]},
  slug_king: {id:"slug_king", name:"Слизень-король *", hp:6, dmg:2, shld:1, abilities:[{type:"post_battle_heal_adjacent", amount:3}]},
  lucky_hen: {id:"lucky_hen", name:"Курица Судьбы *", hp:4, dmg:1, shld:0, abilities:[{type:"post_battle_lay_item"}]},
  corner_watcher: {id:"corner_watcher", name:"Наблюдатель Угла *", hp:7, dmg:2, shld:2, abilities:[{type:"mirror_enemy_dmg"}]},
  io_accountant: {id:"io_accountant", name:"Бухгалтер Ио *", hp:4, dmg:1, shld:1, abilities:[{type:"post_battle_bonus_io", amount:5}]},
  eternal_intern: {id:"eternal_intern", name:"Вечный Стажёр *", hp:3, dmg:1, shld:0, abilities:[{type:"revive_once"},{type:"feed_transform", item:"apple_core", into:"intern_director"}]},
  intern_director: {id:"intern_director", name:"Директор Стажёров *", hp:6, dmg:2, shld:1, abilities:[{type:"aura_shield_adjacent", shld:1}]},
  walking_cabinet: {id:"walking_cabinet", name:"Ходячий Шкаф *", hp:12, dmg:1, shld:3, abilities:[]},
  carpet_cleaner: {id:"carpet_cleaner", name:"Уборщик Ковров *", hp:5, dmg:2, shld:0, abilities:[{type:"on_death_drop", item:"cloth"}]},
  phenomenon_x: {id:"phenomenon_x", name:"Феномен Икс *", hp:10, dmg:4, shld:0, abilities:[{type:"chaos_clone", prob:0.2}]},
  ash_cat: {id:"ash_cat", name:"Пепельный Кот *", hp:4, dmg:2, shld:0, abilities:[{type:"luck_charm"}]}
};

// ---- emoji "portraits" (no generated images yet) ----
const UNIT_EMOJI = {
  brave_warrior:"⚔️", bob:"🥔", gnome_unit:"🧌", robocandy:"🍬", jyj:"🫠",
  scarecrow:"🎃", figure:"🏺", who:"❓", catapult:"🧱", beaver_fort:"🦫",
  pyroach:"🪳", something_alive:"🧟", bard:"🎻", elite_robocandy:"🍭",
  mage:"🧙‍♂️", statue:"🗿", jack:"💀", candy_terminator:"🤖", toiletheaded:"🚽",
  mud_wizard:"🔮", golden_statue:"🏆", cactusyan_classic:"🌵", cactusyan_nonclassic:"🌵",
  slug:"🐌", slug_king:"🐌👑", lucky_hen:"🐔", corner_watcher:"👁️", io_accountant:"🧮",
  eternal_intern:"📎", intern_director:"💼", walking_cabinet:"🗄️", carpet_cleaner:"🧹",
  phenomenon_x:"🌀", ash_cat:"🐈‍⬛", custom_robot:"🦾"
};
const MOB_EMOJI = {
  mob_1:"🟤", mob_2:"💧", mob_3:"🔺", mob_4:"📏", mob_5:"〰️", mob_6:"👽",
  mob_7:"🍃", mob_8:"🛢️", mob_9:"♾️", mob_10:"📯", mob_11:"📐", mob_12:"🗡️",
  mimic:"🎁", casino_enemy:"💀"
};
function getEmoji(unitId){
  return UNIT_EMOJI[unitId] || MOB_EMOJI[unitId] || "👤";
}

// ===================== CRAFTING =====================
// Each recipe: inputs [{id, qty}], tools (present but not consumed) items,
// output either {item:id, qty} or {unit:unitId, qty}. requiresUnit/consumeUnit consume a roster unit as an ingredient.
// homebrew:true marks recipes Claude invented or adapted (ingredients swapped) to work without out-of-scope cases.
const RECIPES = [
  // trash/suchself tier
  {id:"r_brave_warrior", inputs:[{id:"woodturd",qty:1},{id:"stick",qty:1}], tools:[], output:{unit:"brave_warrior", qty:1}, label:"Деревянное говно + Палка = Бравый воин"},
  {id:"r_bob", inputs:[{id:"potato",qty:1},{id:"grime",qty:1}], tools:[], output:{unit:"bob", qty:1}, label:"Картошка + Чернь = Боб"},

  // normal tier
  {id:"r_pot", inputs:[{id:"clay",qty:1},{id:"dirt",qty:1}], tools:["oven"], output:{item:"pot", qty:1}, label:"Печь(инструм.) + Кусок глины + Кусок земли = Горшок"},
  {id:"r_jyj", inputs:[{id:"yellowpaste",qty:1},{id:"waterchunk",qty:1}], tools:[], output:{unit:"jyj", qty:1}, label:"Желтая зубная паста + Кусок воды = Жыж"},
  {id:"r_scarecrow", inputs:[{id:"halloweenpumpkin",qty:1},{id:"stick",qty:1},{id:"rottape",qty:1}], tools:[], output:{unit:"scarecrow", qty:1}, label:"Хэллоуинская тыква + Палка + Гнилая изолента = Пугало"},
  {id:"r_readysausage", inputs:[{id:"sausage",qty:1}], tools:["cookguide","grill"], output:{item:"readysausage", qty:1}, label:"Сарделька + Гид по кулинарии(инстр.) + Гриль(инстр.) = Готовая сарделька"},
  {id:"r_steak", inputs:[{id:"meat",qty:1}], tools:["grill"], output:{item:"steak", qty:1}, label:"Кусок мяса + Гриль(инстр.) = Стейк"},
  {id:"r_quicksand", inputs:[{id:"sandchunk",qty:1},{id:"dirt",qty:1}], tools:[], output:{item:"quicksand", qty:1}, label:"КУСОК ПЕСКА + Кусок земли = Зыбучие пески"},
  {id:"r_figure", inputs:[{id:"clay",qty:1}], tools:["oven"], output:{unit:"figure", qty:1}, label:"Кусок глины + Печь(инстр.) = Фигурка"},
  {id:"r_robocandy", inputs:[{id:"candy",qty:1},{id:"wires",qty:1}], tools:[], output:{unit:"robocandy", qty:2}, label:"Конфетка + Провода = Робоконфетка x2"},

  // rare tier
  {id:"r_who", inputs:[{id:"rotpumpkin",qty:1},{id:"stick",qty:1},{id:"woodturd",qty:1}], tools:[], output:{unit:"who", qty:1}, label:"Гнилая тыква + Палка + Деревянное говно = Кто"},
  {id:"r_catapult", inputs:[{id:"board",qty:1},{id:"brick",qty:1},{id:"potato",qty:1}], tools:[], output:{unit:"catapult", qty:1}, label:"Доска + Кирпич + Картошка = Катапульта * (адаптировано, без деталей меха)", homebrew:true},
  {id:"r_elite_robocandy", inputs:[], tools:["upgradebook"], requiresUnit:"robocandy", consumeUnit:1, output:{unit:"elite_robocandy", qty:1}, label:"Робоконфетка + Магическая книга улучшения(инстр.) = Элитная робоконфетка"},
  {id:"r_cactusyan_upgrade", inputs:[{id:"cactusthorn",qty:1}], tools:[], requiresUnit:"cactusyan_classic", consumeUnit:1, output:{unit:"cactusyan_nonclassic", qty:1}, label:"Классический кактусян + Колючка кактуса = Неклассический кактусян"},
  {id:"r_beaver_fort", inputs:[{id:"beaver",qty:1},{id:"brick",qty:1},{id:"nail",qty:1}], tools:[], output:{unit:"beaver_fort", qty:1}, label:"Бобер + Кирпич + Гвоздь = Бобровое укрепление"},
  {id:"r_pyroach", inputs:[{id:"roach",qty:1},{id:"burner",qty:1},{id:"steelingot",qty:1}], tools:[], output:{unit:"pyroach", qty:1}, label:"Таракан + Горелка + Стальной слиток = Пирокан"},
  {id:"r_something_alive", inputs:[{id:"biotrash",qty:1},{id:"toiletextract",qty:1}], tools:[], output:{unit:"something_alive", qty:1}, label:"Биомусор + Экстракт унитаза = Что-то живое"},
  {id:"r_bard", inputs:[{id:"guy",qty:1},{id:"mandolin",qty:1}], tools:[], output:{unit:"bard", qty:1}, label:"Чел + Мандолина = Бард"},

  // precious tier
  {id:"r_mage", inputs:[{id:"guy",qty:1},{id:"weakamulet",qty:1},{id:"cloth",qty:1}], tools:[], output:{unit:"mage", qty:1}, label:"Чел + Слабый магический амулет + Ткань = Маг"},
  {id:"r_statue", inputs:[{id:"marblecube",qty:1},{id:"processor",qty:1}], tools:["revivebook"], output:{unit:"statue", qty:1}, label:"Обработочная машина + Куб из мрамора + Магическая книга оживления(инстр.) = Статуя"},
  {id:"r_microforge", inputs:[{id:"sandchunk",qty:1},{id:"brick",qty:1}], tools:["oven"], output:{item:"microforge", qty:1}, label:"Печь(инстр.) + КУСОК ПЕСКА + Кирпич = Микрокузница * (адаптировано)", homebrew:true},
  {id:"r_jack", inputs:[{id:"cloth",qty:1},{id:"halloweenpumpkin",qty:1}], tools:[], requiresUnit:"scarecrow", consumeUnit:1, output:{unit:"jack", qty:1}, label:"Пугало + Ткань + Хэллоуинская тыква = Джек"},
  {id:"r_candy_terminator", inputs:[{id:"steelingot",qty:1}], tools:[], requiresUnit:"elite_robocandy", consumeUnit:1, output:{unit:"candy_terminator", qty:1}, label:"Элитная робоконфетка + Стальной слиток = Конфетка терминатор * (адаптировано)", homebrew:true},
  {id:"r_toiletheaded", inputs:[{id:"guy",qty:1},{id:"rottape",qty:1},{id:"toilet",qty:1}], tools:[], output:{unit:"toiletheaded", qty:1}, label:"Чел + Гнилая изолента + Унитаз = Унитазоголовый"},

  // legendary tier
  {id:"r_mud_wizard", inputs:[{id:"woodturd",qty:1},{id:"midamulet",qty:1}], tools:[], requiresUnit:"mage", consumeUnit:1, output:{unit:"mud_wizard", qty:1}, label:"Маг + Деревянное говно + Магический амулет средней силы = Грязевой волшебник"},

  // artifact tier
  {id:"r_golden_statue", inputs:[{id:"goldpumpkin",qty:1},{id:"magicstone",qty:1}], tools:[], output:{unit:"golden_statue", qty:1}, label:"Золотая тыква + Магический Камень = Золотая статуя * (адаптировано)", homebrew:true},

  // ================= homebrew additions (Claude's own content) =================
  {id:"r_slug", inputs:[{id:"rot",qty:1},{id:"dirt",qty:1}], tools:[], output:{unit:"slug", qty:1}, label:"Гниль + Кусок земли = Слизень *", homebrew:true},
  {id:"r_lucky_hen", inputs:[{id:"waterchunk",qty:1},{id:"paper",qty:1},{id:"spring",qty:1}], tools:[], output:{unit:"lucky_hen", qty:1}, label:"Кусок воды + Бумага + Пружина * = Курица Судьбы *", homebrew:true},
  {id:"r_corner_watcher", inputs:[{id:"magicstone",qty:1},{id:"guy",qty:1},{id:"strangeemblem",qty:1}], tools:[], output:{unit:"corner_watcher", qty:1}, label:"Магический Камень + Чел + Странная эмблема = Наблюдатель Угла *", homebrew:true},
  {id:"r_io_accountant", inputs:[{id:"cards",qty:1},{id:"paper",qty:1}], tools:[], output:{unit:"io_accountant", qty:1}, label:"Игральные карты + Бумага = Бухгалтер Ио *", homebrew:true},
  {id:"r_eternal_intern", inputs:[{id:"roach",qty:1},{id:"paper",qty:1},{id:"cracked_plate",qty:1}], tools:[], output:{unit:"eternal_intern", qty:1}, label:"Таракан + Бумага + Треснутая тарелка * = Вечный Стажёр *", homebrew:true},
  {id:"r_walking_cabinet", inputs:[{id:"board",qty:1},{id:"brick",qty:1},{id:"nail",qty:1}], tools:[], output:{unit:"walking_cabinet", qty:1}, label:"Доска + Кирпич + Гвоздь = Ходячий Шкаф *", homebrew:true},
  {id:"r_carpet_cleaner", inputs:[{id:"cloth",qty:1},{id:"bucket",qty:1},{id:"soap_chunk",qty:1}], tools:[], output:{unit:"carpet_cleaner", qty:1}, label:"Ткань + Ведро * + Кусок мыла * = Уборщик Ковров *", homebrew:true},
  {id:"r_phenomenon_x", inputs:[{id:"infinitycactus",qty:1},{id:"midamulet",qty:1},{id:"second_sun_shard",qty:1}], tools:[], output:{unit:"phenomenon_x", qty:1}, label:"Кактус Бесконечности + Магический амулет средней силы + Осколок второго солнца * = Феномен Икс *", homebrew:true},
  {id:"r_ash_cat", inputs:[{id:"stone",qty:1},{id:"grime",qty:1},{id:"ancient_dust",qty:1}], tools:[], output:{unit:"ash_cat", qty:1}, label:"Камень + Чернь + Пыль веков * = Пепельный Кот *", homebrew:true},

  {id:"r_wind_key", inputs:[{id:"rusty_clip",qty:1},{id:"wires",qty:1}], tools:[], output:{item:"wind_key", qty:1}, label:"Ржавая скрепка * + Провода = Заводной ключ *", homebrew:true},
  {id:"r_spring", inputs:[{id:"yarn_ball",qty:1},{id:"cloth",qty:1}], tools:[], output:{item:"spring", qty:1}, label:"Клубок ниток * + Ткань = Пружина *", homebrew:true},
  {id:"r_wish_bowl", inputs:[{id:"glass_orb",qty:1},{id:"dusty_tome",qty:1}], tools:[], output:{item:"wish_bowl", qty:1}, label:"Стеклянный шар * + Пыльный фолиант * = Пиала для загадывания желаний *", homebrew:true},
  {id:"r_unlucky_medallion", inputs:[{id:"crumpled_hat",qty:1},{id:"weakamulet",qty:1}], tools:[], output:{item:"unlucky_medallion", qty:1}, label:"Мятая шляпа * + Слабый магический амулет = Медальон невезения *", homebrew:true},
  {id:"r_bucket", inputs:[{id:"cracked_plate",qty:1},{id:"clay",qty:1}], tools:[], output:{item:"bucket", qty:1}, label:"Треснутая тарелка * + Кусок глины = Ведро *", homebrew:true},
  {id:"r_lying_compass", inputs:[{id:"empty_can",qty:1},{id:"whistle",qty:1}], tools:[], output:{item:"lying_compass", qty:1}, label:"Пустая банка * + Свисток * = Компас, который врёт *", homebrew:true},
  {id:"r_dusty_tome", inputs:[{id:"used_tea",qty:1},{id:"paper",qty:1}], tools:[], output:{item:"dusty_tome", qty:1}, label:"Использованный чай * + Бумага = Пыльный фолиант *", homebrew:true},
  {id:"r_countdown_clock", inputs:[{id:"wind_key",qty:1},{id:"steelingot",qty:1}], tools:[], output:{item:"countdown_clock", qty:1}, label:"Заводной ключ * + Стальной слиток = Часы обратного отсчёта *", homebrew:true},
  {id:"r_apple_core", inputs:[{id:"toothpick",qty:1},{id:"pencil_stub",qty:1}], tools:[], output:{item:"apple_core", qty:1}, label:"Зубочистка * + Огрызок карандаша * = Огрызок *", homebrew:true},

  // ---- healing & battle-usable items ----
  {id:"r_broth_jar", inputs:[{id:"waterchunk",qty:1},{id:"sausage",qty:1}], tools:[], output:{item:"broth_jar", qty:1}, label:"Кусок воды + Сарделька = Баночка бульона *", homebrew:true},
  {id:"r_regen_elixir", inputs:[{id:"waterchunk",qty:1},{id:"sakuraflower",qty:1}], tools:["transformbook"], output:{item:"regen_elixir", qty:1}, label:"Кусок воды + Цветок Сакуры + Магическая книга трансформации(инстр.) = Эликсир регенерации *", homebrew:true},
  {id:"r_pepper_spray", inputs:[{id:"cactusthorn",qty:1},{id:"waterchunk",qty:1}], tools:[], output:{item:"pepper_spray", qty:1}, label:"Колючка кактуса + Кусок воды = Банка перечного спрея *", homebrew:true},
  {id:"r_last_breath_charm", inputs:[{id:"weakamulet",qty:1},{id:"cloth",qty:1},{id:"rottape",qty:1}], tools:[], output:{item:"last_breath_charm", qty:1}, label:"Слабый магический амулет + Ткань + Гнилая изолента = Оберег последнего вздоха *", homebrew:true},
  {id:"r_rabbit_foot", inputs:[{id:"roach",qty:1},{id:"grass",qty:1}], tools:[], output:{item:"rabbit_foot", qty:1}, label:"Таракан + Трава = Заячья лапка * (технически не заяц)", homebrew:true}
];

function recipeCategory(recipe){
  if (recipe.output.unit) return "unit";
  const item = ITEM_DB[recipe.output.item];
  if (item && item.tags && item.tags.indexOf("Y") !== -1) return "buff";
  return "component";
}
const RECIPE_CATEGORY_LABEL = { unit:"Юниты", buff:"Баффы юнитам", component:"Компоненты и предметы" };

function recipeDisplayParts(recipe){
  const parts = [];
  for (const inp of recipe.inputs){
    parts.push({ kind:"item", id: inp.id, label: itemName(inp.id) + (inp.qty>1?" ×"+inp.qty:"") });
  }
  for (const t of (recipe.tools||[])){
    parts.push({ kind:"item", id: t, label: itemName(t) + " (инстр.)" });
  }
  if (recipe.requiresUnit){
    const u = UNIT_DB[recipe.requiresUnit];
    parts.push({ kind:"unittype", id: recipe.requiresUnit, label: (u?u.name:recipe.requiresUnit) + " (юнит, тратится)" });
  }
  let outputLabel, outputEmoji, outputKind, outputId;
  if (recipe.output.unit){
    const u = UNIT_DB[recipe.output.unit];
    outputLabel = (u?u.name:recipe.output.unit) + (recipe.output.qty>1?" ×"+recipe.output.qty:"");
    outputEmoji = getEmoji(recipe.output.unit);
    outputKind = "unittype"; outputId = recipe.output.unit;
  } else {
    outputLabel = itemName(recipe.output.item) + (recipe.output.qty>1?" ×"+recipe.output.qty:"");
    outputEmoji = "📦";
    outputKind = "item"; outputId = recipe.output.item;
  }
  return { ingredients: parts, outputName: outputLabel, outputEmoji, outputKind, outputId };
}

// ===================== MECHA CASE & ROBOT PARTS =====================
// Second case type: raw mecha materials. Some ids (wires, steelingot) are shared with Big Case on purpose (source material lists them in both pools).
const MECHA_CASE_POOL = {
  trash: [
    {id:"wires", name:"Провода", tags:"X:R", desc:"Годятся на что угодно — от роботов до подсвечивания истерики."},
    {id:"punctured_wheel", name:"Колесо проколотое", tags:"R:S", desc:"Круглое, но не едет — только для запчастей."},
    {id:"copper_wire", name:"Медная проволока", tags:"R", desc:"Тонкая, гибкая, всегда пригождается в электронике."},
    {id:"battery", name:"Батарейка", tags:"S:R", desc:"Заряд неизвестной свежести."},
    {id:"machine_oil", name:"Машинное масло", tags:"R", desc:"Смазывает механизмы и совесть."},
    {id:"rubber_chunk", name:"Кусок резины", tags:"R", desc:"Упругий, чёрный, пахнет гаражом."},
    {id:"plastic_chunk", name:"Кусок пластика", tags:"R", desc:"Лёгкий, дешёвый, вездесущий."}
  ],
  normal: [
    {id:"rubber_cube", name:"Куб из резины", tags:"S:R", desc:"Резиновый кубик. На удивление аккуратный."},
    {id:"board_pcb", name:"Плата", tags:"R", desc:"Сердце любой уважающей себя прошивки."},
    {id:"copper_ingot", name:"Медный слиток", tags:"R", desc:"Блестит благородно, проводит отлично."},
    {id:"fiberglass", name:"Стеклотекстолит", tags:"R", desc:"Основа для плат и печатных амбиций."},
    {id:"lead_ingot", name:"Свинцовый слиток", tags:"R", desc:"Тяжёлый настолько, что заставляет задуматься."},
    {id:"aluminum_ingot", name:"Алюминиевый слиток", tags:"R", desc:"Лёгкий, прочный, любимец инженеров."},
    {id:"plastic_cube", name:"Куб из пластика", tags:"S:R", desc:"Геометрически безупречный кусок пластика."},
    {id:"steelingot", name:"Стальной слиток", tags:"S:R", desc:"Надёжная основа половины местной техники."}
  ],
  rare: [
    {id:"steel_cube", name:"Куб из стали", tags:"S:R", desc:"Прочный кубик для серьёзных конструкций."},
    {id:"board_plus", name:"Плата+", tags:"R", desc:"Разогналась после апгрейда золотом."},
    {id:"gold_ingot", name:"Золотой слиток", tags:"R", desc:"Дорого, блестяще, слегка избыточно."},
    {id:"copper_cube", name:"Куб из меди", tags:"R", desc:"Медь, но в форме куба. Так надёжнее."},
    {id:"ion_battery", name:"Ионная батарея", tags:"R", desc:"Заряжена по-настоящему серьёзно."},
    {id:"bronze_cube", name:"Куб из бронзы", tags:"R", desc:"Сплав меди и алюминия в кубической форме."},
    {id:"tungsten_ingot", name:"Вольфрамовый слиток", tags:"R", desc:"Один из самых тугоплавких материалов в канализации."},
    {id:"whetstone", name:"Точильный камень", tags:"R:P", desc:"Заточит что угодно. Применения пока не нашли."},
    {id:"chassis_c", name:"Корпус C", tags:"RA", desc:"Средний корпус для среднего героизма — лёгкий, с упором на защиту.", slot:"chassis", partStats:{hp:6, shld:1}},
    {id:"chassis_b", name:"Корпус B", tags:"RA", desc:"Тяжёлый и живучий корпус — весь запас прочности вложен в HP.", slot:"chassis", partStats:{hp:10}},
    {id:"plasmotron", name:"Плазмотрон", tags:"R", desc:"Гудит угрожающе. Применения пока не нашли."}
  ],
  precious: [
    {id:"ion_accumulator", name:"Ионный аккумулятор", tags:"R", desc:"Хранит энергию, которой хватит надолго."},
    {id:"board_plusplus", name:"Плата++", tags:"R", desc:"Максимальная версия платы. Дальше только легенды."},
    {id:"tungsten_cube", name:"Куб из вольфрама", tags:"R", desc:"Почти неубиваемый кубик."},
    {id:"chassis_a", name:"Корпус A", tags:"RA", desc:"Топовый корпус для серьёзных роботов — превосходит и B, и B+ по всем статам.", slot:"chassis", partStats:{hp:12, shld:2}}
  ],
  legendary: [
    {id:"chassis_a_plus", name:"Корпус A+", tags:"RA", desc:"Вершина инженерной мысли этой канализации.", slot:"chassis", partStats:{hp:16, shld:3}},
    {id:"melt3r", name:"MELT3R", tags:"RW", desc:"Оружие, название которого пишут только капсом."}
  ]
};
for (const rarity of Object.keys(MECHA_CASE_POOL)){
  for (const it of MECHA_CASE_POOL[rarity]){
    if (!ITEM_DB[it.id]) ITEM_DB[it.id] = {...it, rarity};
  }
}

// Craft-only mecha items: chassis/firmware/movement tiers, weapons, refined materials.
// Movement ("Передвижение") tier items are homebrew (Claude's addition) since the source material
// named the part category but never specified its crafts — marked with " *".
const MECHA_CRAFT_ITEMS = [
  {id:"steel_rod", name:"Стальной прут", tags:"R", rarity:"normal", desc:"Универсальная деталь для полусотни рецептов."},
  {id:"bronze_ingot", name:"Бронзовый слиток", tags:"R", rarity:"normal", desc:"Сплав меди и алюминия, выкованный в Микрокузнице."},
  {id:"gold_cube", name:"Куб из золота", tags:"R", rarity:"precious", desc:"Блестящий кубик исключительно дорогого металла."},
  {id:"barrel_gun", name:"Дуло", tags:"R", rarity:"normal", desc:"Полдела для нормального оружия."},
  {id:"blade", name:"Лезвие", tags:"RW", rarity:"rare", desc:"Простое, острое, эффективное. Никаких хитростей — просто урон.", weaponEffect:{dmgDelta:2}},
  {id:"sar04", name:"SAR-04", tags:"RW", rarity:"precious", desc:"Серийное оружие для серийных побед. Чистая огневая мощь без изысков.", weaponEffect:{dmgDelta:4}},
  {id:"kosar", name:"«Косарь»", tags:"RW", rarity:"precious", desc:"Прорезает броню — часть щита противника попросту игнорируется.", weaponEffect:{dmgDelta:2, shldDelta:1, grantAbility:{type:"armor_pierce", amount:2}}},
  {id:"ion_turret", name:"Ионная турель", tags:"RW", rarity:"precious", desc:"Заряженные частицы проходят сквозь часть защиты противника.", weaponEffect:{dmgDelta:2, grantAbility:{type:"armor_pierce", amount:1}}},
  {id:"chassis_d", name:"Корпус D", tags:"RA", rarity:"trash", desc:"Начальный корпус. С чего-то надо начинать.", slot:"chassis", partStats:{hp:4}},
  {id:"chassis_d_plus", name:"Корпус D+", tags:"RA", rarity:"suchself", desc:"D, но с амбициями — чуть больше HP, защиты пока нет.", slot:"chassis", partStats:{hp:7}},
  {id:"chassis_c_plus", name:"Корпус C+", tags:"RA", rarity:"rare", desc:"C, доработанный до боевого состояния: больше HP, есть урон, защита та же.", slot:"chassis", partStats:{hp:9, shld:1, dmg:1}},
  {id:"chassis_b_plus", name:"Корпус B+", tags:"RA", rarity:"rare", desc:"Жертвует частью HP корпуса B ради заметно большей защиты.", slot:"chassis", partStats:{hp:8, shld:2}},
  {id:"firmware_t1", name:"Прошивка Т1.0", tags:"RF", rarity:"normal", desc:"Базовый интеллект. Считает до трёх и иногда попадает в уязвимое место.", slot:"firmware", partStats:{dmg:1, crit:5}},
  {id:"firmware_t2", name:"Прошивка Т2.0", tags:"RF", rarity:"rare", desc:"Научилась целиться на расстоянии и заметно чаще бьёт в критическую точку.", slot:"firmware", partStats:{dmg:2, crit:12}, partAbility:{type:"ranged_attack"}},
  {id:"firmware_t3", name:"Прошивка Т3.0", tags:"RF", rarity:"precious", desc:"Анализирует противника в реальном времени — почти каждый пятый удар критический.", slot:"firmware", partStats:{dmg:3, crit:22}, partAbility:{type:"mirror_enemy_dmg"}},
  {id:"wheels_d", name:"Колёса D *", tags:"RM", rarity:"trash", desc:"Едут. В основном по прямой. Изредка успевают увернуться.", slot:"movement", partStats:{shld:1, dodge:5}},
  {id:"wheels_c", name:"Колёса C *", tags:"RM", rarity:"suchself", desc:"Едут увереннее и чаще уходят с линии удара.", slot:"movement", partStats:{shld:1, hp:1, dodge:8}},
  {id:"treads_b", name:"Гусеницы B *", tags:"RM", rarity:"rare", desc:"Проедут где угодно и неплохо уклоняются на ходу.", slot:"movement", partStats:{shld:2, dodge:12}},
  {id:"jetpack_a", name:"Реактивный ранец A *", tags:"RM", rarity:"precious", desc:"Бьёт издалека и уклоняется в полёте лучше всех остальных вариантов.", slot:"movement", partStats:{shld:2, dmg:1, dodge:15}, partAbility:{type:"ranged_attack"}}
];
for (const it of MECHA_CRAFT_ITEMS) ITEM_DB[it.id] = it;

// Component crafts for the Mecha Workshop tab (materials -> chassis/firmware/movement/weapon parts).
const MECHA_RECIPES = [
  {id:"m_copper_wire", inputs:[{id:"copper_ingot",qty:1}], tools:["microforge"], output:{item:"copper_wire", qty:2}, label:"Медный слиток + Микрокузница(инстр.) = Медная проволока ×2"},
  {id:"m_steel_rod", inputs:[{id:"steelingot",qty:1}], tools:["microforge"], output:{item:"steel_rod", qty:2}, label:"Стальной слиток + Микрокузница(инстр.) = Стальной прут ×2"},
  {id:"m_board", inputs:[{id:"fiberglass",qty:1},{id:"copper_wire",qty:1}], tools:[], output:{item:"board_pcb", qty:1}, label:"Стеклотекстолит + Медная проволока = Плата"},
  {id:"m_bronze_ingot", inputs:[{id:"copper_ingot",qty:1},{id:"aluminum_ingot",qty:1}], tools:["microforge"], output:{item:"bronze_ingot", qty:2}, label:"Медный слиток + Алюминиевый слиток + Микрокузница(инстр.) = Бронзовый слиток ×2"},
  {id:"m_board_plus", inputs:[{id:"board_pcb",qty:1},{id:"gold_ingot",qty:1},{id:"copper_wire",qty:1}], tools:[], output:{item:"board_plus", qty:1}, label:"Плата + Золотой слиток + Медная проволока = Плата+"},
  {id:"m_board_plusplus", inputs:[{id:"board_plus",qty:1},{id:"gold_ingot",qty:1},{id:"ion_accumulator",qty:1}], tools:[], output:{item:"board_plusplus", qty:1}, label:"Плата+ + Золотой слиток + Ионный аккумулятор = Плата++"},
  {id:"m_firmware_t1", inputs:[{id:"board_pcb",qty:1},{id:"plastic_chunk",qty:1},{id:"battery",qty:1}], tools:[], output:{item:"firmware_t1", qty:1}, label:"Плата + Кусок пластика + Батарейка = Прошивка Т1.0"},
  {id:"m_firmware_t2", inputs:[{id:"board_plus",qty:1},{id:"steelingot",qty:1},{id:"ion_battery",qty:1}], tools:[], output:{item:"firmware_t2", qty:1}, label:"Плата+ + Стальной слиток + Ионная батарея = Прошивка Т2.0"},
  {id:"m_firmware_t3", inputs:[{id:"board_plusplus",qty:1},{id:"steel_cube",qty:1},{id:"rubber_chunk",qty:1},{id:"ion_accumulator",qty:1}], tools:[], output:{item:"firmware_t3", qty:1}, label:"Плата++ + Куб из стали + Кусок резины + Ионный аккумулятор = Прошивка Т3.0"},
  {id:"m_chassis_d", inputs:[{id:"aluminum_ingot",qty:1},{id:"plastic_chunk",qty:1}], tools:[], output:{item:"chassis_d", qty:1}, label:"Алюминиевый слиток + Кусок пластика = Корпус D"},
  {id:"m_chassis_dplus", inputs:[{id:"chassis_d",qty:1},{id:"steel_rod",qty:1}], tools:[], output:{item:"chassis_d_plus", qty:1}, label:"Корпус D + Стальной прут = Корпус D+"},
  {id:"m_chassis_c", inputs:[{id:"bronze_ingot",qty:1},{id:"plastic_chunk",qty:1}], tools:[], output:{item:"chassis_c", qty:1}, label:"Бронзовый слиток + Кусок пластика = Корпус C"},
  {id:"m_chassis_cplus", inputs:[{id:"chassis_c",qty:1},{id:"bronze_cube",qty:1},{id:"steel_rod",qty:1}], tools:[], output:{item:"chassis_c_plus", qty:1}, label:"Корпус C + Куб из бронзы + Стальной прут = Корпус C+"},
  {id:"m_chassis_b", inputs:[{id:"steelingot",qty:1},{id:"aluminum_ingot",qty:1}], tools:[], output:{item:"chassis_b", qty:1}, label:"Стальной слиток + Алюминиевый слиток = Корпус B"},
  {id:"m_chassis_bplus", inputs:[{id:"chassis_b",qty:1},{id:"steel_cube",qty:1}], tools:[], output:{item:"chassis_b_plus", qty:1}, label:"Корпус B + Куб из стали = Корпус B+"},
  {id:"m_chassis_a", inputs:[{id:"tungsten_ingot",qty:1},{id:"steelingot",qty:1}], tools:[], output:{item:"chassis_a", qty:1}, label:"Вольфрамовый слиток + Стальной слиток = Корпус A"},
  {id:"m_chassis_aplus", inputs:[{id:"chassis_a",qty:1},{id:"tungsten_cube",qty:1},{id:"steel_rod",qty:1}], tools:[], output:{item:"chassis_a_plus", qty:1}, label:"Корпус A + Куб из вольфрама + Стальной прут = Корпус A+"},
  {id:"m_steel_cube", inputs:[{id:"steelingot",qty:2}], tools:["microforge"], output:{item:"steel_cube", qty:1}, label:"Стальной слиток ×2 + Микрокузница(инстр.) = Куб из стали"},
  {id:"m_bronze_cube", inputs:[{id:"bronze_ingot",qty:2}], tools:["microforge"], output:{item:"bronze_cube", qty:1}, label:"Бронзовый слиток ×2 + Микрокузница(инстр.) = Куб из бронзы"},
  {id:"m_tungsten_cube", inputs:[{id:"tungsten_ingot",qty:2}], tools:["microforge"], output:{item:"tungsten_cube", qty:1}, label:"Вольфрамовый слиток ×2 + Микрокузница(инстр.) = Куб из вольфрама"},
  {id:"m_gold_cube", inputs:[{id:"gold_ingot",qty:2}], tools:["microforge"], output:{item:"gold_cube", qty:1}, label:"Золотой слиток ×2 + Микрокузница(инстр.) = Куб из золота"},
  {id:"m_barrel_gun", inputs:[{id:"steel_rod",qty:1}], tools:["microforge","processor"], output:{item:"barrel_gun", qty:1}, label:"Стальной прут + Микрокузница(инстр.) + Обработочная машина(инстр.) = Дуло"},
  {id:"m_blade", inputs:[{id:"steelingot",qty:1}], tools:["processor"], output:{item:"blade", qty:1}, label:"Стальной слиток + Обработочная машина(инстр.) = Лезвие"},
  {id:"m_sar04", inputs:[{id:"barrel_gun",qty:1},{id:"steelingot",qty:1}], tools:[], output:{item:"sar04", qty:1}, label:"Дуло + Стальной слиток = SAR-04"},
  {id:"m_kosar", inputs:[{id:"blade",qty:1},{id:"tungsten_ingot",qty:1},{id:"machine_oil",qty:1}], tools:[], output:{item:"kosar", qty:1}, label:"Лезвие + Вольфрамовый слиток + Машинное масло = «Косарь»"},
  {id:"m_ion_turret", inputs:[{id:"ion_battery",qty:1},{id:"bronze_ingot",qty:1},{id:"board_pcb",qty:1}], tools:[], output:{item:"ion_turret", qty:1}, label:"Ионная батарея + Бронзовый слиток + Плата = Ионная турель"},
  {id:"m_melt3r", inputs:[{id:"gold_cube",qty:1},{id:"tungsten_ingot",qty:1}], tools:["microforge"], output:{item:"melt3r", qty:1}, label:"Куб из золота + Микрокузница(инстр.) + Вольфрамовый слиток = MELT3R"},
  {id:"m_wheels_d", inputs:[{id:"punctured_wheel",qty:1},{id:"rubber_chunk",qty:1}], tools:[], output:{item:"wheels_d", qty:1}, label:"Колесо проколотое + Кусок резины = Колёса D *", homebrew:true},
  {id:"m_wheels_d_alt", inputs:[{id:"steelingot",qty:1},{id:"nail",qty:2}], tools:[], output:{item:"wheels_d", qty:1}, label:"Стальной слиток + Гвоздь ×2 = Колёса D * (запасной рецепт попроще)", homebrew:true},
  {id:"m_wheels_c", inputs:[{id:"wheels_d",qty:1},{id:"steelingot",qty:1}], tools:[], output:{item:"wheels_c", qty:1}, label:"Колёса D * + Стальной слиток = Колёса C *", homebrew:true},
  {id:"m_treads_b", inputs:[{id:"wheels_c",qty:1},{id:"steel_cube",qty:1}], tools:[], output:{item:"treads_b", qty:1}, label:"Колёса C * + Куб из стали = Гусеницы B *", homebrew:true},
  {id:"m_jetpack_a", inputs:[{id:"treads_b",qty:1},{id:"ion_battery",qty:1},{id:"tungsten_ingot",qty:1}], tools:[], output:{item:"jetpack_a", qty:1}, label:"Гусеницы B * + Ионная батарея + Вольфрамовый слиток = Реактивный ранец A *", homebrew:true}
];

// Weapon (RW) items are applied to an already-assembled robot via the same "use item on unit" action as organic buffs.
for (const it of MECHA_CRAFT_ITEMS){
  if (it.weaponEffect) ITEM_EFFECTS[it.id] = {...it.weaponEffect, robotOnly:true};
}
ITEM_EFFECTS["melt3r"] = {dmgDelta:5, shldDelta:1, grantAbility:{type:"armor_pierce", amount:2}, robotOnly:true};

const MECHA_CASE_COST = 10; // Ио per open — cheaper than Big Case (15) since its drops are narrower-purpose
const CRAP_CASE_COST = 7; // Ио per open — cheapest case, reuses Big Case's trash..rare pools with heavier low-end weighting

// ===================== CASINO: КАЗИНО КРИПТО-ДЖОКЕРА =====================
// 24 equal physical segments (uniform 1/24 chance each) — colors give the effective
// red/black/green odds; a few carry a "special" hardmode-only icon.
const WHEEL_SEGMENTS = (function(){
  const segs = [];
  for (let i=0;i<24;i++){
    let color = i%2===0 ? "red" : "black";
    let special = null;
    if (i===5 || i===12) color = "green";
    if (i===2) special = "crates";
    if (i===9) special = "unit";
    if (i===14) special = "fight";
    if (i===19) special = "triple_loss";
    segs.push({idx:i, color, special});
  }
  return segs;
})();
const WHEEL_SPECIAL_EMOJI = { crates:"🎁", unit:"🐣", fight:"💀", triple_loss:"📉" };
const WHEEL_SPIN_MS = 5500;
const WHEEL_PAYOUT = { red:2, black:2, green:8 };

const JOKER_WIN_LINES = [
  "БУМ! Видел? Я говорил, это как биткоин в 2013!",
  "Красавчик! Теперь диверсифицируй портфель — поставь всё на следующий спин!",
  "Ты в игре! Я в Ламборгини! Все счастливы!",
  "Вот это я понимаю — доходность! Мой финансовый советник в тюрьме, но метод рабочий!",
  "Ставь ещё! Удача — это просто нереализованная волатильность!",
  "Видишь? Система не обманывает! Ну, почти никогда!",
  "Это называется «алгоритм»! Не благодари, просто ставь больше!",
  "Йоу, у тебя талант! Ко мне такие нужны — вакансия есть, зарплата в АР!",
  "Умножил! Как я — только я умножил чужие деньги, а ты свои. Прогресс!"
];
const JOKER_LOSE_LINES = [
  "Ауч. Ну и что. Рынок волатилен, детка!",
  "Технически это не потеря, а обучающий опыт. Платный.",
  "Слушай, я тоже терял. Один раз — весь остров. Живой же!",
  "Не расстраивайся! В следующий раз повезёт. Или через раз. Или никогда — статистика штука такая!",
  "Это НЕ развод. Развод — это когда тебе не дают крутить снова. А тебе дают! Крути ещё!",
  "Ха! Классика. Но ты почти выиграл — прямо соседний сектор!",
  "Списывай на опыт. Или на меня. Мне уже всё равно, я в шортах на пляже.",
  "Плюс — теперь ты знаешь, каково это. Минус — карман твой. Баланс!",
  "Всё по-честному! Колесо не врёт. Ну, почти."
];
const JOKER_SPECIAL_LINES = {
  crates: ["О, бонусные ящики! На моей яхте это называется «утешительный приз». Забирай, не обеднею."],
  unit: ["Юнит в подарок! Слабенький, но твой. Как мои первые инвесторы."],
  fight: ["Опаньки! Сектор сюрприза! Там кое-кто хочет поговорить о твоих долгах. Удачи!"],
  triple_loss: ["ТРОЙНОЙ УБЫТОК! Это называется «левередж», детка! Читай мелкий шрифт — если бы он был."]
};

// Casino-only ad-hoc encounter for the "fight" hardmode segment (not a Sewer mob).
const CASINO_ENEMY = { name:"Коллектор долгов *", hp:35, dmg:5, shld:2 };
const CASINO_WEAK_UNIT_POOL = ["brave_warrior","bob","slug"];

// ===================== CASE CATALOG (for the "Каталог" tab) =====================
const CASE_CATALOG = [
  {key:"big", label:"Большой кейс", pool:BIG_CASE_POOL},
  {key:"mecha", label:"Мех-кейс", pool:MECHA_CASE_POOL}
  // Кейс Говна reuses Big Case's own trash..rare pools (just different odds), so it isn't
  // listed as a separate catalog section — its possible drops already show under "Большой кейс".
];

// ===================== SELLING (Лавка Мартына) =====================
// Sell price by rarity tier. Tuned so opening a Big Case (15 Ио) and selling everything you get
// pays back roughly 20-30% on average.
const SELL_PRICE = {
  trash: 1, suchself: 1, normal: 2, rare: 4,
  precious: 7, legendary: 12, artifact: 20, inonecopy: 40
};

const MARTYN_LINES = [
  "Хороший товар. Не спрашивай, откуда я знаю, что такое «хороший товар».",
  "Раньше я решал вопросы иначе. Теперь просто торгую. Это лучше. Наверное.",
  "*долгая пауза* ...Держи Ио.",
  "Знаешь, за такое раньше я бы... а, неважно. Я завязал.",
  "Смотрит на тебя так, будто оценивает — товар или тебя самого.",
  "Не благодари. Просто уходи побыстрее.",
  "У меня раньше было другое имя. Теперь я просто Мартын. Продавец.",
  "Хорошая сделка. Такие я уважаю. Уважал бы, если бы ещё уважал что-то.",
  "*кивает, не отводя взгляда*",
  "Ио на бочку — значит, Ио на бочку. Я слов на ветер не бросаю. Как раньше.",
  "У тебя интересный подход к хламу. Мне нравится. Или пугает. Сложно сказать.",
  "Забирай Ио. И не оглядывайся. Просто... привычка так говорить.",
  "Я слышал о тебе. Точнее — не слышал. Но выглядишь как человек, о котором стоит услышать.",
  "*хрустит костяшками, потом смущённо прячет руки* ...Извини. Профессиональная деформация.",
  "Каждая вещь имеет цену. Я в своё время в этом хорошо разбирался. По другим причинам.",
  "Бизнес есть бизнес. Спокойный, законный бизнес. Ключевое слово — законный.",
  "Здесь честные цены. Я и раньше был по-своему честным. Просто иначе.",
  "*вздыхает* ...Дни спокойнее, когда просто продаёшь вещи, а не наоборот.",
  "У меня к тебе вопросов нет. У меня вообще ни к кому вопросов больше нет. Завязал.",
  "Хорошая партия. Не первая такая, что я вижу. Не последняя, что я забуду.",
  "Ио получишь сейчас. Остальное — как договаривались. Ой, то есть — нет никакого «остального».",
  "*молча протягивает Ио, глядя куда-то мимо тебя*",
  "Всё честно, всё прозрачно. Никто не пострадал. В этот раз.",
  "Забавно — раньше я забирал вещи. Теперь покупаю. Прогресс."
];


const SEWER_MOBS = {
  1: {name:"Псевдосфера псевдокоричневой псевдомассы", hp:15, dmg:3, shld:0},
  2: {name:"Плохая вода", hp:20, dmg:2, shld:0, flag:"badwater"},
  3: {name:"Неевклид", hp:20, dmg:3, shld:1},
  4: {name:"Прямая", hp:10, dmg:2, shld:2},
  5: {name:"Кривая", hp:5, dmg:3, shld:0},
  6: {name:"Странная", hp:15, dmg:2, shld:0},
  7: {name:"Гиперболический мох", hp:7, dmg:2, shld:1},
  8: {name:"Бочка", hp:30, dmg:0, shld:3, flag:"barrel"},
  9: {name:"Парадокс", hp:40, dmg:2, shld:2, boss:true, flag:"paradox", scalingDmgPerKill:1},
  10:{name:"Вестник Евклида", hp:1, dmg:2, shld:1},
  11:{name:"Евклид", hp:50, dmg:4, shld:2, boss:true, flag:"euclid"},
  12:{name:"Александр", hp:8, dmg:3, shld:1}
};

const SEWER_ROUTES = [
  [4,5,6,2,3],
  [1,2,7,10,3],
  [6,1,6,8,7],
  [2,4,5,10,11],
  [6,1,5,9,12],
  [5,1,3,12,10],
  [3,6,10,11,8]
];

function rollSewerRewards(flags, sumDmgTaken){
  const reward = {items:{}, io:0, ar:0};
  const biotrashRoll = Math.floor(Math.random()*101);
  if (biotrashRoll < 60) reward.items.biotrash = (reward.items.biotrash||0)+1;
  else if (biotrashRoll < 90) reward.items.biotrash = (reward.items.biotrash||0)+2;
  else reward.items.biotrash = (reward.items.biotrash||0)+3;

  let ioAmount = Math.floor(50 + Math.random()*50); // baseline 50-100
  if (flags.euclid){
    const euclidLoot = Math.floor(Math.random()*101);
    if (euclidLoot > 49){
      reward.items.brownbook = (reward.items.brownbook||0)+1;
      ioAmount = Math.floor(80 + Math.random()*31); // 80-110
    } else {
      ioAmount = Math.floor(50 + Math.random()*31); // 50-80
    }
    if (Math.floor(Math.random()*101) > 79) reward.ar = 2 + Math.floor(Math.random()*3); // rare 2-4 АР bonus
  }
  if (flags.badwater){
    if (Math.floor(Math.random()*101) > 29) reward.items.waterchunk = (reward.items.waterchunk||0)+1;
  }
  if (flags.paradox){
    if (Math.floor(Math.random()*101) > 89) reward.items.madnessjar = (reward.items.madnessjar||0)+1;
  }
  if (flags.barrel){
    reward.items.board = (reward.items.board||0)+1;
  }
  if (sumDmgTaken <= 10) ioAmount = Math.floor(ioAmount*1.4);
  else if (sumDmgTaken > 40) ioAmount = Math.floor(ioAmount*0.8);
  reward.io = ioAmount;
  return reward;
}

// Diogen the trader - appears if Барrel destroyed on the route
const DIOGEN_TRADES = [
  {id:"t1", give:{unit:"elite_robocandy", qty:1}, get:{unit:"guy_placeholder", qty:1}, label:"Элитная робоконфетка → Чел"},
  {id:"t2", give:{io:20}, get:{item:"upgradebook", qty:1}, label:"20 Ио → Магическая книга улучшения (адаптировано вместо Алхи кейса)"},
  {id:"t3", give:{io:60}, get:{item:"barrelitem", qty:1}, label:"60 Ио → Бочка"},
  {id:"t4", give:{item:"biotrash", qty:1}, get:{io:20}, label:"Биомусор → 20 Ио"},
  {id:"t5", give:{item:"grime", qty:1}, get:{io:10}, label:"Чернь → 10 Ио"},
  {id:"t6", give:{io:50}, get:{ar:5}, label:"50 Ио → 5 АР («не спрашивай, откуда курс»)", homebrew:true}
];

console.log("data module ok", Object.keys(ITEM_DB).length, "items,", Object.keys(UNIT_DB).length, "units,", RECIPES.length, "recipes");

// ===================== GAME STATE =====================

var uidCounter = 1;
function nextUid(){ return "u" + (uidCounter++); }

function makeUnitInstance(unitId){
  const base = UNIT_DB[unitId];
  if (!base) return null;
  return {
    uid: nextUid(),
    unitId: unitId,
    name: base.name,
    hp: base.hp,
    maxHp: base.hp,
    dmg: base.dmg,
    shld: base.shld,
    abilities: base.abilities || [],
    turnCounter: 0,
    dead: false
  };
}

function makeEnemyInstance(mobKey){
  const base = SEWER_MOBS[mobKey];
  return {
    uid: nextUid(),
    unitId: "mob_"+mobKey,
    name: base.name,
    hp: base.hp,
    maxHp: base.hp,
    dmg: base.dmg,
    shld: base.shld,
    boss: !!base.boss,
    flag: base.flag || null,
    scalingDmgPerKill: base.scalingDmgPerKill || 0,
    abilities: [],
    turnCounter: 0,
    dead: false
  };
}

var player = {
  io: 120,
  ar: 0,
  inventory: {}, // itemId -> count
  units: [],     // array of unit instances (roster, not deployed)
  discovered: {}, // itemId -> true, for the Каталог tab
  lastArDay: null
};

function addItem(id, qty){
  qty = qty || 1;
  player.inventory[id] = (player.inventory[id]||0) + qty;
  player.discovered[id] = true;
}
function removeItem(id, qty){
  qty = qty || 1;
  if (!player.inventory[id] || player.inventory[id] < qty) return false;
  player.inventory[id] -= qty;
  if (player.inventory[id] <= 0) delete player.inventory[id];
  return true;
}
function hasItem(id, qty){
  qty = qty || 1;
  return (player.inventory[id]||0) >= qty;
}

function hasLuckCharm(){
  return player.units.some(u => !u.dead && u.abilities.some(a=>a.type==="luck_charm"));
}

// TESTING TOGGLE: set to false to restore normal Ио spending once testing is done.
var TESTING_INFINITE_IO = true;
function canAffordIo(amount){ return TESTING_INFINITE_IO || player.io >= amount; }
function spendIo(amount){ if (!TESTING_INFINITE_IO) player.io -= amount; }
function canAffordAr(amount){ return player.ar >= amount; }
function spendAr(amount){ player.ar -= amount; }

// ===================== CASE OPENING =====================
function openBigCase(){
  let roll = Math.floor(Math.random()*101); // 0..100
  if (hasLuckCharm()) roll = Math.min(100, roll + 3);
  let rarity;
  if (roll <= 24) rarity = "trash";
  else if (roll <= 45) rarity = "suchself";
  else if (roll <= 64) rarity = "normal";
  else if (roll <= 79) rarity = "rare";
  else if (roll <= 89) rarity = "precious";
  else if (roll <= 95) rarity = "legendary";
  else if (roll <= 98) rarity = "artifact";
  else if (roll === 99) rarity = "inonecopy";
  else return {mimic:true};
  const pool = BIG_CASE_POOL[rarity];
  const drop = pool[Math.floor(Math.random()*pool.length)];
  addItem(drop.id, 1);
  return {mimic:false, item:drop, rarity};
}

function openMechaCase(){
  const roll = Math.floor(Math.random()*101);
  let rarity;
  if (roll <= 39) rarity = "trash";
  else if (roll <= 69) rarity = "normal";
  else if (roll <= 88) rarity = "rare";
  else if (roll <= 97) rarity = "precious";
  else rarity = "legendary";
  const pool = MECHA_CASE_POOL[rarity];
  const drop = pool[Math.floor(Math.random()*pool.length)];
  addItem(drop.id, 1);
  return {item:drop, rarity};
}

// Кейс Говна: cheapest case, reuses Big Case's own trash..rare pools with heavier low-end odds
// (70% trash+suchself combined, nothing above rare).
function openCrapCase(){
  const roll = Math.floor(Math.random()*101);
  let rarity;
  if (roll <= 39) rarity = "trash";
  else if (roll <= 69) rarity = "suchself";
  else if (roll <= 89) rarity = "normal";
  else rarity = "rare";
  const pool = BIG_CASE_POOL[rarity];
  const drop = pool[Math.floor(Math.random()*pool.length)];
  addItem(drop.id, 1);
  return {item:drop, rarity};
}

const BIG_CASE_COST = 15; // Ио per open, house rule (no cost specified in source material)

// ===================== CRAFTING =====================
function canCraft(recipe){
  for (const inp of recipe.inputs){
    if (!hasItem(inp.id, inp.qty)) return false;
  }
  for (const toolId of (recipe.tools||[])){
    if (!hasItem(toolId, 1)) return false;
  }
  if (recipe.requiresUnit){
    const has = player.units.some(u => u.unitId === recipe.requiresUnit && !u.dead);
    if (!has) return false;
  }
  return true;
}

function doCraft(recipeId){
  const recipe = RECIPES.find(r => r.id === recipeId) || MECHA_RECIPES.find(r => r.id === recipeId);
  if (!recipe || !canCraft(recipe)) return {ok:false, msg:"Не хватает компонентов"};
  for (const inp of recipe.inputs) removeItem(inp.id, inp.qty);
  if (recipe.requiresUnit){
    const idx = player.units.findIndex(u => u.unitId === recipe.requiresUnit && !u.dead);
    if (idx >= 0) player.units.splice(idx,1);
  }
  const out = recipe.output;
  if (out.unit){
    for (let i=0;i<out.qty;i++){
      const inst = makeUnitInstance(out.unit);
      if (inst) player.units.push(inst);
    }
  } else if (out.item){
    addItem(out.item, out.qty);
  }
  return {ok:true, output:out};
}

// ===================== BATTLE ENGINE =====================
// Sides have front[] and back[] arrays of fixed length with null or unit-instance.
const FRONT_SLOTS = 4;
const BACK_SLOTS = 4;

function emptySide(){
  return { front: new Array(FRONT_SLOTS).fill(null), back: new Array(BACK_SLOTS).fill(null) };
}

var battle = null; // current battle state

function startBattle(mobKey, opts){
  const enemy = emptySide();
  if (mobKey !== null && mobKey !== undefined){
    enemy.front[0] = makeEnemyInstance(mobKey);
  }
  battle = {
    player: emptySide(),
    enemy: enemy,
    round: 1,
    log: [],
    phase: "setup", // setup -> playerTurn -> resolving -> enemyTurn -> over
    playerDestroyedCount: 0,
    sumDmgTaken: 0,
    result: null,
    mobKey: mobKey
  };
  return battle;
}

function logMsg(text){
  battle.log.push(text);
}

function aliveList(sideRow){
  return sideRow.map((u,i)=>({u,i})).filter(x=>x.u && !x.u.dead);
}

function firstAlive(sideRow){
  const list = aliveList(sideRow);
  return list.length ? list[0] : null;
}

// deploy from roster to a slot during setup
function deployUnit(uid, line, slotIndex){
  if (battle.phase !== "setup") return false;
  const idx = player.units.findIndex(u=>u.uid===uid);
  if (idx < 0) return false;
  const slots = line === "front" ? battle.player.front : battle.player.back;
  if (slots[slotIndex]) return false;
  const [unit] = player.units.splice(idx,1);
  slots[slotIndex] = unit;
  return true;
}
function undeployUnit(line, slotIndex){
  if (battle.phase !== "setup") return false;
  const slots = line === "front" ? battle.player.front : battle.player.back;
  const unit = slots[slotIndex];
  if (!unit) return false;
  slots[slotIndex] = null;
  player.units.push(unit);
  return true;
}

function beginRounds(){
  if (battle.phase !== "setup") return false;
  if (aliveList(battle.player.front).length===0 && aliveList(battle.player.back).length===0) return false;
  battle.phase = "playerTurn";
  logMsg("Битва начинается!");
  return true;
}

// movement during playerTurn: swap two slots (can be adjacent-left/right within a line, or front<->back same column)
function moveUnit(fromLine, fromIdx, toLine, toIdx){
  if (battle.phase !== "playerTurn") return false;
  const fromArr = fromLine==="front"?battle.player.front:battle.player.back;
  const toArr = toLine==="front"?battle.player.front:battle.player.back;
  if (!fromArr[fromIdx]) return false;
  const tmp = toArr[toIdx];
  toArr[toIdx] = fromArr[fromIdx];
  fromArr[fromIdx] = tmp;
  return true;
}

function effectiveShld(unit, lineName, rowArr, idx){
  let bonus = 0;
  for (const ab of unit.abilities){
    if (ab.type==="buff_in_back" && lineName==="back") bonus += (ab.shld||0);
  }
  if (rowArr && idx!==undefined){
    const left = rowArr[idx-1], right = rowArr[idx+1];
    for (const neighbor of [left, right]){
      if (!neighbor || neighbor.dead) continue;
      for (const ab of neighbor.abilities){
        if (ab.type==="aura_shield_adjacent") bonus += (ab.shld||0);
      }
    }
  }
  return unit.shld + bonus;
}

function dealCleaveDamage(targetSide, totalDmg, isRanged, pierce){
  // apply totalDmg across front row first (unless isRanged into back), overflow spills to next alive slot, then back row
  let remaining = totalDmg;
  pierce = pierce || 0;
  const rows = isRanged
    ? [{name:"back",arr:targetSide.back},{name:"front",arr:targetSide.front}]
    : [{name:"front",arr:targetSide.front},{name:"back",arr:targetSide.back}];
  for (const row of rows){
    for (let i=0;i<row.arr.length && remaining>0;i++){
      const u = row.arr[i];
      if (!u || u.dead) continue;
      if (u.dodgeChance && Math.random()*100 < u.dodgeChance){
        logMsg(u.name+" уклоняется от всей атаки!");
        remaining = 0;
        break;
      }
      const shld = Math.max(0, effectiveShld(u, row.name, row.arr, i) - pierce);
      const dealt = Math.max(0, remaining - shld);
      const actualDealt = Math.min(dealt, u.hp);
      u.hp -= actualDealt;
      remaining = remaining - shld - actualDealt;
      if (remaining < 0) remaining = 0;
      if (u.hp <= 0){
        const reviveAbility = u.abilities.find(a=>a.type==="revive_once" && !u.usedRevive);
        if (reviveAbility){
          u.usedRevive = true;
          u.hp = 1;
          logMsg(u.name+" не сдаётся и поднимается с 1 HP!");
        } else {
          u.dead = true;
          onUnitDeath(u, targetSide);
        }
      } else {
        triggerOnHit(u, targetSide);
        if (remaining <= 0) break;
      }
      if (remaining <= 0) break;
    }
    if (remaining <= 0) break;
  }
}

function triggerOnHit(unit, side){
  for (const ab of unit.abilities){
    if (ab.type === "on_low_hp_summon" && unit.hp>0 && unit.hp<=ab.threshold){
      spawnIntoSide(side, ab.unit);
      logMsg(unit.name+" в панике призывает подкрепление!");
    }
    if (ab.type === "on_hit_summon" && unit.hp>0){
      spawnIntoSide(side, ab.unit);
      logMsg(unit.name+" призывает союзника от боли!");
    }
    if (ab.type === "chaos_clone" && unit.hp>0 && Math.random()<ab.prob){
      const cloned = spawnIntoSide(side, unit.unitId);
      if (cloned) logMsg(unit.name+" необъяснимым образом раздваивается!");
    }
  }
}

function onUnitDeath(unit, side){
  const isPlayerSide = side===battle.player;
  if (isPlayerSide) battle.playerDestroyedCount++;
  logMsg(unit.name+" уничтожен(а)!");
  for (const ab of unit.abilities){
    if (ab.type === "on_death_drop" && isPlayerSide){
      addItem(ab.item, 1);
      logMsg("Выпадает: "+itemName(ab.item));
    }
  }
}

function spawnIntoSide(side, unitId){
  const inst = makeUnitInstance(unitId);
  if (!inst) return false;
  for (const slot of [side.front, side.back]){
    for (let i=0;i<slot.length;i++){
      if (!slot[i]){ slot[i]=inst; return true; }
    }
  }
  return false; // no room
}

function rollCritDmg(u, baseDmg){
  const crit = u.critChance || 0;
  if (crit>0 && Math.random()*100 < crit){
    logMsg(u.name+" наносит критический удар!");
    return baseDmg*2;
  }
  return baseDmg;
}

function maxArmorPierce(units){
  let best = 0;
  for (const u of units){
    for (const ab of u.abilities){
      if (ab.type==="armor_pierce") best = Math.max(best, ab.amount||0);
    }
  }
  return best;
}

function resolvePlayerAttack(){
  if (battle.phase !== "playerTurn") return;
  battle.phase = "resolving";
  let normalDmg = 0, rangedDmg = 0;
  const enemyFrontAlive = firstAlive(battle.enemy.front);
  const frontUnits = aliveList(battle.player.front).map(x=>x.u);
  const backUnits = aliveList(battle.player.back).map(x=>x.u);
  const contributingNormal = [], contributingRanged = [];
  for (const u of frontUnits){
    const ranged = u.abilities.some(a=>a.type==="ranged_attack");
    const mirrors = u.abilities.some(a=>a.type==="mirror_enemy_dmg");
    const baseDmg = (mirrors && enemyFrontAlive) ? enemyFrontAlive.u.dmg : u.dmg;
    if (mirrors && enemyFrontAlive) logMsg(u.name+" считывает повадки "+enemyFrontAlive.u.name+" и бьёт на "+baseDmg+".");
    const dmg = rollCritDmg(u, baseDmg);
    if (ranged){ rangedDmg += dmg; contributingRanged.push(u); } else { normalDmg += dmg; contributingNormal.push(u); }
  }
  for (const u of backUnits){
    const ranged = u.abilities.some(a=>a.type==="ranged_attack");
    if (ranged){ rangedDmg += rollCritDmg(u, u.dmg); contributingRanged.push(u); } // only ranged units can act from back
  }
  // bard periodic heal
  for (const {u} of [...aliveList(battle.player.front), ...aliveList(battle.player.back)]){
    for (const ab of u.abilities){
      if (ab.type==="periodic_heal"){
        u.turnCounter++;
        if (u.turnCounter % ab.every === 0){
          const target = [...aliveList(battle.player.front), ...aliveList(battle.player.back)]
            .map(x=>x.u).filter(x=>x!==u && x.hp<x.maxHp).sort((a,b)=>a.hp-b.hp)[0];
          if (target){
            target.hp = Math.min(target.maxHp, target.hp+ab.amount);
            logMsg(u.name+" исцеляет "+target.name+" на "+ab.amount+" HP.");
          }
        }
      }
    }
  }
  if (normalDmg>0) dealCleaveDamage(battle.enemy, normalDmg, false, maxArmorPierce(contributingNormal));
  if (rangedDmg>0) dealCleaveDamage(battle.enemy, rangedDmg, true, maxArmorPierce(contributingRanged));
  logMsg("Ваша армия наносит "+(normalDmg+rangedDmg)+" урона.");

  if (aliveList(battle.enemy.front).length===0 && aliveList(battle.enemy.back).length===0){
    endBattle(true);
    return;
  }
  battle.phase = "enemyTurn";
  resolveEnemyAttack();
}

function resolveEnemyAttack(){
  const enemies = [...aliveList(battle.enemy.front), ...aliveList(battle.enemy.back)].map(x=>x.u);
  let total = 0;
  for (const e of enemies){
    let d = e.dmg;
    if (e.scalingDmgPerKill) d += e.scalingDmgPerKill*battle.playerDestroyedCount;
    total += d;
  }
  if (total>0){
    dealCleaveDamage(battle.player, total, false, maxArmorPierce(enemies));
    battle.sumDmgTaken += total;
    logMsg("Противник наносит "+total+" урона.");
  }
  if (aliveList(battle.player.front).length===0 && aliveList(battle.player.back).length===0){
    endBattle(false);
    return;
  }
  battle.round++;
  battle.phase = "playerTurn";
}

function endBattle(victory){
  battle.phase = "over";
  battle.result = victory ? "victory" : "defeat";
  // return surviving deployed units to roster
  for (const row of [battle.player.front, battle.player.back]){
    for (const u of row){
      if (u && !u.dead){
        for (const ab of u.abilities){
          if (ab.type==="post_battle_full_heal") u.hp = u.maxHp;
          if (ab.type==="post_battle_heal_adjacent") u.hp = Math.min(u.maxHp, u.hp+ab.amount);
          if (victory && ab.type==="post_battle_lay_item"){
            const pool = BIG_CASE_POOL.trash;
            const drop = pool[Math.floor(Math.random()*pool.length)];
            addItem(drop.id, 1);
            logMsg(u.name+" откладывает: "+drop.name);
          }
          if (victory && ab.type==="post_battle_bonus_io"){
            player.io += ab.amount;
            logMsg(u.name+" находит ещё "+ab.amount+" Ио в карманах врага.");
          }
        }
        player.units.push(u);
      }
    }
  }
  if (victory){
    logMsg("Противник повержен!");
  } else {
    logMsg("Отряд разбит...");
  }
}

// ===================== ITEM-ON-UNIT INTERACTIONS =====================
// Finds a unit either in the roster or currently deployed in battle.
function findRosterOrDeployedUnit(uid){
  const inRoster = player.units.find(u=>u.uid===uid);
  if (inRoster) return {unit:inRoster, inRoster:true};
  if (battle){
    for (const row of [battle.player.front, battle.player.back]){
      for (const u of row){ if (u && u.uid===uid) return {unit:u, inRoster:false}; }
    }
  }
  return {unit:null, inRoster:false};
}

// Returns {ok:boolean, msg:string}. Feed-transforms only work on roster units;
// generic stat/heal effects also work on deployed units mid-battle if the item is battleUsable.
function useItemOnUnit(uid, itemId){
  const found = findRosterOrDeployedUnit(uid);
  const unit = found.unit;
  if (!unit) return {ok:false, msg:"Юнит не найден."};
  if (!hasItem(itemId, 1)) return {ok:false, msg:"Предмета не хватает."};

  // 1) unit-specific feed transformation takes priority (roster only)
  if (found.inRoster){
    const feedAbility = unit.abilities.find(a=>a.type==="feed_transform" && a.item===itemId);
    if (feedAbility){
      removeItem(itemId, 1);
      const idx = player.units.findIndex(u=>u.uid===uid);
      const into = makeUnitInstance(feedAbility.into);
      if (into) player.units[idx] = into;
      return {ok:true, msg:unit.name+" съедает "+itemName(itemId)+" и превращается в "+ (into?into.name:"нечто новое") + "!", transformed:true};
    }
  }

  // 2) generic stat/heal buff item (organic buffs, robot weapons via robotOnly, battle items via battleUsable)
  const eff = ITEM_EFFECTS[itemId];
  if (eff){
    if (eff.robotOnly && !unit.isRobot) return {ok:false, msg:"Это подходит только роботам."};
    if (!found.inRoster && !eff.battleUsable) return {ok:false, msg:"Это применяется только вне боя."};
    removeItem(itemId, 1);
    unit.maxHp += (eff.maxHpDelta||0);
    unit.dmg = Math.max(0, unit.dmg + (eff.dmgDelta||0));
    unit.shld = Math.max(0, unit.shld + (eff.shldDelta||0));
    unit.critChance = Math.max(0, (unit.critChance||0) + (eff.critDelta||0));
    unit.dodgeChance = Math.max(0, (unit.dodgeChance||0) + (eff.dodgeDelta||0));
    const healBy = eff.healAmount!==undefined ? eff.healAmount : (eff.maxHpDelta||0);
    unit.hp = Math.min(unit.maxHp, unit.hp + healBy);
    if (eff.grantAbility) unit.abilities.push({...eff.grantAbility});
    return {ok:true, msg:unit.name+" использует "+itemName(itemId)+"."};
  }

  return {ok:false, msg:unit.name+" никак не реагирует на "+itemName(itemId)+"."};
}

// ===================== SELLING (Лавка Мартына) =====================
function sellItem(itemId, qty){
  const item = ITEM_DB[itemId];
  if (!item) return {ok:false, msg:"Неизвестный предмет."};
  const have = player.inventory[itemId] || 0;
  const sellQty = qty ? Math.min(qty, have) : have;
  if (sellQty <= 0) return {ok:false, msg:"Нечего продавать."};
  const price = SELL_PRICE[item.rarity] || 0;
  const total = price * sellQty;
  removeItem(itemId, sellQty);
  player.io += total;
  const line = MARTYN_LINES[Math.floor(Math.random()*MARTYN_LINES.length)];
  return {ok:true, total, sellQty, line};
}

// Uncle Steyn — emergency backup when the roster hits zero units.
function callUncleSteyn(){
  const amount = 10 + Math.floor(Math.random()*11); // 10-20 inclusive
  player.freeCases += amount;
  return amount;
}

// ===================== MECHA ASSEMBLY (Мастерская) =====================
var mechaAssembly = { firmware:null, chassis:null, movement:null };

function setAssemblySlot(slotName, itemId){
  if (!["firmware","chassis","movement"].includes(slotName)) return false;
  if (itemId===null){ mechaAssembly[slotName] = null; return true; }
  const item = ITEM_DB[itemId];
  if (!item || item.slot !== slotName) return false;
  if (!hasItem(itemId, 1)) return false;
  mechaAssembly[slotName] = itemId;
  return true;
}

function canAssembleRobot(){
  return !!(mechaAssembly.firmware && mechaAssembly.chassis && mechaAssembly.movement
    && hasItem(mechaAssembly.firmware,1) && hasItem(mechaAssembly.chassis,1) && hasItem(mechaAssembly.movement,1));
}

function assembleRobot(name){
  if (!canAssembleRobot()) return {ok:false, msg:"Заполните все три слота."};
  const fw = ITEM_DB[mechaAssembly.firmware];
  const ch = ITEM_DB[mechaAssembly.chassis];
  const mv = ITEM_DB[mechaAssembly.movement];
  removeItem(mechaAssembly.firmware, 1);
  removeItem(mechaAssembly.chassis, 1);
  removeItem(mechaAssembly.movement, 1);
  let hp=0, dmg=0, shld=0, crit=0, dodge=0;
  const abilities = [];
  for (const part of [fw, ch, mv]){
    if (part.partStats){
      hp += part.partStats.hp||0; dmg += part.partStats.dmg||0; shld += part.partStats.shld||0;
      crit += part.partStats.crit||0; dodge += part.partStats.dodge||0;
    }
    if (part.partAbility) abilities.push({...part.partAbility});
  }
  hp = Math.max(1, hp);
  dmg = Math.max(1, dmg);
  const robot = {
    uid: nextUid(), unitId: "custom_robot", name: (name && name.trim()) ? name.trim() : "Робот без имени",
    hp, maxHp: hp, dmg, shld, critChance: crit, dodgeChance: dodge, abilities, turnCounter: 0, dead: false,
    isRobot: true, parts: { firmware: fw.name, chassis: ch.name, movement: mv.name }
  };
  player.units.push(robot);
  mechaAssembly = { firmware:null, chassis:null, movement:null };
  return {ok:true, robot};
}


// ===================== CASINO: КАЗИНО КРИПТО-ДЖОКЕРА =====================
// Resolves a spin instantly (the UI handles the visual delay). Bet is deducted here.
// Returns {ok, msg} on rejection, or {ok:true, idx, segment, win, payout, effect, detail} on success.
// Determines the spin's outcome and deducts the bet immediately (money is "at risk" the moment
// you spin), but does NOT apply winnings/effects yet — that happens in applySpinResult, called
// only after the wheel's visual animation finishes, so the Ар counter can't spoil the result early.
function resolveSpin(betColor, betAmount, hardmode){
  betAmount = Math.floor(betAmount);
  if (!betAmount || betAmount <= 0) return {ok:false, msg:"Ставка должна быть больше нуля."};
  if (!canAffordAr(betAmount)) return {ok:false, msg:"Недостаточно АР."};
  spendAr(betAmount);
  const idx = Math.floor(Math.random()*WHEEL_SEGMENTS.length);
  const seg = WHEEL_SEGMENTS[idx];
  const result = { ok:true, idx, segment:seg, betColor, betAmount, win:false, payout:0, effect:null, detail:null };

  if (hardmode && seg.special){
    result.effect = seg.special;
    if (seg.special==="triple_loss") result.detail = Math.min(player.ar, betAmount*2);
    return result;
  }
  if (seg.color === betColor){
    result.win = true;
    result.payout = betAmount * (WHEEL_PAYOUT[betColor] || 2);
  }
  return result;
}

// Applies the already-determined outcome. Call once, after the spin animation has finished.
function applySpinResult(result){
  if (result.effect){
    if (result.effect==="crates"){
      const n = 3 + Math.floor(Math.random()*3); // 3-5
      player.freeCases += n;
      result.detail = n;
    } else if (result.effect==="unit"){
      const unitId = CASINO_WEAK_UNIT_POOL[Math.floor(Math.random()*CASINO_WEAK_UNIT_POOL.length)];
      const inst = makeUnitInstance(unitId);
      if (inst) player.units.push(inst);
      result.detail = inst ? inst.name : null;
    } else if (result.effect==="fight"){
      result.triggersFight = true;
    } else if (result.effect==="triple_loss"){
      spendAr(result.detail||0);
    }
    return result;
  }
  if (result.win) player.ar += result.payout;
  return result;
}

function startCasinoFight(){
  const enemy = emptySide();
  enemy.front[0] = { uid: nextUid(), unitId:"casino_enemy", name: CASINO_ENEMY.name,
    hp: CASINO_ENEMY.hp, maxHp: CASINO_ENEMY.hp, dmg: CASINO_ENEMY.dmg, shld: CASINO_ENEMY.shld,
    abilities: [], turnCounter:0, dead:false };
  battle = {
    player: emptySide(), enemy, round:1, log:[], phase:"setup",
    playerDestroyedCount:0, sumDmgTaken:0, result:null, mobKey:null, isCasinoFight:true
  };
  return battle;
}

console.log("engine module ok");

// ===================== EXPEDITION CONTROLLER =====================

var expedition = null; // {route:[mobKeys], nodeIndex, flags:{}, sumDmg, active}

function startExpedition(){
  const route = SEWER_ROUTES[Math.floor(Math.random()*SEWER_ROUTES.length)];
  expedition = { route, nodeIndex: 0, flags:{}, sumDmg:0, active:true, tradeShown:false };
  return expedition;
}

function currentExpeditionMob(){
  if (!expedition) return null;
  return expedition.route[expedition.nodeIndex];
}

function advanceExpeditionAfterVictory(){
  const mobKey = currentExpeditionMob();
  const base = SEWER_MOBS[mobKey];
  if (base.flag) expedition.flags[base.flag] = true;
  expedition.sumDmg += battle.sumDmgTaken;
  expedition.nodeIndex++;
  if (expedition.nodeIndex >= expedition.route.length){
    // route complete -> final reward
    const reward = rollSewerRewards(expedition.flags, expedition.sumDmg);
    for (const [id,qty] of Object.entries(reward.items)) addItem(id, qty);
    player.io += reward.io;
    player.ar += (reward.ar||0);
    expedition.active = false;
    expedition.finalReward = reward;
    return {done:true, reward};
  }
  return {done:false, nextMob: currentExpeditionMob(), barrelTrade: base.flag==="barrel"};
}

function abandonExpedition(){
  expedition = null;
}

console.log("ui module (logic part) ok");
// ===================== APP / DOM LAYER =====================

var currentTab = "inventory";
var returnTabAfterBattle = null;
var caseLog = []; // {name, rarity, mimic}
var selected = null; // battle-only: {type:'roster'|'slot', ...}
var invSelectedUid = null; // inventory-tab unit selection for item use/feed
var invMessage = null;
var lastExpeditionMsg = null;
var fleeChoicePending = false;
var battleItemSelected = null;
var battleItemMessage = null;
var casinoLastLine = null;
var casinoResultMsg = null;
var casinoSpinning = false;
var casinoHardmode = false;
var casinoSelectedColor = null;
var casinoBetDraft = "10";
var wheelRotation = 0;
var casinoFightPending = false;
var mimicPending = null; // holds pending mimic instance data while confirmation shown

player.freeCases = 0;

function findUnitByUid(uid){
  const inRoster = player.units.find(u=>u.uid===uid);
  if (inRoster) return inRoster;
  if (battle){
    for (const row of [battle.player.front, battle.player.back, battle.enemy.front, battle.enemy.back]){
      for (const u of row){ if (u && u.uid===uid) return u; }
    }
  }
  return null;
}

function abilityText(ab){
  switch(ab.type){
    case "post_battle_full_heal": return "После боя полностью восстанавливает HP";
    case "post_battle_heal_adjacent": return "После победы лечит себя на "+ab.amount+" HP";
    case "on_death_drop": return "После гибели оставляет: "+itemName(ab.item);
    case "on_low_hp_summon": return "При HP ≤ "+ab.threshold+" в панике призывает: "+(UNIT_DB[ab.unit]?UNIT_DB[ab.unit].name:ab.unit);
    case "on_hit_summon": return "Получив удар, призывает: "+(UNIT_DB[ab.unit]?UNIT_DB[ab.unit].name:ab.unit);
    case "periodic_heal": return "Каждые "+ab.every+" хода лечит союзника на "+ab.amount+" HP";
    case "ranged_attack": return "Дальнобойный: атакует из тыла и может бить тыл противника";
    case "buff_in_back": return "Находясь в тылу, получает +"+ab.shld+" к защите";
    case "feed_transform": return "Если скормить «"+itemName(ab.item)+"», превратится во что-то другое";
    case "post_battle_lay_item": return "После победы откладывает случайный хлам в инвентарь";
    case "mirror_enemy_dmg": return "Копирует урон противника, с которым сражается";
    case "post_battle_bonus_io": return "После победы находит ещё +"+ab.amount+" Ио";
    case "revive_once": return "Один раз поднимается с 1 HP вместо гибели";
    case "aura_shield_adjacent": return "Соседние союзники получают +"+ab.shld+" к защите";
    case "chaos_clone": return "Получив удар, может необъяснимо раздвоиться";
    case "luck_charm": return "Пока в отряде, немного смещает удачу в кейсах к редкому";
    case "armor_pierce": return "Игнорирует "+ab.amount+" ед. защиты противника при ударе";
    default: return "";
  }
}

function unitTooltip(u){
  const abilities = (u.abilities||[]).map(abilityText).filter(Boolean);
  let html = "<div class='tt-title'>"+u.name+"</div>";
  html += "<div class='tt-stats'>HP "+u.hp+"/"+u.maxHp+" &nbsp; DMG "+u.dmg+" &nbsp; SHLD "+(u.shld||0)+"</div>";
  if (u.critChance || u.dodgeChance){
    html += "<div class='tt-stats'>"+(u.critChance?"Крит "+u.critChance+"% ":"")+(u.dodgeChance?"&nbsp; Уклонение "+u.dodgeChance+"%":"")+"</div>";
  }
  if (u.isRobot && u.parts){
    html += "<div class='tt-parts'>Прошивка: "+u.parts.firmware+"<br>Корпус: "+u.parts.chassis+"<br>Передвижение: "+u.parts.movement+"</div>";
  }
  if (abilities.length) html += "<div class='tt-abilities'>"+abilities.map(a=>"• "+a).join("<br>")+"</div>";
  return html;
}

// Tooltip for a unit TYPE (from UNIT_DB, no live hp progress) — used for craft-tab hover.
function unitTypeTooltip(unitId){
  const u = UNIT_DB[unitId];
  if (!u) return unitId;
  const abilities = (u.abilities||[]).map(abilityText).filter(Boolean);
  let html = "<div class='tt-title'>"+u.name+"</div>";
  html += "<div class='tt-stats'>HP "+u.hp+" &nbsp; DMG "+u.dmg+" &nbsp; SHLD "+(u.shld||0)+"</div>";
  if (abilities.length) html += "<div class='tt-abilities'>"+abilities.map(a=>"• "+a).join("<br>")+"</div>";
  return html;
}

function partStatsText(stats){
  if (!stats) return "";
  const parts = [];
  if (stats.hp) parts.push("HP +"+stats.hp);
  if (stats.dmg) parts.push("DMG +"+stats.dmg);
  if (stats.shld) parts.push("SHLD +"+stats.shld);
  if (stats.crit) parts.push("Крит +"+stats.crit+"%");
  if (stats.dodge) parts.push("Уклонение +"+stats.dodge+"%");
  return parts.join(" &nbsp; ");
}

function itemTooltip(itemId){
  const it = ITEM_DB[itemId];
  if (!it) return itemId;
  let html = "<div class='tt-title'>"+it.name+"</div>";
  if (it.rarity) html += "<div class='tt-stats'>Редкость: "+RARITY_LABEL[it.rarity]+"</div>";
  if (it.partStats || it.partAbility){
    const statsLine = partStatsText(it.partStats);
    if (statsLine) html += "<div class='tt-stats'>Даёт роботу: "+statsLine+"</div>";
    if (it.partAbility) html += "<div class='tt-abilities'>• "+abilityText(it.partAbility)+"</div>";
  }
  const eff = ITEM_EFFECTS[itemId];
  if (eff){
    const eparts = [];
    if (eff.maxHpDelta) eparts.push("HP +"+eff.maxHpDelta);
    if (eff.dmgDelta) eparts.push("DMG "+(eff.dmgDelta>0?"+":"")+eff.dmgDelta);
    if (eff.shldDelta) eparts.push("SHLD "+(eff.shldDelta>0?"+":"")+eff.shldDelta);
    const label = eff.robotOnly ? "Экипировка (только роботам)" : "Применение к юниту";
    if (eparts.length) html += "<div class='tt-stats'>"+label+": "+eparts.join(" &nbsp; ")+"</div>";
    if (eff.grantAbility) html += "<div class='tt-abilities'>• "+abilityText(eff.grantAbility)+"</div>";
  }
  if (it.desc) html += "<div class='tt-abilities'>"+it.desc+"</div>";
  return html;
}

// ---- tooltip element wiring ----
function initTooltip(){
  const tt = document.getElementById("tooltip");
  document.addEventListener("mousemove", (e)=>{
    if (!tt.classList.contains("hidden")){
      tt.style.left = Math.min(e.clientX+16, window.innerWidth-260) + "px";
      tt.style.top = Math.min(e.clientY+16, window.innerHeight-140) + "px";
    }
  });
  document.addEventListener("mouseover", (e)=>{
    const el = e.target.closest("[data-tt-unit],[data-tt-item],[data-tt-unittype],[data-tt-mystery]");
    if (!el) return;
    let html = "";
    if (el.dataset.ttMystery){
      html = "<div class='tt-title'>???</div><div class='tt-abilities'>Неизвестно — этот предмет ещё не выпадал.</div>";
    } else if (el.dataset.ttUnit){
      const u = findUnitByUid(el.dataset.ttUnit);
      if (u) html = unitTooltip(u);
    } else if (el.dataset.ttUnittype){
      html = unitTypeTooltip(el.dataset.ttUnittype);
    } else if (el.dataset.ttItem){
      html = itemTooltip(el.dataset.ttItem);
    }
    if (html){
      tt.innerHTML = html;
      tt.classList.remove("hidden");
    }
  });
  document.addEventListener("mouseout", (e)=>{
    const el = e.target.closest("[data-tt-unit],[data-tt-item],[data-tt-unittype],[data-tt-mystery]");
    if (el) tt.classList.add("hidden");
  });
}

// ---- generic unit card markup ----
function rarityColorClass(rarity){ return "rar-"+rarity; }

function unitCardHtml(u, opts){
  opts = opts || {};
  const dead = u.dead;
  const cls = ["unit-card", opts.extraClass||"", dead?"is-dead":"", opts.selected?"is-selected":""].join(" ");
  return `<div class="${cls}" draggable="${opts.draggable?"true":"false"}" data-uid="${u.uid}" data-tt-unit="${u.uid}"
            data-role="${opts.role||''}" data-line="${opts.line||''}" data-idx="${opts.idx!==undefined?opts.idx:''}">
      <div class="portrait">${getEmoji(u.unitId)}</div>
      <div class="hp-badge">${u.hp}/${u.maxHp}</div>
      <div class="mini-stats">⚔${u.dmg} 🛡${u.shld||0}</div>
    </div>`;
}

function emptySlotHtml(side, line, idx){
  const sel = selected && selected.type==="slot" ? "" : "";
  return `<div class="unit-slot empty" data-role="slot" data-side="${side}" data-line="${line}" data-idx="${idx}"></div>`;
}

function slotHtml(side, line, idx, unit){
  if (!unit) return emptySlotHtml(side, line, idx);
  const isSel = !!(selected && selected.type==="slot" && selected.side===side && selected.line===line && selected.idx===idx);
  const showArrows = battle && battle.phase==="playerTurn" && side==="player";
  const arrLen = (line==="front"?battle.player.front:battle.player.back).length;
  return `<div class="unit-slot filled" data-role="slot" data-side="${side}" data-line="${line}" data-idx="${idx}">
    ${unitCardHtml(unit, {draggable: side==="player" && battle && battle.phase==="setup", role:"slot", line, idx, selected:isSel})}
    ${showArrows ? slotArrowsHtml(line, idx, arrLen) : ""}
  </div>`;
}

function slotArrowsHtml(line, idx, arrLen){
  const canLeft = idx>0;
  const canRight = idx<arrLen-1;
  const vertLabel = line==="front" ? "▼" : "▲";
  const vertTitle = line==="front" ? "В тыл" : "На фронт";
  return `<div class="slot-arrows">
    <button class="arrow-btn" data-arrow="left" ${canLeft?"":"disabled"} title="Влево">◀</button>
    <button class="arrow-btn" data-arrow="vert" title="${vertTitle}">${vertLabel}</button>
    <button class="arrow-btn" data-arrow="right" ${canRight?"":"disabled"} title="Вправо">▶</button>
  </div>`;
}

function rowHtml(label, side, line, arr){
  return `<div class="line-row">
    <div class="line-label">${label}</div>
    <div class="line-slots">${arr.map((u,i)=>slotHtml(side,line,i,u)).join("")}</div>
  </div>`;
}

// ===================== RENDER: TOP BAR =====================
function renderTopbar(){
  document.getElementById("io-amount").textContent = TESTING_INFINITE_IO ? "∞" : player.io;
  document.getElementById("ar-amount").textContent = player.ar;
  document.querySelectorAll(".tabs button").forEach(b=>{
    b.classList.toggle("active", b.dataset.tab===currentTab);
  });
}

// ===================== RENDER: INVENTORY =====================
function isItemUsableOnUnit(unit, itemId){
  if (!unit) return false;
  if (unit.abilities.some(a=>a.type==="feed_transform" && a.item===itemId)) return true;
  const eff = ITEM_EFFECTS[itemId];
  if (eff && (!eff.robotOnly || unit.isRobot)) return true;
  return false;
}

function renderInventory(){
  const rosterHtml = player.units.length
    ? player.units.map(u=>`<div data-inv-unit="${u.uid}">${unitCardHtml(u, {draggable:false, selected: u.uid===invSelectedUid})}</div>`).join("")
    : `<div class="empty-note">Пока никого нет. Скрафтите юнита во вкладке «Крафт».</div>
       <button class="btn btn-primary" id="call-steyn-btn">☎ Позвонить дяде Штейну</button>`;

  const selectedUnit = invSelectedUid ? player.units.find(u=>u.uid===invSelectedUid) : null;

  let itemsHtml = "";
  for (const rarity of RARITY_ORDER){
    const entries = Object.entries(player.inventory).filter(([id])=> ITEM_DB[id] && ITEM_DB[id].rarity===rarity);
    if (!entries.length) continue;
    itemsHtml += `<div class="item-group"><div class="item-group-title rar-${rarity}">${RARITY_LABEL[rarity]}</div><div class="item-chips">`;
    for (const [id,qty] of entries){
      const usable = selectedUnit && isItemUsableOnUnit(selectedUnit, id);
      itemsHtml += `<div class="item-chip rar-${rarity} ${usable?'usable-on-selected':''}" data-tt-item="${id}" data-inv-item="${id}">${itemName(id)} <span class="chip-qty">×${qty}</span></div>`;
    }
    itemsHtml += `</div></div>`;
  }
  if (!itemsHtml) itemsHtml = `<div class="empty-note">Инвентарь пуст. Откройте кейс во вкладке «Кейсы».</div>`;

  const hint = invSelectedUid
    ? `<p class="muted small">Юнит выбран — применимые предметы подсвечены в «Материалах».</p>`
    : `<p class="muted small">Кликните юнита, затем предмет — некоторые вещи можно скормить или применить. Реакция не всегда предсказуема.</p>`;

  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Отряд <span class="count-badge">${player.units.length}</span></h2>
      <div class="roster-grid">${rosterHtml}</div>
      ${hint}
      ${invMessage ? `<p class="inv-message">${invMessage}</p>` : ""}
    </section>
    <section class="panel">
      <h2>Материалы</h2>
      ${itemsHtml}
    </section>
  `;

  document.getElementById("view").querySelectorAll('[data-inv-unit]').forEach(el=>{
    el.addEventListener("click", ()=>{
      const uid = el.dataset.invUnit;
      invSelectedUid = (invSelectedUid===uid) ? null : uid;
      invMessage = null;
      renderAll();
    });
  });
  document.getElementById("view").querySelectorAll('[data-inv-item]').forEach(el=>{
    el.addEventListener("click", ()=>{
      if (!invSelectedUid) return;
      const res = useItemOnUnit(invSelectedUid, el.dataset.invItem);
      invMessage = res.msg;
      if (res.transformed || res.ok) { /* keep selection cleared after any resolved attempt */ }
      invSelectedUid = null;
      renderAll();
    });
  });
  const steynBtn = document.getElementById("call-steyn-btn");
  if (steynBtn){
    steynBtn.addEventListener("click", ()=>{
      const amount = callUncleSteyn();
      invMessage = `Дядя Штейн разочарованно вздыхает, но подгоняет фургон — получено ${amount} бесплатных кейсов.`;
      renderAll();
    });
  }
}

// ===================== RENDER: CASES =====================
var mechaCaseLog = [];
var crapCaseLog = [];

function renderCases(){
  const canAffordBig = player.freeCases>0 || canAffordIo(BIG_CASE_COST);
  const bigCostLabel = player.freeCases>0 ? `бесплатно (${player.freeCases} шт. осталось)` : BIG_CASE_COST+" Ио";
  const receiptLines = caseLog.slice(-8).map(r=>{
    if (r.mimic) return `<div class="receipt-line mimic">⚠ МИМИК АТАКУЕТ</div>`;
    return `<div class="receipt-line rar-${r.rarity}" data-tt-item="${r.id}"><span class="stamp">${RARITY_LABEL[r.rarity]}</span> ${r.name}</div>`;
  }).join("");

  const canAffordMecha = canAffordIo(MECHA_CASE_COST);
  const mechaReceiptLines = mechaCaseLog.slice(-8).map(r=>
    `<div class="receipt-line rar-${r.rarity}" data-tt-item="${r.id}"><span class="stamp">${RARITY_LABEL[r.rarity]}</span> ${r.name}</div>`
  ).join("");

  const canAffordCrap = canAffordIo(CRAP_CASE_COST);
  const crapReceiptLines = crapCaseLog.slice(-8).map(r=>
    `<div class="receipt-line rar-${r.rarity}" data-tt-item="${r.id}"><span class="stamp">${RARITY_LABEL[r.rarity]}</span> ${r.name}</div>`
  ).join("");

  document.getElementById("view").innerHTML = `
    <section class="panel case-panel">
      <h2>Большой кейс</h2>
      <p class="muted">Хлам, редкости и один ничтожный шанс на нечто в единственном экземпляре. Ну и мимика, конечно.</p>
      <button class="btn btn-primary" id="open-case-btn" ${canAffordBig?"":"disabled"}>Открыть (${bigCostLabel})</button>
      <div class="receipt-roll" id="receipt">
        ${receiptLines || '<div class="empty-note">Чек пуст. Откройте кейс.</div>'}
      </div>
    </section>
    <section class="panel case-panel">
      <h2>Мех-кейс</h2>
      <p class="muted">Сырые материалы и части роботов. Собираются во вкладке «Мастерская».</p>
      <button class="btn btn-primary" id="open-mecha-btn" ${canAffordMecha?"":"disabled"}>Открыть (${MECHA_CASE_COST} Ио)</button>
      <div class="receipt-roll" id="mecha-receipt">
        ${mechaReceiptLines || '<div class="empty-note">Чек пуст. Откройте кейс.</div>'}
      </div>
    </section>
    <section class="panel case-panel">
      <h2>Кейс Говна</h2>
      <p class="muted">Дёшево и в основном сердито. Изредка — что-то приличное.</p>
      <button class="btn btn-primary" id="open-crap-btn" ${canAffordCrap?"":"disabled"}>Открыть (${CRAP_CASE_COST} Ио)</button>
      <div class="receipt-roll" id="crap-receipt">
        ${crapReceiptLines || '<div class="empty-note">Чек пуст. Откройте кейс.</div>'}
      </div>
    </section>
  `;
  document.getElementById("open-case-btn").addEventListener("click", onOpenBigCase);
  document.getElementById("open-mecha-btn").addEventListener("click", onOpenMechaCase);
  document.getElementById("open-crap-btn").addEventListener("click", onOpenCrapCase);
}

function onOpenBigCase(){
  const usingFree = player.freeCases>0;
  if (!usingFree){
    if (!canAffordIo(BIG_CASE_COST)) return;
    spendIo(BIG_CASE_COST);
  } else {
    player.freeCases--;
  }
  const result = openBigCase();
  if (result.mimic){
    caseLog.push({mimic:true});
    triggerMimicEncounter();
    return;
  }
  caseLog.push({id:result.item.id, name:result.item.name, rarity:result.rarity});
  renderAll();
}

function onOpenMechaCase(){
  if (!canAffordIo(MECHA_CASE_COST)) return;
  spendIo(MECHA_CASE_COST);
  const result = openMechaCase();
  mechaCaseLog.push({id:result.item.id, name:result.item.name, rarity:result.rarity});
  renderAll();
}

function onOpenCrapCase(){
  if (!canAffordIo(CRAP_CASE_COST)) return;
  spendIo(CRAP_CASE_COST);
  const result = openCrapCase();
  crapCaseLog.push({id:result.item.id, name:result.item.name, rarity:result.rarity});
  renderAll();
}

// ===================== RECIPE CARD (shared by Крафт and Мастерская) =====================
function ingredientHtml(part){
  const attr = part.kind==="unittype" ? `data-tt-unittype="${part.id}"` : `data-tt-item="${part.id}"`;
  return `<span class="ingredient" ${attr}>${part.label}</span>`;
}

function recipeCardHtml(r){
  const ok = canCraft(r);
  const {ingredients, outputName, outputEmoji, outputKind, outputId} = recipeDisplayParts(r);
  const outputAttr = outputKind==="unittype" ? `data-tt-unittype="${outputId}"` : `data-tt-item="${outputId}"`;
  return `<div class="recipe-card2 ${ok?'':'locked'} ${r.homebrew?'homebrew':''}">
    <div class="recipe-output" ${outputAttr}>
      <span class="recipe-output-emoji">${outputEmoji}</span>
      <span class="recipe-output-name">${outputName}</span>
    </div>
    <div class="recipe-ingredients">${ingredients.map(ingredientHtml).join(" <span class='plus'>+</span> ")}</div>
    <button class="btn btn-small" data-action="craft" data-recipe="${r.id}" ${ok?"":"disabled"}>Скрафтить</button>
  </div>`;
}

// ===================== RENDER: CRAFT =====================
function renderCraft(){
  const categories = ["unit","buff","component"];
  let html = "";
  for (const cat of categories){
    const recipes = RECIPES.filter(r=>recipeCategory(r)===cat);
    if (!recipes.length) continue;
    html += `<section class="panel">
      <h2>${RECIPE_CATEGORY_LABEL[cat]}</h2>
      <div class="recipe-list2">${recipes.map(recipeCardHtml).join("")}</div>
    </section>`;
  }
  document.getElementById("view").innerHTML = html;
  document.getElementById("view").querySelectorAll('[data-action="craft"]').forEach(btn=>{
    btn.addEventListener("click", ()=>{ doCraft(btn.dataset.recipe); renderAll(); });
  });
}

// ===================== RENDER: EXPEDITION / BATTLE =====================
function renderExpedition(){
  if (mimicPending){ renderMimicPrompt(); return; }
  if (casinoFightPending){ renderCasinoFightPrompt(); return; }
  if (!battle){
    if (expedition && !expedition.active && expedition.finalReward){
      renderExpeditionReport();
      return;
    }
    renderExpeditionHub();
    return;
  }
  if (battle.phase === "setup"){ renderBattleSetup(); return; }
  if (battle.phase === "over"){ renderBattleOver(); return; }
  renderBattleFight();
}

function renderExpeditionHub(){
  const msgHtml = lastExpeditionMsg ? `<p class="inv-message">${lastExpeditionMsg}</p>` : "";
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Неевклидова канализация</h2>
      <p class="muted">Пять клеток случайного маршрута. Дальше — только хуже. Разумная логика тут не работает.</p>
      <button class="btn btn-primary" id="start-expedition-btn" ${player.units.length? "" : "disabled"}>Отправиться в поход</button>
      ${player.units.length? "" : '<p class="muted small">Нужен хотя бы один юнит в отряде — загляните в «Инвентарь», если совсем никого не осталось.</p>'}
      ${msgHtml}
    </section>
  `;
  lastExpeditionMsg = null;
  document.getElementById("start-expedition-btn").addEventListener("click", ()=>{
    startExpedition();
    startBattle(currentExpeditionMob());
    renderAll();
  });
}

function renderBattleSetup(){
  const mobKey = battle.mobKey;
  const enemy = battle.enemy.front[0];
  const rosterHtml = player.units.length
    ? player.units.map(u=>unitCardHtml(u,{draggable:true, role:"roster", selected: !!(selected && selected.type==="roster" && selected.uid===u.uid)})).join("")
    : `<div class="empty-note">Все уже на позициях.</div>`;

  document.getElementById("view").innerHTML = `
    <section class="panel enemy-panel">
      <h2>Враг${enemy&&enemy.boss?' <span class="boss-tag">БОСС</span>':''}</h2>
      <div class="line-slots single">${unitCardHtml(enemy,{draggable:false})}</div>
    </section>
    <section class="panel">
      <h2>Расстановка отряда</h2>
      <p class="muted small">Перетащите юнитов (или кликните юнита, затем слот) на линию фронта или тыла.</p>
      ${rowHtml("Фронт","player","front", battle.player.front)}
      ${rowHtml("Тыл","player","back", battle.player.back)}
      <div class="roster-pool" data-role="roster-drop">
        <div class="line-label">Резерв</div>
        <div class="roster-grid">${rosterHtml}</div>
      </div>
      <button class="btn btn-primary" id="begin-rounds-btn">Начать бой</button>
      <button class="btn btn-ghost" id="flee-setup-btn">Отступить</button>
    </section>
  `;
  document.getElementById("begin-rounds-btn").addEventListener("click", ()=>{
    if (beginRounds()) renderAll();
  });
  document.getElementById("flee-setup-btn").addEventListener("click", ()=>{
    fleeExpedition();
  });
  wireBoardInteractions();
}

function renderBattleFight(){
  const logHtml = battle.log.slice(-10).map(l=>`<div class="log-line">${l}</div>`).join("");
  const controlsHtml = fleeChoicePending ? `
      <div class="flee-choice">
        <p class="muted small">Как будем убегать?</p>
        <button class="btn btn-small" id="flee-io-btn">Отдать часть Ио</button>
        <button class="btn btn-small" id="flee-units-btn">Рискнуть парой юнитов</button>
        <button class="btn btn-ghost" id="flee-cancel-btn">Передумать</button>
      </div>
    ` : `
      <button class="btn btn-primary" id="attack-btn" ${battle.phase==="playerTurn"?"":"disabled"}>Атаковать</button>
      <button class="btn btn-ghost" id="flee-btn">Сбежать</button>
    `;
  const battleItemEntries = Object.entries(player.inventory).filter(([id])=>{
    const eff = ITEM_EFFECTS[id];
    return eff && eff.battleUsable;
  });
  const trayHtml = battleItemEntries.length
    ? battleItemEntries.map(([id,qty])=>`<div class="item-chip battle-item ${battleItemSelected===id?'is-selected':''}" data-battle-item="${id}" data-tt-item="${id}" draggable="true">${itemName(id)} <span class="chip-qty">×${qty}</span></div>`).join("")
    : `<div class="empty-note">Нет боевых предметов под рукой.</div>`;

  document.getElementById("view").innerHTML = `
    <section class="panel enemy-panel">
      <h2>Враг — раунд ${battle.round}</h2>
      ${rowHtml("Тыл","enemy","back", battle.enemy.back)}
      ${rowHtml("Фронт","enemy","front", battle.enemy.front)}
    </section>
    <section class="panel">
      <h2>Ваш отряд</h2>
      ${rowHtml("Фронт","player","front", battle.player.front)}
      ${rowHtml("Тыл","player","back", battle.player.back)}
      <p class="muted small">Наведите на юнита — появятся стрелки для перестановки (влево/вправо, фронт/тыл).</p>
      <div class="battle-item-tray">
        <div class="line-label">Боевые предметы — перетащите или выберите, затем кликните юнита</div>
        <div class="item-chips">${trayHtml}</div>
        ${battleItemMessage ? `<p class="inv-message">${battleItemMessage}</p>` : ""}
      </div>
      ${controlsHtml}
    </section>
    <section class="panel log-panel">
      <h2>Журнал боя</h2>
      <div class="battle-log">${logHtml}</div>
    </section>
  `;
  const atkBtn = document.getElementById("attack-btn");
  if (atkBtn) atkBtn.addEventListener("click", ()=>{
    resolvePlayerAttack();
    renderAll();
    const logEl = document.querySelector(".battle-log");
    if (logEl) logEl.scrollTop = logEl.scrollHeight;
  });
  const fleeBtn = document.getElementById("flee-btn");
  if (fleeBtn) fleeBtn.addEventListener("click", ()=>{ fleeChoicePending = true; renderAll(); });
  const fleeCancelBtn = document.getElementById("flee-cancel-btn");
  if (fleeCancelBtn) fleeCancelBtn.addEventListener("click", ()=>{ fleeChoicePending = false; renderAll(); });
  const fleeIoBtn = document.getElementById("flee-io-btn");
  if (fleeIoBtn) fleeIoBtn.addEventListener("click", ()=>{
    const msg = resolveFleeBattle("io");
    fleeChoicePending = false;
    lastExpeditionMsg = msg;
    renderAll();
  });
  const fleeUnitsBtn = document.getElementById("flee-units-btn");
  if (fleeUnitsBtn) fleeUnitsBtn.addEventListener("click", ()=>{
    const msg = resolveFleeBattle("units");
    fleeChoicePending = false;
    lastExpeditionMsg = msg;
    renderAll();
  });
  wireBattleArrows();
}

function renderBattleOver(){
  const victory = battle.result==="victory";
  const isMimic = battle.isMimic;
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>${victory? (isMimic? "Мимик уничтожен!" : "Узел пройден") : "Отряд разбит"}</h2>
      <div class="battle-log">${battle.log.slice(-8).map(l=>`<div class="log-line">${l}</div>`).join("")}</div>
      <button class="btn btn-primary" id="continue-btn">Продолжить</button>
    </section>
  `;
  document.getElementById("continue-btn").addEventListener("click", onBattleOverContinue);
}

function onBattleOverContinue(){
  battleItemSelected = null;
  battleItemMessage = null;
  const victory = battle.result==="victory";
  const isMimic = battle.isMimic;
  const isCasino = battle.isCasinoFight;
  if (isMimic){
    battle = null;
    if (victory){ player.freeCases += 3; }
    currentTab = returnTabAfterBattle || "cases";
    returnTabAfterBattle = null;
    renderAll();
    return;
  }
  if (isCasino){
    battle = null;
    if (victory){
      const arBonus = 8 + Math.floor(Math.random()*8);
      const ioBonus = 20 + Math.floor(Math.random()*30);
      player.ar += arBonus;
      player.io += ioBonus;
      casinoResultMsg = `Коллектор повержен! Забрали у него ${arBonus} АР и ${ioBonus} Ио.`;
    } else {
      casinoResultMsg = "Коллектор оказался не по зубам. Ставка и так уже была потеряна — хуже не стало.";
    }
    currentTab = returnTabAfterBattle || "casino";
    returnTabAfterBattle = null;
    renderAll();
    return;
  }
  if (!victory){
    battle = null;
    expedition = null;
    renderAll();
    return;
  }
  const res = advanceExpeditionAfterVictory();
  battle = null;
  if (res.done){
    renderAll(); // will show expedition report
    return;
  }
  if (res.barrelTrade && !expedition.tradeShown){
    expedition.tradeShown = true;
    expedition.pendingNextMob = res.nextMob;
    renderDiogenTrade();
    return;
  }
  startBattle(res.nextMob);
  renderAll();
}

function renderDiogenTrade(){
  const rows = DIOGEN_TRADES.map(t=>`
    <div class="trade-row">
      <div class="trade-label">${t.label}</div>
      <button class="btn btn-small" data-action="trade" data-trade="${t.id}">Обменять</button>
    </div>`).join("");
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Диоген, торговец из-под бочки</h2>
      <p class="muted">«Тут внизу тоже есть экономика. Не спрашивай, откуда у меня столько Ио.»</p>
      <div class="trade-list">${rows}</div>
      <button class="btn btn-primary" id="leave-trader-btn">Идти дальше</button>
    </section>
  `;
  document.getElementById("view").querySelectorAll('[data-action="trade"]').forEach(btn=>{
    btn.addEventListener("click", ()=> doDiogenTrade(btn.dataset.trade));
  });
  document.getElementById("leave-trader-btn").addEventListener("click", ()=>{
    startBattle(expedition.pendingNextMob);
    renderAll();
  });
}

function doDiogenTrade(tradeId){
  const t = DIOGEN_TRADES.find(x=>x.id===tradeId);
  if (!t) return;
  // check give
  if (t.give.io && !canAffordIo(t.give.io)) return;
  if (t.give.ar && player.ar < t.give.ar) return;
  if (t.give.item && !hasItem(t.give.item, t.give.qty||1)) return;
  if (t.give.unit){
    const idx = player.units.findIndex(u=>u.unitId===t.give.unit);
    if (idx<0) return;
    player.units.splice(idx,1);
  }
  if (t.give.io) spendIo(t.give.io);
  if (t.give.ar) player.ar -= t.give.ar;
  if (t.give.item) removeItem(t.give.item, t.give.qty||1);
  // grant get
  if (t.get.io) player.io += t.get.io;
  if (t.get.ar) player.ar += t.get.ar;
  if (t.get.item) addItem(t.get.item, t.get.qty||1);
  if (t.get.unit){
    const inst = makeUnitInstance(t.get.unit) || {uid:nextUid(), unitId:t.get.unit, name:"Чел", hp:3, dmg:1, shld:0, abilities:[], dead:false};
    player.units.push(inst);
  }
  renderDiogenTrade();
  renderTopbar();
}

function renderExpeditionReport(){
  const r = expedition.finalReward;
  const items = Object.entries(r.items).map(([id,qty])=>`${itemName(id)} ×${qty}`).join(", ") || "—";
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Отчёт об экспедиции</h2>
      <p>Маршрут пройден полностью.</p>
      <p><b>Ио:</b> +${r.io}</p>
      ${r.ar ? `<p><b>АР:</b> +${r.ar} <span class="muted small">(редкая находка!)</span></p>` : ""}
      <p><b>Предметы:</b> ${items}</p>
      <button class="btn btn-primary" id="finish-expedition-btn">В штаб</button>
    </section>
  `;
  document.getElementById("finish-expedition-btn").addEventListener("click", ()=>{
    expedition = null;
    renderAll();
  });
}

function fleeExpedition(){
  battle = null;
  expedition = null;
  battleItemSelected = null;
  battleItemMessage = null;
  renderAll();
}

// Flee mid-battle: returns survivors to roster, applies a chosen penalty, ends the expedition.
function resolveFleeBattle(penaltyType){
  for (const row of [battle.player.front, battle.player.back]){
    for (const u of row){
      if (u && !u.dead) player.units.push(u);
    }
  }
  let msg = "";
  if (penaltyType === "io"){
    const lost = Math.min(player.io, 30 + Math.floor(Math.random()*50));
    spendIo(lost);
    msg = "Отряд отступает, оставив похитителям "+lost+" Ио.";
  } else if (penaltyType === "units"){
    const count = Math.min(player.units.length, 1 + Math.floor(Math.random()*3));
    const lostNames = [];
    for (let i=0;i<count;i++){
      if (player.units.length===0) break;
      const idx = Math.floor(Math.random()*player.units.length);
      lostNames.push(player.units[idx].name);
      player.units.splice(idx,1);
    }
    msg = lostNames.length
      ? "В панике отряд теряет по пути: "+lostNames.join(", ")+"."
      : "Отступать было некому терять — отряд и так пуст.";
  }
  battle = null;
  expedition = null;
  battleItemSelected = null;
  battleItemMessage = null;
  return msg;
}

// ===================== MIMIC ENCOUNTER =====================
function triggerMimicEncounter(){
  const donor = UNIT_DB[Object.keys(UNIT_DB)[Math.floor(Math.random()*Object.keys(UNIT_DB).length)]];
  mimicPending = {
    donorName: donor.name,
    hp: 25 + donor.hp*2,
    dmg: 4 + donor.dmg,
    shld: 2 + (donor.shld||0)
  };
  returnTabAfterBattle = currentTab;
  currentTab = "expedition";
  renderAll();
}

function renderMimicPrompt(){
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>⚠ Из кейса выпрыгивает МИМИК</h2>
      <p class="muted">Он перенял и удвоил характеристики «${mimicPending.donorName}» — это серьёзный противник, не шутка на один удар.</p>
      <button class="btn btn-primary" id="fight-mimic-btn">Принять бой</button>
    </section>
  `;
  document.getElementById("fight-mimic-btn").addEventListener("click", ()=>{
    const m = mimicPending; mimicPending = null;
    startBattle(null);
    battle.isMimic = true;
    battle.enemy.front[0] = { uid: nextUid(), unitId:"mimic", name:"Мимик", hp:m.hp, maxHp:m.hp, dmg:m.dmg, shld:m.shld, abilities:[], turnCounter:0, dead:false };
    renderAll();
  });
}

// ===================== RENDER: MECHA WORKSHOP =====================
var mechaMessage = null;
var robotNameDraft = "";

function mechaSlotLabel(slotName){
  return {firmware:"Прошивка", chassis:"Корпус", movement:"Передвижение"}[slotName];
}

function mechaAssemblySlotHtml(slotName){
  const itemId = mechaAssembly[slotName];
  const inner = itemId
    ? `<span class="mecha-slot-emoji">📦</span><span class="mecha-slot-name" data-tt-item="${itemId}">${itemName(itemId)}</span>`
    : `<span class="mecha-slot-placeholder">Пусто</span>`;
  return `<div class="mecha-slot ${itemId?'filled':''}" data-slot="${slotName}">
    <div class="mecha-slot-label">${mechaSlotLabel(slotName)}</div>
    ${inner}
  </div>`;
}

function mechaRecipeCategory(r){
  const item = ITEM_DB[r.output.item];
  if (!item) return "Прочее";
  if (item.slot === "firmware") return "Прошивка";
  if (item.slot === "chassis") return "Корпус";
  if (item.slot === "movement") return "Передвижение";
  if (item.tags && item.tags.indexOf("RW")!==-1) return "Оружие (применяется к готовому роботу через Инвентарь)";
  return "Материалы";
}

function renderMecha(){
  const slotsHtml = ["firmware","chassis","movement"].map(mechaAssemblySlotHtml).join("");

  const poolBySlot = {firmware:[], chassis:[], movement:[]};
  for (const id of Object.keys(player.inventory)){
    const item = ITEM_DB[id];
    if (item && item.slot && poolBySlot[item.slot]) poolBySlot[item.slot].push(id);
  }
  const poolHtml = ["firmware","chassis","movement"].map(slotName=>{
    const ids = poolBySlot[slotName];
    if (!ids.length) return "";
    const chips = ids.map(id=>`<div class="item-chip mecha-component" data-mecha-item="${id}" data-tt-item="${id}">${itemName(id)} <span class="chip-qty">×${player.inventory[id]}</span></div>`).join("");
    return `<div class="item-group"><div class="item-group-title">${mechaSlotLabel(slotName)}</div><div class="item-chips">${chips}</div></div>`;
  }).join("") || `<div class="empty-note">Нет собранных компонентов. Откройте Мех-кейс и скрафтите детали ниже.</div>`;

  const categories = ["Материалы","Прошивка","Корпус","Передвижение","Оружие (применяется к готовому роботу через Инвентарь)"];
  let recipesHtml = "";
  for (const cat of categories){
    const recipes = MECHA_RECIPES.filter(r=>mechaRecipeCategory(r)===cat);
    if (!recipes.length) continue;
    recipesHtml += `<section class="panel">
      <h2>${cat}</h2>
      <div class="recipe-list2">${recipes.map(recipeCardHtml).join("")}</div>
    </section>`;
  }

  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Сборка робота</h2>
      <p class="muted small">Кликните компонент ниже (или перетащите его на нужный слот). Клик по заполненному слоту освобождает его.</p>
      <div class="mecha-slots">${slotsHtml}</div>
      <input type="text" id="robot-name-input" class="text-input" placeholder="Имя робота" value="${robotNameDraft.replace(/"/g,'&quot;')}">
      <button class="btn btn-primary" id="assemble-btn" ${canAssembleRobot()?"":"disabled"}>Собрать</button>
      ${mechaMessage ? `<p class="inv-message">${mechaMessage}</p>` : ""}
    </section>
    <section class="panel">
      <h2>Доступные компоненты</h2>
      ${poolHtml}
    </section>
    ${recipesHtml}
  `;

  const nameInput = document.getElementById("robot-name-input");
  nameInput.addEventListener("input", ()=>{ robotNameDraft = nameInput.value; });

  document.getElementById("assemble-btn").addEventListener("click", ()=>{
    const res = assembleRobot(robotNameDraft);
    mechaMessage = res.ok ? `Робот «${res.robot.name}» готов к службе!` : (res.msg||"Не удалось собрать.");
    if (res.ok) robotNameDraft = "";
    renderAll();
  });

  document.getElementById("view").querySelectorAll('[data-mecha-item]').forEach(el=>{
    el.setAttribute("draggable","true");
    el.addEventListener("dragstart", (e)=>{ e.dataTransfer.setData("text/plain", el.dataset.mechaItem); });
    el.addEventListener("click", ()=>{
      const id = el.dataset.mechaItem;
      const item = ITEM_DB[id];
      if (item && item.slot){ setAssemblySlot(item.slot, id); mechaMessage=null; renderAll(); }
    });
  });
  document.getElementById("view").querySelectorAll(".mecha-slot").forEach(slotEl=>{
    slotEl.addEventListener("dragover", (e)=>e.preventDefault());
    slotEl.addEventListener("drop", (e)=>{
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const item = ITEM_DB[id];
      const slotName = slotEl.dataset.slot;
      if (item && item.slot===slotName){ setAssemblySlot(slotName, id); mechaMessage=null; renderAll(); }
    });
    slotEl.addEventListener("click", ()=>{
      const slotName = slotEl.dataset.slot;
      if (mechaAssembly[slotName]){ setAssemblySlot(slotName, null); mechaMessage=null; renderAll(); }
    });
  });
  document.getElementById("view").querySelectorAll('[data-action="craft"]').forEach(btn=>{
    btn.addEventListener("click", ()=>{ doCraft(btn.dataset.recipe); renderAll(); });
  });
}

// ===================== RENDER: CATALOG =====================
var catalogHideUndiscovered = false;

function renderCatalog(){
  const toggleLabel = catalogHideUndiscovered ? "Показать все" : "Только найденные";
  let html = `<section class="panel">
    <h2>Каталог кейсов</h2>
    <button class="btn btn-small" id="catalog-toggle">${toggleLabel}</button>
  </section>`;

  for (const caseDef of CASE_CATALOG){
    let sectionHtml = "";
    for (const rarity of RARITY_ORDER){
      const items = caseDef.pool[rarity];
      if (!items || !items.length) continue;
      const visible = items.filter(it => !catalogHideUndiscovered || player.discovered[it.id]);
      if (!visible.length) continue;
      const chips = visible.map(it=>{
        const found = !!player.discovered[it.id];
        const ttAttr = found ? `data-tt-item="${it.id}"` : `data-tt-mystery="1"`;
        return `<div class="item-chip rar-${rarity} ${found?'':'undiscovered'}" ${ttAttr}>${found?it.name:"???"}</div>`;
      }).join("");
      sectionHtml += `<div class="item-group"><div class="item-group-title rar-${rarity}">${RARITY_LABEL[rarity]}</div><div class="item-chips">${chips}</div></div>`;
    }
    html += `<section class="panel">
      <h2>${caseDef.label}</h2>
      ${sectionHtml || '<p class="empty-note">Ничего не найдено.</p>'}
    </section>`;
  }

  document.getElementById("view").innerHTML = html;
  document.getElementById("catalog-toggle").addEventListener("click", ()=>{
    catalogHideUndiscovered = !catalogHideUndiscovered;
    renderAll();
  });
}

// ===================== RENDER: SHOP (Лавка Мартына) =====================
var martynLastLine = null;

function renderShop(){
  let itemsHtml = "";
  for (const rarity of RARITY_ORDER){
    const entries = Object.entries(player.inventory).filter(([id])=> ITEM_DB[id] && ITEM_DB[id].rarity===rarity && (SELL_PRICE[rarity]||0)>0);
    if (!entries.length) continue;
    const price = SELL_PRICE[rarity]||0;
    itemsHtml += `<div class="item-group"><div class="item-group-title rar-${rarity}">${RARITY_LABEL[rarity]} — ${price} Ио/шт.</div><div class="item-chips">`;
    for (const [id,qty] of entries){
      itemsHtml += `<div class="item-chip rar-${rarity} sellable" data-tt-item="${id}" data-sell-item="${id}">${itemName(id)} <span class="chip-qty">×${qty}</span> <span class="sell-tag">продать всё за ${price*qty}</span></div>`;
    }
    itemsHtml += `</div></div>`;
  }
  if (!itemsHtml) itemsHtml = `<div class="empty-note">Нечего продать. Загляните с добычей из кейсов или экспедиций.</div>`;

  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Лавка Мартына</h2>
      <p class="muted">Мартын молча кивает на прилавок. Цена зависит от редкости, а не от того, что ты о вещи думаешь.</p>
      ${martynLastLine ? `<p class="martyn-line">«${martynLastLine}»</p>` : ""}
    </section>
    <section class="panel">
      <h2>Продать</h2>
      <p class="muted small">Клик по предмету продаёт сразу всю стопку.</p>
      ${itemsHtml}
    </section>
  `;
  document.getElementById("view").querySelectorAll('[data-sell-item]').forEach(el=>{
    el.addEventListener("click", ()=>{
      const res = sellItem(el.dataset.sellItem);
      if (res.ok){ martynLastLine = res.line; }
      renderAll();
    });
  });
}

// ===================== CASINO: КАЗИНО КРИПТО-ДЖОКЕРА =====================
function polarToCartesian(cx, cy, r, angleDeg){
  const rad = (angleDeg-90) * Math.PI/180;
  return { x: cx + r*Math.cos(rad), y: cy + r*Math.sin(rad) };
}
function wheelArcPath(cx, cy, r, startDeg, endDeg){
  const p1 = polarToCartesian(cx, cy, r, startDeg);
  const p2 = polarToCartesian(cx, cy, r, endDeg);
  const largeArc = (endDeg-startDeg) > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} Z`;
}
function buildWheelSvgHtml(){
  const cx=150, cy=150, r=140;
  const segSize = 360/WHEEL_SEGMENTS.length;
  const colorHex = { red:"#b1503f", black:"#26201a", green:"#8fae4a" };
  let paths = "";
  for (const seg of WHEEL_SEGMENTS){
    const startDeg = seg.idx*segSize, endDeg = startDeg+segSize;
    paths += `<path d="${wheelArcPath(cx,cy,r,startDeg,endDeg)}" fill="${colorHex[seg.color]}" stroke="#171410" stroke-width="1"/>`;
    if (casinoHardmode && seg.special){
      const midDeg = startDeg+segSize/2;
      const p = polarToCartesian(cx,cy,r*0.68,midDeg);
      paths += `<text x="${p.x.toFixed(1)}" y="${p.y.toFixed(1)}" font-size="16" text-anchor="middle" dominant-baseline="middle">${WHEEL_SPECIAL_EMOJI[seg.special]}</text>`;
    }
  }
  return `<svg viewBox="0 0 300 300" width="260" height="260">${paths}<circle cx="150" cy="150" r="11" fill="#c98a3c" stroke="#171410" stroke-width="2"/></svg>`;
}

function colorLabel(c){ return {red:"красное", black:"чёрное", green:"зелёное"}[c] || c; }

function spinToIndex(winningIndex){
  const segSize = 360/WHEEL_SEGMENTS.length;
  const jitter = (Math.random()-0.5)*segSize*0.6;
  const targetCenterAngle = (winningIndex+0.5)*segSize + jitter;
  const currentMod = ((wheelRotation % 360)+360)%360;
  const desiredMod = (360-targetCenterAngle+360)%360;
  let delta = desiredMod - currentMod;
  if (delta <= 0) delta += 360;
  const extraSpins = 6;
  wheelRotation += delta + 360*extraSpins;
}

function renderCasino(){
  const betNum = Number(casinoBetDraft)||0;
  const canSpin = !casinoSpinning && !!casinoSelectedColor && betNum>0 && player.ar>=betNum;
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Казино Крипто-Джокера</h2>
      <p class="muted">Джокер подмигивает и указывает на колесо. Где-то за кадром жужжит майнинг-ферма.</p>
      ${casinoLastLine ? `<p class="martyn-line">«${casinoLastLine}»</p>` : ""}
    </section>
    <section class="panel">
      <div class="wheel-wrap">
        <div class="wheel-pointer">▼</div>
        <div class="wheel-disc" id="wheel-disc" style="transform:rotate(${wheelRotation}deg)">
          ${buildWheelSvgHtml()}
        </div>
      </div>
      <div class="casino-controls">
        <label class="hardmode-toggle">
          <input type="checkbox" id="hardmode-toggle" ${casinoHardmode?"checked":""} ${casinoSpinning?"disabled":""}>
          Хардмод (сектора-сюрпризы: 🎁 кейсы / 🐣 юнит / 💀 файт / 📉 тройной убыток)
        </label>
        <div class="bet-colors">
          <button class="btn btn-small bet-color-btn bet-red ${casinoSelectedColor==='red'?'is-selected':''}" data-color="red" ${casinoSpinning?"disabled":""}>Красное ×2</button>
          <button class="btn btn-small bet-color-btn bet-black ${casinoSelectedColor==='black'?'is-selected':''}" data-color="black" ${casinoSpinning?"disabled":""}>Чёрное ×2</button>
          <button class="btn btn-small bet-color-btn bet-green ${casinoSelectedColor==='green'?'is-selected':''}" data-color="green" ${casinoSpinning?"disabled":""}>Зелёное ×8</button>
        </div>
        <input type="number" id="bet-amount-input" class="text-input" min="1" max="${player.ar}" value="${casinoBetDraft}" ${casinoSpinning?"disabled":""}>
        <button class="btn btn-primary" id="spin-btn" ${canSpin?"":"disabled"}>${casinoSpinning?"Крутится…":"Крутить"} (АР: ${player.ar})</button>
        ${casinoResultMsg ? `<p class="inv-message">${casinoResultMsg}</p>` : ""}
        ${player.ar<=0 ? `<p class="muted small">АР можно получить у Диогена в канализации (обмен на Ио) или редкой наградой за победу над Евклидом.</p>` : ""}
      </div>
    </section>
  `;
  document.querySelectorAll(".bet-color-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{ casinoSelectedColor = btn.dataset.color; renderAll(); });
  });
  const hardmodeToggle = document.getElementById("hardmode-toggle");
  if (hardmodeToggle) hardmodeToggle.addEventListener("change", ()=>{ casinoHardmode = hardmodeToggle.checked; renderAll(); });
  const betInput = document.getElementById("bet-amount-input");
  if (betInput) betInput.addEventListener("input", ()=>{ casinoBetDraft = betInput.value; });
  const spinBtn = document.getElementById("spin-btn");
  if (spinBtn) spinBtn.addEventListener("click", onSpinClick);
}

function onSpinClick(){
  const amount = Math.floor(Number(casinoBetDraft));
  const res = resolveSpin(casinoSelectedColor, amount, casinoHardmode);
  if (!res.ok){ casinoResultMsg = res.msg; renderAll(); return; }
  casinoSpinning = true;
  casinoResultMsg = null;
  spinToIndex(res.idx);
  renderAll();
  setTimeout(()=>{
    casinoSpinning = false;
    revealSpinResult(res);
    renderAll();
  }, WHEEL_SPIN_MS + 150);
}

function revealSpinResult(res){
  applySpinResult(res);
  if (res.effect){
    const lines = JOKER_SPECIAL_LINES[res.effect];
    casinoLastLine = lines[Math.floor(Math.random()*lines.length)];
    if (res.effect==="crates") casinoResultMsg = `Сектор-сюрприз: бонусные кейсы! +${res.detail} бесплатных открытий Большого кейса.`;
    else if (res.effect==="unit") casinoResultMsg = `Сектор-сюрприз: юнит в подарок — ${res.detail}.`;
    else if (res.effect==="triple_loss") casinoResultMsg = `Сектор-сюрприз: тройной убыток! Дополнительно потеряно ${res.detail} АР.`;
    else if (res.effect==="fight"){
      casinoResultMsg = "Сектор-сюрприз: файт!";
      triggerCasinoFight();
      return;
    }
  } else if (res.win){
    casinoLastLine = JOKER_WIN_LINES[Math.floor(Math.random()*JOKER_WIN_LINES.length)];
    casinoResultMsg = `Выпало ${colorLabel(res.segment.color)}! Выигрыш: +${res.payout} АР.`;
  } else {
    casinoLastLine = JOKER_LOSE_LINES[Math.floor(Math.random()*JOKER_LOSE_LINES.length)];
    casinoResultMsg = `Выпало ${colorLabel(res.segment.color)}. Ставка сгорела.`;
  }
}

function triggerCasinoFight(){
  casinoFightPending = true;
  returnTabAfterBattle = currentTab;
  currentTab = "expedition";
  renderAll();
}

function renderCasinoFightPrompt(){
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>💀 ${CASINO_ENEMY.name}</h2>
      <p class="muted">Из подсобки казино выходит крепкий тип со счётом за «непредвиденные проигрыши».</p>
      <button class="btn btn-primary" id="fight-casino-btn">Принять бой</button>
    </section>
  `;
  document.getElementById("fight-casino-btn").addEventListener("click", ()=>{
    casinoFightPending = false;
    startCasinoFight();
    renderAll();
  });
}

function performMove(source, target){
  if (!battle) return;
  if (source.type==="roster" && target.type==="slot" && target.side==="player"){
    if (battle.phase!=="setup") return;
    deployUnit(source.uid, target.line, target.idx);
  } else if (source.type==="slot" && target.type==="roster-drop"){
    if (battle.phase!=="setup") return;
    undeployUnit(source.line, source.idx);
  } else if (source.type==="slot" && target.type==="slot" && target.side==="player"){
    if (battle.phase!=="setup" && battle.phase!=="playerTurn") return;
    moveUnit(source.line, source.idx, target.line, target.idx);
  }
}

function wireBattleArrows(){
  const view = document.getElementById("view");
  view.querySelectorAll(".arrow-btn:not([disabled])").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      const slotEl = btn.closest(".unit-slot");
      const line = slotEl.dataset.line, idx = Number(slotEl.dataset.idx);
      const dir = btn.dataset.arrow;
      if (dir==="left") moveUnit(line, idx, line, idx-1);
      else if (dir==="right") moveUnit(line, idx, line, idx+1);
      else if (dir==="vert") moveUnit(line, idx, line==="front"?"back":"front", idx);
      renderAll();
    });
  });
  wireBattleItemTray();
}

function applyBattleItemToSlot(slotEl, itemId){
  if (!itemId) return;
  const cardEl = slotEl.querySelector("[data-uid]");
  if (!cardEl) return;
  const res = useItemOnUnit(cardEl.dataset.uid, itemId);
  battleItemMessage = res.msg;
  battleItemSelected = null;
  renderAll();
  const logEl = document.querySelector(".battle-log");
  if (logEl) logEl.scrollTop = logEl.scrollHeight;
}

function wireBattleItemTray(){
  const view = document.getElementById("view");
  view.querySelectorAll("[data-battle-item]").forEach(chip=>{
    chip.addEventListener("dragstart", (e)=>{ e.dataTransfer.setData("text/plain", chip.dataset.battleItem); });
    chip.addEventListener("click", ()=>{
      const id = chip.dataset.battleItem;
      battleItemSelected = (battleItemSelected===id) ? null : id;
      renderAll();
    });
  });
  view.querySelectorAll('.unit-slot.filled[data-side="player"]').forEach(slotEl=>{
    slotEl.addEventListener("dragover", (e)=>e.preventDefault());
    slotEl.addEventListener("drop", (e)=>{
      e.preventDefault();
      applyBattleItemToSlot(slotEl, e.dataTransfer.getData("text/plain"));
    });
    slotEl.addEventListener("click", ()=>{
      if (battleItemSelected) applyBattleItemToSlot(slotEl, battleItemSelected);
    });
  });
}

function wireBoardInteractions(){
  const view = document.getElementById("view");

  // drag
  view.querySelectorAll('[draggable="true"]').forEach(card=>{
    card.addEventListener("dragstart", (e)=>{
      const role = card.dataset.role;
      let src;
      if (role==="roster") src = {type:"roster", uid: card.dataset.uid};
      else src = {type:"slot", side:"player", line: card.dataset.line, idx: Number(card.dataset.idx), uid: card.dataset.uid};
      e.dataTransfer.setData("text/plain", JSON.stringify(src));
    });
  });
  view.querySelectorAll('[data-role="slot"]').forEach(slot=>{
    slot.addEventListener("dragover", (e)=>{ if (slot.dataset.side==="player") e.preventDefault(); });
    slot.addEventListener("drop", (e)=>{
      e.preventDefault();
      if (slot.dataset.side!=="player") return;
      const src = JSON.parse(e.dataTransfer.getData("text/plain"));
      performMove(src, {type:"slot", side:"player", line: slot.dataset.line, idx: Number(slot.dataset.idx)});
      selected = null;
      renderAll();
    });
  });
  const rosterDrop = view.querySelector('[data-role="roster-drop"]');
  if (rosterDrop){
    rosterDrop.addEventListener("dragover", (e)=>e.preventDefault());
    rosterDrop.addEventListener("drop", (e)=>{
      e.preventDefault();
      const src = JSON.parse(e.dataTransfer.getData("text/plain"));
      performMove(src, {type:"roster-drop"});
      selected = null;
      renderAll();
    });
  }

  // click-select fallback
  view.querySelectorAll('[data-uid], [data-role="slot"], [data-role="roster-drop"]').forEach(el=>{
    el.addEventListener("click", (e)=>{
      e.stopPropagation();
      const role = el.dataset.role;
      let clicked;
      if (role==="roster") clicked = {type:"roster", uid: el.dataset.uid};
      else if (role==="slot") clicked = {type:"slot", side: el.dataset.side, line: el.dataset.line, idx: Number(el.dataset.idx)};
      else if (role==="roster-drop") clicked = {type:"roster-drop"};
      else return;

      if (!selected){
        if (clicked.type==="roster" || (clicked.type==="slot" && clicked.side==="player")){
          selected = clicked; renderAll();
        }
        return;
      }
      const same = JSON.stringify(selected)===JSON.stringify(clicked);
      if (same){ selected = null; renderAll(); return; }
      performMove(selected, clicked);
      selected = null;
      renderAll();
    });
  });
}

// ===================== PERSISTENCE =====================
// Uses window.storage when running as a Claude.ai artifact; falls back to localStorage
// for a standalone deploy (e.g. GitHub Pages), where window.storage doesn't exist.
const SAVE_KEY = "minislop88_save";
var saveTimer = null;
function scheduleSave(){
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(saveGame, 700);
}
async function storageGet(key){
  if (window.storage){
    try { const res = await window.storage.get(key, false); return res ? res.value : null; }
    catch(e){ return null; }
  }
  try { return window.localStorage.getItem(key); } catch(e){ return null; }
}
async function storageSet(key, value){
  if (window.storage){
    try { await window.storage.set(key, value, false); } catch(e){ console.error("save failed", e); }
    return;
  }
  try { window.localStorage.setItem(key, value); } catch(e){ console.error("save failed", e); }
}
async function saveGame(){
  await storageSet(SAVE_KEY, JSON.stringify({
    player, caseLog, mechaCaseLog, crapCaseLog, uidCounter,
    currentTab: currentTab==="expedition" ? "inventory" : currentTab
  }));
}
async function loadGame(){
  const raw = await storageGet(SAVE_KEY);
  if (!raw) return false;
  try{
    const saved = JSON.parse(raw);
    if (saved.player) Object.assign(player, saved.player);
    if (!player.discovered) player.discovered = {};
    if (Array.isArray(saved.caseLog)) caseLog = saved.caseLog;
    if (Array.isArray(saved.mechaCaseLog)) mechaCaseLog = saved.mechaCaseLog;
    if (Array.isArray(saved.crapCaseLog)) crapCaseLog = saved.crapCaseLog;
    if (typeof saved.uidCounter === "number") uidCounter = saved.uidCounter;
    if (saved.currentTab) currentTab = saved.currentTab;
    return true;
  } catch(e){ return false; }
}

// ===================== MAIN RENDER DISPATCH =====================
function renderAll(){
  renderTopbar();
  if (currentTab==="inventory") renderInventory();
  else if (currentTab==="cases") renderCases();
  else if (currentTab==="craft") renderCraft();
  else if (currentTab==="expedition") renderExpedition();
  else if (currentTab==="mecha") renderMecha();
  else if (currentTab==="catalog") renderCatalog();
  else if (currentTab==="shop") renderShop();
  else if (currentTab==="casino") renderCasino();
  scheduleSave();
}

async function initApp(){
  document.querySelectorAll(".tabs button").forEach(b=>{
    b.addEventListener("click", ()=>{
      if (battle || mimicPending || casinoFightPending || casinoSpinning) return; // lock tabs mid-battle/mid-spin
      currentTab = b.dataset.tab;
      selected = null;
      invSelectedUid = null;
      invMessage = null;
      renderAll();
    });
  });
  initTooltip();
  const loaded = await loadGame();
  if (!loaded){
    // fresh save: starter roster so battles are testable immediately
    player.units.push(makeUnitInstance("brave_warrior"));
  }
  renderAll();
}

document.addEventListener("DOMContentLoaded", initApp);
