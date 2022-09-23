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

export const pickAFewRandom = <TValue>(list: TValue[], count: number) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(pickRandom(list));
  }
  return result;
};