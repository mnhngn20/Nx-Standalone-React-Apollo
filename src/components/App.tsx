import { PostList } from '@lib/features/posts/components';
import { UserList } from '@lib/features/users/components';
import { Shared } from '@lib/shared/components';
import Welcome from './Welcome';

export default function App() {
  return (
    <>
      <Welcome />
      <Shared />
      <UserList />
      <PostList />
    </>
  );
}
