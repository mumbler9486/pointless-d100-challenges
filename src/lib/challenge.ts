import type { PlayerClass } from "./classes";
import type { WeaponRestriction } from "./weapons";
import type { UnitRestriction } from "./units";

export interface Challenge {
  mainClass: PlayerClass;
  subClass?: PlayerClass;

  backUnitRestriction: UnitRestriction;
  armsUnitRestriction: UnitRestriction;
  legsUnitRestriction: UnitRestriction;

  weaponRestriction: WeaponRestriction;

  classRestrictions: string[];
  otherChallenges: string[];

  bigChallenge: string;
}
