import type { Challenge } from "../challenge"
import { generateAdditonalChallenge } from "./additionalChallenge"
import { generateClass } from "./classGenerator"
import { generateConditions } from "./conditionGenerator"
import { generateUnitRestrictions } from "./unitGenerator"
import { generateWeaponRestriction } from "./weaponConditions"

export const generateChallenge = () => {
  const { main: mainClass, sub: subClass } = generateClass();
  const conditions = generateConditions();
  const additionalChallenge = generateAdditonalChallenge();

  const { backUnit, armsUnit, legsUnit } = generateUnitRestrictions();
  const weaponRestriction = generateWeaponRestriction(mainClass);

  return {
    mainClass: mainClass,
    subClass: subClass,

    backUnitRestriction: backUnit,
    armsUnitRestriction: armsUnit,
    legsUnitRestriction: legsUnit,

    weaponRestriction,

    skillRestrictions: [''],
    challenges: conditions,

    bigChallenge: additionalChallenge
  } as Challenge
}