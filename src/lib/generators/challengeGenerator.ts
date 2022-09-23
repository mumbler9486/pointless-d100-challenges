import type { Challenge, GearRestriction } from "../challenge"
import { generateAdditonalChallenge } from "./additionalChallenge"
import { generateClass } from "./classGenerator"
import { generateConditions } from "./conditionGenerator"

export const generateChallenge = () => {
  const classPair = generateClass();
  const conditions = generateConditions();
  const additionalChallenge = generateAdditonalChallenge();

  return {
    mainClass: classPair.main,
    subClass: classPair.sub,

    backUnitRestriction: {} as GearRestriction,
    armsUnitRestriction: {} as GearRestriction,
    legsUnitRestriction: {} as GearRestriction,
    otherGearRestrictions: [''],

    skillRestrictions: [''],
    challenges: conditions,

    bigChallenge: additionalChallenge
  } as Challenge
}