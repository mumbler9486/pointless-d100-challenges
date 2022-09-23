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
  let listCopy = list.slice();
  const result = [];
  for (let i = 0; i < count; i++) {
    if (list.length == 0) {
      return result;
    }
    const picking = pickRandom(listCopy);
    listCopy = listCopy.filter(x => x != picking);
    result.push(picking);
  }
  return result;
};