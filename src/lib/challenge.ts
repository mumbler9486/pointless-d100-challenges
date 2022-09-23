export interface Challenge {
  mainClass: string;
  subClass?: string;

  backUnitRestriction: GearRestriction;
  armsUnitRestriction: GearRestriction;
  legsUnitRestriction: GearRestriction;
  otherGearRestrictions: string[];

  skillRestrictions: string[];
  challenges: string[];

  bigChallenge: string;
}

export interface GearRestriction {
  part: string;
  slots: number;
  restriction: string;
}