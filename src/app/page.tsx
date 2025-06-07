import { getSession } from '@/lib/session';
import Sidebar from './components/Sidebar';

export default async function Page() {
  const _session = await getSession();

  return (
    <div
      data-testid='app-page'
      className='flex items-center justify-center gap-2'
      style={{
        height: 'calc(100vh - 40px)',
      }}
    >
      <div className='flex flex-col items-center justify-center gap-2 p-4' />
      <Sidebar />
    </div>
  );
}
