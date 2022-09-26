export const listEmptyPlaceholder = (list: string[]) => {
  return list && list.length > 1 ? list : ['None'];
};