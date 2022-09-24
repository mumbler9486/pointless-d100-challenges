import type { UnitRestriction } from "../units";
import { coinFlip, pickAFewRandomUniquely, pickRandom, randInt } from "../utils/random";

const s6Sgas = [
  "S6: Dodging Whistle",
  "S6: Evernight Star",
  "S6: Lucent Domain",
  "S6: Fortified Life Vessel",
  "S6: Fortified Photon V",
  "S6: Fortified Melee",
  "S6: Fortified Ranged",
  "S6: Fortified Technique",
  "S6: Guardian Shield",
  "S6: Heroic Howl",
  "S6: Miraculous Encore",
  "S6: Overflowing Life V",
  "S6: Shield of Carnage",
  "S6: Shield of the Sentinel",
  "S6: Skillful Adept",
  "S6: Soaring Heavendance",
  "S6: Soaring Wings",
  "S6: Soul Protection",
  "S6: Tenacious Healscourge",
  "S6: Escalating Expanse",
  "S6: Rainbow Shield",
];

const s7Sgas = [
  "S7: Empathic Communion",
  "S7: Fortified Attack",
  "S7: Fortified Attack 2",
  "S7: Fortified Melee",
  "S7: Fortified Melee 2",
  "S7: Fortified Ranged",
  "S7: Fortified Ranged 2",
  "S7: Fortified Technique",
  "S7: Fortified Technique 2",
  "S7: Fortified Life Vessel",
  "S7: Fortified Photon V",
  "S7: Supreme Perfection",
  "S7: Medicinal Potentiation",
  "S7: Still Grace",
  "S7: Dharma Boon",
  "S7: Targeted Aggression",
  "S7: Rainbow Adept",
  "S7: Concentrated Suidi",
];

const s8Sgas = [
  "S8: Fortified Life Vessel",
  "S8: Fortified Life Vessel 2",
  "S8: Fortified Photon V",
  "S8: Fortified Photon V 2",
  "S8: Fortified Melee",
  "S8: Fortified Ranged",
  "S8: Fortified Technique",
  "S8: Mighty Medication",
  "S8: Skydance Support",
  "S8: Resolute Flight",
  "S8: Rainbow Erode",
];

const backUnits = [
  "Back / Any 1* unit",
  "Back / Brissa Aery",
  "Sub / Stella Wall",
  "Sub / Solid Barrier",
  "Back / Circuray",
  "Back / Circunion",
  "Back / Ofzeterious (12*)",
  "Back / Ivlida Kibbs",
  "Back / Cleasis Kibbs",
  "Back / Phobos Coupe",
  "Back / Mask of Vane",
  "Back / Starquake Drape Mixion",
  "Back / Trailblazer Drape Mixion (12*)",
  "Back / Rappy Shine"
];

const backUnits13Star = [
  "Back / Any Divide Unit",
  "Back / Any 13* unit",
  "Back / Ekdyke Grudge",
  "Back / Avion Orb",
  "Back / Avion Dusk",
  "Back / Schvelle Kibbs",
  "Back / Atlas Shemel",
  "Back / Rivalate Ful",
  "Back / Trailblazer Drape Paxion (13*)",
  "Back / Ofzehazala",
  "Back / Novel Ful",
  "Back / Klauzdyne",
];

const armUnits = [
  "Arms / Any 1* unit",
  "Arms / Any <13* unit",
  "Arms / Brissa Oggi",
  "Sub / Stella Wall",
  "Sub / Solid Barrier",
  "Arms / Starquake Mount Luxion",
  "Arms / Trailblazer Mount Luxion (12*)",
  "Arms / Circaray",
  "Arms / Circaunion",
  "Arms / Phobos Hedge",
  "Arms / Cleasis Ritt",
  "Arms / Ivlida Ritt",
  "Arms / Ofzende (12*)"
];

const armUnits13Star = [
  "Arms / Any Divide Unit",
  "Arms / Any 13* unit",
  "Arms / Schvelle Ritt",
  "Arms / Atlas Chatten",
  "Arms / Rivalate One",
  "Arms / Trailblazer Mount Bixion (13*)",
  "Arms / Ofzeterico",
  "Arms / Novel One",
  "Arms / Klauznum",
];

const legUnits = [
  "Legs / Any 1* unit",
  "Legs / Any <13* unit",
  "Legs / Brissa Marni",
  "Sub / Stella Wall",
  "Sub / Solid Barrier",
  "Legs / Circuray",
  "Legs / Circunion",
  "Legs / Phobos Need",
  "Legs / Ivlida Cerbe",
  "Legs / Cleasis Cerbe",
  "Legs / Trailblazer Decor Dixion (12*)",
  "Legs / Starquake Decor Dixion",
  "Legs / Ofzetrogie (12*)"
];

const legUnits13Star = [
  "Legs / Any Divide Unit",
  "Legs / Any 13* unit",
  "Legs / Nova Selque",
  "Legs / Mirage Cell",
  "Legs / Atlas Kvar",
  "Legs / Rivalate Mas",
  "Legs / Trailblazer Decor Raxion (13*)",
  "Legs / Ofzereevle",
  "Legs / Novel Mas",
  "Legs / Klauzment",
];

const unitSeries13Star = [
  "Klauz series",
  "Novel Series",
  "Ofz series",
  "Trailblazer 13* series",
  "Rivalate Series",
  "Atlas Series",
  "Schevelle Series",
  "13* divide unit"
];

const unitSeries = [
  "Brissa Series",
  "Cleasis Series",
  "Starquake series",
  "Trailblazer 12* series",
  "Phobos series",
  "Sub / Solid Barrier",
  "Sub / Photon Barrier",
  "Sub / Weapon Barrier",
  "Back / Rappy Shine and Any"
];

const unitConditions = [
  "Only guardian soul affixed and rest is junk",
  "Augments you can only get from Augment Factors",
  "Must have a receptor type augment",
  "Unit grind level is less than +5",
  "Unit is not grinded (+0)",
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
  "Alright screw the unit chosen on this slot, go to a non-risk expedition, kill the boss, and the first unit you pick up is your unit. Do not upgrade/affix this unit.",
]

export const generateUnitRestrictions = () => {

  // Unit set
  const useUnitSet = coinFlip(0.8);
  if (useUnitSet) {
    return generateUnitSet();
  }

  // Unique unit per slot
  const backUnit = generateUnitRestriction(backUnits, backUnits13Star, s6Sgas);
  const armsUnit = generateUnitRestriction(armUnits, armUnits13Star, s7Sgas);
  const legsUnit = generateUnitRestriction(legUnits, legUnits13Star, s8Sgas);

  return {
    backUnit,
    armsUnit,
    legsUnit,
  };
}

const generateUnitSet = () => {
  const use13Star = coinFlip();
  const unitSet = use13Star ? pickRandom(unitSeries13Star) : pickRandom(unitSeries)
  const slots = randInt(0, 8);
  const restrictions = pickAFewRandomUniquely(unitConditions, randInt(1, 3));

  return {
    backUnit: {
      name: unitSet,
      sGradeAugment: use13Star ? getSGA(s6Sgas) : "None",
      slots: slots,
      restrictions
    } as UnitRestriction,
    armsUnit: {
      name: unitSet,
      sGradeAugment: use13Star ? getSGA(s7Sgas) : "None",
      slots: slots,
      restrictions
    } as UnitRestriction,
    legsUnit: {
      name: unitSet,
      sGradeAugment: use13Star ? getSGA(s8Sgas) : "None",
      slots: slots,
      restrictions
    } as UnitRestriction,
  }
}

const generateUnitRestriction = (
  pickFromUnits: string[],
  pickFrom13StarUnits: string[],
  pickFromSgas: string[]
) => {
  const slots = randInt(0, 8);

  // Generate unit to use
  const is13Star = coinFlip();
  let sga: string | undefined = "None";
  let unit = "None";

  if (is13Star) {
    unit = pickRandom(pickFrom13StarUnits)
    if (coinFlip(0.9)) {
      sga = pickRandom(pickFromSgas);
    }
    else {
      sga = "None";
    }
  }
  else {
    unit = pickRandom(pickFromUnits);
    sga = "None";
  }

  return {
    slots: slots,
    name: unit,
    sGradeAugment: sga,
    restrictions: generateRestrictions()
  } as UnitRestriction;
}

const getSGA = (sgaList: string[]) => {
  return coinFlip(0.9) ? pickRandom(sgaList) : "None";
}

const generateRestrictions = () => {
  return pickAFewRandomUniquely(unitConditions, randInt(1, 3))
}