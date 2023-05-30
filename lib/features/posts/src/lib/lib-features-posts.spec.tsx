import { render } from '@testing-library/react';
import LibFeaturesPosts from './lib-features-posts';

describe('LibFeaturesPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibFeaturesPosts />);
    expect(baseElement).toBeTruthy();
  });
});
