import { pickRandom } from "../utils/random";

const scionClasses = [
  'Hero',
  'Phantom',
  'Etoile',
  'Luster',
];

const classes = [
  'Erper (*wildcard)',
  'Hunter',
  'Fighter',
  'Ranger',
  'Gunner',
  'Force',
  'Techer',
  'Braver',
  'Bouncer',
  'Bouncer',
  'Summoner',
  ...scionClasses
];

export interface Class {
  main: string;
  sub?: string;
}

export const generateClass = () => {
  const main = pickRandom(classes);

  //Scions cannot have sub
  if (scionClasses.includes(main)) {
    return {
      main,
    } as Class
  }

  const sub = pickRandom(classes.filter(c => c != main && c != "Hero"));

  return {
    main,
    sub
  } as Class;
}