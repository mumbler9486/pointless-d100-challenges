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

export const generateClass = (fixedMain?: PlayerClass, fixedSub?: PlayerClass) => {
  if (fixedMain && scionClasses.includes(fixedMain)) {
    return {
      main: fixedMain,
      sub: undefined,
    } as ClassPairing;
  }

  if (fixedSub && scionClasses.includes(fixedSub)) {
    return {
      main: fixedSub,
      sub: undefined,
    } as ClassPairing;
  }

  if (!fixedMain && !fixedSub) {
    return generateRandomPairing();
  }

  if (fixedMain && !fixedSub) {
    const sub = pickRandomSub(fixedMain);
    return {
      main: fixedMain,
      sub
    } as ClassPairing;
  }

  if (!fixedMain && fixedSub) {
    const main = pickRandomMain(fixedSub);
    return {
      main,
      sub: fixedSub
    } as ClassPairing;
  }

  return {
    main: fixedMain,
    sub: fixedSub,
  } as ClassPairing;
}

const pickRandomSub = (fixedMain: PlayerClass) => {
  if (fixedMain == PlayerClass.Hero) return undefined;

  return pickRandom(classes.filter(c => c != fixedMain && c != "Hero"));
}

const pickRandomMain = (fixedSub?: PlayerClass) => {
  if (!fixedSub) {
    return pickRandom(classes);
  }

  return pickRandom(classes.filter(c => c != fixedSub && !scionClasses.includes(c)))
}

const generateRandomPairing = () => {
  const main = pickRandom(classes);

  //Scions cannot have sub
  if (scionClasses.includes(main)) {
    return {
      main: main,
    } as ClassPairing
  }

  const sub = pickRandomSub(main)

  return {
    main,
    sub
  } as ClassPairing;
}