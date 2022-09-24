import type { PlayerClass } from "../classes"
import { pickAFewRandomUniquely, randInt } from "../utils/random"

export const generateClassRestrictions = (playerClass: PlayerClass) => {


  return pickAFewRandomUniquely(["nothing", "nothing"], randInt(1, 2))
}