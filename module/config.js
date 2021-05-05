import {ClassFeatures} from "./classFeatures.js"

// Namespace Configuration Values
export const SNS = {};

// ASCII Artwork
SNS.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
SNS.abilities = {
  "str": "SNS.AbilityStr",
  "dex": "SNS.AbilityDex",
  "con": "SNS.AbilityCon",
  "int": "SNS.AbilityInt",
  "wis": "SNS.AbilityWis",
  "cha": "SNS.AbilityCha"
};

SNS.abilityAbbreviations = {
  "str": "SNS.AbilityStrAbbr",
  "dex": "SNS.AbilityDexAbbr",
  "con": "SNS.AbilityConAbbr",
  "int": "SNS.AbilityIntAbbr",
  "wis": "SNS.AbilityWisAbbr",
  "cha": "SNS.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
SNS.alignments = {
  'lg': "SNS.AlignmentLG",
  'ng': "SNS.AlignmentNG",
  'cg': "SNS.AlignmentCG",
  'ln': "SNS.AlignmentLN",
  'tn': "SNS.AlignmentTN",
  'cn': "SNS.AlignmentCN",
  'le': "SNS.AlignmentLE",
  'ne': "SNS.AlignmentNE",
  'ce': "SNS.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types
 * @enum {number}
 */
SNS.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2,
}

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
SNS.attunements = {
  0: "SNS.AttunementNone",
  1: "SNS.AttunementRequired",
  2: "SNS.AttunementAttuned"
};

/* -------------------------------------------- */


SNS.weaponProficiencies = {
  "sim": "SNS.WeaponSimpleProficiency",
  "mar": "SNS.WeaponMartialProficiency"
};

SNS.toolProficiencies = {
  "art": "SNS.ToolArtisans",
  "disg": "SNS.ToolDisguiseKit",
  "forg": "SNS.ToolForgeryKit",
  "game": "SNS.ToolGamingSet",
  "herb": "SNS.ToolHerbalismKit",
  "music": "SNS.ToolMusicalInstrument",
  "navg": "SNS.ToolNavigators",
  "pois": "SNS.ToolPoisonersKit",
  "thief": "SNS.ToolThieves",
  "vehicle": "SNS.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
SNS.timePeriods = {
  "inst": "SNS.TimeInst",
  "turn": "SNS.TimeTurn",
  "round": "SNS.TimeRound",
  "minute": "SNS.TimeMinute",
  "hour": "SNS.TimeHour",
  "day": "SNS.TimeDay",
  "month": "SNS.TimeMonth",
  "year": "SNS.TimeYear",
  "perm": "SNS.TimePerm",
  "spec": "SNS.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
SNS.abilityActivationTypes = {
  "none": "SNS.None",
  "action": "SNS.Action",
  "bonus": "SNS.BonusAction",
  "reaction": "SNS.Reaction",
  "minute": SNS.timePeriods.minute,
  "hour": SNS.timePeriods.hour,
  "day": SNS.timePeriods.day,
  "special": SNS.timePeriods.spec,
  "legendary": "SNS.LegAct",
  "shipact": "SNS.ShipAct",
  "lair": "SNS.LairAct",
  "crew": "SNS.VehicleCrewAction"
};

/* -------------------------------------------- */


SNS.abilityConsumptionTypes = {
  "ammo": "SNS.ConsumeAmmunition",
  "attribute": "SNS.ConsumeAttribute",
  "material": "SNS.ConsumeMaterial",
  "charges": "SNS.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
SNS.actorSizes = {
  "tiny": "SNS.SizeTiny",
  "sm": "SNS.SizeSmall",
  "med": "SNS.SizeMedium",
  "lg": "SNS.SizeLarge",
  "huge": "SNS.SizeHuge",
  "grg": "SNS.SizeGargantuan"
};

SNS.tokenSizes = {
  "tiny": 0.6,
  "sm": 0.8,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

// Vehicle Classifications
SNS.actorVehicleClasses = {
  "terClass": "SNS.VehicleClassificationTerrestrial",
  "shipClass": "SNS.VehicleClassificationSpaceship"
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
SNS.itemActionTypes = {
  "mwak": "SNS.ActionMWAK",
  "rwak": "SNS.ActionRWAK",
  "msak": "SNS.ActionMSAK",
  "rsak": "SNS.ActionRSAK",
  "save": "SNS.ActionSave",
  "heal": "SNS.ActionHeal",
  "abil": "SNS.ActionAbil",
  "util": "SNS.ActionUtil",
  "other": "SNS.ActionOther"
};

/* -------------------------------------------- */

SNS.itemCapacityTypes = {
  "items": "SNS.ItemContainerCapacityItems",
  "weight": "SNS.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
SNS.limitedUsePeriods = {
  "sr": "SNS.ShortRest",
  "lr": "SNS.LongRest",
  "day": "SNS.Day",
  "charges": "SNS.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
SNS.equipmentTypes = {
  "light": "SNS.EquipmentLight",
  "medium": "SNS.EquipmentMedium",
  "heavy": "SNS.EquipmentHeavy",
  "bonus": "SNS.EquipmentBonus",
  "natural": "SNS.EquipmentNatural",
  "shield": "SNS.EquipmentShield",
  "clothing": "SNS.EquipmentClothing",
  "modification": "SNS.EquipmentModification",
  "cyberware": "SNS.EquipmentCyberware",
  "bioware": "SNS.EquipmentBioware",
  "computer": "SNS.EquipmentComputer",
  "software": "SNS.EquipmentSoftware",
  "trinket": "SNS.EquipmentTrinket",
  "vehicle": "SNS.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
SNS.armorProficiencies = {
  "lgt": SNS.equipmentTypes.light,
  "med": SNS.equipmentTypes.medium,
  "hvy": SNS.equipmentTypes.heavy,
  "shl": "SNS.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
SNS.consumableTypes = {
  "ammo": "SNS.ConsumableAmmunition",
  "explosive": "SNS.ConsumableExplosive",
  "potion": "SNS.ConsumablePotion",
  "poison": "SNS.ConsumablePoison",
  "drug": "SNS.ConsumableDrug",
  "food": "SNS.ConsumableFood",
  "scroll": "SNS.ConsumableScroll",
  "wand": "SNS.ConsumableWand",
  "rod": "SNS.ConsumableRod",
  "trinket": "SNS.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the SnS system
 * @type {Object}
 */
SNS.currencies = {
  "gp": "SNS.CurrencyGP",
  "cc": "SNS.CurrencyCC"
};


/* -------------------------------------------- */


// Damage Types
SNS.damageTypes = {
  "acid": "SNS.DamageAcid",
  "ballistic": "SNS.DamageBallistic",
  "bludgeoning": "SNS.DamageBludgeoning",
  "cold": "SNS.DamageCold",
  "fire": "SNS.DamageFire",
  "force": "SNS.DamageForce",
  "lightning": "SNS.DamageLightning",
  "necrotic": "SNS.DamageNecrotic",
  "piercing": "SNS.DamagePiercing",
  "plasma": "SNS.DamagePlasma",
  "poison": "SNS.DamagePoison",
  "psychic": "SNS.DamagePsychic",
  "radiant": "SNS.DamageRadiant",
  "slashing": "SNS.DamageSlashing",
  "thunder": "SNS.DamageThunder"
};

// Damage Resistance Types
SNS.damageResistanceTypes = mergeObject(duplicate(SNS.damageTypes), {
  "physical": "SNS.DamagePhysical"
});


/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SNS.movementTypes = {
  "burrow": "SNS.MovementBurrow",
  "climb": "SNS.MovementClimb",
  "fly": "SNS.MovementFly",
  "swim": "SNS.MovementSwim",
  "zerog": "SNS.MovementZeroG",
  "walk": "SNS.MovementWalk",
  "maxspeed": "SNS.MovementMaxSpeed",
  "mph": "SNS.MovementMPH",
}

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SNS.movementUnits = {
  "ft": "SNS.DistFt",
  "mi": "SNS.DistMi",
  "arc": "SNS.DistArc"
}

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from SNS.movementUnits
 * @type {Object<string,string>}
 */
SNS.distanceUnits = {
  "none": "SNS.None",
  "self": "SNS.DistSelf",
  "touch": "SNS.DistTouch",
  "spec": "SNS.Special",
  "any": "SNS.DistAny"
};
for ( let [k, v] of Object.entries(SNS.movementUnits) ) {
  SNS.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
SNS.encumbrance = {
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
SNS.targetTypes = {
  "none": "SNS.None",
  "self": "SNS.TargetSelf",
  "creature": "SNS.TargetCreature",
  "ally": "SNS.TargetAlly",
  "enemy": "SNS.TargetEnemy",
  "object": "SNS.TargetObject",
  "space": "SNS.TargetSpace",
  "radius": "SNS.TargetRadius",
  "sphere": "SNS.TargetSphere",
  "cylinder": "SNS.TargetCylinder",
  "cone": "SNS.TargetCone",
  "square": "SNS.TargetSquare",
  "cube": "SNS.TargetCube",
  "line": "SNS.TargetLine",
  "wall": "SNS.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are SNS target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
SNS.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
SNS.healingTypes = {
  "healing": "SNS.Healing",
  "temphp": "SNS.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
SNS.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @type {object}
 */
SNS.senses = {
  "blindsight": "SNS.SenseBlindsight",
  "darkvision": "SNS.SenseDarkvision",
  "ultraviolet": "SNS.SenseUltraviolet",
  "infrared": "SNS.SenseInfrared",
  "tremorsense": "SNS.SenseTremorsense",
  "truesight": "SNS.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
SNS.skills = {
  "acr": "SNS.SkillAcr",
  "arc": "SNS.SkillArc",
  "com": "SNS.SkillCom",
  "ath": "SNS.SkillAth",
  "dec": "SNS.SkillDec",
  "eti": "SNS.SkillEti",
  "his": "SNS.SkillHis",
  "ins": "SNS.SkillIns",
  "itm": "SNS.SkillItm",
  "inv": "SNS.SkillInv",
  "mec": "SNS.SkillMec",
  "med": "SNS.SkillMed",
  "prc": "SNS.SkillPrc",
  "per": "SNS.SkillPer",
  "pil": "SNS.SkillPil",
  "sci": "SNS.SkillSci",
  "ste": "SNS.SkillSte",
  "sur": "SNS.SkillSur"
};


/* -------------------------------------------- */

SNS.spellPreparationModes = {
  "prepared": "SNS.SpellPrepPrepared",
  "pact": "SNS.PactMagic",
  "always": "SNS.SpellPrepAlways",
  "atwill": "SNS.SpellPrepAtWill",
  "innate": "SNS.SpellPrepInnate",
  "invention": "SNS.Invention",
  "battery": "SNS.Battery"
};

SNS.spellUpcastModes = ["always", "pact", "prepared", "battery"];

SNS.spellProgression = {
  "none": "SNS.SpellNone",
  "full": "SNS.SpellProgFull",
  "half": "SNS.SpellProgHalf",
  "third": "SNS.SpellProgThird",
  "pact": "SNS.SpellProgPact",
  "artificer": "SNS.SpellProgArt",
  "psion": "SNS.SpellProgPsion",
  "battery": "SNS.SpellProgBattery"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
SNS.spellScalingModes = {
  "none": "SNS.SpellNone",
  "cantrip": "SNS.SpellCantrip",
  "level": "SNS.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
SNS.weaponTypes = {
  "simpleM": "SNS.WeaponSimpleM",
  "simpleR": "SNS.WeaponSimpleR",
  "martialM": "SNS.WeaponMartialM",
  "martialR": "SNS.WeaponMartialR",
  "natural": "SNS.WeaponNatural",
  "improv": "SNS.WeaponImprov",
  "siege": "SNS.WeaponSiege"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
SNS.weaponProperties = {
  "ada": "SNS.WeaponPropertiesAda",
  "aut": "SNS.WeaponPropertiesAut",
  "amm": "SNS.WeaponPropertiesAmm",
  "bul": "SNS.WeaponPropertiesBul",
  "blin": "SNS.WeaponPropertiesBlin",
  "dst": "SNS.WeaponPropertiesDst",
  "deaf": "SNS.WeaponPropertiesDeaf",
  "deto": "SNS.WeaponPropertiesDeto",
  "fin": "SNS.WeaponPropertiesFin",
  "fir": "SNS.WeaponPropertiesFir",
  "foc": "SNS.WeaponPropertiesFoc",
  "hvy": "SNS.WeaponPropertiesHvy",
  "lgt": "SNS.WeaponPropertiesLgt",
  "lod": "SNS.WeaponPropertiesLod",
  "mgc": "SNS.WeaponPropertiesMgc",
  "ram": "SNS.WeaponPropertiesRam",
  "radi": "SNS.WeaponPropertiesRadi",
  "rch": "SNS.WeaponPropertiesRch",
  "rech": "SNS.WeaponPropertiesRech",
  "rel": "SNS.WeaponPropertiesRel",
  "ret": "SNS.WeaponPropertiesRet",
  "scp": "SNS.WeaponPropertiesScp",
  "sil": "SNS.WeaponPropertiesSil",
  "slow": "SNS.WeaponPropertiesSlow",
  "spc": "SNS.WeaponPropertiesSpc",
  "crf": "SNS.WeaponPropertiesCrf",
  "cone": "SNS.WeaponPropertiesCone",
  "thr": "SNS.WeaponPropertiesThr",
  "tmr": "SNS.WeaponPropertiesTmr",
  "two": "SNS.WeaponPropertiesTwo",
  "ver": "SNS.WeaponPropertiesVer",
  "vhc": "SNS.WeaponPropertiesVhc"
};


// Spell Components
SNS.spellComponents = {
  "V": "SNS.ComponentVerbal",
  "S": "SNS.ComponentSomatic",
  "M": "SNS.ComponentMaterial"
};

// Spell Schools
SNS.spellSchools = {
  "abj": "SNS.SchoolAbj",
  "con": "SNS.SchoolCon",
  "div": "SNS.SchoolDiv",
  "enc": "SNS.SchoolEnc",
  "evo": "SNS.SchoolEvo",
  "ill": "SNS.SchoolIll",
  "nec": "SNS.SchoolNec",
  "trs": "SNS.SchoolTrs"
};

// Spell Levels
SNS.spellLevels = {
  0: "SNS.SpellLevel0",
  1: "SNS.SpellLevel1",
  2: "SNS.SpellLevel2",
  3: "SNS.SpellLevel3",
  4: "SNS.SpellLevel4",
  5: "SNS.SpellLevel5",
  6: "SNS.SpellLevel6",
  7: "SNS.SpellLevel7",
  8: "SNS.SpellLevel8",
  9: "SNS.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
SNS.spellScrollIds = {
  0: 'Compendium.sns.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.sns.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.sns.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.sns.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.sns.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.sns.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.sns.items.tI3rWx4bxefNCexS',
  7: 'Compendium.sns.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.sns.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.sns.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
SNS.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

/**
 * Define the psion slot progression by character level.
 * The entries of this array represent the spell slot progression for a Psion-type spell-caster.
 * @type {Array[]}
 */
SNS.PSION_SPELL_SLOT_TABLE = [
  [2],
  [3],
  [3],
  [4, 2],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 2],
  [4, 3, 2],
  [4, 3, 3, 2],
  [4, 3, 3, 2],
  [4, 3, 3, 2],
  [4, 3, 3, 2, 2],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2],
  [4, 4, 3, 3, 3],
  [4, 4, 3, 3, 3],
  [4, 4, 3, 3, 3]
];

/* -------------------------------------------- */

// Polymorph options.
SNS.polymorphSettings = {
  keepPhysical: 'SNS.PolymorphKeepPhysical',
  keepMental: 'SNS.PolymorphKeepMental',
  keepSaves: 'SNS.PolymorphKeepSaves',
  keepSkills: 'SNS.PolymorphKeepSkills',
  mergeSaves: 'SNS.PolymorphMergeSaves',
  mergeSkills: 'SNS.PolymorphMergeSkills',
  keepClass: 'SNS.PolymorphKeepClass',
  keepFeats: 'SNS.PolymorphKeepFeats',
  keepSpells: 'SNS.PolymorphKeepSpells',
  keepItems: 'SNS.PolymorphKeepItems',
  keepBio: 'SNS.PolymorphKeepBio',
  keepVision: 'SNS.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
SNS.proficiencyLevels = {
  0: "SNS.NotProficient",
  1: "SNS.Proficient",
  0.5: "SNS.HalfProficient",
  2: "SNS.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
SNS.cover = {
  0: 'SNS.None',
  .5: 'SNS.CoverHalf',
  .75: 'SNS.CoverThreeQuarters',
  1: 'SNS.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
SNS.conditionTypes = {
  "blinded": "SNS.ConBlinded",
  "charmed": "SNS.ConCharmed",
  "deafened": "SNS.ConDeafened",
  "diseased": "SNS.ConDiseased",
  "exhaustion": "SNS.ConExhaustion",
  "frightened": "SNS.ConFrightened",
  "grappled": "SNS.ConGrappled",
  "incapacitated": "SNS.ConIncapacitated",
  "invisible": "SNS.ConInvisible",
  "paralyzed": "SNS.ConParalyzed",
  "petrified": "SNS.ConPetrified",
  "poisoned": "SNS.ConPoisoned",
  "prone": "SNS.ConProne",
  "restrained": "SNS.ConRestrained",
  "stunned": "SNS.ConStunned",
  "unconscious": "SNS.ConUnconscious"
};

// Languages
SNS.languages = {
  "binary": "SNS.LanguagesBinary",
  "brahvish": "SNS.LanguagesBrahvish",
  "celestial": "SNS.LanguagesCelestial",
  "domosian": "SNS.LanguagesDomosian",
  "eezonese": "SNS.LanguagesEezonese",
  "eldritch": "SNS.LanguagesEldritch",
  "galactic": "SNS.LanguagesGalactic",
  "galacticsign": "SNS.LanguagesGalacticSign",
  "glabraunish": "SNS.LanguagesGlabraunish",
  "hanadarian": "SNS.LanguagesHanadarian",
  "infernal": "SNS.LanguagesInfernal",
  "ixian": "SNS.LanguagesIxian",
  "kygoran": "SNS.LanguagesKygoran",
  "luminescentsign": "SNS.LanguagesLuminescentSign",
  "maeshar": "SNS.LanguagesMaeshar",
  "moiccaran": "SNS.LanguagesMoiccaran",
  "olaran": "SNS.LanguagesOlaran",
  "piranthese": "SNS.LanguagesPiranthese",
  "primordial": "SNS.LanguagesPrimordial",
  "sylvan": "SNS.LanguagesSylvan",
  "cant": "SNS.LanguagesThievesCant",
  "veeruxian": "SNS.LanguagesVeeruxian",
  "vresnish": "SNS.LanguagesVresnish"
};

// Character Level XP Requirements
SNS.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
SNS.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Tier XP Levels
SNS.TIER_EXP_LEVELS = [
  10, 1100, 3900, 8400, 15000, 25000, 62000
];

// Character Features Per Class And Level
SNS.classFeatures = ClassFeatures;

// Configure Optional Character Flags
SNS.characterFlags = {
  "diamondSoul": {
    name: "SNS.FlagsDiamondSoul",
    hint: "SNS.FlagsDiamondSoulHint",
    section: "Feats",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "SNS.FlagsElvenAccuracy",
    hint: "SNS.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "SNS.FlagsHalflingLucky",
    hint: "SNS.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "SNS.FlagsInitiativeAdv",
    hint: "SNS.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "SNS.FlagsAlert",
    hint: "SNS.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "SNS.FlagsJOAT",
    hint: "SNS.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "SNS.FlagsObservant",
    hint: "SNS.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "powerfulBuild": {
    name: "SNS.FlagsPowerfulBuild",
    hint: "SNS.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "reliableTalent": {
    name: "SNS.FlagsReliableTalent",
    hint: "SNS.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "SNS.FlagsRemarkableAthlete",
    hint: "SNS.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "SNS.FlagsWeaponCritThreshold",
    hint: "SNS.FlagsWeaponCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "spellCriticalThreshold": {
    name: "SNS.FlagsSpellCritThreshold",
    hint: "SNS.FlagsSpellCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "meleeCriticalDamageDice": {
    name: "SNS.FlagsMeleeCriticalDice",
    hint: "SNS.FlagsMeleeCriticalDiceHint",
    section: "Feats",
    type: Number,
    placeholder: 0
  },
};

// Configure allowed status flags
SNS.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(SNS.characterFlags));
