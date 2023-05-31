import { expect, render, screen } from '@lib/shared/helpers/tests/utils';
import { PostList } from '../components/PostList';

describe('Post List component test', () => {
  it('should render correctly', () => {
    render(<PostList />);

    expect(screen.getByText('Post List')).toBeInTheDocument();
  });
});
