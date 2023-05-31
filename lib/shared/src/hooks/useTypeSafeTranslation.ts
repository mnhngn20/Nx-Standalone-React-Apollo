import type { TOptionsBase } from 'i18next';
import { useTranslation } from 'react-i18next';
import type { TranslationKeys } from '../generated/translationKeys';

const useTypeSafeTranslation = () => {
  const { t } = useTranslation();

  return {
    t: (
      s: TranslationKeys,
      f?: TOptionsBase & object & { defaultValue: string },
    ) => t(s, f ?? {}),
  };
};

export default useTypeSafeTranslation;
