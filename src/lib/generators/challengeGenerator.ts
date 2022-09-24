import type { Challenge } from "../challenge"
import { generateBigChallenge } from "./bigChallenges"
import { generateClass } from "./classGenerator"
import { generateAdditionalChallenges } from "./additionalChallenges"
import { generateUnitRestrictions } from "./unitGenerator"
import { generateWeaponRestriction } from "./weaponConditions"

export const generateChallenge = () => {
  const { main: mainClass, sub: subClass } = generateClass();
  const conditions = generateAdditionalChallenges();
  const bigChallenge = generateBigChallenge();

  const { backUnit, armsUnit, legsUnit } = generateUnitRestrictions();
  const weaponRestriction = generateWeaponRestriction(mainClass);

  return {
    mainClass: mainClass,
    subClass: subClass,

    backUnitRestriction: backUnit,
    armsUnitRestriction: armsUnit,
    legsUnitRestriction: legsUnit,

    weaponRestriction,

    classRestrictions: [''],
    otherChallenges: conditions,

    bigChallenge
  } as Challenge
}