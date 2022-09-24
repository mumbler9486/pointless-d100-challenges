import { PlayerClass } from "../classes";
import { WeaponType, weaponTypeLabelMap, type WeaponRestriction } from "../weapons";
import { coinFlip, pickAFewRandomUniquely, pickRandom, randInt } from "../utils/random";

const weaponSeries = [
  "Sealed Nodachi",
  "Klauz Series",
  "Fluxio/Rinser Series",
  "Darkweave Series",
  "Steel Series",
  "Puras Series",
  "Rivalate Series",
  "Vortex Series",
  "Croesus Series",
  "Trailblazer Series",
  "Atlas Ex Series",
  "Atlas Series",
  "Blood series",
  "Occuld Series",
  "Starquake Series",
  "Ophistia Series",
  "Dim Series",
  "Nike series",
  "Nemesis Series",
  "Raven Series",
  "Val Series",
  "Jutus Series",
  "Goblin Series",
  "Clifard Series",
  "Gix Series",
  "Zeinesis Series",
  "Homura Series",
  "Guren series",
  "Union Series",
  "Basilisk Series",
  "Cleasis Series",
  "Schevelle Series",
  "Ivlida Series",
  "Ray Series",
  "Nox Series",
  "Deo Series",
  "Lambda Series",
  "Sigma Series",
  "Deo Series",
  "Red Series",
  "Vita Series",
  "Phobos Series",
  "Revolsio Series",
  "Any weapon from Rising weapons badge 1-3 shop",
  "Any weapon from Rising weapons badge 4-5 shop",
  "Any weapon from Unique weapons badge shop",
  "Any 14* weapon or below",
  "Any 13* weapon or below",
  "Any 10* weapon or below",
];

// [] is a special category
const specialChallenge = [
  "Dropped from a seasonal only weapon",
  "Any all class weapon (must be off class)",
  "[Generic weapon series]",
  "[Only one weapon type from class]",
  "Non croesus collection folder weapon",
  "[Meme Series]",
  "Wildcard (any weapon)",
  "Wildcard (any non meta weapon at the time of any episode)",
  "No weapon (fist)",
  "Only use gunblade (luster must use all class non-gunblade)",
  "Go into an non-risk expedition, kill the boss, and the first weapon you pick up (including unappraised) applicable for your class is the weapon you main. Do not upgrade/affix this weapon."
];

interface MemeMap {
  [index: number]: string[];
}
const memeSeries = {
  [WeaponType.Sword]: [
    "Sealed Nodachi",
    "Elder Pain Omega",
    "Silent Tree",
    "D-AIS Saber"
  ],
  [WeaponType.WiredLance]: [
    "Genon Ziva",
    "Accure Charis",
    "Atus Charis",
    "Rainier Mirage",
    "Xerraire Caprice",
    "Let's Go Shiny!"
  ],
  [WeaponType.Partisan]: [
    "Titan Stinger",
    "Astra Gorge",
    "Bluesy Requiem",
    "Whatever looks like a sycthe (camo not allowed)",
  ],
  [WeaponType.TwinDaggers]: [
    "Pride of Byakko",
    "Genon Zafira",
    "Spring Tempest",
    "Treiwyn Mirage",
    "Chocolate Du Kuchen",
    "Sacrifice Falspawn"
  ],
  [WeaponType.DoubleSabers]: [
    "Finblegem",
    "Fraulein Rose",
    "Roguele Nova",
    "Ultimate Chain",
    "Shinonome Enbu",
    "Twin Lotus",
    "Aurg's Medeo",
    "Detonation Fel",
    "Meteor Cudgel",
    "Quartz Calibur v2",
    "Nyoibo",
    "Luxa Lola"
  ],
  [WeaponType.Knuckles]: [
    "Phantasm Ship Artillery",
    "Titan Smasher",
    "Martial Strikers",
    "Weiss Comet",
    "Lionheart Knuckles",
    "Riddle Mole",
    "Glayer Nova",
    "Gear Experience"
  ],
  [WeaponType.Katana]: [
    "Ritter's Order",
    "Shinonome Kizan",
    "Mystical Moonlit Night",
    "Dia Bascht",
    "Yamigarasu",
    "Yasha",
    "Agito"
  ],
  [WeaponType.SoaringBlades]: [
    "World of Guardians",
    "Finbleleat",
    "Orgei Malice",
    "Jupiter Tullus",
    "Tactio Ampacia",
    "Xerraire Schulp",
    "Grand Cross",
    "Twin Orochi"
  ],
  [WeaponType.Gunblade]: [
    "Lumignie",
    "Bayonect Dusk",
    "Anacates Himmel",
    "Sein Burn",
    "Mercenary Star Rod",
    "Fornis Haluv",
    "Idesigure",
    "Automata Blade Mech Katar",
    "Gunblade Zero",
    "EXP Weapon Mini",
    "EXP Weapon",
    "Vraolet"
  ],
  [WeaponType.AssaultRifle]: [
    "Spread Needle",
    "Elder Rifle",
    "Satellite Star Mine",
    "Genon Savah",
    "Vante Weihen",
    "Holy Ray",
    "Whatever looks a realistic gun (camo not allowed)",
    "Xerraire Kersch",
    "Divine Fists",
    "Vortex Bide"
  ],
  [WeaponType.Launcher]: [
    "Combat Cannon",
    "Crush Launcher Ticia",
    "Kasumibayashi",
    "Ikariboshi Cannon",
    "Stragio Casrk",
    "Welk Nacelle",
    "Yasminokov 4000F",
    "D-AIS Blaster",
    "Farewell Inferno v2",
    "SSPN Launcher",
    "Tal Rappy Cannon"
  ],
  [WeaponType.TwinMachineGuns]: [
    "Rescue Guns-C",
    "Rescue Guns",
    "Aestoria",
    "Orgei Rancor",
    "Twin Fire Moons",
    "Three Strike Phantasm Guns",
    "Historica",
    "Whatever weapon looks like a realistic gun (camo not allowed)"
  ],
  [WeaponType.Bow]: [
    "Hard Cross Bullet",
    "Radius Arka",
    "Tactio Frazen",
    "Hard Recurve",
    "Solid Recurve",
    "Susano Hiki",
    "Longbow",
    "Bigglow v2 (GG global use Bigglow)"
  ],
  [WeaponType.Rod]: [
    "Megalith Rod",
    "Anacates Logiarda",
    "Love Phoenix",
    "Whatever looks a sycthe (camo not allowed)",
    "Grand Foicerer"
  ],
  [WeaponType.Talis]: [
    "Adell Beige",
    "Mufi Sucre",
    "Iclusio Culte",
    "Motav's Forbidden Book",
    "Gift Sack",
    "Dream Master",
    "Rappy Fan Fan",
    "Hitogata"
  ],
  [WeaponType.Wand]: [
    "Eightrei Nova",
    "Guwen Puras",
    "Whatever is hammer/axe shaped (camo not allowed)",
    "Clarte Dolce",
    "Lavis Cannon",
    "Lamia Dran",
    "Divine Staff Tsukuyomi"
  ],
  [WeaponType.JetBoots]: [
    "Sholid Nova",
    "Serpent Prenzer",
    "Flowery Breeze",
    "Boots of Gabriel",
    "Zirenheit",
    "Lightning Claw Tagami Kouga",
    "Jet Washer"
  ],
  [WeaponType.Harmonizer]: [
    "Aqua Ripple",
    "Millioraj Dusk",
    "Rykros Staff",
    "Impending Gale"
  ],
} as MemeMap;

const weaponConditions = [
  "Max weapon grind is +30 (with v3 pot)",
  "Max weapon grind is +20 (with v2 pot)",
  "Max weapon grind is +10 (with v1 pot",
  "Weapon grind is +0",
  "Only guardian soul affixed and rest is junk",
  "Augments you can only get from Augment Factors",
  "Must have a receptor type augment",
  "Must have a Ligand type augment",
  "Must use a Reaper/Slayer augment",
  "Must use a ward/panic/blind/poison augment",
  "Must have might boost",
  "Must have mastery V",
  "Must have a non guardian soul augment",
  "Must have a __ Di Soul type augment",
  "Not allowed to use Phrase type augments",
  "Must use an Exp Boost, Meseta Fever, or Lucky charm augment",
  "Must have a Rappy Fever augment",
  "Must have MIGHT BOOST",
  "Must have a Flict/Alter type augment",
  "Must have an EV or Lesser type augment",
  "Must have a Grand Stamina augment",
  "Must have an Exceed Receptor augment",
  "Must have a Divine Receptor augment",
  "Must have a Augment Guidence augment",
  "Must have a Fever type augment",
  "Must take as many augments that have at least 1 negative stat penalty",
  "Must maximize HP stat",
  "Must maximize defense stat",
  "Must maximize dex stat",
  "Must maximize PP stat",
  "Must have a catalyst augment",
  "If applicable do not affix an SGA in the S1 slot",
  "If applicable do not affix an SGA in the S2 slot",
  "If applicable do not affix an SGA in the S3 slot",
  "If applicable do not affix an SGA in the S4 slot",
  "If applicable do not affix an SGA in the S5 slot",
  "Do not use any SGA slot on this weapon if applicable",
  "Must use a Timeflow ___ type S-grade augment",
  "Must use S4: Lifesteal Strike"
];

const weaponApplicableClass = {
  [PlayerClass.Erper]: [
    WeaponType.Sword,
    WeaponType.WiredLance,
    WeaponType.Partisan,
    WeaponType.TwinDaggers,
    WeaponType.DoubleSabers,
    WeaponType.Knuckles,
    WeaponType.Katana,
    WeaponType.SoaringBlades,
    WeaponType.Gunblade,
    WeaponType.AssaultRifle,
    WeaponType.Launcher,
    WeaponType.TwinMachineGuns,
    WeaponType.Bow,
    WeaponType.Rod,
    WeaponType.Talis,
    WeaponType.Wand,
    WeaponType.JetBoots,
    WeaponType.Harmonizer,
    WeaponType.NoWeapon,
  ],
  [PlayerClass.Hunter]: [
    WeaponType.Sword,
    WeaponType.WiredLance,
    WeaponType.Partisan,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Fighter]: [
    WeaponType.TwinDaggers,
    WeaponType.DoubleSabers,
    WeaponType.Knuckles,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Ranger]: [
    WeaponType.AssaultRifle,
    WeaponType.Launcher,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Gunner]: [
    WeaponType.AssaultRifle,
    WeaponType.TwinMachineGuns,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Force]: [
    WeaponType.Rod,
    WeaponType.Talis,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Techer]: [
    WeaponType.Wand,
    WeaponType.Talis,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Braver]: [
    WeaponType.Bow,
    WeaponType.Katana,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Bouncer]: [
    WeaponType.SoaringBlades,
    WeaponType.JetBoots,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Summoner]: [
    WeaponType.Harmonizer,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Hero]: [
    WeaponType.Sword,
    WeaponType.Talis,
    WeaponType.TwinMachineGuns,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Phantom]: [
    WeaponType.Rod,
    WeaponType.AssaultRifle,
    WeaponType.Katana,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Etoile]: [
    WeaponType.SoaringBlades,
    WeaponType.DoubleSabers,
    WeaponType.Wand,
    WeaponType.Gunblade,
  ],
  [PlayerClass.Luster]: [
    WeaponType.Gunblade,
  ],
}

export const generateWeaponRestriction = (playerMainClass: PlayerClass) => {
  const weapon = pickWeapon(playerMainClass);
  const slots = randInt(0, 8);
  const restrictions = pickAFewRandomUniquely(weaponConditions, randInt(1, 3));

  return {
    name: weapon,
    slots,
    restrictions
  } as WeaponRestriction
}

const pickWeapon = (playerMainClass: PlayerClass) => {
  const useSeries = coinFlip(0.9);
  const weaponSeriesPicking = pickRandom(weaponSeries);
  if (useSeries) {
    return weaponSeriesPicking;
  }

  // Meme series or special challenge
  const meme = pickRandom(specialChallenge);
  if (meme == "[Generic weapon series]") {
    const weaponType = pickRandom(weaponApplicableClass[playerMainClass])
    const weaponLabel = weaponTypeLabelMap[weaponType];

    return `${weaponLabel} (that 1* Generic weapon)`;
  }
  if (meme == "[Only one weapon type from class]") {
    const weaponType = pickRandom(weaponApplicableClass[playerMainClass])
    const weaponLabel = weaponTypeLabelMap[weaponType];
    return `Use only ${weaponLabel} type weapons. (Utility weapons of other types not allowed either)`
  }
  if (meme == "[Meme Series]") {
    const weaponType = pickRandom(weaponApplicableClass[playerMainClass])
    const memeWeaponList = memeSeries[weaponType];
    return pickRandom(memeWeaponList);
  }

  return meme;
}