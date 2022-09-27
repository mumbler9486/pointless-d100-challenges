import type { Challenge } from "../challenge"
import { generateBigChallenge } from "./bigChallenges"
import { generateClass } from "./classGenerator"
import { generateAdditionalChallenges } from "./additionalChallenges"
import { generateUnitRestrictions } from "./unitGenerator"
import { generateWeaponRestriction } from "./weaponConditions"
import { generateClassRestrictions } from "./classRestrictions"
import type { PlayerClass } from "../classes"

export const generateChallenge = (mainClassChoice?: PlayerClass, subClassChoice?: PlayerClass) => {
  const { main: generatedMainClass, sub: generatedSubClass } = generateClass(mainClassChoice, subClassChoice);

  const { backUnit, armsUnit, legsUnit } = generateUnitRestrictions();
  const weaponRestriction = generateWeaponRestriction(generatedMainClass);

  const classRestrictions = generateClassRestrictions(generatedMainClass);
  const conditions = generateAdditionalChallenges();

  const bigChallenge = generateBigChallenge();

  return {
    mainClass: generatedMainClass,
    subClass: generatedSubClass,

    backUnitRestriction: backUnit,
    armsUnitRestriction: armsUnit,
    legsUnitRestriction: legsUnit,

    weaponRestriction,

    classRestrictions: classRestrictions,
    otherChallenges: conditions,

    bigChallenge
  } as Challenge
}