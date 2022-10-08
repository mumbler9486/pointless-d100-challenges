import { PlayerClass } from "../classes"
import { pickAFewRandomUniquely, randInt } from "../utils/random"

const classRestrictions = {
  [PlayerClass.Erper]: [
    "Bikini only",
    "Ballooned Bosom or other accessory must cover entire character",
    "Use every Auto-chat slot with cut-ins",
    "Using suit mini, be abnoxiously large as possible with accessories covering entire body and beyond",
    "Play using only 3 camera angles (No OTS)",
  ],
  [PlayerClass.Hunter]: [
    "No automate",
    "Weapon action banned",
    "Blaze parry banned",
    "Iron will skill banned",
    "Massive Hunter banned",
    "Must use maxed fury stance",
    "Phrase decay on your weapon but you cannot apply jellen to the boss ever",
  ],
  [PlayerClass.Fighter]: [
    "Counter banned",
    "Must remain at 70% health or higher",
    "Double Saber Whirlwind (L) skill ring banned (including attached to units)",
    "Max 100 Weapon Action activations in the run",
    "Must use wise stance only and attack from behind"
  ],
  [PlayerClass.Ranger]: [
    "Steady shot only",
    "Impact slider only",
    "Grenades and traps banned",
    "Must use Deceptor double at least every 2 minutes",
    "Blight round banned",
    "Must use jellen shot at least every 2 minutes",
    "Homing volley (including custom) banned",
    "Precision blight rounds ring banned (including attached to units)",
    "Weak bullet must go on the body and not the core"
  ],
  [PlayerClass.Gunner]: [
    "Weapon action banned",
    "Never reach 90+ combo",
    "S-roll banned",
    "Max 100 Weapon Action activations in the run",
  ],
  [PlayerClass.Force]: [
    "Use only one tech element type for all techs",
    "Anti banned",
    "Every minute you must nagrants",
    "Must use simple compound techs"
  ],
  [PlayerClass.Techer]: [
    "No Deband/Shifta activation (including from equipment and affixes)",
    "Talis only",
    "Keep PP above 40% (or just 40% off your PP bar)"
  ],
  [PlayerClass.Braver]: [
    "Pierce Arrow banned",
    "Stand completely still, dodge/counter allowed",
    "Asagiri banned",
    "Shunka banned",
    "Counter banned",
    "Steadfast will katana",
    "Use Weak stance bow in phase 3",
    "Million storm must be used for 5 seconds every 2 minutes",
    "Max 100 Weapon Action activations in the run",
  ],
  [PlayerClass.Bouncer]: [
    "Cannot activate techs by weapon action",
    "When using strike gust, must hold for at least 5 seconds",
    "When closing distance, always approach with soaring blades weapon action spam",
    "Max 100 Weapon Action activations in the run",
  ],
  [PlayerClass.Summoner]: [
    "Marron banned",
    "Sweet box empty",
    "Popple only",
    "Viola only",
    "Randomly pick your sweetbox using a dice roll for each slot",
    "Phrase decay on your weapon but you cannot apply jellen to the boss ever",
  ],
  [PlayerClass.Hero]: [
    "Every phase change, change weapons, use that weapon for the entire phase",
    "Must puke dive",
    "Anti banned",
    "Hero finish banned",
    "Megiverse banned",
  ],
  [PlayerClass.Phantom]: [
    "Every phase change, change weapons, use that weapon for the entire phase",
    "Use only one tech element type for all techs",
    "Light techs banned",
    "Wear only black clothes",
    "For every auto chat related to an attack, name your attacks a cheesy anime-like name",
    "Use only the Phantom rod PAs (only shifta/deband/resta/anti allowed)",
    "Stand completely still, dodge counter allowed",
    "Shift kugel for 5 seconds every 2 minutes",
    "Phantom finish banned",
    "Zanverse banned",
    "Phrase decay on your weapon but you cannot apply jellen to the boss ever",
    "100% uptime on shifted massen",
    "Must use the meme Ph sub pallete",
    "Max 100 Weapon Action activations in the run",
  ],
  [PlayerClass.Etoile]: [
    "Every phase change, change weapons, use that weapon for the entire phase",
    "Damage bouncer banned (set to 0)",
    "Weapon gear attack actions banned (counter allowed)",
    "Every time you use a PA, the next one you must use a different PA or attack",
    "Etoile standing massive banned",
    "Max 100 Weapon Action activations in the run",
  ],
  [PlayerClass.Luster]: [
    "Every phase change, change styles, use that style for the entire phase (purge style banned)",
    "When countering, only side-step counters",
    "Use only stay-arts PAs",
    "Every time you use a PA, the next one you must use a different PA or attack",
    "Luster finish banned",
    "Stay below 500 volts",
    "Smart PA only",
    "Phrase decay on your weapon but you cannot apply jellen to the boss ever",
    "Max 100 Weapon Action activations in the run",
  ],
};

export const generateClassRestrictions = (playerMainClass: PlayerClass) => {
  const restrictions = classRestrictions[playerMainClass];

  return pickAFewRandomUniquely(restrictions, randInt(0, 3))
}