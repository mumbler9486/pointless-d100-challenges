
//Expects true percent as a number between 0-1
//Percent represents the expected times this random returns true
export const coinFlip = (truePercent?: number) => {
  if (!truePercent) return randInt(1, 2) == 1;

  const precision = 1000000;
  const threshold = truePercent * precision;

  return randInt(1, precision) <= threshold;
}

export const randInt = (min: number, max: number) => {
  //min and max inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const pickRandom = <TValue>(list: TValue[]) => {
  const index = randInt(0, list.length - 1);
  return list[index];
};

export const pickAFewRandomUniquely = <TValue>(list: TValue[], count: number) => {
  if (count == 0) {
    return [];
  }

  let listCopy = list.slice();
  const result = [];
  for (let i = 0; i < count; i++) {
    if (listCopy.length == 0) {
      return result;
    }
    const picking = pickRandom(listCopy);
    listCopy = listCopy.filter(x => x != picking);
    result.push(picking);
  }
  return result;
};