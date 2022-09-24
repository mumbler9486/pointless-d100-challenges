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

  skillRestrictions: string[];
  challenges: string[];

  bigChallenge: string;
}
