import { Shared } from '@lib/shared/components';
import { Post } from '@lib/features/posts/components';

export function PostList() {
  return (
    <>
      <div>Post List</div>
      <Shared />
      <Post />
    </>
  );
}

export default PostList;
