import type { Dictionary } from '@enouvo/react-uikit';
import type { TranslationKeys } from '@nx-standalone/lib/generated/translationKeys';
import { useTranslation } from 'react-i18next';

const useTypeSafeTranslation = () => {
  const { t } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: Dictionary<string>) => t(s, f ?? {}),
  };
};

export default useTypeSafeTranslation;
