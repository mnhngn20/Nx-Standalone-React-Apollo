import { render } from '@testing-library/react';
import LibShared from './lib-shared';

describe('LibShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibShared />);
    expect(baseElement).toBeTruthy();
  });
});
