export interface Challenge {
  mainClass: string;
  subClass?: string;

  backUnitRestriction: UnitRestriction;
  armsUnitRestriction: UnitRestriction;
  legsUnitRestriction: UnitRestriction;
  otherGearRestrictions: string[];

  skillRestrictions: string[];
  challenges: string[];

  bigChallenge: string;
}

export interface UnitRestriction {
  name: string;
  slots: number;
  sGradeAugment: string;
  restrictions: string[];
}