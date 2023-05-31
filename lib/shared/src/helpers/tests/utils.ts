import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);

export * from '@testing-library/react';
export * from 'vitest';
export * from '@testing-library/user-event';
