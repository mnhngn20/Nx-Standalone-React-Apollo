import Features from '@nx/lib/features/components/Features';
import Shared from '@nx/lib/shared/components/Shared';
import Welcome from './Welcome';

export default function App() {
  return (
    <>
      <Welcome />
      <Shared />
      <Features />
    </>
  );
}
