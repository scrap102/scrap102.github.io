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
  {id:"rabbit_foot", name:"Заячья лапка *", tags:"Y", rarity:"suchself", desc:"Технически — от таракана. Но работает точно так же, говорят."},
  {id:"stasik_mushroom", name:"Гриб Стасика *", tags:"Y", rarity:"suchself", desc:"Происхождение не обсуждается. Действие — тоже, оно каждый раз разное."},
  {id:"beadhandful", name:"Горсть бус *", tags:"X", rarity:"trash", desc:"Официальная валюта ВЦВП. Больше нигде не принимают, даже там."},
  {id:"portal_shard", name:"Осколок портала *", tags:"C", rarity:"rare", desc:"Холодный на ощупь. Иногда шепчет что-то на языке, которого не существует."},
  {id:"portal_key", name:"Портальный ключ *", tags:"P", rarity:"precious", desc:"Открывает проход в Туманные земли. Использовать осторожно — туман не любит, когда его тревожат зря."},
  {id:"foglichen", name:"Туманный лишайник *", tags:"X", rarity:"normal", desc:"Растёт только там, где обычная логика не работает."},
  {id:"witchvial", name:"Флакон Лесной Ведьмы *", tags:"S", rarity:"rare", desc:"Внутри — что-то булькающее. Ведьма забыла подписать содержимое."},
  {id:"ancientantler", name:"Древний рог *", tags:"S", rarity:"precious", desc:"Отвалился от кого-то очень старого и очень недовольного этим фактом."},
  // ---- Round 15: equippable weapons — one slot per (non-robot) unit, applied via Инвентарь ----
  {id:"nailstick", name:"Ржавый гвоздь на палке *", tags:"Y", rarity:"trash", isWeapon:true, weaponEffect:{dmgDelta:1}, desc:"Оружие отчаяния. Работает — с натяжкой."},
  {id:"spoonshank", name:"Заточка из ложки *", tags:"Y", rarity:"suchself", isWeapon:true, weaponEffect:{dmgDelta:2}, desc:"Кто-то потратил на это целую ночь в очереди."},
  {id:"pitchfork", name:"Вилы огородные *", tags:"Y", rarity:"normal", isWeapon:true, weaponEffect:{dmgDelta:3}, desc:"Прямиком с грядки, минуя стадию «мирного инвентаря»."},
  {id:"fatewrench", name:"Разводной ключ судьбы *", tags:"Y", rarity:"rare", isWeapon:true, weaponEffect:{dmgDelta:3, shldDelta:1}, desc:"Разводит не только гайки, но и обстоятельства."},
  {id:"cleaver", name:"Мясницкий тесак *", tags:"Y", rarity:"rare", isWeapon:true, weaponEffect:{dmgDelta:4, grantAbility:{type:"armor_pierce", amount:1}}, desc:"Проходит сквозь щит примерно так же легко, как сквозь всё остальное."},
  {id:"goldpoker", name:"Позолоченная кочерга *", tags:"Y", rarity:"precious", isWeapon:true, weaponEffect:{dmgDelta:5, shldDelta:1}, desc:"Слишком благородная для камина. Слишком острая, чтобы это признать."}
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
  bob: {id:"bob", name:"Боб", hp:3, dmg:2, shld:0, abilities:[{type:"scale_hp_per_ally", unitId:"bob", amount:3}]},
  gnome_unit: {id:"gnome_unit", name:"Садовый гномик", hp:3, dmg:3, shld:0, abilities:[{type:"on_death_drop", item:"clay"}]},
  robocandy: {id:"robocandy", name:"Робоконфетка", hp:3, dmg:2, shld:0, abilities:[]},
  jyj: {id:"jyj", name:"Жыж", hp:4, dmg:2, shld:0, abilities:[{type:"post_battle_full_heal"}]},
  scarecrow: {id:"scarecrow", name:"Пугало", hp:4, dmg:2, shld:1, abilities:[{type:"aura_shield_adjacent", shld:1}]},
  figure: {id:"figure", name:"Фигурка", hp:2, dmg:2, shld:1, abilities:[{type:"post_battle_heal_adjacent", amount:2}]},
  who: {id:"who", name:"Кто", hp:8, dmg:3, shld:0, abilities:[]},
  catapult: {id:"catapult", name:"Катапульта", hp:6, dmg:4, shld:0, abilities:[{type:"ranged_attack"}]},
  beaver_fort: {id:"beaver_fort", name:"Бобровое укрепление", hp:5, dmg:2, shld:3, abilities:[]},
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
  mimic:"🎁", casino_enemy:"💀", busik:"📿"
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
  {id:"r_jyj", inputs:[{id:"yellowpaste",qty:1},{id:"waterchunk",qty:1}], tools:[], output:{unit:"jyj", qty:2}, label:"Желтая зубная паста + Кусок воды = Жыж x2 (было x1)", homebrew:true},
  {id:"r_scarecrow", inputs:[{id:"halloweenpumpkin",qty:1},{id:"stick",qty:1},{id:"rottape",qty:1}], tools:[], output:{unit:"scarecrow", qty:1}, label:"Хэллоуинская тыква + Палка + Гнилая изолента = Пугало"},
  {id:"r_readysausage", inputs:[{id:"sausage",qty:1}], tools:["cookguide","grill"], output:{item:"readysausage", qty:1}, label:"Сарделька + Гид по кулинарии(инстр.) + Гриль(инстр.) = Готовая сарделька"},
  {id:"r_steak", inputs:[{id:"meat",qty:1}], tools:["grill"], output:{item:"steak", qty:1}, label:"Кусок мяса + Гриль(инстр.) = Стейк"},
  {id:"r_quicksand", inputs:[{id:"sandchunk",qty:1},{id:"dirt",qty:1}], tools:[], output:{item:"quicksand", qty:1}, label:"КУСОК ПЕСКА + Кусок земли = Зыбучие пески"},
  {id:"r_figure", inputs:[{id:"clay",qty:1}], tools:["oven"], output:{unit:"figure", qty:1}, label:"Кусок глины + Печь(инстр.) = Фигурка"},
  {id:"r_robocandy", inputs:[{id:"candy",qty:1},{id:"wires",qty:1}], tools:[], output:{unit:"robocandy", qty:2}, label:"Конфетка + Провода = Робоконфетка x2"},

  // rare tier
  {id:"r_who", inputs:[{id:"rotpumpkin",qty:1},{id:"woodturd",qty:1}], tools:[], output:{unit:"who", qty:1}, label:"Гнилая тыква + Деревянное говно = Кто (рецепт упрощён — раньше требовалась ещё и Палка)", homebrew:true},
  {id:"r_catapult", inputs:[{id:"board",qty:1},{id:"brick",qty:1},{id:"potato",qty:1}], tools:[], output:{unit:"catapult", qty:1}, label:"Доска + Кирпич + Картошка = Катапульта * (адаптировано, без деталей меха)", homebrew:true},
  {id:"r_elite_robocandy", inputs:[], tools:["upgradebook"], requiresUnit:"robocandy", consumeUnit:1, output:{unit:"elite_robocandy", qty:1}, label:"Робоконфетка + Магическая книга улучшения(инстр.) = Элитная робоконфетка"},
  {id:"r_cactusyan_upgrade", inputs:[{id:"cactusthorn",qty:1}], tools:[], requiresUnit:"cactusyan_classic", consumeUnit:1, output:{unit:"cactusyan_nonclassic", qty:1}, label:"Классический кактусян + Колючка кактуса = Неклассический кактусян"},
  {id:"r_beaver_fort", inputs:[{id:"beaver",qty:1},{id:"brick",qty:1},{id:"nail",qty:1}], tools:[], output:{unit:"beaver_fort", qty:1}, label:"Бобер + Кирпич + Гвоздь = Бобровое укрепление"},
  {id:"r_pyroach", inputs:[{id:"roach",qty:1},{id:"burner",qty:1},{id:"steelingot",qty:1}], tools:[], output:{unit:"pyroach", qty:1}, label:"Таракан + Горелка + Стальной слиток = Пирокан"},
  {id:"r_something_alive", inputs:[{id:"biotrash",qty:1},{id:"toiletextract",qty:1}], tools:[], output:{unit:"something_alive", qty:1}, label:"Биомусор + Экстракт унитаза = Что-то живое"},
  {id:"r_bard", inputs:[{id:"guy",qty:1},{id:"mandolin",qty:1}], tools:[], output:{unit:"bard", qty:1}, label:"Чел + Мандолина = Бард"},

  // precious tier
  {id:"r_mage", inputs:[{id:"guy",qty:1},{id:"weakamulet",qty:1}], tools:[], output:{unit:"mage", qty:1}, label:"Чел + Слабый магический амулет = Маг (рецепт упрощён — раньше требовалась ещё и Ткань)", homebrew:true},
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
  {id:"r_rabbit_foot", inputs:[{id:"roach",qty:1},{id:"grass",qty:1}], tools:[], output:{item:"rabbit_foot", qty:1}, label:"Таракан + Трава = Заячья лапка * (технически не заяц)", homebrew:true},

  // ---- Farlands unlock ----
  {id:"r_portal_key", inputs:[{id:"portal_shard",qty:2},{id:"madnessjar",qty:1}], tools:[], output:{item:"portal_key", qty:1}, label:"Осколок портала * ×2 + Безумие в банке = Портальный ключ * (открывает Туманные земли)", homebrew:true},

  // ---- Round 15: equippable weapons ----
  {id:"r_nailstick", inputs:[{id:"nail",qty:1},{id:"stick",qty:1}], tools:[], output:{item:"nailstick", qty:1}, label:"Гвоздь + Палка = Ржавый гвоздь на палке * (оружие)", homebrew:true},
  {id:"r_spoonshank", inputs:[{id:"nail",qty:1},{id:"cloth",qty:1}], tools:[], output:{item:"spoonshank", qty:1}, label:"Гвоздь + Ткань = Заточка из ложки * (оружие)", homebrew:true},
  {id:"r_pitchfork", inputs:[{id:"stick",qty:2},{id:"brick",qty:1}], tools:[], output:{item:"pitchfork", qty:1}, label:"Палка ×2 + Кирпич = Вилы огородные * (оружие)", homebrew:true},
  {id:"r_fatewrench", inputs:[{id:"wires",qty:1},{id:"brick",qty:1},{id:"grime",qty:1}], tools:[], output:{item:"fatewrench", qty:1}, label:"Провода + Кирпич + Чернь = Разводной ключ судьбы * (оружие)", homebrew:true},
  {id:"r_cleaver", inputs:[{id:"brick",qty:1},{id:"nail",qty:1},{id:"sandchunk",qty:1}], tools:[], output:{item:"cleaver", qty:1}, label:"Кирпич + Гвоздь + КУСОК ПЕСКА = Мясницкий тесак * (оружие, пробивает щит)", homebrew:true},
  {id:"r_goldpoker", inputs:[{id:"barrelitem",qty:1},{id:"wires",qty:1},{id:"brick",qty:1}], tools:[], output:{item:"goldpoker", qty:1}, label:"Бочка + Провода + Кирпич = Позолоченная кочерга * (оружие)", homebrew:true}
];

function recipeCategory(recipe){
  if (recipe.output.unit) return "unit";
  const item = ITEM_DB[recipe.output.item];
  if (item && item.isWeapon) return "weapon";
  if (item && item.tags && item.tags.indexOf("Y") !== -1) return "buff";
  return "component";
}
const RECIPE_CATEGORY_LABEL = { unit:"Юниты", weapon:"Оружие", buff:"Баффы юнитам", component:"Компоненты и предметы" };

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
// Weight tables double as both the actual roll logic (see rarityFromRoll/finishCaseOpen below) and the
// odds displayed in the Каталог tab, so the two can never drift out of sync. Each table's weights must
// sum to 101 (rolls are 0-100 inclusive).
const BIG_CASE_WEIGHTS = [
  {rarity:"trash", w:28}, {rarity:"suchself", w:25}, {rarity:"normal", w:21}, {rarity:"rare", w:14},
  {rarity:"precious", w:8}, {rarity:"legendary", w:2}, {rarity:"artifact", w:1}, {rarity:"inonecopy", w:1},
  {rarity:"mimic", w:1}
];
const MECHA_CASE_WEIGHTS = [
  {rarity:"trash", w:45}, {rarity:"normal", w:38}, {rarity:"rare", w:11}, {rarity:"precious", w:5},
  {rarity:"legendary", w:2}
];
const CRAP_CASE_WEIGHTS = [
  {rarity:"trash", w:40}, {rarity:"suchself", w:30}, {rarity:"normal", w:20}, {rarity:"rare", w:11}
];

const CASE_CATALOG = [
  {key:"big", label:"Большой кейс", pool:BIG_CASE_POOL, odds:BIG_CASE_WEIGHTS},
  {key:"mecha", label:"Мех-кейс", pool:MECHA_CASE_POOL, odds:MECHA_CASE_WEIGHTS}
  // Кейс Говна reuses Big Case's own trash..rare pools (just different odds), so it isn't
  // listed as a separate catalog section — its possible drops already show under "Большой кейс".
];

// ===================== SELLING (Лавка Мартына) =====================
// Sell price by rarity tier. Tuned so opening a Big Case (15 Ио) and selling everything you get
// pays back roughly 20-30% on average.
const SELL_PRICE = {
  trash: 1, suchself: 2, normal: 3, rare: 6,
  precious: 10, legendary: 17, artifact: 28, inonecopy: 55
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
  1: {name:"Псевдосфера псевдокоричневой псевдомассы", hp:19, dmg:4, shld:0, moveChance:15},
  2: {name:"Плохая вода", hp:20, dmg:2, shld:0, flag:"badwater", moveChance:40},
  3: {name:"Неевклид", hp:25, dmg:4, shld:2, moveChance:30},
  4: {name:"Пересекающиеся Прямые", hp:14, dmg:2, shld:2, moveChance:25, pack:[
        {name:"Прямая",hp:7,dmg:2,shld:1,moveChance:25}, {name:"Прямая",hp:7,dmg:2,shld:1,moveChance:25}
      ]},
  5: {name:"Кривая", hp:5, dmg:3, shld:0, moveChance:50},
  6: {name:"Странная", hp:19, dmg:3, shld:0, moveChance:45},
  7: {name:"Клочья гиперболического мха", hp:12, dmg:2, shld:1, moveChance:55, pack:[
        {name:"Клочок гиперболического мха",hp:4,dmg:2,shld:0,moveChance:55}, {name:"Клочок гиперболического мха",hp:4,dmg:2,shld:0,moveChance:55}, {name:"Клочок гиперболического мха",hp:4,dmg:2,shld:0,moveChance:55}
      ]},
  8: {name:"Бочка", hp:30, dmg:0, shld:3, flag:"barrel", moveChance:0},
  9: {name:"Парадокс", hp:40, dmg:2, shld:2, boss:true, flag:"paradox", scalingDmgPerKill:1, moveChance:20},
  10:{name:"Вестники Евклида", hp:6, dmg:2, shld:1, moveChance:100, pack:[
        {name:"Вестник Евклида",hp:2,dmg:2,shld:0,moveChance:100}, {name:"Вестник Евклида",hp:2,dmg:2,shld:0,moveChance:100}, {name:"Вестник Евклида",hp:2,dmg:2,shld:0,moveChance:100}
      ]},
  11:{name:"Евклид", hp:50, dmg:4, shld:2, boss:true, flag:"euclid", moveChance:20},
  12:{name:"Александр", hp:11, dmg:4, shld:1, moveChance:35},
  // ---- Round 13: mixed-theme combo fights (not everything needs to be thematically related) ----
  13:{name:"Странная и Кривая устроили дуэль", hp:18, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Странная",hp:14,dmg:2,shld:0,moveChance:45}, {name:"Кривая",hp:4,dmg:2,shld:0,moveChance:50}
      ]},
  14:{name:"Александр против Псевдосферы", hp:21, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Александр",hp:8,dmg:3,shld:1,moveChance:35}, {name:"Псевдосфера псевдокоричневой псевдомассы",hp:13,dmg:3,shld:0,moveChance:15}
      ]},
  15:{name:"Неевклид, Прямая и Вестник сговорились", hp:20, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Неевклид",hp:12,dmg:3,shld:1,moveChance:30}, {name:"Прямая",hp:6,dmg:2,shld:1,moveChance:25}, {name:"Вестник Евклида",hp:2,dmg:2,shld:0,moveChance:100}
      ]},
  // ---- Round 13: ranged enemies (paired with a melee escort so a roster with zero ranged units of its
  // own still has something reachable to fight — a lone backline-only enemy would otherwise be
  // undamageable by front-row units and stalemate forever) ----
  16:{name:"Сильный плевальщик и охрана", hp:30, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Сильный плевальщик",hp:18,dmg:4,shld:1,moveChance:30,backline:true,abilities:[{type:"ranged_attack"}]},
        {name:"Александр",hp:8,dmg:3,shld:1,moveChance:35}
      ]},
  17:{name:"Мистер Понос и свита", hp:25, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Мистер Понос",hp:15,dmg:5,shld:0,moveChance:25,backline:true,abilities:[{type:"ranged_attack"}]},
        {name:"Кривая",hp:5,dmg:3,shld:0,moveChance:50}
      ]}
};

const SEWER_ROUTES = [
  [4,5,16,2,3],
  [1,2,13,10,3],
  [6,1,17,8,7],
  [2,4,14,10,11],
  [6,1,15,9,12],
  [5,1,3,12,10],
  [3,16,10,11,8]
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
  {id:"t6", give:{io:50}, get:{ar:5}, label:"50 Ио → 5 АР («не спрашивай, откуда курс»)", homebrew:true},
  {id:"t7", give:{io:80}, get:{item:"portal_shard", qty:1}, label:"80 Ио → Осколок портала * («да, я и туда доставал»)", homebrew:true}
];

// ===================== SEWER NARRATIVE EVENTS (Round 7) =====================
// Random encounters that can replace a non-boss, non-flagged route node ~25% of the time. Each is a small
// dialogue tree (same shape as NOTIF_TYPES); an option can trigger a real ad-hoc fight via `fight: [enemyDefs]`.
// Per design: fights favor several weaker enemies over one strong one, for an interesting positioning
// puzzle — a lone tough unit is reserved for bosses and the couple of explicitly "special" encounters below
// (Таракан особого класса, Байкер-медведь).
const SEWER_EVENTS = {
  candy_army: { icon:"🍬", title:"Армия конфет", tree:{
    start: { text:"Впереди в темноте маршируют ровные шеренги конфет в фольге. У них есть знамя. У знамени, кажется, есть глаза.",
      options:[
        {label:"⚔ Атаковать", fight:[{name:"Конфетный солдат *",hp:8,dmg:2,shld:0},{name:"Конфетный солдат *",hp:8,dmg:2,shld:0},{name:"Конфетный солдат *",hp:8,dmg:2,shld:0}]},
        {label:"Договориться", effect:"candy_bribe", next:null},
        {label:"Тихо обойти", effect:"candy_sneak", next:null}
      ]}
  }},
  cockroach_special: { icon:"🪳", title:"Таракан особого класса", tree:{
    start: { text:"На стене сидит таракан размером с ботинок. Рядом на кафеле нацарапано: «ОСОБЫЙ КЛАСС. НЕ ТРОГАТЬ».",
      options:[
        {label:"⚔ Всё равно тронуть", fight:[{name:"Таракан особого класса *",hp:70,dmg:6,shld:3}]},
        {label:"Не трогать, как и написано", effect:"cockroach_peaceful", next:null}
      ]}
  }},
  parity_cult: { icon:"🔢", title:"Секта Чётности", tree:{
    start: { text:"Фигуры в капюшонах стоят строго парами и синхронно кивают. У них подчёркнуто чётное количество всего.",
      options:[
        {label:"Присоединиться к кивкам", next:"ritual"},
        {label:"⚔ Разогнать", fight:[{name:"Служитель Чётности *",hp:9,dmg:2,shld:1},{name:"Служитель Чётности *",hp:9,dmg:2,shld:1}]},
        {label:"Уйти", next:null, resultText:"Культисты синхронно кивают вслед — по два раза каждый."}
      ]},
    ritual: { text:"Один из культистов торжественно протягивает вам нечётное число. Это явно проверка на верность.",
      options:[
        {label:"Взять нечётное число (соврать)", effect:"parity_lie", next:null},
        {label:"Отказаться", effect:"parity_honest", next:null}
      ]}
  }},
  lost_auditor: { icon:"📋", title:"Заблудившийся аудитор", tree:{
    start: { text:"Человек в мятом костюме светит фонариком в планшет и требует «документы на канализацию».",
      options:[
        {label:"Показать документы (блефовать)", effect:"auditor_show_docs", next:null},
        {label:"Впарить фальшивку", effect:"auditor_fake_docs", next:null},
        {label:"Бежать", next:null, resultText:"Аудитор безуспешно кричит вслед что-то про «форму 12-Б»."}
      ]}
  }},
  rat_crown: { icon:"👑", title:"Драка крыс за корону", tree:{
    start: { text:"Десяток крыс дерётся за корону из пивной пробки. Судя по накалу, ставки высоки.",
      options:[
        {label:"⚔ Встрять в драку", fight:[{name:"Крыса-претендентка *",hp:7,dmg:2,shld:0},{name:"Крыса-претендентка *",hp:7,dmg:2,shld:0},{name:"Крыса-претендентка *",hp:7,dmg:2,shld:0}]},
        {label:"Поставить на фаворита", effect:"rat_bet", next:null},
        {label:"Пройти мимо", next:null, resultText:"Корона переходит из лап в лапы ещё несколько раз, пока вы не скрываетесь из виду."}
      ]}
  }},
  dimension_bubble: { icon:"🫧", title:"Пузырь из другого измерения", tree:{
    start: { text:"У стены висит переливающийся пузырь. Внутри что-то происходит — что именно, лучше не всматриваться.",
      options:[
        {label:"Потрогать", effect:"bubble_touch", next:null},
        {label:"Не трогать", next:null, resultText:"Пузырь укоризненно переливается, но остаётся нетронутым."}
      ]}
  }},
  siren_pipes: { icon:"🎶", title:"Хор канализационных сирен", tree:{
    start: { text:"Трубы над головой начинают петь — стройно, красиво и абсолютно не по-трубному.",
      options:[
        {label:"Слушать", effect:"siren_listen", next:null},
        {label:"Заткнуть уши и идти", next:null, resultText:"Пение стихает вдали. Возможно, вы упустили что-то важное. Возможно, и нет."}
      ]}
  }},
  dimension_bro: { icon:"🕶️", title:"Бро из соседнего измерения", tree:{
    start: { text:"Из трещины в стене выглядывает чувак в солнцезащитных очках. «Йо, брат, ты вообще не из этого измерения, да?»",
      options:[
        {label:"Дать пять", effect:"bro_fist_bump", next:null},
        {label:"Обменяться товаром", effect:"bro_trade", next:null},
        {label:"Не обращать внимания", next:null, resultText:"«Как скажешь, брат», — чувак пожимает плечами и исчезает обратно в трещину."}
      ]}
  }},
  gnome_crew: { icon:"⛏️", title:"Строительная бригада гномов", tree:{
    start: { text:"Пятеро гномов в касках сверяются с чертежом, который явно нарисован вверх ногами.",
      options:[
        {label:"Помочь материалами (Камень ×3)", effect:"gnome_help", next:null},
        {label:"Спросить, что строят", next:"explain"},
        {label:"Идти дальше", next:null, resultText:"Гномы машут вслед, не отрываясь от чертежа."}
      ]},
    explain: { text:"Старший гном долго и с восторгом объясняет проект. Вы не понимаете ни слова, но кажется, это грандиозно.",
      options:[
        {label:"Впечатлиться", effect:"gnome_impressed", next:null}
      ]}
  }},
  crying_faucet: { icon:"🚰", title:"Плачущий кран", tree:{
    start: { text:"Из стены торчит одинокий кран и тихо, безутешно капает. Кажется, кран плачет.",
      options:[
        {label:"Утешить", effect:"faucet_comfort", next:null},
        {label:"Игнорировать", next:null, resultText:"Кран продолжает капать вам вслед. Тоскливо."}
      ]}
  }},
  mop_revolution: { icon:"🧹", title:"Швабра-революционерка", tree:{
    start: { text:"Ожившая швабра толкает пламенную речь перед строем вёдер о свержении «Совета Вёдер».",
      options:[
        {label:"Расспросить подробнее", next:"recruit"},
        {label:"⚔ Разогнать революцию", fight:[{name:"Швабра-боец *",hp:10,dmg:2,shld:1},{name:"Швабра-боец *",hp:10,dmg:2,shld:1},{name:"Вёдро-охранник *",hp:12,dmg:1,shld:2}]},
        {label:"Уйти", next:null, resultText:"Швабра провожает вас взглядом ручки. Революция подождёт."}
      ]},
    recruit: { text:"Швабра предлагает присоединиться и лично свергнуть Совет Вёдер прямо сейчас.",
      options:[
        {label:"⚔ Помочь свергнуть", fight:[{name:"Швабра-боец *",hp:10,dmg:2,shld:1},{name:"Швабра-боец *",hp:10,dmg:2,shld:1},{name:"Вёдро-охранник *",hp:12,dmg:1,shld:2}]},
        {label:"Передумать", next:null, resultText:"Швабра разочарованно обмякает у стены. Революция откладывается."}
      ]}
  }},
  beer_fountain: { icon:"🍺", title:"Сломанный пивной фонтан", tree:{
    start: { text:"Из треснувшей трубы бьёт тонкая струя пива. Кто-то уже оставил рядом кружку.",
      options:[
        {label:"Напоить случайного юнита", effect:"beer_random_unit", next:null},
        {label:"Пройти мимо", next:null, resultText:"Струя пива тоскливо стекает в решётку, так никем и не оценённая."}
      ]}
  }},
  mirror_clones: { icon:"🪞", title:"Толпа зеркальных двойников", tree:{
    start: { text:"На стене — треснувшее зеркало в человеческий рост. Из трещин выбираются нечёткие, враждебные копии вашего отряда.",
      options:[
        {label:"⚔ Разбить зеркала", fight:[{name:"Зеркальный двойник *",hp:10,dmg:3,shld:0},{name:"Зеркальный двойник *",hp:10,dmg:3,shld:0},{name:"Зеркальный двойник *",hp:10,dmg:3,shld:0}]},
        {label:"Всмотреться", effect:"mirror_gaze", next:null}
      ]}
  }},
  tour_salesman: { icon:"🎫", title:"Продавец подземных экскурсий", tree:{
    start: { text:"Мужчина с флажком и бейджиком «Гид» настаивает на «эксклюзивном обходе тайных троп».",
      options:[
        {label:"Купить экскурсию (20 Ио)", effect:"tour_buy", next:null},
        {label:"Отказаться", next:null, resultText:"Гид пожимает плечами и уходит искать других туристов. Их тут явно немного."}
      ]}
  }},
  arcade_machine: { icon:"🕹️", title:"Ретро-автомат с историями", tree:{
    start: { text:"Древний игровой автомат мигает единственной надписью: «ВСТАВЬ МОНЕТУ, ЕСЛИ НЕ БОИШЬСЯ ИСТОРИЙ».",
      options:[
        {label:"Закинуть монетку (10 Ио)", effect:"arcade_coin", next:null},
        {label:"Пнуть автомат", effect:"arcade_kick", next:null},
        {label:"Пройти мимо", next:null, resultText:"Автомат обиженно гаснет за спиной."}
      ]}
  }},
  sock_gang: { icon:"🧦", title:"Банда носков-беглецов", tree:{
    start: { text:"Стая одиноких носков преграждает путь, требуя «дань за проход по стиральной территории».",
      options:[
        {label:"Отдать дань (Ткань ×2)", effect:"sock_tribute", next:null},
        {label:"⚔ Дать отпор", fight:[{name:"Носок-голем *",hp:8,dmg:3,shld:0},{name:"Носок-голем *",hp:8,dmg:3,shld:0},{name:"Носок-голем *",hp:8,dmg:3,shld:0}]},
        {label:"Договориться словами", effect:"sock_talk", next:null}
      ]}
  }},
  fridge_oracle: { icon:"🧊", title:"Древний холодильник-оракул", tree:{
    start: { text:"Ржавый холодильник гудит низким голосом: «ЗАДАЙ ВОПРОС ИЛИ ОТВЕТЬ НА МОЙ. ЧТО ГЛАВНОЕ ВО МНЕ?»",
      options:[
        {label:"«Дверь»", effect:"fridge_answer_door", next:null},
        {label:"«Холод»", effect:"fridge_answer_cold", next:null},
        {label:"Промолчать", effect:"fridge_silence", next:null}
      ]}
  }},
  biker_bear: { icon:"🐻", title:"Дезориентированный медведь-байкер", tree:{
    start: { text:"Посреди тоннеля стоит байк, а рядом — медведь в косухе, растерянно смотрящий на карту вверх ногами.",
      options:[
        {label:"⚔ Успокоить силой", fight:[{name:"Байкер-медведь *",hp:55,dmg:5,shld:2}]},
        {label:"Подсказать дорогу", effect:"bear_directions", next:null}
      ]}
  }},
  mimic_rally: { icon:"🎁", title:"Митинг мимиков", tree:{
    start: { text:"Десяток сундуков стоят в кружок с плакатами «МИМИКИ ТОЖЕ ЛЮДИ» и «НЕ ВСЯКИЙ СУНДУК — ЛОВУШКА».",
      options:[
        {label:"Поддержать", effect:"mimic_support", next:null},
        {label:"Разоблачить обман", effect:"mimic_expose", next:null},
        {label:"Уйти", next:null, resultText:"Митинг продолжается без вас — сундуки уже спорят между собой."}
      ]}
  }},
  treasure_ghost: { icon:"👻", title:"Призрак с картой сокровищ", tree:{
    start: { text:"Полупрозрачная фигура держит подмышкой явно поддельную карту сокровищ и таинственно шепчет о «настоящем кладе».",
      options:[
        {label:"Купить карту (15 Ио)", effect:"ghost_map", next:null},
        {label:"Отказаться", next:null, resultText:"Призрак разочарованно растворяется в стене вместе с картой."}
      ]}
  }}
};

function applySewerEventEffect(key){
  switch(key){
    case "candy_bribe": {
      const cost=15;
      if (!canAffordIo(cost)) return "У вас не хватает Ио на «переговоры». Конфеты сурово смотрят.";
      spendIo(cost); addItem("candy",2);
      return "Строй конфет расступается, вручив вам пару своих на память. Дипломатия работает!";
    }
    case "candy_sneak": {
      if (Math.random()<0.6) return "Получилось прошмыгнуть незамеченным. Неловко, но эффективно.";
      const loss=10+Math.floor(Math.random()*10); spendIo(loss);
      return "Замечены. Конфетный интендант штрафует «за нарушение строя» на "+loss+" Ио.";
    }
    case "cockroach_peaceful": { const amt=10+Math.floor(Math.random()*10); player.io+=amt; return "Вы уважаете табличку и проходите мимо. Находите "+amt+" Ио, оброненных предыдущим смельчаком."; }
    case "parity_lie": {
      if (Math.random()<0.5){ addItem("medal",1); return "Культисты не замечают подвоха и в восторге вручают медаль за «верность чётности»."; }
      const loss=10+Math.floor(Math.random()*15); spendIo(loss);
      return "Культисты чуют нечётность в вашей душе и штрафуют на "+loss+" Ио «за дисбаланс».";
    }
    case "parity_honest": { player.io+=10; return "За честность культисты неохотно, но выдают 10 Ио «на удачу»."; }
    case "auditor_show_docs": { const amt=12+Math.floor(Math.random()*10); player.io+=amt; return "Документов, конечно, нет — но аудитор так впечатлён вашей уверенностью, что выписывает «компенсацию за стресс», "+amt+" Ио."; }
    case "auditor_fake_docs": {
      if (Math.random()<0.5){ addItem("grime",3); return "Фальшивка проходит на ура. Аудитор доволен и оставляет немного черни в качестве «печати»."; }
      const loss=8+Math.floor(Math.random()*12); spendIo(loss);
      return "Аудитор раскусывает подделку и штрафует на "+loss+" Ио за «моральный урон бюрократии».";
    }
    case "rat_bet": {
      if (Math.random()<0.45){ const amt=20+Math.floor(Math.random()*20); player.io+=amt; return "Ваш фаворит выигрывает корону! Получаете "+amt+" Ио с восторженных букмекеров-крыс."; }
      const loss=10+Math.floor(Math.random()*10); spendIo(loss);
      return "Фаворит эффектно проигрывает. Крысы-букмекеры забирают "+loss+" Ио.";
    }
    case "bubble_touch": {
      const roll=Math.random();
      if (roll<0.4){ addItem("madnessjar",1); return "Пузырь лопается и оставляет на полу банку «Безумия». Спасибо, наверное."; }
      if (roll<0.75){ const amt=15+Math.floor(Math.random()*20); player.io+=amt; return "Пузырь на секунду показывает выигрышные числа. Находите "+amt+" Ио."; }
      addItem("unlucky_medallion",1);
      return "Пузырь оставляет на шее холодное ощущение и медальон неудачи. Кажется, это не к добру.";
    }
    case "siren_listen": {
      const alive = player.units.filter(u=>!u.dead);
      if (alive.length && Math.random()<0.5){
        const u = alive[Math.floor(Math.random()*alive.length)];
        const h = 5+Math.floor(Math.random()*8);
        u.maxHp += h; u.hp = Math.min(u.maxHp, u.hp+h);
        return "Пение странно успокаивает "+u.name+" — +"+h+" HP.";
      }
      const loss = 5+Math.floor(Math.random()*10); spendIo(loss);
      return "Пение сбивает с толку — вы теряете "+loss+" Ио на ровном месте, не понимая как.";
    }
    case "bro_fist_bump": { const amt=8+Math.floor(Math.random()*12); player.io+=amt; return "Бро впечатляюще жмёт руку и суёт "+amt+" Ио. «Держись там, бро»."; }
    case "bro_trade": {
      const cost=10;
      if (!canAffordIo(cost)) return "Бро разводит руками: «Нет Ио — нет обмена, бро».";
      spendIo(cost); addItem("wind_key",1);
      return "Бро протягивает странный заводной ключ. «Из моего измерения, бро. Полезная штука».";
    }
    case "gnome_help": {
      if (!hasItem("stone",3)) return "Гномы недовольно качают головами: «Камня маловато».";
      removeItem("stone",3); addItem("brick",2);
      return "Гномы благодарно берут камень и взамен суют пару готовых кирпичей. «Не спрашивай, что мы строим».";
    }
    case "gnome_impressed": { player.io+=12; return "Гномы так рады слушателю, что суют вам 12 Ио «на сувениры»."; }
    case "faucet_comfort": { addItem("waterchunk",1); return "Кран всхлипывает благодарно и роняет идеально твёрдую слезу — Кусок воды."; }
    case "beer_random_unit": {
      const alive = player.units.filter(u=>!u.dead);
      if (!alive.length) return "Поить некого — отряд пуст.";
      const unit = alive[Math.floor(Math.random()*alive.length)];
      const effects = [
        ()=>{ const h=4+Math.floor(Math.random()*5); unit.maxHp+=h; unit.hp=Math.min(unit.maxHp,unit.hp+h); return unit.name+" крепчает от пива — +"+h+" HP."; },
        ()=>{ unit.dmg+=1; return unit.name+" воинственно рычит — +1 к урону."; },
        ()=>{ unit.dmg=Math.max(0,unit.dmg-1); return unit.name+" пьёт залпом и слегка теряет координацию — -1 к урону."; },
        ()=>{ return unit.name+" пробует пиво и морщится. Ничего не меняется."; }
      ];
      return "Фонтан окатывает "+unit.name+" пивом. "+effects[Math.floor(Math.random()*effects.length)]();
    }
    case "mirror_gaze": {
      if (Math.random()<0.5){ addItem("lostring",1); return "В отражении что-то блестит — на полу оказывается потерянное кольцо."; }
      return "Отражение просто корчит рожу в ответ. Неловко, но безопасно.";
    }
    case "tour_buy": {
      const cost=20;
      if (!canAffordIo(cost)) return "Продавец разводит руками: «Без Ио и экскурсии нет».";
      spendIo(cost);
      if (Math.random()<0.5){ const amt=30+Math.floor(Math.random()*20); player.io+=amt; return "Экскурсия неожиданно приводит к тайнику. Находите "+amt+" Ио — окупилось с горкой."; }
      return "Экскурсия — это просто круг почёта вокруг одной и той же трубы. Продавец машет вслед, довольный собой.";
    }
    case "arcade_coin": {
      const cost=10;
      if (!canAffordIo(cost)) return "Автомат мигает «НЕТ ИО» и обиженно гаснет.";
      spendIo(cost);
      if (Math.random()<0.4){ addItem("medal",1); return "Автомат выдаёт медаль «За честную игру» и тихо играет победную мелодию."; }
      return "Автомат рассказывает длинную нечленораздельную историю про «баг в 2007-м» и умолкает.";
    }
    case "arcade_kick": {
      if (Math.random()<0.35){ const amt=15+Math.floor(Math.random()*15); player.io+=amt; return "Автомат от возмущения выплёвывает "+amt+" Ио из старого призового отсека."; }
      return "Автомат просто мигает от боли. Стыдно, но терпимо.";
    }
    case "sock_tribute": {
      if (!hasItem("cloth",2)) return "Носки указывают на пустые карманы: «Ткани маловато, дружище».";
      removeItem("cloth",2);
      return "Носки довольно кивают и пропускают отряд, не забыв всучить неприятный запах вслед.";
    }
    case "sock_talk": {
      if (Math.random()<0.5){ player.io+=10; return "Носки проникаются вашей харизмой и даже скидываются по мелочи — 10 Ио."; }
      const loss=8+Math.floor(Math.random()*8); spendIo(loss);
      return "Переговоры проваливаются. Носки забирают "+loss+" Ио «за неуважение к текстилю».";
    }
    case "fridge_answer_door": { const amt=10+Math.floor(Math.random()*15); player.io+=amt; return "Холодильник скрипит одобрительно: «Дверь. Почти философично». Выдаёт "+amt+" Ио из недр."; }
    case "fridge_answer_cold": { addItem("regen_elixir",1); return "«Холод. Тоже верно», — гудит холодильник и роняет на пол Эликсир регенерации."; }
    case "fridge_silence": { return "Холодильник ждёт ответа целую вечность, не дожидается и молча захлопывается."; }
    case "bear_directions": { const amt=10+Math.floor(Math.random()*10); player.io+=amt; return "Медведь на удивление вежливо благодарит за дорогу и, порывшись в люльке байка, суёт "+amt+" Ио."; }
    case "mimic_support": { addItem("candy",1); return "Мимики радостно шелестят и в благодарность вручают одну из своих лучших масок — то есть конфету."; }
    case "mimic_expose": {
      if (Math.random()<0.5){ const amt=15+Math.floor(Math.random()*15); player.io+=amt; return "Разоблачённые мимики в панике роняют "+amt+" Ио и разбегаются."; }
      return "Мимики оскорблены до глубины своей ненастоящей души и просто молча уходят.";
    }
    case "ghost_map": {
      const cost=15;
      if (!canAffordIo(cost)) return "Призрак вздыхает — эфемерно, но с явным разочарованием — и растворяется.";
      spendIo(cost);
      if (Math.random()<0.45){ addItem("lostring",1); return "Карта, как ни странно, настоящая. По ней находится Потерянное кольцо."; }
      return "Карта ведёт точно в тупик, украшенный надписью «ТЫ ЛОХ» призрачными буквами.";
    }
    default: return "";
  }
}

console.log("data module ok", Object.keys(ITEM_DB).length, "items,", Object.keys(UNIT_DB).length, "units,", RECIPES.length, "recipes");

// ===================== FARLANDS (Туманные земли) — second location =====================
// Harder location, higher rewards. Unlocked by crafting "portal_key" (needs portal_shard, bought from
// Diogen in the sewers). Routes are procedurally generated (2 tier1 + 2 tier2 + 1 tier3 + 1 boss) instead
// of picked from a fixed list like the sewer's SEWER_ROUTES.
const FARLANDS_MOBS = {
  // tier 1
  f1: {name:"Парочка туманных зайцев-провокаторов", hp:14, dmg:3, shld:0, moveChance:80, pack:[
        {name:"Туманный заяц-провокатор",hp:7,dmg:3,shld:0,moveChance:80}, {name:"Туманный заяц-провокатор",hp:7,dmg:3,shld:0,moveChance:80}
      ]},
  f2: {name:"Мшистый пень с характером", hp:15, dmg:2, shld:1, moveChance:5},
  f3: {name:"Летающая шишка-камикадзе", hp:9, dmg:4, shld:0, moveChance:70},
  f4: {name:"Блуждающий огонёк-должник", hp:13, dmg:2, shld:1, moveChance:60},
  f5: {name:"Гриб-подслушиватель", hp:14, dmg:2, shld:1, moveChance:10},
  // tier 2
  f6: {name:"Лесной торговец краденым туманом", hp:24, dmg:4, shld:1, moveChance:35},
  f7: {name:"Одичавший садовый гном-мародёр", hp:23, dmg:5, shld:1, moveChance:45},
  f8: {name:"Дерево со слишком многими мнениями", hp:28, dmg:3, shld:2, moveChance:5},
  f9: {name:"Стая туманных ворон-бухгалтеров", hp:24, dmg:0, shld:0, flag:"crowaudit", scalingDmgPerKill:1, moveChance:75, pack:[
        {name:"Туманная ворона-бухгалтер",hp:8,dmg:2,shld:0,moveChance:75}, {name:"Туманная ворона-бухгалтер",hp:8,dmg:2,shld:0,moveChance:75}, {name:"Туманная ворона-бухгалтер",hp:8,dmg:2,shld:0,moveChance:75}
      ]},
  f10:{name:"Олень о восьми ногах, как минимум", hp:30, dmg:4, shld:1, moveChance:55},
  // tier 3 (harder — this is where the new ranged enemies live)
  f11:{name:"Ходячий, подозрительно осведомлённый валежник", hp:38, dmg:5, shld:1, moveChance:40},
  f12:{name:"Туманная гончая о трёх головах (каждая врёт)", hp:44, dmg:0, shld:0, moveChance:50, pack:[
        {name:"Левая голова гончей",hp:14,dmg:3,shld:0,moveChance:50}, {name:"Центральная голова гончей",hp:16,dmg:4,shld:1,moveChance:50}, {name:"Правая голова гончей",hp:14,dmg:3,shld:0,moveChance:50}
      ]},
  f13:{name:"Вендиго на пенсии, но всё ещё голодный", hp:44, dmg:5, shld:2, moveChance:25},
  f16:{name:"Дух снайпера и телохранитель", hp:34, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Дух снайпера",hp:17,dmg:6,shld:0,moveChance:45,backline:true,abilities:[{type:"ranged_attack"}]},
        {name:"Мшистый пень с характером",hp:14,dmg:2,shld:1,moveChance:5}
      ]},
  f17:{name:"Повелитель камней и страж", hp:47, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Повелитель камней",hp:26,dmg:5,shld:1,moveChance:20,backline:true,abilities:[{type:"ranged_attack"}]},
        {name:"Гриб-подслушиватель",hp:12,dmg:2,shld:1,moveChance:10}
      ]},
  f18:{name:"Кукушка-артиллеристка и часовой", hp:31, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Кукушка-артиллеристка",hp:18,dmg:5,shld:0,moveChance:50,backline:true,abilities:[{type:"ranged_attack"}]},
        {name:"Блуждающий огонёк-должник",hp:9,dmg:2,shld:0,moveChance:60}
      ]},
  // ---- Round 13: mixed-theme combo packs ----
  f19:{name:"Мшистый пень и Летающая шишка сговорились", hp:18, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Мшистый пень с характером",hp:11,dmg:2,shld:1,moveChance:5}, {name:"Летающая шишка-камикадзе",hp:7,dmg:3,shld:0,moveChance:70}
      ]},
  f20:{name:"Гриб, Дерево и Огонёк устроили привал", hp:30, dmg:0, shld:0, moveChance:0, pack:[
        {name:"Гриб-подслушиватель",hp:8,dmg:2,shld:1,moveChance:10}, {name:"Дерево со слишком многими мнениями",hp:15,dmg:2,shld:1,moveChance:5}, {name:"Блуждающий огонёк-должник",hp:7,dmg:2,shld:0,moveChance:60}
      ]},
  // bosses
  fb1:{name:"Лесная Ведьма Тумана", hp:48, dmg:5, shld:2, boss:true, flag:"fogwitch", moveChance:20},
  fb2:{name:"Прадед Рогов, Древний Патриарх Оленей", hp:55, dmg:5, shld:3, boss:true, flag:"antlerlord", scalingDmgPerKill:1, moveChance:10}
};

function generateFarlandsRoute(){
  const tier1 = ["f1","f2","f3","f4","f5","f19"];
  const tier2 = ["f6","f7","f8","f9","f10","f20"];
  const tier3 = ["f11","f12","f13","f16","f17","f18"];
  const bosses = ["fb1","fb2"];
  function pickN(arr,n){
    const pool = [...arr];
    const out = [];
    for (let i=0;i<n && pool.length;i++){
      out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
    }
    return out;
  }
  return [
    ...pickN(tier1,2),
    ...pickN(tier2,2),
    ...pickN(tier3,1),
    bosses[Math.floor(Math.random()*bosses.length)]
  ];
}

function rollFarlandsRewards(flags, sumDmgTaken){
  const reward = {items:{}, io:0, ar:0};
  const miscRoll = Math.floor(Math.random()*101);
  if (miscRoll < 50) reward.items.foglichen = (reward.items.foglichen||0)+1;
  else if (miscRoll < 85) reward.items.foglichen = (reward.items.foglichen||0)+2;
  else reward.items.foglichen = (reward.items.foglichen||0)+3;

  let ioAmount = Math.floor(120 + Math.random()*100); // baseline 120-220 — well above sewer's 50-100
  let arAmount = 2 + Math.floor(Math.random()*4); // baseline 2-5 АР, guaranteed (sewer rarely grants any)
  if (flags.crowaudit){
    if (Math.floor(Math.random()*101) > 59) reward.ar += 2;
  }
  if (flags.fogwitch){
    ioAmount += 40 + Math.floor(Math.random()*40);
    if (Math.random()<0.4) reward.items.witchvial = (reward.items.witchvial||0)+1;
  }
  if (flags.antlerlord){
    ioAmount += 50;
    arAmount += 3 + Math.floor(Math.random()*4);
    if (Math.random()<0.3) reward.items.ancientantler = (reward.items.ancientantler||0)+1;
  }
  if (sumDmgTaken <= 15) ioAmount = Math.floor(ioAmount*1.3);
  else if (sumDmgTaken > 60) ioAmount = Math.floor(ioAmount*0.85);
  reward.io = ioAmount;
  reward.ar = arAmount;
  return reward;
}

// 17 narrative events, fog/forest themed. Per request, most are genuine multi-node dialogues (not just a
// single question), and fights (when offered) favor several weaker foes over one strong one, same as the
// Sewer events.
const FARLANDS_EVENTS = {
  campfire_strangers: { icon:"🔥", title:"Костёр незнакомцев", tree:{
    start: { text:"У костра сидит компания то ли туристов, то ли местных — не разобрать в тумане. Один машет рукой, приглашая присесть.",
      options:[
        {label:"Присесть", next:"sit"},
        {label:"Спросить дорогу", next:"ask_road"},
        {label:"Обойти стороной", next:null, resultText:"Компания провожает вас взглядом и возвращается к костру."}
      ]},
    sit: { text:"Вам наливают что-то мутное во флягу и продолжают травить байки, будто вы тут сто лет сидите.",
      options:[
        {label:"Выпить", effect:"campfire_drink", next:null},
        {label:"Просто послушать байки", effect:"campfire_listen", next:null}
      ]},
    ask_road: { text:"Один из них долго и уверенно чертит палкой на земле маршрут. Маршрут явно ведёт в озеро.",
      options:[
        {label:"Поблагодарить и уйти своим путём", effect:"campfire_thank", next:null},
        {label:"Указать на ошибку", effect:"campfire_correct", next:null}
      ]}
  }},
  owl_examiner: { icon:"🦉", title:"Сова-экзаменатор", tree:{
    start: { text:"Огромная сова в потрёпанной академической мантии восседает на пне и требует «устный экзамен по туманологии».",
      options:[
        {label:"Сдавать экзамен", next:"q1"},
        {label:"Отказаться", next:null, resultText:"Сова разочарованно ставит воображаемый «неуд» в воображаемую ведомость и улетает."}
      ]},
    q1: { text:"Сова: «Первый вопрос. Сколько тумана нужно, чтобы окончательно заблудиться?»",
      options:[
        {label:"«Ровно столько, сколько уже есть»", effect:"owl_answer_zen", next:null},
        {label:"«Смотря, насколько вы уже потерялись»", effect:"owl_answer_clever", next:null},
        {label:"«Понятия не имею»", effect:"owl_answer_honest", next:null}
      ]}
  }},
  toadstool_ring: { icon:"🍄", title:"Кольцо мухоморов", tree:{
    start: { text:"На поляне — идеально ровное кольцо из мухоморов. Наступить в него почему-то очень хочется, и это само по себе подозрительно.",
      options:[
        {label:"Наступить в кольцо", next:"inside"},
        {label:"Обойти по краю", next:null, resultText:"Кольцо будто разочарованно тускнеет за спиной."}
      ]},
    inside: { text:"Голоса из-под земли требуют представиться «по всем правилам лесного этикета», о которых вы, разумеется, не слышали.",
      options:[
        {label:"Представиться вежливо и обстоятельно", effect:"toadstool_polite", next:null},
        {label:"Буркнуть имя и попытаться выйти", effect:"toadstool_rude", next:null}
      ]}
  }},
  lost_photographer: { icon:"📷", title:"Заблудившийся турист-фотограф", tree:{
    start: { text:"Турист с тремя камерами на шее умоляет помочь ему поймать «настоящий кадр первозданного тумана».",
      options:[
        {label:"Позировать самому", effect:"photographer_pose", next:null},
        {label:"Посоветовать место получше", next:"hint"},
        {label:"Уйти", next:null, resultText:"Турист еще долго кричит вслед что-то про освещение."}
      ]},
    hint: { text:"Вы указываете на подозрительно живописную прогалину. Турист в восторге убегает туда с камерами наперевес.",
      options:[
        {label:"Подождать, чем это кончится", effect:"photographer_hint", next:null}
      ]}
  }},
  walking_hut: { icon:"🏚️", title:"Ведьмин домик на курьих ножках", tree:{
    start: { text:"Избушка на курьих ножках сама подходит к вам и вежливо стучится в собственную дверь, будто приглашая войти.",
      options:[
        {label:"Постучать в ответ", next:"knock"},
        {label:"Отойти подальше", next:null, resultText:"Избушка обиженно разворачивается и уходит, переваливаясь на ножках."}
      ]},
    knock: { text:"Дверь приоткрывается. Изнутри выглядывает ведьма: «Ночлег — не бесплатно. Чем расплатишься?»",
      options:[
        {label:"Заплатить Ио", effect:"hut_pay", next:null},
        {label:"Предложить обмен предметом", effect:"hut_trade", next:null},
        {label:"Передумать", next:null, resultText:"Ведьма пожимает плечами и захлопывает дверь. Избушка обиженно топает прочь."}
      ]}
  }},
  echo_answers_first: { icon:"🌫️", title:"Эхо, которое отвечает раньше вопроса", tree:{
    start: { text:"В тумане раздаётся эхо вашего голоса — вот только вы ещё ничего не сказали.",
      options:[
        {label:"Всё равно задать вопрос вслух", next:"asked"},
        {label:"Промолчать из принципа", next:null, resultText:"Эхо ждёт секунд десять, вздыхает эхом же и стихает."}
      ]},
    asked: { text:"Эхо уже прокричало ответ секундой раньше — что-то невнятное о «третьей тропе слева». Верить ли?",
      options:[
        {label:"Довериться эху", effect:"echo_believe", next:null},
        {label:"Усомниться", effect:"echo_doubt", next:null}
      ]}
  }},
  wolf_philosophers: { icon:"🐺", title:"Стая волков-философов", tree:{
    start: { text:"Стая волков перегородила тропу и увлечённо спорит о природе свободы воли, полностью игнорируя вас.",
      options:[
        {label:"Вступить в спор", next:"debate"},
        {label:"⚔ Разогнать спор силой", fight:[{name:"Волк-спорщик *",hp:12,dmg:3,shld:1},{name:"Волк-спорщик *",hp:12,dmg:3,shld:1},{name:"Волк-спорщик *",hp:12,dmg:3,shld:1}]},
        {label:"Тихо обойти по краю поляны", effect:"wolf_sneak", next:null}
      ]},
    debate: { text:"Вожак стаи скептически щурится: «А ты вообще выбрал прийти сюда — или тебя заставили обстоятельства?»",
      options:[
        {label:"«Конечно выбрал, я свободен»", effect:"wolf_debate_free", next:null},
        {label:"«Меня буквально заставил сюжет игры»", effect:"wolf_debate_meta", next:null}
      ]}
  }},
  stump_job_posting: { icon:"📌", title:"Пень с вакансией", tree:{
    start: { text:"К пню гвоздём прибито объявление: «ТРЕБУЕТСЯ ГЕРОЙ. Опыт не важен. Оплата туманом. Собеседование прямо тут».",
      options:[
        {label:"Откликнуться на вакансию", next:"interview"},
        {label:"Пройти мимо", next:null, resultText:"Объявление уныло шелестит на ветру."}
      ]},
    interview: { text:"Из-за пня высовывается нечто административное на вид и спрашивает: «Ваша главная слабость?»",
      options:[
        {label:"«Честность»", effect:"stump_answer_honest", next:null},
        {label:"«Раньше был мухомором»", effect:"stump_answer_weird", next:null}
      ]}
  }},
  dead_hiker_ghost: { icon:"👻", title:"Мёртвый турист, который просто хочет поболтать", tree:{
    start: { text:"На поваленном бревне сидит полупрозрачный турист в анораке. Выглядит на удивление умиротворённо для покойника.",
      options:[
        {label:"Поболтать", next:"chat"},
        {label:"Уйти по-тихому", next:null, resultText:"Призрак машет вслед. Судя по всему, он привык."}
      ]},
    chat: { text:"Призрак охотно рассказывает, как заблудился здесь ещё в прошлом веке, и что «тут на самом деле неплохо, если привыкнуть».",
      options:[
        {label:"Спросить, не оставил ли он вещей", effect:"ghost_chat_reward", next:null},
        {label:"Просто пожелать хорошего отдыха", next:null, resultText:"Призрак растроганно растворяется в тумане, явно польщённый."}
      ]}
  }},
  fog_mail: { icon:"✉️", title:"Туманная почта", tree:{
    start: { text:"Из тумана выходит курьер без лица и вручает конверт с адресом «Любому живому существу в радиусе видимости».",
      options:[
        {label:"Открыть письмо", effect:"mail_open", next:null},
        {label:"Отказаться принимать", next:null, resultText:"Курьер обиженно уходит обратно в туман вместе с письмом."}
      ]}
  }},
  fake_shaman: { icon:"🪘", title:"Деревенский шаман не из этой деревни", tree:{
    start: { text:"Человек в перьях уверяет, что он «шаман из соседней деревни» — хотя ближайшая деревня в трёх днях пути.",
      options:[
        {label:"Согласиться на ритуал", next:"ritual"},
        {label:"Отказаться", next:null, resultText:"«Шаман» пожимает плечами и уходит собирать перья дальше."}
      ]},
    ritual: { text:"Ритуал сопровождается странным барабанным боем и запахом палёных перьев. Что-то явно происходит.",
      options:[
        {label:"Довести ритуал до конца", effect:"shaman_ritual", next:null}
      ]}
  }},
  tourist_trap: { icon:"🪤", title:"Ловушка для туристов от туристов", tree:{
    start: { text:"На тропе — очевидная ловушка с табличкой «ЭТО НЕ ЛОВУШКА ДЛЯ ТУРИСТОВ», что уже само по себе подозрительно.",
      options:[
        {label:"Попытаться обезвредить", next:"disarm"},
        {label:"Аккуратно обойти", next:null, resultText:"Ловушка щёлкает вхолостую где-то позади. Кому-то не повезёт."},
        {label:"⚔ Подождать в засаде того, кто её поставил", fight:[{name:"Турист-ловец *",hp:16,dmg:4,shld:0},{name:"Турист-ловец *",hp:16,dmg:4,shld:0}]}
      ]},
    disarm: { text:"Механизм оказывается неожиданно сложным — явно чей-то дипломный проект.",
      options:[
        {label:"Довести дело до конца", effect:"trap_disarm", next:null}
      ]}
  }},
  moss_choir: { icon:"🎶", title:"Хор мхов", tree:{
    start: { text:"Целая поляна мха синхронно колышется и издаёт на удивление стройное многоголосое гудение.",
      options:[
        {label:"Подпевать", effect:"moss_singalong", next:null},
        {label:"Слушать молча", effect:"moss_listen", next:null}
      ]}
  }},
  mushroom_lawyer: { icon:"🍄‍🟫", title:"Разговорчивый гриб-юрист", tree:{
    start: { text:"Гриб в крошечном галстуке раскладывает перед вами свиток мелким текстом: «Контракт на проход через данный участок леса».",
      options:[
        {label:"Подписать не глядя", effect:"lawyer_sign_blind", next:null},
        {label:"Прочитать мелкий шрифт", next:"finePrint"},
        {label:"Отказаться от сделки", next:null, resultText:"Гриб оскорблённо сворачивает свиток и что-то бормочет про «упущенную выгоду»."}
      ]},
    finePrint: { text:"Мелкий шрифт гласит: «Клиент обязуется по первому требованию рассказать грибу что-нибудь интересное».",
      options:[
        {label:"Согласиться на таких условиях", effect:"lawyer_read_finePrint", next:null},
        {label:"Всё равно отказаться", next:null, resultText:"«Ваше право», — вздыхает гриб и сворачивает контракт."}
      ]}
  }},
  one_man_patrol: { icon:"🎖️", title:"Патруль лесной стражи из одного человека", tree:{
    start: { text:"Человек с самодельным значком «Лесная Стража» требует уплаты «лесного налога за проход по территории».",
      options:[
        {label:"Заплатить", effect:"patrol_pay", next:null},
        {label:"Поспорить о законности налога", next:"argue"},
        {label:"⚔ Прорваться силой", fight:[{name:"Лесной страж *",hp:20,dmg:4,shld:1},{name:"Лесной страж-стажёр *",hp:14,dmg:3,shld:0}]}
      ]},
    argue: { text:"Страж достаёт мятую бумажку с печатью, которую явно нарисовал сам, и тычет в неё пальцем.",
      options:[
        {label:"Указать на поддельность печати", effect:"patrol_argue", next:null}
      ]}
  }},
  fortune_machine: { icon:"🔮", title:"Древний автомат с гаданиями", tree:{
    start: { text:"Посреди леса, непонятно на чём работая, стоит древний автомат-гадалка с треснувшей табличкой «УЗНАЙ СУДЬБУ».",
      options:[
        {label:"Бросить монетку (10 Ио)", effect:"fortune_coin", next:null},
        {label:"Пнуть автомат", effect:"fortune_kick", next:null},
        {label:"Пройти мимо", next:null, resultText:"Автомат разочарованно мигает лампочками вслед."}
      ]}
  }},
  cultist_tourists: { icon:"🥾", title:"Культисты в поисках «настоящего тумана»", tree:{
    start: { text:"Группа туристов в одинаковых балахонах убеждена, что где-то здесь есть «Настоящий Туман», и требует у вас указать дорогу.",
      options:[
        {label:"Указать заведомо неверный путь", effect:"cultist_wrongway", next:null},
        {label:"⚔ Разогнать", fight:[{name:"Турист-культист *",hp:11,dmg:3,shld:0},{name:"Турист-культист *",hp:11,dmg:3,shld:0},{name:"Турист-культист *",hp:11,dmg:3,shld:0}]},
        {label:"Присоединиться к поискам", next:"join"}
      ]},
    join: { text:"Вы бродите с культистами кругами час, прежде чем понимаете, что «настоящий туман» — это, по их теории, просто более густой туман.",
      options:[
        {label:"Разочароваться и уйти", effect:"cultist_join", next:null}
      ]}
  }}
};

function applyFarlandsEventEffect(key){
  switch(key){
    case "campfire_drink": {
      const alive = player.units.filter(u=>!u.dead);
      if (!alive.length) return "Пить не с кем разделить компанию — отряд пуст. Вы выпиваете в одиночестве и жалеете об этом.";
      const unit = alive[Math.floor(Math.random()*alive.length)];
      if (Math.random()<0.5){ const h=5+Math.floor(Math.random()*6); unit.maxHp+=h; unit.hp=Math.min(unit.maxHp,unit.hp+h); return "Напиток странно бодрит "+unit.name+" — +"+h+" HP."; }
      unit.dmg = Math.max(0, unit.dmg-1);
      return unit.name+" наутро (то есть сразу же) чувствует себя неважно — -1 к урону.";
    }
    case "campfire_listen": { const amt=15+Math.floor(Math.random()*16); player.io+=amt; return "Одна из баек оказывается неожиданно полезной наводкой на нычку — вы находите "+amt+" Ио."; }
    case "campfire_thank": { return "Вы вежливо благодарите и идёте в противоположном направлении от озера. Мудрое решение."; }
    case "campfire_correct": {
      if (Math.random()<0.5){ player.io+=20; return "Компания смущённо признаёт ошибку и в качестве извинения скидывается — 20 Ио."; }
      return "Компания обижается на критику и демонстративно перестаёт с вами разговаривать.";
    }
    case "owl_answer_zen": { addItem("foglichen",2); return "Сова одобрительно ухает: «Дзен-ответ. Похвально». Роняет пару лишайников с ветки."; }
    case "owl_answer_clever": { const amt=15+Math.floor(Math.random()*15); player.io+=amt; return "Сова признаёт ответ «формально верным» и выдаёт "+amt+" Ио «за находчивость»."; }
    case "owl_answer_honest": { player.io+=10; return "Сова уважает честность больше, чем неправильные попытки, и выдаёт утешительные 10 Ио."; }
    case "toadstool_polite": {
      if (Math.random()<0.5){ addItem("foglichen",2); return "Голоса довольны церемонией и выпускают вас, осыпав лишайником на память."; }
      return "Голоса долго обсуждают, достаточно ли вежливым было представление, и в итоге просто теряют интерес.";
    }
    case "toadstool_rude": {
      const loss=10+Math.floor(Math.random()*15); spendIo(loss);
      return "Голоса оскорблены до глубины своих (не)душ и забирают "+loss+" Ио «за нарушение протокола»."; 
    }
    case "photographer_pose": { const amt=10+Math.floor(Math.random()*10); player.io+=amt; return "Турист в восторге от кадра и суёт "+amt+" Ио «на память о съёмке»."; }
    case "photographer_hint": {
      if (Math.random()<0.4){ const amt=20+Math.floor(Math.random()*20); player.io+=amt; return "Турист с криком «ШЕДЕВР!» скрывается в тумане, а на земле остаётся оброненный кошелёк — "+amt+" Ио."; }
      return "Через десять минут откуда-то издалека доносится всплеск. Кадр, вероятно, того стоил.";
    }
    case "hut_pay": {
      const cost=25;
      if (!canAffordIo(cost)) return "Ведьма щурится: «Ио маловато, дружок». Дверь захлопывается.";
      spendIo(cost); addItem("witchvial",1);
      return "Ведьма впускает переночевать и на посошок суёт непонятный флакон.";
    }
    case "hut_trade": {
      if (!hasItem("foglichen",2)) return "Ведьма принюхивается: «Лишайника маловато, не сойдёт за оплату».";
      removeItem("foglichen",2); addItem("regen_elixir",1);
      return "Ведьма одобрительно кивает, забирает лишайник и взамен сует Эликсир регенерации.";
    }
    case "echo_believe": {
      if (Math.random()<0.5){ const amt=20+Math.floor(Math.random()*20); player.io+=amt; return "Тропа выводит точно к тайнику. Эхо не соврало — "+amt+" Ио."; }
      const loss=10+Math.floor(Math.random()*10); spendIo(loss);
      return "Тропа выводит точно к обрыву. Пришлось обходить, потеряв по пути "+loss+" Ио из кармана.";
    }
    case "echo_doubt": { return "Вы идёте своим путём. Эхо ещё долго обиженно повторяет забытый ответ вслед."; }
    case "wolf_sneak": {
      if (Math.random()<0.6) return "Спор настолько увлекателен, что волки даже не замечают, как вы прошли мимо.";
      const loss=8+Math.floor(Math.random()*10); spendIo(loss);
      return "Один из волков всё же оборачивается и в качестве «штрафа за отвлечение» рычит так, что вы роняете "+loss+" Ио.";
    }
    case "wolf_debate_free": { const amt=15+Math.floor(Math.random()*15); player.io+=amt; return "Стая уважительно расступается перед таким уверенным экзистенциалистом и даже скидывается — "+amt+" Ио."; }
    case "wolf_debate_meta": { const amt=25+Math.floor(Math.random()*20); player.io+=amt; return "Волки в восторге от мета-ответа и воют одобрительным хором, роняя из шерсти "+amt+" Ио — не спрашивайте, как."; }
    case "stump_answer_honest": { player.io+=15; return "«Административное нечто» удовлетворённо шуршит бумагами и выдаёт 15 Ио «подъёмных»."; }
    case "stump_answer_weird": { addItem("foglichen",3); return "«Административное нечто» проникается профессиональной солидарностью бывшего гриба и отсыпает лишайника."; }
    case "ghost_chat_reward": { const amt=20+Math.floor(Math.random()*25); player.io+=amt; return "Призрак вспоминает, где закопал заначку, и с удовольствием указывает место — "+amt+" Ио."; }
    case "mail_open": {
      const roll=Math.random();
      if (roll<0.4){ const amt=20+Math.floor(Math.random()*25); player.io+=amt; return "В конверте — чек на "+amt+" Ио неизвестно от кого. Похоже на ошибку доставки в вашу пользу."; }
      if (roll<0.7){ addItem("foglichen",2); return "В конверте — образцы лишайника с пометкой «на удачу»."; }
      return "В конверте — рекламная листовка туманной страховой компании. Разочаровывающе обыденно.";
    }
    case "shaman_ritual": {
      const alive = player.units.filter(u=>!u.dead);
      if (!alive.length) return "Ритуал заканчивается ничем — благословлять некого, отряд пуст.";
      const unit = alive[Math.floor(Math.random()*alive.length)];
      if (Math.random()<0.5){ unit.dmg+=2; return "Ритуал неожиданно срабатывает — "+unit.name+" светится боевым духом, +2 к урону."; }
      unit.shld=(unit.shld||0)+1;
      return "Ритуал срабатывает как-то не так, но в целом полезно — "+unit.name+" покрывается странной коркой, +1 к защите.";
    }
    case "trap_disarm": {
      if (Math.random()<0.5){ addItem("wires",3); return "Ловушка обезврежена и разобрана на детали — пригодятся провода."; }
      const loss=10+Math.floor(Math.random()*10); spendIo(loss);
      return "Ловушка внезапно срабатывает вам по ноге. Обидно и на "+loss+" Ио дороже, чем ожидалось (аптечка).";
    }
    case "moss_singalong": {
      const alive = player.units.filter(u=>!u.dead);
      if (!alive.length) return "Подпевать некому — отряд пуст, а соло вы не тянете.";
      const unit = alive[Math.floor(Math.random()*alive.length)];
      const h=6+Math.floor(Math.random()*7); unit.maxHp+=h; unit.hp=Math.min(unit.maxHp,unit.hp+h);
      return "Хор мхов странно резонирует с "+unit.name+" — +"+h+" HP.";
    }
    case "moss_listen": { player.io+=10; return "Мох гудит что-то вроде колыбельной. Под ней на земле обнаруживается 10 Ио — видимо, чьи-то потерянные."; }
    case "lawyer_sign_blind": {
      const roll=Math.random();
      if (roll<0.4){ addItem("madnessjar",1); return "Контракт оказывается на редкость выгодным — гриб в шоке от собственной щедрости и всучивает банку «Безумия» бонусом."; }
      const loss=15+Math.floor(Math.random()*15); spendIo(loss);
      return "Контракт, как выясняется постфактум, обязывал вас доплатить «за консультацию». Гриб-юрист безжалостно взыскивает "+loss+" Ио.";
    }
    case "lawyer_read_finePrint": {
      const amt=15+Math.floor(Math.random()*15); player.io+=amt;
      return "Вы рассказываете грибу байку про Мартына и его лавку. Гриб в восторге и выплачивает гонорар "+amt+" Ио.";
    }
    case "patrol_pay": {
      const cost=20;
      if (!canAffordIo(cost)) return "Страж качает головой: «Без уплаты налога прохода нет. А платить, я смотрю, нечем».";
      spendIo(cost);
      return "Страж выдаёт вам мятую квитанцию с печатью и машет рукой в сторону тумана.";
    }
    case "patrol_argue": {
      if (Math.random()<0.5){ return "Страж смущённо признаёт, что печать он и правда нарисовал сам, и пропускает вас бесплатно."; }
      const loss=8+Math.floor(Math.random()*8); spendIo(loss);
      return "Страж оскорблён сомнением в подлинности печати и штрафует ещё сильнее — минус "+loss+" Ио.";
    }
    case "fortune_coin": {
      const cost=10;
      if (!canAffordIo(cost)) return "Автомат мигает «НЕДОСТАТОЧНО ИО» и гаснет.";
      spendIo(cost);
      if (Math.random()<0.4){ const amt=25+Math.floor(Math.random()*25); player.io+=amt; return "Автомат выплёвывает карточку «ТЕБЯ ЖДЁТ БОГАТСТВО» и, кажется, сам его материализует — "+amt+" Ио."; }
      return "Автомат выдаёт карточку «ТЕБЯ ЖДЁТ ТУМАН». Пророчество исполняется немедленно и буднично.";
    }
    case "fortune_kick": {
      if (Math.random()<0.3){ player.ar+=2; return "От удара из автомата высыпаются пара забытых жетонов — превращаются в 2 АР, не спрашивайте, как."; }
      return "Автомат просто грустно мигает. Он и так не просил, чтобы его тут ставили.";
    }
    case "cultist_wrongway": {
      const amt=15+Math.floor(Math.random()*15); player.io+=amt;
      return "Культисты с благодарностью уходят в противоположную сторону, оставив «пожертвование Туману» — "+amt+" Ио — прямо на тропе.";
    }
    case "cultist_join": { addItem("foglichen",2); return "На прощание культисты вручают вам «сертифицированный образец недостаточно настоящего тумана» — то есть просто лишайник."; }
    default: return "";
  }
}

// Combined lookup across both locations' mob tables — mobKey namespaces don't collide (sewer keys are
// plain numbers, Farlands keys are "f"-prefixed strings), so a single merged table keeps makeEnemyInstance
// and friends location-agnostic.
const ALL_MOBS = Object.assign({}, SEWER_MOBS, FARLANDS_MOBS);

function currentEventTable(){
  return (expedition && expedition.locationId === "farlands") ? FARLANDS_EVENTS : SEWER_EVENTS;
}
function currentEventEffectFn(){
  return (expedition && expedition.locationId === "farlands") ? applyFarlandsEventEffect : applySewerEventEffect;
}
const LOCATION_EVENT_CHANCE = { sewer: 0.25, farlands: 0.28 };

// ===================== QUEST TEMPLATES =====================
// Simple fetch-quest template: bring qtyMin-qtyMax of `itemId`, get a reward — mostly Ио (30-80), sometimes
// a smaller АР payout (6-15) instead. Deliberately bare-bones for now — a placeholder loop to build more
// interesting quest types on later.
const QUEST_TEMPLATES = [
  {itemId:"wires", qtyMin:2, qtyMax:4, text:"Кто-то очень хочет получить пару кусков проводов. Не уточняется, кто и зачем — просто оставь их на видном месте."},
  {itemId:"grime", qtyMin:2, qtyMax:4, text:"Мартын клянётся, что почистит лавку, если натащишь ему как следует черни."},
  {itemId:"biotrash", qtyMin:2, qtyMax:3, text:"В канализации кто-то собирает биомусор для «личных целей». Спрашивать не рекомендуется."},
  {itemId:"cloth", qtyMin:2, qtyMax:4, text:"Нужна ткань. Не очень много, но настоящая. Что именно из неё шьют — государственная тайна."},
  {itemId:"stone", qtyMin:2, qtyMax:4, text:"Кто-то строит из камней нечто. Пока непонятно что, но пара камней бы не помешала."},
  {itemId:"potato", qtyMin:2, qtyMax:4, text:"Картофельный дефицит. Официально — нет. Неофициально — принеси немного картошки."},
  {itemId:"brick", qtyMin:2, qtyMax:4, text:"Требуется пара кирпичей для укрепления чего-то, что укреплять явно поздно."}
];
var questIdCounter = 1;
function makeQuestFromTemplate(t, textOverride){
  const qty = t.qtyMin + Math.floor(Math.random()*(t.qtyMax-t.qtyMin+1));
  const isAr = Math.random() < 0.25;
  const rewardType = isAr ? "ar" : "io";
  const rewardAmount = isAr ? (6+Math.floor(Math.random()*10)) : (30+Math.floor(Math.random()*51)); // ar 6-15, io 30-80
  return {
    id: "q"+(questIdCounter++),
    itemId: t.itemId,
    qty,
    rewardType,
    rewardAmount,
    text: textOverride || t.text
  };
}
function ensureQuests(){
  while (player.quests.length < 3){
    const used = new Set(player.quests.map(q=>q.itemId));
    let pool = QUEST_TEMPLATES.filter(t=>!used.has(t.itemId));
    if (!pool.length) pool = QUEST_TEMPLATES;
    const t = pool[Math.floor(Math.random()*pool.length)];
    player.quests.push(makeQuestFromTemplate(t));
  }
}
function claimQuest(qid){
  const q = player.quests.find(x=>x.id===qid);
  if (!q) return {ok:false, msg:"Квест не найден."};
  if (!hasItem(q.itemId, q.qty)) return {ok:false, msg:"Не хватает предметов для сдачи."};
  removeItem(q.itemId, q.qty);
  if (q.rewardType==="ar") player.ar += q.rewardAmount; else player.io += q.rewardAmount;
  player.quests = player.quests.filter(x=>x.id!==qid);
  ensureQuests();
  return {ok:true, msg:`Квест сдан! +${q.rewardAmount} ${q.rewardType==="ar"?"АР":"Ио"}.`};
}

// ===================== NOTIFICATIONS (random calls) =====================
// Small dialogue-tree "phone call" events. Each tree node: {text, options:[{label, next, effect, resultText}]}.
// next === null ends the call (shows resultText or the effect's own message). effect === "vcvp_fight" is a
// special case that hands off to a real battle instead of ending the dialogue normally.
const NOTIF_TYPES = {
  uncle_steyn: { icon:"📞", title:"Дядя Штейн", weight:3, tree:{
    start: { text:[
        "Штейн: Слушай, племянник, у меня тут дело намечается. Будешь слушать или сразу вешать трубку?",
        "Штейн: О, ты живой. Хорошо. Плохо было бы наоборот. Разговор есть.",
        "Штейн: Не клади трубку. В этот раз правда важно. Ну, как обычно важно.",
        "Штейн: Угадай, кто. Нет, не угадаешь. Ладно, это я."
      ],
      options:[
        {label:"Слушаю", next:"biz"},
        {label:"Как сам вообще?", next:"smalltalk"},
        {label:"Мне некогда", next:null, resultText:["Штейн разочарованно бурчит и кладёт трубку.","Штейн: Ну и ладно. Ну и не очень-то хотелось.","В трубке — гудки и что-то похожее на обиженное сопение."]}
      ]},
    biz: { text:[
        "Штейн: Короче, мне тут задолжали, а платить не могут по уважительным причинам. Могу подкинуть тебе дело — не останусь в долгу. Или просто поболтаем, если дела не заходят.",
        "Штейн: Есть работёнка. Не спрашивай откуда, не спрашивай зачем — просто принеси, что скажу.",
        "Штейн: У меня тут завал с делами, а руки не доходят. Поможешь — сочтёмся."
      ],
      options:[
        {label:"Что надо притащить?", effect:"steyn_quest", next:null},
        {label:"Просто поболтаем", next:"chat2"}
      ]},
    chat2: { text:[
        "Штейн травит байку о том, как когда-то обменял целую Бочку на честное слово. Слушать приятно, толку — ноль.",
        "Штейн жалуется на фургон — опять барахлит коробка передач, «как будто нарочно, ей-богу».",
        "Штейн вспоминает, как однажды продал самому себе кейс, «по ошибке, честное слово»."
      ],
      options:[
        {label:"А чем вообще занимался раньше?", next:"backstory"},
        {label:"Ладно, пока", effect:"steyn_chat_reward", next:null}
      ]},
    backstory: { text:[
        "Штейн: Раньше? А, было дело. Решал вопросы. Теперь просто вожу фургон. Понижение, если честно. Но зато сплю спокойно.",
        "Штейн: Не важно, чем занимался. Важно, что теперь — фургон, кейсы и ты. Скучновато, но живой.",
        "Штейн подозрительно долго молчит, потом говорит «неважно» и меняет тему на погоду."
      ],
      options:[
        {label:"Понятно, до связи", effect:"steyn_smalltalk_reward", next:null}
      ]},
    smalltalk: { text:[
        "Штейн: Да так, помаленьку. Фургон дымит, колени скрипят, дело потихоньку. Обычное дело.",
        "Штейн: Знаешь, неплохо. Вчера продал кому-то кейс, который сам же вчера и купил. Прибыль!",
        "Штейн: Не спрашивал бы. Но раз спросил — плохо. Впрочем, как обычно. Пройдёт."
      ],
      options:[
        {label:"Ладно, держись", effect:"steyn_smalltalk_reward", next:null}
      ]}
  }},
  vcvp: { icon:"🪐", title:"ВЦВП", weight:2, tree:{
    start: { text:[
        "Голос без интонации: Гражданин единицы измерения пространства-времени. Вы приписаны к призывному манёвру «Сектор-Ноль». Явка обязательна и одновременно необязательна — таковы правила ВЦВП.",
        "Голос без интонации: Внимание. Ваш номер выбран случайным неслучайным образом для участия в манёврах Всевселенной.",
        "Голос без интонации: Данный звонок официально не является звонком. Пожалуйста, продолжайте слушать."
      ],
      options:[
        {label:"Есть ли от чего откосить?", next:"dodge"},
        {label:"Что вообще происходит?", next:"explain"},
        {label:"Голос, ты вообще в порядке?", next:"human"},
        {label:"Положить трубку", next:null, resultText:["Голос продолжает говорить в пустоту ещё секунд десять после того, как вы положили трубку.","Гудки. Где-то там голос всё ещё зачитывает форму 12-би вникуда."]}
      ]},
    dodge: { text:[
        "Голос: Согласно приложению 12-би от призыва освобождаются лица, предоставившие доказательство собственного несуществования. У вас есть такое доказательство?",
        "Голос: Отсрочка возможна при предоставлении справки о несуществовании в трёх экземплярах. Один из них — заверенный."
      ],
      options:[
        {label:"Нет", next:"explain"},
        {label:"Наверное?", effect:"vcvp_dodge_accept", next:null}
      ]},
    explain: { text:[
        "Голос: Всевселенная нуждается в добровольцах для манёвров категории «Бусики». Отказ не предусмотрен формой, но предусмотрен реальностью.",
        "Голос: Манёвры «Бусики» требуют вашего немедленного присутствия. Присутствие может быть как физическим, так и формальным."
      ],
      options:[
        {label:"Приму бой", effect:"vcvp_fight", next:null},
        {label:"Пожалуй, нет", next:null, resultText:["Голос: Ваше малодушие занесено в вечный реестр. Реестр никто и никогда не читает.","Голос: Отказ зафиксирован. Он ни на что не повлияет, но зафиксирован."]}
      ]},
    human: { text:[
        "Голос на секунду сбивается с казённого тона: «Честно? Не очень. Смена длится с начала времён». Потом снова: ГРАЖДАНИН, ВЫ ПРИПИСАНЫ.",
        "Голос затихает, потом тихо: «Иногда я тоже хочу просто положить трубку». Затем возвращается казённый тон."
      ],
      options:[
        {label:"Держись там", effect:"vcvp_human_reward", next:null},
        {label:"Ладно, вернёмся к делу", next:"explain"}
      ]}
  }},
  euclid: { icon:"📐", title:"Евклид", weight:2, tree:{
    start: { text:[
        "Евклид: Слушай. Что если два по-настоящему параллельных мнения на самом деле пересекаются — просто там, где ты не смотришь?",
        "Евклид: У меня новая теорема. Точнее, старая, но я её переоткрыл. Хочешь послушать?",
        "Евклид: Скажи честно — ты когда-нибудь видел прямую линию? НАСТОЯЩУЮ?"
      ],
      options:[
        {label:"Это бред", next:"argue"},
        {label:"Возможно, ты прав", next:"agree"},
        {label:"Задать встречный парадокс", next:"counter"},
        {label:"У меня нет времени на геометрию", next:null, resultText:["Евклид вздыхает пятимерным вздохом и кладёт трубку.","Евклид: Как скажешь. Время тоже, между прочим, не прямая линия."]}
      ]},
    argue: { text:[
        "Евклид: Ты говоришь «бред» — но у самого слова «бред» есть форма. У формы есть углы. У углов есть я. Совпадение? Считаю, что нет.",
        "Евклид: «Бред» — интересный выбор слова. У бреда, technically, тоже есть периметр."
      ],
      options:[
        {label:"Ладно, сдаюсь, гений", effect:"euclid_argue_reward", next:null},
        {label:"Мне пора", next:null, resultText:["Евклид торжествующе гудит вслед коротким гудкам.","Евклид: Бегство — тоже вектор. Уважаю."]}
      ]},
    agree: { text:[
        "Евклид: НАКОНЕЦ. Хоть кто-то понимает. Держи, в награду за прозрение.",
        "Евклид: Я знал! Знал, что найдётся хоть один разумный собеседник. Лови подарок."
      ],
      options:[
        {label:"Спасибо, наверное", effect:"euclid_agree_reward", next:null}
      ]},
    counter: { text:[
        "Евклид напряжённо молчит секунд пять, обдумывая ваш парадокс. Потом медленно: «...это нечестно», и явно уважает вас за это чуть больше.",
        "Евклид: Хм. ХМ. Ладно, это хороший парадокс. Даже я не сразу нашёлся."
      ],
      options:[
        {label:"Забрать заслуженное уважение", effect:"euclid_counter_reward", next:null}
      ]}
  }},
  stasik: { icon:"🍄", title:"Стасик", weight:3, tree:{
    start: { text:[
        "Стасик: Слышь. Есть дело. Деревянное говно, грибы — всё свежее, всё честно добыто. Берёшь?",
        "Стасик: О, живой абонент. У меня новая партия товара. Специально для тебя, ну то есть для всех, но звучит лучше, если для тебя.",
        "Стасик: Есть что показать. Происхождение не обсуждается, как обычно."
      ],
      options:[
        {label:"Покажи товар", next:"shop"},
        {label:"Не сегодня", next:null, resultText:["Стасик: Ну и зря. Ну и зря.","Стасик: Как знаешь, товар долго не залежится. Он вообще нигде долго не залёживается."]}
      ]},
    shop: { text:[
        "Стасик разворачивает список товара прямо в динамике. Как — не спрашивайте.",
        "Стасик перечисляет ассортимент с гордостью человека, только что нашедшего это всё на помойке. Что, в общем, недалеко от истины."
      ],
      options:[
        {label:"3× Деревянное говно (12 Ио)", effect:"stasik_buy_wood", next:null},
        {label:"Гриб Стасика — скормить юниту (18 Ио)", effect:"stasik_buy_mushroom", next:null},
        {label:"Заячья лапка (15 Ио)", effect:"stasik_buy_rabbitfoot", next:null},
        {label:"Хватит, до связи", next:null, resultText:["Стасик: Как знаешь. Товар не портится. Наверное.","Стасик: Ну заходи ещё, если что. Товар накопится."]}
      ]}
  }},
  manul_lottery: { icon:"😼", title:"Король манулов (?)", weight:2, tree:{
    start: { text:[
        "Бархатный кошачий голос: Поздравляем! Ваш номер выиграл в Королевской Манульей Лотерее! Для получения приза продиктуйте код с обратной стороны Ио.",
        "Бархатный кошачий голос: Мур-р-р. У меня для вас прекрасные новости. Просто прекрасные. Готовы?",
        "Бархатный кошачий голос: Вы избранный. Не спрашивайте, кем избранный. Просто примите это."
      ],
      options:[
        {label:"Продиктовать код", effect:"manul_scammed", next:null},
        {label:"А что вообще за приз?", next:"prize_detail"},
        {label:"Это развод", next:null, resultText:["Голос: Ну хвала манулам, хоть кто-то читает мелкий шрифт. — Голос злобно шипит и вешает трубку.","Голос теряет всю бархатность разом и рычит что-то явно не кошачье, прежде чем дать отбой."]},
        {label:"Положить трубку", next:null, resultText:["Гудки. К счастью.","Тишина. Где-то там манул разочарованно облизывается."]}
      ]},
    prize_detail: { text:[
        "Голос: Главный приз — пожизненный запас манульего одобрения! Плюс что-то ещё, но это уже не так важно.",
        "Голос: Приз описан мелким шрифтом настолько мелким, что его физически невозможно прочитать. Поверьте на слово — там что-то хорошее."
      ],
      options:[
        {label:"Всё равно продиктовать код", effect:"manul_scammed", next:null},
        {label:"Пожалуй, откажусь", next:null, resultText:["Голос разочарованно вздыхает по-кошачьи и обрывает связь."]}
      ]}
  }},
  survey_bot: { icon:"🤖", title:"Опрос качества", weight:2, tree:{
    start: { text:[
        "Механический голос: Здравствуйте! Пожалуйста, оцените качество последней открытой посылки по шкале от 1 до «бесконечность».",
        "Механический голос: Приветствую. Ваше мнение очень важно для нас. Настолько важно, что мы даже немного нервничаем.",
        "Механический голос: Краткий опрос займёт у вас всю оставшуюся жизнь. Шутка. Минуту."
      ],
      options:[
        {label:"10 из 10!", effect:"survey_flattered", next:null},
        {label:"Это был кошмар", effect:"survey_complain", next:null},
        {label:"Так себе, средне", effect:"survey_neutral", next:null},
        {label:"У меня нет на это времени", next:null, resultText:["Робот пищит: «Ваше молчание также зафиксировано как оценка.» Гудки.","Робот: «Отказ от оценки расценивается как высшая похвала». Логика сомнительная, но кто их спрашивал."]}
      ]}
  }},
  mystery_call: { icon:"❔", title:"Неизвестный номер", weight:1, tree:{
    start: { text:[
        "На линии тишина. Потом — единственный вдох. Потом снова тишина.",
        "На линии странный шорох, будто кто-то держит телефон вверх ногами.",
        "Тишина настолько плотная, что кажется — её можно потрогать."
      ],
      options:[
        {label:"Алло?", next:"silence2"},
        {label:"Положить трубку", next:null, resultText:["Гудки. Наверное, к лучшему.","Тишина обрывается щелчком. Больше ничего не происходит."]}
      ]},
    silence2: { text:[
        "Тишина продолжается ровно семь секунд, будто кто-то считает.",
        "Что-то на другом конце явно передумывает говорить — уже дважды."
      ],
      options:[
        {label:"Ждать дальше", effect:"mystery_wait", next:null},
        {label:"Бросить трубку первым", next:null, resultText:["Вы успеваете первым. Небольшая, но победа.","Гудки. Как будто вы выиграли что-то, чего даже не было."]}
      ]}
  }},

  // ---- 10 new call types (per request: leaning fog/wizard-themed) ----
  fog_wizard_hotline: { icon:"🧙", title:"Горячая линия туманных магов", weight:2, tree:{
    start: { text:[
        "Записанный голос: Вы позвонили в Горячую линию Туманных Магов. Ваш вызов очень важен для нас. Ожидайте, вас соединят с первым освободившимся чародеем.",
        "Записанный голос: Спасибо, что позвонили в Гильдию Туманных Магов. Если у вас проклятие — нажмите решётку. Если у вас ПРОСТО туман — нажмите звёздочку. Звонок с дискового телефона? Просто подождите.",
        "Записанный голос: Ваш вызов — двадцать седьмой в очереди. Ожидайте примерно вечность. Хорошего дня."
      ],
      options:[
        {label:"Ждать на линии", next:"operator"},
        {label:"Положить трубку", next:null, resultText:["Гудки прерываются на середине бесконечно доброжелательной мелодии ожидания."]}
      ]},
    operator: { text:[
        "Наконец берёт трубку уставший маг: «Ну что там у вас. Только быстро, у меня зелье кипит».",
        "Маг отвечает голосом человека, который сегодня уже отменил три проклятия и один апокалипсис: «Слушаю»."
      ],
      options:[
        {label:"Спросить совет по туману", effect:"fog_wizard_advice", next:null},
        {label:"Спросить личный совет", effect:"fog_wizard_life_advice", next:null},
        {label:"Извиниться и повесить трубку", next:null, resultText:["Маг облегчённо выдыхает и, кажется, тут же забывает о вашем существовании."]}
      ]}
  }},
  witch_book_club: { icon:"📖", title:"Книжный клуб ведьм", weight:2, tree:{
    start: { text:[
        "Хриплый голос: Слушай, у нас книжный клуб. Обсуждаем один подозрительный фолиант. Хочешь присоединиться?",
        "Хриплый голос: Собрание клуба через десять минут. Тема — «Книга, которая читает тебя в ответ». Придёшь?"
      ],
      options:[
        {label:"Присоединиться", next:"discuss"},
        {label:"Отказаться", next:null, resultText:["«Ну и зря, будет интересно», — голос явно расстроен, но не удивлён."]}
      ]},
    discuss: { text:[
        "Обсуждение быстро уходит куда-то не туда: одна из ведьм уверена, что книга — это на самом деле рецепт супа.",
        "Все сходятся на том, что книга опасна, увлекательна и определённо кому-то принадлежит. Вопрос — кому."
      ],
      options:[
        {label:"Поделиться мнением", effect:"witch_book_opinion", next:null},
        {label:"Тихо слушать", effect:"witch_book_listen", next:null}
      ]}
  }},
  apprentice_wizard: { icon:"🎓", title:"Незадачливый подмастерье", weight:2, tree:{
    start: { text:[
        "Дрожащий голос: Извините, извините, это очень срочно — я, кажется, превратил учителя в нечто среднее между шкафом и туманом!",
        "Дрожащий голос: У меня спалл... заклинание пошло не так. Совсем не так. Вы разбираетесь в магии? Пожалуйста, скажите да."
      ],
      options:[
        {label:"Помочь советом", next:"advice"},
        {label:"Пожелать удачи и повесить трубку", next:null, resultText:["Из трубки доносится приглушённый вопль и звук чего-то, падающего на пол."]}
      ]},
    advice: { text:[
        "Подмастерье судорожно записывает каждое ваше слово, будто это спасёт его карьеру. Возможно, спасёт.",
        "На фоне что-то булькает всё громче. Подмастерье старается не обращать внимания."
      ],
      options:[
        {label:"«Попробуй развернуть заклинание задом наперёд»", effect:"apprentice_help_a", next:null},
        {label:"«Просто дай ему остыть, само пройдёт»", effect:"apprentice_help_b", next:null}
      ]}
  }},
  fog_weather_forecast: { icon:"🌫️", title:"Туманный прогноз погоды", weight:1, tree:{
    start: { text:[
        "Бодрый голос: Доброго дня! С вами Туманная Метеослужба. Сегодня ожидается туман. Завтра — тоже туман, но гуще.",
        "Бодрый голос: Прогноз на неделю: туман, лёгкий туман, туман с прояснениями тумана, и снова туман."
      ],
      options:[
        {label:"Спросить прогноз на завтра", effect:"fog_forecast_tomorrow", next:null},
        {label:"Пожаловаться на туман", effect:"fog_forecast_complain", next:null},
        {label:"Повесить трубку", next:null, resultText:["Бодрый голос продолжает вещание в пустоту про облачность, которой формально не существует."]}
      ]}
  }},
  retired_wizard: { icon:"🧓", title:"Волшебник на пенсии, торгует вразнос", weight:2, tree:{
    start: { text:[
        "Скрипучий голос: Молодой человек — или кто вы там — не желаете ли заклинание по спеццене? Пенсия, знаете ли, не резиновая.",
        "Скрипучий голос: У меня тут остались излишки с прошлой жизни. Продаю, пока сила ещё не выветрилась полностью."
      ],
      options:[
        {label:"Купить заклинание (20 Ио)", effect:"retired_wizard_buy", next:null},
        {label:"Спросить про пенсию", next:"chat"},
        {label:"Отказаться", next:null, resultText:["«Ну и молодёжь пошла», — бормочет голос и вешает трубку."]}
      ]},
    chat: { text:[
        "Волшебник долго и с удовольствием жалуется на пенсионный фонд Гильдии — «нищета, а не пенсия, три жалких артефакта в месяц».",
        "Волшебник вспоминает золотые годы, когда «драконов было много, а бюрократии — мало»."
      ],
      options:[
        {label:"Посочувствовать", effect:"retired_wizard_chat_reward", next:null}
      ]}
  }},
  magic_hotline_scam: { icon:"✨", title:"«Волшебная пилюля богатства»", weight:2, tree:{
    start: { text:[
        "Слащавый голос: Только сегодня! Волшебная Пилюля Богатства! Одна пилюля — и Ио потекут рекой!",
        "Слащавый голос: Секрет, который маги не хотят, чтобы вы узнали! Всего одна пилюля меняет ВСЁ!"
      ],
      options:[
        {label:"Купить пилюлю", effect:"magic_pill_scammed", next:null},
        {label:"Уточнить состав", next:"ingredients"},
        {label:"Это развод", next:null, resultText:["Слащавость мгновенно испаряется из голоса, и он бросает трубку без единого слова."]}
      ]},
    ingredients: { text:[
        "Голос запинается: «Состав? Ну... туман, немного веры в себя и... в основном туман».",
        "Голос нервно откашливается: «Э-э... секретный ингредиент. Ладно, это тоже туман»."
      ],
      options:[
        {label:"Всё равно купить", effect:"magic_pill_scammed", next:null},
        {label:"Пожалуй, нет", next:null, resultText:["«Ваша потеря», — обиженно бросает голос и вешает трубку."]}
      ]}
  }},
  fog_therapist: { icon:"🛋️", title:"Туманный психотерапевт", weight:2, tree:{
    start: { text:[
        "Спокойный голос: Здравствуйте. Как вы себя чувствуете... в тумане? В переносном и буквальном смысле.",
        "Спокойный голос: Расскажите мне о вашем тумане. Не обязательно о погоде."
      ],
      options:[
        {label:"Всё отлично", effect:"therapist_positive", next:null},
        {label:"Если честно — не очень", effect:"therapist_negative", next:null},
        {label:"Это вообще платно?", next:"fee"}
      ]},
    fee: { text:[
        "Голос после паузы: «Формально да. Но давайте считать это бесплатной консультацией — вы явно нуждаетесь».",
        "Голос уклончиво: «Оплата гибкая. Договоримся, если после разговора вам вообще станет легче»."
      ],
      options:[
        {label:"Ладно, отвечу честно", effect:"therapist_negative", next:null}
      ]}
  }},
  wrong_number_wizard: { icon:"🔮", title:"Волшебник, попавший не туда", weight:1, tree:{
    start: { text:[
        "Растерянный голос: Альбербакт, это ты? Мне нужен твой рецепт зелья от икоты, срочно!",
        "Растерянный голос: Наконец-то! Слушай, у меня тут форс-мажор с порталом, ты можешь..."
      ],
      options:[
        {label:"Ты не туда попал", next:null, resultText:["«А... ой. Извините», — волшебник смущённо кладёт трубку и, судя по звукам, тут же набирает следующий неверный номер."]},
        {label:"Притвориться тем магом", effect:"wrong_number_pretend", next:null}
      ]}
  }},
  karaoke_witches: { icon:"🎤", title:"Ведьмы зовут на караоке", weight:2, tree:{
    start: { text:[
        "Возбуждённый хор голосов: У нас сегодня караоке-шабаш! Присоединяйся, будет незабываемо! В плохом смысле, скорее всего, но всё же!",
        "Возбуждённый хор голосов: Ты вообще умеешь петь? Неважно! Приходи, все всё равно поют одинаково плохо."
      ],
      options:[
        {label:"Согласиться спеть", effect:"karaoke_sing", next:null},
        {label:"Просто послушать", effect:"karaoke_listen", next:null},
        {label:"Отказаться", next:null, resultText:["«Ну и ладно, тебе же хуже», — хор явно расстроен, но быстро переключается на следующую жертву."]}
      ]}
  }},
  debt_collector_from_future: { icon:"⏳", title:"Коллектор долгов из будущего", weight:1, tree:{
    start: { text:[
        "Металлический голос: Здравствуйте. Звоню из вашего будущего. У вас там долг. Ещё не образовался, но образуется. Хочу решить вопрос заранее.",
        "Металлический голос: Согласно временной линии, через полгода вы задолжаете значительную сумму. Предлагаю урегулировать вопрос сейчас, по льготному курсу."
      ],
      options:[
        {label:"Заплатить заранее", effect:"future_debt_pay", next:null},
        {label:"Это же невозможно", next:"argue"},
        {label:"Бросить трубку", next:null, resultText:["Гудки. Где-то в будущем, вероятно, что-то только что изменилось."]}
      ]},
    argue: { text:[
        "Голос: «Невозможно» — это временное состояние. В прошлый раз вы тоже так говорили. Точнее, скажете.",
        "Голос: Причинность — вопрос перспективы. С моей точки зрения этот долг уже полностью реален."
      ],
      options:[
        {label:"Всё равно отказаться", effect:"future_debt_argue", next:null}
      ]}
  }}
};
var notifIdCounter = 1;
function rollForNotification(){
  const unseenCount = player.notifications.filter(n=>!n.seen).length;
  if (unseenCount >= 3) return;
  if (Math.random() > 0.16) return;
  const keys = Object.keys(NOTIF_TYPES);
  const weights = keys.map(k=>NOTIF_TYPES[k].weight||1);
  const total = weights.reduce((a,b)=>a+b,0);
  let roll = Math.random()*total;
  let chosen = keys[keys.length-1];
  for (let i=0;i<keys.length;i++){
    if (roll < weights[i]){ chosen = keys[i]; break; }
    roll -= weights[i];
  }
  player.notifications.push({id:"n"+(notifIdCounter++), typeKey:chosen, seen:false});
}
function addSteynQuest(){
  const t = QUEST_TEMPLATES[Math.floor(Math.random()*QUEST_TEMPLATES.length)];
  const q = makeQuestFromTemplate(t, "Штейн: "+t.text);
  player.quests.push(q);
  return "Штейн скидывает дело на квестовую доску: "+itemName(q.itemId)+" ×"+q.qty+".";
}
function applyNotifEffect(key){
  switch(key){
    case "steyn_quest": return addSteynQuest();
    case "steyn_chat_reward": { const amt=5+Math.floor(Math.random()*6); player.io+=amt; return "Штейн скидывает "+amt+" Ио «на такси, чтобы в следующий раз быстрее взял трубку»."; }
    case "vcvp_dodge_accept": { const amt=8+Math.floor(Math.random()*10); player.io+=amt; return "Голос затыкается на десять секунд, затем: «Принято. Проверим позже.» Проверка, конечно, никогда не наступит. Заодно откуда-то капнуло "+amt+" Ио."; }
    case "euclid_argue_reward": { addItem("madnessjar",1); return "Евклид торжествующе гудит и присылает банку «Безумия» — видимо, в награду за сдачу позиций."; }
    case "euclid_agree_reward": { addItem("madnessjar",1); return "Евклид ликует и присылает банку «Безумия» — судя по всему, лучшее, что у него есть."; }
    case "stasik_buy_wood": {
      const cost=12;
      if (!canAffordIo(cost)) return "Стасик щёлкает языком: «Не хватает Ио, дружище.»";
      spendIo(cost); addItem("woodturd",3);
      return "Стасик суёт в щель три деревянных говна. «Свежак, только что... ну, в общем свежак.»";
    }
    case "stasik_buy_mushroom": {
      const cost=18;
      if (!canAffordIo(cost)) return "Стасик щёлкает языком: «Не хватает Ио, дружище.»";
      const alive = player.units.filter(u=>!u.dead);
      if (!alive.length) return "Стасик хмыкает: «Кормить-то некого, у тебя отряд пустой.»";
      spendIo(cost);
      const unit = alive[Math.floor(Math.random()*alive.length)];
      const effects = [
        ()=>{ const h=3+Math.floor(Math.random()*4); unit.maxHp+=h; unit.hp=Math.min(unit.maxHp,unit.hp+h); return unit.name+" переваривает гриб и раздувается — +"+h+" HP."; },
        ()=>{ unit.dmg+=1; return unit.name+" после гриба выглядит агрессивнее — +1 к урону."; },
        ()=>{ unit.shld=(unit.shld||0)+1; return unit.name+" покрывается странной коркой — +1 к защите."; },
        ()=>{ unit.dmg=Math.max(0,unit.dmg-1); return unit.name+" впадает в грибной транс и на время слабеет — -1 к урону. Стасик пожимает плечами: «Бывает.»"; },
        ()=>{ return unit.name+" съедает гриб — и абсолютно ничего не происходит. Неловкая пауза."; }
      ];
      const line = effects[Math.floor(Math.random()*effects.length)]();
      return "Гриб Стасика скормлен юниту «"+unit.name+"». "+line;
    }
    case "manul_scammed": { const loss=10+Math.floor(Math.random()*11); spendIo(loss); return "Голос мурлычет «Благословение манулов с вами» и обрывает связь. Пропало "+loss+" Ио (кто бы сомневался)."; }
    case "survey_flattered": { const amt=8+Math.floor(Math.random()*8); player.io+=amt; return "Робот пищит от радости и присылает "+amt+" Ио «в знак благодарности за честность»."; }
    case "survey_complain": { addItem("dirt",1); return "Робот шипит: «Ваша жалоба зафиксирована и немедленно проигнорирована.» Из динамика со стуком вываливается кусок земли — видимо, в отместку."; }
    case "survey_neutral": { player.io+=4; return "Робот подозрительно долго обрабатывает нейтральную оценку, потом неуверенно переводит 4 Ио — «за честность, наверное»."; }
    case "mystery_wait": {
      if (Math.random()<0.35){ addItem("lostring",1); return "Связь обрывается. У твоих ног лежит потерянное кольцо, которого раньше не было."; }
      return "Тишина обрывается гудками. Что бы это ни было — оно передумало.";
    }
    case "steyn_smalltalk_reward": {
      const amt=4+Math.floor(Math.random()*8); player.io+=amt;
      const lines = [
        "Штейн на прощание суёт "+amt+" Ио «на всякий случай».",
        "Штейн бормочет что-то вроде «держи, племянник» и скидывает "+amt+" Ио.",
        "Штейн вешает трубку, но перед этим успевает перевести "+amt+" Ио — «чисто по привычке»."
      ];
      return lines[Math.floor(Math.random()*lines.length)];
    }
    case "vcvp_human_reward": {
      const amt=15+Math.floor(Math.random()*15); player.io+=amt;
      return "Голос тепло (насколько это возможно казённым тоном) благодарит за участие и незаконно переводит "+amt+" Ио «в порядке исключения из формы 12-би».";
    }
    case "euclid_counter_reward": {
      const roll = Math.random();
      if (roll<0.5){ addItem("madnessjar",1); return "Евклид, уважительно помолчав, присылает банку «Безумия» — «за достойный контраргумент»."; }
      const amt=15+Math.floor(Math.random()*15); player.io+=amt;
      return "Евклид сконфуженно бормочет что-то про «геометрическую честность» и переводит "+amt+" Ио.";
    }
    case "stasik_buy_rabbitfoot": {
      const cost=15;
      if (!canAffordIo(cost)) return "Стасик щёлкает языком: «Не хватает Ио, дружище.»";
      spendIo(cost); addItem("rabbit_foot",1);
      return "Стасик суёт в щель заячью лапку. «Технически от таракана, но работает, говорят».";
    }
    case "fog_wizard_advice": {
      const lines = [
        "Маг советует «просто идти прямо, туман сам разберётся» — и, что удивительно, звучит убедительно.",
        "Маг говорит держаться подальше от особо густых участков тумана — «там бухгалтерия, и это хуже, чем звучит».",
        "Маг зевает и советует «не смотреть тумана в глаза» — уточнить, есть ли у тумана глаза, вы не успеваете."
      ];
      const amt=10+Math.floor(Math.random()*10); player.io+=amt;
      return lines[Math.floor(Math.random()*lines.length)]+" Заодно скидывает "+amt+" Ио «за терпение на линии».";
    }
    case "fog_wizard_life_advice": {
      addItem("foglichen",2);
      return "Маг неожиданно даёт неплохой жизненный совет, а потом стесняется и вешает трубку, но всё же присылает пару образцов лишайника «на удачу».";
    }
    case "witch_book_opinion": {
      const roll=Math.random();
      if (roll<0.5){ addItem("witchvial",1); return "Ваша теория настолько убедительна, что клуб присуждает вам почётный флакон в награду."; }
      const amt=15+Math.floor(Math.random()*15); player.io+=amt;
      return "Клуб бурно спорит по поводу вашей теории ещё минут десять, а потом всё же скидывается на "+amt+" Ио «за смелость мнения».";
    }
    case "witch_book_listen": { player.io+=12; return "Просто тихо слушать оказалось хорошей стратегией — на прощание вам суют 12 Ио «за терпение»."; }
    case "apprentice_help_a": {
      if (Math.random()<0.5){ addItem("madnessjar",1); return "Совет неожиданно срабатывает! Подмастерье в благодарность высылает банку «Безумия» — «трофей после инцидента»."; }
      return "Совет не срабатывает, но, к счастью, ничего не взрывается. Подмастерье искренне благодарит за попытку.";
    }
    case "apprentice_help_b": {
      const amt=10+Math.floor(Math.random()*15); player.io+=amt;
      return "Совет неожиданно оказывается верным — всё действительно «само проходит». Подмастерье в восторге переводит "+amt+" Ио.";
    }
    case "fog_forecast_tomorrow": { player.io+=10; return "«Завтра — сильный туман с прояснениями до среднего тумана», — сообщает метеоролог и почему-то присылает 10 Ио «за проявленный интерес к прогнозам»."; }
    case "fog_forecast_complain": { addItem("foglichen",3); return "«Жалоба зафиксирована. Туман, впрочем, никого не слушает», — голос присылает немного лишайника «в качестве компенсации»."; }
    case "retired_wizard_buy": {
      const cost=20;
      if (!canAffordIo(cost)) return "Волшебник обиженно щёлкает языком: «Не хватает на заклинание, молодёжь пошла»";
      spendIo(cost);
      if (Math.random()<0.45){ addItem("regen_elixir",1); return "Заклинание, на удивление, настоящее — превращается в Эликсир регенерации."; }
      return "Заклинание оказывается пшиком. «Ну извини, я на пенсии, могу и ошибаться», — бормочет волшебник.";
    }
    case "retired_wizard_chat_reward": { const amt=8+Math.floor(Math.random()*12); player.io+=amt; return "Растроганный вниманием волшебник переводит "+amt+" Ио «на молодое поколение, всё-таки не совсем безнадёжны»."; }
    case "magic_pill_scammed": { const loss=15+Math.floor(Math.random()*15); spendIo(loss); return "Пилюля, разумеется, оказывается обычным камешком. Пропало "+loss+" Ио — «богатство» было, как водится, метафорой."; }
    case "therapist_positive": { player.io+=10; return "«Замечательно! Продолжайте в том же духе», — голос доволен и на радостях переводит 10 Ио «в рамках акции»."; }
    case "therapist_negative": {
      const alive = player.units.filter(u=>!u.dead);
      if (alive.length && Math.random()<0.5){
        const u = alive[Math.floor(Math.random()*alive.length)];
        const h=5+Math.floor(Math.random()*8); u.maxHp+=h; u.hp=Math.min(u.maxHp,u.hp+h);
        return "«Это нормально — не быть в порядке», — голос неожиданно тепло поддерживает, и "+u.name+" чувствует себя лучше — +"+h+" HP.";
      }
      return "«Это нормально — не быть в порядке», — голос тепло поддерживает. Полегчало, но чисто морально, без ощутимого эффекта.";
    }
    case "wrong_number_pretend": {
      const roll=Math.random();
      if (roll<0.4){ addItem("madnessjar",1); return "Притворство неожиданно удаётся — вам передают срочную посылку «для Альбербакта», то есть банку «Безумия»."; }
      const loss=8+Math.floor(Math.random()*8); spendIo(loss);
      return "Притворство быстро раскрывается. Волшебник смущённо, но настойчиво просит компенсировать «моральный ущерб» — минус "+loss+" Ио.";
    }
    case "karaoke_sing": {
      const roll=Math.random();
      if (roll<0.4){ const amt=20+Math.floor(Math.random()*20); player.io+=amt; return "Ваше выступление настолько ужасно, что становится хитом сезона. Ведьмы в восторге скидываются на "+amt+" Ио."; }
      const loss=8+Math.floor(Math.random()*10); spendIo(loss);
      return "Ваше выступление настолько ужасно в плохом смысле, что ведьмы штрафуют на "+loss+" Ио «за оскорбление слуха».";
    }
    case "karaoke_listen": { player.io+=8; return "Просто слушать оказалось безопаснее и почти так же весело. На прощание — 8 Ио «за моральную поддержку»."; }
    case "future_debt_pay": {
      const cost=25;
      if (!canAffordIo(cost)) return "«У вас и на будущий долг средств не хватает», — металлически констатирует голос и отключается.";
      spendIo(cost);
      return "Голос благодарит за предусмотрительность. Изменит ли это будущее — не уточняется.";
    }
    case "future_debt_argue": {
      const amt=12+Math.floor(Math.random()*13); player.io+=amt;
      return "Голос неожиданно соглашается: «Справедливо. Вот компенсация за беспокойство» — и переводит "+amt+" Ио из какого-то другого времени.";
    }
    default: return "";
  }
}

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

function makeEnemyInstances(mobKey){
  const base = ALL_MOBS[mobKey];
  if (base.pack){
    return base.pack.map((p, i)=>({
      uid: nextUid(),
      unitId: "mob_"+mobKey+"_"+i,
      name: p.name,
      hp: p.hp,
      maxHp: p.hp,
      dmg: p.dmg,
      shld: p.shld||0,
      boss: false,
      flag: null, // reward flags are read off the route's mobKey table entry, not per pack-member instances
      scalingDmgPerKill: p.scalingDmgPerKill || 0,
      abilities: p.abilities || [],
      moveChance: p.moveChance != null ? p.moveChance : 35,
      backline: !!p.backline,
      turnCounter: 0,
      dead: false
    }));
  }
  return [{
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
    abilities: base.abilities || [],
    moveChance: base.moveChance != null ? base.moveChance : 35,
    backline: !!base.backline,
    turnCounter: 0,
    dead: false
  }];
}

var player = {
  io: 300,
  ar: 20,
  inventory: {}, // itemId -> count
  units: [],     // array of unit instances (roster, not deployed)
  discovered: {}, // itemId -> true, for the Каталог tab
  lastArDay: null,
  quests: [],       // active fetch-quests, see QUEST_TEMPLATES
  notifications: [], // pending "phone call" notifications, see NOTIF_TYPES
  settings: { mimicsEnabled: true }
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

// Testing toggle is now OFF by default — Ио spending is real. Flip to true only for local debugging.
var TESTING_INFINITE_IO = false;
function canAffordIo(amount){ return TESTING_INFINITE_IO || player.io >= amount; }
function spendIo(amount){ if (!TESTING_INFINITE_IO) player.io = Math.max(0, player.io - amount); }
function canAffordAr(amount){ return player.ar >= amount; }
function spendAr(amount){ player.ar = Math.max(0, player.ar - amount); }

// ===================== CASE OPENING =====================
function rarityFromRoll(roll, weights){
  let acc = 0;
  for (const w of weights){
    acc += w.w;
    if (roll < acc) return w.rarity;
  }
  return weights[weights.length-1].rarity;
}
function finishCaseOpen(pool, rarity){
  const p = pool[rarity];
  const drop = p[Math.floor(Math.random()*p.length)];
  addItem(drop.id, 1);
  return {mimic:false, item:drop, rarity};
}

function openBigCase(){
  let roll = Math.floor(Math.random()*101); // 0..100
  if (hasLuckCharm()) roll = Math.min(100, roll + 3);
  const rarity = rarityFromRoll(roll, BIG_CASE_WEIGHTS);
  if (rarity === "mimic"){
    if (!player.settings || player.settings.mimicsEnabled !== false) return {mimic:true};
    return finishCaseOpen(BIG_CASE_POOL, "inonecopy"); // mimics disabled — this slot just becomes another in-one-copy roll
  }
  return finishCaseOpen(BIG_CASE_POOL, rarity);
}

function openMechaCase(){
  const roll = Math.floor(Math.random()*101);
  const rarity = rarityFromRoll(roll, MECHA_CASE_WEIGHTS);
  return finishCaseOpen(MECHA_CASE_POOL, rarity);
}

// Кейс Говна: cheapest case, reuses Big Case's own trash..rare pools with heavier low-end odds
// (70% trash+suchself combined, nothing above rare).
function openCrapCase(){
  const roll = Math.floor(Math.random()*101);
  const rarity = rarityFromRoll(roll, CRAP_CASE_WEIGHTS);
  return finishCaseOpen(BIG_CASE_POOL, rarity);
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
// Round 8 rewrite: dynamic field width (grows with army size, capped) + individual per-unit targeting
// (replacing the old pooled-cleave-through-the-row damage model) + shields resolved once per target per turn.
const MIN_FIELD_WIDTH = 4;
const MAX_FIELD_WIDTH = 10;
const MAX_BATTLE_ROUNDS = 40; // safety cap — the new shield-pooling model can otherwise stalemate forever against high-shield foes

function computeFieldWidth(playerCount, enemyCount){
  return Math.min(MAX_FIELD_WIDTH, Math.max(MIN_FIELD_WIDTH, playerCount, enemyCount));
}

// Enemies used to always be centered so front-row column-range targeting (±1) could reach them — but that
// made every fight feel the same. Now placement is randomized per battle (per explicit request), which can
// occasionally strand a far-column player unit against a lone off-center foe — an accepted tradeoff for variety.
function centeredStart(width, count){
  return Math.max(0, Math.floor((width-count)/2));
}
function randomDistinctSlots(width, count){
  const indices = [];
  for (let i=0;i<width;i++) indices.push(i);
  for (let i=indices.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    const tmp=indices[i]; indices[i]=indices[j]; indices[j]=tmp;
  }
  return indices.slice(0, Math.min(count, width));
}
// Places a list of enemy instances onto random front/back columns — `inst.backline` sends a ranged unit
// to the back row instead of the front.
function placeEnemies(enemy, width, instances){
  const frontList = instances.filter(inst=>!inst.backline);
  const backList = instances.filter(inst=>inst.backline);
  const frontSlots = randomDistinctSlots(width, frontList.length);
  frontList.forEach((inst,i)=>{ enemy.front[frontSlots[i]] = inst; });
  const backSlots = randomDistinctSlots(width, backList.length);
  backList.forEach((inst,i)=>{ enemy.back[backSlots[i]] = inst; });
}

function emptySide(width){
  width = width || MIN_FIELD_WIDTH;
  return { front: new Array(width).fill(null), back: new Array(width).fill(null) };
}

var battle = null; // current battle state

function startBattle(mobKey, opts){
  fleeSetupPendingLossCount = null; // safety reset — a fresh setup screen shouldn't inherit a stale confirm
  const enemyInstances = (mobKey !== null && mobKey !== undefined) ? makeEnemyInstances(mobKey) : [];
  const width = computeFieldWidth(player.units.length, enemyInstances.length);
  const enemy = emptySide(width);
  placeEnemies(enemy, width, enemyInstances);
  battle = {
    player: emptySide(width),
    enemy: enemy,
    round: 1,
    log: [],
    phase: "setup", // setup -> playerTurn -> resolving -> enemyTurn -> over
    playerDestroyedCount: 0,
    sumDmgTaken: 0,
    result: null,
    mobKey: mobKey,
    width: width
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
  unit.targetLine = null; unit.targetIdx = null; // fresh deploy — re-default target on first attack
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

function resetMoveFlags(){
  for (const u of battle.player.front) if (u) u.movedThisTurn = false;
  for (const u of battle.player.back) if (u) u.movedThisTurn = false;
}

// Battle-start scaling abilities (e.g. Боб: +HP per other same-type ally deployed) — resolved once, right
// before the fight begins, off the final deployed roster.
function applyBattleStartAbilities(side){
  const all = [...side.front, ...side.back].filter(Boolean);
  for (const u of all){
    for (const ab of u.abilities){
      if (ab.type === "scale_hp_per_ally"){
        const allyCount = all.filter(o=>o!==u && o.unitId===ab.unitId && !o.dead).length;
        const bonus = allyCount * (ab.amount||1);
        if (bonus>0){
          u.maxHp += bonus;
          u.hp += bonus;
          u._scaleHpBonus = (u._scaleHpBonus||0) + bonus;
        }
      }
    }
  }
}

function beginRounds(){
  if (battle.phase !== "setup") return false;
  if (aliveList(battle.player.front).length===0 && aliveList(battle.player.back).length===0) return false;
  battle.phase = "playerTurn";
  resetMoveFlags();
  applyBattleStartAbilities(battle.player);
  logMsg("Битва начинается!");
  return true;
}

// movement during playerTurn: swap two slots (can be adjacent-left/right within a line, or front<->back same column).
// Each unit gets one move per turn — but a unit that already used its move can still be swapped INTO by a
// different unit that hasn't moved yet (it's just being displaced, not spending its own move budget).
// Free repositioning during setup — drag one already-placed unit onto another slot to swap them.
// No per-turn move limit here (that's a mid-battle rule); anything goes before the fight starts.
function swapUnitsInSetup(fromLine, fromIdx, toLine, toIdx){
  if (battle.phase !== "setup") return false;
  const fromArr = fromLine==="front"?battle.player.front:battle.player.back;
  const toArr = toLine==="front"?battle.player.front:battle.player.back;
  if (!fromArr[fromIdx]) return false;
  if (fromLine===toLine && fromIdx===toIdx) return false;
  const tmp = toArr[toIdx];
  toArr[toIdx] = fromArr[fromIdx];
  fromArr[fromIdx] = tmp;
  return true;
}

function moveUnit(fromLine, fromIdx, toLine, toIdx){
  if (battle.phase !== "playerTurn") return false;
  const fromArr = fromLine==="front"?battle.player.front:battle.player.back;
  const toArr = toLine==="front"?battle.player.front:battle.player.back;
  const movingUnit = fromArr[fromIdx];
  if (!movingUnit) return false;
  if (movingUnit.movedThisTurn) return false;
  const tmp = toArr[toIdx];
  toArr[toIdx] = movingUnit;
  fromArr[fromIdx] = tmp;
  movingUnit.movedThisTurn = true;
  // a column change invalidates any locked-in target — it'll re-default (random valid) next resolution
  if (toArr[toIdx]) { toArr[toIdx].targetLine = null; toArr[toIdx].targetIdx = null; }
  if (fromArr[fromIdx]) { fromArr[fromIdx].targetLine = null; fromArr[fromIdx].targetIdx = null; }
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

// ---- targeting ----
// Front-row attackers target the enemy FRONT-row unit directly opposite, or one column left/right (up to
// 3 candidates) — EXCEPT for the directly-opposite column specifically: if that front slot is empty/dead
// (unblocked), the attack reaches the back-row unit in that same column instead (Round 14). Back-row
// (ranged-only) attackers target their own column, front or back, on the enemy side (2 candidates, default
// front, exact column match — no ±1 tolerance).
function validTargetsFor(ownLine, ownIdx, enemySide, width){
  const candidates = [];
  if (ownLine === "front"){
    for (const d of [-1,0,1]){
      const idx = ownIdx + d;
      if (idx>=0 && idx<width){
        const u = enemySide.front[idx];
        if (u && !u.dead){
          candidates.push({line:"front", idx});
        } else if (d===0){
          // Directly opposite column only (not diagonal): if the front slot there is empty/dead, the shot
          // isn't blocked and can reach whatever's sitting in the back of that same column instead.
          const b = enemySide.back[idx];
          if (b && !b.dead) candidates.push({line:"back", idx});
        }
      }
    }
  } else {
    const f = enemySide.front[ownIdx];
    const b = enemySide.back[ownIdx];
    if (f && !f.dead) candidates.push({line:"front", idx:ownIdx});
    if (b && !b.dead) candidates.push({line:"back", idx:ownIdx});
  }
  return candidates;
}

function ensureUnitTarget(unit, ownLine, ownIdx, enemySide, width){
  const candidates = validTargetsFor(ownLine, ownIdx, enemySide, width);
  if (!candidates.length){ unit.targetLine = null; unit.targetIdx = null; return null; }
  const current = candidates.find(c=>c.line===unit.targetLine && c.idx===unit.targetIdx);
  if (current) return current;
  const pick = candidates[Math.floor(Math.random()*candidates.length)];
  unit.targetLine = pick.line; unit.targetIdx = pick.idx;
  return pick;
}

// player-only: cycle the clicked unit's target to the next candidate (wraps around)
function cycleUnitTarget(ownLine, ownIdx){
  if (!battle) return;
  const unit = ownLine==="front" ? battle.player.front[ownIdx] : battle.player.back[ownIdx];
  if (!unit || unit.dead) return;
  const candidates = validTargetsFor(ownLine, ownIdx, battle.enemy, battle.width);
  if (!candidates.length) return;
  const curIdx = candidates.findIndex(c=>c.line===unit.targetLine && c.idx===unit.targetIdx);
  const next = candidates[(curIdx+1) % candidates.length];
  unit.targetLine = next.line; unit.targetIdx = next.idx;
}

// resolve total pooled damage aimed at ONE target this turn: shield subtracts once from the total, not per attacker
function applyDamageToTarget(defenderSide, line, idx, totalDmg, pierce){
  const arr = line==="front" ? defenderSide.front : defenderSide.back;
  const u = arr[idx];
  if (!u || u.dead || totalDmg<=0) return 0;
  if (u.dodgeChance && Math.random()*100 < u.dodgeChance){
    logMsg(u.name+" уклоняется от всей атаки!");
    return 0;
  }
  const shld = Math.max(0, effectiveShld(u, line, arr, idx) - (pierce||0));
  const dealt = Math.max(0, totalDmg - shld);
  const actualDealt = Math.min(dealt, u.hp);
  u.hp -= actualDealt;
  if (u.hp <= 0){
    const reviveAbility = u.abilities.find(a=>a.type==="revive_once" && !u.usedRevive);
    if (reviveAbility){
      u.usedRevive = true;
      u.hp = 1;
      logMsg(u.name+" не сдаётся и поднимается с 1 HP!");
    } else {
      u.dead = true;
      onUnitDeath(u, defenderSide);
    }
  } else {
    triggerOnHit(u, defenderSide);
  }
  return actualDealt;
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

function runPeriodicHeals(side){
  const all = [...aliveList(side.front), ...aliveList(side.back)].map(x=>x.u);
  for (const u of all){
    for (const ab of u.abilities){
      if (ab.type==="periodic_heal"){
        u.turnCounter++;
        if (u.turnCounter % ab.every === 0){
          const target = all.filter(x=>x!==u && x.hp<x.maxHp).sort((a,b)=>a.hp-b.hp)[0];
          if (target){
            target.hp = Math.min(target.maxHp, target.hp+ab.amount);
            logMsg(u.name+" исцеляет "+target.name+" на "+ab.amount+" HP.");
          }
        }
      }
    }
  }
}

// One side (attackerSide) attacks the other (defenderSide). Every eligible unit picks/keeps an individual
// target; damage is pooled per-target (so several attackers hitting the same enemy stack into one shield check).
function resolveAttacks(attackerSide, defenderSide){
  const width = battle.width;
  const attackers = [];
  ["front","back"].forEach(lineName=>{
    const arr = lineName==="front" ? attackerSide.front : attackerSide.back;
    arr.forEach((u,idx)=>{
      if (!u || u.dead) return;
      if (lineName==="back"){
        const ranged = u.abilities.some(a=>a.type==="ranged_attack");
        if (!ranged) return; // only ranged units can act from the back line
      }
      attackers.push({u, line:lineName, idx});
    });
  });

  const pools = new Map(); // "line:idx" -> {line, idx, dmg, contributors:[]}
  for (const {u, line, idx} of attackers){
    ensureUnitTarget(u, line, idx, defenderSide, width);
    if (u.targetLine==null) continue; // nothing in range to hit this turn
    const targetArr = u.targetLine==="front" ? defenderSide.front : defenderSide.back;
    const targetUnit = targetArr[u.targetIdx];
    const mirrors = u.abilities.some(a=>a.type==="mirror_enemy_dmg");
    let baseDmg = (mirrors && targetUnit) ? targetUnit.dmg : u.dmg;
    if (mirrors && targetUnit) logMsg(u.name+" считывает повадки "+targetUnit.name+" и бьёт на "+baseDmg+".");
    if (u.scalingDmgPerKill) baseDmg += u.scalingDmgPerKill*battle.playerDestroyedCount;
    const dmg = rollCritDmg(u, baseDmg);
    const key = u.targetLine+":"+u.targetIdx;
    if (!pools.has(key)) pools.set(key, {line:u.targetLine, idx:u.targetIdx, dmg:0, contributors:[]});
    const pool = pools.get(key);
    pool.dmg += dmg;
    pool.contributors.push(u);
  }

  let totalDealt = 0;
  for (const pool of pools.values()){
    const pierce = maxArmorPierce(pool.contributors);
    totalDealt += applyDamageToTarget(defenderSide, pool.line, pool.idx, pool.dmg, pierce);
  }
  return totalDealt;
}

function resolvePlayerAttack(){
  if (battle.phase !== "playerTurn") return;
  battle.phase = "resolving";
  runPeriodicHeals(battle.player);
  const dealt = resolveAttacks(battle.player, battle.enemy);
  logMsg("Ваша армия наносит "+dealt+" урона.");

  if (aliveList(battle.enemy.front).length===0 && aliveList(battle.enemy.back).length===0){
    endBattle(true);
    return;
  }
  battle.phase = "enemyTurn";
  resolveEnemyAttack();
}

// Enemy AI repositioning: at the start of the enemy's turn, front-row enemies may shuffle one column
// left/right — either to flee a strong attacker currently locked onto them, or to reach a weaker player
// unit that's only reachable from the neighboring column. Kept deliberately simple (no lookahead beyond
// one step, no enemy-on-enemy swapping).
function repositionSideAtTurnStart(lineArr, lineName, width, defenderSide){
  for (let idx=0; idx<lineArr.length; idx++){
    const u = lineArr[idx];
    if (!u || u.dead) continue;
    const chance = u.moveChance != null ? u.moveChance : 35;
    if (Math.random()*100 > chance) continue;
    const candidates = [idx-1, idx+1].filter(i=> i>=0 && i<width && !lineArr[i]);
    if (!candidates.length) continue;

    function weakestTargetHp(atIdx){
      const targets = validTargetsFor(lineName, atIdx, defenderSide, width);
      let min = null;
      for (const t of targets){
        const tArr = t.line==="front" ? defenderSide.front : defenderSide.back;
        const tu = tArr[t.idx];
        if (tu && !tu.dead && (min===null || tu.hp < min)) min = tu.hp;
      }
      return min;
    }
    const curWeakest = weakestTargetHp(idx);

    // Prefer a column that reaches a strictly weaker target than the current one; otherwise the roll
    // already decided this unit moves this turn (that's what moveChance means), so fall back to a random
    // open candidate rather than staying put — a 100%-moveChance unit should reliably move every turn it can.
    let bestIdx = null, bestWeakest = curWeakest;
    for (const cIdx of candidates){
      const w = weakestTargetHp(cIdx);
      if (w!==null && (bestWeakest===null || w < bestWeakest)){ bestWeakest = w; bestIdx = cIdx; }
    }
    if (bestIdx===null){
      bestIdx = candidates[Math.floor(Math.random()*candidates.length)];
    }
    lineArr[bestIdx] = u;
    lineArr[idx] = null;
    u.targetLine = null; u.targetIdx = null; // column changed — re-default on next resolution
  }
}

function repositionEnemiesAtTurnStart(){
  const width = battle.width;
  repositionSideAtTurnStart(battle.enemy.front, "front", width, battle.player);
  // Back-row (ranged) enemies deliberately do NOT reposition: back-row targeting is a strict single-column
  // match (no ±1 tolerance like the front row), so a shuffling backline unit could dodge the player's own
  // ranged retaliation almost every other turn — a "sniper vs sniper" fight would become uncounterable.
  // Holding position also fits the flavor (a sniper/turret archetype that doesn't relocate mid-fight).
}

function resolveEnemyAttack(){
  repositionEnemiesAtTurnStart();
  const dealt = resolveAttacks(battle.enemy, battle.player);
  if (dealt>0){
    battle.sumDmgTaken += dealt;
    logMsg("Противник наносит "+dealt+" урона.");
  }
  if (aliveList(battle.player.front).length===0 && aliveList(battle.player.back).length===0){
    endBattle(false);
    return;
  }
  battle.round++;
  if (battle.round > MAX_BATTLE_ROUNDS){
    logMsg("Бой затягивается сверх всякой разумности — обе стороны выдыхаются и расходятся по домам.");
    endBattle(false, true);
    return;
  }
  battle.phase = "playerTurn";
  resetMoveFlags();
}

function endBattle(victory, stalemate){
  battle.phase = "over";
  battle.result = victory ? "victory" : (stalemate ? "stalemate" : "defeat");
  // return surviving deployed units to roster
  for (const row of [battle.player.front, battle.player.back]){
    for (const u of row){
      if (u && !u.dead){
        if (u._scaleHpBonus){ u.maxHp -= u._scaleHpBonus; u.hp = Math.min(u.hp, u.maxHp); u._scaleHpBonus = 0; }
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
        u.targetLine = null; u.targetIdx = null;
        player.units.push(u);
      }
    }
  }
  if (victory){
    logMsg("Противник повержен!");
  } else if (stalemate){
    logMsg("Ничья. Отряд отступает — тут явно ловить нечего.");
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
function applyWeaponEffect(unit, eff){
  if (!eff) return;
  if (eff.dmgDelta) unit.dmg = Math.max(0, unit.dmg + eff.dmgDelta);
  if (eff.shldDelta) unit.shld = Math.max(0, (unit.shld||0) + eff.shldDelta);
  if (eff.grantAbility){
    unit.abilities = unit.abilities || [];
    unit.abilities.push({...eff.grantAbility, _fromWeapon:true});
  }
}
function revertWeaponEffect(unit, eff){
  if (!eff) return;
  if (eff.dmgDelta) unit.dmg = Math.max(0, unit.dmg - eff.dmgDelta);
  if (eff.shldDelta) unit.shld = Math.max(0, (unit.shld||0) - eff.shldDelta);
  if (eff.grantAbility){
    const idx = unit.abilities.findIndex(a=>a._fromWeapon && a.type===eff.grantAbility.type);
    if (idx>=0) unit.abilities.splice(idx,1);
  }
}
// Returns the currently-equipped weapon (if any) to the inventory and reverts its stat effect. Internal —
// callers decide whether this is a swap (immediately followed by equipping a new weapon) or a plain unequip.
function unequipWeaponInternal(unit){
  const itemId = unit.equippedWeapon;
  if (!itemId) return;
  const item = ITEM_DB[itemId];
  if (item && item.weaponEffect) revertWeaponEffect(unit, item.weaponEffect);
  addItem(itemId, 1);
  unit.equippedWeapon = null;
}
// Explicit unequip from the Inventory tab's "Снять оружие" button.
function unequipWeapon(uid){
  const unit = player.units.find(u=>u.uid===uid);
  if (!unit || !unit.equippedWeapon) return {ok:false};
  const name = itemName(unit.equippedWeapon);
  unequipWeaponInternal(unit);
  return {ok:true, name};
}

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

  // 1.5) equippable weapon (regular units only — robots build their weapon into their 3-part assembly instead)
  const weaponItem = ITEM_DB[itemId];
  if (weaponItem && weaponItem.isWeapon){
    if (unit.isRobot) return {ok:false, msg:"Роботам нужно собирать оружие через Мастерскую роботов, а не экипировать напрямую."};
    if (!found.inRoster) return {ok:false, msg:"Оружие можно экипировать только вне боя."};
    if (unit.equippedWeapon){
      unequipWeaponInternal(unit); // swap: return the old weapon to inventory first
    }
    removeItem(itemId, 1);
    unit.equippedWeapon = itemId;
    applyWeaponEffect(unit, weaponItem.weaponEffect);
    return {ok:true, msg:unit.name+" экипирует "+itemName(itemId)+"."};
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

const AR_TO_IO_RATE = 5;
function exchangeArForIo(arAmount){
  arAmount = Math.max(0, Math.floor(arAmount||0));
  if (arAmount <= 0 || player.ar < arAmount) return {ok:false, msg:"Не хватает АР на обмен."};
  player.ar -= arAmount;
  const ioGained = arAmount * AR_TO_IO_RATE;
  player.io += ioGained;
  const line = MARTYN_LINES[Math.floor(Math.random()*MARTYN_LINES.length)];
  return {ok:true, ioGained, arSpent:arAmount, line};
}

// Uncle Steyn — money bailout for when the player is broke AND has an empty roster (can't even fight
// their way back). He scolds you and takes your 5 highest-value items (by sell price) in exchange for cash.
function callUncleSteynMoneyBailout(){
  const entries = Object.entries(player.inventory)
    .filter(([id,qty])=> ITEM_DB[id] && qty>0)
    .map(([id,qty])=>({id, qty, price: SELL_PRICE[ITEM_DB[id].rarity]||0}))
    .sort((a,b)=> b.price - a.price);
  const taken = [];
  let remaining = 5;
  for (const e of entries){
    if (remaining<=0) break;
    const take = Math.min(e.qty, remaining);
    removeItem(e.id, take);
    taken.push({id:e.id, qty:take});
    remaining -= take;
  }
  const bailout = 80 + Math.floor(Math.random()*41); // 80-120
  player.io += bailout;
  return { taken, bailout };
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
  const width = computeFieldWidth(player.units.length, 1);
  const enemy = emptySide(width);
  placeEnemies(enemy, width, [{ uid: nextUid(), unitId:"casino_enemy", name: CASINO_ENEMY.name,
    hp: CASINO_ENEMY.hp, maxHp: CASINO_ENEMY.hp, dmg: CASINO_ENEMY.dmg, shld: CASINO_ENEMY.shld,
    abilities: [], moveChance: 15, backline:false, turnCounter:0, dead:false }]);
  battle = {
    player: emptySide(width), enemy, round:1, log:[], phase:"setup",
    playerDestroyedCount:0, sumDmgTaken:0, result:null, mobKey:null, isCasinoFight:true, width:width
  };
  return battle;
}

// ВЦВП notification call, "Приму бой" branch: 2-3 weak "Бусики".
function startConscriptionFight(){
  const count = 2 + Math.floor(Math.random()*2); // 2-3
  const width = computeFieldWidth(player.units.length, count);
  const enemy = emptySide(width);
  const instances = [];
  for (let i=0;i<count;i++){
    instances.push({ uid: nextUid(), unitId:"busik", name:"Бусик *", hp:9, maxHp:9, dmg:2, shld:0,
      abilities: [], moveChance: 60, backline:false, turnCounter:0, dead:false });
  }
  placeEnemies(enemy, width, instances);
  battle = {
    player: emptySide(width), enemy, round:1, log:[], phase:"setup",
    playerDestroyedCount:0, sumDmgTaken:0, result:null, mobKey:null, isConscriptionFight:true, width:width
  };
  returnTabAfterBattle = currentTab;
  currentTab = "expedition";
  return battle;
}

console.log("engine module ok");

// ===================== EXPEDITION CONTROLLER =====================

var expedition = null; // {locationId, route:[mobKeys], nodeIndex, flags:{}, sumDmg, active}

function startExpedition(locationId){
  locationId = locationId || "sewer";
  const route = locationId==="farlands" ? generateFarlandsRoute() : SEWER_ROUTES[Math.floor(Math.random()*SEWER_ROUTES.length)];
  expedition = { locationId, route, nodeIndex: 0, flags:{}, sumDmg:0, active:true, tradeShown:false };
  return expedition;
}

function currentExpeditionMob(){
  if (!expedition) return null;
  return expedition.route[expedition.nodeIndex];
}

function advanceExpeditionAfterVictory(){
  const mobKey = currentExpeditionMob();
  const base = ALL_MOBS[mobKey];
  if (base.flag) expedition.flags[base.flag] = true;
  expedition.sumDmg += battle ? battle.sumDmgTaken : 0; // battle is null when a narrative event resolved peacefully
  if (battle){
    // Ио now drops per mob along the way too, not just as one lump sum at the end of the route —
    // makes a smaller army viable to farm with, rather than needing to clear the whole route to see anything.
    const mobIoDrop = Math.floor(base.hp/3) + Math.floor(Math.random()*8);
    player.io += mobIoDrop;
  }
  expedition.nodeIndex++;
  if (expedition.nodeIndex >= expedition.route.length){
    // route complete -> final reward
    const rewardFn = expedition.locationId==="farlands" ? rollFarlandsRewards : rollSewerRewards;
    const reward = rewardFn(expedition.flags, expedition.sumDmg);
    for (const [id,qty] of Object.entries(reward.items)) addItem(id, qty);
    player.io += reward.io;
    player.ar += (reward.ar||0);
    expedition.active = false;
    expedition.finalReward = reward;
    rollForNotification();
    return {done:true, reward};
  }
  return {done:false, nextMob: currentExpeditionMob(), barrelTrade: base.flag==="barrel"};
}

function abandonExpedition(){
  expedition = null;
}

// Enters the node for `mobKey`: a location-dependent chance (for eligible non-boss, non-flagged mobs) plays
// a random narrative encounter instead of the straight fight; otherwise it's a normal battle as before.
function proceedToNode(mobKey){
  const base = ALL_MOBS[mobKey];
  const eligible = base && !base.boss && !base.flag;
  const chance = LOCATION_EVENT_CHANCE[expedition ? expedition.locationId : "sewer"] || 0.25;
  if (eligible && Math.random() < chance){
    startSewerEvent();
  } else {
    startBattle(mobKey);
  }
  renderAll();
}

// Shared tail used both after a normal mob victory and after a narrative event resolves peacefully or
// via a won ad-hoc fight — the underlying route node still advances/rewards exactly the same either way.
function continueExpeditionAfterNode(){
  const res = advanceExpeditionAfterVictory();
  battle = null;
  if (res.done){
    renderAll();
    return;
  }
  if (res.barrelTrade && !expedition.tradeShown){
    expedition.tradeShown = true;
    expedition.pendingNextMob = res.nextMob;
    renderDiogenTrade();
    return;
  }
  proceedToNode(res.nextMob);
}

// ===================== SEWER EVENT CONTROLLER =====================
// (name kept for continuity — this now drives narrative events for whichever location is active,
// see currentEventTable()/currentEventEffectFn())
var sewerEventTypeKey = null;
var sewerEventNode = null;
var sewerEventEndMsg = null;

function startSewerEvent(){
  const keys = Object.keys(currentEventTable());
  sewerEventTypeKey = keys[Math.floor(Math.random()*keys.length)];
  sewerEventNode = "start";
  sewerEventEndMsg = null;
}

function chooseSewerEventOption(idx){
  const type = currentEventTable()[sewerEventTypeKey];
  const node = type.tree[sewerEventNode];
  const opt = node.options[idx];
  if (!opt) return;
  if (opt.fight){
    startEventFight(opt.fight);
    return;
  }
  const effectMsg = opt.effect ? currentEventEffectFn()(opt.effect) : "";
  if (opt.next){
    sewerEventNode = opt.next;
  } else {
    sewerEventEndMsg = opt.resultText || effectMsg || "Вы идёте дальше.";
  }
}

function closeSewerEvent(){
  sewerEventTypeKey = null; sewerEventNode = null; sewerEventEndMsg = null;
  continueExpeditionAfterNode();
}

// Ad-hoc battle triggered from a narrative event's "fight" option — several defs, centered on the field
// like other multi-enemy encounters, so front-row column targeting has room to matter.
function startEventFight(enemyDefs){
  const width = computeFieldWidth(player.units.length, enemyDefs.length);
  const enemy = emptySide(width);
  const instances = enemyDefs.map(d=>({ uid: nextUid(), unitId:"sewer_event_enemy", name:d.name,
    hp:d.hp, maxHp:d.hp, dmg:d.dmg, shld:d.shld||0, abilities: d.abilities||[],
    moveChance: d.moveChance != null ? d.moveChance : 35, backline: !!d.backline, turnCounter:0, dead:false }));
  placeEnemies(enemy, width, instances);
  battle = {
    player: emptySide(width), enemy, round:1, log:[], phase:"setup",
    playerDestroyedCount:0, sumDmgTaken:0, result:null, mobKey:null, isSewerEvent:true, width:width
  };
  return battle;
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
var fleeSetupPendingLossCount = null; // set while confirming a pre-battle retreat (setup screen)
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
var notifOpenId = null; // id of the notification currently open in the dialogue view
var notifDialogueNode = null; // current tree node key within the open notification
var notifDisplayText = null; // the (possibly randomly-picked-once) text currently shown for that node
var notifEndMsg = null; // set when a dialogue branch ends, shown with a "close" button
var notifFlashMsg = null; // one-shot message shown atop the notifications list (e.g. battle result)
var questMessage = null; // one-shot message shown atop the quests list

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
  if (u.equippedWeapon){
    html += "<div class='tt-parts'>Оружие: "+itemName(u.equippedWeapon)+"</div>";
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
  if (it.isWeapon && it.weaponEffect){
    const wparts = [];
    if (it.weaponEffect.dmgDelta) wparts.push("DMG +"+it.weaponEffect.dmgDelta);
    if (it.weaponEffect.shldDelta) wparts.push("SHLD +"+it.weaponEffect.shldDelta);
    html += "<div class='tt-stats'>Оружие (1 слот на юнита): "+wparts.join(" &nbsp; ")+"</div>";
    if (it.weaponEffect.grantAbility) html += "<div class='tt-abilities'>• "+abilityText(it.weaponEffect.grantAbility)+"</div>";
  }
  if (it.desc) html += "<div class='tt-abilities'>"+it.desc+"</div>";
  return html;
}

// ---- tooltip element wiring ----
function initTooltip(){
  const tt = document.getElementById("tooltip");
  const TT_SELECTOR = "[data-tt-unit],[data-tt-item],[data-tt-unittype],[data-tt-mystery]";

  function positionTooltip(x, y){
    tt.style.left = Math.min(x+16, window.innerWidth-260) + "px";
    tt.style.top = Math.min(y+16, window.innerHeight-140) + "px";
  }
  function showTooltipFor(el){
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
  }

  document.addEventListener("mousemove", (e)=>{
    if (!tt.classList.contains("hidden")) positionTooltip(e.clientX, e.clientY);
  });
  document.addEventListener("mouseover", (e)=>{
    const el = e.target.closest(TT_SELECTOR);
    if (el) showTooltipFor(el);
  });
  document.addEventListener("mouseout", (e)=>{
    const el = e.target.closest(TT_SELECTOR);
    if (el) tt.classList.add("hidden");
  });

  // Mobile: touch devices don't fire mousemove, and mouseout doesn't reliably fire when tapping an
  // unrelated element next — the tooltip could get stuck open indefinitely. Handle touch explicitly:
  // show+position on touching a tooltip target, hide on ANY tap that lands outside one.
  document.addEventListener("touchstart", (e)=>{
    const touch = e.touches[0];
    if (!touch) return;
    const hit = document.elementFromPoint(touch.clientX, touch.clientY);
    const el = hit ? hit.closest(TT_SELECTOR) : null;
    if (el){
      showTooltipFor(el);
      positionTooltip(touch.clientX, touch.clientY);
    } else {
      tt.classList.add("hidden");
    }
  }, {passive:true});
  // Also covers desktop clicks that land outside any tooltip target (e.g. clicking a button next to one).
  document.addEventListener("click", (e)=>{
    const el = e.target.closest(TT_SELECTOR);
    if (!el) tt.classList.add("hidden");
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
    ${showArrows ? slotArrowsHtml(line, idx, arrLen, unit.movedThisTurn) : ""}
  </div>`;
}

function slotArrowsHtml(line, idx, arrLen, movedThisTurn){
  const canLeft = idx>0 && !movedThisTurn;
  const canRight = idx<arrLen-1 && !movedThisTurn;
  const canVert = !movedThisTurn;
  const vertLabel = line==="front" ? "▼" : "▲";
  const vertTitle = movedThisTurn ? "Уже перемещался в этот ход" : (line==="front" ? "В тыл" : "На фронт");
  return `<div class="slot-arrows">
    <button class="arrow-btn" data-arrow="left" ${canLeft?"":"disabled"} title="${movedThisTurn?"Уже перемещался в этот ход":"Влево"}">◀</button>
    <button class="arrow-btn" data-arrow="vert" ${canVert?"":"disabled"} title="${vertTitle}">${vertLabel}</button>
    <button class="arrow-btn" data-arrow="right" ${canRight?"":"disabled"} title="${movedThisTurn?"Уже перемещался в этот ход":"Вправо"}">▶</button>
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
  const notifBtn = document.querySelector('.tabs button[data-tab="notifications"]');
  if (notifBtn){
    const hasUnseen = player.notifications && player.notifications.some(n=>!n.seen);
    notifBtn.classList.toggle("has-notif", !!hasUnseen);
  }
}

// ===================== RENDER: INVENTORY =====================
function isItemUsableOnUnit(unit, itemId){
  if (!unit) return false;
  if (unit.abilities.some(a=>a.type==="feed_transform" && a.item===itemId)) return true;
  const item = ITEM_DB[itemId];
  if (item && item.isWeapon && !unit.isRobot) return true;
  const eff = ITEM_EFFECTS[itemId];
  if (eff && (!eff.robotOnly || unit.isRobot)) return true;
  return false;
}

function renderInventory(){
  const cheapestCaseCost = Math.min(BIG_CASE_COST, MECHA_CASE_COST, CRAP_CASE_COST);
  const isBroke = player.freeCases<=0 && !canAffordIo(cheapestCaseCost);
  const rosterHtml = player.units.length
    ? player.units.map(u=>`<div data-inv-unit="${u.uid}">${unitCardHtml(u, {draggable:false, selected: u.uid===invSelectedUid})}</div>`).join("")
    : `<div class="empty-note">Пока никого нет. Скрафтите юнита во вкладке «Крафт».</div>
       ${isBroke ? `<button class="btn btn-ghost" id="call-steyn-bailout-btn">☎ Попросить у Штейна денежный бейлаут</button>` : ""}`;

  const selectedUnit = invSelectedUid ? player.units.find(u=>u.uid===invSelectedUid) : null;
  const unequipBtnHtml = (selectedUnit && selectedUnit.equippedWeapon)
    ? `<button class="btn btn-ghost" id="unequip-weapon-btn">Снять оружие (${itemName(selectedUnit.equippedWeapon)})</button>`
    : "";

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
      ${unequipBtnHtml}
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
  const steynBailoutBtn = document.getElementById("call-steyn-bailout-btn");
  if (steynBailoutBtn){
    steynBailoutBtn.addEventListener("click", ()=>{
      const res = callUncleSteynMoneyBailout();
      const takenList = res.taken.length
        ? res.taken.map(t=>itemName(t.id)+" ×"+t.qty).join(", ")
        : "(взять было особо нечего)";
      invMessage = `Штейн долго ругается — «совсем стыд потерял, ни армии, ни Ио» — забирает: ${takenList}. Взамен кидает ${res.bailout} Ио «в последний раз».`;
      renderAll();
    });
  }
  const unequipBtn = document.getElementById("unequip-weapon-btn");
  if (unequipBtn){
    unequipBtn.addEventListener("click", ()=>{
      const res = unequipWeapon(invSelectedUid);
      invMessage = res.ok ? `Оружие (${res.name}) снято и возвращено в инвентарь.` : "Не удалось снять оружие.";
      invSelectedUid = null;
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
  rollForNotification();
  renderAll();
}

function onOpenMechaCase(){
  if (!canAffordIo(MECHA_CASE_COST)) return;
  spendIo(MECHA_CASE_COST);
  const result = openMechaCase();
  mechaCaseLog.push({id:result.item.id, name:result.item.name, rarity:result.rarity});
  rollForNotification();
  renderAll();
}

function onOpenCrapCase(){
  if (!canAffordIo(CRAP_CASE_COST)) return;
  spendIo(CRAP_CASE_COST);
  const result = openCrapCase();
  crapCaseLog.push({id:result.item.id, name:result.item.name, rarity:result.rarity});
  rollForNotification();
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
  const categories = ["unit","weapon","buff","component"];
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
  if (sewerEventTypeKey && !battle){ renderSewerEvent(); return; }
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
  const farlandsUnlocked = hasItem("portal_key", 1);
  const noRoster = !player.units.length;
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Неевклидова канализация</h2>
      <p class="muted">Шесть-семь клеток случайного маршрута. Дальше — только хуже. Разумная логика тут не работает.</p>
      <button class="btn btn-primary" id="start-sewer-btn" ${noRoster? "disabled" : ""}>Отправиться в поход</button>
    </section>
    <section class="panel">
      <h2>Туманные земли ${farlandsUnlocked?"":"🔒"}</h2>
      ${farlandsUnlocked
        ? `<p class="muted">Дальше, гуще и куда опаснее канализации — зато и добыча соответствующая. Маршрут каждый раз прокладывается заново.</p>
           <button class="btn btn-primary" id="start-farlands-btn" ${noRoster? "disabled" : ""}>Отправиться в туман</button>`
        : `<p class="muted">Проход закрыт. Нужен Портальный ключ * — скрафтите его из Осколков портала * (продаёт Диоген в канализации) и Безумия в банке.</p>`
      }
    </section>
    ${noRoster? '<p class="muted small">Нужен хотя бы один юнит в отряде — загляните в «Инвентарь», если совсем никого не осталось.</p>' : ""}
    ${msgHtml}
  `;
  lastExpeditionMsg = null;
  document.getElementById("start-sewer-btn").addEventListener("click", ()=>{
    startExpedition("sewer");
    proceedToNode(currentExpeditionMob());
  });
  const farlandsBtn = document.getElementById("start-farlands-btn");
  if (farlandsBtn){
    farlandsBtn.addEventListener("click", ()=>{
      startExpedition("farlands");
      proceedToNode(currentExpeditionMob());
    });
  }
}

// Narrative "encounter" screen for a Round-7 sewer/Farlands event — reuses the same dialogue-tree pattern
// (and .notif-* CSS) as the phone-call notifications.
function renderSewerEvent(){
  const type = currentEventTable()[sewerEventTypeKey];
  if (sewerEventEndMsg){
    document.getElementById("view").innerHTML = `
      <section class="panel">
        <h2>${type.icon} ${type.title}</h2>
        <p class="notif-text">${sewerEventEndMsg}</p>
        <button class="btn btn-primary" id="sewer-event-continue-btn">Идти дальше</button>
      </section>
    `;
    document.getElementById("sewer-event-continue-btn").addEventListener("click", closeSewerEvent);
    return;
  }
  const node = type.tree[sewerEventNode];
  const optsHtml = node.options.map((o,i)=>`<button class="btn notif-opt" data-opt="${i}">${o.label}</button>`).join("");
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>${type.icon} ${type.title}</h2>
      <p class="notif-text">${node.text}</p>
      <div class="notif-options">${optsHtml}</div>
    </section>
  `;
  document.getElementById("view").querySelectorAll('[data-opt]').forEach(btn=>{
    btn.addEventListener("click", ()=>{ chooseSewerEventOption(parseInt(btn.dataset.opt,10)); renderAll(); });
  });
}

// Auto-arrange for setup: tanky (high HP+shield) melee units go front, ranged and squishier units go
// back. Anchored on the enemy's actual (now randomized) column spread rather than the raw field center —
// otherwise a scattered enemy would leave half the auto-arranged army stuck out of column range. Ranged
// player units specifically try to match the enemy's own backline columns first: back-row targeting is an
// exact single-column match (no ±1 tolerance like the front row), so a ranged unit that doesn't line up
// with an enemy backline unit's column can never hit it at all.
function autoArrangeUnits(){
  if (!battle || battle.phase !== "setup") return;
  for (const line of [battle.player.front, battle.player.back]){
    for (let i=0;i<line.length;i++){
      if (line[i]){ player.units.push(line[i]); line[i]=null; }
    }
  }
  const width = battle.width;
  const pool = [...player.units];
  const ranged = pool.filter(u=>u.abilities.some(a=>a.type==="ranged_attack"));
  const melee = pool.filter(u=>!ranged.includes(u));
  const tankScore = u => u.hp + (u.shld||0)*3;
  melee.sort((a,b)=> tankScore(b)-tankScore(a));

  const enemyFrontCols = [];
  battle.enemy.front.forEach((u,i)=>{ if (u) enemyFrontCols.push(i); });
  const enemyBackCols = [];
  battle.enemy.back.forEach((u,i)=>{ if (u) enemyBackCols.push(i); });
  const enemyCols = enemyFrontCols.concat(enemyBackCols);
  const anchor = enemyCols.length
    ? Math.round(enemyCols.reduce((a,b)=>a+b,0) / enemyCols.length)
    : Math.floor((width-1)/2);
  function anchoredStart(count, anchorPoint){
    return Math.max(0, Math.min(width-count, anchorPoint - Math.floor(count/2)));
  }

  const frontPicks = melee.slice(0, width);
  const frontStart = anchoredStart(frontPicks.length, anchor);
  frontPicks.forEach((u,i)=> deployUnit(u.uid, "front", frontStart+i));

  const backPicks = [...ranged, ...melee.slice(width)].slice(0, width);
  const usedCols = new Set();
  const leftover = [];
  backPicks.forEach((u,i)=>{
    const col = enemyBackCols[i];
    if (col !== undefined && !usedCols.has(col)){
      deployUnit(u.uid, "back", col);
      usedCols.add(col);
    } else {
      leftover.push(u);
    }
  });
  if (leftover.length){
    let slot = anchoredStart(leftover.length, anchor);
    for (const u of leftover){
      while (slot < width && battle.player.back[slot]) slot++;
      if (slot >= width) break;
      deployUnit(u.uid, "back", slot);
      slot++;
    }
  }
}

function renderBattleSetup(){
  const mobKey = battle.mobKey;
  const enemyAliveList = [...aliveList(battle.enemy.front), ...aliveList(battle.enemy.back)];
  const soloBoss = enemyAliveList.length<=1 ? (enemyAliveList[0] ? enemyAliveList[0].u : null) : null;
  const rosterHtml = player.units.length
    ? player.units.map(u=>unitCardHtml(u,{draggable:true, role:"roster", selected: !!(selected && selected.type==="roster" && selected.uid===u.uid)})).join("")
    : `<div class="empty-note">Все уже на позициях.</div>`;

  document.getElementById("view").innerHTML = `
    <section class="panel enemy-panel">
      <h2>Враг${soloBoss&&soloBoss.boss?' <span class="boss-tag">БОСС</span>':''}</h2>
      ${soloBoss
        ? `<div class="line-slots single">${unitCardHtml(soloBoss,{draggable:false})}</div>`
        : rowHtml("Строй","enemy","front", battle.enemy.front)}
    </section>
    <section class="panel">
      <h2>Расстановка отряда</h2>
      <p class="muted small">Перетащите юнитов (или кликните юнита, затем слот) на линию фронта или тыла. Можно перетаскивать уже выставленных юнитов друг на друга, чтобы поменять их местами.</p>
      ${rowHtml("Фронт","player","front", battle.player.front)}
      ${rowHtml("Тыл","player","back", battle.player.back)}
      <div class="roster-pool" data-role="roster-drop">
        <div class="line-label">Резерв</div>
        <div class="roster-grid">${rosterHtml}</div>
      </div>
      <button class="btn" id="auto-arrange-btn">Расставить автоматически</button>
      <button class="btn btn-primary" id="begin-rounds-btn">Начать бой</button>
      ${fleeSetupPendingLossCount!==null
        ? `<div class="flee-confirm">
             <p class="muted small">Отступление сейчас будет стоить отряду примерно ${pluralUnits(fleeSetupPendingLossCount)}. Точно отступаем?</p>
             <button class="btn btn-danger" id="flee-confirm-btn">Да, отступить</button>
             <button class="btn" id="flee-cancel-btn">Остаться</button>
           </div>`
        : `<button class="btn btn-ghost" id="flee-setup-btn">Отступить</button>`
      }
    </section>
  `;
  document.getElementById("auto-arrange-btn").addEventListener("click", ()=>{
    autoArrangeUnits();
    renderAll();
  });
  document.getElementById("begin-rounds-btn").addEventListener("click", ()=>{
    if (beginRounds()) renderAll();
  });
  const fleeSetupBtn = document.getElementById("flee-setup-btn");
  if (fleeSetupBtn) fleeSetupBtn.addEventListener("click", ()=>{
    fleeSetupPendingLossCount = computeFleeSetupLossCount();
    renderAll();
  });
  const fleeConfirmBtn = document.getElementById("flee-confirm-btn");
  if (fleeConfirmBtn) fleeConfirmBtn.addEventListener("click", confirmFleeSetup);
  const fleeCancelBtn = document.getElementById("flee-cancel-btn");
  if (fleeCancelBtn) fleeCancelBtn.addEventListener("click", ()=>{
    fleeSetupPendingLossCount = null;
    renderAll();
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
  wireTargeting();
  wireEnemyTargeting();
}

function renderBattleOver(){
  const victory = battle.result==="victory";
  const stalemate = battle.result==="stalemate";
  const isMimic = battle.isMimic;
  const title = victory ? (isMimic? "Мимик уничтожен!" : "Узел пройден") : (stalemate ? "Бой зашёл в тупик" : "Отряд разбит");
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>${title}</h2>
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
  if (battle.isConscriptionFight){
    battle = null;
    if (victory){
      const ioBonus = 25 + Math.floor(Math.random()*26);
      addItem("beadhandful", 1);
      player.io += ioBonus;
      notifFlashMsg = "Отряд «Бусиков» разбит. ВЦВП роняет трубку — с ней падает "+ioBonus+" Ио и горсть бус.";
    } else {
      notifFlashMsg = "Бусики оказались на удивление злыми. Отряд отступает — ВЦВП обещает перезвонить.";
    }
    if (notifOpenId){ player.notifications = player.notifications.filter(n=>n.id!==notifOpenId); }
    notifOpenId = null; notifDialogueNode = null; notifEndMsg = null;
    currentTab = returnTabAfterBattle || "notifications";
    returnTabAfterBattle = null;
    renderAll();
    return;
  }
  if (battle.isSewerEvent){
    const wasVictory = victory;
    battle = null;
    if (!wasVictory){
      expedition = null;
      sewerEventTypeKey = null; sewerEventNode = null; sewerEventEndMsg = null;
      renderAll();
      return;
    }
    sewerEventTypeKey = null; sewerEventNode = null; sewerEventEndMsg = null;
    continueExpeditionAfterNode();
    return;
  }
  if (!victory){
    battle = null;
    expedition = null;
    renderAll();
    return;
  }
  continueExpeditionAfterNode();
}

function canAffordTrade(t){
  if (t.give.io && !canAffordIo(t.give.io)) return false;
  if (t.give.ar && player.ar < t.give.ar) return false;
  if (t.give.item && !hasItem(t.give.item, t.give.qty||1)) return false;
  if (t.give.unit && !player.units.some(u=>u.unitId===t.give.unit)) return false;
  return true;
}

function renderDiogenTrade(){
  const rows = DIOGEN_TRADES.map(t=>{
    const affordable = canAffordTrade(t);
    return `
    <div class="trade-row">
      <div class="trade-label">${t.label}</div>
      <button class="btn btn-small ${affordable?"btn-primary":""}" data-action="trade" data-trade="${t.id}" ${affordable?"":"disabled"}>Обменять</button>
    </div>`;
  }).join("");
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Диоген, торговец из-под бочки</h2>
      <p class="muted">«Тут внизу тоже есть экономика. Не спрашивай, откуда у меня столько Ио.»</p>
      ${diogenLastMsg ? `<p class="inv-message">${diogenLastMsg}</p>` : ""}
      <div class="trade-list">${rows}</div>
      <button class="btn btn-primary" id="leave-trader-btn">Идти дальше</button>
    </section>
  `;
  document.getElementById("view").querySelectorAll('[data-action="trade"]').forEach(btn=>{
    btn.addEventListener("click", ()=> doDiogenTrade(btn.dataset.trade));
  });
  document.getElementById("leave-trader-btn").addEventListener("click", ()=>{
    diogenLastMsg = null;
    proceedToNode(expedition.pendingNextMob);
  });
}

function doDiogenTrade(tradeId){
  const t = DIOGEN_TRADES.find(x=>x.id===tradeId);
  if (!t) return;
  if (!canAffordTrade(t)) return;
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
  diogenLastMsg = `Успешно обменяно: ${t.label}`;
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
      ${r.ar ? `<p><b>АР:</b> +${r.ar}${expedition.locationId==="farlands" ? "" : ' <span class="muted small">(редкая находка!)</span>'}</p>` : ""}
      <p><b>Предметы:</b> ${items}</p>
      <button class="btn btn-primary" id="finish-expedition-btn">В штаб</button>
    </section>
  `;
  document.getElementById("finish-expedition-btn").addEventListener("click", ()=>{
    expedition = null;
    renderAll();
  });
}

function pluralUnits(n){
  const mod10 = n%10, mod100 = n%100;
  if (mod100>=11 && mod100<=14) return n+" юнитов";
  if (mod10===1) return n+" юнит";
  if (mod10>=2 && mod10<=4) return n+" юнита";
  return n+" юнитов";
}

// Retreating from the SETUP screen (before the fight even starts) still costs the army something —
// otherwise it's a free do-over against a scary matchup. Loses 20-30% of the total army (roster + whatever
// was already deployed into slots), minimum 1, with a confirmation showing the expected loss count first.
function computeFleeSetupLossCount(){
  const deployedCount = battle ? (battle.player.front.filter(Boolean).length + battle.player.back.filter(Boolean).length) : 0;
  const total = player.units.length + deployedCount;
  if (total <= 0) return 0;
  const pct = 0.20 + Math.random()*0.10; // 20-30%
  return Math.max(1, Math.min(total, Math.round(total*pct)));
}

function confirmFleeSetup(){
  // merge any deployed units back into the roster first, then apply the loss across the whole army
  if (battle){
    for (const row of [battle.player.front, battle.player.back]){
      for (const u of row){ if (u) player.units.push(u); }
    }
  }
  const lossCount = fleeSetupPendingLossCount || 0;
  for (let i=0;i<lossCount && player.units.length>0;i++){
    const idx = Math.floor(Math.random()*player.units.length);
    player.units.splice(idx,1);
  }
  fleeSetupPendingLossCount = null;
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
      if (u && !u.dead){
        if (u._scaleHpBonus){ u.maxHp -= u._scaleHpBonus; u.hp = Math.min(u.hp, u.maxHp); u._scaleHpBonus = 0; }
        player.units.push(u);
      }
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

// ===================== NOTIFICATION DIALOGUE CONTROLLER =====================
// Node/option text can be a single string or an array of variants — when it's an array, one is picked
// at random the moment the node is entered (not re-rolled on every re-render, so it doesn't flicker).
function pickVariant(x){
  if (Array.isArray(x)) return x[Math.floor(Math.random()*x.length)];
  return x;
}
function openNotification(id){
  const n = player.notifications.find(x=>x.id===id);
  if (!n) return;
  n.seen = true;
  notifOpenId = id;
  notifDialogueNode = "start";
  notifEndMsg = null;
  notifDisplayText = pickVariant(NOTIF_TYPES[n.typeKey].tree.start.text);
}
function closeNotification(){
  if (notifOpenId){
    player.notifications = player.notifications.filter(x=>x.id!==notifOpenId);
  }
  notifOpenId = null;
  notifDialogueNode = null;
  notifDisplayText = null;
  notifEndMsg = null;
}
function chooseNotifOption(idx){
  const n = player.notifications.find(x=>x.id===notifOpenId);
  if (!n) return;
  const type = NOTIF_TYPES[n.typeKey];
  const node = type.tree[notifDialogueNode];
  const opt = node.options[idx];
  if (!opt) return;
  if (opt.effect === "vcvp_fight"){
    startConscriptionFight();
    return;
  }
  const effectMsg = opt.effect ? applyNotifEffect(opt.effect) : "";
  if (opt.next){
    notifDialogueNode = opt.next;
    notifDisplayText = pickVariant(type.tree[opt.next].text);
  } else {
    notifEndMsg = pickVariant(opt.resultText) || effectMsg || "Разговор окончен.";
  }
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
    const oddsByRarity = {};
    if (caseDef.odds){
      for (const w of caseDef.odds) oddsByRarity[w.rarity] = (w.w/101*100);
    }
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
      const pct = oddsByRarity[rarity];
      const pctLabel = pct!==undefined ? ` <span class="odds-pct">(${pct.toFixed(pct<1?2:1)}%)</span>` : "";
      sectionHtml += `<div class="item-group"><div class="item-group-title rar-${rarity}">${RARITY_LABEL[rarity]}${pctLabel}</div><div class="item-chips">${chips}</div></div>`;
    }
    const mimicOdd = caseDef.odds && caseDef.odds.find(w=>w.rarity==="mimic");
    const mimicLine = mimicOdd ? `<p class="muted small">Шанс мимика: ${(mimicOdd.w/101*100).toFixed(2)}% (можно отключить в Настройках)</p>` : "";
    html += `<section class="panel">
      <h2>${caseDef.label}</h2>
      ${mimicLine}
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
var diogenLastMsg = null;

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
      <h2>Обменять АР</h2>
      <p class="muted small">Мартын неохотно, но меняет АР на Ио — курс ${AR_TO_IO_RATE} Ио за 1 АР. У вас: ${player.ar} АР.</p>
      <div class="exchange-row">
        <button class="btn" data-exchange-ar="1" ${player.ar>=1?"":"disabled"}>Обменять 1 АР</button>
        <button class="btn" data-exchange-ar="5" ${player.ar>=5?"":"disabled"}>Обменять 5 АР</button>
        <button class="btn btn-primary" data-exchange-ar="${player.ar}" ${player.ar>0?"":"disabled"}>Обменять всё (${player.ar})</button>
      </div>
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
  document.getElementById("view").querySelectorAll('[data-exchange-ar]').forEach(el=>{
    el.addEventListener("click", ()=>{
      const res = exchangeArForIo(parseInt(el.dataset.exchangeAr,10));
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
  // render once at the CURRENT (unspun) rotation first — spinToIndex must not run before this paint,
  // otherwise the wheel-disc element gets recreated already at its target angle and the CSS transition
  // has nothing to animate from (it just snaps). Bump the rotation only after this frame has painted,
  // then push the new angle straight onto the existing element's style so the transition actually fires.
  renderAll();
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      spinToIndex(res.idx);
      const disc = document.getElementById("wheel-disc");
      if (disc) disc.style.transform = "rotate("+wheelRotation+"deg)";
    });
  });
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
    if (battle.phase==="setup"){
      swapUnitsInSetup(source.line, source.idx, target.line, target.idx);
    } else if (battle.phase==="playerTurn"){
      moveUnit(source.line, source.idx, target.line, target.idx);
    }
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

// Round 8: hover-reveal target badge (🎯) on each attacking player unit, click to cycle to the next
// valid candidate; hovering the slot (card OR badge) outlines the currently-targeted enemy slot.
function wireTargeting(){
  if (!battle || battle.phase !== "playerTurn") return;
  const view = document.getElementById("view");
  view.querySelectorAll('.unit-slot.filled[data-side="player"]').forEach(slotEl=>{
    const line = slotEl.dataset.line, idx = Number(slotEl.dataset.idx);
    const unit = line==="front" ? battle.player.front[idx] : battle.player.back[idx];
    if (!unit || unit.dead) return;
    const isRanged = unit.abilities.some(a=>a.type==="ranged_attack");
    if (line==="back" && !isRanged) return; // this unit doesn't attack from the back line — no targeting UI
    ensureUnitTarget(unit, line, idx, battle.enemy, battle.width);
    if (unit.targetLine==null) return; // nothing in range right now

    const badge = document.createElement("div");
    badge.className = "target-badge";
    badge.title = "Сменить цель";
    badge.textContent = "🎯";
    badge.addEventListener("click", (e)=>{
      e.stopPropagation();
      cycleUnitTarget(line, idx);
      renderAll();
    });
    slotEl.appendChild(badge);

    const targetSlotEl = view.querySelector(`.unit-slot[data-side="enemy"][data-line="${unit.targetLine}"][data-idx="${unit.targetIdx}"]`);
    // hover on the whole slot (card AND badge both count) so moving onto the badge doesn't drop the highlight
    if (targetSlotEl){
      slotEl.addEventListener("mouseenter", ()=>{ targetSlotEl.classList.add("is-targeted"); });
      slotEl.addEventListener("mouseleave", ()=>{ targetSlotEl.classList.remove("is-targeted"); });
    }
  });
}

// Preview of what each enemy is currently lined up to attack (recomputed live, same as the player's own
// badge) — hover an enemy slot to see the player unit it's aiming at highlighted. No click-to-cycle;
// the player doesn't control enemy targeting, only sees it coming.
function wireEnemyTargeting(){
  if (!battle || battle.phase !== "playerTurn") return;
  const view = document.getElementById("view");
  view.querySelectorAll('.unit-slot.filled[data-side="enemy"]').forEach(slotEl=>{
    const line = slotEl.dataset.line, idx = Number(slotEl.dataset.idx);
    const unit = line==="front" ? battle.enemy.front[idx] : battle.enemy.back[idx];
    if (!unit || unit.dead) return;
    const isRanged = unit.abilities.some(a=>a.type==="ranged_attack");
    if (line==="back" && !isRanged) return; // this enemy doesn't attack from the back line
    ensureUnitTarget(unit, line, idx, battle.player, battle.width);
    if (unit.targetLine==null) return;

    const badge = document.createElement("div");
    badge.className = "target-badge enemy-badge";
    badge.title = "Кого атакует";
    badge.textContent = "⚔";
    slotEl.appendChild(badge);

    const targetSlotEl = view.querySelector(`.unit-slot[data-side="player"][data-line="${unit.targetLine}"][data-idx="${unit.targetIdx}"]`);
    if (targetSlotEl){
      slotEl.addEventListener("mouseenter", ()=>{ targetSlotEl.classList.add("is-threatened"); });
      slotEl.addEventListener("mouseleave", ()=>{ targetSlotEl.classList.remove("is-threatened"); });
    }
  });
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

// ===================== RENDER: QUESTS =====================
function renderQuests(){
  ensureQuests();
  const cards = player.quests.map(q=>{
    const have = player.inventory[q.itemId]||0;
    const enough = have >= q.qty;
    return `
      <div class="quest-card">
        <div class="quest-text">${q.text}</div>
        <div class="quest-req">Нужно: ${itemName(q.itemId)} — ${have}/${q.qty}</div>
        <div class="quest-reward">Награда: ${q.rewardAmount} ${q.rewardType==="ar"?"АР":"Ио"}</div>
        <button class="btn ${enough?"btn-primary":""}" data-claim-quest="${q.id}" ${enough?"":"disabled"}>Сдать</button>
      </div>`;
  }).join("");
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Квесты</h2>
      <p class="muted">Простые поручения за Ио — принеси нужное количество предмета и сдай. Пока без затей, дальше будет интереснее.</p>
      ${questMessage ? `<p class="inv-message">${questMessage}</p>` : ""}
      <div class="quest-list">${cards}</div>
    </section>
  `;
  document.getElementById("view").querySelectorAll('[data-claim-quest]').forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const res = claimQuest(btn.dataset.claimQuest);
      questMessage = res.msg || null;
      renderAll();
    });
  });
}

// ===================== RENDER: NOTIFICATIONS =====================
function renderNotifications(){
  if (notifOpenId){
    const n = player.notifications.find(x=>x.id===notifOpenId);
    if (n){
      const type = NOTIF_TYPES[n.typeKey];
      if (notifEndMsg){
        document.getElementById("view").innerHTML = `
          <section class="panel">
            <h2>${type.icon} ${type.title}</h2>
            <p class="notif-text">${notifEndMsg}</p>
            <button class="btn btn-primary" id="notif-close-btn">Положить трубку</button>
          </section>
        `;
        document.getElementById("notif-close-btn").addEventListener("click", ()=>{ closeNotification(); renderAll(); });
        return;
      }
      const node = type.tree[notifDialogueNode];
      const optsHtml = node.options.map((o,i)=>`<button class="btn notif-opt" data-opt="${i}">${o.label}</button>`).join("");
      document.getElementById("view").innerHTML = `
        <section class="panel">
          <h2>${type.icon} ${type.title}</h2>
          <p class="notif-text">${notifDisplayText}</p>
          <div class="notif-options">${optsHtml}</div>
        </section>
      `;
      document.getElementById("view").querySelectorAll('[data-opt]').forEach(btn=>{
        btn.addEventListener("click", ()=>{ chooseNotifOption(parseInt(btn.dataset.opt,10)); renderAll(); });
      });
      return;
    }
  }
  // list view — visiting the tab marks everything as seen (clears the tab's red dot)
  player.notifications.forEach(n=>{ n.seen = true; });
  const flashHtml = notifFlashMsg ? `<p class="inv-message">${notifFlashMsg}</p>` : "";
  let listHtml;
  if (!player.notifications.length){
    listHtml = `<p class="empty-note">Тихо. Никто не звонит. Есть в этом что-то тревожное.</p>`;
  } else {
    listHtml = `<div class="notif-list">` + player.notifications.map(n=>{
      const type = NOTIF_TYPES[n.typeKey];
      return `<div class="notif-item" data-open-notif="${n.id}"><span class="notif-icon">${type.icon}</span><span class="notif-title">${type.title}</span><span class="notif-arrow">→</span></div>`;
    }).join("") + `</div>`;
  }
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Уведомления</h2>
      <p class="muted">Иногда звонят — после открытия кейсов или возвращения из похода. Иногда лучше бы не отвечать.</p>
      ${flashHtml}
      ${listHtml}
    </section>
  `;
  notifFlashMsg = null;
  document.getElementById("view").querySelectorAll('[data-open-notif]').forEach(el=>{
    el.addEventListener("click", ()=>{ openNotification(el.dataset.openNotif); renderAll(); });
  });
}

// ===================== PERSISTENCE =====================
// Full progress wipe — used by the Settings tab. Resets every piece of persistent state back to a
// fresh-game default and saves immediately.
function resetProgress(){
  Object.assign(player, {
    io: 300, ar: 20, inventory: {}, units: [], discovered: {}, lastArDay: null,
    quests: [], notifications: [], freeCases: 0, settings: { mimicsEnabled: true }
  });
  player.units.push(makeUnitInstance("brave_warrior"));
  caseLog = [];
  mechaCaseLog = [];
  crapCaseLog = [];
  mechaAssembly = { firmware:null, chassis:null, movement:null };
  expedition = null;
  battle = null;
  sewerEventTypeKey = null; sewerEventNode = null; sewerEventEndMsg = null;
  martynLastLine = null;
  questMessage = null;
  notifFlashMsg = null;
  currentTab = "inventory";
  selected = null; invSelectedUid = null; invMessage = null;
  saveGame();
}

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
    if (!player.quests) player.quests = [];
    if (!player.notifications) player.notifications = [];
    if (!player.settings) player.settings = { mimicsEnabled: true };
    if (Array.isArray(saved.caseLog)) caseLog = saved.caseLog;
    if (Array.isArray(saved.mechaCaseLog)) mechaCaseLog = saved.mechaCaseLog;
    if (Array.isArray(saved.crapCaseLog)) crapCaseLog = saved.crapCaseLog;
    if (typeof saved.uidCounter === "number") uidCounter = saved.uidCounter;
    if (saved.currentTab) currentTab = saved.currentTab;
    return true;
  } catch(e){ return false; }
}

// Wipes ALL browser storage tied to this page (not just our save key) and hard-reloads — a blunter tool
// than "Обнулить прогресс" for when something in the browser itself seems stuck or corrupted, not just
// the in-game state.
async function clearCacheAndReload(){
  try { if (window.storage) await window.storage.delete(SAVE_KEY, false); } catch(e){}
  try { window.localStorage.clear(); } catch(e){}
  try {
    if (window.caches && caches.keys){
      const names = await caches.keys();
      await Promise.all(names.map(n=>caches.delete(n)));
    }
  } catch(e){}
  location.reload();
}

// ===================== RENDER: SETTINGS =====================
var settingsConfirmingReset = false;
var settingsConfirmingClearCache = false;

function renderSettings(){
  document.getElementById("view").innerHTML = `
    <section class="panel">
      <h2>Настройки</h2>
      <div class="settings-row">
        <div class="settings-label">
          <div class="settings-title">Мимики</div>
          <div class="muted small">Шанс, что Большой кейс вместо предмета окажется мимиком.</div>
        </div>
        <button class="btn ${player.settings.mimicsEnabled?"btn-primary":""}" id="toggle-mimics-btn">
          ${player.settings.mimicsEnabled ? "Включены" : "Отключены"}
        </button>
      </div>
    </section>
    <section class="panel">
      <h2>Сброс прогресса</h2>
      <p class="muted small">Полностью обнуляет Ио, АР, инвентарь, отряд, квесты и историю кейсов. Отменить нельзя.</p>
      ${settingsConfirmingReset
        ? `<div class="settings-row">
             <button class="btn btn-danger" id="confirm-reset-btn">Да, обнулить всё</button>
             <button class="btn" id="cancel-reset-btn">Отмена</button>
           </div>`
        : `<button class="btn btn-ghost" id="reset-progress-btn">Обнулить прогресс</button>`
      }
    </section>
    <section class="panel">
      <h2>Очистка кэша сайта</h2>
      <p class="muted small">Стирает вообще всё, что браузер хранит для этой страницы (не только игровой прогресс), и перезагружает её. Полезно, если что-то зависло или ведёт себя странно.</p>
      ${settingsConfirmingClearCache
        ? `<div class="settings-row">
             <button class="btn btn-danger" id="confirm-clear-cache-btn">Да, стереть кэш и перезагрузить</button>
             <button class="btn" id="cancel-clear-cache-btn">Отмена</button>
           </div>`
        : `<button class="btn btn-ghost" id="clear-cache-btn">Стереть кэш и перезагрузить</button>`
      }
    </section>
  `;
  const toggleBtn = document.getElementById("toggle-mimics-btn");
  if (toggleBtn) toggleBtn.addEventListener("click", ()=>{
    player.settings.mimicsEnabled = !player.settings.mimicsEnabled;
    renderAll();
  });
  const resetBtn = document.getElementById("reset-progress-btn");
  if (resetBtn) resetBtn.addEventListener("click", ()=>{
    settingsConfirmingReset = true;
    renderAll();
  });
  const confirmBtn = document.getElementById("confirm-reset-btn");
  if (confirmBtn) confirmBtn.addEventListener("click", ()=>{
    settingsConfirmingReset = false;
    resetProgress();
    renderAll();
  });
  const cancelBtn = document.getElementById("cancel-reset-btn");
  if (cancelBtn) cancelBtn.addEventListener("click", ()=>{
    settingsConfirmingReset = false;
    renderAll();
  });
  const clearCacheBtn = document.getElementById("clear-cache-btn");
  if (clearCacheBtn) clearCacheBtn.addEventListener("click", ()=>{
    settingsConfirmingClearCache = true;
    renderAll();
  });
  const confirmClearCacheBtn = document.getElementById("confirm-clear-cache-btn");
  if (confirmClearCacheBtn) confirmClearCacheBtn.addEventListener("click", ()=>{
    clearCacheAndReload();
  });
  const cancelClearCacheBtn = document.getElementById("cancel-clear-cache-btn");
  if (cancelClearCacheBtn) cancelClearCacheBtn.addEventListener("click", ()=>{
    settingsConfirmingClearCache = false;
    renderAll();
  });
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
  else if (currentTab==="quests") renderQuests();
  else if (currentTab==="notifications") renderNotifications();
  else if (currentTab==="settings") renderSettings();
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
