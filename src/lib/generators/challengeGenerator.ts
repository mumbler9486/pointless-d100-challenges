import type { Challenge, UnitRestriction } from "../challenge"
import { generateAdditonalChallenge } from "./additionalChallenge"
import { generateClass } from "./classGenerator"
import { generateConditions } from "./conditionGenerator"
import { generateUnitRestrictions } from "./unitGenerator"

export const generateChallenge = () => {
  const classPair = generateClass();
  const conditions = generateConditions();
  const additionalChallenge = generateAdditonalChallenge();

  const { backUnit, armsUnit, legsUnit } = generateUnitRestrictions();

  return {
    mainClass: classPair.main,
    subClass: classPair.sub,

    backUnitRestriction: backUnit,
    armsUnitRestriction: armsUnit,
    legsUnitRestriction: legsUnit,
    otherGearRestrictions: [''],

    skillRestrictions: [''],
    challenges: conditions,

    bigChallenge: additionalChallenge
  } as Challenge
}