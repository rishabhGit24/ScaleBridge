import locales from '../config/locales.json';

export const getLocaleText = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], locales) || path;
};

export const getLocaleArray = (path) => {
  const result = getLocaleText(path);
  return Array.isArray(result) ? result : [];
};

export default { getLocaleText, getLocaleArray };
