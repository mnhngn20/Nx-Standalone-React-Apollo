import { Shared } from '../components';
import { expect, render, screen } from '../helpers/tests/utils';

describe('Shared test', () => {
  it('should render correctly', () => {
    render(<Shared />);

    expect(screen.getByText('Shared')).toBeInTheDocument();
  });
});
