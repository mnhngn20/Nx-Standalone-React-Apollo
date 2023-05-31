import { vi, expect } from 'vitest';
import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

vi.mock('react-i18next', async () => {
  const originalModule: Record<string, string> = await vi.importActual(
    'react-i18next',
  );

  return {
    ['__esModule']: true,
    ...originalModule,
    useTranslation: () => ({
      i18n: {
        changeLanguage: () => new Promise(vi.fn()),
      },
      t: str => str,
    }),
  };
});
