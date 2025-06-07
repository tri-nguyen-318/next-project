import { getSession } from '@/lib/session';
import Board from './components/chess/Board';
import Sidebar from './components/Sidebar';

export default async function Page() {
  const session = await getSession();

  return (
    <div
      className='flex items-center justify-center gap-2'
      style={{
        height: 'calc(100vh - 40px)',
      }}
    >
      <div className='flex items-center justify-center flex-col gap-2 p-4'>
        {/* <Board /> */}
      </div>

      <Sidebar />
    </div>
  );
}
