
export interface Ingredient {
  id: string;
  name: string;
  nameZh: string;
  value: number;
  weight: number;
  effects: string[];
  effectsZh: string[];
  image?: string;
}

export const EFFECT_VALUES: Record<string, number> = {
  "Restore Health": 21,
  "Restore Magicka": 25,
  "Restore Stamina": 25,
  "Damage Health": 3,
  "Damage Magicka": 52,
  "Damage Stamina": 43,
  "Fortify Health": 82,
  "Fortify Magicka": 71,
  "Fortify Stamina": 71,
  "Invisibility": 261,
  "Paralysis": 285,
  "Slow": 247,
  "Frenzy": 107,
  "Fear": 120,
  "Fortify Enchanting": 20,
  "Fortify Smithing": 82,
  "Fortify Barter": 20,
  "Resist Magic": 51,
  "Resist Fire": 60,
  "Resist Frost": 60,
  "Resist Shock": 60,
  "Weakness to Fire": 28,
  "Weakness to Frost": 28,
  "Weakness to Shock": 28,
  "Weakness to Poison": 51,
  "Weakness to Magic": 51,
  "Regenerate Health": 177,
  "Regenerate Magicka": 177,
  "Regenerate Stamina": 177,
  "Cure Disease": 21,
  "Waterbreathing": 100,
  "Fortify Carry Weight": 208,
  "Fortify Sneak": 20,
  "Fortify Pickpocket": 20,
  "Fortify Lockpicking": 20,
  "Fortify One-Handed": 20,
  "Fortify Two-Handed": 20,
  "Fortify Marksman": 20,
  "Fortify Light Armor": 20,
  "Fortify Heavy Armor": 20,
  "Fortify Block": 20,
  "Fortify Destruction": 20,
  "Fortify Restoration": 20,
  "Fortify Conjuration": 20,
  "Fortify Illusion": 20,
  "Fortify Alteration": 20,
  "Ravage Health": 6,
  "Ravage Magicka": 15,
  "Ravage Stamina": 19,
  "Lingering Damage Health": 12,
  "Lingering Damage Magicka": 16,
  "Lingering Damage Stamina": 12,
  "Weakness to Poison": 51,
  "Damage Stamina Regen": 43,
  "Damage Magicka Regen": 52,
  "One-Handed": 20,
  "Damage Fatigue": 43
};

export const INGREDIENTS: Ingredient[] = [
  {
    id: "abecean_longfin",
    name: "Abecean Longfin",
    nameZh: "阿碧希恩長鰭魚",
    value: 15,
    weight: 0.5,
    effects: ["Weakness to Frost", "Fortify Sneak", "Weakness to Poison", "Fortify Restoration"],
    effectsZh: ["畏懼冰霜", "強化潛行", "畏懼毒素", "強化恢復"]
  },
  {
    id: "ancestor_moth_wing",
    name: "Ancestor Moth Wing",
    nameZh: "先祖飛蛾翅膀",
    value: 2,
    weight: 0.1,
    effects: ["Damage Stamina", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"],
    effectsZh: ["減損耐力", "強化召喚", "減損法力回復", "強化附魔"]
  },
  {
    id: "bear_claws",
    name: "Bear Claws",
    nameZh: "熊爪",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Health", "Fortify One-Handed", "Damage Magicka Regen"],
    effectsZh: ["恢復耐力", "強化生命", "強化單手武器", "減損法力回復"]
  },
  {
    id: "bee",
    name: "Bee",
    nameZh: "蜜蜂",
    value: 3,
    weight: 0.1,
    effects: ["Restore Stamina", "Ravage Stamina", "Regenerate Stamina", "Weakness to Shock"],
    effectsZh: ["恢復耐力", "蹂躪耐力", "再生耐力", "畏懼閃電"]
  },
  {
    id: "beehive_husk",
    name: "Beehive Husk",
    nameZh: "蜂巢外殼",
    value: 5,
    weight: 1,
    effects: ["Resist Poison", "Fortify Light Armor", "Fortify Sneak", "Fortify Destruction"],
    effectsZh: ["抗毒", "強化輕甲", "強化潛行", "強化毀滅"]
  },
  {
    id: "berits_ashes",
    name: "Berit's Ashes",
    nameZh: "貝里特的骨灰",
    value: 5,
    weight: 0.2,
    effects: ["Damage Magicka", "Resist Fire", "Fortify Conjuration", "Ravage Stamina"],
    effectsZh: ["減損法力", "抗火", "強化召喚", "蹂躪耐力"]
  },
  {
    id: "bleeding_crown",
    name: "Bleeding Crown",
    nameZh: "出血冠",
    value: 10,
    weight: 0.3,
    effects: ["Weakness to Fire", "Fortify Block", "Weakness to Poison", "Resist Magic"],
    effectsZh: ["畏懼火燄", "強化格擋", "畏懼毒素", "抗魔"]
  },
  {
    id: "blisterwort",
    name: "Blisterwort",
    nameZh: "氣泡草",
    value: 12,
    weight: 0.2,
    effects: ["Damage Stamina", "Frenzy", "Restore Health", "Fortify Smithing"],
    effectsZh: ["減損耐力", "狂暴", "恢復生命", "強化鍛造"]
  },
  {
    id: "blue_butterfly_wing",
    name: "Blue Butterfly Wing",
    nameZh: "藍蝶翅膀",
    value: 2,
    weight: 0.1,
    effects: ["Damage Magicka", "Fortify Conjuration", "Damage Magicka Regen", "Fortify Enchanting"],
    effectsZh: ["減損法力", "強化召喚", "減損法力回復", "強化附魔"]
  },
  {
    id: "blue_dartwing",
    name: "Blue Dartwing",
    nameZh: "藍蜻蜓",
    value: 1,
    weight: 0.1,
    effects: ["Resist Shock", "Fortify Pickpocket", "Restore Health", "Fear"],
    effectsZh: ["抗電", "強化扒竊", "恢復生命", "恐懼"]
  },
  {
    id: "blue_mountain_flower",
    name: "Blue Mountain Flower",
    nameZh: "藍山花",
    value: 2,
    weight: 0.1,
    effects: ["Restore Health", "Fortify Conjuration", "Fortify Health", "Damage Magicka Regen"],
    effectsZh: ["恢復生命", "強化召喚", "強化生命", "減損法力回復"]
  },
  {
    id: "butterfly_wing",
    name: "Butterfly Wing",
    nameZh: "蝴蝶翅膀",
    value: 3,
    weight: 0.1,
    effects: ["Restore Health", "Fortify Barter", "Lingering Damage Stamina", "Damage Magicka"],
    effectsZh: ["恢復生命", "強化交易", "持續減損耐力", "減損法力"]
  },
  {
    id: "canis_root",
    name: "Canis Root",
    nameZh: "犬根",
    value: 5,
    weight: 0.1,
    effects: ["Damage Stamina", "Fortify One-Handed", "Fortify Marksman", "Paralysis"],
    effectsZh: ["減損耐力", "強化單手武器", "強化箭術", "麻痺"]
  },
  {
    id: "charred_skeever_hide",
    name: "Charred Skeever Hide",
    nameZh: "燒焦的雪鼠皮",
    value: 1,
    weight: 0.5,
    effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Restore Health"],
    effectsZh: ["恢復耐力", "治癒疾病", "抗毒", "恢復生命"]
  },
  {
    id: "chaurus_eggs",
    name: "Chaurus Eggs",
    nameZh: "查魯斯卵",
    value: 10,
    weight: 0.2,
    effects: ["Weakness to Poison", "Fortify Stamina", "Damage Magicka", "Invisibility"],
    effectsZh: ["畏懼毒素", "強化耐力", "減損法力", "隱形"]
  },
  {
    id: "chicken_egg",
    name: "Chicken's Egg",
    nameZh: "雞蛋",
    value: 2,
    weight: 0.5,
    effects: ["Resist Magic", "Damage Magicka Regen", "Waterbreathing", "Lingering Damage Stamina"],
    effectsZh: ["抗魔", "減損法力回復", "水下呼吸", "持續減損耐力"]
  },
  {
    id: "creep_cluster",
    name: "Creep Cluster",
    nameZh: "藤蔓叢",
    value: 1,
    weight: 0.2,
    effects: ["Restore Magicka", "Damage Stamina Regen", "Fortify Carry Weight", "Weakness to Magic"],
    effectsZh: ["恢復法力", "減損耐力回復", "強化負重", "畏懼魔法"]
  },
  {
    id: "cyrodilic_spadetail",
    name: "Cyrodilic Spadetail",
    nameZh: "西羅帝爾鍬魚",
    value: 15,
    weight: 0.2,
    effects: ["Damage Stamina", "Fortify Restoration", "Fear", "Ravage Health"],
    effectsZh: ["減損耐力", "強化恢復", "恐懼", "蹂躪生命"]
  },
  {
    id: "daedra_heart",
    name: "Daedra Heart",
    nameZh: "魔族之心",
    value: 250,
    weight: 0.5,
    effects: ["Restore Health", "Damage Stamina Regen", "Damage Magicka", "Fear"],
    effectsZh: ["恢復生命", "減損耐力回復", "減損法力", "恐懼"]
  },
  {
    id: "deathbell",
    name: "Deathbell",
    nameZh: "死亡喪鐘",
    value: 4,
    weight: 0.1,
    effects: ["Damage Health", "Ravage Stamina", "Slow", "Weakness to Poison"],
    effectsZh: ["減損生命", "蹂躪耐力", "減速", "畏懼毒素"]
  },
  {
    id: "dragons_tongue",
    name: "Dragon's Tongue",
    nameZh: "龍舌蘭",
    value: 5,
    weight: 0.1,
    effects: ["Resist Fire", "Fortify Barter", "Fortify Illusion", "Fortify Two-Handed"],
    effectsZh: ["抗火", "強化交易", "強化幻術", "強化雙手武器"]
  },
  {
    id: "dwarven_oil",
    name: "Dwarven Oil",
    nameZh: "矮人油",
    value: 15,
    weight: 0.2,
    effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"],
    effectsZh: ["畏懼魔法", "強化幻術", "再生法力", "恢復法力"]
  },
  {
    id: "ectoplasm",
    name: "Ectoplasm",
    nameZh: "靈質",
    value: 25,
    weight: 0.1,
    effects: ["Restore Magicka", "Fortify Destruction", "Fortify Magicka", "Damage Health"],
    effectsZh: ["恢復法力", "強化毀滅", "強化法力", "減損生命"]
  },
  {
    id: "elves_ear",
    name: "Elves Ear",
    nameZh: "精靈耳",
    value: 10,
    weight: 0.1,
    effects: ["Restore Magicka", "Fortify Marksman", "Weakness to Frost", "Resist Fire"],
    effectsZh: ["恢復法力", "強化箭術", "畏懼冰霜", "抗火"]
  },
  {
    id: "eye_of_sabre_cat",
    name: "Eye of Sabre Cat",
    nameZh: "劍齒虎眼",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Ravage Magicka", "Damage Magicka", "Restore Health"],
    effectsZh: ["恢復耐力", "蹂躪法力", "減損法力", "恢復生命"]
  },
  {
    id: "falmer_ear",
    name: "Falmer Ear",
    nameZh: "法莫耳",
    value: 10,
    weight: 0.2,
    effects: ["Damage Health", "Frenzy", "Resist Poison", "Fortify Lockpicking"],
    effectsZh: ["減損生命", "狂暴", "抗毒", "強化開鎖"]
  },
  {
    id: "fire_salts",
    name: "Fire Salts",
    nameZh: "火鹽",
    value: 50,
    weight: 0.2,
    effects: ["Weakness to Frost", "Resist Fire", "Restore Magicka", "Regenerate Magicka"],
    effectsZh: ["畏懼冰霜", "抗火", "恢復法力", "再生法力"]
  },
  {
    id: "fly_amanita",
    name: "Fly Amanita",
    nameZh: "毒蠅傘",
    value: 2,
    weight: 0.1,
    effects: ["Resist Fire", "Fortify Two-Handed", "Frenzy", "Regenerate Stamina"],
    effectsZh: ["抗火", "強化雙手武器", "狂暴", "再生耐力"]
  },
  {
    id: "frost_mirriam",
    name: "Frost Mirriam",
    nameZh: "霜米爾安",
    value: 1,
    weight: 0.1,
    effects: ["Resist Frost", "Fortify Sneak", "Ravage Magicka", "Damage Stamina Regen"],
    effectsZh: ["抗霜", "強化潛行", "蹂躪法力", "減損耐力回復"]
  },
  {
    id: "frost_salts",
    name: "Frost Salts",
    nameZh: "霜鹽",
    value: 100,
    weight: 0.2,
    effects: ["Weakness to Fire", "Resist Frost", "Restore Magicka", "Fortify Conjuration"],
    effectsZh: ["畏懼火燄", "抗霜", "恢復法力", "強化召喚"]
  },
  {
    id: "garlic",
    name: "Garlic",
    nameZh: "大蒜",
    value: 1,
    weight: 0.1,
    effects: ["Resist Poison", "Fortify Stamina", "Regenerate Magicka", "Regenerate Health"],
    effectsZh: ["抗毒", "強化耐力", "再生法力", "再生生命"]
  },
  {
    id: "giant_lichen",
    name: "Giant Lichen",
    nameZh: "巨型地衣",
    value: 5,
    weight: 0.1,
    effects: ["Weakness to Shock", "Ravage Health", "Weakness to Poison", "Restore Magicka"],
    effectsZh: ["畏懼閃電", "蹂躪生命", "畏懼毒素", "恢復法力"]
  },
  {
    id: "giants_toe",
    name: "Giant's Toe",
    nameZh: "巨人之趾",
    value: 20,
    weight: 1,
    effects: ["Damage Stamina", "Fortify Health", "Fortify Carry Weight", "Damage Stamina Regen"],
    effectsZh: ["減損耐力", "強化生命", "強化負重", "減損耐力回復"]
  },
  {
    id: "glow_dust",
    name: "Glow Dust",
    nameZh: "發光塵",
    value: 20,
    weight: 0.1,
    effects: ["Damage Magicka", "Damage Magicka Regen", "Fortify Destruction", "Resist Shock"],
    effectsZh: ["減損法力", "減損法力回復", "強化毀滅", "抗電"]
  },
  {
    id: "glowing_mushrooms",
    name: "Glowing Mushroom",
    nameZh: "發光蘑菇",
    value: 5,
    weight: 0.2,
    effects: ["Resist Shock", "Fortify Destruction", "Fortify Smithing", "Fortify Health"],
    effectsZh: ["抗電", "強化毀滅", "強化鍛造", "強化生命"]
  },
  {
    id: "grass_pod",
    name: "Grass Pod",
    nameZh: "草莢",
    value: 1,
    weight: 0.1,
    effects: ["Resist Poison", "Ravage Magicka", "Fortify Alteration", "Restore Magicka"],
    effectsZh: ["抗毒", "蹂躪法力", "強化變化", "恢復法力"]
  },
  {
    id: "hagraven_claw",
    name: "Hagraven Claw",
    nameZh: "哈格拉芬之爪",
    value: 20,
    weight: 0.2,
    effects: ["Resist Magic", "Lingering Damage Magicka", "Fortify Enchanting", "Fortify Barter"],
    effectsZh: ["抗魔", "持續減損法力", "強化附魔", "強化交易"]
  },
  {
    id: "hagraven_feathers",
    name: "Hagraven Feathers",
    nameZh: "哈格拉芬羽毛",
    value: 20,
    weight: 0.1,
    effects: ["Damage Magicka", "Fortify Conjuration", "Frenzy", "Weakness to Shock"],
    effectsZh: ["減損法力", "強化召喚", "狂暴", "畏懼閃電"]
  },
  {
    id: "hanging_moss",
    name: "Hanging Moss",
    nameZh: "垂苔",
    value: 1,
    weight: 0.1,
    effects: ["Damage Magicka", "Fortify Health", "Damage Magicka Regen", "One-Handed"],
    effectsZh: ["減損法力", "強化生命", "減損法力回復", "單手武器"]
  },
  {
    id: "hawk_beak",
    name: "Hawk Beak",
    nameZh: "鷹喙",
    value: 15,
    weight: 0.1,
    effects: ["Restore Stamina", "Resist Frost", "Fortify Carry Weight", "Resist Shock"],
    effectsZh: ["恢復耐力", "抗霜", "強化負重", "抗電"]
  },
  {
    id: "hawk_feathers",
    name: "Hawk Feathers",
    nameZh: "鷹羽",
    value: 15,
    weight: 0.1,
    effects: ["Cure Disease", "Fortify Light Armor", "Fortify One-Handed", "Fortify Sneak"],
    effectsZh: ["治癒疾病", "強化輕甲", "強化單手武器", "強化潛行"]
  },
  {
    id: "histcarp",
    name: "Histcarp",
    nameZh: "希斯特鯉魚",
    value: 6,
    weight: 0.2,
    effects: ["Restore Stamina", "Fortify Magicka", "Damage Stamina Regen", "Waterbreathing"],
    effectsZh: ["恢復耐力", "強化法力", "減損耐力回復", "水下呼吸"]
  },
  {
    id: "honeycomb",
    name: "Honeycomb",
    nameZh: "蜂巢",
    value: 5,
    weight: 1,
    effects: ["Restore Stamina", "Fortify Light Armor", "Fortify Block", "Resist Fire"],
    effectsZh: ["恢復耐力", "強化輕甲", "強化格擋", "抗火"]
  },
  {
    id: "human_flesh",
    name: "Human Flesh",
    nameZh: "人肉",
    value: 1,
    weight: 0.2,
    effects: ["Restore Health", "Paralysis", "Restore Magicka", "Fortify Sneak"],
    effectsZh: ["恢復生命", "麻痺", "恢復法力", "強化潛行"]
  },
  {
    id: "human_heart",
    name: "Human Heart",
    nameZh: "人心",
    value: 0,
    weight: 1,
    effects: ["Damage Health", "Damage Magicka", "Damage Magicka Regen", "Frenzy"],
    effectsZh: ["減損生命", "減損法力", "減損法力回復", "狂暴"]
  },
  {
    id: "ice_wraith_teeth",
    name: "Ice Wraith Teeth",
    nameZh: "冰靈牙齒",
    value: 30,
    weight: 0.2,
    effects: ["Weakness to Frost", "Fortify Heavy Armor", "Invisibility", "Weakness to Fire"],
    effectsZh: ["畏懼冰霜", "強化重甲", "隱形", "畏懼火燄"]
  },
  {
    id: "imp_stool",
    name: "Imp Stool",
    nameZh: "小鬼菌",
    value: 0,
    weight: 0.3,
    effects: ["Damage Health", "Lingering Damage Health", "Paralysis", "Restore Health"],
    effectsZh: ["減損生命", "持續減損生命", "麻痺", "恢復生命"]
  },
  {
    id: "juniper_berries",
    name: "Juniper Berries",
    nameZh: "杜松子",
    value: 1,
    weight: 0.1,
    effects: ["Restore Health", "Fortify Marksman", "Regenerate Health", "Damage Stamina Regen"],
    effectsZh: ["恢復生命", "強化箭術", "再生生命", "減損耐力回復"]
  },
  {
    id: "large_antlers",
    name: "Large Antlers",
    nameZh: "大鹿角",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Stamina", "Damage Magicka Regen", "Weakness to Poison"],
    effectsZh: ["恢復耐力", "強化耐力", "減損法力回復", "畏懼毒素"]
  },
  {
    id: "lavender",
    name: "Lavender",
    nameZh: "薰衣草",
    value: 1,
    weight: 0.1,
    effects: ["Resist Magic", "Fortify Stamina", "Ravage Magicka", "Fortify Conjuration"],
    effectsZh: ["抗魔", "強化耐力", "蹂躪法力", "強化召喚"]
  },
  {
    id: "luna_moth_wing",
    name: "Luna Moth Wing",
    nameZh: "月蛾翅膀",
    value: 5,
    weight: 0.1,
    effects: ["Damage Magicka", "Fortify Light Armor", "Regenerate Health", "Invisibility"],
    effectsZh: ["減損法力", "強化輕甲", "再生生命", "隱形"]
  },
  {
    id: "mudcrab_chitin",
    name: "Mudcrab Chitin",
    nameZh: "泥沼蟹殼",
    value: 2,
    weight: 0.25,
    effects: ["Restore Stamina", "Cure Disease", "Resist Poison", "Resist Fire"],
    effectsZh: ["恢復耐力", "治癒疾病", "抗毒", "抗火"]
  },
  {
    id: "namiras_rot",
    name: "Namira's Rot",
    nameZh: "娜米拉的腐蝕",
    value: 0,
    weight: 0.25,
    effects: ["Damage Magicka", "Fortify Lockpicking", "Fear", "Regenerate Health"],
    effectsZh: ["減損法力", "強化開鎖", "恐懼", "再生生命"]
  },
  {
    id: "nightshade",
    name: "Nightshade",
    nameZh: "夜茄",
    value: 8,
    weight: 0.1,
    effects: ["Damage Health", "Damage Magicka Regen", "Lingering Damage Stamina", "Fortify Destruction"],
    effectsZh: ["減損生命", "減損法力回復", "持續減損耐力", "強化毀滅"]
  },
  {
    id: "nirnroot",
    name: "Nirnroot",
    nameZh: "奈恩根",
    value: 10,
    weight: 0.2,
    effects: ["Damage Health", "Damage Stamina", "Invisibility", "Resist Magic"],
    effectsZh: ["減損生命", "減損耐力", "隱形", "抗魔"]
  },
  {
    id: "nordic_barnacle",
    name: "Nordic Barnacle",
    nameZh: "諾德藤壺",
    value: 5,
    weight: 0.2,
    effects: ["Damage Magicka", "Waterbreathing", "Regenerate Health", "Fortify Pickpocket"],
    effectsZh: ["減損法力", "水下呼吸", "再生生命", "強化扒竊"]
  },
  {
    id: "orange_dartwing",
    name: "Orange Dartwing",
    nameZh: "橙蜻蜓",
    value: 1,
    weight: 0.1,
    effects: ["Restore Stamina", "Ravage Magicka", "Fortify Pickpocket", "Lingering Damage Health"],
    effectsZh: ["恢復耐力", "蹂躪法力", "強化扒竊", "持續減損生命"]
  },
  {
    id: "pearl",
    name: "Pearl",
    nameZh: "珍珠",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Block", "Restore Magicka", "Resist Shock"],
    effectsZh: ["恢復耐力", "強化格擋", "恢復法力", "抗電"]
  },
  {
    id: "pine_thrush_egg",
    name: "Pine Thrush Egg",
    nameZh: "松鶇蛋",
    value: 2,
    weight: 0.5,
    effects: ["Restore Stamina", "Fortify Lockpicking", "Weakness to Poison", "Resist Shock"],
    effectsZh: ["恢復耐力", "強化開鎖", "畏懼毒素", "抗電"]
  },
  {
    id: "powdered_mammoth_tusk",
    name: "Powdered Mammoth Tusk",
    nameZh: "猛獁象牙粉",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Sneak", "Weakness to Fire", "Fear"],
    effectsZh: ["恢復耐力", "強化潛行", "畏懼火燄", "恐懼"]
  },
  {
    id: "purple_mountain_flower",
    name: "Purple Mountain Flower",
    nameZh: "紫山花",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Sneak", "Lingering Damage Magicka", "Resist Frost"],
    effectsZh: ["恢復耐力", "強化潛行", "持續減損法力", "抗霜"]
  },
  {
    id: "red_mountain_flower",
    name: "Red Mountain Flower",
    nameZh: "紅山花",
    value: 2,
    weight: 0.1,
    effects: ["Restore Magicka", "Ravage Magicka", "Fortify Magicka", "Damage Health"],
    effectsZh: ["恢復法力", "蹂躪法力", "強化法力", "減損生命"]
  },
  {
    id: "river_betty",
    name: "River Betty",
    nameZh: "河布提魚",
    value: 15,
    weight: 0.2,
    effects: ["Damage Health", "Fortify Alteration", "Slow", "Fortify Carry Weight"],
    effectsZh: ["減損生命", "強化變化", "減速", "強化負重"]
  },
  {
    id: "rock_warbler_egg",
    name: "Rock Warbler Egg",
    nameZh: "岩鶯蛋",
    value: 2,
    weight: 0.5,
    effects: ["Restore Health", "Fortify One-Handed", "Damage Stamina", "Weakness to Magic"],
    effectsZh: ["恢復生命", "強化單手武器", "減損耐力", "畏懼魔法"]
  },
  {
    id: "sabre_cat_tooth",
    name: "Sabre Cat Tooth",
    nameZh: "劍齒虎牙",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Heavy Armor", "Fortify Smithing", "Weakness to Poison"],
    effectsZh: ["恢復耐力", "強化重甲", "強化鍛造", "畏懼毒素"]
  },
  {
    id: "salt_pile",
    name: "Salt Pile",
    nameZh: "鹽堆",
    value: 2,
    weight: 0.2,
    effects: ["Weakness to Magic", "Fortify Restoration", "Slow", "Regenerate Magicka"],
    effectsZh: ["畏懼魔法", "強化恢復", "減速", "再生法力"]
  },
  {
    id: "scaly_pholiota",
    name: "Scaly Pholiota",
    nameZh: "鱗片菇",
    value: 4,
    weight: 0.25,
    effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Stamina", "Fortify Carry Weight"],
    effectsZh: ["畏懼魔法", "強化幻術", "再生耐力", "強化負重"]
  },
  {
    id: "silverside_perch",
    name: "Silverside Perch",
    nameZh: "銀側鱸魚",
    value: 15,
    weight: 0.2,
    effects: ["Restore Stamina", "Damage Fatigue", "Resist Frost", "Ravage Health"],
    effectsZh: ["恢復耐力", "減損疲勞", "抗霜", "蹂躪生命"]
  },
  {
    id: "skeever_tail",
    name: "Skeever Tail",
    nameZh: "雪鼠尾巴",
    value: 3,
    weight: 0.2,
    effects: ["Damage Stamina Regen", "Ravage Health", "Damage Health", "Fortify Light Armor"],
    effectsZh: ["減損耐力回復", "蹂躪生命", "減損生命", "強化輕甲"]
  },
  {
    id: "slaughterfish_egg",
    name: "Slaughterfish Egg",
    nameZh: "屠夫魚卵",
    value: 3,
    weight: 0.2,
    effects: ["Resist Poison", "Fortify Stamina", "Ravage Health", "Fortify Pickpocket"],
    effectsZh: ["抗毒", "強化耐力", "蹂躪生命", "強化扒竊"]
  },
  {
    id: "slaughterfish_scales",
    name: "Slaughterfish Scales",
    nameZh: "屠夫魚鱗",
    value: 3,
    weight: 0.1,
    effects: ["Resist Frost", "Fortify Heavy Armor", "Fortify Block", "Fortify Carry Weight"],
    effectsZh: ["抗霜", "強化重甲", "強化格擋", "強化負重"]
  },
  {
    id: "small_antlers",
    name: "Small Antlers",
    nameZh: "小鹿角",
    value: 2,
    weight: 0.1,
    effects: ["Weakness to Poison", "Fortify Restoration", "Fortify Stamina", "Damage Health"],
    effectsZh: ["畏懼毒素", "強化恢復", "強化耐力", "減損生命"]
  },
  {
    id: "small_pearl",
    name: "Small Pearl",
    nameZh: "小珍珠",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify One-Handed", "Fortify Restoration", "Resist Frost"],
    effectsZh: ["恢復耐力", "強化單手武器", "強化恢復", "抗霜"]
  },
  {
    id: "snowberries",
    name: "Snowberries",
    nameZh: "雪漿果",
    value: 4,
    weight: 0.1,
    effects: ["Resist Fire", "Resist Frost", "Resist Shock", "Fortify Enchanting"],
    effectsZh: ["抗火", "抗霜", "抗電", "強化附魔"]
  },
  {
    id: "spider_egg",
    name: "Spider Egg",
    nameZh: "蜘蛛卵",
    value: 5,
    weight: 0.2,
    effects: ["Damage Stamina", "Damage Magicka Regen", "Fortify Lockpicking", "Fortify Pickpocket"],
    effectsZh: ["減損耐力", "減損法力回復", "強化開鎖", "強化扒竊"]
  },
  {
    id: "spriggan_sap",
    name: "Spriggan Sap",
    nameZh: "樹精液",
    value: 15,
    weight: 0.2,
    effects: ["Damage Magicka Regen", "Fortify Enchanting", "Fortify Smithing", "Fortify Alteration"],
    effectsZh: ["減損法力回復", "強化附魔", "強化鍛造", "強化變化"]
  },
  {
    id: "swamp_fungal_pod",
    name: "Swamp Fungal Pod",
    nameZh: "沼澤真菌莢",
    value: 5,
    weight: 0.25,
    effects: ["Resist Shock", "Lingering Damage Magicka", "Paralysis", "Restore Health"],
    effectsZh: ["抗電", "持續減損法力", "麻痺", "恢復生命"]
  },
  {
    id: "taproot",
    name: "Taproot",
    nameZh: "主根",
    value: 15,
    weight: 0.25,
    effects: ["Weakness to Magic", "Fortify Illusion", "Regenerate Magicka", "Restore Magicka"],
    effectsZh: ["畏懼魔法", "強化幻術", "再生法力", "恢復法力"]
  },
  {
    id: "thistle_branch",
    name: "Thistle Branch",
    nameZh: "薊枝",
    value: 1,
    weight: 0.1,
    effects: ["Resist Frost", "Ravage Stamina", "Resist Poison", "Fortify Heavy Armor"],
    effectsZh: ["抗霜", "蹂躪耐力", "抗毒", "強化重甲"]
  },
  {
    id: "torchbug_thorax",
    name: "Torchbug Thorax",
    nameZh: "螢火蟲胸腔",
    value: 1,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Stamina", "Weakness to Magic", "Resist Magic"],
    effectsZh: ["恢復耐力", "強化耐力", "畏懼魔法", "抗魔"]
  },
  {
    id: "troll_fat",
    name: "Troll Fat",
    nameZh: "巨魔脂肪",
    value: 15,
    weight: 1,
    effects: ["Resist Poison", "Fortify Two-Handed", "Frenzy", "Damage Health"],
    effectsZh: ["抗毒", "強化雙手武器", "狂暴", "減損生命"]
  },
  {
    id: "tundra_cotton",
    name: "Tundra Cotton",
    nameZh: "苔原棉花",
    value: 1,
    weight: 0.1,
    effects: ["Resist Magic", "Fortify Magicka", "Fortify Block", "Fortify Barter"],
    effectsZh: ["抗魔", "強化法力", "強化格擋", "強化交易"]
  },
  {
    id: "vampire_dust",
    name: "Vampire Dust",
    nameZh: "吸血鬼灰燼",
    value: 25,
    weight: 0.2,
    effects: ["Invisibility", "Restore Magicka", "Regenerate Magicka", "Cure Disease"],
    effectsZh: ["隱形", "恢復法力", "再生法力", "治癒疾病"]
  },
  {
    id: "void_salts",
    name: "Void Salts",
    nameZh: "虛空鹽",
    value: 125,
    weight: 0.2,
    effects: ["Weakness to Shock", "Resist Magic", "Damage Health", "Fortify Magicka"],
    effectsZh: ["畏懼閃電", "抗魔", "減損生命", "強化法力"]
  },
  {
    id: "wheat",
    name: "Wheat",
    nameZh: "小麥",
    value: 5,
    weight: 0.1,
    effects: ["Restore Health", "Fortify Health", "Damage Stamina Regen", "Lingering Damage Magicka"],
    effectsZh: ["恢復生命", "強化生命", "減損耐力回復", "持續減損法力"]
  },
  {
    id: "white_cap",
    name: "White Cap",
    nameZh: "白帽菇",
    value: 0,
    weight: 0.3,
    effects: ["Weakness to Frost", "Fortify Heavy Armor", "Restore Magicka", "Ravage Magicka"],
    effectsZh: ["畏懼冰霜", "強化重甲", "恢復法力", "蹂躪法力"]
  },
  {
    id: "wisp_wrappings",
    name: "Wisp Wrappings",
    nameZh: "幽魂外皮",
    value: 2,
    weight: 0.1,
    effects: ["Restore Stamina", "Fortify Destruction", "Fortify Carry Weight", "Resist Magic"],
    effectsZh: ["恢復耐力", "強化毀滅", "強化負重", "抗魔"]
  }
];
