import { pickRandom } from "../utils/random";

const additionalChallenges = [
  'skipping wind phase',
  'every triple slam you must take damage',
  'pool diving',
  'reading fleet chat and complaining about how sodam skates',
  'going on fleet chat to tell everyone how you were able to do one thing differently and that saved you 1 second of time after only 1 attempt',
  'getting all goddess buffs',
  'your mom is cleaning your room',
  '"are you winning son?"',
  'always walking towards tornado',
  'writing a love letter to your waifu',
  'bench pressing your mom',
  'drawing me like one of your anime waifus',
  'attempting the run at 6969 hours total play time',
  'after coming back from a 4 month+ haitus',
  'while in class',
  'every minute you must @ a discord moderator in UWU speak professing your love',
  'minimizing the number of jumps used (including PAs that put you in the air)',
  'standing completely still',
  'absolutely no dodging (but iframes are ok)',
  'absolutely no iframes (but dodges are ok)',
  'absolutely no counters',
  'whenever sodam is stunned take 1000 damage using genon, no healing for 1 minute',
  'even though te buff is not allowed in d100 (I know, I know), go to expedition and have someone te buff you with a deband ONLY for no reason every time you start the quest',
  'following a youtube guide for the class from 3 years ago prior to NGS release in NA',
  'sc5 dance once every time sodam does the 2 swipes attack',
  'while watching the episode oracle anime at 15x speed, every time Matoi takes a hit punched, take 1000 damage with genon',
  'everytime someone in fleet chat asks "when/is maint?", lookup the maint schedule in their timezone and reply with a discord timestamped message'
];

export const generateAdditonalChallenge = () => {
  return pickRandom(additionalChallenges);
}