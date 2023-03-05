interface orderedArrayItem {
  [key: string]: string | number;
}

export default (
  data: Record<string, number>,
  mainKeyName: string,
  mainTotalKey: string
) => {
  const dataOrdered: any[] = [];
  for (const key in data) {
    const object: orderedArrayItem = {};
    object[mainKeyName] = key;
    object[mainTotalKey] = data[key];
    dataOrdered.push(object);
  }
  return dataOrdered;
};
