import { pickRandom } from "../utils/random";
import { PlayerClass } from "../classes";

const scionClasses = [
  PlayerClass.Hero,
  PlayerClass.Phantom,
  PlayerClass.Etoile,
  PlayerClass.Luster,
];

const classes = [
  PlayerClass.Erper,
  PlayerClass.Hunter,
  PlayerClass.Fighter,
  PlayerClass.Ranger,
  PlayerClass.Gunner,
  PlayerClass.Force,
  PlayerClass.Techer,
  PlayerClass.Braver,
  PlayerClass.Bouncer,
  PlayerClass.Summoner,
  ...scionClasses
];

export interface ClassPairing {
  main: PlayerClass;
  sub?: PlayerClass;
}

export const generateClass = () => {
  const main = pickRandom(classes);

  //Scions cannot have sub
  if (scionClasses.includes(main)) {
    return {
      main: main,
    } as ClassPairing
  }

  const sub = pickRandom(classes.filter(c => c != main && c != "Hero"));

  return {
    main,
    sub
  } as ClassPairing;
}