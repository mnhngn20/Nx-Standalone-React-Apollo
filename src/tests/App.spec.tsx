import App from '#/components/App';
import { expect, render, screen } from '@lib/shared/helpers/tests/utils';

describe('App test', () => {
  it('should render correctly', () => {
    render(<App />);

    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
