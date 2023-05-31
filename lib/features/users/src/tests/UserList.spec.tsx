import { expect, render, screen } from '@lib/shared/helpers/tests/utils';
import { UserList } from '../components/UserList';

describe('User List component test', () => {
  it('should render correctly', () => {
    render(<UserList />);

    expect(screen.getByText('User List')).toBeInTheDocument();
  });
});
