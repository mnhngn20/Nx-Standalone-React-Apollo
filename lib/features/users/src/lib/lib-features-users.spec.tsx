import { render } from '@testing-library/react';
import LibFeaturesUsers from './lib-features-users';

describe('LibFeaturesUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibFeaturesUsers />);
    expect(baseElement).toBeTruthy();
  });
});
