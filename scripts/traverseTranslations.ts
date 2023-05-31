const keys: string[] = [];

type TranslationRecord = {
  [P in string]: string | TranslationRecord;
};

export const _traverseTranslations = (
  obj: TranslationRecord,
  path: string[],
) => {
  Object.keys(obj).forEach(key => {
    if (key.startsWith('_')) {
      return;
    }
    const objOrString = obj[key];
    if (typeof objOrString === 'string') {
      keys.push([...path, key].join('.'));
    } else {
      _traverseTranslations(objOrString, [...path, key]);
    }
  });
};

export const traverseTranslations = (translations: any) => {
  _traverseTranslations(translations, []);
  return keys;
};
