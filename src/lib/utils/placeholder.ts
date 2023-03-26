export const listEmptyPlaceholder = (list: string[], placeholder?: string) => {
	const placeholderList = placeholder ? [placeholder] : [];
	return list && list.length >= 1 ? list : placeholderList;
};
