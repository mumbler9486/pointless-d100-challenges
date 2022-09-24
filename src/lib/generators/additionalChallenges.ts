import { pickAFewRandomUniquely, pickRandom, randInt } from "../utils/random";

const modifiableChallenges = [
  'unitless',
  'ilgrants',
  'rivalate units',
  'one hand tied behind your back',
  'drinking mountain dew through your nose',
  'no skillful adept',
  'with no sub class',
  'brissa units',
  'weapon action',
  'switching to altas ex',
  'tanking blizzard',
  'sleep deprived',
  'with sound off',
  'with gshade shaders obnoxiously on',
  'smart pa',
  'shift kugel',
  'zanverse',
  'megiverse',
  'marron',
  'streaming while providing commentary with zero viewers',
  'cosplaying as a NPC',
  'trailblazer units',
  'trailblazer weapon',
  'genon',
  'using your feet',
  'controller',
  'your ring finger is tied down on your left hand',
  "you have a thick juicy bandaid on the joint of your left hand's finger",
  'your mom',
  'imaginary girlfriend is sitting on your lap',
  'mismatched elements',
  'premium weakpoint drink',
  'tree-buff',
  'taking matoi-buff',
  'million storm',
  'steady shot',
  'grenade round',
  'moai head',
  'spending a FULL scrape doll',
  'using a cosmos atomizor',
  'weaponless (fists)',
  "with a weapon camo you havn't ran with before",
  'switch to another 15* weapon on phase change',
  'using 1 PA from an all class weapon',
  'using a 1* weapon',
  'using croesus',
  'using novel',
  'using a 14* weapon',
  'while wearing booba upgrade',
  'gsoul but it is on a brissa unit',
  'phrase decay on your weapon but you cannot apply jellen to the boss ever',
  'always attacking sodam from behind',
  'wearing a bread mask',
  'your cat controls the right joy stick/mouse movement',
  'publishing a gif on tenor every time you fail to make it to gomo d100 phase',
  'intentionally skip final flaps',
  'finish exactly 1 second off from the timeout',
  '(htpd only) everyone starts NOT in the gateway ship',
  '(htpd only) no ranger weakbullets',
  'if you fail quest, delete account',
  'only allowed to use tech PAs via jet boots activation',
  '100% uptime on shifted massen',
  'might boost on all weapons and units',
  'at least 1 noble, 1 elegant, 1 graceful, and 1 grand augment spread on your units/weapons',
  'maximum weapon pot level is 1',
  '(htpd only) everyone uses the same weapon, use all class if you have to',
  'recover PP using ONLY normals',
  '(htpd only) everyone must stand in the same spot regardless of ranged/tech/mel type class',
  'ringless run',
  'change to a different weapon (weapon cannot be used for the rest of the run) every time you take a hit',
  'delete one of your best units for every quest fail',
  '(htpd only) every time your teammate says "brb" immediately start the quest or next phase while they\'re AFK'
];

const modifier = ['no', 'only', 'once a minute', '1x', '2x', '3x', '69x', ''];

export const generateAdditionalChallenges = () => {
  const challengeList = pickAFewRandomUniquely(modifiableChallenges, randInt(2, 6));

  const modifiedChal = [] as string[];
  challengeList.forEach((x) => {
    if (randInt(1, 6) < 3) {
      modifiedChal.push(x);
      return;
    }
    const modi = pickRandom(modifier);
    modifiedChal.push(`${modi} ${x}`);
  });

  return modifiedChal;
}