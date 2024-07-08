const flattenObject = (obj: Record<string, any>, prefix: string = '', res: Record<string, any> = {}): Record<string, any> => {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], `${prefix}${key}_`, res);
    } else {
      res[`${prefix}${key}`] = obj[key];
    }
  }
  return res;
};

const cloneObject = (obj: Record<string, any>): Record<string, any> => {
  return JSON.parse(JSON.stringify(obj))
}

export { flattenObject, cloneObject }
