import { render } from '@testing-library/react';
import CoreUtils from './core-utils';

describe('CoreUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreUtils />);
    expect(baseElement).toBeTruthy();
  });
});
