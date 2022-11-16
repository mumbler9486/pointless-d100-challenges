import { pickRandom } from "../utils/random";
import { PlayerClass } from "../classes";
import { scionClasses, classes } from "../classes";

export interface ClassPairing {
  main: PlayerClass;
  sub?: PlayerClass;
}

export const generateClass = (fixedMain?: PlayerClass, fixedSub?: PlayerClass) => {
  if (fixedSub == PlayerClass.Hero) {
    throw new Error("Hero cannot be subclassed.");
  }

  if (fixedMain && scionClasses.includes(fixedMain)) {
    return {
      main: fixedMain,
      sub: undefined,
    } as ClassPairing;
  }

  if (!fixedMain && !fixedSub) {
    return generateRandomPairing();
  }

  if (fixedMain && !fixedSub) {
    return {
      main: fixedMain,
      sub: pickRandomSub(fixedMain)
    } as ClassPairing;
  }

  if (!fixedMain && fixedSub) {
    return {
      main: pickRandomMain(fixedSub),
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